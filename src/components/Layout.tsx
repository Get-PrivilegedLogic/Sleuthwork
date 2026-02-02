import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
    children: React.ReactNode;
    maxWidth?: '4xl' | '5xl' | '6xl';
}

export const Layout: React.FC<LayoutProps> = ({ children, maxWidth = '4xl' }) => {
    const maxWidthClass = {
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
    }[maxWidth];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen transition-colors duration-500 bg-transparent text-slate-900 dark:text-white"
        >
            {/* Persistent Theme Toggle */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            <div className={`${maxWidthClass} mx-auto px-4 py-8 md:py-12 relative z-10`}>
                {children}
            </div>

            {/* Persistent Background Decorations (Optional, can be tailored per page if needed) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
        </motion.div>
    );
};
