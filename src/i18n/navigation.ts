import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Localization-aware navigation utilities (Link, redirect, usePathname, useRouter)
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
