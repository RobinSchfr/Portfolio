import{E as V}from"../chunks/education.CfqU26Yd.js";import{s as W,e as X,t as u,a as s,b as D,c as P,d as Z}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as tt,a as et,g as b,f as M,t as y,d as j,c as q,n as v,s as i,r as w}from"../chunks/utils.jAVDF0d8.js";import{i as B}from"../chunks/index-client.BSQKl7cS.js";import{e as C,i as at,d as rt}from"../chunks/stores.BTjOYk1u.js";import{B as ot}from"../chunks/base-page.COs237T1.js";import{E as st}from"../chunks/empty-result.BDFtXy4r.js";import{F as it,M as dt,E as lt}from"../chunks/markdown.CFZq2xM7.js";import{S as nt}from"../chunks/screenshot-card.B4SDF4V3.js";import{B as mt}from"../chunks/index.DI1UOb72.js";import{S as A}from"../chunks/separator.CgL_m19b.js";import{H as ct}from"../chunks/h1.hikd9UnW.js";import{M as g,A as ft}from"../chunks/assets.DnT2XZAe.js";import{g as G,d as ut}from"../chunks/base.6jw1uNw_.js";import"../chunks/legacy.Ccq7PQRh.js";function vt({params:_}){if(_.slug)return{item:V.items.find(S=>S.slug===_.slug)}}const zt=Object.freeze(Object.defineProperty({__proto__:null,load:vt},Symbol.toStringTag,{value:"Module"}));var gt=D('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),_t=D('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),pt=D('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Ht(_,t){tt(t,!0);const S=W(),I=()=>Z(rt,"$mode",S);let J=j(()=>{var e,a;return`${((a=(e=t.data)==null?void 0:e.item)==null?void 0:a.name)??"Not Found"} - Skills`}),K=j(()=>{var e,a,d;return(I()=="dark"?(a=(e=t.data)==null?void 0:e.item)==null?void 0:a.logo.dark:(d=t.data.item)==null?void 0:d.logo.light)??ft.Unknown.light}),L=j(()=>{var e,a,d,p;return`${G((e=t.data.item)==null?void 0:e.period.from)} - ${G((a=t.data.item)==null?void 0:a.period.to)} · ${ut(((d=t.data.item)==null?void 0:d.period.from)??new Date,(p=t.data.item)==null?void 0:p.period.to)}`});ot(_,{get title(){return b(J)},children:(e,a)=>{var d=X(),p=M(d);B(p,()=>!t.data.item,k=>{st(k)},k=>{var F=pt(),z=M(F);it(z,{get img(){return b(K)},children:(l,E)=>{var n=gt(),c=q(n);ct(c,{children:(r,x)=>{v();var o=u();y(()=>P(o,t.data.item.degree)),s(r,o)},$$slots:{default:!0}});var m=i(c,2);g(m,{children:(r,x)=>{v();var o=u();y(()=>P(o,`${t.data.item.organization??""} · ${t.data.item.location??""}`)),s(r,o)},$$slots:{default:!0}});var f=i(m,2);g(f,{children:(r,x)=>{g(r,{children:(o,R)=>{v();var $=u();y(()=>P($,b(L))),s(o,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=i(f,2);A(h,{});var U=i(h,2);C(U,20,()=>t.data.item.subjects,r=>r,(r,x)=>{mt(r,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(o,R)=>{g(o,{children:($,ht)=>{v();var Y=u();y(()=>P(Y,x)),s($,Y)},$$slots:{default:!0}})},$$slots:{default:!0}})}),w(U),w(n),s(l,n)},$$slots:{default:!0}});var H=i(z,2);A(H,{});var O=i(H,2);B(O,()=>t.data.item.description.trim(),l=>{dt(l,{get content(){return t.data.item.description}})},l=>{lt(l)});var N=i(O,2);A(N,{});var T=i(N,2),Q=q(T);B(Q,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,l=>{var E=_t(),n=M(E);g(n,{children:(m,f)=>{v();var h=u("Screenshots");s(m,h)},$$slots:{default:!0}});var c=i(n,2);C(c,21,()=>t.data.item.screenshots,at,(m,f)=>{nt(m,{get item(){return b(f)}})}),w(c),s(l,E)}),w(T),s(k,F)}),s(e,d)},$$slots:{default:!0}}),et()}export{Ht as component,zt as universal};
