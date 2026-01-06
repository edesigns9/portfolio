"use client";

import { motion } from "framer-motion";

export function BioSnippet() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-500 uppercase tracking-widest">
                        The Vision
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                        I believe design is most powerful when it’s <span className="font-serif italic italic-gradient">invisible</span>—solved problems that feel like they were never there.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5"
                >
                    <p className="text-xl text-zinc-500 leading-relaxed border-l border-indigo-500/30 pl-8 py-2">
                        My work lives at the intersection of <span className="text-zinc-200">logic</span> and <span className="text-zinc-200">emotion</span>. I help brands bridge the gap between complex tech and human connection through thoughtful, high-fidelity design.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
