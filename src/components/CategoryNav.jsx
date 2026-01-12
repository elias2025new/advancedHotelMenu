import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryNav = ({ categories, activeCategory, onCategoryClick, language, setLanguage }) => {
    const scrollRef = useRef(null);
    const buttonRefs = useRef({});
    const [showLeftIndicator, setShowLeftIndicator] = useState(false);
    const [showRightIndicator, setShowRightIndicator] = useState(true);
    const [showScrollHint, setShowScrollHint] = useState(false);

    const t = {
        title: language === 'en' ? 'Nexus Hotel Menu' : 'የኔክሰስ ሆቴል ዝርዝር',
        swipe: language === 'en' ? '← Swipe for more →' : '← ለተጨማሪ ያንሸራትቱ →'
    };

    useEffect(() => {
        // ... (rest of the component)
        // Show hint after header animation finishes (wait 2.5s)
        const showTimer = setTimeout(() => {
            setShowScrollHint(true);
        }, 2500);

        // Hide hint 5 seconds after showing (2.5s + 5s = 7.5s)
        const hideTimer = setTimeout(() => {
            setShowScrollHint(false);
        }, 7500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    // Auto-scroll active category into view
    useEffect(() => {
        if (scrollRef.current && buttonRefs.current[activeCategory]) {
            const container = scrollRef.current;
            const activeButton = buttonRefs.current[activeCategory];

            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();

            // Scroll the active button into the center of the container
            const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2);
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeCategory]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (scrollRef.current) {
                        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                        setShowLeftIndicator(scrollLeft > 10);
                        setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial check
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 max-w-[430px] mx-auto shadow-sm">
            {/* New Title Bar */}
            <div className="bg-white px-6 py-2.5 relative flex items-center border-b border-gray-50 min-h-[44px]">
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-hotel-dark font-black uppercase tracking-[0.15em] text-[11px] whitespace-nowrap">
                        {t.title}
                    </span>
                    <div className="w-6 h-0.5 bg-hotel-gold mt-0.5 rounded-full opacity-80"></div>
                </div>
                <div className="ml-auto relative z-10">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-slate-50 text-hotel-dark text-[10px] font-bold uppercase py-1.5 px-2 rounded border border-slate-200 focus:outline-none transition-all cursor-pointer shadow-sm"
                    >
                        <option value="en" className="text-black">EN</option>
                        <option value="am" className="text-black">AMH</option>
                    </select>
                </div>
            </div>

            <div className="relative pt-6 pb-4">
                {/* Left scroll indicator */}
                <AnimatePresence>
                    {showLeftIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-0 top-6 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start pl-1 pointer-events-none"
                        >
                            <ChevronLeft size={20} className="text-hotel-gold" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right scroll indicator */}
                <AnimatePresence>
                    {showRightIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute right-0 top-6 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none"
                        >
                            <ChevronRight size={20} className="text-hotel-gold" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll hint text */}
                <AnimatePresence>
                    {showScrollHint && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundColor: '#2D5A27',
                                color: '#ffffff',
                                zIndex: 100
                            }}
                            className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap uppercase font-bold text-[10px] tracking-widest text-center"
                        >
                            ← Swipe for more →
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar px-6 space-x-4 scroll-smooth"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            ref={(el) => (buttonRefs.current[category.id] = el)}
                            onClick={() => onCategoryClick(category.id)}
                            className={`
                                flex-shrink-0 w-28 flex flex-col items-center gap-2 pb-2 transition-all duration-300
                                ${activeCategory === category.id
                                    ? 'opacity-100'
                                    : 'opacity-80'
                                }
                            `}
                        >
                            <div className={`
                                w-24 h-24 rounded-[2.2rem] overflow-hidden transition-all duration-500 p-1.5
                                ${activeCategory === category.id
                                    ? 'shadow-[0_15px_30px_-8px_rgba(0,0,0,0.1)] scale-110 -translate-y-2'
                                    : 'bg-white shadow-sm opacity-90'
                                }
                            `}>
                                <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-100">
                                    <img
                                        src={category.navImage || category.headerImage || category.items[0]?.image || '/images/default_category.jpg'}
                                        alt={category.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <span className={`
                                text-[11px] font-extrabold text-center leading-tight transition-colors duration-300 px-1 uppercase tracking-tight
                                ${activeCategory === category.id
                                    ? 'text-hotel-gold font-black'
                                    : 'text-hotel-dark'
                                }
                            `}>
                                {language === 'am' && category.title_am ? category.title_am : category.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
