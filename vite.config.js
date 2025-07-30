import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Project-002-Impact-Production/", // 👈 this is IMPORTANT
  plugins: [tailwindcss(), react()],
});
