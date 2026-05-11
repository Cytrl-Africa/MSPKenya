"use client";

import Link from "next/link";
import { MapPin, Calendar, MessageCircle, User } from "lucide-react";
import { useI18n } from "../contexts/I18nContext";
import { Case } from "@/services/cases/cases.types";

interface Props {
  person: Case;
}

function getTimeAgo(dateStr: string, t: (k: string) => string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return `< 1 ${t("daysAgo")}`;
  if (diffDays < 7) return `${diffDays} ${t("daysAgo")}`;
  const diffWeeks = Math.floor(diffDays / 7);
  return `${diffWeeks} ${t("weeksAgo")}`;
}

export default function PersonCard({ person }: Props) {
  const { t } = useI18n();

  const timeAgo = getTimeAgo(person.dateReported, t);

  const statusLabel =
    person.caseStatus === "urgent"
      ? t("urgent")
      : person.caseStatus === "found"
      ? t("found")
      : t("missing");

  const statusStyles = {
    urgent: {
      badge: "bg-red-100 text-red-700 border border-red-200",
      photo: "bg-red-50",
      dot: true,
    },
    found: {
      badge: "bg-success/10 text-success border border-success/20",
      photo: "bg-green-50",
      dot: false,
    },
    missing: {
      badge: "bg-primary/10 text-primary border border-primary/20",
      photo: "bg-neutral-light",
      dot: false,
    },
  }[person.caseStatus] ?? {
    badge: "bg-primary/10 text-primary border border-primary/20",
    photo: "bg-neutral-light",
    dot: false,
  };

  return (
    <Link href={`/cases/${person.id}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 group-hover:-translate-y-0.5">

        {/* Photo */}
        <div className={`relative h-48 flex items-center justify-center ${statusStyles.photo}`}>
          {person.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={person.photoUrl}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-25">
              <User size={52} strokeWidth={1} className="text-neutral-dark" />
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles.badge}`}>
              {statusStyles.dot && (
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              )}
              {statusLabel}
            </span>
          </div>

          {/* Case number */}
          <div className="absolute top-3 right-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-neutral-medium border border-white/60">
              #{person.caseNumber.split("-").pop()}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="mb-3">
            <h3 className="font-bold text-neutral-dark text-base leading-tight mb-0.5">
              {person.name}
            </h3>
            <p className="text-xs text-neutral-medium">
              {person.age} {t("age_label")} · {t(person.gender)}
            </p>
          </div>

          <div className="space-y-1.5 mb-3">
            <div className="flex items-start gap-2 text-xs text-neutral-medium">
              <MapPin size={12} className="mt-0.5 shrink-0 text-primary" />
              <span className="line-clamp-1">{person.lastSeenLocation}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-medium">
              <Calendar size={12} className="shrink-0 text-primary" />
              <span>{timeAgo}</span>
            </div>
          </div>

          <p className="text-xs text-neutral-medium line-clamp-2 leading-relaxed mb-4">
            {person.physicalDescription}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-1.5 text-xs text-neutral-medium">
              <MessageCircle size={12} />
              <span>{person.communityTips.length} {t("tips").toLowerCase()}</span>
            </div>
            <span className="text-xs font-semibold text-primary group-hover:underline">
              {t("viewDetails")} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}