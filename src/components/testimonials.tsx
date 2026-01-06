"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { CleanTestimonial } from "./ui/clean-testimonial";

export function Testimonials() {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto text-center">
            <div className="mb-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                    Client Stories
                </div>
                <h2 className="text-4xl md:text-6xl font-medium text-white">
                    What Clients <span className="font-serif italic italic-gradient">Say</span>
                </h2>
            </div>

            <CleanTestimonial />
        </section>
    );
}
