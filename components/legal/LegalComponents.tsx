"use client";

import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-neutral-dark mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="space-y-3 text-sm text-neutral-medium leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-neutral-dark mb-2">{title}</h3>
      <div className="space-y-2 text-sm text-neutral-medium leading-relaxed">{children}</div>
    </div>
  );
}

export function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success" | "danger";
  children: React.ReactNode;
}) {
  const styles = {
    info:    { bg: "bg-primary/5 border-primary/20",  icon: <Info size={15} className="text-primary shrink-0 mt-0.5" /> },
    warning: { bg: "bg-warning/10 border-warning/30", icon: <AlertTriangle size={15} className="text-warning shrink-0 mt-0.5" /> },
    success: { bg: "bg-success/10 border-success/20", icon: <CheckCircle size={15} className="text-success shrink-0 mt-0.5" /> },
    danger:  { bg: "bg-error/10 border-error/20",     icon: <XCircle size={15} className="text-error shrink-0 mt-0.5" /> },
  }[type];

  return (
    <div className={`flex gap-3 border rounded-xl p-4 my-4 ${styles.bg}`}>
      {styles.icon}
      <p className="text-sm text-neutral-dark leading-relaxed">{children}</p>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 my-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-neutral-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 my-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-neutral-medium">
          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function DefinitionCard({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="bg-neutral-light rounded-xl px-4 py-3 mb-2">
      <span className="text-xs font-bold text-primary uppercase tracking-wider">{term}</span>
      <p className="text-sm text-neutral-medium mt-1">{definition}</p>
    </div>
  );
}

export function ContactBlock({ email, label }: { email: string; label: string }) {
  return (
    <div className="bg-primary rounded-xl p-5 mt-6">
      <p className="text-white/70 text-xs mb-1">{label}</p>
      <a href={`mailto:${email}`} className="text-white font-bold hover:underline text-sm">
        {email}
      </a>
    </div>
  );
}