"use strict";exports.id=690,exports.ids=[690],exports.modules={58849:(e,t,i)=>{let{createProxy:r}=i(95153);e.exports=r("/home/hubert/projects/mojachatka/client/homez/node_modules/next/dist/client/image-component.js")},52300:(e,t,i)=>{let{createProxy:r}=i(95153);e.exports=r("/home/hubert/projects/mojachatka/client/homez/node_modules/next/dist/client/link.js")},4656:(e,t,i)=>{e.exports=i(67096).vendored["react-rsc"].ReactJsxRuntime},13144:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(99968);let r=i(51083),o=i(78684);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:m=!1,loading:g,className:h,quality:p,width:b,height:v,fill:w=!1,style:y,onLoad:x,onLoadingComplete:j,placeholder:_="empty",blurDataURL:S,fetchPriority:z,layout:P,objectFit:C,objectPosition:O,lazyBoundary:E,lazyRoot:I,...M}=e,{imgConf:k,showAltText:R,blurComplete:D,defaultLoader:A}=t,G=k||o.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let N=M.loader||A;delete M.loader,delete M.srcSet;let B="__next_img_default"in N;if(B){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if(P){"fill"===P&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let F="",L=s(b),W=s(v);if("object"==typeof(i=u)&&(n(i)||void 0!==i.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,F=e.src,!w){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let U=!m&&("lazy"===g||void 0===g);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),m&&(z="high");let V=s(p),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:O}:{},R?{}:{color:"transparent"},y),T=D||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:J.objectFit})+'")':'url("'+_+'")',q=T?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:n,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:n,width:l[u]})}}({config:a,src:u,unoptimized:f,width:L,quality:V,sizes:c,loader:N}),H={...M,loading:U?"lazy":g,fetchPriority:z,width:L,height:W,decoding:"async",className:h,style:{...J,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},$={unoptimized:f,priority:m,placeholder:_,fill:w};return{props:H,meta:$}}},51083:(e,t)=>{function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,a=r?40*r:t,l=o?40*o:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},78684:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},35234:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let r=i(95196),o=i(13144),n=i(99968),s=i(58849),a=r._(i(55542)),l=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},d=s.Image},55542:(e,t)=>{function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},99968:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},58639:(e,t,i)=>{e.exports=i(35234)},24353:(e,t,i)=>{e.exports=i(52300)}};