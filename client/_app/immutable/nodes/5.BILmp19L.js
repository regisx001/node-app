import{d as w,e as ue,a as t,f as o,t as r,c as X,b as e}from"../chunks/disclose-version.Ci-9qIsi.js";import{p as me,H as se,I as Ue,t as be,g as j,a as pe,n as Ye,G as ve,l as Xe,aa as bt,e as ge}from"../chunks/runtime.Dn8xTbO9.js";import{B as fe}from"../chunks/index.B8XJvVBN.js";import{d as $e,o as pt,w as wt,m as Re,j as Qe,k as we,r as ht,n as ke,l as We,g as st,c as Fe,B as _e}from"../chunks/index.DaaNqrYa.js";import{C as Me,a as Oe,b as Ee,c as ze,d as He}from"../chunks/card-title.BJ2zx9cY.js";import{C as qe}from"../chunks/card-footer.Bzhg_xKb.js";import{d as Ct,R as it,T as ct,D as vt,a as At,b as Ze}from"../chunks/index.G0JaPcXc.js";import{s as Ce,c as St}from"../chunks/attributes.i83UGXwF.js";import{i as he}from"../chunks/lifecycle.BVpPUcln.js";import{l as G,s as ye,p as z,i as lt}from"../chunks/index-client.BEFRGo_h.js";import{b as ot}from"../chunks/this.Dc4XhWTl.js";import{u as nt,s as je}from"../chunks/store.Cu4cPCHZ.js";import{I as Ie,o as yt,t as Pt,c as dt,r as ut,g as $t}from"../chunks/helpers.DCEK21HG.js";import{d as gt,r as et,w as xt}from"../chunks/index.COlryZgH.js";import{T as Tt,a as Nt,b as ce,c as De,d as kt,e as x}from"../chunks/table-row.muTcMZ-5.js";import{R as Mt,T as Ot,a as tt,D as rt,F as Et,b as zt,L as Dt}from"../chunks/index.BD_FFNvM.js";import{D as ft}from"../chunks/dropdown-menu-separator.DXC_IH60.js";import{C as Rt}from"../chunks/chevron-left.CewpWI3Q.js";function jt(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=[["path",{d:"m9 18 6-6-6-6"}]];var $=w(),_=o($);Ie(_,ye({name:"chevron-right"},()=>p,{iconNode:c,children:(f,P)=>{var i=w(),M=o(i);ue(M,$e(a),{},null),t(f,i)},$$slots:{default:!0},$$legacy:!0})),t(m,$)}function Ft(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];var $=w(),_=o($);Ie(_,ye({name:"copy"},()=>p,{iconNode:c,children:(f,P)=>{var i=w(),M=o(i);ue(M,$e(a),{},null),t(f,i)},$$slots:{default:!0},$$legacy:!0})),t(m,$)}function It(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];var $=w(),_=o($);Ie(_,ye({name:"credit-card"},()=>p,{iconNode:c,children:(f,P)=>{var i=w(),M=o(i);ue(M,$e(a),{},null),t(f,i)},$$slots:{default:!0},$$legacy:!0})),t(m,$)}function Bt(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];var $=w(),_=o($);Ie(_,ye({name:"ellipsis-vertical"},()=>p,{iconNode:c,children:(f,P)=>{var i=w(),M=o(i);ue(M,$e(a),{},null),t(f,i)},$$slots:{default:!0},$$legacy:!0})),t(m,$)}function Vt(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];var $=w(),_=o($);Ie(_,ye({name:"truck"},()=>p,{iconNode:c,children:(f,P)=>{var i=w(),M=o(i);ue(M,$e(a),{},null),t(f,i)},$$slots:{default:!0},$$legacy:!0})),t(m,$)}function Lt({page:m=1,totalPages:a,siblingCount:p=1}){const c=[],$=new Set([1,a]),_=3+p,f=a-2-p;if(_>f)for(let v=2;v<=a-1;v++)$.add(v);else if(m<_)for(let v=2;v<=Math.min(_,a);v++)$.add(v);else if(m>f)for(let v=a-1;v>=Math.max(f,2);v--)$.add(v);else for(let v=Math.max(m-p,2);v<=Math.min(m+p,a);v++)$.add(v);const P=v=>{c.push({type:"page",value:v,key:`page-${v}`})},i=()=>{c.push({type:"ellipsis",key:`ellipsis-${c.length}`})};let M=0;for(const v of Array.from($).sort((U,C)=>U-C))v-M>1&&i(),P(v),M=v;return c}const Wt={perPage:1,siblingCount:1,defaultPage:1},{name:Je,selector:at}=ht("pagination");function Ht(m){const a={...Wt,...m},p=a.page??xt(a.defaultPage),c=yt(p,a==null?void 0:a.onPageChange),$=Pt(pt(a,"page","onPageChange","defaultPage")),{perPage:_,siblingCount:f,count:P}=$,i=wt.derived([P,_],([d,g])=>Math.ceil(d/g)),M=gt([c,_,P],([d,g,n])=>{const u=(d-1)*g,h=Math.min(u+g,n);return{start:u,end:h}}),v=Re(Je(),{returned:()=>({"data-scope":"pagination"})}),U=gt([c,i,f],([d,g,n])=>Lt({page:d,totalPages:g,siblingCount:n})),C=d=>{const g=d.target;if(!ke(g))return;const n=g.closest('[data-scope="pagination"]');if(!ke(n))return;const u=Array.from(n.querySelectorAll(at("page"))).filter(N=>ke(N)),h=n.querySelector(at("prev")),y=n.querySelector(at("next"));ke(h)&&u.unshift(h),ke(y)&&u.push(y);const k=u.indexOf(g);d.key===We.ARROW_LEFT&&k!==0?(d.preventDefault(),u[k-1].focus()):d.key===We.ARROW_RIGHT&&k!==u.length-1?(d.preventDefault(),u[k+1].focus()):d.key===We.HOME?(d.preventDefault(),u[0].focus()):d.key===We.END&&(d.preventDefault(),u[u.length-1].focus())},D=Re(Je("page"),{stores:c,returned:d=>g=>({"aria-label":`Page ${g.value}`,"data-value":g.value,"data-selected":g.value===d?"":void 0}),action:d=>({destroy:Qe(we(d,"click",()=>{const n=d.dataset.value;!n||Number.isNaN(+n)||c.set(Number(n))}),we(d,"keydown",C))})}),F=Re(Je("prev"),{stores:c,returned:d=>({"aria-label":"Previous",disabled:d<=1}),action:d=>({destroy:Qe(we(d,"click",()=>{c.update(n=>Math.max(n-1,1))}),we(d,"keydown",C))})}),I=Re(Je("next"),{stores:[c,i],returned:([d,g])=>({"aria-label":"Next",disabled:d>=g}),action:d=>({destroy:Qe(we(d,"click",()=>{const n=i.get();c.update(u=>Math.min(u+1,n))}),we(d,"keydown",C))})});return{elements:{root:v,pageTrigger:D,prevButton:F,nextButton:I},states:{range:et(M),page:c,pages:et(U),totalPages:et(i)},options:$}}const qt={defaultValue:0,max:100},{name:Jt}=ht("progress"),Gt=m=>{const a={...qt,...m},p=Pt(pt(a,"value")),{max:c}=p,$=a.value??xt(a.defaultValue),_=yt($,a==null?void 0:a.onValueChange);return{elements:{root:Re(Jt(),{stores:[_,c],returned:([P,i])=>({value:P,max:i,role:"meter","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":P,"data-value":P,"data-state":P===null?"indeterminate":P===i?"complete":"loading","data-max":i})})},states:{value:_},options:p}};function Ut(){return{NAME:"separator",PARTS:["root"]}}function Yt(m){const{NAME:a,PARTS:p}=Ut(),c=dt(a,p),$={...Ct(ut(m)),getAttrs:c};return{...$,updateOption:$t($.options)}}var Xt=r("<div></div>");function Kt(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["orientation","decorative","asChild","el"]);me(a,!1);const $={};nt($);const _=()=>je(U,"$root",$),f=Ye();let P=z(a,"orientation",0,"horizontal"),i=z(a,"decorative",0,!0),M=z(a,"asChild",0,!1),v=z(a,"el",12,()=>{});const{elements:{root:U},updateOption:C,getAttrs:D}=Yt({orientation:P(),decorative:i()}),F=D("root");se(()=>ve(P()),()=>{C("orientation",P())}),se(()=>ve(i()),()=>{C("decorative",i())}),se(()=>_(),()=>{Xe(f,_())}),se(()=>j(f),()=>{Object.assign(j(f),F)}),Ue(),he();var I=w(),d=o(I);lt(d,M,g=>{var n=w(),u=o(n);ue(u,$e(a),{get builder(){return j(f)}},null),t(g,n)},g=>{var n=Xt();ot(n,h=>v(h),()=>v());let u;be(()=>u=Ce(n,u,{...j(f),...c},!0,"")),st(n,h=>j(f).action(h)),t(g,n)}),t(m,I),pe()}function Qt(){return{NAME:"pagination",PARTS:["root","prev-button","next-button","page"]}}function Zt(m){const{NAME:a,PARTS:p}=Qt(),c=dt(a,p),$={...Ht(ut(m)),getAttrs:c};return bt(a,$),{...$,updateOption:$t($.options)}}var er=r("<div><!></div>");function tr(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["count","page","onPageChange","perPage","siblingCount","asChild","el"]);me(a,!1);const $={};nt($);const _=()=>je(d,"$root",$),f=()=>je(g,"$pages",$),P=()=>je(n,"$range",$),i=Ye();let M=z(a,"count"),v=z(a,"page",12,()=>{}),U=z(a,"onPageChange",8,()=>{}),C=z(a,"perPage",8,()=>{}),D=z(a,"siblingCount",8,()=>{}),F=z(a,"asChild",0,!1),I=z(a,"el",12,()=>{});const{elements:{root:d},states:{pages:g,range:n,page:u},getAttrs:h,updateOption:y}=Zt({count:M(),perPage:C(),siblingCount:D(),defaultPage:v(),onPageChange:({next:S})=>{var O;return v()!==S&&((O=U())==null||O(S),v(S)),S}}),k=h("root");se(()=>ve(v()),()=>{v()!==void 0&&u.set(v())}),se(()=>_(),()=>{Xe(i,_())}),se(()=>j(i),()=>{Object.assign(j(i),k)}),se(()=>ve(M()),()=>{y("count",M())}),se(()=>ve(C()),()=>{y("perPage",C())}),se(()=>ve(D()),()=>{y("siblingCount",D())}),Ue(),he();var N=w(),le=o(N);lt(le,F,S=>{var O=w(),A=o(O);ue(A,$e(a),{get builder(){return j(i)},get pages(){return f()},get range(){return P()}},null),t(S,O)},S=>{var O=er();ot(O,Y=>I(Y),()=>I());let A;var W=X(O);ue(W,$e(a),{get builder(){return j(i)},get pages(){return f()},get range(){return P()}},null),be(()=>A=Ce(O,A,{...j(i),...c},!0,"")),st(O,Y=>j(i).action(Y)),t(S,O)}),t(m,N),pe()}function rr(){return{NAME:"progress",PARTS:["root"]}}function ar(m){const{NAME:a,PARTS:p}=rr(),c=dt(a,p),$={...Gt(ut(m)),getAttrs:c};return{...$,updateOption:$t($.options)}}var sr=r("<div><!></div>");function lr(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["max","value","onValueChange","asChild","el"]);me(a,!1);const $={};nt($);const _=()=>je(C,"$root",$),f=Ye();let P=z(a,"max",8,()=>{}),i=z(a,"value",12,()=>{}),M=z(a,"onValueChange",8,()=>{}),v=z(a,"asChild",0,!1),U=z(a,"el",12,()=>{});const{elements:{root:C},states:{value:D},updateOption:F,getAttrs:I}=ar({max:P(),defaultValue:i(),onValueChange:({next:u})=>{var h;return(h=M())==null||h(u),i(u),u}}),d=I("root");se(()=>ve(i()),()=>{i()!==void 0&&D.set(i())}),se(()=>ve(P()),()=>{F("max",P())}),se(()=>_(),()=>{Xe(f,_())}),se(()=>j(f),()=>{Object.assign(j(f),d)}),Ue(),he();var g=w(),n=o(g);lt(n,v,u=>{var h=w(),y=o(h);ue(y,$e(a),{get builder(){return j(f)}},null),t(u,h)},u=>{var h=sr();ot(h,N=>U(N),()=>U());let y;var k=X(h);ue(k,$e(a),{get builder(){return j(f)}},null),be(()=>y=Ce(h,y,{...j(f),...c},!0,"")),st(h,N=>j(f).action(N)),t(u,h)}),t(m,g),pe()}var or=r("<nav><!></nav>");function nr(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["class","count","perPage","page","siblingCount"]);me(a,!1);const $=Ye();let _=z(a,"class",8,()=>{}),f=z(a,"count",0,0),P=z(a,"perPage",0,10),i=z(a,"page",4,1),M=z(a,"siblingCount",0,1);se(()=>ve(i()),()=>{Xe($,i())}),Ue(),he();var v=w(),U=o(v);tr(U,ye({get count(){return f()},get perPage(){return P()},get siblingCount(){return M()},get page(){return i()},set page(C){i(C)},asChild:!0},()=>c,{children:(C,D)=>{const F=ge(()=>D.builder),I=ge(()=>D.pages),d=ge(()=>D.range);var g=or();let n;var u=X(g);ue(u,$e(a),{get pages(){return j(I)},get range(){return j(d)},get currentPage(){return j($)}},null),be(()=>n=Ce(g,n,{...j(F),class:Fe("mx-auto flex w-full flex-col items-center",_())},!0,"")),t(C,g)},$$slots:{default:!0},$$legacy:!0})),t(m,v),pe()}var dr=r("<ul><!></ul>");function ur(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["class"]);me(a,!1);let $=z(a,"class",8,()=>{});he();var _=dr();let f;var P=X(_);ue(P,$e(a),{},null),be(()=>f=Ce(_,f,{class:Fe("flex flex-row items-center gap-1",$()),...c},!0,"")),t(m,_),pe()}var $r=r("<li><!></li>");function _t(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["class"]);me(a,!1);let $=z(a,"class",8,()=>{});he();var _=$r();let f;var P=X(_);ue(P,$e(a),{},null),be(()=>f=Ce(_,f,{class:Fe("",$()),...c},!0,"")),t(m,_),pe()}var ir=r('<div class="h-full w-full flex-1 bg-primary transition-all"></div>');function mt(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["class","max","value"]);me(a,!1);let $=z(a,"class",8,()=>{}),_=z(a,"max",0,100),f=z(a,"value",8,()=>{});he();var P=w(),i=o(P),M=ge(()=>Fe("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",$()));lr(i,ye({get class(){return j(M)}},()=>c,{children:(v,U)=>{var C=ir();be(()=>St(C,"style",`transform: translateX(-${100-100*(f()??0)/(_()??1)}%)`)),t(v,C)},$$slots:{default:!0},$$legacy:!0})),t(m,P),pe()}function Ge(m,a){const p=G(a,["children","$$slots","$$events","$$legacy"]),c=G(p,["class","orientation","decorative"]);me(a,!1);let $=z(a,"class",8,()=>{}),_=z(a,"orientation",0,"horizontal"),f=z(a,"decorative",8,()=>{});he();var P=w(),i=o(P),M=ge(()=>Fe("shrink-0 bg-border",_()==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",$()));Kt(i,ye({get class(){return j(M)},get orientation(){return _()},get decorative(){return f()}},()=>c,{$$legacy:!0})),t(m,P),pe()}var cr=r("Your Orders",1),vr=r(`Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful
						Analysis.`,1),gr=r("<!> <!>",1),fr=r("Create New Order",1),_r=r("<!> <!>",1),mr=r("This Week",1),pr=r("$1329",1),hr=r("<!> <!>",1),yr=r('<div class="text-xs text-muted-foreground">+25% from last week</div>'),Pr=r("<!> <!> <!>",1),xr=r("This Month",1),br=r("$5,329",1),wr=r("<!> <!>",1),Cr=r('<div class="text-xs text-muted-foreground">+10% from last month</div>'),Ar=r("<!> <!> <!>",1),Sr=r("Week",1),Tr=r("Month",1),Nr=r("Year",1),kr=r("<!> <!> <!>",1),Mr=r('<!> <span class="sr-only sm:not-sr-only">Filter</span>',1),Or=r("Filter by",1),Er=r("Fulfilled",1),zr=r("Declined",1),Dr=r("Refunded",1),Rr=r("<!> <!> <!> <!> <!>",1),jr=r("<!> <!>",1),Fr=r('<!> <span class="sr-only sm:not-sr-only">Export</span>',1),Ir=r("Orders",1),Br=r("Recent orders from your store.",1),Vr=r("<!> <!>",1),Lr=r("Customer",1),Wr=r("Type",1),Hr=r("Status",1),qr=r("Date",1),Jr=r("Amount",1),Gr=r("<!> <!> <!> <!> <!>",1),Ur=r('<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>',1),Yr=r("Sale",1),Xr=r("Fulfilled",1),Kr=r("2023-06-23",1),Qr=r("$250.00",1),Zr=r("<!> <!> <!> <!> <!>",1),ea=r('<div class="font-medium">Olivia Smith</div> <div class="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>',1),ta=r("Refund",1),ra=r("Declined",1),aa=r("2023-06-24",1),sa=r("$150.00",1),la=r("<!> <!> <!> <!> <!>",1),oa=r('<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>',1),na=r("Sale",1),da=r("Fulfilled",1),ua=r("2023-06-23",1),$a=r("$250.00",1),ia=r("<!> <!> <!> <!> <!>",1),ca=r('<div class="font-medium">Noah Williams</div> <div class="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>',1),va=r("Subscription",1),ga=r("Fulfilled",1),fa=r("2023-06-25",1),_a=r("$350.00",1),ma=r("<!> <!> <!> <!> <!>",1),pa=r('<div class="font-medium">Emma Brown</div> <div class="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>',1),ha=r("Subscription",1),ya=r("Fulfilled",1),Pa=r("2023-06-26",1),xa=r("$450.00",1),ba=r("<!> <!> <!> <!> <!>",1),wa=r('<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>',1),Ca=r("Sale",1),Aa=r("Fulfilled",1),Sa=r("2023-06-23",1),Ta=r("$250.00",1),Na=r("<!> <!> <!> <!> <!>",1),ka=r('<div class="font-medium">Olivia Smith</div> <div class="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>',1),Ma=r("Refund",1),Oa=r("Declined",1),Ea=r("2023-06-24",1),za=r("$150.00",1),Da=r("<!> <!> <!> <!> <!>",1),Ra=r('<div class="font-medium">Emma Brown</div> <div class="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>',1),ja=r("Sale",1),Fa=r("Fulfilled",1),Ia=r("2023-06-26",1),Ba=r("$450.00",1),Va=r("<!> <!> <!> <!> <!>",1),La=r("<!> <!> <!> <!> <!> <!> <!> <!>",1),Wa=r("<!> <!>",1),Ha=r("<!> <!>",1),qa=r('<div class="flex items-center"><!> <div class="ml-auto flex items-center gap-2"><!> <!></div></div> <!>',1),Ja=r('<!> <span class="sr-only">Copy Order ID</span>',1),Ga=r("Order Oe31b70H <!>",1),Ua=r("Date: November 23, 2023",1),Ya=r('<!> <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>',1),Xa=r('<!> <span class="sr-only">More</span>',1),Ka=r("Edit",1),Qa=r("Export",1),Za=r("Trash",1),es=r("<!> <!> <!> <!>",1),ts=r("<!> <!>",1),rs=r('<div class="grid gap-0.5"><!> <!></div> <div class="ml-auto flex items-center gap-1"><!> <!></div>',1),as=r('<div class="grid gap-3"><div class="font-semibold">Order Details</div> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Glimmer Lamps x <span>2</span></span> <span>$250.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Aqua Filters x <span>1</span></span> <span>$49.00</span></li></ul> <!> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Subtotal</span> <span>$299.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Shipping</span> <span>$5.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Tax</span> <span>$25.00</span></li> <li class="flex items-center justify-between font-semibold"><span class="text-muted-foreground">Total</span> <span>$329.00</span></li></ul></div> <!> <div class="grid grid-cols-2 gap-4"><div class="grid gap-3"><div class="font-semibold">Shipping Information</div> <address class="grid gap-0.5 not-italic text-muted-foreground"><span>Liam Johnson</span> <span>1234 Main St.</span> <span>Anytown, CA 12345</span></address></div> <div class="grid auto-rows-max gap-3"><div class="font-semibold">Billing Information</div> <div class="text-muted-foreground">Same as shipping address</div></div></div> <!> <div class="grid gap-3"><div class="font-semibold">Customer Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="text-muted-foreground">Customer</dt> <dd>Liam Johnson</dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Email</dt> <dd><a href="mailto:">liam@acme.com</a></dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Phone</dt> <dd><a href="tel:">+1 234 567 890</a></dd></div></dl></div> <!> <div class="grid gap-3"><div class="font-semibold">Payment Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="flex items-center gap-1 text-muted-foreground"><!> Visa</dt> <dd>**** **** **** 4532</dd></div></dl></div>',1),ss=r('<!> <span class="sr-only">Previous Order</span>',1),ls=r('<!> <span class="sr-only">Next Order</span>',1),os=r("<!> <!>",1),ns=r('<div class="text-xs text-muted-foreground">Updated <time dateTime="2023-11-23">November 23, 2023</time></div> <!>',1),ds=r("<!> <!> <!>",1),us=r('<main class="grid flex-1 items-start gap-4 p-6 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"><div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2"><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"><!> <!> <!></div> <!></div> <div><!></div></main>');function Ts(m){var a=us(),p=X(a),c=X(p),$=X(c);Me($,{class:"sm:col-span-2",children:(v,U)=>{var C=_r(),D=o(C);Oe(D,{class:"pb-3",children:(I,d)=>{var g=gr(),n=o(g);Ee(n,{children:(h,y)=>{var k=cr();t(h,k)},$$slots:{default:!0},$$legacy:!0});var u=e(e(n,!0));ze(u,{class:"max-w-lg text-balance leading-relaxed",children:(h,y)=>{var k=vr();t(h,k)},$$slots:{default:!0},$$legacy:!0}),t(I,g)},$$slots:{default:!0},$$legacy:!0});var F=e(e(D,!0));qe(F,{children:(I,d)=>{var g=w(),n=o(g);_e(n,{children:(u,h)=>{var y=fr();t(u,y)},$$slots:{default:!0},$$legacy:!0}),t(I,g)},$$slots:{default:!0},$$legacy:!0}),t(v,C)},$$slots:{default:!0},$$legacy:!0});var _=e(e($,!0));Me(_,{children:(v,U)=>{var C=Pr(),D=o(C);Oe(D,{class:"pb-2",children:(d,g)=>{var n=hr(),u=o(n);ze(u,{children:(y,k)=>{var N=mr();t(y,N)},$$slots:{default:!0},$$legacy:!0});var h=e(e(u,!0));Ee(h,{class:"text-4xl",children:(y,k)=>{var N=pr();t(y,N)},$$slots:{default:!0},$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0});var F=e(e(D,!0));He(F,{children:(d,g)=>{var n=yr();t(d,n)},$$slots:{default:!0},$$legacy:!0});var I=e(e(F,!0));qe(I,{children:(d,g)=>{var n=w(),u=o(n);mt(u,{value:25,"aria-label":"25% increase",$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0}),t(v,C)},$$slots:{default:!0},$$legacy:!0});var f=e(e(_,!0));Me(f,{children:(v,U)=>{var C=Ar(),D=o(C);Oe(D,{class:"pb-2",children:(d,g)=>{var n=wr(),u=o(n);ze(u,{children:(y,k)=>{var N=xr();t(y,N)},$$slots:{default:!0},$$legacy:!0});var h=e(e(u,!0));Ee(h,{class:"text-3xl",children:(y,k)=>{var N=br();t(y,N)},$$slots:{default:!0},$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0});var F=e(e(D,!0));He(F,{children:(d,g)=>{var n=Cr();t(d,n)},$$slots:{default:!0},$$legacy:!0});var I=e(e(F,!0));qe(I,{children:(d,g)=>{var n=w(),u=o(n);mt(u,{value:12,"aria-label":"12% increase",$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0}),t(v,C)},$$slots:{default:!0},$$legacy:!0});var P=e(e(c,!0));Mt(P,{value:"week",children:(v,U)=>{var C=qa(),D=o(C),F=X(D);Ot(F,{children:(u,h)=>{var y=kr(),k=o(y);tt(k,{value:"week",children:(S,O)=>{var A=Sr();t(S,A)},$$slots:{default:!0},$$legacy:!0});var N=e(e(k,!0));tt(N,{value:"month",children:(S,O)=>{var A=Tr();t(S,A)},$$slots:{default:!0},$$legacy:!0});var le=e(e(N,!0));tt(le,{value:"year",children:(S,O)=>{var A=Nr();t(S,A)},$$slots:{default:!0},$$legacy:!0}),t(u,y)},$$slots:{default:!0},$$legacy:!0});var I=e(e(F,!0)),d=X(I);it(d,{children:(u,h)=>{var y=jr(),k=o(y);ct(k,{asChild:!0,children:(le,S)=>{const O=ge(()=>S.builder);var A=w(),W=o(A),Y=ge(()=>[j(O)]);_e(W,{variant:"outline",size:"sm",class:"h-7 gap-1 text-sm",get builders(){return j(Y)},children:(q,K)=>{var E=Mr(),H=o(E);Dt(H,{class:"h-3.5 w-3.5",$$legacy:!0}),t(q,E)},$$slots:{default:!0},$$legacy:!0}),t(le,A)},$$slots:{default:!0},$$legacy:!0});var N=e(e(k,!0));vt(N,{align:"end",children:(le,S)=>{var O=Rr(),A=o(O);At(A,{children:(E,H)=>{var J=Or();t(E,J)},$$slots:{default:!0},$$legacy:!0});var W=e(e(A,!0));ft(W,{$$legacy:!0});var Y=e(e(W,!0));rt(Y,{checked:!0,children:(E,H)=>{var J=Er();t(E,J)},$$slots:{default:!0},$$legacy:!0});var q=e(e(Y,!0));rt(q,{children:(E,H)=>{var J=zr();t(E,J)},$$slots:{default:!0},$$legacy:!0});var K=e(e(q,!0));rt(K,{children:(E,H)=>{var J=Dr();t(E,J)},$$slots:{default:!0},$$legacy:!0}),t(le,O)},$$slots:{default:!0},$$legacy:!0}),t(u,y)},$$slots:{default:!0},$$legacy:!0});var g=e(e(d,!0));_e(g,{size:"sm",variant:"outline",class:"h-7 gap-1 text-sm",children:(u,h)=>{var y=Fr(),k=o(y);Et(k,{class:"h-3.5 w-3.5",$$legacy:!0}),t(u,y)},$$slots:{default:!0},$$legacy:!0});var n=e(e(D,!0));zt(n,{value:"week",children:(u,h)=>{var y=w(),k=o(y);Me(k,{children:(N,le)=>{var S=Ha(),O=o(S);Oe(O,{class:"px-7",children:(W,Y)=>{var q=Vr(),K=o(q);Ee(K,{children:(H,J)=>{var ne=Ir();t(H,ne)},$$slots:{default:!0},$$legacy:!0});var E=e(e(K,!0));ze(E,{children:(H,J)=>{var ne=Br();t(H,ne)},$$slots:{default:!0},$$legacy:!0}),t(W,q)},$$slots:{default:!0},$$legacy:!0});var A=e(e(O,!0));He(A,{children:(W,Y)=>{var q=w(),K=o(q);Tt(K,{children:(E,H)=>{var J=Wa(),ne=o(J);Nt(ne,{children:(oe,Pe)=>{var de=w(),Be=o(de);ce(Be,{children:(Ve,Ke)=>{var Ae=Gr(),Se=o(Ae);De(Se,{children:(Z,R)=>{var T=Lr();t(Z,T)},$$slots:{default:!0},$$legacy:!0});var Te=e(e(Se,!0));De(Te,{class:"hidden sm:table-cell",children:(Z,R)=>{var T=Wr();t(Z,T)},$$slots:{default:!0},$$legacy:!0});var Ne=e(e(Te,!0));De(Ne,{class:"hidden sm:table-cell",children:(Z,R)=>{var T=Hr();t(Z,T)},$$slots:{default:!0},$$legacy:!0});var Le=e(e(Ne,!0));De(Le,{class:"hidden md:table-cell",children:(Z,R)=>{var T=qr();t(Z,T)},$$slots:{default:!0},$$legacy:!0});var Q=e(e(Le,!0));De(Q,{class:"text-right",children:(Z,R)=>{var T=Jr();t(Z,T)},$$slots:{default:!0},$$legacy:!0}),t(Ve,Ae)},$$slots:{default:!0},$$legacy:!0}),t(oe,de)},$$slots:{default:!0},$$legacy:!0});var ie=e(e(ne,!0));kt(ie,{children:(oe,Pe)=>{var de=La(),Be=o(de);ce(Be,{class:"bg-accent",children:(Q,Z)=>{var R=Zr(),T=o(R);x(T,{children:(l,b)=>{var s=Ur();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=Yr();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=Xr();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=Kr();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=Qr();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Ve=e(e(Be,!0));ce(Ve,{children:(Q,Z)=>{var R=la(),T=o(R);x(T,{children:(l,b)=>{var s=ea();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=ta();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"outline",children:(re,xe)=>{var ae=ra();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=aa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=sa();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Ke=e(e(Ve,!0));ce(Ke,{children:(Q,Z)=>{var R=ia(),T=o(R);x(T,{children:(l,b)=>{var s=oa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=na();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=da();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=ua();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=$a();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Ae=e(e(Ke,!0));ce(Ae,{children:(Q,Z)=>{var R=ma(),T=o(R);x(T,{children:(l,b)=>{var s=ca();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=va();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=ga();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=fa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=_a();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Se=e(e(Ae,!0));ce(Se,{children:(Q,Z)=>{var R=ba(),T=o(R);x(T,{children:(l,b)=>{var s=pa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=ha();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=ya();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=Pa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=xa();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Te=e(e(Se,!0));ce(Te,{children:(Q,Z)=>{var R=Na(),T=o(R);x(T,{children:(l,b)=>{var s=wa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=Ca();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=Aa();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=Sa();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=Ta();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Ne=e(e(Te,!0));ce(Ne,{children:(Q,Z)=>{var R=Da(),T=o(R);x(T,{children:(l,b)=>{var s=ka();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=Ma();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"outline",children:(re,xe)=>{var ae=Oa();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=Ea();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=za();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0});var Le=e(e(Ne,!0));ce(Le,{children:(Q,Z)=>{var R=Va(),T=o(R);x(T,{children:(l,b)=>{var s=Ra();t(l,s)},$$slots:{default:!0},$$legacy:!0});var B=e(e(T,!0));x(B,{class:"hidden sm:table-cell",children:(l,b)=>{var s=ja();t(l,s)},$$slots:{default:!0},$$legacy:!0});var V=e(e(B,!0));x(V,{class:"hidden sm:table-cell",children:(l,b)=>{var s=w(),te=o(s);fe(te,{class:"text-xs",variant:"secondary",children:(re,xe)=>{var ae=Fa();t(re,ae)},$$slots:{default:!0},$$legacy:!0}),t(l,s)},$$slots:{default:!0},$$legacy:!0});var L=e(e(V,!0));x(L,{class:"hidden md:table-cell",children:(l,b)=>{var s=Ia();t(l,s)},$$slots:{default:!0},$$legacy:!0});var ee=e(e(L,!0));x(ee,{class:"text-right",children:(l,b)=>{var s=Ba();t(l,s)},$$slots:{default:!0},$$legacy:!0}),t(Q,R)},$$slots:{default:!0},$$legacy:!0}),t(oe,de)},$$slots:{default:!0},$$legacy:!0}),t(E,J)},$$slots:{default:!0},$$legacy:!0}),t(W,q)},$$slots:{default:!0},$$legacy:!0}),t(N,S)},$$slots:{default:!0},$$legacy:!0}),t(u,y)},$$slots:{default:!0},$$legacy:!0}),t(v,C)},$$slots:{default:!0},$$legacy:!0});var i=e(e(p,!0)),M=X(i);Me(M,{class:"overflow-hidden",children:(v,U)=>{var C=ds(),D=o(C);Oe(D,{class:"flex flex-row items-start bg-muted/50",children:(d,g)=>{var n=rs(),u=o(n),h=X(u);Ee(h,{class:"group flex items-center gap-2 text-lg",children:(S,O)=>{var A=Ga(),W=e(o(A,!0));_e(W,{size:"icon",variant:"outline",class:"h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100",children:(Y,q)=>{var K=Ja(),E=o(K);Ft(E,{class:"h-3 w-3",$$legacy:!0}),t(Y,K)},$$slots:{default:!0},$$legacy:!0}),t(S,A)},$$slots:{default:!0},$$legacy:!0});var y=e(e(h,!0));ze(y,{children:(S,O)=>{var A=Ua();t(S,A)},$$slots:{default:!0},$$legacy:!0});var k=e(e(u,!0)),N=X(k);_e(N,{size:"sm",variant:"outline",class:"h-8 gap-1",children:(S,O)=>{var A=Ya(),W=o(A);Vt(W,{class:"h-3.5 w-3.5",$$legacy:!0}),t(S,A)},$$slots:{default:!0},$$legacy:!0});var le=e(e(N,!0));it(le,{children:(S,O)=>{var A=ts(),W=o(A);ct(W,{asChild:!0,children:(q,K)=>{const E=ge(()=>K.builder);var H=w(),J=o(H),ne=ge(()=>[j(E)]);_e(J,{get builders(){return j(ne)},size:"icon",variant:"outline",class:"h-8 w-8",children:(ie,oe)=>{var Pe=Xa(),de=o(Pe);Bt(de,{class:"h-3.5 w-3.5",$$legacy:!0}),t(ie,Pe)},$$slots:{default:!0},$$legacy:!0}),t(q,H)},$$slots:{default:!0},$$legacy:!0});var Y=e(e(W,!0));vt(Y,{align:"end",children:(q,K)=>{var E=es(),H=o(E);Ze(H,{children:(oe,Pe)=>{var de=Ka();t(oe,de)},$$slots:{default:!0},$$legacy:!0});var J=e(e(H,!0));Ze(J,{children:(oe,Pe)=>{var de=Qa();t(oe,de)},$$slots:{default:!0},$$legacy:!0});var ne=e(e(J,!0));ft(ne,{$$legacy:!0});var ie=e(e(ne,!0));Ze(ie,{children:(oe,Pe)=>{var de=Za();t(oe,de)},$$slots:{default:!0},$$legacy:!0}),t(q,E)},$$slots:{default:!0},$$legacy:!0}),t(S,A)},$$slots:{default:!0},$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0});var F=e(e(D,!0));He(F,{class:"p-6 text-sm",children:(d,g)=>{var n=as(),u=o(n),h=X(u),y=e(e(h,!0)),k=e(e(y,!0));Ge(k,{class:"my-2",$$legacy:!0});var N=e(e(u,!0));Ge(N,{class:"my-4",$$legacy:!0});var le=e(e(N,!0)),S=e(e(le,!0));Ge(S,{class:"my-4",$$legacy:!0});var O=e(e(S,!0)),A=e(e(O,!0));Ge(A,{class:"my-4",$$legacy:!0});var W=e(e(A,!0)),Y=X(W),q=e(e(Y,!0)),K=X(q),E=X(K),H=X(E);It(H,{class:"h-4 w-4",$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0});var I=e(e(F,!0));qe(I,{class:"flex flex-row items-center border-t bg-muted/50 px-6 py-3",children:(d,g)=>{var n=ns(),u=o(n),h=e(e(u,!0));nr(h,{count:10,class:"ml-auto mr-0 w-auto",children:(y,k)=>{var N=w(),le=o(N);ur(le,{children:(S,O)=>{var A=os(),W=o(A);_t(W,{children:(q,K)=>{var E=w(),H=o(E);_e(H,{size:"icon",variant:"outline",class:"h-6 w-6",children:(J,ne)=>{var ie=ss(),oe=o(ie);Rt(oe,{class:"h-3.5 w-3.5",$$legacy:!0}),t(J,ie)},$$slots:{default:!0},$$legacy:!0}),t(q,E)},$$slots:{default:!0},$$legacy:!0});var Y=e(e(W,!0));_t(Y,{children:(q,K)=>{var E=w(),H=o(E);_e(H,{size:"icon",variant:"outline",class:"h-6 w-6",children:(J,ne)=>{var ie=ls(),oe=o(ie);jt(oe,{class:"h-3.5 w-3.5",$$legacy:!0}),t(J,ie)},$$slots:{default:!0},$$legacy:!0}),t(q,E)},$$slots:{default:!0},$$legacy:!0}),t(S,A)},$$slots:{default:!0},$$legacy:!0}),t(y,N)},$$slots:{default:!0},$$legacy:!0}),t(d,n)},$$slots:{default:!0},$$legacy:!0}),t(v,C)},$$slots:{default:!0},$$legacy:!0}),t(m,a)}export{Ts as component};
