import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  root: "src/views",
  build: {
    assetsInlineLimit: 0,
    modulePreload: {
      polyfill: false,
    },
    outDir: "../../dist",
    emptyOutDir: true,
    minify: false,
    cssMinify: false,
    cssCodeSplit: false,
    assetsDir: "",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/views/index.html"),
        about: resolve(__dirname, "src/views/about.html"),
        experience: resolve(__dirname, "src/views/experience.html"),
        app: resolve(__dirname, "src/views/app.ts"),
      },
      output: {
        entryFileNames: "js/app.js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? "";
          const extension = name.split(".").pop()?.toLowerCase();

          if (extension === "css") {
            return "css/[name][extname]";
          }

          if (["png", "jpg", "jpeg", "webp", "svg"].includes(extension ?? "")) {
            return "images/[name][extname]";
          }

          if (["ttf", "woff", "woff2", "otf"].includes(extension ?? "")) {
            return "fonts/[name][extname]";
          }

          if (["txt", "pdf", "docx"].includes(extension ?? "")) {
            return "docs/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
  resolve: {
    alias: {
      "/assets": resolve(__dirname, "src/assets"),
      "/css": resolve(__dirname, "src/css"),
      "/data": resolve(__dirname, "src/data"),
    },
  },
});
