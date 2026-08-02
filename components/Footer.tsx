import { JSX } from "preact";
import IconLinks from "@/components/IconLinks.tsx";

export default function Footer(): JSX.Element {
  return (
    <footer class="relative z-0">
      <div>
        <hr
          aria-hidden="true"
          class="w-full p-0 m-0 text-[#dadde1] dark:text-[#404040] bg-[#0a13171f] dark:bg-[#ececece0]"
        />
        <div class="my-8">
          <div class="w-full max-w-376 mx-auto px-8">
            <div class="shrink-0 grow -mx-4 flex flex-wrap basis-full">
              <div class="shrink-0 grow-0 max-w-full px-4 basis-auto">
                <span class="text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal">
                  Béla Struffolino
                </span>
              </div>
              <div class="shrink-0 grow-0 max-w-full ml-16 px-4 basis-auto">
                <IconLinks />
              </div>
              <div class="flex-1" />
              <div class="shrink-0 grow-0 max-w-full px-4 basis-auto">
                <span class="text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal">
                  06.2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
