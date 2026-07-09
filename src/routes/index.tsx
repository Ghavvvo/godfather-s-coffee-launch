import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Coffee, Snowflake, Mail, MapPin } from "lucide-react";
import heroAsset from "@/assets/hero.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
const ways = [
  { title: "Espresso corto", desc: "Intenso, breve, incorruptible.", icon: Coffee },
  { title: "Capuchino espumoso", desc: "Terciopelo de leche sobre crema dorada.", icon: Coffee },
  { title: "Filtrado clásico", desc: "Aroma paciente para las mañanas largas.", icon: Coffee },
  { title: "Frío con hielo", desc: "Elegancia serena bajo el sol de Miami.", icon: Snowflake },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="El Café del Padrino" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#historia" className="hover:text-gold transition-colors">Historia</a>
            <a href="#formas" className="hover:text-gold transition-colors">Formas</a>
            <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero — full-bleed cinematic */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-end">
        <img
          src={heroAsset.url}
          alt="El Café del Padrino Espresso — paquete negro con detalles dorados sobre mármol"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Vignette + gradient scrim for readability */}
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

        {/* Side rail — vertical eyebrow */}
        <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 items-center gap-6 rotate-180" style={{ writingMode: "vertical-rl" }}>
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold/80">
            Hecho en Italia · 2026
          </span>
          <span className="block w-px h-24 bg-gold/40" />
        </div>

        {/* Content — anchored bottom, centered editorial */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-16 h-px bg-gold" />
              <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold">
                Espresso · 100% Coffee
              </p>
            </div>

            <h1 className="font-display text-[16vw] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight text-foreground">
              El café
              <span className="block italic pl-[8vw] md:pl-32" style={{
                backgroundImage: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                de la familia.
              </span>
            </h1>

            <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="font-display italic text-xl md:text-2xl text-muted-foreground max-w-md leading-snug">
                Tostado meticulosamente para honrar la tradición.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-[10px] uppercase tracking-[0.35em] font-medium hover:bg-gold-bright transition-colors"
                >
                  Ponte en contacto
                </a>
                <a
                  href="#historia"
                  className="text-[10px] uppercase tracking-[0.35em] text-foreground/70 hover:text-gold transition-colors border-b border-gold/40 pb-1"
                >
                  Nuestra historia
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 right-6 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/70"
        >
          <span>Scroll</span>
          <span className="block w-16 h-px bg-gold/50" />
        </motion.div>
      </section>

      {/* Brand strip */}
      <section className="relative py-16 border-y border-gold/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display italic text-2xl md:text-3xl text-gold-bright">
            Hecho en Italia · 100% Café Puro
          </p>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Tradición</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] tracking-tight">
              Un ritual heredado,
              <br />
              <span className="italic text-gold-bright">servido en cada taza.</span>
            </h2>
            <div className="mt-10 space-y-5 text-muted-foreground text-lg leading-relaxed max-w-lg">
              <p>
                En El Café del Padrino tostamos con la paciencia de quien entiende que
                el tiempo es parte del sabor. Cada grano es escogido, vigilado y
                honrado.
              </p>
              <p>
                Una receta italiana guardada como se guardan los asuntos importantes:
                en familia, con respeto, y sin atajos.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute inset-0 blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.13 82 / 0.4), transparent 65%)" }}
            />
            <img
              src={logoAsset.url}
              alt="Emblema El Café del Padrino"
              className="relative w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Formas */}
      <section id="formas" className="py-28 md:py-40 bg-card/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Formas de disfrutarlo</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1] tracking-tight">
              Como <span className="italic text-gold-bright">tú prefieras</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Un buen café no impone, ofrece. Estas son sus formas favoritas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-8 border border-gold/30 bg-background/60 hover:border-gold transition-colors"
                >
                  <Icon className="w-8 h-8 text-gold mb-8" strokeWidth={1} />
                  <h3 className="font-display text-2xl mb-3">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  <div className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-deep">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-28 md:py-40 relative">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.13 82 / 0.8), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8">Contacto</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight mb-12">
            Hablemos <span className="italic text-gold-bright">en familia</span>.
          </h2>
          <a
            href="mailto:hello@thegodfatherscoffee.com"
            className="inline-flex items-center gap-3 font-display text-2xl md:text-4xl text-gold hover:text-gold-bright transition-colors border-b border-gold/40 pb-2"
          >
            <Mail className="w-6 h-6" strokeWidth={1.5} />
            hello@thegodfatherscoffee.com
          </a>
          <div className="mt-12 inline-flex items-center gap-2 text-muted-foreground uppercase tracking-[0.3em] text-xs">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            Miami, Florida
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoAsset.url} alt="El Café del Padrino" className="h-10 w-auto opacity-80" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 El Café del Padrino · Gentleman's Roast
          </p>
        </div>
      </footer>
    </div>
  );
}
