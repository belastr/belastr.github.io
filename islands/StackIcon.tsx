import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function StackIcon({ text, colHex, path, isInProject = false }: { text: string; colHex: string; path: string[]; isInProject?: boolean }): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const media = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const update = () => setIsDarkMode(isInProject || media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [])

  const col1 = isDarkMode ? "#ffffff" : colHex;
  const col2 = isDarkMode ? colHex : "#ffffff";
  const col3 = isDarkMode ? "#ffffff" : colHex;

  return (
    <div
      style={{ borderColor: isHovered ? col3 : colHex, backgroundColor: isHovered ? col1 : col2 }}
      class={`
        px-1.5 rounded-full
        flex gap-x-1 items-center
        border border-solid
        transition-colors duration-200 ease-out
        ${isInProject ? "cursor-pointer" : "cursor-default"}
      `}
      onMouseEnter={() => setIsHovered(true && !isInProject)}
      onMouseLeave={() => setIsHovered(false && !isInProject)}
    >
      <svg
        class={isInProject ? "w-3 h-3" : "w-4 h-4"}
        viewBox="0 0 128 128"
      >
        {path.map((p) => (
          <path
            fill={isHovered ? col2 : col1}
            class="transition-colors duration-200 ease-out"
            d={p}
          />
        ))}
      </svg>
      <span
        style={{ color: isHovered ? col2 : col1 }}
        class={`
          text-nowrap
          transition-colors duration-200 ease-out
          ${isInProject ? "text-xs" : "text-base"}
        `}
      >
        {text}
      </span>
    </div>
  );
}
