import{d as w,w as u}from"./index.COlryZgH.js";let f,h;function p(t){if(typeof document>"u")return;clearTimeout(f),clearTimeout(h);const n=document.createElement("style"),a=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);n.appendChild(a);const e=()=>document.head.appendChild(n),i=()=>document.head.removeChild(n);if(typeof window.getComputedStyle<"u"){e(),t(),window.getComputedStyle(n).opacity,i();return}if(typeof window.requestAnimationFrame<"u"){e(),t(),window.requestAnimationFrame(i);return}e(),f=window.setTimeout(()=>{t(),h=window.setTimeout(i,120)},120)}const g={getItem:t=>null,setItem:(t,n)=>{}},c=typeof document<"u",b=["dark","light","system"],l="mode-watcher-mode",k=M(),v=T(),S=u(void 0),E=u(!0),A=V();function M(){const t="system",n=c?localStorage:g,a=n.getItem(l);let e=y(a)?a:t;const{subscribe:i,set:d}=u(e,()=>{if(!c)return;const o=s=>{if(s.key!==l)return;const m=s.newValue;y(m)?d(e=m):d(e=t)};return addEventListener("storage",o),()=>removeEventListener("storage",o)});function r(o){d(e=o),n.setItem(l,e)}return{subscribe:i,set:r}}function T(){let n=!0;const{subscribe:a,set:e}=u(void 0,()=>{if(!c)return;const r=s=>{n&&e(s.matches?"light":"dark")},o=window.matchMedia("(prefers-color-scheme: light)");return o.addEventListener("change",r),()=>o.removeEventListener("change",r)});function i(){if(!c)return;const r=window.matchMedia("(prefers-color-scheme: light)");e(r.matches?"light":"dark")}function d(r){n=r}return{subscribe:a,query:i,tracking:d}}function V(){const{subscribe:t}=w([k,v,S,E],([n,a,e,i])=>{if(!c)return;const d=n==="system"?a:n;function r(){const o=document.documentElement,s=document.querySelector('meta[name="theme-color"]');d==="light"?(o.classList.remove("dark"),o.style.colorScheme="light",s&&e&&s.setAttribute("content",e.light)):(o.classList.add("dark"),o.style.colorScheme="dark",s&&e&&s.setAttribute("content",e.dark))}return i?p(r):r(),d});return{subscribe:t}}function y(t){return typeof t!="string"?!1:b.includes(t)}export{A as a,E as d,y as i,l,v as s,S as t,k as u};
