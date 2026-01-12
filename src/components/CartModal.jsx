import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartModal = ({ isOpen, onClose, items, onUpdateQuantity, onClearCart, language }) => {
    const t = {
        title: language === 'am' ? 'የእኔ ትዕዛዝ' : 'My Order',
        empty: language === 'am' ? 'ቅርጫትዎ ባዶ ነው' : 'Your order is empty',
        total: language === 'am' ? 'ጠቅላላ ዋጋ' : 'Total Amount',
        clear: language === 'am' ? 'ሰርዝ' : 'Clear',
        orderMore: language === 'am' ? 'ተጨማሪ እዘዝ' : 'Order More',
        itemsSelected: language === 'am' ? 'የተመረጡ' : 'Items Selected',
        itemSelected: language === 'am' ? 'የተመረጠ' : 'Item Selected'
    };
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const total = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/,/g, ''));
        return acc + (price * item.quantity);
    }, 0);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-sm w-full relative max-h-[90vh] flex flex-col"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-black text-hotel-dark uppercase tracking-wide">{t.title}</h2>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                                {items.length} {items.length === 1 ? t.itemSelected : t.itemsSelected}
                            </p>
                        </div>
                        <button onClick={onClose} className="p-2 bg-slate-50 rounded-full text-hotel-dark">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-grow overflow-y-auto p-6 no-scrollbar">
                        {items.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShoppingBag size={24} className="text-slate-300" />
                                </div>
                                <p className="text-slate-400 font-bold uppercase tracking-wider text-sm">{t.empty}</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-center">
                                        <div className="flex-grow">
                                            <h3 className="text-sm font-black text-hotel-dark uppercase leading-tight">
                                                {language === 'am' && item.name_am ? item.name_am : item.name}
                                            </h3>
                                            <p className="text-hotel-gold text-xs font-bold mt-1">{item.price} ETB</p>
                                        </div>
                                        <div className="flex items-center bg-slate-50 rounded-full p-1 border border-slate-100">
                                            <button
                                                onClick={() => onUpdateQuantity(item.name, -1)}
                                                className="w-7 h-7 flex items-center justify-center text-hotel-dark hover:bg-white rounded-full transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-black text-hotel-dark leading-none">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.name, 1)}
                                                className="w-7 h-7 flex items-center justify-center text-hotel-dark hover:bg-white rounded-full transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                            <div className="flex justify-between items-end mb-6">
                                <span className="text-xs text-slate-400 font-black uppercase tracking-widest">{t.total}</span>
                                <div className="text-right">
                                    <span className="text-2xl font-black text-hotel-gold">
                                        {total.toLocaleString()}
                                        <span className="text-sm ml-1">ETB</span>
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={onClearCart}
                                    className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-slate-200 rounded-2xl text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                                >
                                    <Trash2 size={14} /> {t.clear}
                                </button>
                                <button
                                    onClick={onClose}
                                    className="py-3.5 px-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-red-200"
                                >
                                    {t.orderMore}
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CartModal;
