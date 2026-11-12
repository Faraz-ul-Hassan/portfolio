import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Multi-tenant Inventory Management System",
    description:
      "Offline-first inventory platform designed for commercial use, combining a Vue 3 + Electron client with a Laravel/MySQL backend. Built to stay reliable in low-connectivity environments while supporting multi-tenant workflows.",
    techStack: ["Vue 3", "Laravel", "MySQL", "IndexedDB", "Electron", "Docker"],
    githubUrl: "https://github.com/Faraz-ul-Hassan/Inventory-system",
    featured: true,
    highlights: [
      "Outbox-pattern sync for offline-first operations",
      "Dual-UOM support and conflict-aware updates",
      "Desktop packaging with Electron for operational use",
    ],
  },
  {
    title: "House Price Prediction API",
    description:
      "Machine learning API that predicts house prices from property features such as area, bedrooms, bathrooms, age, and location. Exposes a FastAPI endpoint for quick inference and integration.",
    techStack: ["Python", "FastAPI", "scikit-learn", "Pandas", "Pydantic"],
    featured: true,
    highlights: [
      "REST endpoint for real-time price prediction",
      "Structured request validation with Pydantic models",
      "Trained regression workflow packaged for serving",
    ],
  },
  {
    title: "Crop Recommendation System",
    description:
      "End-to-end ML system that recommends the most suitable crop from soil nutrients and climate conditions. Includes model evaluation, a FastAPI backend, and a lightweight web interface.",
    techStack: ["Python", "FastAPI", "scikit-learn", "Random Forest", "JavaScript"],
    featured: true,
    highlights: [
      "Predicts one of 22 crops from 7 agronomic features",
      "Random Forest selected after cross-model evaluation",
      "Served via API with a browser-based UI for testing",
    ],
  },
  {
    title: "Agri RAG Assistant",
    description:
      "Retrieval-augmented assistant for agriculture-focused document question answering. Combines document ingestion, retrieval, and LLM-backed responses to surface relevant guidance from source material.",
    techStack: ["Python", "RAG", "LLM", "Vector Search", "FastAPI"],
    featured: false,
    highlights: [
      "PDF/document inspection and ingestion workflow",
      "Context-aware responses grounded in retrieved passages",
      "Designed as an extensible assistant prototype",
    ],
  },
  {
    title: "Laravel Products API",
    description:
      "Backend API project built with Laravel for managing product data and CRUD-style application workflows, following RESTful conventions and framework best practices.",
    techStack: ["PHP", "Laravel", "REST API", "MySQL"],
    featured: false,
    highlights: [
      "Resource-oriented API structure",
      "Foundation for scalable backend services",
      "Built with Laravel ecosystem conventions",
    ],
  },
  {
    title: "AI-Powered Log Anomaly Detection & Root-Cause Assistant",
    description:
      "Final year project exploring a self-hostable log monitoring tool for small teams, focused on collection, ingestion, and anomaly detection using statistical techniques and from-scratch ML ideas.",
    techStack: ["Go", "gRPC", "Protobuf", "Anomaly Detection"],
    githubUrl: "https://github.com/Faraz-ul-Hassan",
    featured: false,
    highlights: [
      "Targeted at lightweight, self-hosted observability",
      "Emphasis on backend systems and detection pipelines",
      "In-progress research and implementation work",
    ],
  },
];
