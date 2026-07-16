import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Coffee, Snowflake, Mail, MapPin, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import heroImg from "@/assets/hero.webp";
import logoGoldImg from "@/assets/logo-gold.webp";
import productFrontImg from "@/assets/product-front.webp";
import productSideImg from "@/assets/product-side.webp";
import productBackImg from "@/assets/product-back.webp";
import { useLocale } from "@/lib/locale-context";
import { t, type Locale } from "@/lib/i18n";
import { LanguageToggle } from "@/lib/language-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preload", href: heroImg, as: "image" },
    ],
  }),
  component: Index,
});

function getWays(locale: Locale) {
  return [
    { title: t("card.espresso.title", locale), desc: t("card.espresso.desc", locale), icon: Coffee, gradient: ["oklch(0.25 0.04 30)", "oklch(0.14 0.01 60)"] },
    { title: t("card.capuchino.title", locale), desc: t("card.capuchino.desc", locale), icon: Coffee, gradient: ["oklch(0.30 0.06 65)", "oklch(0.16 0.008 60)"] },
    { title: t("card.filtrado.title", locale), desc: t("card.filtrado.desc", locale), icon: Coffee, gradient: ["oklch(0.28 0.05 75)", "oklch(0.14 0.01 60)"] },
    { title: t("card.helado.title", locale), desc: t("card.helado.desc", locale), icon: Snowflake, gradient: ["oklch(0.20 0.03 230)", "oklch(0.14 0.005 60)"] },
  ];
}

function getProductViews(locale: Locale) {
  return [
    { src: productFrontImg, alt: t("product.viewFront", locale), label: t("product.front", locale) },
    { src: productSideImg, alt: t("product.viewSide", locale), label: t("product.side", locale) },
    { src: productBackImg, alt: t("product.viewBack", locale), label: t("product.back", locale) },
  ];
}

function ProductGallery({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const productViews = getProductViews(locale);
  const go = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + productViews.length) % productViews.length);
  };
  const current = productViews[index];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
      <div className="flex md:flex-col gap-3">
        {productViews.map((v, i) => (
          <button
            key={v.label}
            onClick={() => go(i)}
            aria-label={`${t("gallery.view", locale)} ${v.label}`}
            aria-pressed={i === index}
            className={`relative w-20 h-24 md:w-24 md:h-28 overflow-hidden border transition-all duration-300 ${
              i === index
                ? "border-gold shadow-[0_0_0_1px_var(--gold)]"
                : "border-gold/20 opacity-60 hover:opacity-100 hover:border-gold/60"
            }`}
          >
            <img src={v.src} alt={v.alt} width={1920} height={1440} loading="lazy" className="absolute inset-0 w-full h-full object-contain bg-background/40" />
          </button>
        ))}
      </div>

      <div className="relative flex-1 w-full">
        <div
          aria-hidden
          className="absolute inset-0 blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.13 82 / 0.4), transparent 65%)" }}
        />
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={1920}
              height={1440}
              loading="lazy"
              custom={direction}
              initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>

          <button
            onClick={() => go(index - 1)}
            aria-label={t("gallery.prev", locale)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gold/30 bg-background/60 backdrop-blur-sm text-gold hover:border-gold hover:bg-background/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label={t("gallery.next", locale)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gold/30 bg-background/60 backdrop-blur-sm text-gold hover:border-gold hover:bg-background/80 transition-colors"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-gold/80">
          <span className="block w-8 h-px bg-gold/40" />
          {current.label}
          <span className="block w-8 h-px bg-gold/40" />
        </div>
      </div>
    </div>
  );
}

function Index() {
  const { locale } = useLocale();
  const [bgColor, setBgColor] = useState("oklch(0.13 0.005 60)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const bg = entry.target.getAttribute("data-bg");
            if (bg) setBgColor(bg);
          }
        }
      },
      { threshold: 0.3 },
    );
    const elements = document.querySelectorAll("[data-bg]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ways = getWays(locale);

  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-x-hidden"
      style={{ backgroundColor: bgColor, transition: "background-color 0.8s ease" }}
    >
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
            <img src={logoGoldImg} alt="El Café del Padrino" width={1920} height={1920} className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#historia" className="hover:text-gold transition-colors">{t("nav.story", locale)}</a>
            <a href="#formas" className="hover:text-gold transition-colors">{t("nav.ways", locale)}</a>
            <a href="#contacto" className="hover:text-gold transition-colors">{t("nav.contact", locale)}</a>
            <LanguageToggle />
          </nav>
          <div className="flex md:hidden items-center gap-4">
            <LanguageToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex items-center justify-center w-10 h-10 text-gold hover:text-gold-bright transition-colors">
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-4/5 sm:max-w-sm bg-background/95 backdrop-blur-md border-l border-gold/20 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-12">
                  <img src={logoGoldImg} alt="El Café del Padrino" width={1920} height={1920} className="h-10 w-auto" />
                </div>
                <nav className="flex flex-col gap-8">
                  <SheetClose asChild>
                    <a href="#historia" className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors">{t("nav.story", locale)}</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#formas" className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors">{t("nav.ways", locale)}</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#contacto" className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors">{t("nav.contact", locale)}</a>
                  </SheetClose>
                </nav>
                <div className="mt-auto">
                  <div className="h-px bg-gold/30 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] text-gold/60">{t("sideRail.madeIn", locale)}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-end" data-bg="oklch(0.12 0.005 60)">
        <img
          src={heroImg}
          alt="El Café del Padrino Espresso — paquete negro con detalles dorados sobre mármol"
          width={1122}
          height={1402}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
        />
        <div
          aria-hidden
          className="hidden lg:block absolute inset-0"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            maskImage: "radial-gradient(ellipse 150% 150% at 55% 50%, transparent 30%, black 38%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 1000% at 50% 45%, transparent 30%, black 38%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.13 0.005 60 / 0.75) 0%, oklch(0.13 0.005 60 / 0.25) 35%, oklch(0.13 0.005 60 / 0.55) 70%, oklch(0.13 0.005 60 / 0.95) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, transparent 0%, oklch(0.13 0.005 60 / 0.4) 70%)",
          }}
        />

        <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 items-center gap-6 rotate-180" style={{ writingMode: "vertical-rl" }}>
          <span className="text-xs uppercase tracking-[0.5em] text-gold/80">
            {t("sideRail.madeIn", locale)}
          </span>
          <span className="block w-px h-24 bg-gold/40" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-16 h-px bg-gold" />
              <p className="text-xs uppercase tracking-[0.5em] text-gold">
                {t("hero.eyebrow", locale)}
              </p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="font-display italic text-2xl md:text-3xl text-muted-foreground max-w-md leading-snug">
                {t("hero.tagline", locale)}
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-[0.35em] font-medium hover:bg-gold-bright transition-colors"
                >
                  {t("hero.cta", locale)}
                </a>
                <a
                  href="#historia"
                  className="text-sm uppercase tracking-[0.35em] text-foreground/70 hover:text-gold transition-colors border-b border-gold/40 pb-1"
                >
                  {t("hero.storyLink", locale)}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 right-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold/70"
        >
          <span>{t("scroll", locale)}</span>
          <span className="block w-16 h-px bg-gold/50" />
        </motion.div>
      </section>

      {/* Brand strip */}
      <section className="relative py-16 border-y border-gold/30" data-bg="oklch(0.22 0.04 75)">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display italic text-2xl md:text-3xl text-gold-bright">
            {t("brand.text", locale)}
          </p>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-28 md:py-40" data-bg="oklch(0.14 0.02 50)">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">{t("story.label", locale)}</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] tracking-tight">
              {t("story.title1", locale)}
              <br />
              <span className="italic text-gold-bright">{t("story.title2", locale)}</span>
            </h2>
            <div className="mt-10 text-muted-foreground text-lg leading-relaxed max-w-lg">
              <p>
                {t("story.body", locale)}
              </p>
            </div>
          </div>
          <ProductGallery locale={locale} />
        </div>
      </section>

      {/* Formas */}
      <section id="formas" className="py-28 md:py-40 bg-card/40 border-y border-border/40" data-bg="oklch(0.20 0.025 70)">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">{t("ways.label", locale)}</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] tracking-tight">
              {t("ways.titlePre", locale)}<span className="italic text-gold-bright">{t("ways.titleItalic", locale)}</span>{t("ways.titleSuffix", locale)}
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              {t("ways.subtitle", locale)}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="relative max-w-[500px] w-full aspect-square">
                  <div
                    className="absolute w-[90%] aspect-square left-1/2 -translate-x-1/2 bottom-[-15px] z-[-2] blur-[15px]"
                    style={{
                      background: `linear-gradient(135deg, ${w.gradient[0]}, ${w.gradient[1]})`,
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, scale: { duration: 0.1, ease: [0.25, 0.45, 0.45, 0.95] } }}
                    className="relative w-full h-full overflow-hidden border border-gold/30 hover:border-gold"
                  >
                    <div
                      className="absolute inset-0 z-[-1]"
                      style={{
                        background: `linear-gradient(135deg, ${w.gradient[0]}, ${w.gradient[1]})`,
                      }}
                    />
                    <div className="h-full flex flex-col justify-between p-8 relative z-0">
                      <div className="flex justify-between items-start">
                        <Icon className="w-8 h-8 text-gold" strokeWidth={1} />
                        <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">0{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl mb-2">{w.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-28 md:py-40 relative" data-bg="oklch(0.12 0.005 60)">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.13 82 / 0.8), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8">{t("contact.label", locale)}</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight mb-12">
            {t("contact.titlePre", locale)}<span className="italic text-gold-bright">{t("contact.titleItalic", locale)}</span>{t("contact.titleSuffix", locale)}
          </h2>
          <div>
            <motion.a
              href="mailto:hello@thegodfatherscoffee.com"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 font-display text-lg sm:text-2xl md:text-4xl text-gold hover:text-gold-bright transition-colors border-b border-gold/40 pb-2 break-all"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.5} />
              hello@thegodfatherscoffee.com
            </motion.a>
          </div>
          <div className="mt-12 inline-flex items-center gap-2 text-muted-foreground uppercase tracking-[0.3em] text-xs">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            Miami, Florida
          </div>
          <div className="mt-16 space-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <p>{t("contact.distributorAmerica", locale)}</p>
            <p>{t("contact.distributorEurope", locale)}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <p className="text-xs sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.3em] text-muted-foreground whitespace-nowrap">
            {t("footer.rights", locale)}
          </p>
        </div>
      </footer>
    </div>
  );
}
