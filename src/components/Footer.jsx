import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Mr <span className="text-gradient">Shan</span>
                        </span>
                        <p className="text-slate-500 mt-2 max-w-xs text-sm">
                            Designing and coding beautiful things, one pixel at a time.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {[Github, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} Mr Shan. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-accent fill-accent" /> by Mr Shan
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
