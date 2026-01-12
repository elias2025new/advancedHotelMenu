import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Plus, Check } from 'lucide-react';

const FoodCard = memo(({ item, onClick, onAddToCart, language }) => {
    const itemName = language === 'am' && item.name_am ? item.name_am : item.name;
    const itemDescription = language === 'am' && item.description_am ? item.description_am : item.description;
    const addLabel = language === 'am' ? "ጨምር" : "Add";
    const addedLabel = language === 'am' ? "ተጨምሯል" : "Added";

    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = (e) => {
        e.stopPropagation();
        onAddToCart(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1500);
    };

    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(item)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm flex p-2 gap-2 cursor-pointer active:bg-slate-50 transition-colors relative h-full"
        >
            {/* Food Image on Left - Only show if image exists */}
            {item.image && (
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-hotel-light">
                    <img
                        src={item.image}
                        alt={itemName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Content on Right */}
            <div className="flex flex-col justify-between py-0.5 flex-1">
                <div>
                    <h3 className="text-lg font-extrabold text-hotel-dark leading-tight mb-1">
                        {itemName}
                    </h3>

                    <div className="mb-2">
                        <span className="text-hotel-dark text-sm font-bold border-b-2 border-red-600 pb-0.5">
                            {item.price.includes('/') ? (
                                <>
                                    {item.price.split('/')[0]} <span className="text-xs text-slate-400 font-normal">Bottle</span> / {item.price.split('/')[1]} <span className="text-xs text-hotel-dark font-bold">SHOT</span>
                                </>
                            ) : (
                                <>{item.price} ETB</>
                            )}
                        </span>
                    </div>

                    {itemDescription && (
                        <div className="text-slate-600 text-[13px] leading-relaxed font-medium">
                            {(() => {
                                const words = itemDescription.split(' ');
                                if (words.length > 10) {
                                    return (
                                        <>
                                            {words.slice(0, 10).join(' ')}...
                                        </>
                                    );
                                }
                                return itemDescription;
                            })()}
                        </div>
                    )}
                </div>

                <div className="mt-2 flex justify-between items-end">
                    {item.description && item.description.split(' ').length > 10 ? (
                        <div className="text-hotel-gold font-bold text-xs uppercase tracking-wide">
                            See more
                        </div>
                    ) : (
                        <div></div>
                    )}

                    {/* Add Button - Integrated at bottom */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAdd}
                        className={`px-3 py-1 rounded-lg flex items-center gap-1 transition-all shadow-sm ${isAdded
                            ? 'bg-green-600 text-white'
                            : 'bg-hotel-gold/10 text-hotel-gold hover:bg-hotel-gold hover:text-white'
                            }`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isAdded ? (
                                <motion.div
                                    key="added"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-1"
                                >
                                    <Check size={12} strokeWidth={3} />
                                    <span className="text-[10px] font-black uppercase leading-none">Added</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="add"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-1"
                                >
                                    <Plus size={12} />
                                    <span className="text-[10px] font-black uppercase leading-none">Add</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
});

FoodCard.displayName = 'FoodCard';

export default FoodCard;
