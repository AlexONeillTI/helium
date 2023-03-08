import{b as l,a as e}from"./jsx-runtime-9707e85d.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";const t=a=>{const{title:r,subtitle:n,linkText:i,linkOpenInNewTab:x,linkUrl:o,asset:c,largeAsset:d,smallAsset:m}=a,k=r&&l("picture",{className:"inline-block w-full",children:[d&&e("source",{srcSet:d,media:"(min-width: 64.063em)"}),e("source",{srcSet:c,media:"(min-width: 48em)"}),m&&e("source",{srcSet:m,media:"(max-width: 48em)"}),e("img",{src:c,alt:r,className:"w-full"})]});let u;if(r){let p;if(i&&o){const g={className:"border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-accent border-accent text-accent-contrast hover:text-accent-contrast hover:bg-accent-hover hover:border-accent-hover focus:bg-accent-hover focus:border-accent-hover active:bg-accent-hover active:border-accent-hover",href:o};x&&(g.target="_blank"),p=e("a",{...g,children:i})}u=l("div",{className:"w-full p-8 md:absolute md:left-0 md:bg-white md:bg-opacity-80 md:bottom-8",children:[e("h2",{className:"text-gray-800 text-xl mb-1 md:text-3xl lg:text-4xl",children:r}),n&&e("span",{className:"text-gray-800 text-xs leading-5 font-header md:text-base lg:text-lg",children:n}),p]})}return l("div",{className:"overflow-hidden relative",children:[k,u]})};t.displayName="Hero";try{t.displayName="Hero",t.__docgenInfo={description:"",displayName:"Hero",props:{title:{defaultValue:null,description:"title that appears on the hero image",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"subtitle that appears on the hero image",name:"subtitle",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"link text that appears on the hero image",name:"linkText",required:!1,type:{name:"string"}},linkOpenInNewTab:{defaultValue:null,description:"open link in new tab for link text",name:"linkOpenInNewTab",required:!1,type:{name:"boolean"}},linkUrl:{defaultValue:null,description:"link url for link text",name:"linkUrl",required:!1,type:{name:"string"}},asset:{defaultValue:null,description:"default asset for hero image",name:"asset",required:!1,type:{name:"string"}},largeAsset:{defaultValue:null,description:"optional asset for hero image in large screen",name:"largeAsset",required:!1,type:{name:"string"}},smallAsset:{defaultValue:null,description:"optional asset for hero image in small screen",name:"smallAsset",required:!1,type:{name:"string"}}}}}catch{}const N={component:t,title:"Packages/Hero"},s={render:a=>e(t,{...a}),args:{title:"Dolor Nullam Mattis Sem",subtitle:"Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg"}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Hero {...args} />,
  args: {
    title: 'Dolor Nullam Mattis Sem',
    subtitle: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    asset: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const w=["Base"];export{s as Base,w as __namedExportsOrder,N as default};
//# sourceMappingURL=Hero.stories-50181998.js.map
