(self.webpackChunk=self.webpackChunk||[]).push([[5416],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2668:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>u,default:()=>p});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"monetization",title:"Add Monetization"},s={unversionedId:"developer/monetization",id:"developer/monetization",isDocsHomePage:!1,title:"Add Monetization",description:'This guide will walk you through the basic steps for adding the ability to "unlock" features in your XRPackage when a user has web monetization enabled or when a user owns a NFT of your XRPackage.',source:"@site/../docs/developer/monetization.md",sourceDirName:"developer",slug:"/developer/monetization",permalink:"/docs/developer/monetization",version:"current",lastUpdatedBy:"jin",lastUpdatedAt:1623542556,formattedLastUpdatedAt:"6/12/2021",frontMatter:{id:"monetization",title:"Add Monetization"},sidebar:"guides",previous:{title:"Design Guidelines",permalink:"/docs/developer/xrpackage-design-guidelines"},next:{title:"Examples",permalink:"/docs/developer/examples"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add The Monetization Start Event Listener",id:"add-the-monetization-start-event-listener",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This guide will walk you through the basic steps for adding the ability to "unlock" features in your XRPackage when a user has web monetization enabled ',(0,o.kt)("em",{parentName:"p"},"or")," when a user owns a NFT of your XRPackage."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": This guide assumes you have read ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/creating-an-xrpk"},"Creating Your First XRPackage")," or are familiar with what an XRPackage is."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand and be able to ",(0,o.kt)("a",{parentName:"li",href:"/docs/developer/creating-an-xrpk"},"create an XRPackage"),"."),(0,o.kt)("li",{parentName:"ul"},"Have an XRPackage you want to add the ability to unlock a feature when a user has web monetization enabled ",(0,o.kt)("em",{parentName:"li"},"or")," own your XRPackage as an NFT.")),(0,o.kt)("h2",{id:"add-the-monetization-start-event-listener"},"Add The Monetization Start Event Listener"),(0,o.kt)("p",null,'Let\'s say you have a lightsaber XRPackage made with Three.js. You control the "intensity" of the lightsaber by changing the variable ',(0,o.kt)("inlineCode",{parentName:"p"},"particleIntensity"),', and you want users that unlock your XRPackage to have a more "intense" lightsaber.'),(0,o.kt)("p",null,"In order to know when a user unlocks your XRPackage, all you have to do is add an EventListener for ",(0,o.kt)("inlineCode",{parentName:"p"},"monetizationstart")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"document.monetization")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.monetization.addEventListener('monetizationstart', () => {\n    particleIntensity = 0.1;\n })\n")),(0,o.kt)("p",null,"That's it! Inside of the event listener, you can change whatever you want to change for users who unlock your XRPackage."))}p.isMDXComponent=!0}}]);