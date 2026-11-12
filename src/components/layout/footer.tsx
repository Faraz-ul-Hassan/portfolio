import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-stone-900 dark:text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Built with Next.js & Tailwind CSS ·{" "}
            <Link href={siteConfig.url} className="hover:text-amber-700 dark:hover:text-amber-400">
              farazulhassan.me
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-stone-600 transition hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-400"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-stone-600 transition hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-400"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-stone-600 transition hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-400"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
