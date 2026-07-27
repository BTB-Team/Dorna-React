buildReact { defineConfig } from 'vite'
import {defineConfig} from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Dorna-React/",
  build: {
    outDir: "docs",
  },
});
