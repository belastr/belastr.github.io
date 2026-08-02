import { JSX } from "preact";
import { toLocalePath, type Locale } from "@/utils.ts";
import { type Experience } from "@/data/experiences.ts";

export default function Experience({ experience, lang }: { experience: Experience; lang: Locale }): JSX.Element {
  return (
    <div class="p-4 rounded-3xl flex flex-col gap-y-4 items-stretch bg-[#f3f4f6] dark:bg-[#28292a]">
      <div class="flex flex-col gap-1 items-stretch">
        <div class="flex-1 flex gap-1 justify-center items-center ">
          <p class="font-bold text-center whitespace-pre-wrap">
            {experience.company}
          </p>
          <p class="font-normal text-center whitespace-pre-wrap">
            - {experience.type[lang]}
          </p>
        </div>
        <p class="font-normal text-center whitespace-pre-wrap">
          {experience.location[lang]}
        </p>
      </div>
      <ul class="w-full ml-4 my-2 list-none">
        {experience.positions.map((pos, idx) => (
          <li class="flex gap-2">
            <div class="shrink-0 w-4 relative px-1 pt-2 overflow-hidden">
              <div class="w-2 h-2 rounded-full bg-[#cbcbcb] dark:bg-[#505255]">
                {idx !== experience.positions.length - 1 && (
                  <div class="w-1 h-full absolute left-1.5 top-6 bg-[#e5e5e5] dark:bg-[#36383b]" />
                )}
              </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-stretch">
              <a
                class="mb-4 flex cursor-pointer"
                href={toLocalePath("/experience", lang, pos.id)}
              >
                <div class="flex-1 flex flex-col gap-1 items-stretch">
                  <p class="font-bold whitespace-pre-wrap">
                    {pos.title[lang]}
                  </p>
                  <p class="font-normal whitespace-pre-wrap">
                    {pos.timespan[lang]}
                  </p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
