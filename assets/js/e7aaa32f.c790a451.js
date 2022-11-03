"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[2552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"physx-workflow",title:"PhysX WASM Workflow"},p="PhysX WASM Workflow",s={unversionedId:"engineering/app/physx-workflow",id:"engineering/app/physx-workflow",title:"PhysX WASM Workflow",description:"Introduction",source:"@site/docs/engineering/app/physx-workflow.md",sourceDirName:"engineering/app",slug:"/engineering/app/physx-workflow",permalink:"/engineering/app/physx-workflow",draft:!1,tags:[],version:"current",frontMatter:{id:"physx-workflow",title:"PhysX WASM Workflow"},sidebar:"tutorialSidebar",previous:{title:"Avatar System",permalink:"/engineering/app/avatar-system"},next:{title:"Drag & Drop",permalink:"/engineering/app/react/components/drag-n-drop"}},m={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Requirements",id:"setup-requirements",level:2},{value:"Get Webaverse PhysX Build (APP-WASM)",id:"get-webaverse-physx-build-app-wasm",level:3},{value:"Get Emscripten SDK",id:"get-emscripten-sdk",level:3},{value:"Compilation",id:"compilation",level:2},{value:"Use it in Webaverse",id:"use-it-in-webaverse",level:2},{value:"PhysX Docs",id:"physx-docs",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"physx-wasm-workflow"},"PhysX WASM Workflow"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"PhysX is a C++ open-source realtime physics engine middleware SDK developed by Nvidia.\nWebaverse has adopted it in WebAssembly, which is compiled using Emscripten."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setup-requirements"},"Setup Requirements"),(0,i.kt)("h3",{id:"get-webaverse-physx-build-app-wasm"},"Get ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/webaverse/app-wasm"},"Webaverse PhysX Build")," (APP-WASM)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fork and clone it to your prefered directory.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get-emscripten-sdk"},"Get ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/emscripten-core/emsdk"},"Emscripten SDK")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For it to work with the current build you need to install version ",(0,i.kt)("strong",{parentName:"li"},"2.0.6")),(0,i.kt)("li",{parentName:"ul"},"Clone it and then run these commands inside the ",(0,i.kt)("strong",{parentName:"li"},"emsdk")," directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./emsdk install 2.0.6\n./emsdk activate 2.0.6\n")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"compilation"},"Compilation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Within ",(0,i.kt)("strong",{parentName:"li"},"app-wasm")," point to the ",(0,i.kt)("strong",{parentName:"li"},"emsdk")," directory using this command, changing it to your own path:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source /home/user/emsdk/emsdk_env.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now inside ",(0,i.kt)("strong",{parentName:"li"},"app-wasm")," run this to compile:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./compile.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Congrats! If it compiled without errors the finished build should be in ",(0,i.kt)("inlineCode",{parentName:"li"},"app-wasm/bin"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"use-it-in-webaverse"},"Use it in Webaverse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry.wasm")," files from ",(0,i.kt)("inlineCode",{parentName:"p"},"app-wasm/bin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paste them into ",(0,i.kt)("inlineCode",{parentName:"p"},"app/public/bin")," in the Webaverse app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry.js")," in a code editor and ",(0,i.kt)("em",{parentName:"p"},"find")," ",(0,i.kt)("strong",{parentName:"p"},'"geometry.wasm"')," then replace it with ",(0,i.kt)("strong",{parentName:"p"},'"bin/geometry.wasm"'),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.ibb.co/3yYjYm1/geom.png",alt:"geometry.js suffix"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add this snippet at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry.js"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let accept, reject;\nconst p = new Promise((a, r) => {\n  accept = a;\n  reject = r;\n});\nModule.postRun = () => {\n  accept();\n};\nModule.waitForLoad = () => p;\nrun();\nexport default Module;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.ibb.co/W3Kv29g/geometry.png",alt:"geometry.js suffix"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Done! Now reload the Webaverse app and try out your own PhysX configuration!")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"physx-docs"},"PhysX Docs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gameworksdocs.nvidia.com/PhysX/4.1/documentation/physxguide/Index.html"},"https://gameworksdocs.nvidia.com/PhysX/4.1/documentation/physxguide/Index.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/Manual/Index.html"},"https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/Manual/Index.html"))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);