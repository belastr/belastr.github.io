import { JSX } from "preact";
import { toLocalePath, type Locale } from "@/utils.ts";
import Button from "@/components/Button.tsx";
import Project from "@/islands/Project.tsx";
import { projects } from "@/data/projects.ts";

const text: Record<
  Locale,
  { title: string; button: string }
> = {
  en: {
    title: "Projects",
    button: "Show all projects",
  },
  de: {
    title: "Projekte",
    button: "Alle Projekte anzeigen",
  },
};

export default function HighlightedProjects({ lang }: { lang: Locale }): JSX.Element {
  const t = text[lang];

  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex justify-center">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col items-center">
            <span class="text-center">
              <h5 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] text-[3rem] leading-[1.1667] font-medium">
                {t.title}
              </h5>
            </span>
            <Button href={toLocalePath("/projects", lang)} text={t.button} />
            <div class="non-mobile mt-8 px-8 grid grid-cols-2 gap-x-8">
              {projects.filter((p) => p.highlighted === true).map((p) => (
                <Project project={p} lang={lang} />
              ))}
            </div>
            <div class="mobile mt-8 px-8 grid grid-cols-1 gap-y-8">
              {projects.filter((p) => p.highlighted === true).map((p) => (
                <Project project={p} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
