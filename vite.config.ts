import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/INBARSHIATSU/",      // חשוב: נתיב התת-תיקייה של הפרויקט
  plugins: [react()],
});
