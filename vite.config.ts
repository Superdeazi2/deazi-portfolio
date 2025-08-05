import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/about_me_web/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/views/index.html"),
        about: resolve(__dirname, "src/views/about.html"),
        experience: resolve(__dirname, "src/views/experience.html"),
      },
    },
    outDir: "dist",
  },
});
