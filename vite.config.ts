import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/website"),
      "~": resolve(__dirname, "src/components"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "dusty",
      fileName: (format) => `dusty.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    port: 8080,
  },
});
