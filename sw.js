if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const o=e=>n(e,r),t={module:{uri:r},exports:c,require:o};i[r]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(f(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-36443c6a.css",revision:null},{url:"assets/index-75dcd31a.js",revision:null},{url:"index.html",revision:"c5ffd3fb79c7dff4e527fdb3418fe271"},{url:"registerSW.js",revision:"a4e1587397057cb6fcd3b6608b7b6eec"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"manifest.webmanifest",revision:"1a09cbc5ce03f80f20b366fe463c4081"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));