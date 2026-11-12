import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="border-t border-gray-200 py-16 dark:border-gray-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-center text-white shadow-sm sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s build something useful</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-50">
            I&apos;m open to internships, junior roles, and collaboration on interesting products. Feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
              Get in touch
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
