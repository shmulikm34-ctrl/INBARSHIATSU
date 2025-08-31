import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel מגדירה VERCEL=1 בסביבת הבילד
const isVercel = process.env.VERCEL === "1";
const isGh = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGh ? "/INBARSHIATSU/" : "/", // GH Pages לעומת Vercel/כל מקום אחר
  plugins: [react()],
});
