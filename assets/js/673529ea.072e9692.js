(self.webpackChunk=self.webpackChunk||[]).push([[9055],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2624:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>s,default:()=>d});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],l={id:"monetization-api",title:"Web Monetization API"},p={unversionedId:"developer/monetization-api",id:"developer/monetization-api",isDocsHomePage:!1,title:"Web Monetization API",description:"The Web Monetization API allows you to lock or unlock content in your XRPackage based on whether a user has Web Monetization enabled or if they are a NFT owner of your XRPackage.",source:"@site/../docs/developer/monetization-api.md",sourceDirName:"developer",slug:"/developer/monetization-api",permalink:"/docs/developer/monetization-api",version:"current",frontMatter:{id:"monetization-api",title:"Web Monetization API"}},s=[{value:"Document.monetization",id:"documentmonetization",children:[]},{value:"States",id:"states",children:[{value:"<code>stopped</code>",id:"stopped",children:[]},{value:"<code>started</code>",id:"started",children:[]}]},{value:"Browser events",id:"browser-events",children:[{value:"<code>monetizationstart</code>",id:"monetizationstart",children:[]},{value:"<code>monetizationstop</code>",id:"monetizationstop",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Web Monetization API allows you to lock or unlock content in your XRPackage based on whether a user has ",(0,r.kt)("a",{parentName:"p",href:"https://webmonetization.org/"},"Web Monetization")," enabled or if they are a NFT owner of your XRPackage."),(0,r.kt)("p",null,"For a step-by-step guide on how to implement this API in your app, checkout ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/creating-an-xrpk"},"Create An XRPackage"),"."),(0,r.kt)("h2",{id:"documentmonetization"},"Document.monetization"),(0,r.kt)("p",null,"The browser exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"document.monetization")," DOM object that implements\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget")),"\nand has a read-only ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," property."),(0,r.kt)("p",null,"The object allows you to track Monetization events and see whether the user has web monetization enabled ",(0,r.kt)("em",{parentName:"p"},"or")," is a NFT owner of your XRPackage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.monetization: EventTarget\ndocument.monetization.state: 'stopped' | 'started'\n")),(0,r.kt)("h2",{id:"states"},"States"),(0,r.kt)("p",null,"Check the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"document.monetization.state")," to see if a user is has web monetization enabled ",(0,r.kt)("em",{parentName:"p"},"or")," is a NFT owner of your XRPackage."),(0,r.kt)("h3",{id:"stopped"},(0,r.kt)("inlineCode",{parentName:"h3"},"stopped")),(0,r.kt)("p",null,"The user is not currently an NFT owner of your XRPackage and does not have Web Monetization enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.monetization.state === 'stopped'\n")),(0,r.kt)("h3",{id:"started"},(0,r.kt)("inlineCode",{parentName:"h3"},"started")),(0,r.kt)("p",null,"The user is an NFT owner of your XRPackage ",(0,r.kt)("em",{parentName:"p"},"or")," has Web Monetization enabled and Webaverse is currently sending micropayments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.monetization.state === 'started'\n")),(0,r.kt)("h2",{id:"browser-events"},"Browser events"),(0,r.kt)("h3",{id:"monetizationstart"},(0,r.kt)("inlineCode",{parentName:"h3"},"monetizationstart")),(0,r.kt)("p",null,"Determine when Monetization has started by adding an event\nlistener for ",(0,r.kt)("inlineCode",{parentName:"p"},"monetizationstart")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"document.monetization"),"."),(0,r.kt)("h4",{id:"event-listener"},"Event listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function startEventHandler (event) {\n  console.log(event)\n}\n\ndocument.monetization.addEventListener('monetizationstart', startEventHandler)\n")),(0,r.kt)("h3",{id:"monetizationstop"},(0,r.kt)("inlineCode",{parentName:"h3"},"monetizationstop")),(0,r.kt)("p",null,"Determine when Monetization has stopped by adding an event listener for\n",(0,r.kt)("inlineCode",{parentName:"p"},"monetizationstop")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"document.monetization"),"."),(0,r.kt)("h4",{id:"event-listener-1"},"Event listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function stopEventHandler (event) {\n  console.log(event)\n}\n\ndocument.monetization.addEventListener('monetizationstop', stopEventHandler)\n")))}d.isMDXComponent=!0}}]);