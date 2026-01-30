import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Terminal, Zap, Code } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            name: 'HTML5',
            icon: <Layout className="text-orange-500" />,
           
        },
        {
            name: 'CSS3',
            icon: <Palette className="text-blue-500" />,
          
        },
        {
            name: 'JavaScript',
            icon: <Terminal className="text-yellow-500" />,
          
        },
        {
            name: 'Tailwind CSS',
            icon: <Zap className="text-cyan-400" />,
          
        },
        {
            name: 'React.js',
            icon: <Code className="text-sky-400" />,
            level: 'Framework',
         
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        My <span className="text-gradient">Skill Set</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                    I’m a beginner web developer learning to build projects using HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-white/10 glass-morphism hover:border-primary/50 transition-all group"
                        >
                            <div className="p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform">
                                {React.cloneElement(skill.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                {skill.level}
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
