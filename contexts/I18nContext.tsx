"use client";
import React, { createContext, useContext, useState } from "react";
import { Locale, localeNames, translate } from "./i18n";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  localeNames: typeof localeNames;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
  localeNames,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = (key: string) => translate(locale, key);
  return (
    <I18nContext.Provider value={{ locale, setLocale, t, localeNames }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}