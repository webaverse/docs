(self.webpackChunk=self.webpackChunk||[]).push([[5413],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"bake-physics",title:"Bake Physics For 3D Model"},s={unversionedId:"create/bake-physics",id:"create/bake-physics",isDocsHomePage:!1,title:"Bake Physics For 3D Model",description:"This guide explains how you can export your 3D content from Blender to bring it into Webaverse with physics baked in for automatic collision detection.",source:"@site/../docs/create/bake-physics.md",sourceDirName:"create",slug:"/create/bake-physics",permalink:"/docs/create/bake-physics",version:"current",frontMatter:{id:"bake-physics",title:"Bake Physics For 3D Model"}},c=[{value:"Automatic Method",id:"automatic-method",children:[]},{value:"Manual Method",id:"manual-method",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]}],p={toc:c};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide explains how you can export your 3D content from Blender to bring it into Webaverse with physics baked in for automatic collision detection."),(0,a.kt)("h2",{id:"automatic-method"},"Automatic Method"),(0,a.kt)("p",null,"The web interface now supports automatic baking of physics for 3D files uploaded to ",(0,a.kt)("a",{parentName:"p",href:"https://webaverse.com/mint"},"mint"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Physics debug enabled in a world",src:n(2688).Z})),(0,a.kt)("p",null,"The physics debug key is tilde ","`"," to preview, the blue areas represents walkable collision surfaces. No need to custom generate a navmesh!"),(0,a.kt)("h2",{id:"manual-method"},"Manual Method"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Have a ",(0,a.kt)("inlineCode",{parentName:"li"},".glb")," file you want to bake physics for"),(0,a.kt)("li",{parentName:"ul"},"Have ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm installed"))),(0,a.kt)("h4",{id:"1-goto-httpsutilswebaversecom"},"1. Goto ",(0,a.kt)("a",{parentName:"h4",href:"https://utils.webaverse.com"},"https://utils.webaverse.com")),(0,a.kt)("p",null,"At ",(0,a.kt)("a",{parentName:"p",href:"https://utils.webaverse.com"},"https://utils.webaverse.com"),"."),(0,a.kt)("h4",{id:"2-click-choose-file-and-pick-your-glb-file"},'2. Click "Choose file" and pick your ',(0,a.kt)("inlineCode",{parentName:"h4"},".glb")," file"),(0,a.kt)("h4",{id:"3-click-submit"},"3. Click submit"),(0,a.kt)("p",null,"After clicking submit, put the given .bin in a new folder with your .glb file."),(0,a.kt)("h4",{id:"4-install-xrpk"},"4. Install xrpk"),(0,a.kt)("p",null,"Install xrpk via npm by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g xrpk")," in your computer's terminal."),(0,a.kt)("h4",{id:"5-create-a-manifestjson"},"5. Create a manifest.json"),(0,a.kt)("p",null,"Create a manifest.json in that folder with a ",(0,a.kt)("inlineCode",{parentName:"p"},"physics_url")," field pointing to that ",(0,a.kt)("inlineCode",{parentName:"p"},".bin")," file. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.webaverse.com/docs/create/manifest-api#physics_url"},"See the manifest API docs for more info.")),(0,a.kt)("h4",{id:"6-build-the-xrpk"},"6. Build the xrpk"),(0,a.kt)("p",null,"In that folder, run ",(0,a.kt)("inlineCode",{parentName:"p"},"xrpk build ."),", it should then give you a ",(0,a.kt)("inlineCode",{parentName:"p"},".wbn")," file. That is your ",(0,a.kt)("inlineCode",{parentName:"p"},".glb")," + ",(0,a.kt)("inlineCode",{parentName:"p"},".bin")," physics bake in one file."),(0,a.kt)("h4",{id:"7-mint-and-load-the-wbn-into-webaverse"},"7. Mint and load the ",(0,a.kt)("inlineCode",{parentName:"h4"},".wbn")," into Webaverse!"))}u.isMDXComponent=!0},2688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/collision-6d739f1141b4834cb6a5680263391f58.jpg"}}]);