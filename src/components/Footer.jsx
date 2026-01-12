import React from 'react';

const Footer = ({ language }) => {
    const t = {
        roomService: {
            en: 'Room Service Available 24/7',
            am: 'የክፍል አገልግሎት 24/7 ይገኛል',
            zh: '客房服务 全天候提供',
            ar: 'خدمة الغرف متاحة على مدار الساعة',
            fr: 'Service d\'étage disponible 24/7'
        }[language] || 'Room Service Available 24/7',
        allergy: {
            en: 'If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.',
            am: 'እርሶ ወይም ከእርሶ ጋር ያለ ሰው የአለርጂ ችግር ካለባችሁ እባክዎን አስተናጋጁን ያሳውቁ እና ሼፎቻችን የእርስዎን ፍላጎት ለማሟላት ደስተኞች ይሆናሉ።',
            zh: '如果您或您的任何客人有过敏或饮食限制，请告知您的服务员，我们的厨师将很乐意满足您的需求。',
            ar: 'إذا كنت أنت أو أي من ضيوفك تعانون من حساسية أو قيود غذائية، يرجى إبلاغ النادل وسيسعد طهاتنا بتلبية احتياجاتك.',
            fr: 'Si vous ou l\'un de vos invités avez une allergie ou une restriction alimentaire, veuillez en informer votre serveur et nos chefs se feront un plaisir de répondre à vos besoins.'
        }[language] || 'If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.',
        vat: {
            en: 'All prices include 10% service charge & 15% VAT',
            am: 'ሁሉም ዋጋዎች 10% የአገልግሎት ክፍያ እና 15% የተጨማሪ እሴት ታክስ ያካተቱ ናቸው።',
            zh: '所有价格均包含10%的服务费和15%的增值税',
            ar: 'جميع الأسعار تشمل 10% رسوم خدمة و15% ضريبة القيمة المضافة',
            fr: 'Tous les prix incluent 10% de frais de service et 15% de TVA'
        }[language] || 'All prices include 10% service charge & 15% VAT',
        currency: {
            en: 'All prices are in Ethiopian Birr',
            am: 'ሁሉም ዋጋዎች በኢትዮጵያ ብር ናቸው።',
            zh: '所有价格均以埃塞俄比亚比尔计价',
            ar: 'جميع الأسعار بالبير الإثيوبي',
            fr: 'Tous les prix sont en Birr éthiopien'
        }[language] || 'All prices are in Ethiopian Birr'
    };

    return (
        <footer className="px-6 py-10 bg-hotel-light border-t border-gray-200 mt-auto">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold text-hotel-dark mb-2">{t.roomService}</h3>
                    <p className="text-sm text-hotel-muted leading-relaxed">
                        {t.allergy}
                    </p>
                </div>

                <div>
                    <h4 className="text-base font-bold text-hotel-dark">Swiss Inn Nexus Hotel</h4>
                    <p className="text-sm text-hotel-muted">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-4 border-t border-gray-300 space-y-1">
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        {t.vat}
                    </p>
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        {t.currency}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
