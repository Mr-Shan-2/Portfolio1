
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/Mr-Shan-2", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/https://www.linkedin.com/in/shan-ali", label: "LinkedIn" }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Picture in Circular Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <img
                            src="/profile.png"
                            alt="Mr Shan Profile"
                            className="w-[170px] h-[170px] rounded-full mx-auto object-cover border-4 border-primary/30 shadow-xl shadow-primary/20"
                            style={{ objectPosition: 'center -4px' }}
                        />
                    </motion.div>

                    <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 inline-block">
                        Welcome to my personal workspace
                    </span>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Mr Shan</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I’m a beginner <span className="text-white font-medium">Frontend Developer</span> learning to build user-friendly projects using HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                        >
                            View Projects
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 glass-morphism text-white font-semibold text-lg hover:bg-white/5 transition-colors"
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon; // Capital letter required
                            return (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -5, color: '#6366f1' }}
                                    href={social.href}
                                    className="text-slate-500 transition-colors p-2"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={28} />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Scroll Down</span>
                <div className="w-1 h-12 rounded-full bg-slate-800 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 40, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

