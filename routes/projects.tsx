import { JSX } from "preact";
import { Head } from "fresh/runtime";
import { define, getLocaleFromPathname, type Locale } from "../utils.ts";
import AllProjects from "@/islands/AllProjects.tsx";

const text: Record<
  Locale,
  { title: string; heading: string; }
> = {
  en: {
    title: "Béla Struffolino - Projects",
    heading: "Projects",
  },
  de: {
    title: "Béla Struffolino - Projekte",
    heading: "Projekte",
  },
};

function Heading({ t }: { t: Record<string, string> }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col">
            <span>
              <h2 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] pl-8 text-[3rem] leading-[1.1667] font-medium">
                {t.heading}
              </h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default define.page(function Projects({ url }) {
  const lang = getLocaleFromPathname(url.pathname);
  const t = text[lang];

  return (
    <div class="py-20 flex flex-col gap-y-16">
      <Head>
        <title>{t.title}</title>
      </Head>
      <Heading t={t} />
      <AllProjects lang={lang} />
    </div>
  );
});
