"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Scale } from "lucide-react";
import Navbar from "@/components/header/Navbar";

export const LEGAL_PAGES = [
  { slug: "terms",          title: "Terms of Service",                        short: "Terms" },
  { slug: "privacy",        title: "Privacy Policy",                          short: "Privacy" },
  { slug: "submission",     title: "Missing Person Submission Policy",         short: "Submissions" },
  { slug: "accuracy",       title: "Data Accuracy & Responsibility",           short: "Accuracy" },
  { slug: "takedown",       title: "Takedown & Correction Policy",             short: "Takedown" },
  { slug: "consent",        title: "Consent & Image Use Policy",               short: "Consent" },
  { slug: "community",      title: "Community Guidelines & Ethical Use",       short: "Community" },
  { slug: "cookies",        title: "Cookie Policy",                            short: "Cookies" },
  { slug: "partnerships",   title: "Partnership & Law Enforcement Disclaimer", short: "Partnerships" },
];

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
}

export default function LegalLayout({ children, title, subtitle, lastUpdated = "January 2025" }: Props) {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop();

  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />

      {/* Hero strip */}
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <Link
            href="/legal"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors mb-5"
          >
            <ArrowLeft size={13} /> Legal Hub
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <Scale size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white leading-tight">{title}</h1>
              {subtitle && <p className="text-white/65 text-sm mt-1">{subtitle}</p>}
              <p className="text-white/40 text-xs mt-2">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">

        {/* Sidebar nav */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-border p-3 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-medium px-3 py-2">
              Legal Documents
            </p>
            <nav className="space-y-0.5">
              {LEGAL_PAGES.map((page) => {
                const active = currentSlug === page.slug;
                return (
                  <Link
                    key={page.slug}
                    href={`/legal/${page.slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      active
                        ? "bg-primary text-white font-semibold"
                        : "text-neutral-medium hover:bg-neutral-light hover:text-neutral-dark"
                    }`}
                  >
                    {page.short}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl border border-border px-8 py-10 prose-legal">
            {children}
          </div>

          {/* Footer nav */}
          <div className="flex items-center justify-between mt-6 text-sm text-neutral-medium">
            <p>Questions? <a href="mailto:legal@mspkenya.org" className="text-primary hover:underline">legal@mspkenya.org</a></p>
            <Link href="/legal" className="text-primary hover:underline">← All documents</Link>
          </div>
        </main>
      </div>
    </div>
  );
}