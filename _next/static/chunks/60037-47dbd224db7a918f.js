(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60037],{19749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,a=r(92648).Z,n=r(91598).Z,o=r(17273).Z,l=n(r(67294)),s=a(r(83121)),c=r(2675),d=r(10139),u=r(28730);r(57238);var f=a(r(89824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist(){},preventDefault(){n=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:n,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:h,loading:m,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:E,onLoadingCompleteRef:z,onLoad:C,onError:S}=e,j=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},j,r,{width:n,height:a,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:m,style:i({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,v,E,z,b))},[v,E,z,S,b,t]),onLoad(e){let t=e.currentTarget;p(t,v,E,z,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===h&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),S&&S(e)}})))}),w=l.forwardRef((e,t)=>{let r,a;var n,{src:p,sizes:w,unoptimized:b=!1,priority:y=!1,loading:E,className:z,quality:C,width:S,height:j,fill:x,style:_,onLoad:R,onLoadingComplete:k,placeholder:O="empty",blurDataURL:I,layout:P,objectFit:M,objectPosition:L,lazyBoundary:N,lazyRoot:A}=e,B=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(u.ImageConfigContext),V=l.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[D]),W=B,Z=W.loader||f.default;if(delete W.loader,"__next_img_default"in Z){if("custom"===V.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=Z;Z=e=>{let{config:t}=e,r=o(e,["config"]);return F(r)}}if(P){"fill"===P&&(x=!0);let T={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];T&&(_=i({},_,T));let q={responsive:"100vw",fill:"100vw"}[P];q&&!w&&(w=q)}let G="",H=m(S),U=m(j);if("object"==typeof(n=p)&&(h(n)||void 0!==n.src)){let J=h(p)?p.default:p;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,a=J.blurHeight,I=I||J.blurDataURL,G=J.src,!x){if(H||U){if(H&&!U){let $=H/J.width;U=Math.round(J.height*$)}else if(!H&&U){let K=U/J.height;H=Math.round(J.width*K)}}else H=J.width,U=J.height}}let Q=!y&&("lazy"===E||void 0===E);((p="string"==typeof p?p:G).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,Q=!1),V.unoptimized&&(b=!0);let X=m(C),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:L}:{},{color:"transparent"},_),ee="blur"===O&&I?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:U,blurWidth:r,blurHeight:a,blurDataURL:I}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:n,sizes:o,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=n.exec(r);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:a.filter(e=>e>=i[0]*s),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[d]})}}({config:V,src:p,unoptimized:b,width:H,quality:X,sizes:w,loader:Z}),er=p,ei={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:W.crossOrigin},ea=l.useRef(R);l.useEffect(()=>{ea.current=R},[R]);let en=l.useRef(k);l.useEffect(()=>{en.current=k},[k]);let eo=i({isLazy:Q,imgAttributes:et,heightInt:U,widthInt:H,qualityInt:X,className:z,imgStyle:Y,blurStyle:ee,loading:E,config:V,fill:x,unoptimized:b,placeholder:O,loader:Z,srcString:er,onLoadRef:ea,onLoadingCompleteRef:en},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:n}=e,o=i||t,l=a||r,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},89824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(83121)},25675:function(e,t,r){e.exports=r(19749)},11163:function(e,t,r){e.exports=r(80880)},82847:function(e,t,r){"use strict";var i=r(67294);let a=i.forwardRef(function({title:e,titleId:t,...r},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",clipRule:"evenodd"}))});t.Z=a},55851:function(e,t,r){"use strict";var i=r(67294);let a=i.forwardRef(function({title:e,titleId:t,...r},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))});t.Z=a}}]);