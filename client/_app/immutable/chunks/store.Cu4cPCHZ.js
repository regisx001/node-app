import{s as i}from"./index.COlryZgH.js";import{w as c,g as f,U as o,l as a,x as l,u as b,n as _}from"./runtime.Dn8xTbO9.js";function p(n,u,s){let e=s[u];const t=e===void 0;t&&(e={store:null,last_value:null,value:_(o),unsubscribe:l},s[u]=e),(t||e.store!==n)&&(e.unsubscribe(),e.store=n??null,e.unsubscribe=d(n,e.value));const r=f(e.value);return r===o?e.last_value:r}function d(n,u){return n==null?(a(u,void 0),l):i(n,s=>a(u,s))}function I(n){v(()=>{let u;for(u in n)n[u].unsubscribe()})}function v(n){c(()=>()=>b(n))}export{p as s,I as u};