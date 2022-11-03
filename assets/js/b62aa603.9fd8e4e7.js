"use strict";(self.webpackChunkWebaverse=self.webpackChunkWebaverse||[]).push([[8403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"ethereum-bot-quickstart",title:"Ethereum Bot Quick Start"},l="Ethereum Bot - Quick Start Guide",u={unversionedId:"engineering/bot/ethereum-bot-quickstart",id:"engineering/bot/ethereum-bot-quickstart",title:"Ethereum Bot Quick Start",description:"Introduction",source:"@site/docs/engineering/bot/ethereum-bot.md",sourceDirName:"engineering/bot",slug:"/engineering/bot/ethereum-bot-quickstart",permalink:"/engineering/bot/ethereum-bot-quickstart",draft:!1,tags:[],version:"current",frontMatter:{id:"ethereum-bot-quickstart",title:"Ethereum Bot Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts Integration Module",permalink:"/engineering/blockchain/smart-contracts-integration"},next:{title:"IPFS Backend Quick Start",permalink:"/engineering/ipfs/ipfs-backend-quickstart"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Quick Start Basics",id:"quick-start-basics",level:2},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Add to your server",id:"add-to-your-server",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethereum-bot---quick-start-guide"},"Ethereum Bot - Quick Start Guide"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32600939/120109432-70841b00-c137-11eb-844e-e008430a20ac.png",alt:"image"})),(0,a.kt)("p",null,"The Webaverse Bot utilizes an Ethereum sidechain to make it easy to create and trade NFTs for free inside Discord."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generates a wallet for everyone in the server for free"),(0,a.kt)("li",{parentName:"ul"},"Ability to import / export private keys"),(0,a.kt)("li",{parentName:"ul"},"Bring your inventory to other servers with the bot"),(0,a.kt)("li",{parentName:"ul"},"Redeem unlockable discord roles with a NFT"),(0,a.kt)("li",{parentName:"ul"},"Mint NFTs of different file types with drag and drop"),(0,a.kt)("li",{parentName:"ul"},"Trade and transfer NFTs + Fungible tokens in server"),(0,a.kt)("li",{parentName:"ul"},"Add unlockable content to NFTs"),(0,a.kt)("li",{parentName:"ul"},"Pack fungible tokens inside the NFTs"),(0,a.kt)("li",{parentName:"ul"},"Login to the dashboard and virtual world with a command"),(0,a.kt)("li",{parentName:"ul"},"Transfer NFTs to other chains like Ethereum / Polygon from web dashboard")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32600939/120109771-dfae3f00-c138-11eb-9077-9b86d23fbbe3.png",alt:"image"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User joins a Discord server that has the NFT bot, gets an Ethereum address (",(0,a.kt)("inlineCode",{parentName:"li"},".address")," to verify)"),(0,a.kt)("li",{parentName:"ol"},"The user uploads files with ",(0,a.kt)("inlineCode",{parentName:"li"},".mint")," as the comment (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN)"),(0,a.kt)("li",{parentName:"ol"},"The file uploads to IPFS, Webaverse runs its own pinning server."),(0,a.kt)("li",{parentName:"ol"},"The IPFS hash is used as the asset URI when minting the token onto the Webaverse sidechain")),(0,a.kt)("p",null,"After minting, the preview server generates a screenshot of 3d models, animated webm for avatars, and playing card version of the token that's viewable with the .preview command."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"quick-start-basics"},(0,a.kt)("a",{parentName:"h2",href:"../quick-start-basics"},"Quick Start Basics")),(0,a.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n**Root**\n\n\u251c\u2500\u2500\u2500 index.js <--- Main Application Logic Resides Here\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"add-to-your-server"},"Add to your server"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot"},"Invite the Webaverse bot to your server")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);