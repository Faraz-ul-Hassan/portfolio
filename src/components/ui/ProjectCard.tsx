import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            Featured
          </span>
        )}
      </div>
      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{project.description}</p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            <FaGithub className="h-4 w-4" /> Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        )}
      </div>
    </article>
  );
}
