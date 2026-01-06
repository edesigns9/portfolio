"use client";

import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "./ui/magnetic";

const projects = [
    {
        title: "Shop Obana",
        description: "Designed a clean shopping flow focused on product discovery, trust, and fast checkout, balancing aesthetics with real buying behavior.",
        tags: ["Figma", "UI/UX", "E-commerce"],
        imageSrc: "/projects/shop-obana.png",
        link: "https://shop.obana.africa/",
    },
    {
        title: "Bamboo Furniture",
        description: "Created a minimal product experience that highlights craftsmanship, materials, and scale while keeping navigation simple and conversion-friendly.",
        tags: ["Figma", "UI/UX", "E-commerce"],
        imageSrc: "/projects/bamboo-furniture.png",
        link: "https://www.figma.com/design/DDhFbThz4rgIwmBnA756WR/Portfolio-Website-Designs?node-id=65-242&t=ZFyNHVstCRx0N0Lh-1",
    },
    {
        title: "Icarus Flight Agency",
        description: "Built and structured a service-driven website that simplifies flight enquiries, builds credibility, and guides users toward fast contact.",
        tags: ["Lovable", "UI/UX", "Travel"],
        imageSrc: "/projects/icarus-flight.png",
        link: "https://icarusflight.agency/",
    },
];

export function SelectedProjects() {
    return (
        <section id="works" className="py-32 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                    Featured Work
                </div>
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
                    Selected <span className="font-serif italic italic-gradient">Projects</span>
                </h2>
                <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
                    A collection of projects that showcase my approach to solving complex design and development challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <Magnetic>
                    <a
                        href="/works"
                        className="group px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 tracking-wide"
                    >
                        View All Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </Magnetic>
            </div>
        </section>
    );
}
