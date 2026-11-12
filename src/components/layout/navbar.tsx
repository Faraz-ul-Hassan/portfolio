"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
          : "border-transparent bg-white/70 backdrop-blur-sm dark:bg-gray-950/60"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 dark:border-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 dark:border-gray-800 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
