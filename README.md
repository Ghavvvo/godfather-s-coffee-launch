# El Café del Padrino — Landing Page

Landing page oficial de **El Café del Padrino™**, una marca que une la
tradición cafetera italiana con el ritual cotidiano del café en la familia
cubana. Café puro, con carácter, hecho en Italia.

## Tecnologías

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19)
- **Build:** Vite 8 + Nitro 3
- **Estilos:** Tailwind CSS v4 + `tw-animate-css`
- **Animaciones:** Framer Motion (`motion`)
- **UI:** Radix UI primitives + shadcn/ui components
- **Tipografía:** Cook Conthic (sans-serif) · Things Modern Serif (display)
- **Deploy:** Cloudflare (Nitro preset)

## Requisitos

- Node.js >= 18
- Bun, pnpm o npm

## Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Lint
npm run lint

# Formatear
npm run format
```

## Estructura

```
src/
├── assets/         # Imágenes y recursos estáticos
├── components/     # Componentes reutilizables (ui/)
├── hooks/          # Custom hooks
├── lib/            # Utilidades (cn, etc.)
├── routes/         # Páginas (TanStack Router)
└── styles.css      # Design system y @font-face
```

## Remotes

- `origin`  → github.com/Ghavvvo/godfather-s-coffee-launch.git
- `origin2` → github.com/javier-sotolongo/cafe_el_padrino.git

## Licencia

Envato Elements · Single Use — Marco Bianchini (2025)
