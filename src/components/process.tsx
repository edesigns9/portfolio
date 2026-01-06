"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "01",
        title: "Listen & Understand",
        content: "Every project begins with deep listening. I dive into understanding your goals, user needs, and the challenges you're facing.",
    },
    {
        id: "02",
        title: "Ideate & Sketch",
        content: "Like folding paper, I start with broad strokes and possibilities. Visually brainstorming and prototyping to find the most elegant solution.",
    },
    {
        id: "03",
        title: "Design & Prototype",
        content: "This is where the structure takes shape. Refining interactions, crafting visual fidelity, and ensuring every detail feels right.",
    },
    {
        id: "04",
        title: "Code & Refine",
        content: "I bridge the gap between design and code, implementing with clean semantic HTML and modern CSS to bring the vision to life.",
    },
    {
        id: "05",
        title: "Launch & Learn",
        content: "The final fold reveals the complete form. I support the launch and continue learning from user feedback to iterate.",
    },
];

const StepCard = ({ step, i }: { step: typeof steps[0]; i: number }) => {
    const isEven = i % 2 === 0;

    return (
        <div className="relative mb-16 md:mb-24 last:mb-0">
            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-zinc-900 border border-white/20 z-10 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-1.5 h-1.5 rounded-full bg-white"
                />
            </div>

            <div className={cn(
                "flex flex-col md:flex-row items-center w-full",
                isEven ? "md:justify-start" : "md:justify-end"
            )}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                        "w-full md:w-[45%] p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all group relative",
                    )}
                >
                    {/* Shadow Accent */}
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="text-5xl md:text-7xl font-serif italic text-zinc-800/50 group-hover:text-zinc-700/50 transition-colors block mb-4">
                        {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-indigo-200 transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                        {step.content}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-32 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center mb-8 bg-white/5"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-medium text-white mb-8"
                >
                    The <span className="font-serif italic italic-gradient">Unfolding</span> Process
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    Like origami, I transform a simple sheet into something astounding.
                    My design process creates depth, meaning, and beauty step by step.
                </motion.p>
            </div>

            <div ref={targetRef} className="relative max-w-4xl mx-auto py-12">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

                {/* Progress Fill */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500 hidden md:block z-0"
                />

                <div className="relative">
                    {steps.map((step, i) => (
                        <StepCard key={step.id} step={step} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
