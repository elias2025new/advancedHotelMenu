import React from 'react';

const ImportantInfo = ({ language }) => {
    const t = {
        allergy: language === 'am'
            ? 'እርሶ ወይም ከእርሶ ጋር ያለ ሰው የአለርጂ ችግር ካለባችሁ እባክዎን አስተናጋጁን ያሳውቁ እና ሼፎቻችን የእርስዎን ፍላጎት ለማሟላት ደስተኞች ይሆናሉ።'
            : 'If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.',
        vat: language === 'am'
            ? 'ሁሉም ዋጋዎች 10% የአገልግሎት ክፍያ እና 15% የተጨማሪ እሴት ታክስ ያካተቱ ናቸው።'
            : 'All prices include 10% service charge & 15% VAT',
        currency: language === 'am'
            ? 'ሁሉም ዋጋዎች በኢትዮጵያ ብር ናቸው።'
            : 'All prices are in Ethiopian Birr'
    };

    return (
        <div className="px-6 py-4 bg-amber-50 border-l-4 border-hotel-gold mx-4 rounded-r-lg shadow-sm">
            <div className="space-y-3">
                <div>
                    <div className="mb-4 flex justify-center">
                        <img
                            src="/images/alacarte_header.png"
                            alt="Alacarte Menu"
                            className="h-28 w-auto object-contain mix-blend-multiply"
                        />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {t.allergy}
                    </p>
                </div>

                <div className="pt-2 border-t border-amber-200">
                    <h4 className="text-sm font-bold text-hotel-dark">Swiss Inn Nexus Hotel</h4>
                    <p className="text-xs text-slate-600">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-2 border-t border-amber-200 space-y-1">
                    <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                        {t.vat}
                    </p>
                    <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                        {t.currency}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;
