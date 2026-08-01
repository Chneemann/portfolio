import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Internationalization middleware proxy handling locale redirection and path rewriting
 */
export default createMiddleware(routing);

/**
 * Middleware / Proxy configuration matcher excluding system routes, static files, and APIs
 */
export const config = {
  // Ignores API routes, Next.js internal files and images
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
