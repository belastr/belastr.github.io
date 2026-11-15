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
    title: "M.Sc. Computer Science Student @ RWTH Aachen · Research Assistant & Software Engineer",
    intro: "I'm a first-year M.Sc. Computer Science student at RWTH Aachen University, working part-time as a Research Assistant in the IT Systems Lab at FH Aachen. Alongside my studies, I bring over five years of freelance software engineering experience building full-stack web applications, backend services, and high-concurrency multiplayer game infrastructure. I'm currently looking for Software Engineering internships or entry-level roles in Big Tech where I can build reliable, large-scale systems.",
  },
  de: {
    title: "M.Sc.-Student der Informatik @ RWTH Aachen · Wissenschaftlicher Mitarbeiter & Softwareentwickler",
    intro: "Ich bin Student im ersten Jahr des Masterstudiengangs Informatik an der RWTH Aachen und arbeite nebenbei als wissenschaftlicher Mitarbeiter im IT-Systems-Lab der FH Aachen. Neben meinem Studium bringe ich über fünf Jahre Erfahrung als freiberuflicher Softwareentwickler mit, in denen ich Full-Stack-Webanwendungen, Backend-Dienste und Infrastrukturen für Multiplayer-Spiele mit hoher Parallelität entwickelt habe. Derzeit bin ich auf der Suche nach Praktika im Bereich Softwareentwicklung oder Einstiegspositionen bei großen Technologieunternehmen, bei denen ich zuverlässige, groß angelegte Systeme entwickeln kann.",
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
