import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  assetsInclude: ["**/*.ejs"], // Include .ejs files as assets
  css: {
    postcss: "./postcss.config.js", // Explicitly specify PostCSS configuration
  },
  optimizeDeps: {
    include: ["swiper"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Define commonly used libraries as separate chunks
        },
      },
    },
  },
});
