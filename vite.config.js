import { defineConfig } from 'vite';

export default defineConfig({
  base: "/show-business-site/",
  server: { open: true },
  build: { outDir: "dist" }
});
