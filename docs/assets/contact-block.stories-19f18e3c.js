import{j as t,a as e}from"./jsx-runtime-b91f6123.js";import"./index-64f120e9.js";const i=n=>{const{linkOpenInNewTab:f,contactDescription:r,asset:l,backgroundColor:x,textColor:k,url:s,contactName:o,contactSubtitle:d,actionText:u,contactEmail:m}=n,y=l&&t("span",{className:"mx-auto mt-0 mb-4 bg-gray-400 text-gray-700 rounded-lg block h-10 relative w-10 leading-7 text-5xl",children:t("img",{src:l,alt:o})}),C=r&&e("p",{className:"font-medium text-sm leading-7 mb-4",children:[" ",r]}),N=e("div",{className:"text-xs mb-4",children:[o&&e("p",{className:"font-extrabold my-0 mr-0 ml-1 uppercase tracking-widest",children:[" ",o]}),d&&e("p",{className:"mx-0 mb-0 mt-px",children:[" ",d," "]})]}),h={backgroundColor:x,color:k},B=(()=>{const c={className:"text-white bg-indigo-700 hover:bg-indigo-600 rounded-sm border-solid border cursor-pointer inline-block font-normal text-sm leading-tight py-2 px-5 relative text-center no-underline ease-in-out duration-200 transition font-sans mx-auto mb-0",target:f?"_blank":""};return s&&(c.href=s),m&&(c.href="mailto:"+m),u?t("a",{...c,children:u}):""})();return t("div",{className:"px-4 py-12 text-center",style:h,children:t("div",{className:"row",children:e("div",{className:"w-8/12 md:w-6/12 float-none mx-auto px-4 relative",children:[y,C,N,B]})})})};i.displayName="contactBlockWidget";try{contactBlockWidget.displayName="contactBlockWidget",contactBlockWidget.__docgenInfo={description:"",displayName:"contactBlockWidget",props:{asset:{defaultValue:null,description:"Asset image for contact block",name:"asset",required:!1,type:{name:"string"}},contactName:{defaultValue:null,description:"Contact name displayed in contact block",name:"contactName",required:!1,type:{name:"string"}},contactSubtitle:{defaultValue:null,description:"Contact subtitle displayed in contact block",name:"contactSubtitle",required:!1,type:{name:"string"}},contactDescription:{defaultValue:null,description:"Contact discription displayed contact block",name:"contactDescription",required:!1,type:{name:"string"}},contactEmail:{defaultValue:null,description:"Contact email selection in CTA dropdown",name:"contactEmail",required:!1,type:{name:"string"}},actionText:{defaultValue:null,description:"CTA button text for contact block",name:"actionText",required:!1,type:{name:"string"}},actionType:{defaultValue:null,description:"CTA action dropdown for contact block",name:"actionType",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"Url selection string in the CTA dropdown",name:"url",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Background color displayed in Contact block",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Color of text for contact block",name:"textColor",required:!1,type:{name:"string"}},linkOpenInNewTab:{defaultValue:null,description:"Checkbox in contact block for url",name:"linkOpenInNewTab",required:!1,type:{name:"boolean"}}}}}catch{}const w={component:i,title:"Packages/Contact Block"},a={render:n=>t(i,{...n}),args:{contactSubtitle:"Subtitle",contactName:"Jane Jacobs",actionText:"Contact",contactDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum."}};var p,g,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ContactBlock {...args} />,
  args: {
    contactSubtitle: 'Subtitle',
    contactName: 'Jane Jacobs',
    actionText: 'Contact',
    contactDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.'
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const _=["Base"];export{a as Base,_ as __namedExportsOrder,w as default};
//# sourceMappingURL=contact-block.stories-19f18e3c.js.map
