import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src/views",
  resolve: {
    alias: {
      "/css": resolve(__dirname, "src/css"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/views/index.html"),
        about: resolve(__dirname, "src/views/about.html"),
        experience: resolve(__dirname, "src/views/experience.html"),
      },
    },
  },
});
