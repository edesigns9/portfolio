"use client";

import React, { useState } from "react";
import { ProjectCard } from "./project-card";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
    {
        title: "Shop Obana",
        description: "Designed a clean shopping flow focused on product discovery, trust, and fast checkout, balancing aesthetics with real buying behavior.",
        tags: ["Figma", "UI/UX", "E-commerce"],
        imageSrc: "/projects/shop-obana.png",
        link: "https://shop.obana.africa/",
        category: "E-commerce",
    },
    {
        title: "Bamboo Furniture",
        description: "Created a minimal product experience that highlights craftsmanship, materials, and scale while keeping navigation simple and conversion-friendly.",
        tags: ["Figma", "UI/UX", "E-commerce"],
        imageSrc: "/projects/bamboo-furniture.png",
        link: "https://www.figma.com/design/DDhFbThz4rgIwmBnA756WR/Portfolio-Website-Designs?node-id=65-242&t=ZFyNHVstCRx0N0Lh-1",
        category: "E-commerce",
    },
    {
        title: "Icarus Flight Agency",
        description: "Built and structured a service-driven website that simplifies flight enquiries, builds credibility, and guides users toward fast contact.",
        tags: ["Lovable", "UI/UX", "Travel"],
        imageSrc: "/projects/icarus-flight.png",
        link: "https://icarusflight.agency/",
        category: "Travel",
    },
    {
        title: "Aura by Africa",
        description: "A high-end luxury wedding planning and event design website, celebrating 'The Art of Forever' through sophisticated aesthetics and seamless event coordination.",
        tags: ["UX Design", "Luxury Branding", "Figma"],
        imageSrc: "/projects/aura-by-africa.png",
        link: "https://www.figma.com/design/DDhFbThz4rgIwmBnA756WR/Portfolio-Website-Designs?node-id=59-5977&t=ZFyNHVstCRx0N0Lh-1",
        category: "Lifestyle",
    },
    {
        title: "Kọbiri",
        description: "Built a responsive web app that makes finding, saving, and exploring recipes intuitive through clear structure and thoughtful UX decisions.",
        tags: ["React", "TypeScript", "Vercel"],
        imageSrc: "/projects/kobiri.png",
        link: "https://kobiri-cookbook.vercel.app/",
        category: "Lifestyle",
    },
    {
        title: "KongaPay Redesign",
        description: "A comprehensive redesign of the KongaPay landing page, focusing on seamless digital payments, enhanced trust through brand associations, and a vibrant user interface for the Nigerian market.",
        tags: ["Fintech", "Figma", "Behance"],
        imageSrc: "/projects/kongapay.png",
        link: "https://www.behance.net/gallery/195438701/KongaPay-Customer-Landing-Page-Redesign",
        category: "Fintech",
    },
    {
        title: "Game360",
        description: "Designed and built a high-stakes mobile esports platform where players compete in classics like Chess and Pool for real cash prizes. Features a high-energy UI with real-time matchmaking and secure instant payouts.",
        tags: ["Mobile Esports", "Gaming UI", "Figma"],
        imageSrc: "/projects/game360.png",
        link: "https://www.figma.com/design/DDhFbThz4rgIwmBnA756WR/Portfolio-Website-Designs?node-id=56-1088&t=ZFyNHVstCRx0N0Lh-1",
        category: "Mobile Esports",
    },
];

const filters = ["All", "E-commerce", "Fintech", "Travel", "Lifestyle"];

export function AllProjects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-5xl md:text-8xl font-medium text-white mb-8 tracking-tighter">
                    My <span className="font-serif italic italic-gradient">Works</span>
                </h2>

                <p className="max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
                    A collection of projects where I&apos;ve transformed complex challenges into elegant,
                    user-centered solutions. Each project tells a story of thoughtful design and
                    purposeful problem-solving.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${activeFilter === filter
                                ? 'bg-white text-black'
                                : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
