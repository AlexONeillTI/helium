import{j as e}from"./jsx-runtime-b91f6123.js";import{l as W,m as B,A,h as _,U as j,k as D,n as w,o as O,p as V}from"./course-run-5f7a295c.js";import{h as g}from"./hydrate-content-a3477092.js";import{F as Q,C as l}from"./tile-image-overlay-243deb81.js";import{u as T}from"./useTranslation-ee3e1c6a.js";import"./index-64f120e9.js";import"./tslib.es6-14bf6d9f.js";import"./ApolloContext-92c8f557.js";import"./header-a7feb4e4.js";import"./clsx.m-1229b3e0.js";import"./use-multi-carousel-behavior-8a933ea8.js";import"./use-previous-41bdd730.js";import"./nonIterableRest-d1264b94.js";const ue={component:Q,title:"Packages/Featured Content/Data Fetching"},f={title:"Feature Content Header"},k=()=>{},x={query:"test query",querySignature:"test query signature",querySort:"relevance"},E={ids:["item-id"]},F={limit:2},h=(s=!1)=>({__typename:"Content",id:"item-id",asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",authors:["Author A","Author B"],availabilityStatus:"available",canAddToQueue:!0,contentTypeLabel:"Guide",courseGracePeriodEnded:!1,coursePresold:!1,courseStartDate:"2016-11-07T05:51:02.856Z",description:"Test description",rating:78,slug:"test-course-slug",title:"Test title",kind:s?_.LearningPath:null,currentUserUnmetCoursePrerequisites:[],currentUserUnmetLearningPathPrerequisites:[],priceInCents:null,suggestedRetailPriceInCents:null,source:null,ribbon:null,displayCourse:"display-course-id",currentUserMayReschedule:!1,hasChildren:!1,hideCourseDescription:!1,isActive:!0,waitlistingEnabled:!1,waitlistingTriggered:!1}),m={catalogQuery:{request:{query:W,variables:{...x}},result:{data:{CatalogQuery:{contentItems:[h()]}}}},queryContentsQuery:{request:{query:B,variables:{...E}},result:{data:{QueryContents:[h(!0)]}}},addCourseToQueueMutation:{request:{query:A,variables:{resourceId:"display-course-id"}},result:{data:{AddResourceToQueue:!0}}},addLearningPathToQueueMutation:{request:{query:A,variables:{resourceId:"test-course-slug",resourceType:_.LearningPath}},result:{data:{AddResourceToQueue:!0}}},userRecentContentQuery:{request:{query:j,variables:{...F}},result:{data:{UserRecentContent:[h()]}}}},$={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},R={addTypename:!1,defaultOptions:$},G=()=>{const{i18n:s}=T(),[u]=D(),i=n=>{const{displayCourse:r}=n;return r?u({variables:{resourceId:r}}).then():Promise.resolve()},{data:o,loading:c,error:a}=w({variables:{...x}});let t;return c&&(t=e("p",{children:"Loading content"})),a&&(t=e("p",{children:"Error loading content"})),o!=null&&o.CatalogQuery.contentItems&&(t=o.CatalogQuery.contentItems.map((n,r)=>{const d=g(s,n);return e(l.Item,{...d},`item-${r}`)})),e(Q,{children:e(l,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:k,children:t})})},p={render:()=>e(G,{}),parameters:{apolloClient:{...R,mocks:[m.catalogQuery,m.addCourseToQueueMutation]}}},H=()=>{const{i18n:s}=T(),[u]=D(),i=n=>{const{slug:r,kind:d}=n;return r?u({variables:{resourceType:d,resourceId:r}}).then():Promise.resolve()},{data:o,loading:c,error:a}=O({variables:{...E}});let t;return c&&(t=e("p",{children:"Loading content"})),a&&(t=e("p",{children:"Error loading content"})),o&&(t=o.QueryContents.map((n,r)=>{const d=g(s,n);return e(l.Item,{...d},`item-${r}`)})),e(Q,{children:e(l,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:k,children:t})})},y={render:()=>e(H,{}),parameters:{apolloClient:{...R,mocks:[m.queryContentsQuery,m.addLearningPathToQueueMutation]}}},K=()=>{const{i18n:s}=T(),{data:u,loading:i,error:o}=V({variables:{...F}}),c=()=>Promise.resolve();let a;return i&&(a=e("p",{children:"Loading content"})),o&&(a=e("p",{children:"Error loading content"})),u&&(a=u.UserRecentContent.map((t,n)=>{const r=g(s,t);return e(l.Item,{...r},`item-${n}`)})),e(Q,{children:e(l,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:c,onClick:k,children:a})})},C={render:()=>e(K,{}),parameters:{apolloClient:{...R,mocks:[m.userRecentContentQuery]}}};var P,q,v;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <CatalogQueryTemplate />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
    }
  }
}`,...(v=(q=p.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var b,I,U;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <QueryContentsQueryTemplate />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.queryContentsQuery, mockApolloResults.addLearningPathToQueueMutation]
    }
  }
}`,...(U=(I=y.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var L,M,S;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <UserRecentContentQueryTemplate />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.userRecentContentQuery]
    }
  }
}`,...(S=(M=C.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const le=["WithCatalogQuery","WithQueryContentsQuery","WithUserRecentContentQuery"];export{p as WithCatalogQuery,y as WithQueryContentsQuery,C as WithUserRecentContentQuery,le as __namedExportsOrder,ue as default};
//# sourceMappingURL=FeaturedContentWithDataFetching.stories-8f60cc7d.js.map
