
## El Café del Padrino — Landing Page

Una sola página, scroll vertical, estética inspirada en el packaging: negro profundo, dorado cálido, tipografía serif dramática. Voz: elegante, familiar, discreta.

### Estructura

1. **Nav superior fija** — logo dorado a la izquierda, links de anclaje (Historia · Formas · Contacto) a la derecha. Fondo negro con blur al hacer scroll.

2. **Hero** — split asimétrico. A la izquierda: eyebrow "Espresso · 100% Coffee", título gigante en serif display "El café de la familia", subtítulo "Tostado meticulosamente para honrar la tradición.", CTA anclado a Contacto. A la derecha: la foto del paquete (`Hero.png`) a sangre con viñeta suave. Fondo negro con textura sutil de mármol.

3. **Franja de marca** — cita corta centrada sobre negro, filete dorado arriba y abajo: *"Hecho en Italia · 100% Café Puro"*.

4. **Historia / Tradición** — dos columnas. Izquierda: párrafo editorial sobre el tostado meticuloso y la herencia familiar. Derecha: el logo dorado del Padrino en grande como emblema.

5. **Formas de disfrutarlo** — grid de 4 tarjetas negras con borde dorado fino, cada una con un icono de línea y título serif:
   - Espresso corto
   - Capuchino espumoso
   - Filtrado clásico
   - Frío con hielo

6. **Contacto** — sección centrada, fondo negro con acento dorado. Título "Ponte en contacto", email `hello@thegodfatherscoffee.com` como link grande, dirección "Miami, Florida".

7. **Footer** — mini-logo, © 2026 El Café del Padrino, filete dorado superior.

### Detalles técnicos

- **Ruta única**: `src/routes/index.tsx`.
- **Head/SEO**: título "El Café del Padrino — Gentleman's Roast", meta description con el eslogan, og:image usando el hero.
- **Fuentes**: placeholder por ahora con serif de sistema (`ui-serif, Georgia`) para el display y sans neutra para el body. Cuando subas Cook Conthic y Things Modern Serif (OTF/WOFF2), las cargo via `@font-face` en `src/styles.css` apuntando a assets CDN y actualizo los tokens. No usaré Google Fonts stand-ins para no crear una dirección visual que después cambie.
- **Design tokens** en `src/styles.css`: `--background` negro (oklch ~0.13 0 0), `--foreground` crema, `--primary` dorado (oklch ~0.78 0.13 85), `--gold-glow`, `--gradient-gold`, `--shadow-elegant`. Todo semántico, sin colores hardcodeados en componentes.
- **Assets vía Lovable CDN**: subir `Hero.png` y el logo con `lovable-assets create`, importar los `.asset.json`.
- **Motion**: framer-motion (`bun add motion`) para fade+rise sutil en hero y stagger en las 4 tarjetas. Nada excesivo.
- **Componentes**: `Nav`, `Hero`, `BrandStrip`, `Story`, `WaysToEnjoy`, `Contact`, `Footer` como archivos en `src/components/landing/`.

### Fuera de alcance
- Sin e-commerce, sin backend, sin formulario (solo mailto).
- Sin páginas adicionales.
- Fuentes reales quedan pendientes de tus archivos.
