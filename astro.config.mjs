// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import * as z from "zod";

const buildEnvSchema = z.object({
  SITE_URL: z.url({ protocol: /^https?$/ }),
});
const buildEnv = buildEnvSchema.parse(process.env);

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: buildEnv.SITE_URL,
  integrations: [sitemap()],
});
