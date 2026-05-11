"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  User,
  Phone,
  Share2,
  ArrowLeft,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  Heart,
  Clock,
} from "lucide-react";
import Navbar from "@/components/header/Navbar";
import { useI18n } from "@/contexts/I18nContext";
import { MOCK_CASES, Tip } from "@/lib/types";
import { useCases } from "@/services/cases/cases.queries";
import { CommunityTip } from "@/services/cases/cases.types";
import LoadingCube from "@/components/loading/loading";

export default function CaseDetailPage() {
  const { t } = useI18n();
  const params = useParams();
  const id = params?.id as string;
  const { data: cases = [], isPending } = useCases();

  
  const [tipText, setTipText] = useState("");
  const [tipAuthor, setTipAuthor] = useState("");
  const [isAnon, setIsAnon] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const isLoading = isPending || !cases;
  const person = cases.find((p) => p.id === id);
  const [tips, setTips] = useState<CommunityTip[]>(person?.communityTips ?? []);
    
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-light">
        <LoadingCube />
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-neutral-light">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-border flex items-center justify-center mx-auto mb-4">
            <User size={28} className="text-neutral-medium" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-dark mb-2">Case not found</h2>
          <p className="text-neutral-medium text-sm mb-6">
            This case may have been removed or the link is incorrect.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={14} />
            {t("backToHome")}
          </Link>
        </div>
      </div>
    );
  }

  const statusConfig = {
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

  const statusLabel =
    person.caseStatus === "urgent"
      ? t("urgent")
      : person.caseStatus === "found"
      ? t("found")
      : t("missing");

  const handleSubmitTip = () => {
    if (!tipText.trim()) return;
    const newTip: CommunityTip = {
      id: `t-${Date.now()}`,
      name: isAnon ? "Anonymous" : tipAuthor || "Anonymous",
      tip: tipText,
      reportDate: new Date().toISOString(),
      isAnonymous: isAnon,
      reportedCase: id
    };
    setTips((prev) => [...prev, newTip]);
    setTipText("");
    setTipAuthor("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (str: string) =>
    new Date(str).toLocaleDateString("en-KE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatTipTime = (str: string) =>
    new Date(str).toLocaleDateString("en-KE", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-medium hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          {t("backToHome")}
        </Link>

        <div className="grid md:grid-cols-5 gap-6">

          {/* ── Left column ── */}
          <div className="md:col-span-3 space-y-5">

            {/* Hero card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border">

              {/* Photo */}
              <div className={`relative h-72 flex items-center justify-center ${statusConfig.photo}`}>
                {person.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={person.photoUrl}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 opacity-20">
                    <User size={72} strokeWidth={1} className="text-neutral-dark" />
                    <span className="text-xs text-neutral-medium">No photo available</span>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${statusConfig.badge}`}>
                    {statusConfig.dot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    )}
                    {statusLabel}
                  </span>
                </div>

                {/* Share button */}
                <button
                  onClick={handleShare}
                  className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-neutral-dark hover:bg-white transition-colors"
                >
                  <Share2 size={12} />
                  {copied ? t("copied") : t("shareCase")}
                </button>
              </div>

              {/* Name + case number */}
              <div className="px-6 pt-5 pb-4 border-b border-border">
                <h1 className="text-2xl font-bold text-neutral-dark leading-tight">
                  {person.name}
                </h1>
                <p className="text-xs text-neutral-medium mt-1">
                  {t("caseNumber")} {person.caseNumber}
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-border">
                {[
                  { label: t("age_label"), value: `${person.age} years` },
                  { label: t("gender"), value: t(person.gender) },
                  { label: t("county"), value: person.county },
                  { label: t("reportedDate"), value: formatDate(person.dateReported) },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-5 py-3.5">
                    <p className="text-xs text-neutral-medium mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-neutral-dark">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Location + last seen */}
              <div className="px-6 py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-medium mb-0.5">{t("lastSeenLocation")}</p>
                    <p className="text-sm font-medium text-neutral-dark">{person.lastSeenLocation}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-medium mb-0.5">{t("lastSeen")}</p>
                    <p className="text-sm font-medium text-neutral-dark">{formatDate(person.lastSeenDate)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical description */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-bold text-neutral-dark mb-3">{t("physicalDesc")}</h3>
              <p className="text-sm text-neutral-medium leading-relaxed mb-4">
                {person.physicalDescription}
              </p>

              {person.clothingDescription && (
                <div className="bg-neutral-light rounded-xl p-4 mb-3">
                  <p className="text-xs font-semibold text-neutral-medium uppercase tracking-wider mb-1.5">
                    {t("clothingDesc")}
                  </p>
                  <p className="text-sm text-neutral-dark">{person.clothingDescription}</p>
                </div>
              )}

              {person.additionalNotes && (
                <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-4 py-3 mt-3">
                  <p className="text-sm text-neutral-dark leading-relaxed italic">
                    &ldquo;{person.additionalNotes}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Submit tip */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle size={16} className="text-primary" />
                <h3 className="font-bold text-neutral-dark">{t("addTip")}</h3>
              </div>
              <p className="text-xs text-neutral-medium mb-5">{t("shareInfo")}</p>

              {submitted && (
                <div className="flex items-center gap-2 text-sm mb-4 px-4 py-3 rounded-xl bg-success/10 text-success border border-success/20">
                  <CheckCircle size={15} />
                  <span>Thank you! Your tip has been submitted for review.</span>
                </div>
              )}

              <div className="space-y-3">
                <textarea
                  rows={3}
                  placeholder={t("tipPlaceholder")}
                  value={tipText}
                  onChange={(e) => setTipText(e.target.value)}
                  className="w-full border border-border rounded-xl p-3 text-sm resize-none text-neutral-dark placeholder:text-neutral-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />

                <div className="flex items-center gap-3">
                  {!isAnon && (
                    <input
                      type="text"
                      placeholder={t("contactName")}
                      value={tipAuthor}
                      onChange={(e) => setTipAuthor(e.target.value)}
                      className="flex-1 border border-border rounded-xl px-3 py-2.5 text-sm text-neutral-dark placeholder:text-neutral-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  )}
                  <label className="flex items-center gap-2 text-sm text-neutral-medium cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAnon}
                      onChange={(e) => setIsAnon(e.target.checked)}
                      className="rounded accent-primary"
                    />
                    {t("reporterAnon")}
                  </label>
                </div>

                <div className="flex items-start gap-2 text-xs text-neutral-medium bg-neutral-light rounded-lg px-3 py-2.5">
                  <AlertTriangle size={12} className="mt-0.5 shrink-0 text-warning" />
                  <span>{t("tipWarning")}</span>
                </div>

                <button
                  onClick={handleSubmitTip}
                  disabled={!tipText.trim()}
                  className="w-full bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={14} />
                  {t("submitTip")}
                </button>
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="md:col-span-2 space-y-5">

            {/* Contact card */}
            <div className="bg-white rounded-2xl border border-border p-5">
              <h3 className="font-bold text-neutral-dark mb-4">{t("contactInfo")}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-light flex items-center justify-center shrink-0">
                    <User size={15} className="text-neutral-medium" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-medium">{t("reportedBy")}</p>
                    <p className="text-sm font-semibold text-neutral-dark">{person.contactInfo.name}</p>
                  </div>
                </div>
                <a
                  href={`tel:${person.contactInfo.phoneNumber}`}
                  className="flex items-center gap-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-xl p-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-medium">{t("contactPhone")}</p>
                    <p className="text-sm font-bold text-primary group-hover:underline">
                      {person.contactInfo.phoneNumber}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Community tips */}
            <div className="bg-white rounded-2xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={15} className="text-primary" />
                <h3 className="font-bold text-neutral-dark">{t("tips")}</h3>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {tips.length}
                </span>
              </div>

              {tips.length === 0 ? (
                <div className="text-center py-8">
                  <Heart size={22} className="mx-auto mb-2 text-neutral-medium opacity-40" />
                  <p className="text-sm text-neutral-medium">{t("noTipsYet")}</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {tips.map((tip) => (
                    <div
                      key={tip.id}
                      className={`rounded-xl p-3 border-l-2 bg-neutral-light ${
                        tip.isAnonymous ? "border-border" : "border-primary"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-xs font-semibold ${tip.isAnonymous ? "text-neutral-medium" : "text-primary"}`}>
                          {tip.isAnonymous ? "Anonymous" : tip.name}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-neutral-medium">
                          <Clock size={10} />
                          {formatTipTime(tip.reportDate)}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-dark leading-relaxed">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency numbers */}
            <div className="bg-primary rounded-2xl p-5">
              <p className="text-xs text-white/70 uppercase tracking-widest mb-3 font-semibold">
                {t("emergencyNote")}
              </p>
              <div className="space-y-2">
                <a
                  href="tel:999"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">{t("police")}</span>
                </a>
                <a
                  href="tel:116"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">{t("childHelpline")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}