import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { defineConfig } from "vite";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
