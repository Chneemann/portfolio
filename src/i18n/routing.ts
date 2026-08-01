import { defineRouting } from "next-intl/routing";

/**
 * Global localization routing configuration defining supported languages and defaults
 */
export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "en",
});
