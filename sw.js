if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>i(e,r),t={module:{uri:r},exports:o,require:a};s[r]=Promise.all(l.map((e=>t[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c5619ee8b393a531f02b34d2f7e4b4ed"},{url:"apple-touch-icon.png",revision:"01aef127f78a7cafdfc84cd8561ea38c"},{url:"assets/bands-B7Y6JyJB.js",revision:null},{url:"assets/events-complete-Id6sFHAw.js",revision:null},{url:"assets/index-kQLtWo2u.js",revision:null},{url:"assets/index-WWgrXV00.css",revision:null},{url:"assets/JoinView-D3A5RNhK.js",revision:null},{url:"assets/LoginMailView-DqjcaCEE.js",revision:null},{url:"assets/material-symbols-outlined-B73__LCJ.woff2",revision:null},{url:"assets/material-symbols-rounded-MeumEKG6.woff2",revision:null},{url:"assets/material-symbols-sharp-COU00SW9.woff2",revision:null},{url:"assets/materialdesignicons-webfont-B7mPwVP_.ttf",revision:null},{url:"assets/materialdesignicons-webfont-CSr8KVlo.eot",revision:null},{url:"assets/materialdesignicons-webfont-Dp5v-WZN.woff2",revision:null},{url:"assets/materialdesignicons-webfont-PXm3-2wK.woff",revision:null},{url:"assets/MembersView-1xYex20J.css",revision:null},{url:"assets/MembersView-DU-HMom8.js",revision:null},{url:"assets/SettingsView-B6_H3z8B.js",revision:null},{url:"assets/SwiperView-DPvCxaZC.css",revision:null},{url:"assets/SwiperView-Dy8_8X8D.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"c7cd63c1ea8eaef3db54d30ed6961e75"},{url:"googleed0b3c081c6adf25.html",revision:"dafa2e2733a27e71ee127ab374b8f894"},{url:"index.html",revision:"b4177d322d322bdd56bd1312294ad010"},{url:"manifest.webmanifest",revision:"ed3dff3ee48d65eeafc709cf2b1f84df"},{url:"privacy.html",revision:"0e2305412d0b27d4e28261a02562b5be"},{url:"README.md",revision:"36e92b51aaca817a3f4e60ea1cce4304"},{url:"404.html",revision:"c5619ee8b393a531f02b34d2f7e4b4ed"},{url:"README.md",revision:"36e92b51aaca817a3f4e60ea1cce4304"},{url:"apple-touch-icon.png",revision:"01aef127f78a7cafdfc84cd8561ea38c"},{url:"favicon.ico",revision:"c7cd63c1ea8eaef3db54d30ed6961e75"},{url:"googleed0b3c081c6adf25.html",revision:"dafa2e2733a27e71ee127ab374b8f894"},{url:"privacy.html",revision:"0e2305412d0b27d4e28261a02562b5be"},{url:"manifest.webmanifest",revision:"ed3dff3ee48d65eeafc709cf2b1f84df"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
