import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Request configuration loading messages dynamically based on the current locale
 */
export default getRequestConfig(async ({ requestLocale }) => {
  let requested = await requestLocale;

  // Validate if the requested locale is supported, otherwise fallback to default
  let locale =
    requested && routing.locales.includes(requested as any)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
