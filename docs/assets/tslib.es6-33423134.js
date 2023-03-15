/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(c,o){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},y(c,o)};function _(c,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");y(c,o);function e(){this.constructor=c}c.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var h=function(){return h=Object.assign||function(o){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},h.apply(this,arguments)};function p(c,o){var e={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&o.indexOf(n)<0&&(e[n]=c[n]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(c);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(c,n[a])&&(e[n[a]]=c[n[a]]);return e}function b(c,o,e,n){function a(t){return t instanceof e?t:new e(function(i){i(t)})}return new(e||(e=Promise))(function(t,i){function u(l){try{r(n.next(l))}catch(s){i(s)}}function f(l){try{r(n.throw(l))}catch(s){i(s)}}function r(l){l.done?t(l.value):a(l.value).then(u,f)}r((n=n.apply(c,o||[])).next())})}function w(c,o){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,a,t,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(r){return function(l){return f([r,l])}}function f(r){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(t=r[0]&2?a.return:r[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,r[1])).done)return t;switch(a=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,a=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=o.call(c,e)}catch(l){r=[6,l],a=0}finally{n=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function O(c,o,e){if(e||arguments.length===2)for(var n=0,a=o.length,t;n<a;n++)(t||!(n in o))&&(t||(t=Array.prototype.slice.call(o,0,n)),t[n]=o[n]);return c.concat(t||Array.prototype.slice.call(o))}export{p as _,h as a,_ as b,O as c,b as d,w as e};
//# sourceMappingURL=tslib.es6-33423134.js.map
