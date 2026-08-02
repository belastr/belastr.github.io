import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { routes, type Route } from "@/data/routes.ts";
import type { Locale } from "@/utils.ts";
import { toLocalePath } from "@/utils.ts";

type SideNavProps = {
  lang: Locale;
};

function SubLink(
  { href, text }: { href: string; text: string; },
): JSX.Element {
  return (
    <div class="h-full min-w-0 min-h-0 my-1">
      <a
        aria-expanded="false"
        class="shrink-0 min-w-0 min-h-0 relative z-0 ml-2 inline items-stretch cursor-pointer touch-manipulation"
        href={href}
        role="link"
        target="_self"
      >
        <span class="text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
          {text}
        </span>
      </a>
    </div>
  );
}

function Link(
  { href, text, lang, routeChildren }: { href: string; text: string; lang: Locale; routeChildren?: Route[] },
): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [subLinksHeight, setSubLinksHeight] = useState<number>(0);
  const subLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const e = subLinksRef.current;
    if (!e) return;

    const observer = new ResizeObserver(() => {
      setSubLinksHeight(e.scrollHeight);
    })

    observer.observe(e)
    return () => observer.disconnect();
  }, [])

  const toggleExpanded = () => {
    if (routeChildren === undefined) return;

    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }

  return (
    <div role="listitem">
      {routeChildren !== undefined && (
        <button
          aria-expanded="false"
          class={`
            shrink-0
            w-full min-w-0 min-h-0 relative z-0 p-0 m-0
            flex flex-col basis-auto items-stretch
            bg-transparent cursor-pointer touch-manipulation
          `}
          type="button"
          onClick={toggleExpanded}
        >
          <div class="p-4">
            <div class="min-w-0 min-h-0 flex justify-between items-center cursor-pointer">
              <span class="text-[1.25rem] leading-[1.4] font-light cursor-pointer">
                {text}
              </span>
              <svg
                viewBox="0 0 24 24"
                class={`
                  w-6 h-6
                  overflow-hidden cursor-pointer
                  [transform-property:transform] duration-200 ease-in-out
                  ${isExpanded ? "transform-[rotate(90deg)]" : ""}
                `}
              >
                <path
                  class="fill-[#1c2b33] dark:fill-white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.247 4.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 0 1 0 1.506l-8 7a1 1 0 0 1-1.318-1.506L14.482 12l-7.14-6.247a1 1 0 0 1-.094-1.412z"
                />
              </svg>
            </div>
          </div>
        </button>
      ) || (
        <a
          aria-expanded="false"
          class={`
            shrink-0
            w-full min-w-0 min-h-0 m-0 relative z-0 p-0
            flex flex-col basis-auto items-stretch
            bg-transparent cursor-pointer touch-manipulation
          `}
          href={href}
          target="_self"
          role="link"
        >
          <div class="p-4">
            <div class="min-w-0 min-h-0 flex justify-between items-center cursor-pointer">
              <span class="text-[1.25rem] leading-[1.4] font-light cursor-pointer">
                {text}
              </span>
            </div>
          </div>
        </a>
      )}
      <div
        style={{ height: isExpanded ? `${subLinksHeight}px` : "0px" }}
        class="overflow-y-clip [transition-property:height] will-change-[height] duration-250 ease-[ease]"
      >
        <div
          ref={subLinksRef}
          class="px-10 pt-2 pb-4 flex flex-col gap-y-3"
        >
          {routeChildren?.map((child) => (
            <SubLink
              href={toLocalePath(child.href, lang)}
              text={child.text[lang]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SideNav({ lang }: SideNavProps) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const sideNav = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(open);
  const [animatedOpen, setAnimatedOpen] = useState<boolean>(false);
  const hideTimeout = useRef<ReturnType<typeof globalThis.setTimeout> | null>(null);

  useEffect(() => {
    if (open) {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
      setMounted(true);
      requestAnimationFrame(() => {
        setAnimatedOpen(true);
      });
      return;
    }

    setAnimatedOpen(false);
    hideTimeout.current = globalThis.setTimeout(() => {
      setMounted(false);
      hideTimeout.current = null;
    }, 500);

    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
    };
  }, [open]);

  return (
    <>
      <button
        aria-expanded={open}
        class={`
          shrink-0
          min-w-0 min-h-0 relative z-0 m-0 p-1 rounded-3xl
          inline flex-col basis-auto items-stretch 
          transition-colors duration-200 ease-out bg-transparent hover:bg-[#c4c4c4] dark:hover:bg-[#3b3b3b]
          cursor-pointer touch-manipulation
        `}
        type="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
      >
        <div class="h-6 min-w-0 min-h-0 flex flex-nowrap gap-x-1 items-center cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
            aria-hidden="true"
            class="w-6 h-6 text-[#1c2b33] dark:text-white"
            role="img"
          >
            <path
              d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4zM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
              class="origin-top-left transform-[view-box]"
            />
          </svg>
        </div>
      </button>
      {mounted && (
        <div
          ref={sideNav}
          class="h-auto min-w-full min-h-full absolute left-0 right-0 top-0 z-400"
        >
          <div
            class="fixed inset-0 bg-none"
            onClick={() => setOpen(false)}
          />
          <div>
            <div class="relative">
              <div
                aria-label="Menu"
                aria-modal={open}
                aria-hidden={!open}
                class={`
                  inset-s-0
                  w-100 max-w-full fixed top-0 bottom-0
                  flex flex-col
                  transition-transform duration-500 ease-[ease]
                  bg-[#ffffffcc] dark:bg-[#1c1e2133] shadow-xl shadow-[#1c1e2111] dark:shadow-[#ffffff11]
                  overscroll-contain overflow-x-hidden overflow-y-auto [backdrop-filter:blur(50px)]
                  ${animatedOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                role="dialog"
              >
                <div class="shrink-0 h-16.75 min-w-0 min-h-0 flex justify-center items-center">
                  <a
                    href={toLocalePath("/", lang)}
                    aria-label="Home"
                    class="shrink-0 h-full min-w-0 min-h-0 relative z-0 m-0 p-0 flex basis-auto justify-center items-center bg-transparent cursor-pointer touch-manipulation"
                  >
                    <div class="h-6 min-w-0 min-h-0 flex flex-nowrap gap-x-1 items-center">
                      <span class="text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
                        Béla Struffolino
                      </span>
                    </div>
                  </a>
                  <button
                    aria-label="Close"
                    class="shrink-0 inset-e-4 min-w-0 min-h-0 absolute z-0 m-0 p-0 inline flex-col basis-auto items-stretch bg-transparent cursor-pointer touch-manipulation"
                    onClick={() => setOpen(false)}
                    type="button"
                    tabIndex={0}
                  >
                    <div class="inline">
                      <div class={`
                        shrink-0
                        w-8 h-8 rounded-full
                        flex justify-center items-center
                        border border-solid border-transparent
                        text-[#0a1317] dark:text-white hover:bg-[#c4c4c4] dark:hover:bg-[#3b3b3b]
                        cursor-pointer
                      `}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="1em"
                          height="1em"
                          aria-hidden="true"
                          class="w-6 h-6 fill-current text-inherit overflow-hidden cursor-pointer"
                          role="img"
                        >
                          <path
                            d="M5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293z"
                            class="origin-top-left transform-[view-box]"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                <hr
                  aria-hidden="true"
                  class="w-full p-0 m-0 text-[#dadde1] dark:text-[#404040] bg-[#0a13171f] dark:bg-[#ececece0]"
                />
                <div class="grow min-w-0 min-h-0 flex flex-col">
                  <div role="list">
                    {routes.map((r, i) => (
                      <Link
                        href={toLocalePath(r.href, lang)}
                        text={r.text[lang]}
                        lang={lang}
                        routeChildren={r.children}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
