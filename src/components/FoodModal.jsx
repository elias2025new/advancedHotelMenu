import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FoodModal = ({ item, onClose, language }) => {
    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [item]);

    if (!item) return null;

    const itemName = language === 'am' && item.name_am ? item.name_am : item.name;
    const itemDescription = language === 'am' && item.description_am ? item.description_am : item.description;
    const addLabel = language === 'am' ? "ወደ ቅርጫት ጨምር" : "Add to Cart";

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md will-change-[opacity,backdrop-filter]"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-sm w-full relative max-h-[90vh] overflow-y-auto no-scrollbar will-change-transform"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-hotel-dark hover:bg-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Big Image - Only show if image exists */}
                    {item.image && (
                        <div className="w-full aspect-square overflow-hidden bg-hotel-light">
                            <img
                                src={item.image}
                                alt={itemName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                        <div className="mb-4">
                            <h2 className="text-xl font-black text-hotel-dark leading-tight">
                                {itemName}
                            </h2>
                        </div>

                        {itemDescription && (
                            <div className="mb-8">
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {itemDescription}
                                </p>
                            </div>
                        )}

                        <div className="mt-auto space-y-4">
                            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                <span className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Price</span>
                                <span className="text-hotel-dark text-2xl font-black border-b-2 border-red-600 pb-1">
                                    {item.price} <span className="text-sm">ETB</span>
                                </span>
                            </div>

                            <p className="text-center italic text-[11px] text-slate-400">
                                Prices include taxes and service charge
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>);
};

export default FoodModal;
