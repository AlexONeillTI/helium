import{r as s}from"./index-e0ddb630.js";function o(e,n){const t=s.useRef(n);s.useEffect(()=>{t.current=n},[n]),s.useEffect(()=>{const r=i=>t.current.call(window,i);return window.addEventListener(e,r),()=>{window.removeEventListener(e,r)}},[e])}function c(e,n){const t=s.useCallback(r=>{!e.current||e.current.contains(r.target)||n(r)},[e,n]);o("pointerdown",t),o("mousedown",t)}export{c as a,o as u};
//# sourceMappingURL=use-on-click-outside-b8556d26.js.map
