import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skills } from "@/lib/skills";

export default function SkillsPreview() {
  const preview = skills.slice(0, 4);
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-3xl">Skills & Tools</h2>
            <p className="mt-2 text-stone-600 dark:text-stone-300">Technologies I use to build products and solve problems.</p>
          </div>
          <Link href="/skills" className="hidden items-center gap-1 text-sm font-medium text-amber-700 hover:text-emerald-800 dark:text-amber-400 sm:inline-flex">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((cat) => (
            <div key={cat.category} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <h3 className="font-semibold text-stone-900 dark:text-white">{cat.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={s} className="rounded-md bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-200">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
