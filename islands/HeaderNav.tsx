import { JSX, MouseEventHandler } from "preact";
import { useState } from "preact/hooks";
import SideNav from "@/islands/SideNav.tsx";
import { toLocalePath, type Locale } from "@/utils.ts";
import { routes } from "@/data/routes.ts";

function Home({ lang }: { lang: Locale; }): JSX.Element {
  return (
    <div class="h-full mr-10">
      <div class="h-full min-w-0 min-h-0 flex gap-x-4 items-center">
        <div class="mobile min-w-0 min-h-0 flex">
          <SideNav lang={lang} />
        </div>
        <a
          class={`
            shrink-0
            h-full relative z-0 min-w-0 min-h-0 m-0 p-0
            flex justify-center items-center basis-auto
            cursor-pointer touch-manipulation
            bg-transparent
          `}
          href={toLocalePath("/", lang)}
          role="link"
          target="_self"
        >
          <div class="h-6 min-w-0 min-h-0 flex gap-x-1 items-center">
            <span class="leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
              Béla Struffolino
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

function Link({ href, text, mouseEnter, menuOpen }: { href: string; text: string; mouseEnter: MouseEventHandler<HTMLAnchorElement>; menuOpen: boolean; }): JSX.Element {
  return (
    <div role="listitem">
      <div class="h-full min-w-0 min-h-0 flex justify-center items-center">
        <div class="min-w-0 min-h-0 flex items-center">
          <a
            aria-expanded="false"
            class={`
              shrink-0
              min-w-0 min-h-0 relative z-0 m-0 py-1 px-3 rounded-3xl
              inline flex-auto flex-col items-stretch
              cursor-pointer touch-manipulation
              transition-colors duration-200 ease-out
              ${menuOpen ? "bg-[#0000001a] dark:bg-[#ffffff1a]" : "hover:bg-[#0000001a] dark:hover:bg-[#ffffff1a]"}
            `}
            href={href}
            role="link"
            target="_self"
            onMouseEnter={mouseEnter}
          >
            <div class="h-6 min-w-0 min-h-0 flex gap-x-1 items-center">
              <span class="text-[.875rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
                {text}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function SubLink({ href, text }: { href: string; text: string }): JSX.Element {
  return (
    <div class="h-full min-w-0 min-h-0">
      <a
        aria-expanded="false"
        class="shrink-0 min-w-0 min-h-0 relative z-0 inline items-stretch cursor-pointer touch-manipulation hover:underline underline-offset-8"
        href={href}
        role="link"
        target="_self"
      >
        <span class="text-[1.125rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
          {text}
        </span>
      </a>
    </div>
  );
}

export default function HeaderNav({ lang, pathname }: { lang: Locale; pathname: string; }): JSX.Element {
  const nextLang: Locale = lang === "en" ? "de" : "en";
  const switchLabel = nextLang === "de" ? "Deutsch" : "English";

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [displayMenu, setDisplayMenu] = useState<number | null>(null);

  const handleMenuChange = (index: number | null) => {
    setActiveMenu(index);

    if (displayMenu !== null && routes[displayMenu].children) {
      setTimeout(() => setDisplayMenu(index), 150);
    } else {
      setDisplayMenu(index);
    }
  };

  return (
    <div onMouseLeave={() => handleMenuChange(null)}>
      <div class="w-full absolute top-0 z-0 pt-16" />
      <div class="w-full h-16 max-w-376 relative mx-auto mt-0 px-8">
        <div class="h-full min-w-0 min-h-0 mt-0 flex">
          <Home lang={lang} />
          <div class="non-mobile grow h-full">
            <div class="h-full min-w-0 min-h-0 flex items-stretch">
              <div class="min-w-0 min-h-0 flex items-stretch justify-center">
                <div class="self-stretch flex gap-3 justify-center">
                  {routes.map((r, i) => (
                    <Link
                      href={toLocalePath(r.href, lang, r.section)}
                      text={r.text[lang]}
                      key={i}
                      mouseEnter={() => handleMenuChange(i)}
                      menuOpen={activeMenu === i && r.children !== undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="w-auto h-full grow">
            <div class="h-full min-w-0 min-h-0 flex justify-end items-stretch">
              <div class="min-w-0 min-h-0 flex justify-center items-stretch">
                <div class="self-stretch flex gap-3 justify-center">
                  <div class="h-full min-w-0 min-h-0 flex justify-center items-center">
                    <div class="min-w-0 min-h-0 flex items-center">
                      <a
                        aria-expanded="false"
                        class={`
                          shrink-0
                          min-w-0 min-h-0 relative z-0 m-0 px-3 py-1 rounded-3xl
                          inline flex-auto flex-col items-stretch
                          cursor-pointer touch-manipulation
                          transition-colors duration-200 ease-out
                          bg-transparent hover:bg-[#0000001a] dark:hover:bg-[#ffffff1a]
                        `}
                        href={toLocalePath(pathname, nextLang)}
                        role="link"
                        target="_self"
                      >
                        <div class="h-6 min-w-0 min-h-0 flex gap-x-1 items-center">
                          <span class="text-[.875rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer">
                            {switchLabel}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class={`
          w-full absolute top-0 z-[-1] pt-16
          flex justify-center
          transition-all duration-150 ease [backdrop-filter:blur(20px)]
          ${activeMenu !== null && routes[activeMenu]?.children
            ? "bg-[#eeeeeecc] dark:bg-[#3e404333] shadow-xl shadow-[#1c1e2111] dark:shadow-[#ffffff11]"
            : "bg-[#ffffffcc] dark:bg-[#1c1e2133]"
          }
        `}
      >
        {displayMenu !== null && routes[displayMenu]?.children && (
          <div class={`grow min-w-0 max-w-376 pl-42 pt-6 pb-8 flex ${activeMenu !== null && routes[activeMenu]?.children ? "opacity-100" : "opacity-0"}`}>
            <div class="grid grid-cols-2 gap-x-24 gap-y-3">
              {routes[displayMenu].children.map((child) => (
                <SubLink
                  href={toLocalePath(child.href, lang)}
                  text={child.text[lang]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
