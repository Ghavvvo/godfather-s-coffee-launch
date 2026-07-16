export type Locale = "es" | "en";

type Dict = Record<string, Record<Locale, string>>;

const dict: Dict = {
  "nav.story": { es: "Historia", en: "Story" },
  "nav.ways": { es: "Formas", en: "Ways" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  "hero.eyebrow": { es: "Espresso · 100% Coffee", en: "Espresso · 100% Coffee" },
  "hero.tagline": {
    es: "Tostado meticulosamente para honrar la tradición.",
    en: "Meticulously roasted to honor tradition.",
  },
  "hero.cta": { es: "Ponte en contacto", en: "Get in touch" },
  "hero.storyLink": { es: "Nuestra historia", en: "Our story" },

  "brand.text": { es: "Hecho en Italia · 100% Café Puro", en: "Made in Italy · 100% Pure Coffee" },

  "story.label": { es: "Tradición", en: "Tradition" },
  "story.title1": { es: "Tradición italiana,", en: "Italian tradition," },
  "story.title2": { es: "corazón cubano.", en: "Cuban heart." },
  "story.body": {
    es: "La tradición cafetera italiana se encuentra con el ritual cubano del café. Un espresso puro, con carácter, para compartir en familia.",
    en: "Italian coffee tradition meets the Cuban coffee ritual. A pure, characterful espresso to share with family.",
  },

  "product.front": { es: "Frente", en: "Front" },
  "product.side": { es: "Costado", en: "Side" },
  "product.back": { es: "Atrás", en: "Back" },
  "product.viewFront": {
    es: "Vista frontal del paquete El Café del Padrino",
    en: "Front view of El Café del Padrino package",
  },
  "product.viewSide": {
    es: "Vista lateral del paquete El Café del Padrino",
    en: "Side view of El Café del Padrino package",
  },
  "product.viewBack": {
    es: "Vista trasera del paquete El Café del Padrino",
    en: "Back view of El Café del Padrino package",
  },

  "ways.label": { es: "Formas de disfrutarlo", en: "Ways to enjoy it" },
  "ways.titlePre": { es: "Como ", en: "Your " },
  "ways.titleItalic": { es: "tú prefieras", en: "way" },
  "ways.titleSuffix": { es: ".", en: "." },
  "ways.subtitle": {
    es: "Un buen café no impone, ofrece. Estas son sus formas favoritas.",
    en: "A good coffee doesn't impose, it offers. These are its favorite forms.",
  },

  "card.espresso.title": { es: "Espresso corto", en: "Short espresso" },
  "card.espresso.desc": {
    es: "Intenso, breve, incorruptible.",
    en: "Intense, brief, incorruptible.",
  },
  "card.capuchino.title": { es: "Capuchino espumoso", en: "Foamy cappuccino" },
  "card.capuchino.desc": {
    es: "Terciopelo de leche sobre crema dorada.",
    en: "Milk velvet over golden cream.",
  },
  "card.filtrado.title": { es: "Filtrado clásico", en: "Classic pour-over" },
  "card.filtrado.desc": {
    es: "Aroma paciente para las mañanas largas.",
    en: "Patient aroma for long mornings.",
  },
  "card.helado.title": { es: "Frío con hielo", en: "Iced coffee" },
  "card.helado.desc": {
    es: "Elegancia serena bajo el sol de Miami.",
    en: "Serene elegance under the Miami sun.",
  },

  "contact.label": { es: "Contacto", en: "Contact" },
  "contact.titlePre": { es: "Hablemos ", en: "Let's talk " },
  "contact.titleItalic": { es: "en familia", en: "as a family" },
  "contact.titleSuffix": { es: ".", en: "." },
  "contact.distributorAmerica": {
    es: "América: Deliflow — Distribuidor Oficial",
    en: "Americas: Deliflow — Official Distributor",
  },
  "contact.distributorEurope": {
    es: "Europa: 2EFFE S.A.S — Distribuidor Oficial",
    en: "Europe: 2EFFE S.A.S — Official Distributor",
  },

  scroll: { es: "Scroll", en: "Scroll" },
  "sideRail.madeIn": { es: "Hecho en Italia · 2026", en: "Made in Italy · 2026" },
  "footer.rights": {
    es: "© 2026 El Café del Padrino · Gentleman's Roast",
    en: "© 2026 El Café del Padrino · Gentleman's Roast",
  },

  "404.title": { es: "Página no encontrada", en: "Page not found" },
  "404.subtitle": {
    es: "La página que buscas no existe o ha sido movida.",
    en: "The page you're looking for doesn't exist or has been moved.",
  },
  "404.cta": { es: "Volver al inicio", en: "Go home" },

  "error.title": { es: "Esta página no cargó", en: "This page didn't load" },
  "error.subtitle": {
    es: "Algo salió mal. Puedes intentar recargar o volver al inicio.",
    en: "Something went wrong. You can try refreshing or go back home.",
  },
  "error.retry": { es: "Intentar de nuevo", en: "Try again" },
  "error.home": { es: "Volver al inicio", en: "Go home" },

  "gallery.view": { es: "Ver", en: "View" },
  "gallery.prev": { es: "Anterior", en: "Previous" },
  "gallery.next": { es: "Siguiente", en: "Next" },
};

export function t(key: string, locale: Locale): string {
  const entry = dict[key];
  if (!entry) {
    console.warn(`[i18n] missing key: "${key}"`);
    return key;
  }
  return entry[locale];
}
