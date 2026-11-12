import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        <p>
          I&apos;m <span className="font-medium text-gray-900 dark:text-white">{siteConfig.name}</span>, a software developer and AI student based in {siteConfig.location}. I enjoy building practical products that combine solid engineering with a good user experience.
        </p>
        <p>
          My work spans full-stack web development, backend APIs, and machine learning applications. I&apos;ve built projects ranging from an offline-first multi-tenant inventory system to prediction APIs and retrieval-augmented assistants, and I like working across the stack to understand how systems fit together end to end.
        </p>
        <p>
          I&apos;m especially interested in backend systems, developer tools, and applied AI — areas where thoughtful design can make software more reliable and useful. I value clean, maintainable code, continuous learning, and shipping things that solve real problems.
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">Quick facts</h2>
          <ul className="mt-3 grid gap-2 text-base sm:grid-cols-2">
            <li><span className="font-medium text-gray-800 dark:text-gray-200">Role:</span> {siteConfig.role}</li>
            <li><span className="font-medium text-gray-800 dark:text-gray-200">Location:</span> {siteConfig.location}</li>
            <li><span className="font-medium text-gray-800 dark:text-gray-200">Focus:</span> Full-stack, APIs, ML</li>
            <li><span className="font-medium text-gray-800 dark:text-gray-200">Domain:</span> farazulhassan.me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
