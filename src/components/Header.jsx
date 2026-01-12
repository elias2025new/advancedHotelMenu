import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ language }) => {
    const text = language === 'en' ? "Welcome" : "እንኳን ደህና መጡ";
    const subtext = language === 'en' ? "SWISS INN NEXUS HOTEL ADDIS ABABA" : "ስዊዝ ኢን ኔክሰስ ሆቴል አዲስ አበባ";

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <header className="px-6 pt-12 pb-6">
            <motion.h1
                key={language}
                className="text-3xl font-bold text-hotel-dark tracking-tight flex"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-slate-500 text-sm mt-1"
            >
                {subtext}
            </motion.p>
        </header>
    );
};

export default Header;
