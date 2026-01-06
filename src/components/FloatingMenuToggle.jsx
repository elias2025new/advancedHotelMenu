import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Wine } from 'lucide-react';

const FloatingMenuToggle = ({ currentMenu, onToggle }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 200px
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const isFood = currentMenu === 'food';
    const targetMenu = isFood ? 'Drinks' : 'Food';
    const Icon = isFood ? Wine : Utensils;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ duration: 0.2 }}
                    onClick={onToggle}
                    className="fixed bottom-6 left-6 z-[100] bg-hotel-dark text-white px-4 py-2 rounded-full shadow-xl hover:shadow-2xl hover:bg-black transition-all duration-300 flex items-center gap-2 border border-white/10 group"
                    aria-label={`Switch to ${targetMenu} Menu`}
                >
                    <Icon size={18} className="text-hotel-gold group-hover:rotate-12 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest hidden sm:block">
                        Go to {targetMenu}
                    </span>
                    {/* Mobile only icon/text simplified */}
                    <span className="text-xs font-black uppercase tracking-widest sm:hidden">
                        {targetMenu}
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingMenuToggle;
