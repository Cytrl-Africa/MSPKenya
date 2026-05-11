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
  FileText,
  User,
  MapPin,
  Phone,
  Info,
} from "lucide-react";
import Navbar from "@/components/header/Navbar";
import { useI18n } from "@/contexts/I18nContext";
import { KENYA_COUNTIES } from "@/lib/types";
import { Field } from "@/components/field";

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
  obNumber: string;
  obPhoto: File | null;
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
  obNumber: "",
  obPhoto: null,
};

const STEPS = ["Person", "Location", "Description", "Contact"];

export default function ReportPage() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [caseNumber, setCaseNumber] = useState("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [obPhotoPreview, setObPhotoPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const update = (field: keyof FormData, value: string | boolean | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePhotoChange = (file: File | null) => {
    if (!file) return;
    update("obPhoto", file);
    const reader = new FileReader();
    reader.onload = (e) => setObPhotoPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const validateStep = (s: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (s === 0) {
      if (!form.name.trim()) newErrors.name = "Required";
      if (!form.age) newErrors.age = "Required";
      if (!form.gender) newErrors.gender = "Required";
    }
    if (s === 1) {
      if (!form.county) newErrors.county = "Required";
      if (!form.lastSeenLocation.trim()) newErrors.lastSeenLocation = "Required";
      if (!form.lastSeenDate) newErrors.lastSeenDate = "Required";
    }
    if (s === 2) {
      if (!form.physicalDescription.trim()) newErrors.physicalDescription = "Required";
    }
    if (s === 3) {
      if (!form.isAnonymous) {
        if (!form.contactName.trim()) newErrors.contactName = "Required";
        if (!form.contactPhone.trim()) newErrors.contactPhone = "Required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    if (!validateStep(step)) return;
    const num = `TK-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    setCaseNumber(num);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(caseNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputBase =
    "w-full border rounded-xl px-3.5 py-2.5 text-sm text-neutral-dark placeholder:text-neutral-medium bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  const inputCls = (field: keyof FormData) =>
    `${inputBase} ${errors[field] ? "border-error ring-1 ring-error" : "border-border"}`;

  const selectCls = (field: keyof FormData) =>
    `${inputCls(field)} appearance-none pr-8`;

 
  // ── Success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-light">
        <Navbar />
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-success/10 border-4 border-success/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-success" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-dark mb-2">
            {t("successMessage")}
          </h2>
          <p className="text-sm text-neutral-medium mb-8 leading-relaxed">
            {t("successSub")}
          </p>

          {/* Case number card */}
          <div className="bg-white border border-border rounded-2xl p-5 mb-6">
            <p className="text-xs text-neutral-medium uppercase tracking-widest mb-3 font-semibold">
              Your Case Number
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-bold text-primary tracking-wide">
                {caseNumber}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-neutral-light hover:bg-border transition-colors text-neutral-medium"
              >
                {copied ? <Check size={15} className="text-success" /> : <Copy size={15} />}
              </button>
            </div>
            <p className="text-xs text-neutral-medium mt-3">
              Save this number to track your report status
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-border bg-white text-neutral-dark px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-light transition-colors"
            >
              <ArrowLeft size={14} />
              {t("backToHome")}
            </Link>
            <button
              onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); setStep(0); }}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              + {t("reportMissing")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-medium hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          {t("backToHome")}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-dark mb-2">
            {t("formHeading")}
          </h1>
          <p className="text-sm text-neutral-medium leading-relaxed">
            {t("formSubheading")}
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-8">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                    i < step
                      ? "bg-primary border-primary text-white"
                      : i === step
                      ? "bg-white border-primary text-primary"
                      : "bg-white border-border text-neutral-medium"
                  }`}
                >
                  {i < step ? <Check size={13} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${i === step ? "text-primary" : "text-neutral-medium"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mb-4 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* ── Step 0: Person details ── */}
        {step === 0 && (
          <div className="space-y-5">
            {/* Photo upload */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-2">
                <User size={15} className="text-primary" />
                <h3 className="font-bold text-neutral-dark text-sm">Person Details</h3>
              </div>
              <div className="p-6 space-y-4">
                {/* Photo drop zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    const file = e.dataTransfer.files[0];
                    if (file?.type.startsWith("image/")) {
                      const reader = new FileReader();
                      reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                  onClick={() => document.getElementById("photo-input")?.click()}
                  className={`relative rounded-xl border-2 border-dashed cursor-pointer transition-all flex flex-col items-center justify-center gap-3 py-8 ${
                    dragOver
                      ? "border-primary bg-primary/5"
                      : "border-border bg-neutral-light hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {photoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                    />
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center">
                        <Upload size={18} className="text-neutral-medium" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-neutral-dark">{t("addPhoto")}</p>
                        <p className="text-xs text-neutral-medium mt-0.5">{t("photoHelp")}</p>
                      </div>
                    </>
                  )}
                  <input
                    id="photo-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Field label={t("name")} required error={errors.name}>
                      <input
                        type="text"
                        className={inputCls("name")}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="e.g. Amina Wanjiru"
                      />
                    </Field>
                  </div>
                  <Field label={t("age_label")} required error={errors.age}>
                    <input
                      type="number"
                      className={inputCls("age")}
                      value={form.age}
                      onChange={(e) => update("age", e.target.value)}
                      placeholder="e.g. 14"
                      min="0"
                      max="120"
                    />
                  </Field>
                  <Field label={t("gender")} required error={errors.gender}>
                    <div className="relative">
                      <select
                        className={selectCls("gender")}
                        value={form.gender}
                        onChange={(e) => update("gender", e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="male">{t("male")}</option>
                        <option value="female">{t("female")}</option>
                        <option value="other">{t("other")}</option>
                        <option value="unknown">{t("unknown")}</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-medium" />
                    </div>
                  </Field>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 1: Location ── */}
        {step === 1 && (
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-2">
              <MapPin size={15} className="text-primary" />
              <h3 className="font-bold text-neutral-dark text-sm">{t("lastSeenLocation")}</h3>
            </div>
            <div className="p-6 space-y-4">
              <Field label={t("county")} required error={errors.county}>
                <div className="relative">
                  <select
                    className={selectCls("county")}
                    value={form.county}
                    onChange={(e) => update("county", e.target.value)}
                  >
                    <option value="">{t("selectCounty")}</option>
                    {KENYA_COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-medium" />
                </div>
              </Field>

              <Field label={t("lastSeenLocation")} required error={errors.lastSeenLocation}>
                <input
                  type="text"
                  className={inputCls("lastSeenLocation")}
                  value={form.lastSeenLocation}
                  onChange={(e) => update("lastSeenLocation", e.target.value)}
                  placeholder="e.g. Near Kawangware Market, Nairobi"
                />
              </Field>

              <Field label={t("lastSeen")} required error={errors.lastSeenDate}>
                <input
                  type="date"
                  className={inputCls("lastSeenDate")}
                  value={form.lastSeenDate}
                  onChange={(e) => update("lastSeenDate", e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
              </Field>
            </div>
          </div>
        )}

        {/* ── Step 2: Physical description ── */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-2">
                <FileText size={15} className="text-primary" />
                <h3 className="font-bold text-neutral-dark text-sm">{t("physicalDesc")}</h3>
              </div>
              <div className="p-6 space-y-4">
                <Field
                  label={t("physicalDesc")}
                  required
                  error={errors.physicalDescription}
                  hint="Height, build, skin tone, hair, distinguishing marks..."
                >
                  <textarea
                    rows={3}
                    className={inputCls("physicalDescription")}
                    value={form.physicalDescription}
                    onChange={(e) => update("physicalDescription", e.target.value)}
                    placeholder="e.g. Slim build, dark complexion, short hair, scar on left cheek..."
                  />
                </Field>

                <Field label={t("clothingDesc")}>
                  <textarea
                    rows={2}
                    className={inputCls("clothingDescription")}
                    value={form.clothingDescription}
                    onChange={(e) => update("clothingDescription", e.target.value)}
                    placeholder="Describe what they were wearing when last seen..."
                  />
                </Field>

                <Field label="Additional notes">
                  <textarea
                    rows={2}
                    className={inputCls("additionalNotes")}
                    value={form.additionalNotes}
                    onChange={(e) => update("additionalNotes", e.target.value)}
                    placeholder="Any other details that could help locate this person..."
                  />
                </Field>
              </div>
            </div>

            {/* OB Number card */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-2">
                <FileText size={15} className="text-primary" />
                <h3 className="font-bold text-neutral-dark text-sm">Police OB Number</h3>
                <span className="ml-auto text-xs text-neutral-medium font-normal">({t("optional")})</span>
              </div>
              <div className="p-6 space-y-4">
                {/* What is an OB number */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Info size={15} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-dark mb-1">
                        What is an OB Number?
                      </p>
                      <p className="text-xs text-neutral-medium leading-relaxed">
                        An Occurrence Book (OB) number is issued by the police when you file
                        a missing persons report at a police station. Filing a police report
                        significantly increases the chances of locating the missing person.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sample OB photo */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="bg-neutral-light px-4 py-2.5 border-b border-border">
                    <p className="text-xs font-semibold text-neutral-medium uppercase tracking-wider">
                      Example OB Entry
                    </p>
                  </div>
                  {/* SVG illustration of an OB book entry */}
                  <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <rect width="480" height="220" fill="#FAFAF9" />
                    {/* Ruled lines */}
                    {[40, 60, 80, 100, 120, 140, 160, 180, 200].map((y) => (
                      <line key={y} x1="16" y1={y} x2="464" y2={y} stroke="#E5E7EB" strokeWidth="0.5" />
                    ))}
                    {/* Left margin line */}
                    <line x1="60" y1="16" x2="60" y2="210" stroke="#FECACA" strokeWidth="1" />
                    {/* Header */}
                    <rect x="0" y="0" width="480" height="30" fill="#1F6F5F" />
                    <text x="240" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="serif">
                      KENYA POLICE SERVICE — OCCURRENCE BOOK
                    </text>
                    {/* OB Number highlight */}
                    <rect x="300" y="36" width="160" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
                    <text x="308" y="51" fill="#92400E" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      OB No: 47/12/2024
                    </text>
                    {/* Callout arrow */}
                    <line x1="380" y1="58" x2="380" y2="72" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,2" />
                    <text x="384" y="82" fill="#D97706" fontSize="9" fontFamily="sans-serif">← Record this number</text>
                    {/* Content lines */}
                    <text x="68" y="51" fill="#374151" fontSize="9" fontFamily="serif">Date: {new Date().toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</text>
                    <text x="68" y="71" fill="#374151" fontSize="9" fontFamily="serif">Station: Nairobi Central Police Station</text>
                    <text x="68" y="91" fill="#374151" fontSize="9" fontFamily="serif">Complainant: ________________________________</text>
                    <text x="68" y="111" fill="#374151" fontSize="9" fontFamily="serif">Nature: Missing Person — Amina Wanjiru, F, 14 yrs</text>
                    <text x="68" y="131" fill="#374151" fontSize="9" fontFamily="serif">Last seen: Kawangware Market, Nairobi</text>
                    <text x="68" y="151" fill="#6B7280" fontSize="8" fontFamily="serif" fontStyle="italic">Action taken: Report recorded and forwarded to CID...</text>
                    {/* Stamp */}
                    <circle cx="430" cy="170" r="28" fill="none" stroke="#1F6F5F" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.4" />
                    <text x="430" y="166" textAnchor="middle" fill="#1F6F5F" fontSize="7" fontWeight="bold" opacity="0.4">KENYA</text>
                    <text x="430" y="175" textAnchor="middle" fill="#1F6F5F" fontSize="7" fontWeight="bold" opacity="0.4">POLICE</text>
                  </svg>
                </div>

                <Field label="OB Number" hint="Enter the reference number from your police report">
                  <input
                    type="text"
                    className={inputCls("obNumber")}
                    value={form.obNumber}
                    onChange={(e) => update("obNumber", e.target.value)}
                    placeholder="e.g. 47/12/2024"
                  />
                </Field>

                {/* Upload OB photo */}
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-1.5">
                    Upload OB Photo{" "}
                    <span className="text-xs text-neutral-medium font-normal">({t("optional")})</span>
                  </label>
                  <div
                    onClick={() => document.getElementById("ob-photo-input")?.click()}
                    className="relative rounded-xl border-2 border-dashed border-border bg-neutral-light hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all overflow-hidden"
                  >
                    {obPhotoPreview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={obPhotoPreview}
                        alt="OB preview"
                        className="w-full h-32 object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 py-6">
                        <Upload size={18} className="text-neutral-medium" />
                        <p className="text-xs text-neutral-medium">
                          Take a photo or upload your OB document
                        </p>
                      </div>
                    )}
                    <input
                      id="ob-photo-input"
                      type="file"
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={(e) => handlePhotoChange(e.target.files?.[0] ?? null)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Contact info ── */}
        {step === 3 && (
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-2">
              <Phone size={15} className="text-primary" />
              <h3 className="font-bold text-neutral-dark text-sm">{t("contactInfo")}</h3>
            </div>
            <div className="p-6 space-y-4">
              <label className="flex items-center gap-2.5 text-sm text-neutral-medium cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.isAnonymous}
                  onChange={(e) => update("isAnonymous", e.target.checked)}
                  className="rounded accent-primary"
                />
                {t("reporterAnon")}
              </label>

              {!form.isAnonymous && (
                <>
                  <Field label={t("contactName")} required error={errors.contactName}>
                    <input
                      type="text"
                      className={inputCls("contactName")}
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label={t("contactPhone")} required error={errors.contactPhone}>
                    <input
                      type="tel"
                      className={inputCls("contactPhone")}
                      value={form.contactPhone}
                      onChange={(e) => update("contactPhone", e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                    />
                  </Field>
                  <Field label={t("relationship")}>
                    <input
                      type="text"
                      className={inputCls("relationship")}
                      value={form.relationship}
                      onChange={(e) => update("relationship", e.target.value)}
                      placeholder="e.g. Mother, Brother, Friend..."
                    />
                  </Field>
                </>
              )}

              {/* Privacy note */}
              <div className="bg-neutral-light rounded-xl p-4 flex items-start gap-2.5">
                <Info size={13} className="text-neutral-medium shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-medium leading-relaxed">
                  Your contact information is only shared with verified authorities
                  and is never displayed publicly on the platform.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 mt-6">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 border border-border bg-white text-neutral-dark hover:bg-neutral-light py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              ← Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              {t("submitReport")}
            </button>
          )}
        </div>

        <p className="text-center text-xs text-neutral-medium mt-4 mb-10">
          Step {step + 1} of {STEPS.length}
        </p>
      </div>
    </div>
  );
}