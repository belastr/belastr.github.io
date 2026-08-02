import { JSX } from "preact";
import Markdown from "react-markdown";
import remarkIns from "remark-ins";

export default function MarkdownText({ md }: { md: string }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col">
            <div class="px-8">
              <div class={`
                max-w-none mb-2
                prose-h1:text-5xl prose-h1:font-medium prose-h1:mt-16 prose-h1:mb-8
                prose-h2:text-4xl prose-h2:font-medium prose-h2:mt-14 prose-h2:mb-7
                prose-h3:text-3xl prose-h3:font-medium prose-h3:mt-12 prose-h3:mb-6
                prose-h4:text-2xl prose-h4:font-medium prose-h4:mt-10 prose-h4:mb-5
                prose-h5:text-xl prose-h5:font-medium prose-h5:mt-8 prose-h5:mb-4
                prose-base prose-p:my-4
                prose-code:text-base prose-code:font-light prose-code:px-0.5 prose-code:bg-[#e5e5e5] prose-code:dark:bg-[#36383b] prose-code:rounded-xs
                prose-code:in-prose-pre:text-sm prose-code:in-prose-pre:px-0
                prose-pre:px-1.5 prose-pre:py-0 prose-pre:bg-[#e5e5e5] prose-pre:dark:bg-[#36383b] prose-pre:rounded-xs prose-pre:mb-4
                prose-a:text-[#385898] prose-a:dark:text-[#4b76cc] prose-a:hover:underline
                prose-img:rounded-3xl prose-img:my-4
                prose-ul:list-disc prose-ul:pl-4 prose-ul:my-4 prose-ul:in-prose-ul:-my-2
                prose-ol:list-decimal prose-ol:pl-4 prose-ol:my-4 prose-ol:in-prose-ol:-my-2
                prose-li:pl-1
                prose-hr:border prose-hr:border-[#a0a0a0] prose-hr:mt-0 prose-hr:mb-4
              `}>
                <Markdown remarkPlugins={[remarkIns]}>
                  {md}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
