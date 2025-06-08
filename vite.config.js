import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ← map “@” to your src folder
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/sass/utils/variables.scss" as vars;
          @use "@/sass/utils/mixins.scss" as mixins;
        `,
      },
    },
  },
});
