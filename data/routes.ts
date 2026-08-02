import type { Locale } from "@/utils.ts";
import { projects } from "@/data/projects.ts";

export type LocalizedText = Record<Locale, string>;

export type Route = {
  href: string;
  section?: string;
  text: LocalizedText;
  children?: Route[];
};

const realRoutes: Route[] = [
  {
    href: "/",
    section: "about",
    text: { en: "About", de: "Info" },
  },
  {
    href: "/",
    section: "stack",
    text: { en: "Stack", de: "Stack" },
  },
  {
    href: "/projects",
    text: { en: "Projects", de: "Projekte" },
    children: [
      { href: "/projects", text: { en: "Projects - Overview", de: "Projekte - Übersicht" } },
    ],
  },
  {
    href: "/experience",
    text: { en: "Experience", de: "Erfahrung" },
  },
  {
    href: "/education",
    text: { en: "Education", de: "Ausbildung" },
  },
];

projects.map((p) => {
  realRoutes[2].children?.push({ href:`/projects/${p.id}`, text: { en: p.name.en, de: p.name.de } })
})

export const routes: Route[] = realRoutes;
