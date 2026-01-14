import React from 'react';
import { Send, Globe, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

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
        <footer className="px-6 py-8 bg-[#800000] border-t border-red-900/20 mt-2">
            <div className="max-w-md mx-auto">
                {/* Contact Box */}
                <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-6 border border-white/10 shadow-xl">
                    <h3 className="text-center text-white font-black uppercase tracking-widest text-[10px] mb-6 opacity-60">
                        {t.contactUs}
                    </h3>

                    <div className="flex flex-col gap-3">
                        {/* Phone Number Area */}
                        <div className="flex items-center gap-4 bg-white/10 py-4 px-6 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform">
                                <Phone size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Call for support</span>
                                <a href="tel:+251116670067" className="text-base font-black text-white tracking-tight">
                                    +251 116 670 067
                                </a>
                            </div>
                        </div>

                        {/* Website Area */}
                        <div className="flex items-center gap-4 bg-white/10 py-4 px-6 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform">
                                <Globe size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Website</span>
                                <a href="https://www.nexusaddis.net/" target="_blank" rel="noopener noreferrer" className="text-base font-black text-white tracking-tight lowercase">
                                    nexusaddis.net
                                </a>
                            </div>
                        </div>

                        {/* Location Area */}
                        <div className="flex items-center gap-4 bg-white/10 py-4 px-6 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform">
                                <MapPin size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Location</span>
                                <span className="text-sm font-black text-white tracking-tight">
                                    Gerji Mebrathaile Street
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <h3 className="text-white/40 font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/swissinnnexus" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877F2] rounded-[1.25rem] flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Facebook size={24} className="text-white" strokeWidth={2} />
                                </a>

                                <a href="https://www.instagram.com/swissinnnexus/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-[1.25rem] flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Instagram size={24} className="text-white" strokeWidth={2} />
                                </a>

                                <a href="https://www.tiktok.com/@swiss_inn_nexus_hotel" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black rounded-[1.25rem] flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                </a>

                                <a href="https://t.me/swissinn" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#26A5E4] rounded-[1.25rem] flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Send size={24} className="text-white -ml-0.5" strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                        © {new Date().getFullYear()} SWISS INN Nexus Hotel
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
