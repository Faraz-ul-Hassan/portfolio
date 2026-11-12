import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="border-t border-stone-200 bg-stone-50/60 py-16 dark:border-stone-800 dark:bg-stone-900/30 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-stone-600 dark:text-stone-300">
              A selection of work across full-stack development, APIs, and machine learning. Add or update projects anytime in <code className="rounded bg-stone-200 px-1.5 py-0.5 text-sm dark:bg-stone-800">src/lib/projects.ts</code>.
            </p>
          </div>
          <Link href="/projects" className="hidden items-center gap-1 text-sm font-medium text-amber-700 hover:text-emerald-800 dark:text-amber-400 dark:hover:text-emerald-300 sm:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 dark:text-amber-400">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
