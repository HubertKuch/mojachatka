(()=>{var e={};e.id=509,e.ids=[509],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},43149:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>g,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=t(67096),a=t(16132),s=t(37284),o=t.n(s),l=t(32564),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(i,n);let c=["",{children:["(property)",{children:["(dashboard)",{children:["dashboard-my-favourites",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,80473)),"/home/hubert/projects/mojachatka/client/homez/src/app/(property)/(dashboard)/dashboard-my-favourites/page.js"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,44553)),"/home/hubert/projects/mojachatka/client/homez/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/home/hubert/projects/mojachatka/client/homez/src/app/(property)/(dashboard)/dashboard-my-favourites/page.js"],g="/(property)/(dashboard)/dashboard-my-favourites/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(property)/(dashboard)/dashboard-my-favourites/page",pathname:"/dashboard-my-favourites",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},76520:(e,i,t)=>{Promise.resolve().then(t.bind(t,46904))},46904:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>A});var r=t(53854),a=t(19625),s=t(23349),o=t(40018),l=t(81017),n=t(48767),c=t(66182),d=t(34218),g=t(87931),u=t(22251),p=t.n(u),f=t(41956),y=t.n(f),h=t(75548),m=t.n(h);let b=()=>{let[e,i]=(0,d.useState)(p().slice(0,8)),t=t=>{let r=e.filter(e=>e.id!==t);i(r)};return r.jsx(r.Fragment,{children:0===e.length?r.jsx("h3",{children:"No items available."}):e.map(e=>r.jsx("div",{className:"col-md-6 col-lg-4 col-xl-3",children:(0,r.jsxs)("div",{className:"listing-style1 style2",children:[(0,r.jsxs)("div",{className:"list-thumb",children:[r.jsx(y(),{width:382,height:248,className:"w-100 h-100 cover",src:e.image,alt:"listings"}),r.jsx("button",{className:"tag-del",title:"Delete Item",onClick:()=>t(e.id),style:{border:"none"},"data-tooltip-id":`delete-${e.id}`,children:r.jsx("span",{className:"fas fa-trash-can"})}),r.jsx(g.u,{id:`delete-${e.id}`,place:"left",content:"Delete"}),(0,r.jsxs)("div",{className:"list-price",children:[e.price," / ",r.jsx("span",{children:"mo"})]})]}),(0,r.jsxs)("div",{className:"list-content",children:[r.jsx("h6",{className:"list-title",children:r.jsx(m(),{href:`/single-v3/${e.id}`,children:e.title})}),r.jsx("p",{className:"list-text",children:e.location}),(0,r.jsxs)("div",{className:"list-meta d-flex align-items-center",children:[(0,r.jsxs)("a",{href:"#",children:[r.jsx("span",{className:"flaticon-bed"})," ",e.bed," bed"]}),(0,r.jsxs)("a",{href:"#",children:[r.jsx("span",{className:"flaticon-shower"})," ",e.bath," bath"]}),(0,r.jsxs)("a",{href:"#",children:[r.jsx("span",{className:"flaticon-expand"})," ",e.sqft," sqft"]})]}),r.jsx("hr",{className:"mt-2 mb-2"}),(0,r.jsxs)("div",{className:"list-meta2 d-flex justify-content-between align-items-center",children:[r.jsx("span",{className:"for-what",children:"For Rent"}),(0,r.jsxs)("div",{className:"icons d-flex align-items-center",children:[r.jsx("a",{href:"#",children:r.jsx("span",{className:"flaticon-fullscreen"})}),r.jsx("a",{href:"#",children:r.jsx("span",{className:"flaticon-new-tab"})}),r.jsx("a",{href:"#",children:r.jsx("span",{className:"flaticon-like"})})]})]})]})]})},e.id))})};var x=t(26212);let A=()=>((0,x.Z)(),(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{}),r.jsx(s.default,{}),r.jsx("div",{className:"dashboard_content_wrapper",children:(0,r.jsxs)("div",{className:"dashboard dashboard_wrapper pr30 pr0-xl",children:[r.jsx(c.Z,{}),(0,r.jsxs)("div",{className:"dashboard__main pl0-md",children:[(0,r.jsxs)("div",{className:"dashboard__content bgc-f7",children:[r.jsx("div",{className:"row pb40",children:r.jsx("div",{className:"col-lg-12",children:r.jsx(l.Z,{})})}),r.jsx("div",{className:"row align-items-center pb40",children:r.jsx("div",{className:"col-lg-12",children:(0,r.jsxs)("div",{className:"dashboard_title_area",children:[r.jsx("h2",{children:"My Favourites"}),r.jsx("p",{className:"text",children:"We are glad to see you again!"})]})})}),(0,r.jsxs)("div",{className:"row",children:[r.jsx(b,{}),r.jsx("div",{className:"col-xl-12",children:r.jsx("div",{className:"ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative",children:r.jsx("div",{className:"mt30",children:r.jsx(o.Z,{})})})})]})]}),r.jsx(n.Z,{})]})]})})]}))},22251:e=>{"use strict";e.exports=[{id:1,image:"/images/listings/g1-1.jpg",title:"Equestrian Family Home",city:"New York",location:"New York City, CA, USA",bed:"1",bath:"2",sqft:1200,price:"$14,000",forRent:!1,tags:["house","office"],propertyType:"Houses",yearBuilding:2018,featured:!0,lat:40.7279707552121,long:-74.07152705896405,features:["Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:2,image:"/images/listings/g1-2.jpg",title:"Luxury villa in Rego Park",city:"Los Angeles",location:"Los Angeles City, CA, USA",lat:34.1738017565271,long:-118.34227408812067,bed:"2",bath:"1",sqft:1300,price:"$82,000",propertyType:"Houses",yearBuilding:2017,forRent:!0,tags:["house","villa","apartments"],features:["Attic","Basketball court","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:3,image:"/images/listings/g1-3.jpg",title:"Equestrian Family Home",city:"Texas",location:"Texas City, CA, USA",lat:29.38690953884771,long:-94.91651439187791,bed:"3",bath:"3",sqft:1e3,price:"$14,000",propertyType:"Apartments",yearBuilding:2019,forRent:!1,tags:["house","apartments","house"],features:["Attic","Basketball court","Air Conditioning","Lawn","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:4,image:"/images/listings/g1-4.jpg",title:"Luxury villa in Rego Park",city:"New Jersey",location:"New Jersey City, CA, USA",lat:39.62158564223682,long:-80.15625432727268,bed:"4",bath:"5",sqft:1200,price:"$82,000",forRent:!0,propertyType:"Villa",yearBuilding:2017,tags:["villa","apartments","house"],featured:!0,features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:5,image:"/images/listings/g1-1.jpg",title:"Equestrian Family Home",city:"San Diego",location:"San Diego City, CA, USA",lat:32.71210927454257,long:-117.1392712537564,bed:"5",bath:"4",sqft:900,propertyType:"Office",yearBuilding:2016,price:"$14,000",forRent:!1,tags:["villa","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Refrigerator"]},{id:6,image:"/images/listings/g1-2.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"6",bath:"4",sqft:1200,price:"$82,000",propertyType:"Houses",yearBuilding:2017,forRent:!0,tags:["house","villa","office"],featured:!0,features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar"]},{id:7,image:"/images/listings/g1-3.jpg",title:"Equestrian Family Home",city:"San Francisco",location:"San Francisco City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"3",bath:"2",sqft:1212,price:"$14,000",forRent:!1,propertyType:"Apartments",yearBuilding:2020,tags:["house","apartments"],features:["Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:8,image:"/images/listings/g1-4.jpg",title:"Luxury villa in Rego Park",city:"New York",location:"New York City, CA, USA",lat:40.7279707552121,long:-74.07152705896405,bed:"4",bath:"4",propertyType:"Office",yearBuilding:2020,sqft:1200,price:"$82,000",forRent:!0,tags:["house","office"],featured:!0,features:["Attic","Basketball court","Air Conditioning","Lawn","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:9,image:"/images/listings/g4-9.jpg",title:"Luxury villa in Rego Park",city:"Los Angeles",location:"Los Angeles City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"2",bath:"3",sqft:1200,price:"$82,000",forRent:!0,propertyType:"Villa",yearBuilding:2017,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:10,image:"/images/listings/g4-10.jpg",title:"Luxury villa in Rego Park",city:"New Jersey",location:"New Jersey City, CA, USA",lat:39.62158564223682,long:-75.15625432727268,bed:"1",bath:"2",sqft:1205,price:"$82,000",forRent:!0,tags:["house","office"],featured:!0,propertyType:"Apartments",yearBuilding:2021,features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view"]},{id:11,image:"/images/listings/g4-11.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"5",propertyType:"Houses",yearBuilding:2021,bath:"4",sqft:1100,price:"$92,000",forRent:!0,tags:["house","office"],features:["Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:12,image:"/images/listings/g4-12.jpg",title:"Luxury villa in Rego Park",city:"San Diego",location:"San Diego City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"6",bath:"7",sqft:1400,price:"$92,000",propertyType:"Office",yearBuilding:2022,forRent:!0,tags:["house","office"],features:["Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:13,image:"/images/listings/xl-5.jpg",title:"Luxury villa in Rego Park",city:"San Francisco",location:"San Francisco City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"1",bath:"1",sqft:1e3,propertyType:"Villa",yearBuilding:2022,price:"$92,000",forRent:!0,featured:!0,tags:["house","office"],features:["Attic","Basketball court","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:14,image:"/images/listings/xl-7.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"7",bath:"6",sqft:1020,price:"$82,000",forRent:!0,propertyType:"Apartments",yearBuilding:2023,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:15,image:"/images/listings/xl-6.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"8",bath:"6",sqft:1200,price:"$82,000",propertyType:"Office",yearBuilding:2023,forRent:!0,featured:!0,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:16,image:"/images/listings/xl-5.jpg",title:"Luxury villa in Rego Park",city:"New York",location:"New York City, CA, USA",lat:40.7279707552121,long:-74.07152705896405,bed:"2",bath:"2",sqft:1200,price:"$82,000",forRent:!0,tags:["house","office"],propertyType:"Houses",yearBuilding:2018,features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar"]},{id:17,image:"/images/listings/map-h-1.jpg",title:"Luxury villa in Rego Park",city:"Texas",location:"Texas City, CA, USA",lat:29.38690953884771,long:-94.91651439187791,bed:"3",bath:"4",sqft:1200,price:"$82,000",forRent:!0,tags:["house","office"],propertyType:"Villa",yearBuilding:2018,features:["Attic","Basketball court","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:18,image:"/images/listings/map-h-2.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"4",bath:"4",sqft:1200,price:"$82,000",featured:!0,propertyType:"Office",yearBuilding:2019,forRent:!1,tags:["house","office"],features:["Attic","Basketball court","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:19,image:"/images/listings/map-h-3.jpg",title:"Luxury villa in Rego Park",city:"Los Angeles",location:"Los Angeles City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"5",bath:"4",sqft:1350,price:"$82,000",propertyType:"Apartments",yearBuilding:2018,forRent:!0,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Refrigerator"]},{id:20,image:"/images/listings/map-h-4.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"6",bath:"6",sqft:1400,price:"$82,000",forRent:!1,propertyType:"Houses",yearBuilding:2019,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Refrigerator"]},{id:21,image:"/images/listings/map-h-5.jpg",title:"Luxury villa in Rego Park",city:"New York",location:"New York City, CA, USA",lat:40.7279707552121,long:-74.07152705896405,bed:"7",bath:"6",sqft:1200,price:"$92,000",forRent:!0,propertyType:"Office",yearBuilding:2020,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Refrigerator"]},{id:22,image:"/images/listings/map-h-6.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"2",bath:"2",sqft:1200,price:"$82,000",forRent:!0,featured:!0,propertyType:"Villa",yearBuilding:2021,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","TV Cable","Dryer","Outdoor Shower","Washer","Front yard","Refrigerator"]},{id:23,image:"/images/listings/map-h-7.jpg",title:"Luxury villa in Rego Park",city:"New Jersey",location:"New Jersey City, CA, USA",lat:39.62158564223682,long:-75.15625432727268,bed:"3",bath:"3",sqft:1200,price:"$82,000",forRent:!1,featured:!0,propertyType:"Apartments",yearBuilding:2017,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:24,image:"/images/listings/map-h-8.jpg",title:"Luxury villa in Rego Park",city:"Los Angeles",location:"Los Angeles City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"4",bath:"4",sqft:1200,price:"$82,000",forRent:!0,propertyType:"Houses",yearBuilding:2016,tags:["house","office"],features:["Attic","Basketball court","TV Cable","Dryer","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]},{id:25,image:"/images/listings/map-h-9.jpg",title:"Luxury villa in Rego Park",city:"California",location:"California City, CA, USA",lat:32.740991655365605,long:-117.12965821740703,bed:"1",bath:"1",sqft:1e3,price:"$92,000",propertyType:"Office",yearBuilding:2016,forRent:!0,tags:["house","office"],features:["Attic","Basketball court","Air Conditioning","Lawn","Outdoor Shower","Washer","Lake view","Wine cellar","Front yard","Refrigerator"]}]},80473:(e,i,t)=>{"use strict";t.r(i),t.d(i,{$$typeof:()=>o,__esModule:()=>s,default:()=>n});var r=t(95153);let a=(0,r.createProxy)(String.raw`/home/hubert/projects/mojachatka/client/homez/src/app/(property)/(dashboard)/dashboard-my-favourites/page.js`),{__esModule:s,$$typeof:o}=a,l=a.default,n=l}};var i=require("../../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[576,146,839,323,894,76,971,898],()=>t(43149));module.exports=r})();