"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";
import Navbar from "@/components/header/Navbar";
import { useI18n } from "@/contexts/I18nContext";
import { KENYA_COUNTIES } from "@/lib/types";

interface FormData {
  name: string;
  age: string;
  gender: string;
  county: string;
  lastSeenLocation: string;
  lastSeenDate: string;
  physicalDescription: string;
  clothingDescription: string;
  additionalNotes: string;
  contactName: string;
  contactPhone: string;
  relationship: string;
  isAnonymous: boolean;
}

const EMPTY_FORM: FormData = {
  name: "",
  age: "",
  gender: "",
  county: "",
  lastSeenLocation: "",
  lastSeenDate: "",
  physicalDescription: "",
  clothingDescription: "",
  additionalNotes: "",
  contactName: "",
  contactPhone: "",
  relationship: "",
  isAnonymous: false,
};

export default function ReportPage() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [caseNumber, setCaseNumber] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.age) newErrors.age = "Required";
    if (!form.county) newErrors.county = "Required";
    if (!form.lastSeenLocation.trim()) newErrors.lastSeenLocation = "Required";
    if (!form.lastSeenDate) newErrors.lastSeenDate = "Required";
    if (!form.physicalDescription.trim()) newErrors.physicalDescription = "Required";
    if (!form.isAnonymous) {
      if (!form.contactName.trim()) newErrors.contactName = "Required";
      if (!form.contactPhone.trim()) newErrors.contactPhone = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // Generate a mock case number — replace with real API call
    const num = `TK-2024-${String(Math.floor(Math.random() * 900) + 100).padStart(4, "0")}`;
    setCaseNumber(num);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(caseNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-xl px-3 py-2.5 text-sm transition-colors ${
      errors[field] ? "border-red-400" : ""
    }`;

  const inputStyle = (field: keyof FormData) => ({
    borderColor: errors[field] ? "#F87171" : "var(--sand-dark)",
    color: "var(--night)",
    background: "white",
  });

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
        <Navbar />
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--forest)", color: "white" }}
          >
            <CheckCircle size={36} />
          </div>
          <h2 className="serif text-3xl font-bold mb-3" style={{ color: "var(--night)" }}>
            {t("successMessage")}
          </h2>

          <div
            className="flex items-center justify-center gap-3 my-4 px-5 py-3 rounded-xl"
            style={{ background: "var(--sand)" }}
          >
            <span className="serif text-xl font-bold" style={{ color: "var(--terra)" }}>
              {caseNumber}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg transition-colors hover:bg-[var(--sand-dark)]"
              style={{ color: "var(--warm-gray)" }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <p className="text-sm mb-8" style={{ color: "var(--warm-gray)" }}>
            {t("successSub")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-secondary px-6 py-2.5 rounded-full text-sm"
            >
              ← {t("backToHome")}
            </Link>
            <button
              onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
              className="btn-primary px-6 py-2.5 rounded-full text-sm"
            >
              + {t("reportMissing")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="rounded-2xl p-5 card-shadow mb-5" style={{ background: "white" }}>
      <h3 className="serif font-bold text-base mb-4 pb-3 border-b" style={{ color: "var(--night)", borderColor: "var(--sand-dark)" }}>
        {title}
      </h3>
      {children}
    </div>
  );

  const Field = ({
    label,
    required,
    error,
    children,
  }: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
  }) => (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--earth)" }}>
        {label}{" "}
        {required && (
          <span className="text-xs ml-1" style={{ color: "var(--terra)" }}>*</span>
        )}
        {!required && (
          <span className="text-xs ml-1" style={{ color: "var(--warm-gray-light)" }}>
            ({t("optional")})
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs mt-1 flex items-center gap-1" style={{ color: "#EF4444" }}>
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70" style={{ color: "var(--warm-gray)" }}>
          <ArrowLeft size={14} /> {t("backToHome")}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="serif text-3xl font-bold mb-2" style={{ color: "var(--night)" }}>
            {t("formHeading")}
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
            {t("formSubheading")}
          </p>
        </div>

        {/* Photo upload (visual only) */}
        <div
          className="rounded-2xl p-5 mb-5 text-center border-2 border-dashed cursor-pointer transition-colors hover:border-[var(--terra)]"
          style={{ borderColor: "var(--sand-dark)", background: "var(--sand)" }}
        >
          <Upload size={28} className="mx-auto mb-3" style={{ color: "var(--terra-light)" }} />
          <p className="text-sm font-medium" style={{ color: "var(--earth)" }}>{t("addPhoto")}</p>
          <p className="text-xs mt-1" style={{ color: "var(--warm-gray)" }}>{t("photoHelp")}</p>
        </div>

        {/* Person details */}
        <Section title={t("description")}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Field label={t("name")} required error={errors.name}>
                <input
                  type="text"
                  className={inputClass("name")}
                  style={inputStyle("name")}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="e.g. Amina Wanjiru"
                />
              </Field>
            </div>

            <Field label={t("age_label")} required error={errors.age}>
              <input
                type="number"
                className={inputClass("age")}
                style={inputStyle("age")}
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                placeholder="e.g. 14"
                min="0"
                max="120"
              />
            </Field>

            <Field label={t("gender")} required>
              <div className="relative">
                <select
                  className={`${inputClass("gender")} appearance-none pr-8`}
                  style={inputStyle("gender")}
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="male">{t("male")}</option>
                  <option value="female">{t("female")}</option>
                  <option value="other">{t("other")}</option>
                  <option value="unknown">{t("unknown")}</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--warm-gray)" }} />
              </div>
            </Field>
          </div>
        </Section>

        {/* Location details */}
        <Section title={t("lastSeenLocation")}>
          <div className="space-y-4">
            <Field label={t("county")} required error={errors.county}>
              <div className="relative">
                <select
                  className={`${inputClass("county")} appearance-none pr-8`}
                  style={inputStyle("county")}
                  value={form.county}
                  onChange={(e) => update("county", e.target.value)}
                >
                  <option value="">{t("selectCounty")}</option>
                  {KENYA_COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--warm-gray)" }} />
              </div>
            </Field>

            <Field label={t("lastSeenLocation")} required error={errors.lastSeenLocation}>
              <input
                type="text"
                className={inputClass("lastSeenLocation")}
                style={inputStyle("lastSeenLocation")}
                value={form.lastSeenLocation}
                onChange={(e) => update("lastSeenLocation", e.target.value)}
                placeholder="e.g. Near Kawangware Market, Nairobi"
              />
            </Field>

            <Field label={t("lastSeen")} required error={errors.lastSeenDate}>
              <input
                type="date"
                className={inputClass("lastSeenDate")}
                style={inputStyle("lastSeenDate")}
                value={form.lastSeenDate}
                onChange={(e) => update("lastSeenDate", e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </Field>
          </div>
        </Section>

        {/* Physical description */}
        <Section title={t("physicalDesc")}>
          <div className="space-y-4">
            <Field label={t("physicalDesc")} required error={errors.physicalDescription}>
              <textarea
                rows={3}
                className={inputClass("physicalDescription")}
                style={inputStyle("physicalDescription")}
                value={form.physicalDescription}
                onChange={(e) => update("physicalDescription", e.target.value)}
                placeholder="Height, build, skin tone, hair, distinguishing marks..."
              />
            </Field>

            <Field label={t("clothingDesc")}>
              <textarea
                rows={2}
                className={inputClass("clothingDescription")}
                style={inputStyle("clothingDescription")}
                value={form.clothingDescription}
                onChange={(e) => update("clothingDescription", e.target.value)}
                placeholder="Describe what they were wearing when last seen..."
              />
            </Field>

            <Field label="Additional notes / Maelezo zaidi">
              <textarea
                rows={2}
                className={inputClass("additionalNotes")}
                style={inputStyle("additionalNotes")}
                value={form.additionalNotes}
                onChange={(e) => update("additionalNotes", e.target.value)}
                placeholder="Any other details that could help..."
              />
            </Field>
          </div>
        </Section>

        {/* Contact info */}
        <Section title={t("contactInfo")}>
          <div className="space-y-4">
            <label className="flex items-center gap-2.5 text-sm cursor-pointer mb-2" style={{ color: "var(--warm-gray)" }}>
              <input
                type="checkbox"
                checked={form.isAnonymous}
                onChange={(e) => update("isAnonymous", e.target.checked)}
                style={{ accentColor: "var(--terra)" }}
              />
              {t("reporterAnon")}
            </label>

            {!form.isAnonymous && (
              <>
                <Field label={t("contactName")} required error={errors.contactName}>
                  <input
                    type="text"
                    className={inputClass("contactName")}
                    style={inputStyle("contactName")}
                    value={form.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    placeholder="Your full name"
                  />
                </Field>
                <Field label={t("contactPhone")} required error={errors.contactPhone}>
                  <input
                    type="tel"
                    className={inputClass("contactPhone")}
                    style={inputStyle("contactPhone")}
                    value={form.contactPhone}
                    onChange={(e) => update("contactPhone", e.target.value)}
                    placeholder="+254 7XX XXX XXX"
                  />
                </Field>
                <Field label={t("relationship")}>
                  <input
                    type="text"
                    className={inputClass("relationship")}
                    style={inputStyle("relationship")}
                    value={form.relationship}
                    onChange={(e) => update("relationship", e.target.value)}
                    placeholder="e.g. Mother, Brother, Friend..."
                  />
                </Field>
              </>
            )}
          </div>
        </Section>

        <button
          onClick={handleSubmit}
          className="btn-primary w-full py-3.5 rounded-xl text-base mb-10"
        >
          {t("submitReport")}
        </button>
      </div>
    </div>
  );
}
