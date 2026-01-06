"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Figma,
    Code2,
    Terminal,
    Heart,
    Zap,
    Search,
    Framer,
    Workflow,
    Sparkles
} from "lucide-react";

export function About() {
    const tools = [
        { icon: <Figma className="w-6 h-6" />, name: "Figma" },
        { icon: <Workflow className="w-6 h-6" />, name: "Miro" },
        { icon: <Sparkles className="w-6 h-6" />, name: "Lovable" },
        { icon: <Terminal className="w-6 h-6" />, name: "Antigravity" },
        { icon: <Framer className="w-6 h-6" />, name: "Framer" },
        { icon: <Code2 className="w-6 h-6" />, name: "VS Code" },
    ];

    const values = [
        { icon: <Search className="w-5 h-5" />, title: "Clarity", desc: "Every design decision should make the user's journey clearer." },
        { icon: <Heart className="w-5 h-5" />, title: "Empathy", desc: "Understanding users deeply to create solutions that serve needs." },
        { icon: <Zap className="w-5 h-5" />, title: "Craft", desc: "Obsessing over details because they make the difference." },
    ];

    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto space-y-32">

            {/* 1. Introduction Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 order-2 lg:order-1"
                >
                    <Image
                        src="/me.jpg"
                        alt="Ephraim Omenai"
                        fill
                        className="object-cover opacity-90 transition-opacity hover:opacity-100 duration-500"
                    />
                </motion.div>

                {/* Text */}
                <div className="order-1 lg:order-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-medium text-white mb-6 tracking-tight"
                    >
                        <span className="block text-4xl md:text-7xl mb-2 leading-tight">
                            Hello, I&apos;m <span className="font-serif italic italic-gradient">Ephraim</span>.
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 text-zinc-400 text-lg leading-relaxed"
                    >
                        <p>
                            Based in Cape Town, working with clients globally. I design digital experiences for service-based and product-driven brands that value clarity, quality, and intention.
                        </p>
                        <p>
                            My work focuses on turning ideas into structured, usable products, combining strong visual design with thoughtful user flows and business goals. I use AI-assisted tools to prototype quickly, then refine outcomes through human-centered UX decisions that actually make products easier to understand and use.
                        </p>
                        <p>
                            I’m especially drawn to luxury, travel, events, and service-based platforms, where trust, storytelling, and attention to detail matter as much as functionality. I also enjoy working on e-commerce and product platforms that require clear systems and scalable design.
                        </p>
                        <p>
                            Beyond UX, I enjoy exploring other design disciplines like drawing, graphic design, and visual experimentation, as they sharpen how I think about composition, hierarchy, and storytelling. Outside of design, I’m into football, anime, and gaming, interests that keep me curious about interaction, pacing, and experience design in different forms.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. Toolkit Section */}
            <div className="flex flex-col items-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-medium text-white mb-12"
                >
                    My <span className="font-serif italic italic-gradient">Toolkit</span>
                </motion.h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-5xl">
                    {tools.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (idx * 0.05) }}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 transition-all duration-300 group"
                        >
                            <div className="text-zinc-500 group-hover:text-white transition-colors mb-4 scale-110">
                                {tool.icon}
                            </div>
                            <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Values Section */}
            <div className="flex flex-col items-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-medium text-white mb-12"
                >
                    Design <span className="font-serif italic italic-gradient">Values</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 text-center flex flex-col items-center hover:bg-zinc-900/60 transition-colors"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 text-white">
                                {val.icon}
                            </div>
                            <h4 className="text-lg font-medium text-white mb-3">{val.title}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
