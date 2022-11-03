"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[6974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"worlds",title:"Worlds"},s=void 0,p={unversionedId:"webaverse/worlds",id:"webaverse/worlds",title:"Worlds",description:"If you're interested in designing a world in Webaverse you came to the right spot. There are currently several methods to building scenes in Webaverse.",source:"@site/docs/webaverse/worlds.md",sourceDirName:"webaverse",slug:"/webaverse/worlds",permalink:"/webaverse/worlds",draft:!1,tags:[],version:"current",frontMatter:{id:"worlds",title:"Worlds"},sidebar:"tutorialSidebar",previous:{title:"Whitepaper",permalink:"/webaverse/whitepaper"},next:{title:"Character Workflow",permalink:"/art/character-workflow"}},d={},c=[{value:"Manual",id:"manual",level:2},{value:"Editor",id:"editor",level:2},{value:"Blender",id:"blender",level:2},{value:"In-game Editing",id:"in-game-editing",level:2},{value:"Editaverse (Archived)",id:"editaverse-archived",level:2}],u={toc:c};function h(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're interested in designing a world in Webaverse you came to the right spot. There are currently several methods to building scenes in Webaverse."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Miku in Atoll",src:r(4648).Z,width:"1920",height:"979"})),(0,i.kt)("h2",{id:"manual"},"Manual"),(0,i.kt)("p",null,"You can download the app and test your world locally using this ",(0,i.kt)("a",{parentName:"p",href:"../create/scenes"},"guide"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2539).Z,width:"1920",height:"1011"})),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)("p",null,"The editor is an early access tool for constructing and minting NFTs. There's a text editor with various templates for HTML NFT types and a library of assets pulled from Webaverse."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Editor",src:r(2700).Z,width:"1920",height:"1078"})),(0,i.kt)("h2",{id:"blender"},"Blender"),(0,i.kt)("p",null,"Models in Webaverse are made with glTF binary files (.glb), which Blender 2.8+ has an export option for. You can also use the Webaverse ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webaverse/blender-plugin"},"blender plugin")," to export directly from Blender to the minting page. To learn how to setup the plugin click ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/docs/create/import-blender"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Blender export",src:r(4489).Z,width:"1106",height:"770"})),(0,i.kt)("p",null,"If your scene has lightmap bakes, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MozillaReality/hubs-blender-exporter"},"hubs-blender-exporter")," and configure your nodes in the shader editor to export with a lightmap in the .glb file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Shader editor",src:r(7993).Z,width:"1631",height:"786"})),(0,i.kt)("h2",{id:"in-game-editing"},"In-game Editing"),(0,i.kt)("p",null,"Users can drag and drop files into the ",(0,i.kt)("a",{parentName:"p",href:"https://app.webaverse.com"},"Webaverse app")," window to temporarily spawn them into the world. If you're in a multiplayer realm (",(0,i.kt)("inlineCode",{parentName:"p"},".realm [1-5]")," typed in Discord) then the spawned objects will have persistence."),(0,i.kt)("p",null,"There's also an in-game builder you can use with ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," keys to switch between creating a wall, floor, and ramp."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"In-game builder",src:r(7231).Z,width:"1588",height:"932"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"editaverse-archived"},"Editaverse (Archived)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Unfortunately, Editaverse is no longer being maintained. If you're a developer interested in reviving these projects please ",(0,i.kt)("a",{parentName:"p",href:"mailto:hello@webaverse.com"},"contact us"),". The code lives on in Github:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/editaverse"},"https://github.com/webaverse/editaverse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/editaverse-voxels"},"https://github.com/webaverse/editaverse-voxels")))),(0,i.kt)("p",null,"Editaverse consiststs of experimental Webaverse workflow integrations with open source 3D creation tools, such as ",(0,i.kt)("a",{parentName:"p",href:"https://hubs.mozilla.com/spoke"},"Mozilla Spoke")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danielesteban/blocks-editor"},"Blocks Editor"),"."),(0,i.kt)("hr",null),(0,i.kt)("iframe",{height:"480",width:"100%",src:"https://www.youtube.com/embed/IjFHh1Yb5Ko",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("hr",null),(0,i.kt)("iframe",{height:"480",width:"100%",src:"https://www.youtube.com/embed/r9PSi1GDYeE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If you have any questions or feedback, please reach out to us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/3byWubumSa"},"Discord")," or ",(0,i.kt)("a",{parentName:"p",href:"mailto:hello@webaverse.com"},"email"),"."))}h.isMDXComponent=!0},4489:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/blender-export-6120b1bd6a03c0c1dba2076ba20c5c2f.jpg"},7231:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/builder-0e3ae516006b4511728db32f99c744ff.jpg"},2539:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/desert_world-398fcbe0474fc982976155b2ddea94bc.jpg"},2700:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/editor-0e3b4aefb7e1352e6d4233dd2e5345ce.jpg"},4648:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/miku_atoll-7637e88b4e7dbafcaa96374138fc8353.jpg"},7993:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/shader-editor-1e62a1ece647a04872f32617dd9f65bd.jpg"}}]);