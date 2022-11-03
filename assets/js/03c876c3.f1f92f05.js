"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[2715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],s={id:"multiplayer-overview",title:"Multiplayer Overview"},o=void 0,p={unversionedId:"engineering/multiplayer/multiplayer-overview",id:"engineering/multiplayer/multiplayer-overview",title:"Multiplayer Overview",description:"Some notes on the current state of multiplayer development, as well as some quick what-you-need-to-know to get started with developing for multiplayer",source:"@site/docs/engineering/multiplayer/multiplayer-overview.md",sourceDirName:"engineering/multiplayer",slug:"/engineering/multiplayer/multiplayer-overview",permalink:"/engineering/multiplayer/multiplayer-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"multiplayer-overview",title:"Multiplayer Overview"},sidebar:"tutorialSidebar",previous:{title:"Grave's Notes - Unsorted",permalink:"/engineering/miscellaneous/graves-notes-unsorted"},next:{title:"Multiplayer Stack Flow",permalink:"/engineering/multiplayer/multiplayer-stack-flow"}},c={},u=[{value:"What can I do in multiplayer?",id:"what-can-i-do-in-multiplayer",level:2},{value:"Important Files",id:"important-files",level:2},{value:"Where do I start?",id:"where-do-i-start",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"CRDTs",id:"crdts",level:4},{value:"Websockets, WebRTC and WSRTC",id:"websockets-webrtc-and-wsrtc",level:4},{value:"Multiplayer-Related Packages",id:"multiplayer-related-packages",level:2},{value:"zjs",id:"zjs",level:4},{value:"wsrtc",id:"wsrtc",level:4},{value:"totum / metaversefile",id:"totum--metaversefile",level:4},{value:"Development",id:"development",level:2},{value:"Player Controllers",id:"player-controllers",level:4},{value:"Apps",id:"apps",level:4}],d={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Some notes on the current state of multiplayer development, as well as some quick what-you-need-to-know to get started with developing for multiplayer"),(0,l.kt)("h2",{id:"what-can-i-do-in-multiplayer"},"What can I do in multiplayer?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jump seamlessly between single and multiplayer"),(0,l.kt)("li",{parentName:"ul"},"Switch my avatar, either from an avatar in the world or from the menus"),(0,l.kt)("li",{parentName:"ul"},"Speak with my voice"),(0,l.kt)("li",{parentName:"ul"},"Switch my voice pack and voice engine"),(0,l.kt)("li",{parentName:"ul"},"Have my character's mouth respond to my voice with mouth movement"),(0,l.kt)("li",{parentName:"ul"},"Change my name, and see other user's names as a nameplate over their head"),(0,l.kt)("li",{parentName:"ul"},"Chat, and have my character speak whatever I chat"),(0,l.kt)("li",{parentName:"ul"},"Drop items into the world and use them"),(0,l.kt)("li",{parentName:"ul"},"Drop pets and vehicles into the world and activate them"),(0,l.kt)("li",{parentName:"ul"},"Pick up weapons and damage mobs"),(0,l.kt)("li",{parentName:"ul"},"Die and respawn at current world spawn point")),(0,l.kt)("h2",{id:"important-files"},"Important Files"),(0,l.kt)("p",null,"The important, high-touch documents for multiplayer are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"avatars/avatars.js"),(0,l.kt)("li",{parentName:"ul"},"app-manager.js"),(0,l.kt)("li",{parentName:"ul"},"character-controller.js"),(0,l.kt)("li",{parentName:"ul"},"chat-manager.js"),(0,l.kt)("li",{parentName:"ul"},"players-manager.js"),(0,l.kt)("li",{parentName:"ul"},"webaverse.js"),(0,l.kt)("li",{parentName:"ul"},"universe.js"),(0,l.kt)("li",{parentName:"ul"},"world.js")),(0,l.kt)("h2",{id:"where-do-i-start"},"Where do I start?"),(0,l.kt)("p",null,"The main entrypoint to the Webaverse app is the Webaverse class in webaverse.js -- this is where everything gets set up and the main loop starts. The world, local and remote players are updated from here."),(0,l.kt)("p",null,"Multiplayer starts from enterWorld in ",(0,l.kt)("strong",{parentName:"p"},"universe.js")),(0,l.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,l.kt)("h4",{id:"crdts"},"CRDTs"),(0,l.kt)("p",null,"Webaverse is a peer-authoratative system. Objects in the world can be moved and manipulated by peers, and these changes will be reflected by the server out to other peers. It is simple in theory, but in practice this can potentially lead to conflicts where peers don't agree on where something is, or ",(0,l.kt)("em",{parentName:"p"},"what")," it is."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Conflict-free replicated data types")," or CRDTs are a set of data structures which can be merged in such a way that any inconsistencies are eventually resolved, and all peers will have the same document state. Additional reading can be found here:\n",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"},"Conflict-free_replicated_data_type")),(0,l.kt)("h4",{id:"websockets-webrtc-and-wsrtc"},"Websockets, WebRTC and WSRTC"),(0,l.kt)("p",null,"Previously, Webaverse used a server-authoritative WebRTC implementation for voice and data. However, this has significant scalability issues and was generally not fun to work with. The current implementation uses pure WebSockets. In the future we will adopt WebTransport and turn on AV1 and WebCodecs once they are well-supported in Safari and Firefox."),(0,l.kt)("h2",{id:"multiplayer-related-packages"},"Multiplayer-Related Packages"),(0,l.kt)("h4",{id:"zjs"},"zjs"),(0,l.kt)("p",null,"zjs is a purpose-built API-compatible clone of yjs for multiplayer realtime games. Most of the concepts and documentation for yjs applies, so please read before attempting to work on the multiplayer."),(0,l.kt)("p",null,"The TL;DR is that zjs is a CRDT-backed document store. When changes to the Doc object occur, zjs will handle any conflicts and then send change events with the final state at that moment to all connected clients."),(0,l.kt)("p",null,'Any object in Webaverse which has a bound state -- players, app managers and tracked apps -- will be subscribed to these change events. This is done using the "observer" pattern, and zjs maps and arrays are observable objects.'),(0,l.kt)("h4",{id:"wsrtc"},"wsrtc"),(0,l.kt)("p",null,"Actual socket communication is handled by wsrtc, another webaverse project, which moves app data and voice packets over websockets. wsrtc is heavily bound to zjs. Messages received from peers are passed into the server's own zjs instance, where conflicts are handled and final state is passed back out to peers."),(0,l.kt)("p",null,"An important note about wsrtc is that this will eventually be replaced with redis or a similar distribute key-value store and possibly phased out entirely."),(0,l.kt)("h4",{id:"totum--metaversefile"},"totum / metaversefile"),(0,l.kt)("p",null,"Totum (formerly metaversefile, and still called this everywhere) is an API for Webaverse to load composable apps and for said apps to communicate with the Webaverse core. The metaversefileApi contains useful helper functions for initializing and interacting with metaverse apps, or for getting important core data into those apps. A good example would be accessing the local player's app manager, or checking if the scene is loaded."),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("h4",{id:"player-controllers"},"Player Controllers"),(0,l.kt)("p",null,"The character-controller.js file holds the LocalPlayer, RemotePlayer and the Player base class. Everything related to character state, including transform, movement, actions, wearing, etc is here. NPCs are also a type of player"),(0,l.kt)("p",null,"The actual visual avatar display is largely handled by the Avatars class in the avatars/avatars.js file. The character controller sets the velocity of it's avatar class instance, which then handles the animation update."),(0,l.kt)("p",null,'Player objects are held in the PlayersManager class in players-manager.js, this is initialized when the client connects to a room. The PlayersManager object is a zjs map of player objects, which are also zjs maps, containing component information that might change. Players sync most things via "actions", but also have information like name, instance ID and their chosen voice engine and voice pack.'),(0,l.kt)("p",null,"Player objects have a playerId, and are stored in the playersArray of the PlayersManager class instance"),(0,l.kt)("p",null,"The instanceId of the avatar can be found inside the player map's avatar key, or through calling CharacterController.getAvatarState()"),(0,l.kt)("h4",{id:"apps"},"Apps"),(0,l.kt)("p",null,"The AppManager class (app-manager.js) handles setting up, tearing down and updating apps. Apps can be avatars, wearables, buildings, anything that lives in the world with the player. All AppManagers are bound to state, which can be local or networked. world.connectState sets up all of the AppManager bindings locally, while world.connectRoom sets up the bindings globally."),(0,l.kt)("p",null,"When an app is loaded, it is bound to a map or array in zjs. Each app has an instanceId, which is a 5-digit alphanumeric hash. The instanceId of an object on one client should match the next."),(0,l.kt)("p",null,"The instanceId is a useful key for getting the app. Each app has a list of components, a contentId and an instanceId (which should be unique)."))}h.isMDXComponent=!0}}]);