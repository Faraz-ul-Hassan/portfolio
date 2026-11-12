import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="border-t border-stone-200 py-16 dark:border-stone-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-stone-200 bg-stone-100/70 px-8 py-12 dark:border-stone-800 dark:bg-stone-900/60 sm:px-12">
          <h2 className="text-2xl font-medium text-stone-900 dark:text-stone-50 sm:text-3xl">Want to work together?</h2>
          <p className="mt-3 max-w-2xl text-stone-600 dark:text-stone-400">
            I&apos;m open to internships, junior roles, and collaborations. If you have an opportunity or a project in mind, I&apos;d be glad to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white">
              Contact page
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-200/60 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
