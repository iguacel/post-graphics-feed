import{s as A,n as m,x as O,o as te}from"../chunks/scheduler.xiAKmmds.js";import{S as T,i as j,e as p,c as g,a as w,d as h,o as f,g as k,t as S,s as M,b as B,f as q,h as $,j as x,H as ae,z as ne,u as H,v as I,w as P,n as y,l as L,x as D,k as N,A as Y,B as R,q as Z,m as ee}from"../chunks/index.CC1OW5s9.js";import{s as F}from"../chunks/config.CuXtGfvR.js";function U(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function G(l){let e,a;return{c(){e=p("img"),this.h()},l(t){e=g(t,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,class:!0}),this.h()},h(){f(e,"loading","lazy"),f(e,"decoding","auto"),O(e.src,a=l[0])||f(e,"src",a),f(e,"alt",l[1]),f(e,"class","svelte-tt8n0y")},m(t,n){k(t,e,n)},p(t,n){n&1&&!O(e.src,a=t[0])&&f(e,"src",a),n&2&&f(e,"alt",t[1])},d(t){t&&h(e)}}}function le(l){let e,a=l[0]&&G(l);return{c(){e=p("div"),a&&a.c(),this.h()},l(t){e=g(t,"DIV",{class:!0});var n=w(e);a&&a.l(n),n.forEach(h),this.h()},h(){f(e,"class","img svelte-tt8n0y")},m(t,n){k(t,e,n),a&&a.m(e,null)},p(t,[n]){t[0]?a?a.p(t,n):(a=G(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:m,o:m,d(t){t&&h(e),a&&a.d()}}}function re(l,e,a){let{src:t}=e,{alt:n}=e;return l.$$set=i=>{"src"in i&&a(0,t=i.src),"alt"in i&&a(1,n=i.alt)},[t,n]}class se extends T{constructor(e){super(),j(this,e,re,le,A,{src:0,alt:1})}}const C="https://www.washingtonpost.com/people/";function W(l){const e=new Date(l),a={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("en-US",a)}function J(l){if(!l||l.length===0)return"Unknown";if(l.length===1){const t=l[0];return`<a class="author" href="${C}${t.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${t.name}</a>`}if(l.length===2)return l.map(t=>`<a class="author" href="${C}${t.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${t.name}</a>`).join(" and ");const e=l.slice(0,-1).map(t=>`<a class="author" href="${C}${t.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${t.name}</a>`).join(", "),a=l[l.length-1];return`${e} and <a class="author" href="${C}${a.slug}" aria-label="Link to author profile" target="_blank" rel="noopener noreferrer">${a.name}</a>`}function K(l){let e,a,t,n=J(l[0].credits)+"";return{c(){e=p("p"),a=S("By "),t=new ae(!1),this.h()},l(i){e=g(i,"P",{class:!0});var r=w(e);a=B(r,"By "),t=ne(r,!1),r.forEach(h),this.h()},h(){t.a=null,f(e,"class","authors svelte-10hjf")},m(i,r){k(i,e,r),$(e,a),t.m(n,e)},p(i,r){r&1&&n!==(n=J(i[0].credits)+"")&&t.p(n)},d(i){i&&h(e)}}}function ie(l){let e,a,t,n=W(l[0].date)+"",i,r,o,s=l[0].headline+"",c,u,v,d=l[0].credits&&l[0].credits.length>0&&K(l);return{c(){e=p("div"),a=p("a"),t=p("p"),i=S(n),r=M(),o=p("h3"),c=S(s),v=M(),d&&d.c(),this.h()},l(_){e=g(_,"DIV",{class:!0});var b=w(e);a=g(b,"A",{href:!0,"aria-label":!0,target:!0,rel:!0});var E=w(a);t=g(E,"P",{class:!0});var V=w(t);i=B(V,n),V.forEach(h),r=q(E),o=g(E,"H3",{class:!0});var z=w(o);c=B(z,s),z.forEach(h),E.forEach(h),v=q(b),d&&d.l(b),b.forEach(h),this.h()},h(){f(t,"class","date svelte-10hjf"),f(o,"class","headline svelte-10hjf"),f(a,"href",u=l[0].url),f(a,"aria-label","Link to article"),f(a,"target","_blank"),f(a,"rel","noopener noreferrer"),f(e,"class","article-data")},m(_,b){k(_,e,b),$(e,a),$(a,t),$(t,i),$(a,r),$(a,o),$(o,c),$(e,v),d&&d.m(e,null)},p(_,[b]){b&1&&n!==(n=W(_[0].date)+"")&&x(i,n),b&1&&s!==(s=_[0].headline+"")&&x(c,s),b&1&&u!==(u=_[0].url)&&f(a,"href",u),_[0].credits&&_[0].credits.length>0?d?d.p(_,b):(d=K(_),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:m,o:m,d(_){_&&h(e),d&&d.d()}}}function oe(l,e,a){let{data:t}=e;return l.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class ce extends T{constructor(e){super(),j(this,e,oe,ie,A,{data:0})}}function fe(l){var s,c;let e,a,t,n,i,r,o;return t=new se({props:{src:(s=l[0])==null?void 0:s.img,alt:(c=l[0])==null?void 0:c.description}}),r=new ce({props:{data:l[0]}}),{c(){e=p("div"),a=p("a"),H(t.$$.fragment),i=M(),H(r.$$.fragment),this.h()},l(u){e=g(u,"DIV",{class:!0});var v=w(e);a=g(v,"A",{href:!0,"aria-label":!0,target:!0,rel:!0});var d=w(a);I(t.$$.fragment,d),d.forEach(h),i=q(v),I(r.$$.fragment,v),v.forEach(h),this.h()},h(){f(a,"href",n=l[0].url),f(a,"aria-label","Link to article"),f(a,"target","_blank"),f(a,"rel","noopener noreferrer"),f(e,"class","content svelte-142aa19")},m(u,v){k(u,e,v),$(e,a),P(t,a,null),$(e,i),P(r,e,null),o=!0},p(u,[v]){var b,E;const d={};v&1&&(d.src=(b=u[0])==null?void 0:b.img),v&1&&(d.alt=(E=u[0])==null?void 0:E.description),t.$set(d),(!o||v&1&&n!==(n=u[0].url))&&f(a,"href",n);const _={};v&1&&(_.data=u[0]),r.$set(_)},i(u){o||(y(t.$$.fragment,u),y(r.$$.fragment,u),o=!0)},o(u){L(t.$$.fragment,u),L(r.$$.fragment,u),o=!1},d(u){u&&h(e),D(t),D(r)}}}function ue(l,e,a){let{data:t}=e;return l.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class he extends T{constructor(e){super(),j(this,e,ue,fe,A,{data:0})}}function de(l,e,a){const t=l.slice();return t[0]=e[a],t}function me(l){let e,a='<a class="svelte-6ulcf6"></a> <div class="article-data svelte-6ulcf6"><h1 class="h1-ske svelte-6ulcf6"></h1> <p class="description svelte-6ulcf6"></p> <p class="date svelte-6ulcf6"></p> <p class="authors svelte-6ulcf6"></p></div> ';return{c(){e=p("div"),e.innerHTML=a,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-17m7g5q"&&(e.innerHTML=a),this.h()},h(){f(e,"class","content svelte-6ulcf6")},m(t,n){k(t,e,n)},p:m,d(t){t&&h(e)}}}function pe(l){let e,a=U(Array.from({length:ge},_e)),t=[];for(let n=0;n<a.length;n+=1)t[n]=me(de(l,a,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=N()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=N()},m(n,i){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(n,i);k(n,e,i)},p:m,i:m,o:m,d(n){n&&h(e),Y(t,n)}}}const ge=15,_e=(l,e)=>e;class $e extends T{constructor(e){super(),j(this,e,null,pe,A,{})}}function Q(l,e,a){const t=l.slice();return t[2]=e[a],t}function ve(l){let e,a="No articles available";return{c(){e=p("p"),e.textContent=a},l(t){e=g(t,"P",{"data-svelte-h":!0}),R(e)!=="svelte-19vtljp"&&(e.textContent=a)},m(t,n){k(t,e,n)},p:m,i:m,o:m,d(t){t&&h(e)}}}function be(l){let e,a,t=U(l[0]),n=[];for(let r=0;r<t.length;r+=1)n[r]=X(Q(l,t,r));const i=r=>L(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=N()},l(r){for(let o=0;o<n.length;o+=1)n[o].l(r);e=N()},m(r,o){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(r,o);k(r,e,o),a=!0},p(r,o){if(o&1){t=U(r[0]);let s;for(s=0;s<t.length;s+=1){const c=Q(r,t,s);n[s]?(n[s].p(c,o),y(n[s],1)):(n[s]=X(c),n[s].c(),y(n[s],1),n[s].m(e.parentNode,e))}for(Z(),s=t.length;s<n.length;s+=1)i(s);ee()}},i(r){if(!a){for(let o=0;o<t.length;o+=1)y(n[o]);a=!0}},o(r){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)L(n[o]);a=!1},d(r){r&&h(e),Y(n,r)}}}function ke(l){let e,a;return e=new $e({}),{c(){H(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p:m,i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function X(l){let e,a;return e=new he({props:{data:l[2]}}),{c(){H(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p(t,n){const i={};n&1&&(i.data=t[2]),e.$set(i)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function we(l){let e,a,t,n;const i=[ke,be,ve],r=[];function o(s,c){return s[1]?0:s[0]&&s[0].length>0?1:2}return a=o(l),t=r[a]=i[a](l),{c(){e=p("section"),t.c(),this.h()},l(s){e=g(s,"SECTION",{class:!0});var c=w(e);t.l(c),c.forEach(h),this.h()},h(){f(e,"class","svelte-1jqt6dc")},m(s,c){k(s,e,c),r[a].m(e,null),n=!0},p(s,[c]){let u=a;a=o(s),a===u?r[a].p(s,c):(Z(),L(r[u],1,1,()=>{r[u]=null}),ee(),t=r[a],t?t.p(s,c):(t=r[a]=i[a](s),t.c()),y(t,1),t.m(e,null))},i(s){n||(y(t),n=!0)},o(s){L(t),n=!1},d(s){s&&h(e),r[a].d()}}}function ye(l,e,a){let t,n=!0;return te(async()=>{try{a(0,t=await fetch("https://raw.githubusercontent.com/iguacel/post-graphics-feed/main/api/wapo_graphics_feed.json").then(i=>i.json()))}catch(i){console.error("Failed to fetch articles:",i)}finally{a(1,n=!1)}}),[t,n]}class Le extends T{constructor(e){super(),j(this,e,ye,we,A,{})}}function Ae(l){let e,a=`<h2>About this project</h2> <p>There is currently no tag or page where all the articles published by The Washington Post&#39;s
		graphics team can be found. To address this, I have manually compiled an array of names of all
		the authors on the team and used the Post&#39;s API to fetch data about their articles, including
		the headline, subtitle, authors, date, image, and URL.</p> <p>The data is updated daily thanks to a GitHub Actions workflow. To avoid overloading the Post&#39;s
		API, only the latest five articles from each author are requested. The code that fetches and
		parses the data can be found in the api folder of the <a href="https://github.com/LuisSevillano/post-graphics-feed">repository</a>.</p> <p>This project is open source and aims to allow everyone to follow the incredible work published
		by this outstanding team. If you work here and are not on the <a href="https://github.com/LuisSevillano/post-graphics-feed/blob/main/api/authors.json">list</a> or want to add someone, please open a pull request in the repository.</p>`;return{c(){e=p("footer"),e.innerHTML=a,this.h()},l(t){e=g(t,"FOOTER",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-160lv9i"&&(e.innerHTML=a),this.h()},h(){f(e,"class","svelte-1vjctdg")},m(t,n){k(t,e,n)},p:m,i:m,o:m,d(t){t&&h(e)}}}class Te extends T{constructor(e){super(),j(this,e,null,Ae,A,{})}}function je(l){let e,a,t,n,i,r="A <s>curated</s> list of recent articles published by The Washington Post&#39;s graphics team.";return{c(){e=p("header"),a=p("h1"),t=S(F),n=M(),i=p("p"),i.innerHTML=r,this.h()},l(o){e=g(o,"HEADER",{class:!0});var s=w(e);a=g(s,"H1",{class:!0});var c=w(a);t=B(c,F),c.forEach(h),n=q(s),i=g(s,"P",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-1umef9v"&&(i.innerHTML=r),s.forEach(h),this.h()},h(){f(a,"class","svelte-1699wjy"),f(i,"class","svelte-1699wjy"),f(e,"class","svelte-1699wjy")},m(o,s){k(o,e,s),$(e,a),$(a,t),$(e,n),$(e,i)},p:m,i:m,o:m,d(o){o&&h(e)}}}class Ee extends T{constructor(e){super(),j(this,e,null,je,A,{})}}function He(l){let e,a,t,n,i,r,o;return a=new Ee({}),n=new Le({}),r=new Te({}),{c(){e=p("main"),H(a.$$.fragment),t=M(),H(n.$$.fragment),i=M(),H(r.$$.fragment),this.h()},l(s){e=g(s,"MAIN",{class:!0});var c=w(e);I(a.$$.fragment,c),t=q(c),I(n.$$.fragment,c),i=q(c),I(r.$$.fragment,c),c.forEach(h),this.h()},h(){f(e,"class","svelte-1ko1z2q")},m(s,c){k(s,e,c),P(a,e,null),$(e,t),P(n,e,null),$(e,i),P(r,e,null),o=!0},p:m,i(s){o||(y(a.$$.fragment,s),y(n.$$.fragment,s),y(r.$$.fragment,s),o=!0)},o(s){L(a.$$.fragment,s),L(n.$$.fragment,s),L(r.$$.fragment,s),o=!1},d(s){s&&h(e),D(a),D(n),D(r)}}}class Me extends T{constructor(e){super(),j(this,e,null,He,A,{})}}export{Me as component};