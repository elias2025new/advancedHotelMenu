import React from 'react';
import { Send, Globe, Phone } from 'lucide-react';

const Footer = ({ language }) => {
    const t = {
        description: {
            en: 'Welcome to our digital menu. Explore our wide variety of food and drinks, designed to give you the best dining experience at SWISS INN Nexus Hotel.',
            am: 'ወደ ዲጂታል ሜኑአችን እንኳን ደህና መጡ። በስዊዝ ኢን ኔክሰስ ሆቴል ምርጥ የምግብ ልምድ እንዲኖርዎት ታስበው የተዘጋጁትን የተለያዩ የምግብ እና የመጠጥ አይነቶችን ይመርምሩ።',
            zh: '欢迎使用我们的数字菜单。探索我们为您精心准备的各种美食和饮料，旨在为您提供瑞斯酒店最佳的用餐体验。',
            ar: 'مرحباً بكم في قائمة الطعام الرقمية الخاصة بنا. استكشف مجموعتنا المتنوعة من المأكولات والمشروبات، المصممة خصيصاً لتوفر لك أفضل تجربة طعام في فندق سويس إن نكسوس.',
            fr: 'Bienvenue sur notre menu numérique. Découvrez notre grande variété de plats et de boissons, conçus pour vous offrir la meilleure expérience culinaire au SWISS INN Nexus Hotel.'
        }[language] || 'Welcome to our digital menu. Explore our wide variety of food and drinks, designed to give you the best dining experience at SWISS INN Nexus Hotel.',
        contactUs: {
            en: 'Contact Us',
            am: 'ያግኙን',
            zh: '联系我们',
            ar: 'اتصل بنا',
            fr: 'Contactez-nous'
        }[language] || 'Contact Us'
    };

    return (
        <footer className="px-6 py-12 bg-white border-t border-gray-100 mt-10">
            <div className="max-w-md mx-auto">
                {/* Description */}
                <div className="text-center mb-10">
                    <div className="w-12 h-1 bg-hotel-gold mx-auto mb-6 rounded-full opacity-50"></div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                        "{t.description}"
                    </p>
                </div>

                {/* Social & Contact Box */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <h3 className="text-center text-hotel-dark font-black uppercase tracking-widest text-xs mb-8 opacity-60">
                        {t.contactUs}
                    </h3>

                    <div className="flex flex-col gap-6">
                        {/* Phone Number Area */}
                        <div className="flex items-center justify-center gap-4 bg-white py-4 px-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-hotel-gold transition-colors">
                            <div className="bg-hotel-gold/10 p-2.5 rounded-xl text-hotel-gold group-hover:bg-hotel-gold group-hover:text-white transition-all">
                                <Phone size={20} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 leading-none mb-1">Call for support</span>
                                <a href="tel:+251116670101" className="text-lg font-black text-hotel-dark tracking-tight hover:text-hotel-gold transition-colors">
                                    +251 116 670 101
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <a href="https://t.me/swissinn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-hotel-gold transition-all group">
                                <div className="text-slate-400 group-hover:text-hotel-gold transition-colors">
                                    <Send size={24} strokeWidth={2} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Telegram</span>
                            </a>

                            <a href="#" className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-hotel-gold transition-all group">
                                <div className="text-slate-400 group-hover:text-hotel-gold transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">TikTok</span>
                            </a>

                            <a href="https://swissinnnexus.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-hotel-gold transition-all group">
                                <div className="text-slate-400 group-hover:text-hotel-gold transition-colors">
                                    <Globe size={24} strokeWidth={2} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Website</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                        © {new Date().getFullYear()} SWISS INN Nexus Hotel
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
