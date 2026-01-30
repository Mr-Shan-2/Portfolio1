import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formState);
        alert('Thank you for reaching out! This is a demo form.');
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Let's <span className="text-gradient">Connect</span>
                    </motion.h2>
                    <p className="text-slate-400">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">Email Me</h4>
                                <p className="text-slate-400">hello@mrshan.dev</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-secondary/10 text-secondary">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">Call Me</h4>
                                <p className="text-slate-400">+92321-7072442 </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">Location</h4>
                                <p className="text-slate-400">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="p-8 rounded-3xl border border-white/10 glass-morphism space-y-6"
                    >
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors"
                                placeholder="Your Name"
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors"
                                placeholder="your@email.com"
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                            <textarea
                                required
                                rows="4"
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                                placeholder="How can I help you?"
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
