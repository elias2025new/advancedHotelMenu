import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Header from './components/Header';
import ImportantInfo from './components/ImportantInfo';
import CategoryNav from './components/CategoryNav';
import FoodCard from './components/FoodCard';
import FoodModal from './components/FoodModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import DrinkOptionModal from './components/DrinkOptionModal';
import FloatingMenuToggle from './components/FloatingMenuToggle';
import { foodData, drinksData } from './data/menuData';

function App() {
  const [menuType, setMenuType] = useState('food'); // 'food' or 'drinks'
  const [language, setLanguage] = useState('en'); // 'en' or 'am'
  const [currentMenuData, setCurrentMenuData] = useState(foodData);
  const [activeCategory, setActiveCategory] = useState(foodData[0].id);
  const [selectedItem, setSelectedItem] = useState(null);
  const [optionItem, setOptionItem] = useState(null); // Item waiting for option selection
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const t = {
    food: language === 'en' ? 'Food Menu' : 'የምግብ ዝርዝር',
    drinks: language === 'en' ? 'Drinks Bar' : 'የመጠጥ ባር'
  };

  // Update current menu data and active category when menu type changes
  useEffect(() => {
    const newData = menuType === 'food' ? foodData : drinksData;
    setCurrentMenuData(newData);
    setActiveCategory(newData[0].id);
    window.scrollTo(0, 0);
  }, [menuType]);

  const addToCart = (item, variant = null, priceOverride = null) => {
    // If item has split price and no variant selected yet, open modal
    if (!variant && typeof item.price === 'string' && item.price.includes('/')) {
      setOptionItem(item);
      return;
    }

    const finalItem = variant
      ? { ...item, name: `${item.name} (${variant})`, price: priceOverride, id: `${item.name}-${variant}` }
      : item;

    setCartItems(prev => {
      const existing = prev.find(i => i.name === finalItem.name);
      if (existing) {
        return prev.map(i => i.name === finalItem.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...finalItem, quantity: 1 }];
    });
  };

  const handleOptionConfirm = (variant, price) => {
    if (optionItem) {
      addToCart(optionItem, variant, price);
      setOptionItem(null);
    }
  };

  const updateQuantity = (itemName, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.name === itemName) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => setCartItems([]);

  // Force scroll to top on refresh and handle image preloading
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = React.useCallback((id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // Offset for taller card-style sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Update active category on scroll (Throttled & Efficient)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusted to trigger earlier/better
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Robustly handle mounting timing with AnimatePresence (mode="wait")
    // We try to attach the observer multiple times to ensure we catch the elements once they mount
    let attempts = 0;
    const maxAttempts = 10;

    const attachObserver = () => {
      let allFound = true;
      currentMenuData.forEach((category) => {
        const element = document.getElementById(category.id);
        if (element) {
          observer.observe(element);
        } else {
          allFound = false;
        }
      });

      attempts++;
      // Continue retrying if not all elements found, or just to be safe in case of progressive rendering
      // Stop after 1.5 seconds (15 attempts * 100ms)
      if (attempts < maxAttempts) {
        timer = setTimeout(attachObserver, 100);
      }
    };

    // Initial delay to wait for exit animation (300ms)
    let timer = setTimeout(attachObserver, 350);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [currentMenuData]);

  return (
    <>
      <Layout>
        <CategoryNav
          categories={currentMenuData}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          language={language}
          setLanguage={setLanguage}
        />

        <div className="pt-[172px]">
          <Header language={language} />
        </div>

        <ImportantInfo language={language} />

        <main className="px-4 py-4 flex-grow">
          {/* Menu Type Toggle */}
          <div className="flex justify-center mb-10 sticky top-[172px] z-30 py-2 gap-4">
            <button
              onClick={() => setMenuType('food')}
              className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg ${menuType === 'food'
                ? 'bg-hotel-gold text-white transform scale-105'
                : 'bg-white text-slate-500 hover:text-hotel-gold'
                }`}
            >
              {t.food}
            </button>
            <button
              onClick={() => setMenuType('drinks')}
              className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg ${menuType === 'drinks'
                ? 'bg-hotel-gold text-white transform scale-105'
                : 'bg-white text-slate-500 hover:text-hotel-gold'
                }`}
            >
              {t.drinks}
            </button>
          </div>


          <AnimatePresence mode="wait">
            <motion.div
              key={menuType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentMenuData.map((category) => (
                <section key={category.id} id={category.id} className="mb-14 text-center scroll-mt-48">
                  <div className="inline-flex flex-col items-center mb-8">
                    {/* Top Red Line */}
                    <div className="w-16 h-1 bg-red-600 mb-1"></div>

                    {/* Main Title */}
                    <h2 className="text-3xl font-black text-black uppercase tracking-widest leading-none">
                      {language === 'am' && category.title_am ? category.title_am : category.title}
                    </h2>

                    {/* Subtitle */}
                    {category.subtitle && (
                      <div className="relative mt-1">
                        <div
                          className={`px-3 py-0.5 text-xs font-bold uppercase tracking-wider transform -skew-x-12 relative z-10 ${category.subtitleColor ? '' : 'bg-black text-white'
                            }`}
                          style={category.subtitleColor ? { color: category.subtitleColor, backgroundColor: 'transparent', fontSize: '1.25rem', fontWeight: 900 } : {}}
                        >
                          <span className="block transform skew-x-12">
                            {language === 'am' && category.subtitle_am ? category.subtitle_am : category.subtitle}
                          </span>
                        </div>
                        {/* Red line under subtitle connecting to main - Hide if custom color (Sandwiches) */}
                        {!category.subtitleColor && (
                          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-600 -z-0"></div>
                        )}
                      </div>
                    )}

                    {/* Bottom Red Line if no subtitle */}
                    {!category.subtitle && (
                      <div className="w-16 h-1 bg-red-600 mt-1"></div>
                    )}
                  </div>
                  {category.description && (
                    <p className="text-sm text-slate-600 mb-6 italic opacity-90 max-w-[85%] mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-left">
                    {category.items.map((item, index) => (
                      <FoodCard
                        key={`${category.id}-${index}`}
                        item={item}
                        onClick={setSelectedItem}
                        onAddToCart={addToCart}
                        language={language}
                      />
                    ))}
                  </div>

                  {/* Divider Line between sections */}
                  <div className="mt-12 mb-6 border-b-2 border-slate-100 opacity-60 rounded-full mx-4"></div>
                </section>
              ))}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />

        <FoodModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          language={language}
        />

        <DrinkOptionModal
          item={optionItem}
          onClose={() => setOptionItem(null)}
          onConfirm={handleOptionConfirm}
          language={language}
        />

        <ScrollToTop />
        <CartButton
          itemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onClick={() => setIsCartOpen(true)}
        />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onClearCart={clearCart}
          language={language}
        />

        <FloatingMenuToggle
          currentMenu={menuType}
          onToggle={() => setMenuType(prev => prev === 'food' ? 'drinks' : 'food')}
        />
      </Layout>
    </>
  );
}

export default App;
