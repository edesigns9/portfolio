"use client";

import { useScroll, useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsVisible(latest > 300);
        });
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50 pointer-events-auto"
                >
                    <Magnetic>
                        <button
                            onClick={scrollToTop}
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full",
                                "bg-zinc-900/80 backdrop-blur-md border border-white/10",
                                "text-white shadow-lg shadow-black/20",
                                "hover:bg-zinc-800 transition-colors group"
                            )}
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </Magnetic>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
