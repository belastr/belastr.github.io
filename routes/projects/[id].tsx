import { JSX } from "preact";
import { Head } from "fresh/runtime";
import { define, getLocaleFromPathname, type Locale } from "../../utils.ts";
import MarkdownText from "@/islands/MarkdownText.tsx";
import { projects } from "@/data/projects.ts";

const text: Record<
  Locale,
  { title: string; heading: string; notFound: string }
> = {
  en: {
    title: "Béla Struffolino - Projects",
    heading: "Projects",
    notFound: "Project not found",
  },
  de: {
    title: "Béla Struffolino - Projekte",
    heading: "Projekte",
    notFound: "Projekt nicht gefunden",
  },
};

function Heading({ text }: { text: string }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col">
            <span>
              <h2 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] pl-8 text-[3rem] leading-[1.1667] font-medium">
                {text}
              </h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const handler = define.handlers((ctx) => {
  const project = projects.find((p) => p.id === ctx.params.id) ?? null;
  return { data: { project } };
});

export default define.page<typeof handler>(({ data, url }) => {
  const lang = getLocaleFromPathname(url.pathname);
  const t = text[lang];

  if (!data.project) {
    return (
      <div class="py-20">
        <Heading text={t.notFound} />
      </div>
    );
  }

  return (
    <div class="py-20 flex flex-col gap-y-16">
      <Head>
        <title>Béla Struffolino - {data.project.name[lang]}</title>
      </Head>
      <Heading text={data.project.name[lang]} />
      <MarkdownText md={data.project.description[lang]} />
    </div>
  );
});
