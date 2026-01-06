import React from 'react';

const Footer = () => {
    return (
        <footer className="px-6 py-10 bg-hotel-light border-t border-gray-200 mt-auto">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold text-hotel-dark mb-2">Room Service Available 24/7</h3>
                    <p className="text-sm text-hotel-muted leading-relaxed">
                        If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.
                    </p>
                </div>

                <div>
                    <h4 className="text-base font-bold text-hotel-dark">Swiss Inn Nexus Hotel</h4>
                    <p className="text-sm text-hotel-muted">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-4 border-t border-gray-300 space-y-1">
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        All prices include 10% service charge & 15% VAT
                    </p>
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        All prices are in Ethiopian Birr
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
