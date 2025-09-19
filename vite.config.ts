import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import prefixer from "postcss-prefix-selector";
export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  css: {
    postcss: {
      plugins: [
        prefixer({
          prefix: ".dust", // 给所有样式加上 .my-ui 前缀
          transform(prefix, selector, prefixedSelector) {
            if (selector.startsWith("html") || selector.startsWith("body")) {
              return selector;
            }
            return prefixedSelector;
          },
        }),
      ],
    },
  },
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
