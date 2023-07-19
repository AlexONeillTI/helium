import{a as _t,j as et}from"./jsx-runtime-b91f6123.js";import{n as gt,v as Dt,D as kt,g as L}from"./content-header-84cd9f86.js";import{a as nt}from"./tslib.es6-14bf6d9f.js";import{r as J,c as K}from"./index-64f120e9.js";import{X as Ut,W as wt,n as ut}from"./ApolloContext-43df6d1c.js";function B(t,u){var U=gt(u==null?void 0:u.client);Dt(t,kt.Mutation);var h=J.useState({called:!1,loading:!1,client:U}),N=h[0],I=h[1],a=J.useRef({result:N,mutationId:0,isMounted:!0,client:U,mutation:t,options:u});Object.assign(a.current,{client:U,options:u,mutation:t});var m=J.useCallback(function(w){w===void 0&&(w={});var F=a.current,A=F.options,M=F.mutation,_=nt(nt({},A),{mutation:M}),y=w.client||a.current.client;!a.current.result.loading&&!_.ignoreResults&&a.current.isMounted&&I(a.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:y});var o=++a.current.mutationId,p=Ut(_,w);return y.mutate(p).then(function(g){var $,D=g.data,Y=g.errors,x=Y&&Y.length>0?new wt({graphQLErrors:Y}):void 0;if(o===a.current.mutationId&&!p.ignoreResults){var b={called:!0,loading:!1,data:D,error:x,client:y};a.current.isMounted&&!ut(a.current.result,b)&&I(a.current.result=b)}var S=w.onCompleted||(($=a.current.options)===null||$===void 0?void 0:$.onCompleted);return S==null||S(g.data,p),g}).catch(function(g){var $;if(o===a.current.mutationId&&a.current.isMounted){var D={loading:!1,error:g,data:void 0,called:!0,client:y};ut(a.current.result,D)||I(a.current.result=D)}var Y=w.onError||(($=a.current.options)===null||$===void 0?void 0:$.onError);if(Y)return Y(g,p),{data:void 0,errors:g};throw g})},[]),f=J.useCallback(function(){a.current.isMounted&&I({called:!1,loading:!1,client:U})},[]);return J.useEffect(function(){return a.current.isMounted=!0,function(){a.current.isMounted=!1}},[]),[m,nt({reset:f},N)]}const At=()=>_t("div",{className:"flex items-center justify-center space-x-10",children:[et("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.32s"}}),et("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.16s"}}),et("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full"})]});At.displayName="LoadingDots";var xt=(t=>(t.Membership="membership",t))(xt||{}),Tt=(t=>(t.Calendar="calendar",t.Grid="grid",t.List="list",t))(Tt||{}),X=(t=>(t.Article="article",t.Bundle="bundle",t.Course="course",t.CourseGroup="courseGroup",t.DiscountGroup="discountGroup",t.InPersonEvent="inPersonEvent",t.InPersonEventCourse="inPersonEventCourse",t.LearningPath="learningPath",t.MicroCourse="microCourse",t.PickableGroup="pickableGroup",t.Product="product",t.Sellable="sellable",t.ShareableContentObject="shareableContentObject",t.Video="video",t.Webinar="webinar",t.WebinarCourse="webinarCourse",t.XApiObject="xApiObject",t))(X||{}),Ot=(t=>(t.CourseStartDate="courseStartDate",t.CreatedAt="createdAt",t.DisplayDate="displayDate",t.Label="label",t.LastActiveAt="lastActiveAt",t.Name="name",t.ParentName="parentName",t.PublishDate="publishDate",t.Relevance="relevance",t.Title="title",t.UpdatedAt="updatedAt",t))(Ot||{}),Yt=(t=>(t.Asc="asc",t.Desc="desc",t))(Yt||{});const bt={},St=L`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;function ct(t){const u={...bt,...t};return B(St,u)}try{ct.displayName="useAddResourceToQueueMutation",ct.__docgenInfo={description:`__useAddResourceToQueueMutation__

To run a mutation, you first call \`useAddResourceToQueueMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useAddResourceToQueueMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useAddResourceToQueueMutation",props:{}}}catch{}const Ft={},Ct=L`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;function dt(t){const u={...Ft,...t};return B(Ct,u)}try{dt.displayName="useArchiveUserCourseMutation",dt.__docgenInfo={description:`__useArchiveUserCourseMutation__

To run a mutation, you first call \`useArchiveUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserCourseMutation",props:{}}}catch{}const It={},Rt=L`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;function lt(t){const u={...It,...t};return B(Rt,u)}try{lt.displayName="useArchiveUserLearningPathMutation",lt.__docgenInfo={description:`__useArchiveUserLearningPathMutation__

To run a mutation, you first call \`useArchiveUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserLearningPathMutation",props:{}}}catch{}const Nt={},Wt=L`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;function ft(t){const u={...Nt,...t};return B(Wt,u)}try{ft.displayName="useReinstateUserLearningPathMutation",ft.__docgenInfo={description:`__useReinstateUserLearningPathMutation__

To run a mutation, you first call \`useReinstateUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserLearningPathMutation",props:{}}}catch{}const Lt={},Bt=L`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;function ht(t){const u={...Lt,...t};return B(Bt,u)}try{ht.displayName="useReinstateUserCourseMutation",ht.__docgenInfo={description:`__useReinstateUserCourseMutation__

To run a mutation, you first call \`useReinstateUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserCourseMutation",props:{}}}catch{}const zt={},Pt=L`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;function mt(t){const u={...zt,...t};return B(Pt,u)}try{mt.displayName="useUnenrollFromWaitlistMutation",mt.__docgenInfo={description:`__useUnenrollFromWaitlistMutation__

To run a mutation, you first call \`useUnenrollFromWaitlistMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUnenrollFromWaitlistMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUnenrollFromWaitlistMutation",props:{}}}catch{}const jt={},Ht=L`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;function pt(t){const u={...jt,...t};return B(Ht,u)}try{pt.displayName="useUpdateBookmarkFolderMutation",pt.__docgenInfo={description:`__useUpdateBookmarkFolderMutation__

To run a mutation, you first call \`useUpdateBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkFolderMutation",props:{}}}catch{}const Et={},Gt=L`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;function yt(t){const u={...Et,...t};return B(Gt,u)}try{yt.displayName="useDestroyBookmarkFolderMutation",yt.__docgenInfo={description:`__useDestroyBookmarkFolderMutation__

To run a mutation, you first call \`useDestroyBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkFolderMutation",props:{}}}catch{}const Qt={},Zt=L`
  mutation CreateCertificateFromUpload(
    $asset: URL!
    $certificateUploadFields: [CertificateUploadField!]
  ) {
    CreateCertificateFromUpload(asset: $asset, certificateUploadFields: $certificateUploadFields) {
      __typename
      id
      externalResourceTitle
    }
  }
`;function $t(t){const u={...Qt,...t};return B(Zt,u)}try{$t.displayName="useCreateCertificateFromUploadMutation",$t.__docgenInfo={description:`__useCreateCertificateFromUploadMutation__

To run a mutation, you first call \`useCreateCertificateFromUploadMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCertificateFromUploadMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCertificateFromUploadMutation",props:{}}}catch{}const Vt={},Jt=L`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;function vt(t){const u={...Vt,...t};return B(Jt,u)}try{vt.displayName="useUpdateBookmarkMutation",vt.__docgenInfo={description:`__useUpdateBookmarkMutation__

To run a mutation, you first call \`useUpdateBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkMutation",props:{}}}catch{}const Xt={},qt=L`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;function Mt(t){const u={...Xt,...t};return B(qt,u)}try{Mt.displayName="useDestroyBookmarkMutation",Mt.__docgenInfo={description:`__useDestroyBookmarkMutation__

To run a mutation, you first call \`useDestroyBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkMutation",props:{}}}catch{}var rt={},Kt={get exports(){return rt},set exports(t){rt=t}};(function(t,u){(function(U,h){t.exports=h()})(K,function(){var U=1e3,h=6e4,N=36e5,I="millisecond",a="second",m="minute",f="hour",w="day",F="week",A="month",M="quarter",_="year",y="date",o="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],e=i%100;return"["+i+(r[(e-20)%10]||r[e]||r[0])+"]"}},D=function(i,r,e){var s=String(i);return!s||s.length>=r?i:""+Array(r+1-s.length).join(e)+i},Y={s:D,z:function(i){var r=-i.utcOffset(),e=Math.abs(r),s=Math.floor(e/60),n=e%60;return(r<=0?"+":"-")+D(s,2,"0")+":"+D(n,2,"0")},m:function i(r,e){if(r.date()<e.date())return-i(e,r);var s=12*(e.year()-r.year())+(e.month()-r.month()),n=r.clone().add(s,A),d=e-n<0,c=r.clone().add(s+(d?-1:1),A);return+(-(s+(e-n)/(d?n-c:c-n))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:A,y:_,w:F,d:w,D:y,h:f,m,s:a,ms:I,Q:M}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},x="en",b={};b[x]=$;var S=function(i){return i instanceof P},W=function i(r,e,s){var n;if(!r)return x;if(typeof r=="string"){var d=r.toLowerCase();b[d]&&(n=d),e&&(b[d]=e,n=d);var c=r.split("-");if(!n&&c.length>1)return i(c[0])}else{var v=r.name;b[v]=r,n=v}return!s&&n&&(x=n),n||!s&&x},k=function(i,r){if(S(i))return i.clone();var e=typeof r=="object"?r:{};return e.date=i,e.args=arguments,new P(e)},l=Y;l.l=W,l.i=S,l.w=function(i,r){return k(i,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var P=function(){function i(e){this.$L=W(e.locale,null,!0),this.parse(e)}var r=i.prototype;return r.parse=function(e){this.$d=function(s){var n=s.date,d=s.utc;if(n===null)return new Date(NaN);if(l.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var c=n.match(p);if(c){var v=c[2]-1||0,O=(c[7]||"0").substring(0,3);return d?new Date(Date.UTC(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,O)):new Date(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,O)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return l},r.isValid=function(){return this.$d.toString()!==o},r.isSame=function(e,s){var n=k(e);return this.startOf(s)<=n&&n<=this.endOf(s)},r.isAfter=function(e,s){return k(e)<this.startOf(s)},r.isBefore=function(e,s){return this.endOf(s)<k(e)},r.$g=function(e,s,n){return l.u(e)?this[s]:this.set(n,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,s){var n=this,d=!!l.u(s)||s,c=l.p(e),v=function(G,R){var H=l.w(n.$u?Date.UTC(n.$y,R,G):new Date(n.$y,R,G),n);return d?H:H.endOf(w)},O=function(G,R){return l.w(n.toDate()[G].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(R)),n)},T=this.$W,C=this.$M,j=this.$D,z="set"+(this.$u?"UTC":"");switch(c){case _:return d?v(1,0):v(31,11);case A:return d?v(1,C):v(0,C+1);case F:var Z=this.$locale().weekStart||0,V=(T<Z?T+7:T)-Z;return v(d?j-V:j+(6-V),C);case w:case y:return O(z+"Hours",0);case f:return O(z+"Minutes",1);case m:return O(z+"Seconds",2);case a:return O(z+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,s){var n,d=l.p(e),c="set"+(this.$u?"UTC":""),v=(n={},n[w]=c+"Date",n[y]=c+"Date",n[A]=c+"Month",n[_]=c+"FullYear",n[f]=c+"Hours",n[m]=c+"Minutes",n[a]=c+"Seconds",n[I]=c+"Milliseconds",n)[d],O=d===w?this.$D+(s-this.$W):s;if(d===A||d===_){var T=this.clone().set(y,1);T.$d[v](O),T.init(),this.$d=T.set(y,Math.min(this.$D,T.daysInMonth())).$d}else v&&this.$d[v](O);return this.init(),this},r.set=function(e,s){return this.clone().$set(e,s)},r.get=function(e){return this[l.p(e)]()},r.add=function(e,s){var n,d=this;e=Number(e);var c=l.p(s),v=function(C){var j=k(d);return l.w(j.date(j.date()+Math.round(C*e)),d)};if(c===A)return this.set(A,this.$M+e);if(c===_)return this.set(_,this.$y+e);if(c===w)return v(1);if(c===F)return v(7);var O=(n={},n[m]=h,n[f]=N,n[a]=U,n)[c]||1,T=this.$d.getTime()+e*O;return l.w(T,this)},r.subtract=function(e,s){return this.add(-1*e,s)},r.format=function(e){var s=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var d=e||"YYYY-MM-DDTHH:mm:ssZ",c=l.z(this),v=this.$H,O=this.$m,T=this.$M,C=n.weekdays,j=n.months,z=function(R,H,tt,q){return R&&(R[H]||R(s,d))||tt[H].slice(0,q)},Z=function(R){return l.s(v%12||12,R,"0")},V=n.meridiem||function(R,H,tt){var q=R<12?"AM":"PM";return tt?q.toLowerCase():q},G={YY:String(this.$y).slice(-2),YYYY:this.$y,M:T+1,MM:l.s(T+1,2,"0"),MMM:z(n.monthsShort,T,j,3),MMMM:z(j,T),D:this.$D,DD:l.s(this.$D,2,"0"),d:String(this.$W),dd:z(n.weekdaysMin,this.$W,C,2),ddd:z(n.weekdaysShort,this.$W,C,3),dddd:C[this.$W],H:String(v),HH:l.s(v,2,"0"),h:Z(1),hh:Z(2),a:V(v,O,!0),A:V(v,O,!1),m:String(O),mm:l.s(O,2,"0"),s:String(this.$s),ss:l.s(this.$s,2,"0"),SSS:l.s(this.$ms,3,"0"),Z:c};return d.replace(g,function(R,H){return H||G[R]||c.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,s,n){var d,c=l.p(s),v=k(e),O=(v.utcOffset()-this.utcOffset())*h,T=this-v,C=l.m(this,v);return C=(d={},d[_]=C/12,d[A]=C,d[M]=C/3,d[F]=(T-O)/6048e5,d[w]=(T-O)/864e5,d[f]=T/N,d[m]=T/h,d[a]=T/U,d)[c]||T,n?C:l.a(C)},r.daysInMonth=function(){return this.endOf(A).$D},r.$locale=function(){return b[this.$L]},r.locale=function(e,s){if(!e)return this.$L;var n=this.clone(),d=W(e,s,!0);return d&&(n.$L=d),n},r.clone=function(){return l.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},i}(),st=P.prototype;return k.prototype=st,[["$ms",I],["$s",a],["$m",m],["$H",f],["$W",w],["$M",A],["$y",_],["$D",y]].forEach(function(i){st[i[1]]=function(r){return this.$g(r,i[0],i[1])}}),k.extend=function(i,r){return i.$i||(i(r,P,k),i.$i=!0),k},k.locale=W,k.isDayjs=S,k.unix=function(i){return k(1e3*i)},k.en=b[x],k.Ls=b,k.p={},k})})(Kt);const Q=rt;var ot={},te={get exports(){return ot},set exports(t){ot=t}};(function(t,u){(function(U,h){t.exports=h()})(K,function(){return function(U,h){var N=h.prototype,I=N.format;N.format=function(a){var m=this,f=this.$locale();if(!this.isValid())return I.bind(this)(a);var w=this.$utils(),F=(a||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(A){switch(A){case"Q":return Math.ceil((m.$M+1)/3);case"Do":return f.ordinal(m.$D);case"gggg":return m.weekYear();case"GGGG":return m.isoWeekYear();case"wo":return f.ordinal(m.week(),"W");case"w":case"ww":return w.s(m.week(),A==="w"?1:2,"0");case"W":case"WW":return w.s(m.isoWeek(),A==="W"?1:2,"0");case"k":case"kk":return w.s(String(m.$H===0?24:m.$H),A==="k"?1:2,"0");case"X":return Math.floor(m.$d.getTime()/1e3);case"x":return m.$d.getTime();case"z":return"["+m.offsetName()+"]";case"zzz":return"["+m.offsetName("long")+"]";default:return A}});return I.bind(this)(F)}}})})(te);const ee=ot;var at={},ne={get exports(){return at},set exports(t){at=t}};(function(t,u){(function(U,h){t.exports=h()})(K,function(){var U="minute",h=/[+-]\d\d(?::?\d\d)?/g,N=/([+-]|\d\d)/g;return function(I,a,m){var f=a.prototype;m.utc=function(o){var p={date:o,utc:!0,args:arguments};return new a(p)},f.utc=function(o){var p=m(this.toDate(),{locale:this.$L,utc:!0});return o?p.add(this.utcOffset(),U):p},f.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var w=f.parse;f.parse=function(o){o.utc&&(this.$u=!0),this.$utils().u(o.$offset)||(this.$offset=o.$offset),w.call(this,o)};var F=f.init;f.init=function(){if(this.$u){var o=this.$d;this.$y=o.getUTCFullYear(),this.$M=o.getUTCMonth(),this.$D=o.getUTCDate(),this.$W=o.getUTCDay(),this.$H=o.getUTCHours(),this.$m=o.getUTCMinutes(),this.$s=o.getUTCSeconds(),this.$ms=o.getUTCMilliseconds()}else F.call(this)};var A=f.utcOffset;f.utcOffset=function(o,p){var g=this.$utils().u;if(g(o))return this.$u?0:g(this.$offset)?A.call(this):this.$offset;if(typeof o=="string"&&(o=function(x){x===void 0&&(x="");var b=x.match(h);if(!b)return null;var S=(""+b[0]).match(N)||["-",0,0],W=S[0],k=60*+S[1]+ +S[2];return k===0?0:W==="+"?k:-k}(o),o===null))return this;var $=Math.abs(o)<=16?60*o:o,D=this;if(p)return D.$offset=$,D.$u=o===0,D;if(o!==0){var Y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(D=this.local().add($+Y,U)).$offset=$,D.$x.$localOffset=Y}else D=this.utc();return D};var M=f.format;f.format=function(o){var p=o||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return M.call(this,p)},f.valueOf=function(){var o=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*o},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var _=f.toDate;f.toDate=function(o){return o==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var y=f.diff;f.diff=function(o,p,g){if(o&&this.$u===o.$u)return y.call(this,o,p,g);var $=this.local(),D=m(o).local();return y.call($,D,p,g)}}})})(ne);const re=at;var it={},oe={get exports(){return it},set exports(t){it=t}};(function(t,u){(function(U,h){t.exports=h()})(K,function(){var U={year:0,month:1,day:2,hour:3,minute:4,second:5},h={};return function(N,I,a){var m,f=function(M,_,y){y===void 0&&(y={});var o=new Date(M),p=function(g,$){$===void 0&&($={});var D=$.timeZoneName||"short",Y=g+"|"+D,x=h[Y];return x||(x=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:g,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:D}),h[Y]=x),x}(_,y);return p.formatToParts(o)},w=function(M,_){for(var y=f(M,_),o=[],p=0;p<y.length;p+=1){var g=y[p],$=g.type,D=g.value,Y=U[$];Y>=0&&(o[Y]=parseInt(D,10))}var x=o[3],b=x===24?0:x,S=o[0]+"-"+o[1]+"-"+o[2]+" "+b+":"+o[4]+":"+o[5]+":000",W=+M;return(a.utc(S).valueOf()-(W-=W%1e3))/6e4},F=I.prototype;F.tz=function(M,_){M===void 0&&(M=m);var y=this.utcOffset(),o=this.toDate(),p=o.toLocaleString("en-US",{timeZone:M}),g=Math.round((o-new Date(p))/1e3/60),$=a(p).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-g,!0);if(_){var D=$.utcOffset();$=$.add(y-D,"minute")}return $.$x.$timezone=M,$},F.offsetName=function(M){var _=this.$x.$timezone||a.tz.guess(),y=f(this.valueOf(),_,{timeZoneName:M}).find(function(o){return o.type.toLowerCase()==="timezonename"});return y&&y.value};var A=F.startOf;F.startOf=function(M,_){if(!this.$x||!this.$x.$timezone)return A.call(this,M,_);var y=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return A.call(y,M,_).tz(this.$x.$timezone,!0)},a.tz=function(M,_,y){var o=y&&_,p=y||_||m,g=w(+a(),p);if(typeof M!="string")return a(M).tz(p);var $=function(b,S,W){var k=b-60*S*1e3,l=w(k,W);if(S===l)return[k,S];var P=w(k-=60*(l-S)*1e3,W);return l===P?[k,l]:[b-60*Math.min(l,P)*1e3,Math.max(l,P)]}(a.utc(M,o).valueOf(),g,p),D=$[0],Y=$[1],x=a(D).utcOffset(Y);return x.$x.$timezone=p,x},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(M){m=M}}})})(oe);const ae=it,ie="America/New_York";Q.extend(ee);Q.extend(re);Q.extend(ae);const E=(t,u,U)=>{const h=u??ie;return Q(t).tz(h).format(U)},se=[X.Webinar,X.WebinarCourse],ue=[X.InPersonEvent,X.InPersonEventCourse];function me(t,u,U,h){return t&&(ue.includes(t)||se.includes(t))?U?Q(u).isSame(Q(U),"day")?`${E(u,h,"ddd, MMM Do YYYY hh:mm a")} – ${E(U,h,"hh:mm a z")}`:`${E(u,h,"ddd, MMM Do YYYY hh:mm a")} – ${E(U,h,"ddd, MMM Do YYYY hh:mm a z")}`:`${E(u,h,"ddd, MMM Do YYYY hh:mm a z")}`:U?`${E(u,h,"MMM Do YYYY")} – ${E(U,h,"MMM Do YYYY")}`:E(u,h,"MMM Do YYYY")}export{St as A,Tt as C,At as L,Ot as S,Yt as a,X as b,xt as c,Q as d,me as e,E as f,B as g,ct as u};
//# sourceMappingURL=course-run-675f4323.js.map
