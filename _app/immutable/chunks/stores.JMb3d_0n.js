import{aw as ce,h as de,m as A,Y as D,V as me,i as ve,ax as ee,W as he,X as Y,Z as H,o as C,ay as N,R as te,j as ne,T as ge,a1 as pe,O as G,az as R,aA as P,aB as K,aC as _e,aD as we,aE as ye,l as Ee,aF as ae,aG as be,aH as Te,au as ke,aI as Se,ah as Ae,K as Q,aJ as Ie,aK as Ce,t as Me}from"./utils.jAVDF0d8.js";import{w as E,g as re,d as se}from"./paths.Cf99DwGQ.js";import{w as Ne,e as Le}from"./base.BP9G2q4t.js";import{a as xe,b as Ve}from"./disclose-version.Cfp-rwoP.js";import"./legacy.Ccq7PQRh.js";import{p as W}from"./index-client.BSQKl7cS.js";function rt(a,e){return e}function De(a,e,t,n){for(var r=[],u=e.length,s=0;s<u;s++)_e(e[s].e,r,!0);var l=u>0&&r.length===0&&t!==null;if(l){var f=t.parentNode;we(f),f.append(t),n.clear(),k(a,e[0].prev,e[u-1].next)}ye(r,()=>{for(var m=0;m<u;m++){var c=e[m];l||(n.delete(c.k),k(a,c.prev,c.next)),Ee(c.e,!l)}})}function st(a,e,t,n,r,u=null){var s=a,l={flags:e,items:new Map,first:null},f=(e&ae)!==0;if(f){var m=a;s=A?D(be(m)):m.appendChild(ce())}A&&me();var c=null,g=!1;de(()=>{var i=t(),h=ve(i)?i:i==null?[]:ee(i),v=h.length;if(g&&v===0)return;g=v===0;let b=!1;if(A){var _=s.data===he;_!==(v===0)&&(s=Y(),D(s),H(!1),b=!0)}if(A){for(var w=null,y,p=0;p<v;p++){if(C.nodeType===8&&C.data===Te){s=C,b=!0,H(!1);break}var o=h[p],d=n(o,p);y=ie(C,l,w,null,o,d,p,r,e),l.items.set(d,y),w=y}v>0&&D(Y())}if(!A){var L=ke;He(h,l,s,r,e,(L.f&N)!==0,n)}u!==null&&(v===0?c?te(c):c=ne(()=>u(s)):c!==null&&ge(c,()=>{c=null})),b&&H(!0),t()}),A&&(s=C)}function He(a,e,t,n,r,u,s){var q,z,B,U;var l=(r&Se)!==0,f=(r&(R|K))!==0,m=a.length,c=e.items,g=e.first,i=g,h,v=null,b,_=[],w=[],y,p,o,d;if(l)for(d=0;d<m;d+=1)y=a[d],p=s(y,d),o=c.get(p),o!==void 0&&((q=o.a)==null||q.measure(),(b??(b=new Set)).add(o));for(d=0;d<m;d+=1){if(y=a[d],p=s(y,d),o=c.get(p),o===void 0){var L=i?i.e.nodes_start:t;v=ie(L,e,v,v===null?e.first:v.next,y,p,d,n,r),c.set(p,v),_=[],w=[],i=v.next;continue}if(f&&Re(o,y,d,r),o.e.f&N&&(te(o.e),l&&((z=o.a)==null||z.unfix(),(b??(b=new Set)).delete(o))),o!==i){if(h!==void 0&&h.has(o)){if(_.length<w.length){var M=w[0],T;v=M.prev;var O=_[0],x=_[_.length-1];for(T=0;T<_.length;T+=1)X(_[T],M,t);for(T=0;T<w.length;T+=1)h.delete(w[T]);k(e,O.prev,x.next),k(e,v,O),k(e,x,M),i=M,v=x,d-=1,_=[],w=[]}else h.delete(o),X(o,i,t),k(e,o.prev,o.next),k(e,o,v===null?e.first:v.next),k(e,v,o),v=o;continue}for(_=[],w=[];i!==null&&i.k!==p;)(u||!(i.e.f&N))&&(h??(h=new Set)).add(i),w.push(i),i=i.next;if(i===null)continue;o=i}_.push(o),v=o,i=o.next}if(i!==null||h!==void 0){for(var I=h===void 0?[]:ee(h);i!==null;)(u||!(i.e.f&N))&&I.push(i),i=i.next;var V=I.length;if(V>0){var fe=r&ae&&m===0?t:null;if(l){for(d=0;d<V;d+=1)(B=I[d].a)==null||B.measure();for(d=0;d<V;d+=1)(U=I[d].a)==null||U.fix()}De(e,I,fe,c)}}l&&pe(()=>{var F;if(b!==void 0)for(o of b)(F=o.a)==null||F.apply()}),G.first=e.first&&e.first.e,G.last=v&&v.e}function Re(a,e,t,n){n&R&&P(a.v,e),n&K?P(a.i,t):a.i=t}function ie(a,e,t,n,r,u,s,l,f){var m=(f&R)!==0,c=(f&Ie)===0,g=m?c?Ae(r):Q(r):r,i=f&K?Q(s):s,h={i,v:g,k:u,a:null,e:null,prev:t,next:n};try{return h.e=ne(()=>l(a,g,i),A),h.e.prev=t&&t.e,h.e.next=n&&n.e,t===null?e.first=h:(t.next=h,t.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{}}function X(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,r=e?e.e.nodes_start:t,u=a.e.nodes_start;u!==n;){var s=Ce(u);r.before(u),u=s}}function k(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function it(a){const e={};return Object.keys(a).forEach(t=>{const n=t,r=a[n];e[n]=Ne(E(r))}),e}function ot(a,e){const t={};return e.forEach(n=>{t[n]={[`data-${a}-${n}`]:""}}),n=>t[n]}function ut(a){return a?{"aria-disabled":"true","data-disabled":""}:{"aria-disabled":void 0,"data-disabled":void 0}}function lt(a){const e={};for(const t in a){const n=a[t];n!==void 0&&(e[t]=n)}return e}function ft(a){return function(e,t){if(t===void 0)return;const n=a[e];n&&n.set(t)}}var Ke=Ve("<i></i>");function ct(a,e){let t=W(e,"icon",8),n=W(e,"className",8,"");var r=Ke();Me(()=>Le(r,`flex-shrink-0 ${n()} ${t()}`)),xe(a,r)}let J,Z;function oe(a){if(typeof document>"u")return;clearTimeout(J),clearTimeout(Z);const e=document.createElement("style"),t=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(t);const n=()=>document.head.appendChild(e),r=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){n(),a(),window.getComputedStyle(e).opacity,r();return}if(typeof window.requestAnimationFrame<"u"){n(),a(),window.requestAnimationFrame(r);return}n(),J=window.setTimeout(()=>{a(),Z=window.setTimeout(r,120)},120)}function $(a){return a.filter(e=>e.length>0)}const ue={getItem:a=>null,setItem:(a,e)=>{}},S=typeof document<"u",Oe=["dark","light","system"],qe=E("mode-watcher-mode"),ze=E("mode-watcher-theme"),Be=Qe(),Ue=Xe(),Fe=E(void 0),Ye=We(),le=E(!0),Ge=E([]),Pe=E([]),dt=Je(),mt=Ze();function Qe(){const a="system",e=S?localStorage:ue,t=e.getItem(r());let n=j(t)?t:a;function r(){return re(qe)}const{subscribe:u,set:s}=E(n,()=>{if(!S)return;const f=m=>{if(m.key!==r())return;const c=m.newValue;j(c)?s(n=c):s(n=a)};return addEventListener("storage",f),()=>removeEventListener("storage",f)});function l(f){s(n=f),e.setItem(r(),n)}return{subscribe:u,set:l}}function We(){const a=S?localStorage:ue,e=a.getItem(n());let t=e??"";function n(){return re(ze)}const{subscribe:r,set:u}=E(t,()=>{if(!S)return;const l=f=>{if(f.key!==n())return;const m=f.newValue;u(m===null?t="":t=m)};return addEventListener("storage",l),()=>removeEventListener("storage",l)});function s(l){u(t=l),a.setItem(n(),t)}return{subscribe:r,set:s}}function Xe(){let e=!0;const{subscribe:t,set:n}=E(void 0,()=>{if(!S)return;const s=f=>{e&&n(f.matches?"light":"dark")},l=window.matchMedia("(prefers-color-scheme: light)");return l.addEventListener("change",s),()=>l.removeEventListener("change",s)});function r(){if(!S)return;const s=window.matchMedia("(prefers-color-scheme: light)");n(s.matches?"light":"dark")}function u(s){e=s}return{subscribe:t,query:r,tracking:u}}function Je(){const{subscribe:a}=se([Be,Ue,Fe,le,Ge,Pe],([e,t,n,r,u,s])=>{if(!S)return;const l=e==="system"?t:e,f=$(u),m=$(s);function c(){const g=document.documentElement,i=document.querySelector('meta[name="theme-color"]');l==="light"?(f.length&&g.classList.remove(...f),m.length&&g.classList.add(...m),g.style.colorScheme="light",i&&n&&i.setAttribute("content",n.light)):(m.length&&g.classList.remove(...m),f.length&&g.classList.add(...f),g.style.colorScheme="dark",i&&n&&i.setAttribute("content",n.dark))}return r?oe(c):c(),l});return{subscribe:a}}function Ze(){const{subscribe:a}=se([Ye,le],([e,t])=>{if(!S)return;function n(){document.documentElement.setAttribute("data-theme",e)}return t?oe(n):n(),e});return{subscribe:a}}function j(a){return typeof a!="string"?!1:Oe.includes(a)}export{ct as I,Ye as a,mt as b,ot as c,dt as d,st as e,j as f,ft as g,ze as h,rt as i,le as j,Fe as k,Ge as l,qe as m,Pe as n,ut as o,lt as r,Ue as s,it as t,Be as u};