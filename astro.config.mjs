import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import { DEFAULT_LOCALE, LOCALES } from "./src/i18n/utils";

// https://astro.build/config
export default defineConfig({
  site: "https://koifish.digital",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALES,
      },
    }),
    mdx(),
    alpinejs({ entrypoint: "/src/entrypoint" }),
  ],
  prefetch: true,
});
