import { createDefine } from "fresh";

export const define = createDefine<string>();

export type Locale = "en" | "de";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function withBase(pathname: string): string {
  return basePath ? `${basePath}${pathname}` : pathname;
}

function withoutBase(pathname: string): string {
  if (!basePath) return pathname;
  if (!pathname.startsWith(basePath)) return pathname;
  const stripped = pathname.slice(basePath.length);
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const first = withoutBase(pathname).split("/").filter(Boolean)[0];
  return first === "de" ? "de" : "en";
}

export function stripLocaleFromPathname(pathname: string): string {
  const parts = withoutBase(pathname).split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "de") {
    parts.shift();
  }
  if (parts.length === 0) return "/";
  return "/" + parts.join("/");
}

export function toLocalePath(pathname: string, locale: Locale, section?: string): string {
  const base = stripLocaleFromPathname(pathname);
  const localized = base === "/" ? `/${locale}` : `/${locale}${base}`;
  return section !== undefined ? withBase(`${localized}#${section}`) : withBase(localized);
}
