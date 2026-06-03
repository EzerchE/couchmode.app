import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/buy", prerender: { enabled: true } },
        { path: "/download", prerender: { enabled: true } },
      ],
    }),
    tailwindcss(),
    tsconfigPaths(),
    react(),
  ],
});
