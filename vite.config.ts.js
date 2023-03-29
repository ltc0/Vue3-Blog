// vite.config.ts
import {
  resolve
} from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// package.json
var name = "vue3-tailwind3-website-starter";
var version = "1.0.0";
var type = "module";
var scripts = {
  dev: "vite",
  build: "vite build",
  preview: "vite build && vite preview",
  start: "yarn dev & wait-on tcp:3000 -v",
  test: "vitest",
  "test-e2e": "cypress open",
  "test-components": "cypress open-ct",
  "test:ci": "vitest",
  "test:ci-e2e": "cypress run --headless",
  "test:ci-components": "cypress run-ct"
};
var dependencies = {
  "@vueuse/core": "~7.7.0",
  "@vueuse/head": "~0.7",
  daisyui: "~2.0.9",
  "element-plus": "^2.3.1",
  "markdown-to-text": "^0.1.1",
  node: "^19.8.1",
  pinia: "~2.0.11",
  vue: "~3.2",
  "vue-i18n": "9",
  "vue-router": "~4.0"
};
var devDependencies = {
  "@cypress/vite-dev-server": "~2.2",
  "@cypress/vue": "~3.0",
  "@iconify/vue": "^4.1.0",
  "@intlify/vite-plugin-vue-i18n": "~3.3.1",
  "@pinia/testing": "~0.0.9",
  "@tailwindcss/aspect-ratio": "~0.4",
  "@tailwindcss/forms": "~0.4",
  "@tailwindcss/line-clamp": "~0.3",
  "@tailwindcss/typography": "~0.5",
  "@types/node": "^18.15.11",
  "@typescript-eslint/eslint-plugin": "~5",
  "@typescript-eslint/parser": "~5",
  "@vitejs/plugin-vue": "~2.2.4",
  "@vue/eslint-config-standard": "~6.1",
  "@vue/eslint-config-typescript": "~10",
  autoprefixer: "~10",
  cssnano: "~5.1.3",
  cypress: "~9.5.0",
  dayjs: "^1.11.7",
  eslint: "~8.8",
  "eslint-config-prettier": "~8.3",
  "eslint-plugin-import": "~2",
  "eslint-plugin-node": "~11.1",
  "eslint-plugin-promise": "~6.0",
  "eslint-plugin-vue": "~8",
  postcss: "~8.4",
  "postcss-import": "~14.0.2",
  "postcss-nesting": "~10",
  sass: "^1.60.0",
  tailwindcss: "~3",
  typescript: "~4.5",
  "unplugin-vue-components": "~0.17.18",
  vite: "~2.7",
  "vite-plugin-pages": "~0.20.2",
  "vite-plugin-vue-layouts": "~0.6.0",
  vitest: "~0.6.0",
  "wait-on": "~6.0"
};
var package_default = {
  name,
  version,
  type,
  scripts,
  dependencies,
  devDependencies
};

// vite.config.ts
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";
import components from "unplugin-vue-components/vite";
process.env.VITE_APP_VERSION = package_default.version;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}
var vite_config_default = defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    pages(),
    layouts(),
    components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("C:\\0000\u9879\u76EE\\Vue3-website", "locales/**")]
    })
  ],
  resolve: {
    alias: {
      "@": resolve("C:\\0000\u9879\u76EE\\Vue3-website", "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  test: {
    include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB2dWVJMThuIGZyb20gXCJAaW50bGlmeS92aXRlLXBsdWdpbi12dWUtaTE4blwiO1xyXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5pbXBvcnQgcGFnZXMgZnJvbSBcInZpdGUtcGx1Z2luLXBhZ2VzXCI7XHJcbmltcG9ydCBsYXlvdXRzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtbGF5b3V0c1wiO1xyXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5cclxucHJvY2Vzcy5lbnYuVklURV9BUFBfVkVSU0lPTiA9IHBrZy52ZXJzaW9uO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgcHJvY2Vzcy5lbnYuVklURV9BUFBfQlVJTERfRVBPQ0ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSh7XHJcbiAgICAgIHNjcmlwdDoge1xyXG4gICAgICAgIHJlZlN1Z2FyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBwYWdlcygpLFxyXG4gICAgbGF5b3V0cygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xyXG4gICAgY29tcG9uZW50cyh7XHJcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcclxuICAgICAgZXh0ZW5zaW9uczogW1widnVlXCIsIFwibWRcIl0sXHJcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cclxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgZHRzOiBcInNyYy9jb21wb25lbnRzLmQudHNcIixcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tdnVlLWkxOG5cclxuICAgIHZ1ZUkxOG4oe1xyXG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcclxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxyXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKFwiQzpcXFxcMDAwMFx1OTg3OVx1NzZFRVxcXFxWdWUzLXdlYnNpdGVcIiwgXCJsb2NhbGVzLyoqXCIpXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShcIkM6XFxcXDAwMDBcdTk4NzlcdTc2RUVcXFxcVnVlMy13ZWJzaXRlXCIsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1qc1wiLCBcIi5qc1wiLCBcIi50c1wiLCBcIi5qc3hcIiwgXCIudHN4XCIsIFwiLmpzb25cIiwgXCIudnVlXCJdLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgaW5jbHVkZTogWyd0ZXN0cy91bml0LyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxyXG4gIH0sXHJcblxyXG4vKiAgIHNlcnZlcjp7XHJcbiAgICBwcm94eTp7XHJcbiAgICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbScsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSwgKi9cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxRQUFRLElBQUksbUJBQW1CLGdCQUFJO0FBQ25DLElBQUksUUFBUSxJQUFJLGFBQWEsY0FBYztBQUN6QyxVQUFRLElBQUksdUJBQXVCLElBQUksT0FBTyxVQUFVO0FBQUE7QUFHMUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxJQUdkO0FBQUEsSUFDQTtBQUFBLElBR0EsV0FBVztBQUFBLE1BRVQsWUFBWSxDQUFDLE9BQU87QUFBQSxNQUVwQixTQUFTLENBQUMsVUFBVSxjQUFjO0FBQUEsTUFDbEMsS0FBSztBQUFBO0FBQUEsSUFJUCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLENBQUMsQUFBSyxRQUFRLHNDQUE0QjtBQUFBO0FBQUE7QUFBQSxFQUd2RCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEFBQUssUUFBUSxzQ0FBNEI7QUFBQTtBQUFBLElBRWhELFlBQVksQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsU0FBUztBQUFBO0FBQUEsRUFFOUQsTUFBTTtBQUFBLElBQ0osU0FBUyxDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
