"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[6682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?i.createElement(f,l(l({ref:n},p),{},{components:t})):i.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],o={id:"scene-file-quickstart",title:"Scene File Quick Start"},s="Scene File (.scn) Quick Start Guide",c={unversionedId:"engineering/app/scene/scene-file-quickstart",id:"engineering/app/scene/scene-file-quickstart",title:"Scene File Quick Start",description:"Default Scenes",source:"@site/docs/engineering/app/scene/scene-file-quickstart.md",sourceDirName:"engineering/app/scene",slug:"/engineering/app/scene/scene-file-quickstart",permalink:"/engineering/app/scene/scene-file-quickstart",draft:!1,tags:[],version:"current",frontMatter:{id:"scene-file-quickstart",title:"Scene File Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Lighting & Shadows",permalink:"/engineering/app/scene/lighting-shadows"},next:{title:"Screenshot System",permalink:"/engineering/app/systems/screenshot-system"}},p={},u=[{value:"Default Scenes",id:"default-scenes",level:2},{value:"File Structure",id:"file-structure",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scene-file-scn-quick-start-guide"},"Scene File (.scn) Quick Start Guide"),(0,r.kt)("h2",{id:"default-scenes"},"Default Scenes"),(0,r.kt)("p",null,"Default scenes offered by Webaverse are defined in a scenes.json file, which is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scenes")," directory in the root of the App. The first one in the list is the default scene."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[\n    "street.scn",\n    "treehouse.scn",\n    "darkness.scn",\n    "shadows.scn",\n    "classroom.scn",\n    "grid.scn",\n    "canyon.scn"\n]\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"file-structure"},"File Structure"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},".scn")," file contains the scene definition. Every scene is made up of apps. Apps can be a 3D model or some other object. Objects' definitions contain some of these listed types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u2013 possible types are: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/light")," \u2013 for object light "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/rendersettings")," \u2013 used for definition of post-processing effects "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/group")," \u2013 used for grouping objects. If we don't define type, default is 3D object  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," \u2013 custom object definition for different type of object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_url")," \u2013 loading point for a complex object defined with ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js"),", or local/remote path for ",(0,r.kt)("inlineCode",{parentName:"li"},".glb")," / ",(0,r.kt)("inlineCode",{parentName:"li"},".vrm")," / ",(0,r.kt)("inlineCode",{parentName:"li"},".vox")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position")," \u2013 x,y,z position in scene"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quaternion")," \u2013 x,y,z,w quaternion rotation in scene"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale")," \u2013 x,y,z object scale"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dynamic")," \u2013 (true/false) loading is dynamic or not"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"physics")," \u2013 (true/false) should object have physics enabled")),(0,r.kt)("p",null,"This is an example with a simple scene. It has only two lights and two 3D objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "objects": [\n        {\n            "type": "application/light",\n            "content": {\n                "lightType": "ambient",\n                "args": [[255,255,255], 2]\n            }\n        },\n        {\n            "type": "application/light",\n            "content": {\n                "lightType": "directional",\n                "args": [[255,255,255], 2],\n                "position": [1,2,3]\n            }\n        },\n        {\n            "position": [0,0,0],\n            "start_url": "https://webaverse.github.io/classroom/"\n        },\n        {\n            "position": [1,2, -4.5],\n            "quaternion": [0,0,0,1],\n            "scale": [3,3,3],\n            "start_url": "https://https-vrchat-com.proxy.webaverse.com/"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"From this example we can see that we can set light type inside a content section."),(0,r.kt)("p",null,"Other parameters for lights are [","[R, G, B]",", Intensity] where RGB represents RGB color components.\n",(0,r.kt)("inlineCode",{parentName:"p"},"start_url")," is a remote location in this case. That location should provide a .metaversefile as a starting point for object loading. Local location would look like this ",(0,r.kt)("inlineCode",{parentName:"p"},'"start_url": "/classroom/"')),(0,r.kt)("p",null,"Next we have an example of post-processing settings for a scene."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "objects": [\n        {\n            "type": "application/rendersettings",\n            "content": {\n                "background": {\n                    "color": [0,0,0]\n                },\n                "fog": {\n                    "fogType": "exp",\n                    "args": [[2.52, 1.74, 3.88], 0.1]\n                },\n                "ssao": {\n                    "kernelRadius": 16,\n                    "minDistance": 0.005,\n                    "maxDistance": 0.1\n                },\n                "dof": {\n                    "focus": 3.0,\n                    "aperture": 0.00002,\n                    "maxblur": 0.005\n                },\n                "hdr": {\n                    "adaptive": true,\n                    "resolution": 256,\n                    "adaptionRate": 100,\n                    "maxLuminance": 10,\n                    "minLuminance": 0,\n                    "middleGrey": 3\n                },\n                "bloom": {\n                    "strength": 0.2,\n                    "radius": 0.5,\n                    "threshold": 0.8\n                }\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"With those setting we can define:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"background")," \u2013 background color"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fog")," \u2013 scene fog"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssao")," - Screen space ambient occlusion"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dof")," - Depth of field"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hdr")," \u2013 High Dynamic Range imaging"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bloom")," \u2013 Bloom effect")),(0,r.kt)("p",null,"For further reading please take a look at existing scenes here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webaverse/app/tree/master/scenes"},"https://github.com/webaverse/app/tree/master/scenes")),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);