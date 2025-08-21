import { motion } from "framer-motion";
import { Behance, Download, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";

export default function HeroAbout() {
const dots = useMemo(() =>
    Array.from({ length: 240 }, (_, i) => {
      const x = (i % 16) * 80 + 24;
      const y = Math.floor(i / 16) * 60 + 24;
    return (
        <rect key={i} x={x} y={y} width="4" height="4" rx="1" className="fill-white/10" />
    );
    }), []);

return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c0d0f] text-white">
    <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1280 1080" preserveAspectRatio="none">
        <defs>
        <radialGradient id="fade" cx="50%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#101216" />
            <stop offset="100%" stopColor="#0c0d0f" />
        </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#fade)" />
        {dots}
    </svg>

    <Nav />

    <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-24 md:grid-cols-2 md:items-center lg:gap-16">
        <section className="order-2 md:order-1">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="block text-zinc-300">Hello,</span>
            <span className="mt-1 inline-flex flex-wrap items-center gap-3 text-white">
            <span>Sanjeev here!</span> 👋
            </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
            I’m a ✍️ UI/UX Designer with 4+ years of experience & content creator with a vibrant community.
        </motion.p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
            All things UX: Motion, Interaction, and Product Design.
        </p>

        <div className="mt-6 flex items-center gap-4 text-zinc-300">
            <span className="text-sm">Hakuna Matata! 🕊️</span>
            <span className="h-2 w-8 rounded-full bg-emerald-400/80" />
            <a href="#"><Behance className="h-5 w-5" /></a>
            <a href="#"><Linkedin className="h-5 w-5" /></a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
            <a href="#resume" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black">
            <Download className="h-4 w-4" /> Resume
            </a>
            <a href="mailto:sanjeevsriram3x@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white/90">
            <Mail className="h-4 w-4" /> sanjeevsriram3x@gmail.com
            </a>
        </div>
        </section>

        <section className="order-1 md:order-2">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto aspect-[4/5] max-w-xl overflow-hidden rounded-[28px] border border-white/5">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop" alt="Portrait" className="h-full w-full object-cover" />
        </motion.div>
        </section>
    </main>

    <section id="about" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
        </div>
        <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-300 leading-relaxed">
                I design products that are useful, usable, and delightful.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <li className="rounded-xl bg-white/5 p-3">• Motion & Micro-interactions</li>
                <li className="rounded-xl bg-white/5 p-3">• Design Systems</li>
                <li className="rounded-xl bg-white/5 p-3">• Prototyping</li>
                <li className="rounded-xl bg-white/5 p-3">• Accessibility</li>
            </ul>
            </div>
        </div>
        </div>
    </section>

    <Footer />
    </div>
);
}

function Nav() {
return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0c0d0f]/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold">Sanjeev Sriram</a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
        <a href="#work">My Work</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        </nav>
    </div>
    </header>
);
}

function Footer() {
return (
    <footer className="mx-auto max-w-7xl px-6 pb-12 text-xs text-zinc-500">
    © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
);
}