"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Heart, Users, Lightbulb, ChevronDown, MapPin, AlertCircle } from "lucide-react";
import PersonCard from "../../components/PersonCard";
import Navbar from "../../components/header/Navbar";
import { useI18n } from "@/contexts/I18nContext";
import { KENYA_COUNTIES } from "@/lib/types";
import { Footer } from "@/components/footer/Footer";
import { useCases } from "@/services/cases/cases.queries";
import LoadingCube from "@/components/loading/loading";

export default function HomePage() {
  const { t } = useI18n();
  const [search, setSearch] = useState("");
  const [filterCounty, setFilterCounty] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const { data = [], isPending } = useCases();
  const isLoading = isPending || !data;

  console.log(data?.map((item) => item.name))

  const filtered = useMemo(() => {
    return data.filter((p) => {
      const q = search.toLowerCase();

      return (
        (!q ||
          p.name.toLowerCase().includes(q) ||
          p.physicalDescription.toLowerCase().includes(q) ||
          p.county.toLowerCase().includes(q)) &&
        (!filterCounty || p.county === filterCounty) &&
        (!filterStatus || p.caseStatus === filterStatus)
      );
    });
  }, [data, search, filterCounty, filterStatus]);

  const stats = {
    total: data.length,
    found: data.filter((c) => c.caseStatus === "found").length,
    tips: data.reduce((sum, c) => sum + c.communityTips.length, 0),
  };

  return (
    <div className="min-h-screen bg-neutral-light relative ">

      {/* Loader overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-neutral-light z-50 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <LoadingCube />
      </div>


      {/* Page content */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-primary">
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light opacity-30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-primary-dark opacity-40 blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 pt-20 pb-10 text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-soft animate-pulse" />
              <span className="opacity-90">Kenya Missing Persons Database</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
              {t("tagline")}
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("subtagline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Link
                href="/report"
                className="bg-white text-primary-dark font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-neutral-light transition-colors shadow-sm"
              >
                + {t("reportMissing")}
              </Link>
              <a
                href="#cases"
                className="bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full text-sm border border-white/25 hover:bg-white/20 transition-colors"
              >
                {t("searchPeople")}
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-lg mx-auto border border-white/10">
              {[
                { label: t("heroStat1"), value: stats.total },
                { label: t("heroStat2"), value: stats.found },
                { label: t("heroStat3"), value: stats.tips },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 px-6 py-5">
                  <div className="text-3xl font-bold tabular-nums">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
            </div>

          {/* Wave divider */}
          <div className="relative h-16 -mb-px">
            <svg
              viewBox="0 0 1440 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 64L60 53C120 43 240 21 360 16C480 11 600 21 720 27C840 32 960 32 1080 27C1200 21 1320 11 1380 5L1440 0V64H0Z"
                className="fill-neutral-light"
              />
            </svg>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              How it works
            </span>
            <h2 className="text-2xl font-bold text-neutral-dark mt-2">
              {t("How it Works")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={20} />,
                title: t("step1Title"),
                desc: t("step1Desc"),
                num: "01",
                color: "bg-accent/10 text-accent",
              },
              {
                icon: <Users size={20} />,
                title: t("step2Title"),
                desc: t("step2Desc"),
                num: "02",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: <Lightbulb size={20} />,
                title: t("step3Title"),
                desc: t("step3Desc"),
                num: "03",
                color: "bg-warning/10 text-warning",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-7 border border-border relative overflow-hidden group hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <span className="absolute top-5 right-5 text-5xl font-black text-neutral-dark/5 select-none">
                  {step.num}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-neutral-dark mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="h-px bg-border mx-4 md:mx-auto max-w-5xl" />

        {/* ── Cases ── */}
        <section id="cases" className="max-w-6xl mx-auto px-4 py-14">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Database
              </span>
              <h2 className="text-2xl font-bold text-neutral-dark mt-1">
                {t("allCases")}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm bg-white border border-border rounded-full px-4 py-1.5 text-neutral-medium">
              <AlertCircle size={13} className="text-accent" />
              {filtered?.length} {filtered?.length === 1 ? "case" : "cases"} found
            </span>
          </div>

          {/* Search & filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-8 p-4 bg-white rounded-2xl border border-border">
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-medium"
              />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-neutral-light text-sm text-neutral-dark placeholder:text-neutral-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="relative">
              <MapPin
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-medium pointer-events-none"
              />
              <select
                value={filterCounty}
                onChange={(e) => setFilterCounty(e.target.value)}
                className="appearance-none pl-9 pr-8 py-2.5 rounded-full border border-border bg-neutral-light text-sm text-neutral-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
              >
                <option value="">{t("county")}</option>
                {KENYA_COUNTIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-medium"
              />
            </div>

            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2.5 rounded-full border border-border bg-neutral-light text-sm text-neutral-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
              >
                <option value="">All statuses</option>
                <option value="missing">{t("missing")}</option>
                <option value="urgent">{t("urgent")}</option>
                <option value="found">{t("found")}</option>
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-medium"
              />
            </div>
          </div>

          {/* Results */}
          {filtered?.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-full bg-neutral-light flex items-center justify-center mx-auto mb-4">
                <Search size={22} className="text-neutral-medium" />
              </div>
              <h3 className="font-bold text-neutral-dark mb-1">{t("noResults")}</h3>
              <p className="text-sm text-neutral-medium">{t("noResultsSub")}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered?.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          )}
        </section>

        {/* ── Footer ── */}
        <Footer />

      </div>
    </div>
  );
}