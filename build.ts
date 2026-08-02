const routes = [
  "/",
  "/en",
  "/de",
  "/en/projects",
  "/de/projects",
  "/en/experience",
  "/de/experience",
  "/en/education",
  "/de/education",
];

const basePath = ""

function withBase(pathname: string): string {
  return basePath ? `${basePath}${pathname}` : pathname;
}

const build = new Deno.Command("deno", {
  args: ["task", "fresh-build"],
  stdout: "inherit",
  stderr: "inherit",
}).spawn();

const buildStatus = await build.status;
if (!buildStatus.success) {
  throw new Error("Fresh build failed");
}

const server = new Deno.Command("deno", {
  args: ["task", "start"],
  stdout: "inherit",
  stderr: "inherit",
}).spawn();

const serverReady = await waitForServer("http://127.0.0.1:8000/en");
if (!serverReady) {
  try {
    server.kill("SIGTERM");
  } catch {
    // already exited
  }
  throw new Error("Fresh server did not start");
}

import { projects } from "@/data/projects.ts";
projects.map(p => {
  routes.push(`/en/projects/${p.id}`)
  routes.push(`/de/projects/${p.id}`)
})

await Deno.remove("_dist", { recursive: true }).catch(() => {});
await Deno.mkdir("_dist", { recursive: true });

await copyDir("_fresh/client/assets", "_dist/assets");

for (const route of routes) {
  const response = await fetch(`http://127.0.0.1:8000${route}`);
  if (!response.ok) {
    throw new Error(`Failed to prerender ${route}: ${response.status}`);
  }

  const html = await response.text();
  const rewrittenHtml = html.replaceAll(
    '"/assets/',
    `"${withBase("/assets/")}`,
  );
  const outputPath = `_dist${route}/index.html`;

  await Deno.mkdir(outputPath.slice(0, outputPath.lastIndexOf("/")), {
    recursive: true,
  });
  await Deno.writeTextFile(outputPath, rewrittenHtml);
}

// await copyDir("_fresh", "_dist/_fresh");
await copyDir("static", "_dist/static")

await rmDir("_fresh");

try {
  // server.kill("SIGTERM");
} catch {
  // already exited
}

async function waitForServer(url: string) {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch {
      // keep trying
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
}

async function copyDir(source: string, destination: string) {
  await Deno.mkdir(destination, { recursive: true });
  for await (const entry of Deno.readDir(source)) {
    const from = `${source}/${entry.name}`;
    const to = `${destination}/${entry.name}`;
    if (entry.isDirectory) {
      await copyDir(from, to);
    } else {
      await Deno.copyFile(from, to);
    }
  }
}

async function rmDir(path: string) {
  await Deno.remove(path, {recursive: true});
}
