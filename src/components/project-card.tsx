"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    link?: string;
    className?: string;
}

export function ProjectCard({ title, description, tags, imageSrc, link }: ProjectCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const content = (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative flex flex-col h-full bg-zinc-950/80 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 backdrop-blur-xl shadow-2xl"
        >
            {/* Glossy Reflection Effect */}
            <motion.div
                style={{
                    transform: "translateZ(50px)",
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
            />

            {/* Image Container */}
            <div
                style={{ transform: "translateZ(20px)" }}
                className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-800"
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content */}
            <div
                style={{ transform: "translateZ(30px)" }}
                className="flex flex-col flex-grow p-8"
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                        <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                    </div>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-white/5 border border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    if (link) {
        return (
            <Link href={link} target="_blank" className="block h-full cursor-none">
                {content}
            </Link>
        );
    }

    return content;
}
