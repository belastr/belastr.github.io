import { JSX } from "preact";
import StackIcon from "@/islands/StackIcon.tsx";
import { toLocalePath, type Locale } from "@/utils.ts";
import { stackElements } from "@/data/stack.ts"
import { type Project } from "@/data/projects.ts";

export default function Project({ project, lang }: { project: Project; lang: Locale }): JSX.Element {
  return (
    <a
      class="group w-full h-auto aspect-1.5/1 relative rounded-3xl overflow-hidden grid grid-cols-[1fr] cursor-pointer"
      href={toLocalePath(`/projects/${project.id}`, lang)}
    >
      <div class="col-start-1 row-start-1 z-1 overflow-hidden">
        <div class="h-full px-12 flex flex-col justify-end items-center text-center">
          <div class="w-full h-full absolute left-0 top-0 z-[-1]">
          </div>
          {project.stack !== undefined && (
            <div class="absolute right-3 top-3 z-1">
              <div class="flex flex-wrap gap-1.5 justify-end">
                {project.stack.map((s) => {
                  let e = stackElements.languages.find((e) => e.text === s);
                  if (!e) e = stackElements.libraries.find((e) => e.text === s);
                  if (!e) e = stackElements.databases.find((e) => e.text === s);
                  if (!e) e = stackElements.platforms.find((e) => e.text === s);
                  if (!e) return;
                  return (
                    <StackIcon
                      text={e.text}
                      colHex={e.colHex}
                      path={e.path}
                      isInProject
                    />
                  );
                })}
              </div>
            </div>
          )}
          <h2 class="m-0 mbs-[0.83em] mbe-[0.83em] p-0 text-[2.4rem] leading-[1.1667] font-medium text-[#ffffff] text-shadow-2xs text-shadow-black">
            {project.name[lang]}
          </h2>
        </div>
      </div>
      <div class="col-start-1 row-start-1 z-0 overflow-hidden">
        <picture>
          {project.thumbnail !== undefined && (
            <img
              alt="project image"
              class="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-125"
              decoding="auto"
              loading="lazy"
              src={project.thumbnail}
            />
          ) || (
            <div class="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-175 dark-gradient" />
          )}
        </picture>
      </div>
      <div class="col-start-1 row-start-1 z-0 overflow-hidden bg-[#00000032]" />
    </a>
  );
}
