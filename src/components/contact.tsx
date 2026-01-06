"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./ui/magnetic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject is required"),
    message: z.string().min(10, "Message is required"),
});

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/xjgkdzab", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
            } else {
                console.error("Form submission failed");
                // Optional: Add error handling UI here
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 px-4 overflow-hidden">
            {/* Background Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-medium text-white mb-8 tracking-tight">
                        Let&apos;s Create Something <br />
                        <span className="font-serif italic italic-gradient">Amazing</span> Together
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Contact Form */}
                    <div className="bg-zinc-950/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                    <ArrowUpRight className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-4">Message Sent!</h3>
                                <p className="text-zinc-400 mb-8">
                                    Thanks for reaching out, {isSubmitting ? "..." : ""}. I&apos;ll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-medium transition-colors border border-white/5"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl text-white mb-8">Send me a message</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Name</label>
                                            <input
                                                {...register("name")}
                                                className="w-full bg-white/5 border-b border-white/10 focus:border-indigo-500/50 px-4 py-3 text-white outline-none transition-all"
                                                placeholder="Your name"
                                            />
                                            {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Email</label>
                                            <input
                                                {...register("email")}
                                                className="w-full bg-white/5 border-b border-white/10 focus:border-indigo-500/50 px-4 py-3 text-white outline-none transition-all"
                                                placeholder="your@email.com"
                                            />
                                            {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Subject</label>
                                        <input
                                            {...register("subject")}
                                            className="w-full bg-white/5 border-b border-white/10 focus:border-indigo-500/50 px-4 py-3 text-white outline-none transition-all"
                                            placeholder="What's this about?"
                                        />
                                        {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Message</label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="w-full bg-white/5 border-b border-white/10 focus:border-indigo-500/50 px-4 py-3 text-white outline-none transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                        {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
                                    </div>

                                    <Magnetic>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors mt-4 uppercase tracking-[0.2em] text-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </button>
                                    </Magnetic>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-12">
                        <div className="p-8 rounded-3xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Connect With Me</h4>
                            <div className="space-y-4">
                                {[
                                    {
                                        name: "LinkedIn",
                                        icon: <Linkedin className="w-5 h-5" />,
                                        href: "https://www.linkedin.com/in/ephraim-omenai-4aa336174",
                                    },
                                    {
                                        name: "GitHub",
                                        icon: <Github className="w-5 h-5" />,
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
                                                className="w-5 h-5"
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
                                ].map((social) => (
                                    <Magnetic key={social.name}>
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                        >
                                            <span className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                                                {social.icon}
                                                {social.name}
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                        </Link>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/30 shadow-2xl">
                            <span className="flex items-center gap-2 text-emerald-400 mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Quick Response
                            </span>
                            <p className="text-zinc-400 text-sm">
                                Typically responds within 24 hours. Let&apos;s make something amazing together!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
