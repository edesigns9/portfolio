import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ROTATION_RANGE = 20; // Reduced rotation for better usability
const HALF_ROTATION_RANGE = 20 / 2;

export const TiltCard = ({
    title,
    description,
    tags,
    imageSrc,
    className,
}: {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={`relative h-[400px] w-full rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-colors ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid grid-rows-[1fr_auto] gap-4 rounded-xl shadow-lg"
            >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-lg bg-zinc-800">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="bg-zinc-950/50 p-4 rounded-lg border border-white/5 backdrop-blur-sm transform-gpu transition-all duration-300 group-hover:translate-z-12">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium text-white flex items-center gap-2">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
