import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
        I&apos;m happy to connect about opportunities, collaborations, or questions about my work. The easiest way to reach me is by email.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-800"
        >
          <div className="rounded-lg bg-amber-50 p-3 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-stone-900 dark:text-white">Email</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-300">{siteConfig.email}</p>
            <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">Send me a message</p>
          </div>
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-800"
        >
          <div className="rounded-lg bg-amber-50 p-3 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
            <FaGithub className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-stone-900 dark:text-white">GitHub</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-300">github.com/Faraz-ul-Hassan</p>
            <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">View repositories</p>
          </div>
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-800"
        >
          <div className="rounded-lg bg-amber-50 p-3 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
            <FaLinkedin className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-stone-900 dark:text-white">LinkedIn</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-300">Let&apos;s connect professionally</p>
            <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">Open profile</p>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <div className="rounded-lg bg-amber-50 p-3 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-stone-900 dark:text-white">Location</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-300">{siteConfig.location}</p>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Available for remote opportunities</p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
        <h2 className="font-semibold">Deploy tip</h2>
        <p className="mt-2 text-sm leading-6">
          For Vercel, import this <code>portfolio</code> folder, keep the build command as <code>npm run build</code>, and add your custom domain <code>farazulhassan.me</code> in Project Settings → Domains (your Namecheap DNS records should point to Vercel as configured).
        </p>
      </div>
    </div>
  );
}
