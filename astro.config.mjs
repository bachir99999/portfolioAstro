import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://bachir99999.github.io',
  base:'portfolioAstro',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
