import { JSX } from "preact";
import { type Locale } from "@/utils.ts";
import MarkdownText from "@/islands/MarkdownText.tsx";
import { education } from "@/data/education.ts";

export default function DetailedEducation({ lang }: { lang: Locale }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex flex-col">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col">
            <div class="flex flex-col gap-y-8 px-8">
              {education.map((e) => (
                <div
                  id={e.id}
                  class="flex flex-col gap-1"
                >
                  <p class="font-bold whitespace-pre-wrap">
                    {e.place}
                  </p>
                  <p class="font-normal whitespace-pre-wrap">
                    {e.degree[lang]}
                  </p>
                  <p class="font-normal whitespace-pre-wrap">
                    {e.timespan[lang]}
                  </p>
                  <div class="-mx-4 mb-4">
                    <MarkdownText md={e.description[lang]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
