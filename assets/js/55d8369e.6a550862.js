(self.webpackChunk=self.webpackChunk||[]).push([[3046],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4015:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>s,toc:()=>l,default:()=>d});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],c={id:"worlds-backend-quickstart",title:"Worlds Backend Quick Start"},s={unversionedId:"engineering/worlds/worlds-backend-quickstart",id:"engineering/worlds/worlds-backend-quickstart",isDocsHomePage:!1,title:"Worlds Backend - Quick Start Guide",description:"Introduction",source:"@site/../docs/engineering/worlds/worlds-backend-quickstart.md",sourceDirName:"engineering/worlds",slug:"/engineering/worlds/worlds-backend-quickstart",permalink:"/docs/engineering/worlds/worlds-backend-quickstart",version:"current",frontMatter:{id:"worlds-backend-quickstart",title:"Worlds Backend Quick Start"},sidebar:"docs",previous:{title:"JavaScript File Import",permalink:"/docs/engineering/totum/loaders/js/js-file-import"},next:{title:"WSRTC - Quick Start Guide",permalink:"/docs/engineering/wsrtc/wsrtc-quickstart"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Quick Start Basics",id:"quick-start-basics",children:[{value:"Directory Structure",id:"directory-structure",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The world manager is responsible for loading up y.js state and binding it to the world. It takes network data, saved data or just some sort of saved scene and translates it into the renderer world using the app manager, which as the name implies creates and manages the App."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"quick-start-basics"},(0,a.kt)("a",{parentName:"h2",href:"../quick-start-basics"},"Quick Start Basics")),(0,a.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n**Root**\n\n\u251c\u2500\u2500\u2500    index.js <--- Main Application Logic Resides Here\n\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);