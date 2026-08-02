import { JSX } from "preact";
import { type Locale } from "@/utils.ts";
import Education from "@/islands/Education.tsx";
import { education } from "@/data/education.ts";

const text: Record<
  Locale,
  { title: string; hint: string }
> = {
  en: {
    title: "Education",
    hint: "Select degree for details",
  },
  de: {
    title: "Ausbildung",
    hint: "Zum Anzeigen der Detailansicht auswählen",
  },
};

export default function HighlightedEducation({ lang }: { lang: Locale }): JSX.Element {
  const t = text[lang];

  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex justify-center">
        <div class="w-full max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col items-center">
            <span class="text-center">
              <h5 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] text-[3rem] leading-[1.1667] font-medium">
                {t.title}
              </h5>
            </span>
            <span class="mt-2 text-center">
              <span class="text-[.875rem] leading-[1.4286] tracking-[-.01em] font-bold">
                {t.hint}
              </span>
            </span>
            <div class="mt-8 px-8 flex flex-wrap gap-8 justify-center items-stretch">
              {education.map((e) => (
                <Education education={e} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
