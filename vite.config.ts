import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src/views", // корень для html — можно и "src"
  build: {
    outDir: "../../dist", // папка для сборки (относительно root)
    emptyOutDir: true, // очистить dist перед билдом
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/views/index.html"),
        about: resolve(__dirname, "src/views/about.html"),
        experience: resolve(__dirname, "src/views/experience.html"),
      },
    },
  },
  resolve: {
    alias: {
      "/assets": resolve(__dirname, "src/assets"),
      "/css": resolve(__dirname, "src/css"),
    },
  },
});
