"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Magnetic } from "./ui/magnetic";
import { ShinyButton } from "./ui/shiny-button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Works", href: "/works" },
        { name: "About", href: "/about" },
        { name: "Process", href: "/process" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-4 h-4" />,
            href: "https://www.linkedin.com/in/ephraim-omenai-4aa336174",
        },
        {
            name: "GitHub",
            icon: <Github className="w-4 h-4" />,
            href: "https://github.com/omenaieph",
        },
        {
            name: "Behance",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11 11H8V8h3v3zM11 16H8v-3h3v3zM12 11c0 1.1-.9 2-2 2H8v3h3c1.7 0 3-1.3 3-3V11c0-1.7-1.3-3-3-3h-3v3c1.1 0 2 .9 2 2zM21 11h-4" />
                    <path d="M22 13.5c0-.8-.7-1.5-1.5-1.5H17c-.8 0-1.5.7-1.5 1.5.1 2 .9 3.5 3 3.5 2.1 0 2.9-1.5 3-3.5" />
                    <path d="M22 13.5H17" />
                    <path d="M15.5 10c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2" />
                </svg>
            ),
            href: "https://www.behance.net/ephraimomenai",
        },
    ];

    return (
        <footer className="relative border-t border-white/5 bg-black/20 backdrop-blur-xl mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">
                                Ephraim
                            </h3>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Crafting digital experiences with precision, creativity, and strategic thinking.
                            Based in Cape Town, South Africa.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
                            Connect
                        </h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="mailto:hello@ephraim.design"
                                    className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="lg:pl-8">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
                            Work Together
                        </h4>
                        <p className="text-zinc-400 text-sm mb-6">
                            Ready to start your next project? Let&apos;s build something amazing.
                        </p>
                        <Magnetic>
                            <Link href="/contact" className="inline-block w-full">
                                <ShinyButton className="w-full justify-center">
                                    Get In Touch
                                </ShinyButton>
                            </Link>
                        </Magnetic>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>
                        &copy; {currentYear} Ephraim Omenai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        Designed & coded with <span className="text-red-500">♥</span> in Cape Town
                    </div>
                </div>
            </div>
        </footer>
    );
}
