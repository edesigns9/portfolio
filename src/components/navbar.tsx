"use client";
import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Magnetic } from "./ui/magnetic";
import { Home, Briefcase, User, Workflow, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "About", href: "/about", icon: User },
    { name: "Process", href: "/process", icon: Workflow },
    { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
    const mouseX = useMotionValue(Infinity);
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
                onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center bg-zinc-950/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]",
                    isMobile ? "gap-0.5 p-1" : "gap-2 p-2"
                )}
            >
                <div className={cn("flex items-center", isMobile ? "gap-0.5 px-0.5" : "gap-2 px-2")}>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.name}
                            item={item}
                            mouseX={mouseX}
                            isActive={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                            isMobile={isMobile}
                        />
                    ))}
                </div>

                <div className="w-px h-6 bg-white/10 mx-0.5" />

                <Link href="/contact" className="ml-0.5">
                    <Magnetic disabled={isMobile}>
                        <motion.button
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "text-xs font-semibold uppercase tracking-widest text-black bg-white rounded-full hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center justify-center",
                                isMobile ? "w-10 h-10" : "px-4 md:px-5 py-2"
                            )}
                        >
                            <span className="hidden md:inline">Let&apos;s Talk</span>
                            <span className="md:hidden flex items-center justify-center"><Mail className="w-4 h-4" /></span>
                        </motion.button>
                    </Magnetic>
                </Link>
            </motion.nav>
        </div>
    );
}

function NavItem({
    item,
    mouseX,
    isActive,
    isMobile
}: {
    item: typeof navItems[0];
    mouseX: MotionValue<number>;
    isActive: boolean;
    isMobile: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [80, 120, 80]);
    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const isContact = item.name === "Contact";

    return (
        <Link href={item.href} className={isContact ? "hidden md:block" : ""}>
            <motion.div
                ref={ref}
                style={isMobile ? { width: 40 } : { width }}
                className={cn(
                    "relative flex items-center justify-center h-10 rounded-full transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:text-zinc-200"
                )}
            >
                <span className="hidden md:block text-xs font-medium px-4 whitespace-nowrap">
                    {item.name}
                </span>
                <span className="md:hidden flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                </span>
                {isActive && (
                    <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 border border-white/20 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </motion.div>
        </Link>
    );
}
