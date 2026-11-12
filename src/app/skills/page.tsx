import type { Metadata } from "next";
import { skills } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used by Faraz Ul Hassan.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">Skills</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          A snapshot of the languages, frameworks, and tools I work with. This list is maintained in <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm dark:bg-stone-800">src/lib/skills.ts</code> for easy updates.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <section key={group.category} className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-white">{group.category}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-md border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
