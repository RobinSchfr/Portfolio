import{s as At,a as N,b as Y,f as Yt,d as it,e as ee,t as Ot,c as zt}from"../chunks/disclose-version.Cfp-rwoP.js";import{i as bt}from"../chunks/legacy.Ccq7PQRh.js";import{am as ke,aV as Fe,an as Be,p as $t,_ as je,t as W,a as yt,c as st,r as tt,f as rt,g as k,H as jt,n as vt,D as kt,F as Ve,z as Ft,b as He,G as Re,s as at}from"../chunks/utils.jAVDF0d8.js";import{e as he,I as Ge,i as ve,d as qe}from"../chunks/stores.BTjOYk1u.js";import{a as Ct,j as Ue,b as ne,c as Dt,B as Ke,s as Bt,h as Xe}from"../chunks/base.6jw1uNw_.js";import{T as Qe,R as Je,H as Ye}from"../chunks/h1.hikd9UnW.js";import{B as Vt}from"../chunks/button.dll4r16a.js";import{l as q,p as H,s as Rt,d as Ze,o as We}from"../chunks/index-client.BSQKl7cS.js";import{I as _e}from"../chunks/Icon.CGSPGy5y.js";import{b as be}from"../chunks/misc.Dzvx5Zh0.js";import{w as lt}from"../chunks/paths.BC-6g81N.js";import{R as tn,T as en,a as nn}from"../chunks/index.DzrmwCXh.js";import{M as on}from"../chunks/assets.DnT2XZAe.js";import{a as sn}from"../chunks/skills.CcdS91DS.js";function rn(t){return Object.prototype.toString.call(t)==="[object Object]"}function $e(t){return rn(t)||Array.isArray(t)}function cn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function oe(t,e){const o=Object.keys(t),r=Object.keys(e);if(o.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==s?!1:o.every(n=>{const a=t[n],c=e[n];return typeof a=="function"?`${a}`==`${c}`:!$e(a)||!$e(c)?a===c:oe(a,c)})}function ye(t){return t.concat().sort((e,o)=>e.name>o.name?1:-1).map(e=>e.options)}function an(t,e){if(t.length!==e.length)return!1;const o=ye(t),r=ye(e);return o.every((i,s)=>{const n=r[s];return oe(i,n)})}function se(t){return typeof t=="number"}function Zt(t){return typeof t=="string"}function Gt(t){return typeof t=="boolean"}function Se(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function re(t){return Math.sign(t)}function Lt(t,e){return D(t-e)}function ln(t,e){if(t===0||e===0||D(t)<=D(e))return 0;const o=Lt(D(t),D(e));return D(o/t)}function un(t){return Math.round(t*100)/100}function It(t){return Pt(t).map(Number)}function J(t){return t[Mt(t)]}function Mt(t){return Math.max(0,t.length-1)}function ie(t,e){return e===Mt(t)}function xe(t,e=0){return Array.from(Array(t),(o,r)=>e+r)}function Pt(t){return Object.keys(t)}function Ee(t,e){return[t,e].reduce((o,r)=>(Pt(r).forEach(i=>{const s=o[i],n=r[i],a=Se(s)&&Se(n);o[i]=a?Ee(s,n):n}),o),{})}function Wt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function fn(t,e){const o={start:r,center:i,end:s};function r(){return 0}function i(c){return s(c)/2}function s(c){return e-c}function n(c,l){return Zt(t)?o[t](c):t(e,c,l)}return{measure:n}}function wt(){let t=[];function e(i,s,n,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(s,n,a),c=()=>i.removeEventListener(s,n,a);else{const l=i;l.addListener(n),c=()=>l.removeListener(n)}return t.push(c),r}function o(){t=t.filter(i=>i())}const r={add:e,clear:o};return r}function dn(t,e,o,r){const i=wt(),s=1e3/60;let n=null,a=0,c=0;function l(){i.add(t,"visibilitychange",()=>{t.hidden&&u()})}function h(){b(),i.clear()}function d(){return a>=s}function p(){o(),a-=s,d()&&p()}function $(){const v=a/s;r(v)}function f(v){if(!c)return;n||(n=v,o(),$());const _=v-n;n=v,a+=_,d()&&p(),$(),c&&(c=e.requestAnimationFrame(f))}function m(){c||(c=e.requestAnimationFrame(f))}function b(){e.cancelAnimationFrame(c),n=null,a=0,c=0}function u(){n=null,a=0}return{init:l,destroy:h,start:m,stop:b,update:o,render:r}}function pn(t,e){const o=e==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",n=!r&&o?-1:1,a=h(),c=d();function l(f){const{height:m,width:b}=f;return r?m:b}function h(){return r?"top":o?"right":"left"}function d(){return r?"bottom":o?"left":"right"}function p(f){return f*n}return{scroll:i,cross:s,startEdge:a,endEdge:c,measureSize:l,direction:p}}function dt(t=0,e=0){const o=D(t-e);function r(l){return l<t}function i(l){return l>e}function s(l){return r(l)||i(l)}function n(l){return s(l)?r(l)?t:e:l}function a(l){return o?l-o*Math.ceil((l-e)/o):l}return{length:o,max:e,min:t,constrain:n,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function Te(t,e,o){const{constrain:r}=dt(0,t),i=t+1;let s=n(e);function n(p){return o?D((i+p)%i):r(p)}function a(){return s}function c(p){return s=n(p),d}function l(p){return h().set(a()+p)}function h(){return Te(t,a(),o)}const d={get:a,set:c,add:l,clone:h};return d}function mn(t,e,o,r,i,s,n,a,c,l,h,d,p,$,f,m,b,u,g){const{cross:v,direction:_}=t,I=["INPUT","SELECT","TEXTAREA"],L={passive:!1},x=wt(),E=wt(),T=dt(50,225).constrain($.measure(20)),S={mouse:300,touch:400},P={mouse:500,touch:600},w=f?43:25;let F=!1,U=0,B=0,K=!1,R=!1,X=!1,Q=!1;function pt(y){if(!g)return;function A(z){(Gt(g)||g(y,z))&&xt(z)}const M=e;x.add(M,"dragstart",z=>z.preventDefault(),L).add(M,"touchmove",()=>{},L).add(M,"touchend",()=>{}).add(M,"touchstart",A).add(M,"mousedown",A).add(M,"touchcancel",O).add(M,"contextmenu",O).add(M,"click",nt,!0)}function j(){x.clear(),E.clear()}function mt(){const y=Q?o:e;E.add(y,"touchmove",V,L).add(y,"touchend",O).add(y,"mousemove",V,L).add(y,"mouseup",O)}function gt(y){const A=y.nodeName||"";return I.includes(A)}function et(){return(f?P:S)[Q?"mouse":"touch"]}function St(y,A){const M=d.add(re(y)*-1),z=h.byDistance(y,!f).distance;return f||D(y)<T?z:b&&A?z*.5:h.byIndex(M.get(),0).distance}function xt(y){const A=Wt(y,r);Q=A,X=f&&A&&!y.buttons&&F,F=Lt(i.get(),n.get())>=2,!(A&&y.button!==0)&&(gt(y.target)||(K=!0,s.pointerDown(y),l.useFriction(0).useDuration(0),i.set(n),mt(),U=s.readPoint(y),B=s.readPoint(y,v),p.emit("pointerDown")))}function V(y){if(!Wt(y,r)&&y.touches.length>=2)return O(y);const M=s.readPoint(y),z=s.readPoint(y,v),Z=Lt(M,U),ot=Lt(z,B);if(!R&&!Q&&(!y.cancelable||(R=Z>ot,!R)))return O(y);const ut=s.pointerMove(y);Z>m&&(X=!0),l.useFriction(.3).useDuration(.75),a.start(),i.add(_(ut)),y.preventDefault()}function O(y){const M=h.byDistance(0,!1).index!==d.get(),z=s.pointerUp(y)*et(),Z=St(_(z),M),ot=ln(z,Z),ut=w-10*ot,ct=u+ot/50;R=!1,K=!1,E.clear(),l.useDuration(ut).useFriction(ct),c.distance(Z,!f),Q=!1,p.emit("pointerUp")}function nt(y){X&&(y.stopPropagation(),y.preventDefault(),X=!1)}function G(){return K}return{init:pt,destroy:j,pointerDown:G}}function gn(t,e){let r,i;function s(d){return d.timeStamp}function n(d,p){const f=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Wt(d,e)?d:d.touches[0])[f]}function a(d){return r=d,i=d,n(d)}function c(d){const p=n(d)-n(i),$=s(d)-s(r)>170;return i=d,$&&(r=d),p}function l(d){if(!r||!i)return 0;const p=n(i)-n(r),$=s(d)-s(r),f=s(d)-s(i)>170,m=p/$;return $&&!f&&D(m)>.1?m:0}return{pointerDown:a,pointerMove:c,pointerUp:l,readPoint:n}}function hn(){function t(o){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:n}=o;return{top:r,right:i+s,bottom:r+n,left:i,width:s,height:n}}return{measure:t}}function vn(t){function e(r){return t*(r/100)}return{measure:e}}function bn(t,e,o,r,i,s,n){const a=[t].concat(r);let c,l,h=[],d=!1;function p(b){return i.measureSize(n.measure(b))}function $(b){if(!s)return;l=p(t),h=r.map(p);function u(g){for(const v of g){if(d)return;const _=v.target===t,I=r.indexOf(v.target),L=_?l:h[I],x=p(_?t:r[I]);if(D(x-L)>=.5){b.reInit(),e.emit("resize");break}}}c=new ResizeObserver(g=>{(Gt(s)||s(b,g))&&u(g)}),o.requestAnimationFrame(()=>{a.forEach(g=>c.observe(g))})}function f(){d=!0,c&&c.disconnect()}return{init:$,destroy:f}}function $n(t,e,o,r,i,s){let n=0,a=0,c=i,l=s,h=t.get(),d=0;function p(){const L=r.get()-t.get(),x=!c;let E=0;return x?(n=0,o.set(r),t.set(r),E=L):(o.set(t),n+=L/c,n*=l,h+=n,t.add(n),E=h-d),a=re(E),d=h,I}function $(){const L=r.get()-e.get();return D(L)<.001}function f(){return c}function m(){return a}function b(){return n}function u(){return v(i)}function g(){return _(s)}function v(L){return c=L,I}function _(L){return l=L,I}const I={direction:m,duration:f,velocity:b,seek:p,settled:$,useBaseFriction:g,useBaseDuration:u,useFriction:_,useDuration:v};return I}function yn(t,e,o,r,i){const s=i.measure(10),n=i.measure(50),a=dt(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(o.get())||!t.reachedAny(e.get()))}function h($){if(!l())return;const f=t.reachedMin(e.get())?"min":"max",m=D(t[f]-e.get()),b=o.get()-e.get(),u=a.constrain(m/n);o.subtract(b*u),!$&&D(b)<s&&(o.set(t.constrain(o.get())),r.useDuration(25).useBaseFriction())}function d($){c=!$}return{shouldConstrain:l,constrain:h,toggleActive:d}}function Sn(t,e,o,r,i){const s=dt(-e+t,0),n=d(),a=h(),c=p();function l(f,m){return Lt(f,m)<1}function h(){const f=n[0],m=J(n),b=n.lastIndexOf(f),u=n.indexOf(m)+1;return dt(b,u)}function d(){return o.map((f,m)=>{const{min:b,max:u}=s,g=s.constrain(f),v=!m,_=ie(o,m);return v?u:_||l(b,g)?b:l(u,g)?u:g}).map(f=>parseFloat(f.toFixed(3)))}function p(){if(e<=t+i)return[s.max];if(r==="keepSnaps")return n;const{min:f,max:m}=a;return n.slice(f,m)}return{snapsContained:c,scrollContainLimit:a}}function xn(t,e,o){const r=e[0],i=o?r-t:J(e);return{limit:dt(i,r)}}function _n(t,e,o,r){const s=e.min+.1,n=e.max+.1,{reachedMin:a,reachedMax:c}=dt(s,n);function l(p){return p===1?c(o.get()):p===-1?a(o.get()):!1}function h(p){if(!l(p))return;const $=t*(p*-1);r.forEach(f=>f.add($))}return{loop:h}}function En(t){const{max:e,length:o}=t;function r(s){const n=s-e;return o?n/-o:0}return{get:r}}function Tn(t,e,o,r,i){const{startEdge:s,endEdge:n}=t,{groupSlides:a}=i,c=d().map(e.measure),l=p(),h=$();function d(){return a(r).map(m=>J(m)[n]-m[0][s]).map(D)}function p(){return r.map(m=>o[s]-m[s]).map(m=>-D(m))}function $(){return a(l).map(m=>m[0]).map((m,b)=>m+c[b])}return{snaps:l,snapsAligned:h}}function Ln(t,e,o,r,i,s){const{groupSlides:n}=i,{min:a,max:c}=r,l=h();function h(){const p=n(s),$=!t||e==="keepSnaps";return o.length===1?[s]:$?p:p.slice(a,c).map((f,m,b)=>{const u=!m,g=ie(b,m);if(u){const v=J(b[0])+1;return xe(v)}if(g){const v=Mt(s)-J(b)[0]+1;return xe(v,J(b)[0])}return f})}return{slideRegistry:l}}function In(t,e,o,r,i){const{reachedAny:s,removeOffset:n,constrain:a}=r;function c(f){return f.concat().sort((m,b)=>D(m)-D(b))[0]}function l(f){const m=t?n(f):a(f),b=e.map((g,v)=>({diff:h(g-m,0),index:v})).sort((g,v)=>D(g.diff)-D(v.diff)),{index:u}=b[0];return{index:u,distance:m}}function h(f,m){const b=[f,f+o,f-o];if(!t)return f;if(!m)return c(b);const u=b.filter(g=>re(g)===m);return u.length?c(u):J(b)-o}function d(f,m){const b=e[f]-i.get(),u=h(b,m);return{index:f,distance:u}}function p(f,m){const b=i.get()+f,{index:u,distance:g}=l(b),v=!t&&s(b);if(!m||v)return{index:u,distance:f};const _=e[u]-g,I=f+h(_,0);return{index:u,distance:I}}return{byDistance:p,byIndex:d,shortcut:h}}function Pn(t,e,o,r,i,s,n){function a(d){const p=d.distance,$=d.index!==e.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),$&&(o.set(e.get()),e.set(d.index),n.emit("select"))}function c(d,p){const $=i.byDistance(d,p);a($)}function l(d,p){const $=e.clone().set(d),f=i.byIndex($.get(),p);a(f)}return{distance:c,index:l}}function wn(t,e,o,r,i,s,n,a){const c={passive:!0,capture:!0};let l=0;function h($){if(!a)return;function f(m){if(new Date().getTime()-l>10)return;n.emit("slideFocusStart"),t.scrollLeft=0;const g=o.findIndex(v=>v.includes(m));se(g)&&(i.useDuration(0),r.index(g,0),n.emit("slideFocus"))}s.add(document,"keydown",d,!1),e.forEach((m,b)=>{s.add(m,"focus",u=>{(Gt(a)||a($,u))&&f(b)},c)})}function d($){$.code==="Tab"&&(l=new Date().getTime())}return{init:h}}function Tt(t){let e=t;function o(){return e}function r(c){e=n(c)}function i(c){e+=n(c)}function s(c){e-=n(c)}function n(c){return se(c)?c:c.get()}return{get:o,set:r,add:i,subtract:s}}function Le(t,e){const o=t.scroll==="x"?n:a,r=e.style;let i=null,s=!1;function n(p){return`translate3d(${p}px,0px,0px)`}function a(p){return`translate3d(0px,${p}px,0px)`}function c(p){if(s)return;const $=un(t.direction(p));$!==i&&(r.transform=o($),i=$)}function l(p){s=!p}function h(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:c,toggleActive:l}}function An(t,e,o,r,i,s,n,a,c){const h=It(i),d=It(i).reverse(),p=u().concat(g());function $(x,E){return x.reduce((T,S)=>T-i[S],E)}function f(x,E){return x.reduce((T,S)=>$(T,E)>0?T.concat([S]):T,[])}function m(x){return s.map((E,T)=>({start:E-r[T]+.5+x,end:E+e-.5+x}))}function b(x,E,T){const S=m(E);return x.map(P=>{const w=T?0:-o,F=T?o:0,U=T?"end":"start",B=S[P][U];return{index:P,loopPoint:B,slideLocation:Tt(-1),translate:Le(t,c[P]),target:()=>a.get()>B?w:F}})}function u(){const x=n[0],E=f(d,x);return b(E,o,!1)}function g(){const x=e-n[0]-1,E=f(h,x);return b(E,-o,!0)}function v(){return p.every(({index:x})=>{const E=h.filter(T=>T!==x);return $(E,e)<=.1})}function _(){p.forEach(x=>{const{target:E,translate:T,slideLocation:S}=x,P=E();P!==S.get()&&(T.to(P),S.set(P))})}function I(){p.forEach(x=>x.translate.clear())}return{canLoop:v,clear:I,loop:_,loopPoints:p}}function Cn(t,e,o){let r,i=!1;function s(c){if(!o)return;function l(h){for(const d of h)if(d.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(Gt(o)||o(c,h))&&l(h)}),r.observe(t,{childList:!0})}function n(){r&&r.disconnect(),i=!0}return{init:s,destroy:n}}function Dn(t,e,o,r){const i={};let s=null,n=null,a,c=!1;function l(){a=new IntersectionObserver(f=>{c||(f.forEach(m=>{const b=e.indexOf(m.target);i[b]=m}),s=null,n=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(f=>a.observe(f))}function h(){a&&a.disconnect(),c=!0}function d(f){return Pt(i).reduce((m,b)=>{const u=parseInt(b),{isIntersecting:g}=i[u];return(f&&g||!f&&!g)&&m.push(u),m},[])}function p(f=!0){if(f&&s)return s;if(!f&&n)return n;const m=d(f);return f&&(s=m),f||(n=m),m}return{init:l,destroy:h,get:p}}function Mn(t,e,o,r,i,s){const{measureSize:n,startEdge:a,endEdge:c}=t,l=o[0]&&i,h=f(),d=m(),p=o.map(n),$=b();function f(){if(!l)return 0;const g=o[0];return D(e[a]-g[a])}function m(){if(!l)return 0;const g=s.getComputedStyle(J(r));return parseFloat(g.getPropertyValue(`margin-${c}`))}function b(){return o.map((g,v,_)=>{const I=!v,L=ie(_,v);return I?p[v]+h:L?p[v]+d:_[v+1][a]-g[a]}).map(D)}return{slideSizes:p,slideSizesWithGaps:$,startGap:h,endGap:d}}function Nn(t,e,o,r,i,s,n,a,c){const{startEdge:l,endEdge:h,direction:d}=t,p=se(o);function $(u,g){return It(u).filter(v=>v%g===0).map(v=>u.slice(v,v+g))}function f(u){return u.length?It(u).reduce((g,v,_)=>{const I=J(g)||0,L=I===0,x=v===Mt(u),E=i[l]-s[I][l],T=i[l]-s[v][h],S=!r&&L?d(n):0,P=!r&&x?d(a):0,w=D(T-P-(E+S));return _&&w>e+c&&g.push(v),x&&g.push(u.length),g},[]).map((g,v,_)=>{const I=Math.max(_[v-1]||0);return u.slice(I,g)}):[]}function m(u){return p?$(u,o):f(u)}return{groupSlides:m}}function On(t,e,o,r,i,s,n){const{align:a,axis:c,direction:l,startIndex:h,loop:d,duration:p,dragFree:$,dragThreshold:f,inViewThreshold:m,slidesToScroll:b,skipSnaps:u,containScroll:g,watchResize:v,watchSlides:_,watchDrag:I,watchFocus:L}=s,x=2,E=hn(),T=E.measure(e),S=o.map(E.measure),P=pn(c,l),w=P.measureSize(T),F=vn(w),U=fn(a,w),B=!d&&!!g,K=d||!!g,{slideSizes:R,slideSizesWithGaps:X,startGap:Q,endGap:pt}=Mn(P,T,S,o,K,i),j=Nn(P,w,b,d,T,S,Q,pt,x),{snaps:mt,snapsAligned:gt}=Tn(P,U,T,S,j),et=-J(mt)+J(X),{snapsContained:St,scrollContainLimit:xt}=Sn(w,et,gt,g,x),V=B?St:gt,{limit:O}=xn(et,V,d),nt=Te(Mt(V),h,d),G=nt.clone(),C=It(o),y=({dragHandler:ht,scrollBody:Qt,scrollBounds:Jt,options:{loop:Nt}})=>{Nt||Jt.constrain(ht.pointerDown()),Qt.seek()},A=({scrollBody:ht,translate:Qt,location:Jt,offsetLocation:Nt,previousLocation:we,scrollLooper:Ae,slideLooper:Ce,dragHandler:De,animation:Me,eventHandler:fe,scrollBounds:Ne,options:{loop:de}},pe)=>{const me=ht.settled(),Oe=!Ne.shouldConstrain(),ge=de?me:me&&Oe;ge&&!De.pointerDown()&&(Me.stop(),fe.emit("settle")),ge||fe.emit("scroll");const ze=Jt.get()*pe+we.get()*(1-pe);Nt.set(ze),de&&(Ae.loop(ht.direction()),Ce.loop()),Qt.to(Nt.get())},M=dn(r,i,()=>y(Xt),ht=>A(Xt,ht)),z=.68,Z=V[nt.get()],ot=Tt(Z),ut=Tt(Z),ct=Tt(Z),ft=Tt(Z),_t=$n(ot,ct,ut,ft,p,z),Ut=In(d,V,et,O,ft),Kt=Pn(M,nt,G,_t,Ut,ft,n),ae=En(O),le=wt(),Ie=Dn(e,o,n,m),{slideRegistry:ue}=Ln(B,g,V,xt,j,C),Pe=wn(t,o,ue,Kt,_t,le,n,L),Xt={ownerDocument:r,ownerWindow:i,eventHandler:n,containerRect:T,slideRects:S,animation:M,axis:P,dragHandler:mn(P,t,r,i,ft,gn(P,i),ot,M,Kt,_t,Ut,nt,n,F,$,f,u,z,I),eventStore:le,percentOfView:F,index:nt,indexPrevious:G,limit:O,location:ot,offsetLocation:ct,previousLocation:ut,options:s,resizeHandler:bn(e,n,i,o,P,v,E),scrollBody:_t,scrollBounds:yn(O,ct,ft,_t,F),scrollLooper:_n(et,O,ct,[ot,ct,ut,ft]),scrollProgress:ae,scrollSnapList:V.map(ae.get),scrollSnaps:V,scrollTarget:Ut,scrollTo:Kt,slideLooper:An(P,w,et,R,X,mt,V,ct,o),slideFocus:Pe,slidesHandler:Cn(e,n,_),slidesInView:Ie,slideIndexes:C,slideRegistry:ue,slidesToScroll:j,target:ft,translate:Le(P,e)};return Xt}function zn(){let t={},e;function o(l){e=l}function r(l){return t[l]||[]}function i(l){return r(l).forEach(h=>h(e,l)),c}function s(l,h){return t[l]=r(l).concat([h]),c}function n(l,h){return t[l]=r(l).filter(d=>d!==h),c}function a(){t={}}const c={init:o,emit:i,off:n,on:s,clear:a};return c}const kn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Fn(t){function e(s,n){return Ee(s,n||{})}function o(s){const n=s.breakpoints||{},a=Pt(n).filter(c=>t.matchMedia(c).matches).map(c=>n[c]).reduce((c,l)=>e(c,l),{});return e(s,a)}function r(s){return s.map(n=>Pt(n.breakpoints||{})).reduce((n,a)=>n.concat(a),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:o,optionsMediaQueries:r}}function Bn(t){let e=[];function o(s,n){return e=n.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),e.forEach(a=>a.init(s,t)),n.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:o,destroy:r}}function Ht(t,e,o){const r=t.ownerDocument,i=r.defaultView,s=Fn(i),n=Bn(s),a=wt(),c=zn(),{mergeOptions:l,optionsAtMedia:h,optionsMediaQueries:d}=s,{on:p,off:$,emit:f}=c,m=P;let b=!1,u,g=l(kn,Ht.globalOptions),v=l(g),_=[],I,L,x;function E(){const{container:C,slides:y}=v;L=(Zt(C)?t.querySelector(C):C)||t.children[0];const M=Zt(y)?L.querySelectorAll(y):y;x=[].slice.call(M||L.children)}function T(C){const y=On(t,L,x,r,i,C,c);if(C.loop&&!y.slideLooper.canLoop()){const A=Object.assign({},C,{loop:!1});return T(A)}return y}function S(C,y){b||(g=l(g,C),v=h(g),_=y||_,E(),u=T(v),d([g,..._.map(({options:A})=>A)]).forEach(A=>a.add(A,"change",P)),v.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(G),u.eventHandler.init(G),u.resizeHandler.init(G),u.slidesHandler.init(G),u.options.loop&&u.slideLooper.loop(),L.offsetParent&&x.length&&u.dragHandler.init(G),I=n.init(G,_)))}function P(C,y){const A=j();w(),S(l({startIndex:A},C),y),c.emit("reInit")}function w(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),n.destroy(),a.clear()}function F(){b||(b=!0,a.clear(),w(),c.emit("destroy"),c.clear())}function U(C,y,A){!v.active||b||(u.scrollBody.useBaseFriction().useDuration(y===!0?0:v.duration),u.scrollTo.index(C,A||0))}function B(C){const y=u.index.add(1).get();U(y,C,-1)}function K(C){const y=u.index.add(-1).get();U(y,C,1)}function R(){return u.index.add(1).get()!==j()}function X(){return u.index.add(-1).get()!==j()}function Q(){return u.scrollSnapList}function pt(){return u.scrollProgress.get(u.location.get())}function j(){return u.index.get()}function mt(){return u.indexPrevious.get()}function gt(){return u.slidesInView.get()}function et(){return u.slidesInView.get(!1)}function St(){return I}function xt(){return u}function V(){return t}function O(){return L}function nt(){return x}const G={canScrollNext:R,canScrollPrev:X,containerNode:O,internalEngine:xt,destroy:F,off:$,on:p,emit:f,plugins:St,previousScrollSnap:mt,reInit:m,rootNode:V,scrollNext:B,scrollPrev:K,scrollProgress:pt,scrollSnapList:Q,scrollTo:U,selectedScrollSnap:j,slideNodes:nt,slidesInView:gt,slidesNotInView:et};return S(e,o),setTimeout(()=>c.emit("init"),0),G}Ht.globalOptions=void 0;function ce(t,e={options:{},plugins:[]}){let o=e,r;return cn()&&(Ht.globalOptions=ce.globalOptions,r=Ht(t,o.options,o.plugins),r.on("init",()=>t.dispatchEvent(new CustomEvent("emblaInit",{detail:r})))),{destroy:()=>{r&&r.destroy()},update:i=>{const s=!oe(o.options,i.options),n=!an(o.plugins,i.plugins);!s&&!n||(o=i,r&&r.reInit(o.options,o.plugins))}}}ce.globalOptions=void 0;const te=Symbol("EMBLA_CAROUSEL_CONTEXT");function jn(t){return ke(te,t),t}function qt(t="This component"){if(!Fe(te))throw new Error(`${t} must be used within a <Carousel.Root> component`);return Be(te)}var Vn=Y('<div class="overflow-hidden"><div><!></div></div>');function Hn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]),r=q(o,["class"]);$t(e,!1);const i=At(),s=()=>it(h,"$options",i),n=()=>it(l,"$orientation",i),a=()=>it(d,"$plugins",i);let c=H(e,"class",8,void 0);const{orientation:l,options:h,plugins:d,onInit:p}=qt("<Carousel.Content/>");bt();var $=Vn(),f=st($);let m;var b=st(f);Ct(b,e,"default",{}),tt(f),tt($),Ue($,(u,g)=>ce(u,g),()=>({options:{container:"[data-embla-container]",slides:"[data-embla-slide]",...s(),axis:n()==="horizontal"?"x":"y"},plugins:a()})),je(()=>Yt("emblaInit",$,p)),W(()=>m=ne(f,m,{class:Dt("flex",n()==="horizontal"?"-ml-4":"-mt-4 flex-col",c()),"data-embla-container":"",...r})),N(t,$),yt()}var Rn=Y("<div><!></div>");function Gn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]),r=q(o,["class"]);$t(e,!1);const i=At(),s=()=>it(a,"$orientation",i);let n=H(e,"class",8,void 0);const{orientation:a}=qt("<Carousel.Item/>");bt();var c=Rn();let l;var h=st(c);Ct(h,e,"default",{}),tt(c),W(()=>l=ne(c,l,{role:"group","aria-roledescription":"slide",class:Dt("min-w-0 shrink-0 grow-0 basis-full",s()==="horizontal"?"pl-4":"pt-4",n()),"data-embla-slide":"",...r})),N(t,c),yt()}function qn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]);_e(t,Rt({name:"arrow-right"},()=>o,{iconNode:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]],children:(i,s)=>{var n=ee(),a=rt(n);Ct(a,e,"default",{}),N(i,n)},$$slots:{default:!0}}))}var Un=Y('<!> <span class="sr-only">Next slide</span>',1);function Kn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]),r=q(o,["class","variant","size"]);$t(e,!1);const i=At(),s=()=>it(h,"$orientation",i),n=()=>it(d,"$canScrollNext",i);let a=H(e,"class",8,void 0),c=H(e,"variant",8,"outline"),l=H(e,"size",8,"icon");const{orientation:h,canScrollNext:d,scrollNext:p,handleKeyDown:$}=qt("<Carousel.Next/>");bt();var f=jt(()=>Dt("absolute h-8 w-8 touch-manipulation rounded-full",s()==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a())),m=jt(()=>!n());Vt(t,Rt({get variant(){return c()},get size(){return l()},get class(){return k(f)},get disabled(){return k(m)}},()=>r,{$$events:{click:p,keydown:$},children:(b,u)=>{var g=Un(),v=rt(g);qn(v,{class:"h-4 w-4"}),vt(2),N(b,g)},$$slots:{default:!0}})),yt()}function Xn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]);_e(t,Rt({name:"arrow-left"},()=>o,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(i,s)=>{var n=ee(),a=rt(n);Ct(a,e,"default",{}),N(i,n)},$$slots:{default:!0}}))}var Qn=Y('<!> <span class="sr-only">Previous slide</span>',1);function Jn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]),r=q(o,["class","variant","size"]);$t(e,!1);const i=At(),s=()=>it(h,"$orientation",i),n=()=>it(d,"$canScrollPrev",i);let a=H(e,"class",8,void 0),c=H(e,"variant",8,"outline"),l=H(e,"size",8,"icon");const{orientation:h,canScrollPrev:d,scrollPrev:p,handleKeyDown:$}=qt("<Carousel.Previous/>");bt();var f=jt(()=>Dt("absolute h-8 w-8 touch-manipulation rounded-full",s()==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a())),m=jt(()=>!n());Vt(t,Rt({get variant(){return c()},get size(){return l()},get class(){return k(f)},get disabled(){return k(m)}},()=>r,{$$events:{click:p,keydown:$},children:(b,u)=>{var g=Qn(),v=rt(g);Xn(v,{class:"h-4 w-4"}),vt(2),N(b,g)},$$slots:{default:!0}})),yt()}var Yn=Y("<div><!></div>");function Zn(t,e){const o=q(e,["children","$$slots","$$events","$$legacy"]),r=q(o,["opts","plugins","api","orientation","class"]);$t(e,!1);let i=H(e,"opts",24,()=>({})),s=H(e,"plugins",24,()=>[]),n=H(e,"api",12,void 0),a=H(e,"orientation",8,"horizontal"),c=H(e,"class",8,void 0);const l=lt(void 0),h=lt(a()),d=lt(!1),p=lt(!1),$=lt(i()),f=lt(s()),m=lt([]),b=lt(0);function u(){var S;(S=n())==null||S.scrollPrev()}function g(){var S;(S=n())==null||S.scrollNext()}function v(S,P){var w;(w=n())==null||w.scrollTo(S,P)}function _(S){S&&(d.set(S.canScrollPrev()),p.set(S.canScrollNext()),b.set(S.selectedScrollSnap()))}function I(S){S.key==="ArrowLeft"?(S.preventDefault(),u()):S.key==="ArrowRight"&&(S.preventDefault(),g())}jn({api:l,scrollPrev:u,scrollNext:g,orientation:h,canScrollNext:p,canScrollPrev:d,handleKeyDown:I,options:$,plugins:f,onInit:L,scrollSnaps:m,selectedIndex:b,scrollTo:v});function L(S){n(S.detail),l.set(n()),m.set(n().scrollSnapList())}Ze(()=>{var S;(S=n())==null||S.off("select",_)}),kt(()=>Ft(a()),()=>{h.set(a())}),kt(()=>Ft(s()),()=>{f.set(s())}),kt(()=>Ft(i()),()=>{$.set(i())}),kt(()=>Ft(n()),()=>{n()&&(_(n()),n().on("select",_),n().on("reInit",_))}),Ve(),bt();var x=Yn();let E;var T=st(x);Ct(T,e,"default",{}),tt(x),W(()=>E=ne(x,E,{class:Dt("relative",c()),role:"region","aria-roledescription":"carousel",...r})),Yt("mouseenter",x,function(S){be.call(this,e,S)}),Yt("mouseleave",x,function(S){be.call(this,e,S)}),N(t,x),yt()}const Wn="Home",to={title:`${Ke.fullName},`,description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",links:[{label:"GitHub",href:"https://github.com",icon:"i-carbon-logo-github"},{label:"LinkedIn",href:"https://linkedin.com",icon:"i-carbon-logo-linkedin"},{label:"Twitter",href:"https://twitter.com",icon:"i-carbon-logo-twitter"},{label:"Email",href:"mailto:riadh.adrani@pm.me",icon:"i-carbon-at"}]},eo=sn(),Et={title:Wn,hero:to,carousel:eo};var no=Y("<!> <!>",1),oo=Y('<a target="_blank"><!></a>'),so=Y('<img class="h-[150px] w-[150px]"> <a><!></a>',1),ro=Y("<!> <!> <!>",1),io=Y('<div class="flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-between"><div class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left"><!> <!> <div class="flex flex-row gap-1"></div></div> <div><!></div></div>'),co=Y("<!> <!>",1);function _o(t,e){$t(e,!1);const o=At(),r=()=>it(qe,"$mode",o);let i=Re();We(()=>{setInterval(()=>{k(i)&&k(i).scrollNext()},2e3)}),bt();var s=co(),n=rt(s);Qe(n,{get title(){return Et.title}});var a=at(n,2);Je(a,{className:"flex flex-col justify-center flex-1",children:(c,l)=>{var h=io(),d=st(h),p=st(d);Ye(p,{children:(u,g)=>{vt();var v=Ot();W(()=>zt(v,Et.hero.title)),N(u,v)},$$slots:{default:!0}});var $=at(p,2);on($,{children:(u,g)=>{vt();var v=Ot();W(()=>zt(v,Et.hero.description)),N(u,v)},$$slots:{default:!0}});var f=at($,2);he(f,5,()=>Et.hero.links,ve,(u,g)=>{var v=oo(),_=st(v);tn(_,{children:(I,L)=>{var x=no(),E=rt(x);en(E,{children:(S,P)=>{Vt(S,{variant:"outline",size:"icon",children:(w,F)=>{Ge(w,{get icon(){return k(g).icon},className:"text-lg"})},$$slots:{default:!0}})},$$slots:{default:!0}});var T=at(E,2);nn(T,{side:"bottom",children:(S,P)=>{vt();var w=Ot();W(()=>zt(w,k(g).label)),N(S,w)},$$slots:{default:!0}}),N(I,x)},$$slots:{default:!0}}),tt(v),W(()=>Bt(v,"href",k(g).href)),N(u,v)}),tt(f),tt(d);var m=at(d,2),b=st(m);Zn(b,{get api(){return k(i)},set api(u){He(i,u)},class:"w-[200px] md:ml-14",opts:{loop:!0},children:(u,g)=>{var v=ro(),_=rt(v);Hn(_,{children:(x,E)=>{var T=ee(),S=rt(T);he(S,1,()=>Et.carousel,ve,(P,w)=>{Gn(P,{class:"flex flex-col items-center justify-center gap-4",children:(F,U)=>{var B=so(),K=rt(B),R=at(K,2);W(()=>Bt(R,"href",Xe(`/skills/${k(w).slug}`)));var X=st(R);Vt(X,{variant:"ghost",children:(Q,pt)=>{vt();var j=Ot();W(()=>zt(j,k(w).name)),N(Q,j)},$$slots:{default:!0}}),tt(R),W(()=>{Bt(K,"src",r()==="dark"?k(w).logo.dark:k(w).logo.light),Bt(K,"alt",k(w).name)}),N(F,B)},$$slots:{default:!0}})}),N(x,T)},$$slots:{default:!0}});var I=at(_,2);Kn(I,{});var L=at(I,2);Jn(L,{}),N(u,v)},$$slots:{default:!0},$$legacy:!0}),tt(m),tt(h),N(c,h)},$$slots:{default:!0}}),N(t,s),yt()}export{_o as component};
