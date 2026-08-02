import{d,y as p}from"./hooks.module-DGh3qHUV.js";import{u as t}from"./jsxRuntime.module-BNAG-PpR.js";function g({text:i,colHex:s,path:u,isInProject:e=!1}){const[r,c]=d(!1),[a,h]=d(!1);p(()=>{const o=globalThis.matchMedia("(prefers-color-scheme: dark)"),l=()=>h(e||o.matches);return l(),o.addEventListener("change",l),()=>o.removeEventListener("change",l)},[]);const n=a?"#ffffff":s,f=a?s:"#ffffff";return t("div",{style:{borderColor:r?a?"#ffffff":s:s,backgroundColor:r?n:f},class:`
        px-1.5 rounded-full
        flex gap-x-1 items-center
        border border-solid
        transition-colors duration-200 ease-out
        ${e?"cursor-pointer":"cursor-default"}
      `,onMouseEnter:()=>c(!e),onMouseLeave:()=>c(!1),children:[t("svg",{class:e?"w-3 h-3":"w-4 h-4",viewBox:"0 0 128 128",children:u.map(o=>t("path",{fill:r?f:n,class:"transition-colors duration-200 ease-out",d:o}))}),t("span",{style:{color:r?f:n},class:`
          text-nowrap
          transition-colors duration-200 ease-out
          ${e?"text-xs":"text-base"}
        `,children:i})]})}export{g as default};
