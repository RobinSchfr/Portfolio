import{s as ee,e as oe,a as r,b as d,t as E,c as A,d as re}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as ae,a as se,f as h,g as o,d as U,b as te,c as y,s as c,n as D,t as x,r as u,e as le}from"../chunks/utils.jAVDF0d8.js";import{i as ne,a as ie}from"../chunks/index-client.BSQKl7cS.js";import{e as z,I as ce,d as de}from"../chunks/stores.BTjOYk1u.js";import{s as B,h as me}from"../chunks/base.6jw1uNw_.js";import{E as pe}from"../chunks/empty-result.BDFtXy4r.js";import{S as fe,F as ge,C as ue,a as $e,N as ve}from"../chunks/fancy-card.BI8zHELc.js";import{A as _e,a as he,b as xe}from"../chunks/avatar-fallback.CfB4Aqc0.js";import"../chunks/legacy.Ccq7PQRh.js";import{S as ke}from"../chunks/separator.CgL_m19b.js";import{R as Pe,T as be,a as we}from"../chunks/index.DzrmwCXh.js";import{L as G}from"../chunks/large.Cr8uQDKU.js";import{A as Ce}from"../chunks/assets.DnT2XZAe.js";import{E as Le}from"../chunks/education.CfqU26Yd.js";import{E as Se}from"../chunks/experience.DkiZHCKU.js";import{P as Ee}from"../chunks/projects.Cn9257e0.js";import{S as Ae}from"../chunks/skills.CcdS91DS.js";var ye=d("<img>"),De=d("<!> <!>",1),je=d("<!> <!>",1),Re=d("<!> <!>",1),Te=d('<div class="flex flex-col gap-8"><div class="flex flex-row items-center gap-6"><div class="flex flex-row gap-2"><!> <!></div> <!></div> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></div>'),Fe=d('<div class="mt-8 flex flex-col gap-12"></div>');function ao(H,J){ae(J,!0);const K=ee(),$=()=>re(de,"$mode",K);let j=le("");const Q=s=>{const k=Ae.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),m=Ee.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),v=Se.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),i=Le.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),a=[];return k.length&&a.push({icon:"i-carbon-assembly-cluster",name:"Skills",items:k.map(e=>({name:e.name,logo:$()==="dark"?e.logo.dark:e.logo.light,link:`/skills/${e.slug}`,color:e.color}))}),m.length&&a.push({icon:"i-carbon-cube",name:"Projects",items:m.map(e=>({name:e.name,logo:$()==="dark"?e.logo.dark:e.logo.light,link:`/projects/${e.slug}`,color:e.color}))}),v.length&&a.push({icon:"i-carbon-development",name:"Experience",items:v.map(e=>({name:e.name,logo:$()==="dark"?e.logo.dark:e.logo.light,link:`/experience/${e.slug}`,color:e.color}))}),i.length&&a.push({icon:"i-carbon-education",name:"Education",items:i.map(e=>({name:e.degree,logo:$()==="dark"?e.logo.dark:e.logo.light,link:`/education/${e.slug}`,color:ve.gray}))}),a};let R=U(()=>Q(o(j)));fe(H,{title:"Search",onSearch:s=>te(j,ie(s)),children:(s,k)=>{var m=oe(),v=h(m);ne(v,()=>o(R).length===0,i=>{pe(i)},i=>{var a=Fe();z(a,21,()=>o(R),e=>e.name,(e,P)=>{var b=Te(),w=y(b),C=y(w),T=y(C);G(T,{children:(n,t)=>{ce(n,{get icon(){return o(P).icon}})},$$slots:{default:!0}});var V=c(T,2);G(V,{children:(n,t)=>{D();var _=E();x(()=>A(_,o(P).name)),r(n,_)},$$slots:{default:!0}}),u(C);var W=c(C,2);ke(W,{class:"flex-1"}),u(w);var F=c(w,2);z(F,21,()=>o(P).items,n=>n.link,(n,t)=>{var _=U(()=>me(o(t).link));ge(n,{get color(){return o(t).color},get href(){return o(_)},children:(X,Me)=>{ue(X,{class:"flex flex-row items-center gap-4",children:(Y,Ne)=>{var I=Re(),M=h(I);_e(M,{children:(L,q)=>{var p=De(),f=h(p);he(f,{children:(g,N)=>{var l=ye();x(()=>{B(l,"src",Ce.Unknown.light),B(l,"alt",o(t).name)}),r(g,l)},$$slots:{default:!0}});var S=c(f,2);xe(S,{get src(){return o(t).logo}}),r(L,p)},$$slots:{default:!0}});var Z=c(M,2);Pe(Z,{openDelay:300,children:(L,q)=>{var p=je(),f=h(p);be(f,{children:(g,N)=>{$e(g,{class:"line-clamp-2 truncate text-ellipsis text-left",children:(l,Oe)=>{D();var O=E();x(()=>A(O,o(t).name)),r(l,O)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=c(f,2);we(S,{children:(g,N)=>{D();var l=E();x(()=>A(l,o(t).name)),r(g,l)},$$slots:{default:!0}}),r(L,p)},$$slots:{default:!0}}),r(Y,I)},$$slots:{default:!0}})},$$slots:{default:!0}})}),u(F),u(b),r(e,b)}),u(a),r(i,a)}),r(s,m)},$$slots:{default:!0}}),se()}export{ao as component};
