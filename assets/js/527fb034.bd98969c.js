(self.webpackChunk=self.webpackChunk||[]).push([[3913],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,f=u["".concat(l,".").concat(b)]||u[b]||c[b]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8305:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>d,default:()=>c});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"import-blender",title:"Import From Blender"},l={unversionedId:"create/import-blender",id:"create/import-blender",isDocsHomePage:!1,title:"Import From Blender",description:"This guide explains how you can export your content from Blender to bring it into Webaverse.",source:"@site/../docs/create/import-blender.md",sourceDirName:"create",slug:"/create/import-blender",permalink:"/docs/create/import-blender",version:"current",lastUpdatedBy:"jin",lastUpdatedAt:1622257131,formattedLastUpdatedAt:"5/28/2021",frontMatter:{id:"import-blender",title:"Import From Blender"},sidebar:"guides",previous:{title:"Submission Guide",permalink:"/docs/create/guidelines"},next:{title:"Bake Physics For 3D Model",permalink:"/docs/create/bake-physics"}},d=[{value:"1. Download the add-on",id:"1-download-the-add-on",children:[]},{value:"2. Install the add-on",id:"2-install-the-add-on",children:[]},{value:"3. Export a scene/model to Webaverse",id:"3-export-a-scenemodel-to-webaverse",children:[{value:"Click &quot;Export Webaverse NFT&quot;",id:"click-export-webaverse-nft",children:[]}]}],p={toc:d};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide explains how you can export your content from Blender to bring it into Webaverse."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/blender-plugin"},"plugin")," is not currently maintained right now. If you're a developer interested in this this workflow please contact us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/webaverse"},"Twitter")," or ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/R5wqYhvv53"},"Discord"),".")),(0,a.kt)("h2",{id:"1-download-the-add-on"},"1. Download the add-on"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/blender-plugin/raw/master/io_scene_webaverse.zip"},"Download the latest version here"),"."),(0,a.kt)("h2",{id:"2-install-the-add-on"},"2. Install the add-on"),(0,a.kt)("p",null,"Open the preferences window by selecting Preferences from the Edit menu"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"circled preferences from blender dropdown",src:n(8888).Z})),(0,a.kt)("p",null,"Select the ",(0,a.kt)("em",{parentName:"p"},"Add-ons")," tab and press the ",(0,a.kt)("em",{parentName:"p"},"Install")," button"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"install button circled in add-ons tab",src:n(6159).Z})),(0,a.kt)("p",null,"Select the downloaded zip-file and press ",(0,a.kt)("em",{parentName:"p"},"Install Add-on from file")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"circled install add-on from file",src:n(5776).Z})),(0,a.kt)("p",null,"Locate the Webaverse exporter in the add-on list and enable it by pressing the checkbox."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"circled exporter in add-on list",src:n(5181).Z})),(0,a.kt)("h2",{id:"3-export-a-scenemodel-to-webaverse"},"3. Export a scene/model to Webaverse"),(0,a.kt)("p",null,"Once the add-on is installed and activated, scenes or models can be exported by selecting Webaverse from the File -> Export menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"circled exporter in add-on list",src:n(2729).Z})),(0,a.kt)("h3",{id:"click-export-webaverse-nft"},'Click "Export Webaverse NFT"'),(0,a.kt)("p",null,"This will send your 3d model to Webaverse and open it in a new web page for previewing and minting."))}c.isMDXComponent=!0},8888:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/blender-1-4ab8b6b99b0fa1618187fdf379ba041f.png"},6159:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/blender-2-0bbb0689cb80231e14228225500e026a.png"},5776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},5181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/blender-4-f9e22a8b7e36554221a0f85b60d6b310.png"},2729:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/blender-5-e7f5a3e7901a1f35898ac60948e0b835.png"}}]);