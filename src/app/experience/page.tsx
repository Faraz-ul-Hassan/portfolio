import type { Metadata } from "next";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Education and experience timeline for Faraz Ul Hassan.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Experience</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Education and hands-on experience. Update entries in <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">src/lib/experience.ts</code>.
        </p>
      </div>
      <div className="space-y-6">
        {experience.map((item) => (
          <article key={`${item.title}-${item.organization}`} className="relative rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                <p className="text-emerald-700 dark:text-emerald-400 font-medium">{item.organization}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.startDate} – {item.endDate ?? "Present"}
              </p>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
