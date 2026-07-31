import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/Dorna-React/",
  build: {
    outDir: "docs",
  },
});
