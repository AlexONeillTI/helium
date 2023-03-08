import{a as s,b as i}from"./jsx-runtime-9707e85d.js";import{c as a}from"./clsx.m-1229b3e0.js";const u=3,E=u*2+1,D=1,F=50,B=!1,T=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),G=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),O=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})}),V=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})}),W=(r,t)=>{const n=[];if(t===1)return n;if(t<=E){for(let e=1;e<=t;e++){const o=e;n.push({number:o,label:o,isActive:r===o,isFirst:e===1,isLast:e===t})}return n}if(r>=t-u){n.push({number:Math.max(r-5,1),label:"...",isFirst:!0});for(let e=t-5;e<=t;e++)n.push({number:e,label:e,isActive:r===e,isFirst:!1,isLast:e===t});return n}if(r-u<=1){for(let e=1;e<=6;e++)n.push({number:e,label:e,isActive:r===e,isFirst:e===1});return n.push({number:Math.min(r+5,t),label:"...",isLast:!0}),n}n.push({number:Math.max(r-5,1),label:"...",isFirst:!0});for(let e=r-2;e<r+u;e++)n.push({number:e,label:e,isActive:r===e});return n.push({number:Math.min(r+5,t),label:"...",isLast:!0}),n},q=(r,t,n)=>{let e,o;return r===1?e=1:e=(r-1)*t+1,o=e+t-1,o>n&&(o=n),{start:e,end:o}},f=({page:r=D,total:t,pageSize:n=F,getPageLink:e,hidePageList:o=B})=>{const m=Math.ceil(t/n)||1,h=r>1,b=r<m,v=r-1,x=r+1,p=W(r,m),{start:N,end:y}=q(r,n,t),l="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1",d="cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300",c="text-gray-600",A=a([l,"rounded rounded-r-none border-r-0"],h?c:d),L=a([l,"rounded rounded-l-none border-r-1 mr-2"],h?c:d),_=a([l,"rounded rounded-r-none border-r-0 ml-2"],b?c:d),P=a([l,"rounded rounded-l-none border-r-1"],b?c:d),k=o?null:p.map(({number:C,label:g,isActive:I,isFirst:w,isLast:j})=>{const M=w||j?a("rounded",w?"border-l-1 border-r-0 rounded-r-none":"border-r-1 border-l-0 rounded-l-none"):"border-x-0";return s("a",{href:e(C),className:a([l,M],I?"cursor-default pointer-events-none bg-accent border-accent text-accent-contrast":"text-gray-600"),children:g},`catalog-page-${g}`)});return i("div",{className:"mx-2 my-4 flex flex-wrap-reverse items-center justify-between",children:[s("div",{className:"mt-2 flex items-center justify-start",children:i("span",{children:["Showing"," ",i("strong",{children:[N,"-",y]})," ","of ",i("strong",{children:[t," items"]})]})}),!!p.length&&s("div",{className:"mt-2 flex items-center justify-end",children:i("div",{className:"flex justify-center",children:[s("a",{href:e(1),className:A,"aria-label":"rewind",children:s(V,{})}),s("a",{href:e(v),className:L,"aria-label":"navigateleft",children:s(G,{})}),k,s("a",{href:e(x),className:_,"aria-label":"navigateright",children:s(T,{})}),s("a",{href:e(m),className:P,"aria-label":"fastforward",children:s(O,{})})]})})]})};f.displayName="Pagination";try{f.displayName="Pagination",f.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:{value:"1"},description:"Optional current page number",name:"page",required:!1,type:{name:"number"}},total:{defaultValue:null,description:"Total items count",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:{value:"50"},description:"Optional page size",name:"pageSize",required:!1,type:{name:"number"}},getPageLink:{defaultValue:null,description:"Function to get link for a given page",name:"getPageLink",required:!0,type:{name:"(page: number) => string"}},hidePageList:{defaultValue:{value:"false"},description:"Optional setting to hide page list",name:"hidePageList",required:!1,type:{name:"boolean"}}}}}catch{}export{f as P};
//# sourceMappingURL=pagination-b905e810.js.map
