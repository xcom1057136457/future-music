import{L as V,c as S,s as A,a as P,d as k,b as p,e as B,r as T,o as l,f as g,g as c,w as u,h as _,i as R,u as m,K as $,j as w,k as v,n as j,l as N,m as C,p as z,q as D,t as H,v as Z,F as M,x as I,T as F,y as q,B as K,z as U,A as W,C as G,R as J,D as Q,E as X}from"./.pnpm/.pnpm.4cafd867.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();function Y(t){t.use(V,{lazyComponent:!0})}const ee=Object.freeze(Object.defineProperty({__proto__:null,install:Y},Symbol.toStringTag,{value:"Module"}));function te(t){t.use(S().use(A))}const oe=Object.freeze(Object.defineProperty({__proto__:null,install:te},Symbol.toStringTag,{value:"Module"}));function ne(t){t.use(P())}const se=Object.freeze(Object.defineProperty({__proto__:null,install:ne},Symbol.toStringTag,{value:"Module"})),ae="modulepreload",re=function(t){return"/"+t},x={},h=function(s,o,r){if(!o||o.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=re(e),e in x)return;x[e]=!0;const a=e.endsWith(".css"),y=a?'[rel="stylesheet"]':"";if(!!r)for(let d=n.length-1;d>=0;d--){const f=n[d];if(f.href===e&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":ae,a||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),a)return new Promise((d,f)=>{i.addEventListener("load",d),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=e,window.dispatchEvent(a),!a.defaultPrevented)throw e})},E=k("cacheViews",{state:()=>({cacheViews:[]}),actions:{useAddCacheViews(t){var s;(s=t.meta)!=null&&s.noCache||this.cacheViews.includes(t.name)||this.cacheViews.push(t.name)}}}),ie=p({name:"AppMain",__name:"index",setup(t){const{cacheViews:s}=B(E());return(o,r)=>{const n=T("router-view");return l(),g("div",null,[c(n,null,{default:u(({Component:e,route:a})=>[(l(),_($,{include:m(s)},[(l(),_(R(e),{key:a.path}))],1032,["include"]))]),_:1})])}}}),le=["xlink:href","fill"],ce=p({name:"SvgIcon",__name:"index",props:{iconClass:{},className:{default:""},color:{default:""}},setup(t){const s=t,o=w(()=>`#icon-${s.iconClass}`),r=w(()=>s.className?`svg-icon ${s.className}`:"svg-icon");return(n,e)=>(l(),g("svg",{class:j([m(r),"-align-2px"]),relative:"","h-1em":"","w-1em":"","fill-current":"","aria-hidden":"true"},[v("use",{"xlink:href":m(o),fill:n.color},null,8,le)],2))}}),ue=p({name:"AppFoot",__name:"index",setup(t){const s=N(),o=C("");z(()=>s.path,()=>{var n,e;if((n=s.meta)!=null&&n.activeMenu){o.value=(e=s.meta)==null?void 0:e.activeMenu;return}o.value=s.path},{deep:!0,immediate:!0});const r=C([{name:"主页",icon:"home",path:"/home"},{name:"MV",icon:"movie",path:"/movie"},{name:"消息",icon:"message",path:"/message"},{name:"我的",icon:"user",path:"/my"}]);return(n,e)=>{const a=ce,y=F,b=q;return l(),_(b,{modelValue:m(o),"onUpdate:modelValue":e[0]||(e[0]=i=>I(o)?o.value=i:null),placeholder:"","safe-area-inset-bottom":"",fixed:"",border:""},{default:u(()=>[(l(!0),g(M,null,D(m(r),i=>(l(),_(y,{key:i.path,name:i.path,to:i.path,replace:""},{icon:u(()=>[c(a,{"icon-class":i.icon},null,8,["icon-class"])]),default:u(()=>[H(" "+Z(i.name),1)]),_:2},1032,["name","to"]))),128))]),_:1},8,["modelValue"])}}}),me={"min-h-full":"","overflow-auto":""},de=v("div",{"h-40px":"","w-40px":"",flex:"","items-center":"","justify-center":"","rounded-full":""},[v("div",{"i-material-symbols-keyboard-capslock":"","text-30px":""})],-1),_e=p({name:"DefaultLayout",__name:"index",setup(t){return(s,o)=>{const r=K;return l(),g(M,null,[v("div",me,[c(ie),c(ue)]),c(r,{right:"9vw",bottom:"18vw",class:"!bg-black/80"},{default:u(()=>[de]),_:1})],64)}}}),pe=[{path:"",component:_e,redirect:"/home",children:[{path:"/home",name:"Home",component:()=>h(()=>import("./home/index.259079bb.js"),["js/home/index.259079bb.js","js/.pnpm/.pnpm.4cafd867.js","css/.pnpm.e4fded6f.css"]),meta:{title:"主页"}},{path:"/movie",name:"Movie",component:()=>h(()=>import("./movie/index.3124a094.js"),["js/movie/index.3124a094.js","js/.pnpm/.pnpm.4cafd867.js","css/.pnpm.e4fded6f.css"]),meta:{title:"MV"}},{path:"/message",name:"Message",component:()=>h(()=>import("./message/index.57d8ddec.js"),["js/message/index.57d8ddec.js","js/.pnpm/.pnpm.4cafd867.js","css/.pnpm.e4fded6f.css"]),meta:{title:"消息"}},{path:"/my",name:"My",component:()=>h(()=>import("./my/index.11ba4659.js"),["js/my/index.11ba4659.js","js/.pnpm/.pnpm.4cafd867.js","css/.pnpm.e4fded6f.css"]),meta:{title:"我的"}}]}],L=U({history:W("/"),routes:pe});function fe(t){t.use(L)}const he=Object.freeze(Object.defineProperty({__proto__:null,install:fe},Symbol.toStringTag,{value:"Module"})),ve=p({__name:"App",setup(t){return(s,o)=>{const r=G;return l(),_(r,{"theme-vars":{primaryColor:"#0052d9"},"theme-vars-scope":"global"},{default:u(()=>[c(m(J))]),_:1})}}});if(typeof window<"u"){let t=function(){var s=document.body,o=document.getElementById("__svg__icons__dom__");o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",o.id="__svg__icons__dom__",o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),o.innerHTML='<symbol  viewBox="0 0 24 24" id="icon-home"><g fill="currentColor"><path d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z" opacity=".5" /><path d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3Z" /></g></symbol><symbol  viewBox="0 0 261.76 226.69" id="icon-logo"><path d="m161.096.001-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" /><path d="m161.096.001-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" /></symbol><symbol  viewBox="0 0 24 24" id="icon-message"><g fill="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" opacity=".5" /><path d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411 3.48-3.48a.75.75 0 0 1 1.06 0Z" /></g></symbol><symbol  viewBox="0 0 24 24" id="icon-movie"><g fill="currentColor"><path d="M5.586 21.414c-.502-.502-.574-2.017-.584-3.414h13.997c-.01 1.397-.082 2.912-.584 3.414C17.829 22 16.884 22 15 22H9c-1.885 0-2.828 0-3.414-.586Z" /><path d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0A5 5 0 0 1 19 14.584V18H5v-3.416A5.001 5.001 0 0 1 2 10Z" opacity=".5" /><path d="M11.043 13.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.005 0 .985-1.165 2.025-2.043 2.67-.42.307-.63.461-.957.461-.328 0-.537-.154-.957-.462Z" /></g></symbol><symbol  viewBox="0 0 24 24" id="icon-user"><g fill="currentColor"><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" opacity=".5" /><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8c4 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 0 2 4 2Z" /></g></symbol>',s.insertBefore(o,s.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}L.beforeEach((t,s,o)=>{var n,e;Q({title:(n=t.meta)!=null&&n.title?`Future Music - ${(e=t.meta)==null?void 0:e.title}`:"Future Music",link:[{rel:"icon",type:"image/svg+xml",href:()=>"/favicon.svg"}]});const{useAddCacheViews:r}=E();r(t),o()});const O=X(ve),ge=Object.assign({"./modules/lazy-load.ts":ee,"./modules/pinia.ts":oe,"./modules/vue-head.ts":se,"./modules/vue-router.ts":he});Object.values(ge).forEach(t=>{O.use(t)});O.mount("#app");