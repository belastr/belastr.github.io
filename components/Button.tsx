import { JSX } from "preact";

export default function Button({ href, text }: { href: string; text: string }): JSX.Element {
  return (
    <div class="min-w-0 min-h-0 mt-6 flex flex-wrap justify-center">
      <div class="shrink-0 grow-0 basis-auto">
        <a
          aria-busy="false"
          class={`
            shrink-0
            min-w-0 min-h-0 relative px-5.5 py-2.5 rounded-full
            flex flex-col basis-auto items-center
            transition-colors duration-100 bg-[#0457cb] hover:bg-[#0172e3]
            outline-offset-4
            cursor-pointer touch-manipulation
          `}
          href={href}
          role="link"
          target="_self"
        >
          <div class="inline">
            <div class="flex justify-center">
              <span class="span-invert text-[.875rem] leading-[1.4286] font-bold cursor-pointer">
                {text}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
