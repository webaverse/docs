"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[2975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,u=f["".concat(s,".").concat(m)]||f[m]||h[m]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"architecture",title:"Architecture Overview"},s=void 0,c={unversionedId:"developer/architecture",id:"developer/architecture",title:"Architecture Overview",description:"View miro//miro.com/app/board/o9J_lbA81ag=/",source:"@site/docs/developer/architecture.md",sourceDirName:"developer",slug:"/developer/architecture",permalink:"/developer/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture Overview"},sidebar:"tutorialSidebar",previous:{title:"Mint Avatar Wearables",permalink:"/create/wearables"},next:{title:"Create An XRPackage",permalink:"/developer/creating-an-xrpk"}},p={},h=[{value:"Minting Flow",id:"minting-flow",level:2},{value:"Transfer Flow",id:"transfer-flow",level:2},{value:"Loading Flow",id:"loading-flow",level:2},{value:"Preview Flow",id:"preview-flow",level:2}],f={toc:h};function m(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"View miro: ",(0,i.kt)("a",{parentName:"p",href:"https://miro.com/app/board/o9J_lbA81ag=/"},"https://miro.com/app/board/o9J_lbA81ag=/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/ethereum-bot"},"https://github.com/webaverse/ethereum-bot")," -- discord client"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/app"},"https://github.com/webaverse/app")," -- front end game app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/api-backend"},"https://github.com/webaverse/api-backend")," -- API backend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/redis-server"},"https://github.com/webaverse/redis-server")," -- Redis server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/ipfs-backend"},"https://github.com/webaverse/ipfs-backend")," -- IPFS server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webaverse/contracts"},"https://github.com/webaverse/contracts")," -- contracts and deployment with truffle")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"minting-flow"},"Minting Flow"),(0,i.kt)("p",null,"This is what happens when a user uploads a file to a Webaverse interface be minted as a NFT."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User logs into website through Metamask, Discord, or Email or joins a Discord server with the NFT bot."),(0,i.kt)("li",{parentName:"ol"},"Uploads files to minting interface (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN)"),(0,i.kt)("li",{parentName:"ol"},"The content uploads to IPFS. Webaverse runs its own pinning server.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8512).Z,width:"1716",height:"582"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(9046).Z},"Link to vertical view")),(0,i.kt)("p",null,"After minting, the preview server captures a preview of the NFT and generates a trading card format. To learn more see ",(0,i.kt)("a",{parentName:"p",href:"./preview-flow"},"preview flow"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"transfer-flow"},"Transfer Flow"),(0,i.kt)("p",null,"This is what happens when you want to transfer a NFT from the sidechain over to other blockchains like Polygon (previously Matic) and Ethereum mainnet."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Start with NFT that's on the Webaverse sidechain in your inventory"),(0,i.kt)("li",{parentName:"ol"},'Hit "Current Location" to go to transfer menu, for this example can select Polygon'),(0,i.kt)("li",{parentName:"ol"},"Transfer will call the Deposit() function on the smart contract to the sidechain"),(0,i.kt)("li",{parentName:"ol"},"Get back transaction hash, Signing Oracle will say whether some fact of it is true or false"),(0,i.kt)("li",{parentName:"ol"},"Whatever answer is, will signs off on that fact with ECDSA signature"),(0,i.kt)("li",{parentName:"ol"},"The smart contract will then call Withdraw() to Polygon Network"),(0,i.kt)("li",{parentName:"ol"},"The item will now be visible on ",(0,i.kt)("a",{parentName:"li",href:"https://opensea.io"},"Opensea.io")," with the Matic tag")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1078).Z,width:"2153",height:"464"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(6917).Z},"Link to vertical view")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"loading-flow"},"Loading Flow"),(0,i.kt)("p",null,"This flow describes how the engine accesses and loads tokens. The loading and preview flow are both quite similar to each other, main difference being one loads in client for users while the other loads in a server for capturing preview media."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Starts with the user-agent (Webaverse website or NFT Discord bot) that wants token data."),(0,i.kt)("li",{parentName:"ol"},"Client request a token json which intiates sidechain sending token events to the Redis server."),(0,i.kt)("li",{parentName:"ol"},"The API server sends the token json containing an IPFS hash to the files"),(0,i.kt)("li",{parentName:"ol"},"The IPFS hash is extracted from the token json to the IPFS server"),(0,i.kt)("li",{parentName:"ol"},"The raw files linked from the IPFS hash (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN) get loaded into the interface (virtual world, Opensea).")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7823).Z,width:"1821",height:"548"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(5954).Z},"Link to vertical view")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"preview-flow"},"Preview Flow"),(0,i.kt)("p",null,"The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Start with user-agent (website or Discord bot) requesting a preview image."),(0,i.kt)("li",{parentName:"ol"},"Request gets sent to the preview server, checks S3 cache if there's a preview already."),(0,i.kt)("li",{parentName:"ol"},"If there's no preview, the server will ask the API about the token and fetch the IPFS content"),(0,i.kt)("li",{parentName:"ol"},"The files from the IPFS hash get rendered using Puppeteer, exported as previews.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(403).Z,width:"1308",height:"764"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(8273).Z},"Link to vertical view")))}m.isMDXComponent=!0},5954:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/loading-flow2-24a971703e8dc25ef90a2afe8a3f27f1.jpg"},9046:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/minting-flow2-62674ed5edf40c2f47f5242c7ea3b543.jpg"},8273:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/preview-flow2-c34438e821e7ee2ca4faf20b4b99cdc2.jpg"},6917:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/transfer-flow2-8af21aa4bfda9cf763595e821793ba1e.jpg"},7823:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/loading-flow-26453c7aee6752bec66d1a51a0824a64.jpg"},8512:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/minting-flow-97704b9c911cb8614c32ded5e4d95887.jpg"},403:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/preview-flow-d0335e01f5f36cf1a12ba51486b9abd7.jpg"},1078:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/transfer-flow-1f4fcfe2e1f01b0af5a961a8a6cd7fd4.jpg"}}]);