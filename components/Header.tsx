import { JSX } from "preact";
import type { Locale } from "@/utils.ts";
import HeaderNav from "@/islands/HeaderNav.tsx";

export default function Header({ lang, pathname }: { lang: Locale; pathname: string }): JSX.Element {
  return (
    <nav class="sticky top-0 z-2">
      <HeaderNav
        lang={lang}
        pathname={pathname}
      />
    </nav>
  );
}
