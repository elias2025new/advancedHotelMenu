import React from 'react';

const ImportantInfo = () => {
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
                        If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.
                    </p>
                </div>

                <div className="pt-2 border-t border-amber-200">
                    <h4 className="text-sm font-bold text-hotel-dark">Swiss Inn Nexus Hotel</h4>
                    <p className="text-xs text-slate-600">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-2 border-t border-amber-200 space-y-1">
                    <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                        All prices include 10% service charge & 15% VAT
                    </p>
                    <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                        All prices are in Ethiopian Birr
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;
