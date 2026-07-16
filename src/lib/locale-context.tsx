import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem("locale");
  if (stored === "es" || stored === "en") return stored;
  const navLang = navigator.language?.split("-")[0];
  if (navLang === "en" || navLang === "es") return navLang;
  return "es";
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: "es",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l);
    }
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
