import { JSX } from "preact";
import { type Locale } from "@/utils.ts";
import MarkdownText from "@/islands/MarkdownText.tsx";
import { experiences } from "@/data/experiences.ts";

export default function DetailedExperiences({ lang }: { lang: Locale }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex flex-col">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col">
            <div class="flex flex-col gap-y-8 px-8">
              {experiences.map((e) => (
                <div>
                  <div class="flex flex-col gap-1">
                    <div class="flex">
                      <div class="flex-1 flex gap-1">
                        <p class="font-bold whitespace-pre-wrap">
                          {e.company}
                        </p>
                        <p class="font-normal whitespace-pre-wrap">
                          - {e.type[lang]}
                        </p>
                      </div>
                    </div>
                    <p class="font-normal whitespace-pre-wrap">
                      {e.location[lang]}
                    </p>
                  </div>
                  <ul class="w-full ml-4 my-2 list-none">
                    {e.positions.map((pos, idx) => (
                      <li
                        id={pos.id}
                        class="flex gap-2"
                      >
                        <div class="shrink-0 w-4 relative px-1 pt-2 overflow-hidden">
                          <div class="w-2 h-2 rounded-full bg-[#cbcbcb] dark:bg-[#505255]">
                            {idx !== e.positions.length - 1 && (
                              <div class="w-1 h-full absolute left-1.5 top-6 bg-[#e5e5e5] dark:bg-[#36383b]" />
                            )}
                          </div>
                        </div>
                        <div class="w-full flex flex-col items-stretch">
                          <div class="flex-1 flex flex-col gap-1 items-stretch ">
                            <p class="font-bold whitespace-pre-wrap">
                              {pos.title[lang]}
                            </p>
                            <p class="font-normal whitespace-pre-wrap">
                              {pos.timespan[lang]}
                            </p>
                          </div>
                          <div class="-mx-4 mb-4">
                            <MarkdownText md={pos.description[lang]} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
