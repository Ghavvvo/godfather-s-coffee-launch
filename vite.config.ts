import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import routerPlugin from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    routerPlugin({}),
    viteReact({}),
    tailwindcss({}),
    tsConfigPaths({}),
    tanstackStart({
      server: { entry: "server" },
    }),
  ],
});
