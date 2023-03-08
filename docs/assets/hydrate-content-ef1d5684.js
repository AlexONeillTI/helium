import{h as i,l as j,m as D,f as U}from"./course-run-ffe2e63c.js";var u=(e=>(e.Completed="completed",e.Available="available",e.Started="started",e.NotStarted="not-started",e.NotCompleted="not-completed",e))(u||{});const G=(e,s,r=void 0,g={})=>{const b=(s.currentUserUnmetCoursePrerequisites||[]).length>0||(s.currentUserUnmetLearningPathPrerequisites||[]).length>0,h=!s.coursePresold&&!s.courseGracePeriodEnded&&!b,P=r??s.timeZone,v=!!s.availabilityStatus,S=s.availabilityStatus===u.Completed,$=s.availabilityStatus===u.Available,a=s.availabilityStatus===u.Started,k=s.availabilityStatus===u.NotStarted,A=s.availabilityStatus===u.NotCompleted,E=s.kind===i.ShareableContentObject||s.kind===i.XApiObject,T=s.kind===i.Webinar||s.kind===i.WebinarCourse,N=s.kind===i.InPersonEvent||s.kind===i.InPersonEventCourse,w=s.kind===i.WebinarCourse||s.kind===i.InPersonEventCourse,n={...s,hasUnmetPrerequisites:b,isActive:h,timeZone:P,hasAvailability:v,isCompleted:S,isAvailable:$,isStarted:a,isNotStarted:k,isNotCompleted:A,kindIsScormOrXApi:E,locationIsOnline:T,locationIsInPerson:N,usesContentAccessText:w},O=q(e,n);let l=x(n);try{const c=JSON.parse(g);if(Object.keys(c).length&&l.length>1){const L=`sessionFields=${encodeURIComponent(JSON.stringify(Object.entries(c)))}`;l=`${l}?${L}`}}catch{}let{priceInCents:o,suggestedRetailPriceInCents:f}=s;if(s.alternativePricingType===j.Membership){const c=o;o=f,f=c}return{...n,callToAction:O,href:l,priceInCents:o,suggestedRetailPriceInCents:f}},q=(e,s)=>{if(s.hasAvailability&&!s.waitlistingTriggered){if(s.coursePresold&&s.courseStartDate){const r=D(s.kind,s.courseStartDate,s.courseEndDate,s.timeZone);return`${s.usesContentAccessText?e.t("content-access"):`${s.contentTypeLabel} ${e.t("runs")}`} ${r}`}else{if(s.courseGracePeriodEnded&&s.courseEndDate)return`${e.t("course-ended")} ${U(s.courseEndDate,s.timeZone,"MMM Do YYYY")}`;if(s.hasUnmetPrerequisites)return e.t("course.prerequisites");if(s.bulkPurchasingEnabled)return e.t("course-view-details");if(s.isCompleted)return s.kind===i.LearningPath?e.t("learning-path.view"):e.t("view-course",{contentType:s.contentTypeLabel});if(s.isStarted)return s.kind===i.LearningPath?e.t("learning-path.continue"):e.t("continue-course");if(s.isNotStarted)return s.kind===i.LearningPath?e.t("learning-path.start"):e.t("start-course",{contentType:s.contentTypeLabel});if(s.isNotCompleted)return e.t("not-completed-course")}return e.t("course-view-details")}else if(s.waitlistingTriggered&&s.waitlistingEnabled)return e.t("join-waitlist");return e.t("course-view-details")},x=e=>{const s=e.kind,r=e.slug;return s===i.Product?`/products/${r}`:s===i.Bundle?`/bundles/${r}`:s===i.PickableGroup?`/cart-collections/${r}`:s===i.DiscountGroup?`/collections/${r}`:s===i.LearningPath&&e.isActive?e.hasAvailability&&!e.bulkPurchasingEnabled?`/learn/learning-path/${r}`:`/learning-paths/${r}`:e.isActive?e.hasAvailability?s===i.ShareableContentObject||s===i.XApiObject?e.isAvailable?`/courses/${r}`:"#":(e.isCompleted||e.isStarted)&&!e.bulkPurchasingEnabled?s===i.Webinar?`/learn/webinars/${e.displayCourse}/redirect`:s===i.Article?`/learn/article/${e.displayCourseSlug}`:s===i.InPersonEvent?`/learn/event/${e.displayCourseSlug}`:s===i.Video?`/learn/video/${e.displayCourseSlug}`:`/learn/course/${e.displayCourseSlug}`:e.isNotStarted?`/learn/enroll/${e.displayCourse}`:`/courses/${r}`:`/courses/${r}`:s===i.Webinar||s===i.InPersonEvent?`/courses/${r}`:"#"};export{G as h};
//# sourceMappingURL=hydrate-content-ef1d5684.js.map
