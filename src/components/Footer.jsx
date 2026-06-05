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
        <footer className="px-6 py-4 bg-[#800000] border-t border-red-900/20 mt-1">
            <div className="max-w-md mx-auto">
                {/* Contact Box */}
                <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-4 border border-white/10 shadow-xl">
                    <h3 className="text-center text-white font-black uppercase tracking-widest text-[9px] mb-4 opacity-60">
                        {t.contactUs}
                    </h3>

                    <div className="flex flex-col gap-2.5">
                        {/* Phone Number Area */}
                        <div className="flex items-center gap-3 bg-white/10 py-2.5 px-4 rounded-xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                                <Phone size={16} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[8px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Call for support</span>
                                <a href="tel:+251116670067" className="text-[12px] font-black text-white tracking-tighter whitespace-nowrap">
                                    +251 116 670 067 / +251 935 979 797
                                </a>
                            </div>
                        </div>

                        {/* Website Area */}
                        <div className="flex items-center gap-3 bg-white/10 py-2.5 px-4 rounded-xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                                <Globe size={16} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Website</span>
                                <a href="https://www.nexusaddis.net/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-black text-white tracking-tight lowercase">
                                    nexusaddis.net
                                </a>
                            </div>
                        </div>

                        {/* Location Area */}
                        <div className="flex items-center gap-3 bg-white/10 py-2.5 px-4 rounded-xl border border-white/10 group hover:bg-white/20 transition-all">
                            <div className="bg-white/20 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                                <MapPin size={16} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black uppercase tracking-tighter text-white/50 leading-none mb-1">Location</span>
                                <span className="text-xs font-black text-white tracking-tight">
                                    Gerji Mebrathaile Street
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-3">
                            <h3 className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/swissinnnexus" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1877F2] rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Facebook size={20} className="text-white" strokeWidth={2} />
                                </a>

                                <a href="https://www.instagram.com/swissinnnexus/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Instagram size={20} className="text-white" strokeWidth={2} />
                                </a>

                                <a href="https://www.tiktok.com/@swiss_inn_nexus_hotel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                </a>

                                <a href="https://t.me/swissinn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#26A5E4] rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/5">
                                    <Send size={20} className="text-white -ml-0.5" strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center px-4">
                    <p className="text-[9px] font-bold text-white/40 leading-relaxed max-w-[280px] mx-auto">
                        {language === 'am' ? <>ሁሉም ዋጋዎች 10% የአገልግሎት ክፍያ እና 15% ቫትን ያካትታሉ። <br /> ሁሉም ዋጋዎች በኢትዮጵያ ብር ናቸው።</> :
                            language === 'ar' ? <>جميع الأسعار تشمل 10٪ رسوم الخدمة و 15٪ ضريبة القيمة المضافة. <br /> جميع الأسعار بالبير الإثيوبي.</> :
                                language === 'zh' ? <>所有价格已包含10%服务费和15%增值税。 <br /> 所有价格均以埃塞俄比亚比尔计价。</> :
                                    language === 'fr' ? <>Tous les prix incluent 10% de frais de service et 15% de TVA. <br /> Tous les prix sont en Birr éthiopien.</> :
                                        <>All prices include 10% service charge & 15% VAT. <br /> All prices are in Ethiopian Birr</>}
                    </p>
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20 mt-3">
                        © {new Date().getFullYear()} SWISS INN Nexus Hotel
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
