import { JSX } from "preact";
import StackIcon from "@/islands/StackIcon.tsx";
import { stackElements } from "@/data/stack.ts"

export default function Stack(): JSX.Element {
  return (
    <div class="min-w-0 min-h-0">
      <div class="min-w-0 min-h-0 flex justify-center">
        <div class="max-w-250 mx-auto">
          <div class="min-w-0 min-h-0 flex flex-col items-center">
            <span class="text-center">
              <h5 class="mt-0 mb-0 mbs-[0.83em] mbe-[0.83em] text-[3rem] leading-[1.1667] font-medium">
                Stack
              </h5>
            </span>
            <div class="mt-4 px-8 flex flex-col gap-y-1.5">
              <div class="flex flex-wrap gap-1.5 justify-center">
                {stackElements.languages.map((s) => (
                  <StackIcon
                    text={s.text}
                    colHex={s.colHex}
                    path={s.path}
                  />
                ))}
              </div>
              <div class="flex flex-wrap gap-1.5 justify-center">
                {stackElements.libraries.map((s) => (
                  <StackIcon
                    text={s.text}
                    colHex={s.colHex}
                    path={s.path}
                  />
                ))}
                {stackElements.databases.map((s) => (
                  <StackIcon
                    text={s.text}
                    colHex={s.colHex}
                    path={s.path}
                  />
                ))}
              </div>
              <div class="flex flex-wrap gap-1.5 justify-center">
                {stackElements.platforms.map((s) => (
                  <StackIcon
                    text={s.text}
                    colHex={s.colHex}
                    path={s.path}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
