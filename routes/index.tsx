import { JSX } from "preact";
import { define, getLocaleFromPathname, type Locale } from "@/utils.ts";
import Stack from "@/islands/Stack.tsx"
import HighlightedProjects from "@/islands/HighlightedProjects.tsx";
import HighlightedExperience from "@/islands/HighlightedExperience.tsx";
import HighlightedEducation from "@/islands/HighlightedEducation.tsx";

const text: Record<
  Locale,
  { title: string; intro: string }
> = {
  en: {
    title: "M.Sc. Computer Science Student - Full-Stack Software Engineer",
    intro: "I'm a Computer Science Master's student at RWTH Aachen in the first year. Part-time I work as a research assistant at my previous university, FH Aachen. On the side I have been gathering additional full-stack experience from many years of freelancing, mostly in gaming. I'm aiming for an engineering role at a leading international tech company, where I can work on large-scale products and learn from the strongest teams.",
  },
  de: {
    title: "M.Sc. Informatik Student - Full-Stack Software Ingenieur",
    intro: "Ich bin Masterstudent der Informatik an der RWTH Aachen im ersten Jahr. Nebenbei arbeite ich als wissenschaftliche Hilfskraft an meiner früheren Hochschule, der FH Aachen. Darüber hinaus habe ich durch meine langjährige freiberufliche Tätigkeit, vor allem im Gaming-Bereich, zusätzliche Full-Stack-Erfahrung gesammelt. Mein Ziel ist eine Position als Entwickler bei einem führenden internationalen Technologieunternehmen, wo ich an groß angelegten Produkten arbeiten und von den besten Teams lernen kann.",
  },
};

function About({ t }: { t: Record<string, string> }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex justify-center">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col items-center">
            <span class="mb-2 text-center">
              <span class="text-[.875rem] leading-[1.4286] tracking-[-.01em] font-bold">
                {t.title}
              </span>
            </span>
            <span class="text-center">
              <h2 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] text-[3rem] leading-[1.1667] font-medium">
                Béla Struffolino, B.Sc.
              </h2>
            </span>
            <span class="mt-4 px-8 text-center">
              <span class="text-[1.125rem] leading-[1.4444] font-normal">
                {t.intro}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default define.page(function Home({ url }) {
  const lang = getLocaleFromPathname(url.pathname);
  const t = text[lang];

  return (
    <div class="py-20 flex flex-col gap-y-24">
      <div
        id="about"
        class="-mt-24"
      />
      <About t={t} />
      <div
        id="stack"
        class="-mt-24"
      />
      <Stack />
      <HighlightedProjects lang={lang} />
      <HighlightedExperience lang={lang} />
      <HighlightedEducation lang={lang} />
    </div>
  );
});
