import { useLocale } from "./locale-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggle = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <button
      onClick={toggle}
      className="relative flex items-center gap-0 w-14 h-7 rounded-full border border-gold/40 bg-background/60 backdrop-blur-sm cursor-pointer hover:border-gold transition-colors"
      aria-label={`Switch language to ${locale === "es" ? "English" : "Español"}`}
    >
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-gold transition-all duration-300 ease-in-out ${
          locale === "en" ? "left-0.5" : "left-[calc(100%-1.625rem)]"
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-[10px] font-medium uppercase tracking-wider text-center transition-colors duration-300 ${
          locale === "en" ? "text-primary-foreground" : "text-gold/60"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-[10px] font-medium uppercase tracking-wider text-center transition-colors duration-300 ${
          locale === "es" ? "text-primary-foreground" : "text-gold/60"
        }`}
      >
        ES
      </span>
    </button>
  );
}
