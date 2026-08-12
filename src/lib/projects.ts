import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Multi-tenant Inventory Management System",
    description:
      "Offline-first inventory system with outbox-pattern sync, dual-UOM support, monotonic versioning for conflict resolution, and Electron desktop packaging for ~200 users.",
    techStack: ["Vue 3", "Laravel", "MySQL", "IndexedDB", "Electron"],
    githubUrl: "https://github.com/Faraz-ul-Hassan/Inventory-system",
    imageUrl: "/projects/inventory.png",
    featured: true,
  },
  {
    title: "AI-Powered Log Anomaly Detection & Root-Cause Assistant",
    description:
      "Final year project: a self-hostable log monitoring tool for small teams, built with Go for collection, ingestion, and anomaly detection using statistical methods and isolation forest from scratch.",
    techStack: ["Go", "gRPC", "Protobuf"],
    githubUrl: "https://github.com/Faraz-ul-Hassan/",
    imageUrl: "/projects/log-anomaly.png",
    featured: true,
  },
  {
    title: "Service Checker CLI",
    description:
      "A command-line tool built in Go to monitor service health, using goroutines, channels, and context for concurrent checks.",
    techStack: ["Go", "CLI"],
    githubUrl: "https://github.com/Faraz-ul-Hassan/",
    imageUrl: "/projects/service-checker.png",
    featured: false,
  },
  {
    title: "Snap Monitor",
    description:
      "A FastAPI portfolio project built during Canonical prep, exposing service status via a systemctl-based status endpoint.",
    techStack: ["Python", "FastAPI", "systemd"],
    githubUrl: "https://github.com/Faraz-ul-Hassan/",
    imageUrl: "/projects/snap-monitor.png",
    featured: false,
  },
];
