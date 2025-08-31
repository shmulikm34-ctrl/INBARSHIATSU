import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGh = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGh ? "/inbar-shiatsu/" : "/",
  plugins: [react()],
});
