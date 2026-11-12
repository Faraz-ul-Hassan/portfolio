"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative border-b border-stone-200 dark:border-stone-800">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-100/40 via-stone-50 to-stone-50 dark:from-stone-900 dark:via-stone-950 dark:to-stone-950" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
            <MapPin className="h-4 w-4 text-amber-700 dark:text-amber-400" /> {siteConfig.location}
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 dark:text-stone-50 sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-stone-700 dark:text-stone-300">
            {siteConfig.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400">
            {siteConfig.intro} I like building software that feels dependable, clear, and useful — whether that&apos;s a full-stack product, an API, or an ML experiment.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-900"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="flex flex-col justify-end rounded-2xl border border-stone-200 bg-white/70 p-6 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Currently</p>
          <ul className="mt-4 space-y-3 text-stone-700 dark:text-stone-300">
            <li>Final-year BS Artificial Intelligence student</li>
            <li>Building with Next.js, Laravel, FastAPI, and Python</li>
            <li>Interested in backend systems and applied ML</li>
          </ul>
          <div className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-5 dark:border-stone-800">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="rounded-md p-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100">
              <Mail className="h-5 w-5" />
            </a>
            <span className="ml-auto text-sm text-amber-700 dark:text-amber-400">Open to opportunities</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
