(()=>{var e={};e.id=776,e.ids=[776],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},59995:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c});var t=a(67096),r=a(16132),l=a(37284),i=a.n(l),n=a(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(s,o);let c=["",{children:["(pages)",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,21755)),"/home/hubert/projects/mojachatka/client/homez/src/app/(pages)/contact/page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,44553)),"/home/hubert/projects/mojachatka/client/homez/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/home/hubert/projects/mojachatka/client/homez/src/app/(pages)/contact/page.js"],m="/(pages)/contact/page",h={require:a,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(pages)/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},85613:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,88469,23)),Promise.resolve().then(a.t.bind(a,67490,23)),Promise.resolve().then(a.bind(a,7982)),Promise.resolve().then(a.bind(a,23349))},7982:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x});var t=a(53854),r=a(75065),l=a(93175),i=a(32100),n=a(41956),o=a.n(n),c=a(75548),d=a.n(c),m=a(34218),h=a(14241);let x=()=>{let[e,s]=(0,m.useState)(!1),a=(0,h.Z)(),n=()=>{window?.scrollY>=10?s(!0):s(!1)};return(0,m.useEffect)(()=>(window?.addEventListener("scroll",n),()=>{window?.removeEventListener("scroll",n)}),[]),(0,t.jsxs)(t.Fragment,{children:[t.jsx("header",{className:`header-nav nav-homepage-style light-header menu-home4 main-menu ${e?"sticky slideInDown animated":""}`,children:t.jsx("nav",{className:"posr",children:t.jsx("div",{className:"container posr menu_bdrt1",children:(0,t.jsxs)("div",{className:"row align-items-center justify-content-between",children:[t.jsx("div",{className:"col-auto",children:(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,t.jsxs)("div",{className:"logos mr40",children:[t.jsx(d(),{className:"header-logo logo1",href:"/",children:t.jsx(o(),{width:138,height:44,src:"/images/header-logo2.svg",alt:"Header Logo"})}),t.jsx(d(),{className:"header-logo logo2",href:"/",children:t.jsx(o(),{width:138,height:44,src:"/images/header-logo2.svg",alt:"Header Logo"})})]}),t.jsx(r.Z,{})]})}),t.jsx("div",{className:"col-auto",children:(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[a?(0,t.jsxs)(d(),{href:"/dashboard-home",className:"login-info d-flex align-items-center",children:[t.jsx("i",{className:"far fa-user-circle fz16 me-2"})," ",t.jsx("span",{className:"d-none d-xl-block",children:`Witaj ${a?.username}`})]}):(0,t.jsxs)("a",{href:"#",className:"login-info d-flex align-items-cente","data-bs-toggle":"modal","data-bs-target":"#loginSignupModal",role:"button",children:[t.jsx("i",{className:"far fa-user-circle fz16 me-2"})," ",t.jsx("span",{className:"d-none d-xl-block",children:"Logowanie / Rejestracja"})]}),(0,t.jsxs)(d(),{className:"ud-btn btn-white add-property bdrs60 mx-2 mx-xl-4",href:"/dashboard-add-property",children:["Dodaj ogłoszenie",t.jsx("i",{className:"fal fa-arrow-right-long"})]}),t.jsx("a",{className:"sidemenu-btn filter-btn-right",href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#SidebarPanel","aria-controls":"SidebarPanelLabel"})]})})]})})})}),t.jsx("div",{className:"signup-modal",children:t.jsx("div",{className:"modal fade",id:"loginSignupModal",tabIndex:-1,"aria-labelledby":"loginSignupModalLabel","aria-hidden":"true",children:t.jsx("div",{className:"modal-dialog  modal-dialog-scrollable modal-dialog-centered",children:t.jsx(i.Z,{})})})}),t.jsx("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"SidebarPanel","aria-labelledby":"SidebarPanelLabel",children:t.jsx(l.Z,{})})]})}},14241:(e,s,a)=>{"use strict";a.d(s,{Z:()=>i});var t=a(70039),r=a(15717),l=a(34218);function i({reload:e}={reload:!1}){let[s,a]=(0,l.useState)((0,r.Z)(e=>e.user));return e&&t.default.getProfile().then(e=>{a(e.body.user)}),s}},21755:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var t=a(4656),r=a(40165),l=a(73440),i=a(55541),n=a(76775);a(3542);let o=()=>t.jsx("form",{className:"form-style1",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-lg-12",children:(0,t.jsxs)("div",{className:"mb20",children:[t.jsx("label",{className:"heading-color ff-heading fw600 mb10",children:"First Name"}),t.jsx("input",{type:"text",className:"form-control",placeholder:"Your Name",required:!0})]})}),t.jsx("div",{className:"col-lg-12",children:(0,t.jsxs)("div",{className:"mb20",children:[t.jsx("label",{className:"heading-color ff-heading fw600 mb10",children:"Last Name"}),t.jsx("input",{type:"text",className:"form-control",placeholder:"Your Name",required:!0})]})}),t.jsx("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"mb20",children:[t.jsx("label",{className:"heading-color ff-heading fw600 mb10",children:"Email"}),t.jsx("input",{type:"email",className:"form-control",placeholder:"Your Name",required:!0})]})}),t.jsx("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"mb10",children:[t.jsx("label",{className:"heading-color ff-heading fw600 mb10",children:"Textarea"}),t.jsx("textarea",{cols:30,rows:4,placeholder:"There are many variations of passages.",defaultValue:"",required:!0})]})}),t.jsx("div",{className:"col-md-12",children:t.jsx("div",{className:"d-grid",children:(0,t.jsxs)("button",{type:"submit",className:"ud-btn btn-thm",children:["Submit",t.jsx("i",{className:"fal fa-arrow-right-long"})]})})})]})});var c=a(58639),d=a.n(c);let m=()=>t.jsx(t.Fragment,{children:[{id:1,city:"Paris",icon:"/images/icon/paris.svg",address:"1301 2nd Ave, Seattle, WA 98101",phoneNumber:"(315) 905-2321"},{id:2,city:"London",icon:"/images/icon/london.svg",address:"1301 2nd Ave, Seattle, WA 98101",phoneNumber:"(315) 905-2321"},{id:3,city:"New York",icon:"/images/icon/new-york.svg",address:"1301 2nd Ave, Seattle, WA 98101",phoneNumber:"(315) 905-2321"}].map(e=>t.jsx("div",{className:"col-sm-6 col-lg-4",children:(0,t.jsxs)("div",{className:"iconbox-style8 text-center",children:[t.jsx("div",{className:"icon",children:t.jsx(d(),{width:120,height:120,src:e.icon,alt:"icon"})}),(0,t.jsxs)("div",{className:"iconbox-content",children:[t.jsx("h4",{className:"title",children:e.city}),t.jsx("p",{className:"text mb-1",children:e.address}),t.jsx("h6",{className:"mb10",children:e.phoneNumber}),t.jsx("a",{className:"text-decoration-underline",href:"#",children:"Open Google Map"})]})]})},e.id))}),h=()=>(0,t.jsxs)(t.Fragment,{children:[t.jsx(l.ZP,{}),t.jsx(n.ZP,{}),t.jsx("section",{className:"p-0",children:t.jsx("iframe",{className:"home8-map contact-page",loading:"lazy",src:"https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near",title:"London Eye, London, United Kingdom","aria-label":"London Eye, London, United Kingdom"})}),t.jsx("section",{children:t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"row d-flex align-items-end",children:[t.jsx("div",{className:"col-lg-5 position-relative",children:(0,t.jsxs)("div",{className:"home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white",children:[t.jsx("h4",{className:"form-title mb25",children:"Have questions? Get in touch!"}),t.jsx(o,{})]})}),(0,t.jsxs)("div",{className:"col-lg-5 offset-lg-2",children:[(0,t.jsxs)("h2",{className:"mb30 text-capitalize",children:["We’d love to hear ",t.jsx("br",{className:"d-none d-lg-block"}),"from you."]}),t.jsx("p",{className:"text",children:"We are here to answer any question you may have. As a partner of corporates, realton has more than 9,000 offices of all sizes and all potential of session."})]})]})})}),t.jsx("section",{className:"pt0 pb90 pb10-md",children:(0,t.jsxs)("div",{className:"container",children:[t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-lg-6 m-auto","data-aos":"fade-up","data-aos-delay":"300",children:(0,t.jsxs)("div",{className:"main-title text-center",children:[t.jsx("h2",{className:"title",children:"Visit Our Office"}),t.jsx("p",{className:"paragraph",children:"Realton has more than 9,000 offices of all sizes and all potential of session."})]})})}),t.jsx("div",{className:"row","data-aos":"fade-up","data-aos-delay":"100",children:t.jsx(m,{})})]})}),t.jsx(r.Z,{}),t.jsx("section",{className:"footer-style1 pt60 pb-0",children:t.jsx(i.Z,{})})]})},40165:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});var t=a(4656),r=a(58639),l=a.n(r),i=a(24353),n=a.n(i);let o=()=>t.jsx("section",{className:"our-cta pt0",children:(0,t.jsxs)("div",{className:"cta-banner bgc-f7 mx-auto maxw1600 pt120 pt60-md pb120 pb60-md bdrs12 position-relative mx20-lg",children:[t.jsx("div",{className:"img-box-5",children:t.jsx(l(),{width:193,height:193,className:"img-1 spin-right",src:"/images/about/element-1.png",alt:"spinner"})}),t.jsx("div",{className:"img-box-6",children:t.jsx(l(),{width:193,height:193,className:"img-1 spin-left",src:"/images/about/element-1.png",alt:"spinner"})}),t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[t.jsx("div",{className:"col-lg-7 col-xl-6 ","data-aos":"fade-right",children:(0,t.jsxs)("div",{className:"cta-style1",children:[t.jsx("h2",{className:"cta-title",children:"Potrzebujesz pomocy? Skontaktuj się z naszymi ekspertami."}),t.jsx("p",{className:"cta-text mb-0",children:"Napisz lub zadzwoń do naszych ekspert\xf3w."})]})}),t.jsx("div",{className:"col-lg-5 col-xl-6 ","data-aos":"fade-left",children:(0,t.jsxs)("div",{className:"cta-btns-style1 d-block d-sm-flex align-items-center justify-content-lg-end",children:[(0,t.jsxs)(n(),{href:"#",className:"ud-btn btn-transparent mr30 mr0-xs",children:["Napisz do nas",t.jsx("i",{className:"fal fa-arrow-right-long"})]}),(0,t.jsxs)(n(),{href:"#",className:"ud-btn btn-dark",children:[t.jsx("span",{className:"flaticon-call vam pe-2"}),"+48 789 857 202"]})]})})]})})]})})},73440:(e,s,a)=>{"use strict";a.d(s,{ZP:()=>o});var t=a(95153);let r=(0,t.createProxy)(String.raw`/home/hubert/projects/mojachatka/client/homez/src/components/common/DefaultHeader.js`),{__esModule:l,$$typeof:i}=r,n=r.default,o=n}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[576,146,839,323,16,559,690,971,866,455],()=>a(59995));module.exports=t})();