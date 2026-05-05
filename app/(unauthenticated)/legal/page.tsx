"use client";

import Link from "next/link";
import {
  Scale, Shield, FileText, AlertTriangle, RotateCcw,
  Camera, Users, Cookie, Handshake, ArrowRight
} from "lucide-react";
import Navbar from "@/components/header/Navbar";
import { LEGAL_PAGES } from "@/components/legal/LegalLayout";

const ICONS = [Scale, Shield, FileText, AlertTriangle, RotateCcw, Camera, Users, Cookie, Handshake];

const DESCRIPTIONS = [
  "Rules governing use of the MSPKenya platform and your rights as a user.",
  "How we collect, store, and protect your personal information.",
  "Standards and requirements for submitting missing person cases.",
  "Our commitment to accuracy and how responsibility is shared.",
  "How to request removal or correction of information about yourself.",
  "How photos and images of missing persons are used on the platform.",
  "Expected conduct for all community members and ethical guidelines.",
  "What cookies we use, why, and how to manage your preferences.",
  "How we work with police, NGOs, and partner organisations.",
];

export default function LegalIndexPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Scale size={26} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Legal & Policy Hub</h1>
          <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed">
            MSPKenya is an open-source, community-driven platform. These documents govern
            how we operate transparently and responsibly.
          </p>
        </div>
      </div>

      {/* Notice banner */}
      <div className="bg-warning/10 border-b border-warning/20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-neutral-dark">
          <AlertTriangle size={14} className="text-warning shrink-0" />
          <span>
            MSPKenya is not a law enforcement agency. Always contact{" "}
            <strong>Kenya Police (999)</strong> or{" "}
            <strong>Child Helpline (116)</strong> in an emergency.
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-medium mb-6">
          {LEGAL_PAGES.length} documents
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEGAL_PAGES.map((page, i) => {
            const Icon = ICONS[i];
            return (
              <Link
                key={page.slug}
                href={`/legal/${page.slug}`}
                className="group bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={16} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="font-bold text-neutral-dark text-sm leading-snug mb-2">
                  {page.title}
                </h2>
                <p className="text-xs text-neutral-medium leading-relaxed mb-4">
                  {DESCRIPTIONS[i]}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all">
                  Read policy <ArrowRight size={11} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-6 text-center">
          <p className="text-sm text-neutral-medium leading-relaxed">
            Questions about our policies?{" "}
            <a href="mailto:legal@mspkenya.org" className="text-primary font-semibold hover:underline">
              legal@mspkenya.org
            </a>
            {" "}· MSPKenya is open source under the{" "}
            <a href="https://opensource.org/licenses/MIT" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
          </p>
          <p className="text-xs text-neutral-medium/60 mt-2">© {new Date().getFullYear()} MSPKenya · All policies last reviewed January 2025</p>
        </div>
      </div>
    </div>
  );
}