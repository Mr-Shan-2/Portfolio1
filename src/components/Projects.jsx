import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Dice Game',
            desc: 'An interactive dice game built with HTML, CSS, and JavaScript..',
            tech: ['React', 'Tailwind', 'Framer Motion'],
            image: '/Dice game.png',
            link: 'https://your-dice-game-mr-shan-2-xu6p.vercel.app'
        },
    ];
    //     const projects = [
    //     {
    //         title: 'Dice Game',
    //         desc: 'An interactive dice game built with HTML, CSS, and JavaScript.',
    //         tech: ['React', 'Tailwind', 'Framer Motion'],
    //         image: 'public/Dice game.png',
    //         link: 'https://your-dice-game-mr-shan-2-xu6p.vercel.app', // ← Live game URL
    //     },
    // ];j

    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white mb-4"
                        >
                            Selected <span className="text-gradient">Projects</span>
                        </motion.h2>
                        <p className="text-slate-400 max-w-lg">
                            Building digital products that combine stunning aesthetics with seamless functionality.
                        </p>
                    </div>
                    <a href="#" className="text-primary hover:text-white transition-colors font-bold flex items-center gap-2">
                        View All Projects <ExternalLink size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 glass-morphism hover:border-primary/50 transition-all"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-100 h-46 object-cover group-hover:scale-110 transition-transform duration-400"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 line-clamp-2">
                                    {project.desc}
                                </p>
                                {/* <div className="flex items-center gap-4">
                                    <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-primary/20 hover:text-primary transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-primary/20 hover:text-primary transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div> */}
                                <div className="flex items-center gap-4">

                                    <a
                                        href="https://mr-shan-2-xu6p.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 text-white hover:bg-primary/20 hover:text-primary transition-all"
                                        aria-label="Play Dice Game"
                                    >
                                        <ExternalLink size={20} />
                                    </a>

                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
