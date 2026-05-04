"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, Menu, X, Phone } from "lucide-react";
import { Locale } from "../../contexts/i18n"; 
import { useI18n } from "../../contexts/I18nContext";

export default function Navbar() {
  const { t, locale, setLocale, localeNames } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <>
      {/* Emergency bar */}
      <div className="bg-accent text-white text-center text-sm py-1.5 px-4">
        <span className="flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Phone size={12} />
            <strong>{t("police")}</strong>
          </span>
          <span className="opacity-50">·</span>
          <span className="flex items-center gap-1">
            <Phone size={12} />
            <strong>{t("childHelpline")}</strong>
          </span>
        </span>
      </div>

      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-primary text-white">
              MSP
            </div>
            <div>
              <div className="font-bold text-lg leading-tight text-primary-dark">
                MSPKenya
              </div>
              <div className="text-xs text-neutral-medium">
                Missing Persons Database
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-medium hover:text-primary transition-colors"
            >
              {t("allCases")}
            </Link>
            <Link
              href="/report"
              className="text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors px-4 py-2 rounded-full"
            >
              + {t("reportMissing")}
            </Link>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-border text-neutral-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Globe size={14} />
                <span>{localeNames[locale]}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 rounded-xl shadow-lg overflow-hidden z-50 min-w-[160px] bg-background border border-border">
                  {(Object.entries(localeNames) as [Locale, string][]).map(
                    ([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLocale(code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-neutral-light ${
                          locale === code
                            ? "text-primary font-semibold"
                            : "text-neutral-dark"
                        }`}
                      >
                        {name}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-neutral-dark"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border px-4 py-4 space-y-3 bg-neutral-light">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium py-2 text-neutral-medium hover:text-primary transition-colors"
            >
              {t("allCases")}
            </Link>
            <Link
              href="/report"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-2.5 rounded-full text-sm text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              + {t("reportMissing")}
            </Link>

            <div className="pt-2 border-t border-border">
              <p className="text-xs mb-2 text-neutral-medium">
                Language / Lugha
              </p>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(localeNames) as [Locale, string][]).map(
                  ([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLocale(code);
                        setMenuOpen(false);
                      }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        locale === code
                          ? "bg-primary text-white border-primary"
                          : "bg-transparent text-neutral-medium border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {name}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}