import { define } from "../utils.ts";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { getLocaleFromPathname } from "@/utils.ts";

export default define.page(function App({ Component, url }) {
  const lang = getLocaleFromPathname(url.pathname);

  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Béla Struffolino - Portfolio</title>
      </head>
      <body class="min-h-dvh flex flex-col overflow-y-scroll">
        <Header lang={lang} pathname={url.pathname} />
        <main class="flex-1">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
});
