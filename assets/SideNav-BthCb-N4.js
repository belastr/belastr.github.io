import{d,y as f,A as m,S as v}from"./hooks.module-DGh3qHUV.js";import{p as w}from"./projects-CxH7ClD-.js";import{t as p}from"./utils-CZH3EtWG.js";import{u as e}from"./jsxRuntime.module-BNAG-PpR.js";const b=[{href:"/",section:"about",text:{en:"About",de:"Info"}},{href:"/",section:"stack",text:{en:"Stack",de:"Stack"}},{href:"/projects",text:{en:"Projects",de:"Projekte"},children:[{href:"/projects",text:{en:"Projects - Overview",de:"Projekte - Übersicht"}}]},{href:"/experience",text:{en:"Experience",de:"Erfahrung"}},{href:"/education",text:{en:"Education",de:"Ausbildung"}}];w.map(t=>{b[2].children?.push({href:`/projects/${t.id}`,text:{en:t.name.en,de:t.name.de}})});const g=b;function k({href:t,text:r}){return e("div",{class:"h-full min-w-0 min-h-0 my-1",children:e("a",{"aria-expanded":"false",class:"shrink-0 min-w-0 min-h-0 relative z-0 ml-2 inline items-stretch cursor-pointer touch-manipulation",href:t,role:"link",target:"_self",children:e("span",{class:"text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:r})})})}function y({href:t,text:r,lang:l,routeChildren:a}){const[o,c]=d(!1),[u,h]=d(0),n=m(null);return f(()=>{const i=n.current;if(!i)return;const x=new ResizeObserver(()=>{h(i.scrollHeight)});return x.observe(i),()=>x.disconnect()},[]),e("div",{role:"listitem",children:[a!==void 0&&e("button",{"aria-expanded":"false",class:`
            shrink-0
            w-full min-w-0 min-h-0 relative z-0 p-0 m-0
            flex flex-col basis-auto items-stretch
            bg-transparent cursor-pointer touch-manipulation
          `,type:"button",onClick:()=>{a!==void 0&&c(!o)},children:e("div",{class:"p-4",children:e("div",{class:"min-w-0 min-h-0 flex justify-between items-center cursor-pointer",children:[e("span",{class:"text-[1.25rem] leading-[1.4] font-light cursor-pointer",children:r}),e("svg",{viewBox:"0 0 24 24",class:`
                  w-6 h-6
                  overflow-hidden cursor-pointer
                  [transform-property:transform] duration-200 ease-in-out
                  ${o?"transform-[rotate(90deg)]":""}
                `,children:e("path",{class:"fill-[#1c2b33] dark:fill-white","fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.247 4.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 0 1 0 1.506l-8 7a1 1 0 0 1-1.318-1.506L14.482 12l-7.14-6.247a1 1 0 0 1-.094-1.412z"})})]})})})||e("a",{"aria-expanded":"false",class:`
            shrink-0
            w-full min-w-0 min-h-0 m-0 relative z-0 p-0
            flex flex-col basis-auto items-stretch
            bg-transparent cursor-pointer touch-manipulation
          `,href:t,target:"_self",role:"link",children:e("div",{class:"p-4",children:e("div",{class:"min-w-0 min-h-0 flex justify-between items-center cursor-pointer",children:e("span",{class:"text-[1.25rem] leading-[1.4] font-light cursor-pointer",children:r})})})}),e("div",{style:{height:o?`${u}px`:"0px"},class:"overflow-y-clip [transition-property:height] will-change-[height] duration-250 ease-[ease]",children:e("div",{ref:n,class:"px-10 pt-2 pb-4 flex flex-col gap-y-3",children:a?.map(i=>e(k,{href:p(i.href,l),text:i.text[l]}))})})]})}function S({lang:t}){const[r,l]=d(!1);f(()=>{const s=i=>{i.key==="Escape"&&l(!1)};return addEventListener("keydown",s),()=>removeEventListener("keydown",s)},[]);const a=m(null),[o,c]=d(r),[u,h]=d(!1),n=m(null);return f(()=>{if(r){n.current&&(clearTimeout(n.current),n.current=null),c(!0),requestAnimationFrame(()=>{h(!0)});return}return h(!1),n.current=globalThis.setTimeout(()=>{c(!1),n.current=null},500),()=>{n.current&&(clearTimeout(n.current),n.current=null)}},[r]),e(v,{children:[e("button",{"aria-expanded":r,class:`
          shrink-0
          min-w-0 min-h-0 relative z-0 m-0 p-1 rounded-3xl
          inline flex-col basis-auto items-stretch 
          transition-colors duration-200 ease-out bg-transparent hover:bg-[#c4c4c4] dark:hover:bg-[#3b3b3b]
          cursor-pointer touch-manipulation
        `,type:"button",tabIndex:0,onClick:()=>l(!0),children:e("div",{class:"h-6 min-w-0 min-h-0 flex flex-nowrap gap-x-1 items-center cursor-pointer",children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em","aria-hidden":"true",class:"w-6 h-6 text-[#1c2b33] dark:text-white",role:"img",children:e("path",{d:"M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4zM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z",class:"origin-top-left transform-[view-box]"})})})}),o&&e("div",{ref:a,class:"h-auto min-w-full min-h-full absolute left-0 right-0 top-0 z-400",children:[e("div",{class:"fixed inset-0 bg-none",onClick:()=>l(!1)}),e("div",{children:e("div",{class:"relative",children:e("div",{"aria-label":"Menu","aria-modal":r,"aria-hidden":!r,class:`
                  inset-s-0
                  w-100 max-w-full fixed top-0 bottom-0
                  flex flex-col
                  transition-transform duration-500 ease-[ease]
                  bg-[#ffffffcc] dark:bg-[#1c1e2133] shadow-xl shadow-[#1c1e2111] dark:shadow-[#ffffff11]
                  overscroll-contain overflow-x-hidden overflow-y-auto [backdrop-filter:blur(50px)]
                  ${u?"translate-x-0":"-translate-x-full"}
                `,role:"dialog",children:[e("div",{class:"shrink-0 h-16.75 min-w-0 min-h-0 flex justify-center items-center",children:[e("a",{href:p("/",t),"aria-label":"Home",class:"shrink-0 h-full min-w-0 min-h-0 relative z-0 m-0 p-0 flex basis-auto justify-center items-center bg-transparent cursor-pointer touch-manipulation",children:e("div",{class:"h-6 min-w-0 min-h-0 flex flex-nowrap gap-x-1 items-center",children:e("span",{class:"text-[1rem] leading-[1.4286] tracking-[-.01em] font-normal cursor-pointer",children:"Béla Struffolino"})})}),e("button",{"aria-label":"Close",class:"shrink-0 inset-e-4 min-w-0 min-h-0 absolute z-0 m-0 p-0 inline flex-col basis-auto items-stretch bg-transparent cursor-pointer touch-manipulation",onClick:()=>l(!1),type:"button",tabIndex:0,children:e("div",{class:"inline",children:e("div",{class:`
                        shrink-0
                        w-8 h-8 rounded-full
                        flex justify-center items-center
                        border border-solid border-transparent
                        text-[#0a1317] dark:text-white hover:bg-[#c4c4c4] dark:hover:bg-[#3b3b3b]
                        cursor-pointer
                      `,children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em","aria-hidden":"true",class:"w-6 h-6 fill-current text-inherit overflow-hidden cursor-pointer",role:"img",children:e("path",{d:"M5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293z",class:"origin-top-left transform-[view-box]"})})})})})]}),e("hr",{"aria-hidden":"true",class:"w-full p-0 m-0 text-[#dadde1] dark:text-[#404040] bg-[#0a13171f] dark:bg-[#ececece0]"}),e("div",{class:"grow min-w-0 min-h-0 flex flex-col",children:e("div",{role:"list",children:g.map((s,i)=>e(y,{href:p(s.href,t),text:s.text[t],lang:t,routeChildren:s.children},i))})})]})})})]})]})}export{S,g as r};
