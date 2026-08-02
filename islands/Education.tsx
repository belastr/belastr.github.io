import { JSX } from "preact";
import { toLocalePath, type Locale } from "@/utils.ts";
import { type Education } from "@/data/education.ts";

export default function Experience({ education, lang }: { education: Education; lang: Locale }): JSX.Element {
  return (
    <a
      class="p-4 rounded-3xl flex flex-col gap-y-4 bg-[#f3f4f6] dark:bg-[#28292a]"
      href={toLocalePath("/education", lang, education.id)}
    >
      <div class="flex flex-col gap-1 items-stretch">
        <p class="font-bold whitespace-pre-wrap text-center">
          {education.place}
        </p>
        <p class="font-normal text-center whitespace-pre-wrap">
          {education.degree[lang]}
        </p>
        <p class="font-normal text-center whitespace-pre-wrap">
          {education.timespan[lang]}
        </p>
      </div>
    </a>
  );
}
