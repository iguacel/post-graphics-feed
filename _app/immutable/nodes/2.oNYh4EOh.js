import{s as A,n as m,x as J,o as re}from"../chunks/scheduler.xiAKmmds.js";import{S as L,i as j,e as g,c as _,a as b,d as u,o as f,g as k,t as R,s as P,b as U,f as D,h as d,j as O,H as ie,z as oe,u as M,v as C,w as S,n as T,l as E,x as q,k as V,A as le,B as z,q as ne,m as se}from"../chunks/index.CC1OW5s9.js";import{s as K}from"../chunks/config.CuXtGfvR.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Q(n){let e,a;return{c(){e=g("img"),this.h()},l(t){e=_(t,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,class:!0}),this.h()},h(){f(e,"loading","lazy"),f(e,"decoding","auto"),J(e.src,a=n[0])||f(e,"src",a),f(e,"alt",n[1]),f(e,"class","svelte-tt8n0y")},m(t,l){k(t,e,l)},p(t,l){l&1&&!J(e.src,a=t[0])&&f(e,"src",a),l&2&&f(e,"alt",t[1])},d(t){t&&u(e)}}}function ce(n){let e,a=n[0]&&Q(n);return{c(){e=g("div"),a&&a.c(),this.h()},l(t){e=_(t,"DIV",{class:!0});var l=b(e);a&&a.l(l),l.forEach(u),this.h()},h(){f(e,"class","img svelte-tt8n0y")},m(t,l){k(t,e,l),a&&a.m(e,null)},p(t,[l]){t[0]?a?a.p(t,l):(a=Q(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:m,o:m,d(t){t&&u(e),a&&a.d()}}}function fe(n,e,a){let{src:t}=e,{alt:l}=e;return n.$$set=i=>{"src"in i&&a(0,t=i.src),"alt"in i&&a(1,l=i.alt)},[t,l]}class ue extends L{constructor(e){super(),j(this,e,fe,ce,A,{src:0,alt:1})}}const X="https://www.washingtonpost.com/people/";function Y(n){const e=new Date(n),a={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("en-US",a)}function Z(n){if(!n||n.length===0)return"Unknown";if(n.length===1){const e=n[0];return`<a href="${X}${e.slug}" aria-label="Link to author profile">${e.name}</a>`}return n.map(e=>`<a href="${X}${e.slug}" aria-label="Link to author profile">${e.name}</a>`).join(", ")}function ee(n){let e,a,t,l=Z(n[0].credits)+"";return{c(){e=g("p"),a=R("By "),t=new ie(!1),this.h()},l(i){e=_(i,"P",{class:!0});var s=b(e);a=U(s,"By "),t=oe(s,!1),s.forEach(u),this.h()},h(){t.a=null,f(e,"class","authors svelte-1jb463o")},m(i,s){k(i,e,s),d(e,a),t.m(l,e)},p(i,s){s&1&&l!==(l=Z(i[0].credits)+"")&&t.p(l)},d(i){i&&u(e)}}}function he(n){let e,a,t,l=Y(n[0].date)+"",i,s,o,r=n[0].headline+"",c,h,p,w=n[0].description+"",H,I,B,v=n[0].credits&&n[0].credits.length>0&&ee(n);return{c(){e=g("div"),a=g("a"),t=g("p"),i=R(l),s=P(),o=g("h3"),c=R(r),h=P(),p=g("p"),H=R(w),B=P(),v&&v.c(),this.h()},l($){e=_($,"DIV",{class:!0});var y=b(e);a=_(y,"A",{href:!0,"aria-label":!0});var N=b(a);t=_(N,"P",{class:!0});var G=b(t);i=U(G,l),G.forEach(u),s=D(N),o=_(N,"H3",{class:!0});var W=b(o);c=U(W,r),W.forEach(u),h=D(N),p=_(N,"P",{class:!0});var x=b(p);H=U(x,w),x.forEach(u),N.forEach(u),B=D(y),v&&v.l(y),y.forEach(u),this.h()},h(){f(t,"class","date svelte-1jb463o"),f(o,"class","headline svelte-1jb463o"),f(p,"class","description svelte-1jb463o"),f(a,"href",I=n[0].url),f(a,"aria-label","Link to article"),f(e,"class","article-data svelte-1jb463o")},m($,y){k($,e,y),d(e,a),d(a,t),d(t,i),d(a,s),d(a,o),d(o,c),d(a,h),d(a,p),d(p,H),d(e,B),v&&v.m(e,null)},p($,[y]){y&1&&l!==(l=Y($[0].date)+"")&&O(i,l),y&1&&r!==(r=$[0].headline+"")&&O(c,r),y&1&&w!==(w=$[0].description+"")&&O(H,w),y&1&&I!==(I=$[0].url)&&f(a,"href",I),$[0].credits&&$[0].credits.length>0?v?v.p($,y):(v=ee($),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:m,o:m,d($){$&&u(e),v&&v.d()}}}function de(n,e,a){let{data:t}=e;return n.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class me extends L{constructor(e){super(),j(this,e,de,he,A,{data:0})}}function pe(n){var r,c;let e,a,t,l,i,s,o;return t=new ue({props:{src:(r=n[0])==null?void 0:r.img,alt:(c=n[0])==null?void 0:c.description}}),s=new me({props:{data:n[0]}}),{c(){e=g("div"),a=g("a"),M(t.$$.fragment),i=P(),M(s.$$.fragment),this.h()},l(h){e=_(h,"DIV",{class:!0});var p=b(e);a=_(p,"A",{href:!0,"aria-label":!0});var w=b(a);C(t.$$.fragment,w),w.forEach(u),i=D(p),C(s.$$.fragment,p),p.forEach(u),this.h()},h(){f(a,"href",l=n[0].url),f(a,"aria-label","Link to article"),f(e,"class","content svelte-142aa19")},m(h,p){k(h,e,p),d(e,a),S(t,a,null),d(e,i),S(s,e,null),o=!0},p(h,[p]){var I,B;const w={};p&1&&(w.src=(I=h[0])==null?void 0:I.img),p&1&&(w.alt=(B=h[0])==null?void 0:B.description),t.$set(w),(!o||p&1&&l!==(l=h[0].url))&&f(a,"href",l);const H={};p&1&&(H.data=h[0]),s.$set(H)},i(h){o||(T(t.$$.fragment,h),T(s.$$.fragment,h),o=!0)},o(h){E(t.$$.fragment,h),E(s.$$.fragment,h),o=!1},d(h){h&&u(e),q(t),q(s)}}}function ge(n,e,a){let{data:t}=e;return n.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class _e extends L{constructor(e){super(),j(this,e,ge,pe,A,{data:0})}}function ve(n,e,a){const t=n.slice();return t[0]=e[a],t}function $e(n){let e,a='<a class="svelte-6ulcf6"></a> <div class="article-data svelte-6ulcf6"><h1 class="h1-ske svelte-6ulcf6"></h1> <p class="description svelte-6ulcf6"></p> <p class="date svelte-6ulcf6"></p> <p class="authors svelte-6ulcf6"></p></div> ';return{c(){e=g("div"),e.innerHTML=a,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-17m7g5q"&&(e.innerHTML=a),this.h()},h(){f(e,"class","content svelte-6ulcf6")},m(t,l){k(t,e,l)},p:m,d(t){t&&u(e)}}}function be(n){let e,a=F(Array.from({length:ke},we)),t=[];for(let l=0;l<a.length;l+=1)t[l]=$e(ve(n,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=V()},l(l){for(let i=0;i<t.length;i+=1)t[i].l(l);e=V()},m(l,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,i);k(l,e,i)},p:m,i:m,o:m,d(l){l&&u(e),le(t,l)}}}const ke=15,we=(n,e)=>e;class ye extends L{constructor(e){super(),j(this,e,null,be,A,{})}}function te(n,e,a){const t=n.slice();return t[2]=e[a],t}function Te(n){let e,a="No articles available";return{c(){e=g("p"),e.textContent=a},l(t){e=_(t,"P",{"data-svelte-h":!0}),z(e)!=="svelte-19vtljp"&&(e.textContent=a)},m(t,l){k(t,e,l)},p:m,i:m,o:m,d(t){t&&u(e)}}}function Ee(n){let e,a,t=F(n[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=ae(te(n,t,s));const i=s=>E(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=V()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=V()},m(s,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(s,o);k(s,e,o),a=!0},p(s,o){if(o&1){t=F(s[0]);let r;for(r=0;r<t.length;r+=1){const c=te(s,t,r);l[r]?(l[r].p(c,o),T(l[r],1)):(l[r]=ae(c),l[r].c(),T(l[r],1),l[r].m(e.parentNode,e))}for(ne(),r=t.length;r<l.length;r+=1)i(r);se()}},i(s){if(!a){for(let o=0;o<t.length;o+=1)T(l[o]);a=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)E(l[o]);a=!1},d(s){s&&u(e),le(l,s)}}}function Ae(n){let e,a;return e=new ye({}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){S(e,t,l),a=!0},p:m,i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function ae(n){let e,a;return e=new _e({props:{data:n[2]}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){S(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.data=t[2]),e.$set(i)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Le(n){let e,a,t,l;const i=[Ae,Ee,Te],s=[];function o(r,c){return r[1]?0:r[0]&&r[0].length>0?1:2}return a=o(n),t=s[a]=i[a](n),{c(){e=g("section"),t.c(),this.h()},l(r){e=_(r,"SECTION",{class:!0});var c=b(e);t.l(c),c.forEach(u),this.h()},h(){f(e,"class","svelte-1jqt6dc")},m(r,c){k(r,e,c),s[a].m(e,null),l=!0},p(r,[c]){let h=a;a=o(r),a===h?s[a].p(r,c):(ne(),E(s[h],1,1,()=>{s[h]=null}),se(),t=s[a],t?t.p(r,c):(t=s[a]=i[a](r),t.c()),T(t,1),t.m(e,null))},i(r){l||(T(t),l=!0)},o(r){E(t),l=!1},d(r){r&&u(e),s[a].d()}}}function je(n,e,a){let t,l=!0;return re(async()=>{try{a(0,t=await fetch("https://raw.githubusercontent.com/iguacel/post-graphics-feed/main/api/wapo_graphics_feed.json").then(i=>i.json()))}catch(i){console.error("Failed to fetch articles:",i)}finally{a(1,l=!1)}}),[t,l]}class He extends L{constructor(e){super(),j(this,e,je,Le,A,{})}}function Ie(n){let e,a=`<h2 class="svelte-1t1vko1">About this project</h2> <p>There is currently no tag or page where all the articles published by The Washington Post&#39;s
		graphics team can be found. To address this, I have manually compiled an array of names of all
		the authors on the team and used the Post&#39;s API to fetch data about their articles, including
		the headline, subtitle, authors, date, image, and URL.</p> <p>The data is updated daily thanks to a GitHub Actions workflow. To avoid overloading the Post&#39;s
		API, only the latest five articles from each author are requested. The code that fetches and
		parses the data can be found in the api folder of the <a href="https://github.com/LuisSevillano/post-graphics-feed">repository</a>.</p> <p>This project is open source and aims to allow everyone to follow the incredible work published
		by this outstanding team. If you work here and are not on the <a href="https://github.com/LuisSevillano/post-graphics-feed/blob/main/api/authors.json">list</a> or want to add someone, please open a pull request in the repository.</p>`;return{c(){e=g("footer"),e.innerHTML=a,this.h()},l(t){e=_(t,"FOOTER",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-160lv9i"&&(e.innerHTML=a),this.h()},h(){f(e,"class","svelte-1t1vko1")},m(t,l){k(t,e,l)},p:m,i:m,o:m,d(t){t&&u(e)}}}class Pe extends L{constructor(e){super(),j(this,e,null,Ie,A,{})}}function De(n){let e,a,t,l,i,s="A <s>curated</s> list of recent articles published by The Washington Post&#39;s graphics team.";return{c(){e=g("header"),a=g("h1"),t=R(K),l=P(),i=g("p"),i.innerHTML=s,this.h()},l(o){e=_(o,"HEADER",{class:!0});var r=b(e);a=_(r,"H1",{class:!0});var c=b(a);t=U(c,K),c.forEach(u),l=D(r),i=_(r,"P",{class:!0,"data-svelte-h":!0}),z(i)!=="svelte-1umef9v"&&(i.innerHTML=s),r.forEach(u),this.h()},h(){f(a,"class","svelte-aatllb"),f(i,"class","svelte-aatllb"),f(e,"class","svelte-aatllb")},m(o,r){k(o,e,r),d(e,a),d(a,t),d(e,l),d(e,i)},p:m,i:m,o:m,d(o){o&&u(e)}}}class Me extends L{constructor(e){super(),j(this,e,null,De,A,{})}}function Ce(n){let e,a,t,l,i,s,o;return a=new Me({}),l=new He({}),s=new Pe({}),{c(){e=g("main"),M(a.$$.fragment),t=P(),M(l.$$.fragment),i=P(),M(s.$$.fragment),this.h()},l(r){e=_(r,"MAIN",{class:!0});var c=b(e);C(a.$$.fragment,c),t=D(c),C(l.$$.fragment,c),i=D(c),C(s.$$.fragment,c),c.forEach(u),this.h()},h(){f(e,"class","svelte-52necz")},m(r,c){k(r,e,c),S(a,e,null),d(e,t),S(l,e,null),d(e,i),S(s,e,null),o=!0},p:m,i(r){o||(T(a.$$.fragment,r),T(l.$$.fragment,r),T(s.$$.fragment,r),o=!0)},o(r){E(a.$$.fragment,r),E(l.$$.fragment,r),E(s.$$.fragment,r),o=!1},d(r){r&&u(e),q(a),q(l),q(s)}}}class Ne extends L{constructor(e){super(),j(this,e,null,Ce,A,{})}}export{Ne as component};