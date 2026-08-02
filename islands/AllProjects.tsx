import { JSX } from "preact";
import { type Locale } from "@/utils.ts";
import Project from "@/islands/Project.tsx";
import { projects } from "@/data/projects.ts";
import { useState } from "preact/hooks";

const text: Record<Locale, { title: string; button: string; filter: string; empty: string }> = {
  en: {
    title: "Projects",
    button: "See all projects",
    filter: "Filter by name, language, library, database, or platform",
    empty: "No matching projects"
  },
  de: {
    title: "Projekte",
    button: "Alle Projekte ansehen",
    filter: "Nach Name, Sprache, Bibliothek, Datenbank oder Plattform filtern",
    empty: "Keine passenden Projekte vorhanden"
  }
};

export default function AllProjects({ lang }: { lang: Locale }): JSX.Element {
  const t = text[lang];

  const [filter, setFilter] = useState<string[]>([]);
  const displayedProjects = filter.length > 0
  ? projects.filter(p =>
      filter.some(term =>
        p.id.includes(term) ||
        p.name[lang].toLowerCase().includes(term) ||
        p.stack?.some(s => s.toLowerCase().includes(term))
      )
    )
  : projects;

  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex justify-center">
        <div class="flex-1 max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col items-center">
            <div class="w-full relative px-8">
              <label class="grow w-full basis-0">
                <div class="cursor-text">
                  <div class="relative rounded-xl">
                    <div class="p-4 rounded-xl border border-solid">
                      <div class="flex gap-3 items-center">
                        <input
                          class="flex-1 min-w-0 m-0 p-0 tracking-[-.01em] bg-transparent outline-none"
                          placeholder={t.filter}
                          type="text"
                          onInput={(e) => {
                            const val = e.currentTarget.value;
                            if (!val || val.length < 2) {
                              setFilter([]);
                            } else {
                              const vals = val.toLowerCase().split(" ").filter(v => v.length >= 2);
                              setFilter(vals);
                            }
                          }}
                        />
                        <div class="shrink-0 w-6 h-6 rounded-full flex justify-center items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="1em"
                            height="1em"
                            aria-hidden="true"
                            class="block h-6 w-6 text-inherit overflow-hidden"
                            role="img"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            {displayedProjects.length > 0
              ? <>
                <div class="non-mobile mt-8 px-8 grid grid-cols-2 gap-8">
                  {displayedProjects.map((p) => (
                    <Project project={p} lang={lang} />
                  ))}
                </div>
                <div class="mobile mt-8 px-8 grid grid-cols-1 gap-8">
                  {displayedProjects.map((p) => (
                    <Project project={p} lang={lang} />
                  ))}
                </div>
              </>
              : <span>
                <h2 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] pt-8 text-[1.5rem] leading-[1.1667] font-medium">
                  {t.empty}
                </h2>
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
