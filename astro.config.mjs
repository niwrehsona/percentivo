import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
export default defineConfig({
  site: "https://www.percentivo.com",
  integrations: [mdx()],
  output: "static",
  build: { inlineStylesheets: "auto" },
});
