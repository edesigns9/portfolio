"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlowButton } from "./ui/flow-button";
import AbstractShape from "./3d/abstract-shape";
import { Typewriter } from "./ui/typewriter";
import { ShinyButton } from "./ui/shiny-button";
import { Magnetic } from "./ui/magnetic";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center overflow-hidden">
            {/* Spotlights */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-zinc-300"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for new projects
            </motion.div>

            {/* Headline */}
            <h1 className="relative z-10 max-w-5xl mx-auto text-4xl font-medium tracking-tight md:text-7xl lg:text-8xl text-white mb-8">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="block mb-2 min-h-[1.2em]"
                >
                    <Typewriter
                        text={["Digital Designer", "UI/UX Designer", "Vibe Coder"]}
                        speed={150}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-indigo-300 bg-[length:200%_auto] animate-shimmer"
                        waitTime={3000}
                        deleteSpeed={100}
                        cursorClassName="text-indigo-300"
                    />
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="block font-serif italic text-white"
                >
                    & Product Thinker
                </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-10 max-w-2xl mx-auto mb-12 text-lg text-zinc-400 leading-relaxed"
            >
                Hey 👋 I&apos;m Ephraim Omenai! I design premium digital experiences using AI-assisted workflows, bridging user needs and business goals with clarity and speed. Based in Cape Town. Working globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                className="relative z-10 flex flex-col gap-4 sm:flex-row items-center justify-center"
            >
                <Link href="/works">
                    <Magnetic>
                        <FlowButton text="View My Work" />
                    </Magnetic>
                </Link>

                <Link href="/contact">
                    <Magnetic>
                        <ShinyButton>
                            Let&apos;s Connect
                        </ShinyButton>
                    </Magnetic>
                </Link>
            </motion.div>

            {/* 3D Shape Background */}
            <AbstractShape />
        </section>
    )
}
