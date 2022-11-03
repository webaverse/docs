"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[2326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),k=i,v=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={id:"preview-backend-quickstart",title:"Preview Backend Quick Start"},c="Preview Backend - Quick Start Guide",l={unversionedId:"engineering/preview/preview-backend-quickstart",id:"engineering/preview/preview-backend-quickstart",title:"Preview Backend Quick Start",description:"Introduction",source:"@site/docs/engineering/preview/preview-backend-quickstart.md",sourceDirName:"engineering/preview",slug:"/engineering/preview/preview-backend-quickstart",permalink:"/engineering/preview/preview-backend-quickstart",draft:!1,tags:[],version:"current",frontMatter:{id:"preview-backend-quickstart",title:"Preview Backend Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Multiplayer Stack Flow",permalink:"/engineering/multiplayer/multiplayer-stack-flow"},next:{title:"Quick Start Basics",permalink:"/engineering/quick-start-basics"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start Basics",id:"quick-start-basics",level:2},{value:"Additional Setup",id:"additional-setup",level:3},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Local Screenshot",id:"local-screenshot",level:2}],d={toc:u};function k(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preview-backend---quick-start-guide"},"Preview Backend - Quick Start Guide"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User-agent (website or Discord bot) requests a preview image."),(0,a.kt)("li",{parentName:"ol"},"Request gets sent to the preview server then checks S3 cache if there's a preview already."),(0,a.kt)("li",{parentName:"ol"},"If there's no preview, the server will ask the API about the token and fetch the IPFS content."),(0,a.kt)("li",{parentName:"ol"},"The files from the IPFS hash get rendered using Puppeteer then exported as previews.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/app/blob/master/README.md"},"Install and Run the Webabaverse App")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"quick-start-basics"},(0,a.kt)("a",{parentName:"h2",href:"../quick-start-basics"},"Quick Start Basics")),(0,a.kt)("h3",{id:"additional-setup"},"Additional Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(Optional):")," Before running the application make sure Ports :80, :8997, :8998, :8999 are not already in use. If your port :80 is in use, you can change it from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/preview-backend/blob/master/index.js#L17"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n# Change default port inside index.js\n\nconst  PORT = parseInt(process.env.PORT, 10) || <3000 OR ANY_FREE_PORT>;\n\n")),(0,a.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n**Root**\n\n\u251c\u2500\u2500\u2500 index.js <--- Main Application Logic Resides Here\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"local-screenshot"},"Local Screenshot"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example URL")),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png"},"https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png")),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);