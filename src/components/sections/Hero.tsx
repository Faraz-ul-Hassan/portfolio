"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/60 via-white to-white dark:from-emerald-950/30 dark:via-gray-950 dark:to-gray-950" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
            <MapPin className="h-4 w-4" /> {siteConfig.location} · Open to opportunities
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {siteConfig.role}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Hi, I&apos;m {siteConfig.name}.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            {siteConfig.intro} I enjoy turning ideas into reliable, maintainable software and learning by building.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              Contact Me
            </Link>
            <div className="ml-0 flex items-center gap-3 sm:ml-2">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
