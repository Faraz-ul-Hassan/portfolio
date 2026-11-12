import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Faraz Ul Hassan across web development, APIs, and machine learning.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">Projects</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          A collection of things I&apos;ve built and explored. This page is driven by <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm dark:bg-stone-800">src/lib/projects.ts</code>, so adding a new project is as simple as appending an object to the array.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
