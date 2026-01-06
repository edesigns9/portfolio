"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, ArrowRight, Calendar, Code, FileText, User, Clock } from "lucide-react";
import Link from "next/link";
import { RadialOrbitalTimeline, type TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { Magnetic } from "@/components/ui/magnetic";

const processSteps: TimelineItem[] = [
    {
        id: 1,
        title: "Listen",
        date: "Phase 01",
        content: "Deep diving into your goals, user needs, and the challenges you're facing.",
        category: "Discovery",
        icon: Users,
        relatedIds: [2],
        status: "completed",
        energy: 100,
    },
    {
        id: 2,
        title: "Ideate",
        date: "Phase 02",
        content: "Visually brainstorming and prototyping to find the most elegant solution.",
        category: "Creative",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed",
        energy: 90,
    },
    {
        id: 3,
        title: "Design",
        date: "Phase 03",
        content: "Refining interactions, crafting visual fidelity, and ensuring every detail feels right.",
        category: "Design",
        icon: Target,
        relatedIds: [2, 4],
        status: "in-progress",
        energy: 75,
    },
    {
        id: 4,
        title: "Code",
        date: "Phase 04",
        content: "Bridging the gap between design and code with clean, semantic implementation.",
        category: "Dev",
        icon: Code,
        relatedIds: [3, 5],
        status: "pending",
        energy: 40,
    },
    {
        id: 5,
        title: "Launch",
        date: "Phase 05",
        content: "Final deployment support and continuous iteration based on user feedback.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending",
        energy: 10,
    },
];

const processValues = [
    {
        icon: <Users className="w-5 h-5" />,
        title: "User-Centered",
        description: "Every decision starts with understanding user needs",
    },
    {
        icon: <Target className="w-5 h-5" />,
        title: "Goal-Oriented",
        description: "Design solutions that drive business outcomes",
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Innovation-Driven",
        description: "Push boundaries while maintaining usability",
    },
];

export function ProcessSummary() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                        Design Philosophy
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
                        The Process Behind <br />
                        <span className="font-serif italic italic-gradient">Great Design</span>
                    </h2>

                    <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
                        My approach combines strategic thinking with creative execution,
                        ensuring every project delivers both beautiful interfaces and meaningful user experiences.
                    </p>

                    <div className="space-y-6 mb-12">
                        {processValues.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                                    <p className="text-sm text-zinc-500">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/process">
                        <Magnetic>
                            <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors uppercase tracking-widest text-xs">
                                Discover My Process
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Magnetic>
                    </Link>
                </motion.div>

                {/* Right Column - Orbital Timeline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:scale-110"
                >
                    <RadialOrbitalTimeline timelineData={processSteps} />
                </motion.div>
            </div>
        </section>
    );
}
