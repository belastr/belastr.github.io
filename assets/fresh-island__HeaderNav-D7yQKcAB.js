import{d as m}from"./hooks.module-DGh3qHUV.js";import{r as l,S as p}from"./SideNav-BK-o0ka8.js";import{t as c}from"./utils--XOEw7Wu.js";import{u as e}from"./jsxRuntime.module-BNAG-PpR.js";import"./projects-CxH7ClD-.js";import"./shared-BhHcoTYA.js";function x({lang:i}){return e("div",{class:"h-full mr-10",children:e("div",{class:"h-full min-w-0 min-h-0 flex gap-x-4 items-center",children:[e("div",{class:"mobile min-w-0 min-h-0 flex",children:e(p,{lang:i})}),e("a",{class:`
            shrink-0
            h-full relative z-0 min-w-0 min-h-0 m-0 p-0
            flex justify-center items-center basis-auto
            cursor-pointer touch-manipulation
            bg-transparent
          `,href:c("/",i),role:"link",target:"_self",children:e("div",{class:"h-6 min-w-0 min-h-0 flex gap-x-1 items-center",children:e("span",{class:"leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:"Béla Struffolino"})})})]})})}function v({href:i,text:r,mouseEnter:a,menuOpen:o}){return e("div",{role:"listitem",children:e("div",{class:"h-full min-w-0 min-h-0 flex justify-center items-center",children:e("div",{class:"min-w-0 min-h-0 flex items-center",children:e("a",{"aria-expanded":"false",class:`
              shrink-0
              min-w-0 min-h-0 relative z-0 m-0 py-1 px-3 rounded-3xl
              inline flex-auto flex-col items-stretch
              cursor-pointer touch-manipulation
              transition-colors duration-200 ease-out
              ${o?"bg-[#0000001a] dark:bg-[#ffffff1a]":"hover:bg-[#0000001a] dark:hover:bg-[#ffffff1a]"}
            `,href:i,role:"link",target:"_self",onMouseEnter:a,children:e("div",{class:"h-6 min-w-0 min-h-0 flex gap-x-1 items-center",children:e("span",{class:"text-[.875rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:r})})})})})})}function g({href:i,text:r}){return e("div",{class:"h-full min-w-0 min-h-0",children:e("a",{"aria-expanded":"false",class:"shrink-0 min-w-0 min-h-0 relative z-0 inline items-stretch cursor-pointer touch-manipulation hover:underline underline-offset-8",href:i,role:"link",target:"_self",children:e("span",{class:"text-[1.125rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:r})})})}function M({lang:i,pathname:r}){const a=i==="en"?"de":"en",o=a==="de"?"Deutsch":"English",[t,u]=m(null),[s,h]=m(null),d=n=>{u(n),s!==null&&l[s].children?setTimeout(()=>h(n),150):h(n)};return e("div",{onMouseLeave:()=>d(null),children:[e("div",{class:`
        w-full h-full absolute top-0 z-[-1] inset-s-0
        transition-colors duration-150 ease-out [backdrop-filter:blur(20px)]
        ${t!==null&&l[t]?.children?"bg-[#eeeeeecc] dark:bg-[#3e404333]":"bg-[#ffffffcc] dark:bg-[#1c1e2133]"}
      `}),e("div",{class:"w-full absolute top-0 z-0 pt-16"}),e("div",{class:"w-full h-16 max-w-376 relative mx-auto mt-0 px-8",children:e("div",{class:"h-full min-w-0 min-h-0 mt-0 flex",children:[e(x,{lang:i}),e("div",{class:"non-mobile grow h-full",children:e("div",{class:"h-full min-w-0 min-h-0 flex items-stretch",children:e("div",{class:"min-w-0 min-h-0 flex items-stretch justify-center",children:e("div",{class:"self-stretch flex gap-3 justify-center",children:l.map((n,f)=>e(v,{href:c(n.href,i,n.section),text:n.text[i],mouseEnter:()=>d(f),menuOpen:t===f&&n.children!==void 0},f))})})})}),e("div",{class:"w-auto h-full grow",children:e("div",{class:"h-full min-w-0 min-h-0 flex justify-end items-stretch",children:e("div",{class:"min-w-0 min-h-0 flex justify-center items-stretch",children:e("div",{class:"self-stretch flex gap-3 justify-center",children:e("div",{class:"h-full min-w-0 min-h-0 flex justify-center items-center",children:e("div",{class:"min-w-0 min-h-0 flex items-center",children:e("a",{"aria-expanded":"false",class:`
                          shrink-0
                          min-w-0 min-h-0 relative z-0 m-0 px-3 py-1 rounded-3xl
                          inline flex-auto flex-col items-stretch
                          cursor-pointer touch-manipulation
                          transition-colors duration-200 ease-out
                          bg-transparent hover:bg-[#0000001a] dark:hover:bg-[#ffffff1a]
                        `,href:c(r,a),role:"link",target:"_self",children:e("div",{class:"h-6 min-w-0 min-h-0 flex gap-x-1 items-center",children:e("span",{class:"text-[.875rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:o})})})})})})})})})]})}),e("div",{class:`
          w-full absolute top-16 z-20
          flex justify-center
          transition-opacity duration-150 ease-out [backdrop-filter:blur(20px)]
          ${t!==null&&l[t]?.children?"opacity-100":"opacity-0"}
          bg-[#eeeeeecc] dark:bg-[#3e404333] shadow-xl shadow-[#1c1e2111] dark:shadow-[#ffffff11]
        `,children:s!==null&&l[s]?.children&&e("div",{class:"grow min-w-0 max-w-376 pl-42 pt-6 pb-8 flex",children:e("div",{class:"grid grid-cols-2 gap-x-24 gap-y-3",children:l[s].children.map(n=>e(g,{href:c(n.href,i),text:n.text[i]}))})})})]})}export{M as default};
