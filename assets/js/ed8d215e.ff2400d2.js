(self.webpackChunk=self.webpackChunk||[]).push([[2796],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"wearables",title:"Mint Avatar Wearables"},s={unversionedId:"create/wearables",id:"create/wearables",isDocsHomePage:!1,title:"Mint Avatar Wearables",description:"Note: minting wearables is currently disabled right now",source:"@site/../docs/create/wearables.md",sourceDirName:"create",slug:"/create/wearables",permalink:"/docs/create/wearables",version:"current",frontMatter:{id:"wearables",title:"Mint Avatar Wearables"}},c=[],p={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: minting wearables is currently disabled right now")),(0,o.kt)("p",null,"In this guide you'll learn how to design and mint custom avatar wearables. All you need is a 3D model that you want for the type of wearable (hat, glasses, sword, etc) you want to make in glTF binary (.glb) file format. "),(0,o.kt)("p",null,"For presentation purposes only, we'll use this ",(0,o.kt)("a",{parentName:"p",href:"https://sketchfab.com/3d-models/cat-in-hat-a5301f9e3045462f8b023c20b7a1b2f2"},"Cat in hat")," by ",(0,o.kt)("a",{parentName:"p",href:"https://sketchfab.com/patrakeevasveta"},"patrakeevasveta")," to demonstrate."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cat in hat",src:r(3488).Z})),(0,o.kt)("p",null,"The Web UI for minting wearables isn't ready at the moment so you'll need to manually build the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.webaverse.com/docs/create/creating-an-xrpk"},"XRPK"),". This involves making a zip file containing the .glb file and a manifest.json. In this example the manifest.json contains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "cat-in-hat",\n  "description": "Cat in Hat XRPackage",\n  "xr_type": "webxr-site@0.0.1",\n  "start_url": "cat-in-hat.glb",\n  "components": [\n    {\n      "type": "wear",\n      "bone": "Head",\n      "position": [0, 0, 0],\n      "scale": [0.1, 0.1, 0.1]\n    }\n  ]\n}\n\n')))}u.isMDXComponent=!0},3488:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/cathat-d308f71315f74f6ec487435687be992c.jpg"}}]);