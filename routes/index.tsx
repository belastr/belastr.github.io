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
    title: "Full-Stack Developer – Computer Science B.Sc. Student",
    intro: "I'm a Computer Science student at FH Aachen in the final weeks of my Bachelor's degree. After completing my Bachelor's, I plan to continue my academic journey with a Master's degree at RWTH Aachen University. I've gained hands-on experience tutoring programming, working as a full-stack developer on multiplayer projects with thousands of active players, and delivering large-scale software projects also as part of my university studies. My goal is to further refine my skills and build a career in software engineering, whether in full-stack, backend, or another role where I can make the most impact while finding the right fit.",
  },
  de: {
    title: "Full-Stack Entwickler – Informatik B.Sc. Student",
    intro: "Ich bin Informatikstudent an der FH Aachen und befinde mich in den letzten Wochen meines Bachelorstudiums. Nach meinem Bachelorabschluss plane ich, mein Studium mit einem Masterstudium an der RWTH Aachen fortzusetzen. Ich habe praktische Erfahrungen gesammelt, indem ich als Tutor für Programmieren gearbeitet habe, als Full-Stack-Entwickler an Multiplayer-Projekten mit Tausenden von aktiven Spielern gearbeitet habe und auch im Rahmen meines Studiums groß angelegte Softwareprojekte umgesetzt habe. Mein Ziel ist es, meine Fähigkeiten weiter zu verfeinern und eine Karriere im Bereich Softwareentwicklung aufzubauen – sei es als Full-Stack-Entwickler, im Backend oder in einer anderen Rolle, in der ich den größten Beitrag leisten und gleichzeitig die richtige Passung finden kann.",
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
                Béla Struffolino
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
