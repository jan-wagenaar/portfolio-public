"use strict";(self.webpackChunkjan_wagenaar_v2=self.webpackChunkjan_wagenaar_v2||[]).push([[888],{9957:function(e,t,r){const n=r(2788).default.div.withConfig({displayName:"tag__Tag",componentId:"sc-185t9z-0"})(["display:inline-block;padding:var(--spacing-s) var(--spacing-base);border:var(--spacing-xxxs) dotted var(--color-neutral-9);font-size:var(--font-size-s);font-weight:var(--font-weight-bold);"]);t.Z=n},25:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(7294),a=r(5649),l=r(1667),o=r(6066),i=r(4579),c=r(3114),s=r(9957),d=r(2788),m=r(8032);const u=d.default.div.withConfig({displayName:"slider-item__StyledSliderItem",componentId:"sc-1llb2zi-0"})(["position:relative;display:flex;justify-content:center;align-items:center;width:100%;scroll-snap-align:start;flex-shrink:0;background-color:gray;font-size:6.25rem;transform-origin:center center;transform:scale(1);transition:transform 0.5s;& .gatsby-image-wrapper{height:100%;width:100%;}"]);var f=e=>{let{index:t,image:r,isActive:a}=e;const l=n.useRef();return n.useEffect((()=>{a&&l.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),[a]),n.createElement(u,{"data-slide":t,ref:l},n.createElement(m.G,{image:r,alt:""}))};const p=d.default.div.withConfig({displayName:"slider-wrapper__StyledSliderWrapper",componentId:"sc-zgxway-0"})(["position:absolute;display:flex;width:100%;height:100%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"]);var v=e=>{let{items:t,setSlide:r,currentSlide:a}=e;const l=n.useRef(null),o=n.useCallback((e=>{r(e)}),[r]),i=n.useCallback((e=>{const[t]=e,r=Number(t.target.dataset.slide);t.isIntersecting&&"NaN"!==r&&o(r,o)}),[o]);return n.useEffect((()=>{const e=new IntersectionObserver(i,{root:l.current,threshold:.45});return Array.from(l.current.children).forEach((t=>{e.observe(t)})),function(){e.disconnect()}}),[t,i]),n.createElement(p,{ref:l},t.map(((e,t)=>n.createElement(f,{key:t,index:t,image:e.localFile.childImageSharp.gatsbyImageData,isActive:a===t}))))};const g=d.default.div.withConfig({displayName:"slider-nav__StyledSliderNav",componentId:"sc-147cagr-0"})(["position:absolute;display:flex;right:0;bottom:0;background:var(--color-neutral-0);color:white;"]),h=d.default.div.withConfig({displayName:"slider-nav__StyledSliderNavIndicator",componentId:"sc-147cagr-1"})(["display:flex;justify-content:center;align-items:center;min-width:4.5rem;padding:0 1rem;color:var(--color-text);font-weight:bold;box-sizing:border-box;"]),b=d.default.button.withConfig({displayName:"slider-nav__StyledSliderNavButton",componentId:"sc-147cagr-2"})(["height:4rem;width:4rem;background-color:var(--color-neutral-0);color:var(--color-text);font-size:1.5rem;outline:none;border:none;border-radius:0;cursor:pointer;transition:all 0.2s ease;&:hover,&:focus{background-color:var(--color-neutral-3);}&:disabled{background-color:var(--color-neutral-0);color:var(--color-neutral-0);pointer-events:none;}"]);var w=e=>{let{currentSlide:t,maxItems:r,moveToSlide:a}=e;return n.createElement(g,null,n.createElement(b,{onClick:()=>{a(t-1)},disabled:0===t},n.createElement("i",{className:"fa-solid fa-chevron-left"})),n.createElement(h,null,t+1," / ",r),n.createElement(b,{onClick:()=>{a(t+1)},disabled:t+1===r},n.createElement("i",{className:"fa-solid fa-chevron-right"})))};const y=d.default.div.withConfig({displayName:"slider__StyledSlider",componentId:"sc-1j4yppn-0"})(["position:relative;width:100%;padding-bottom:100%;text-align:center;overflow:hidden;box-sizing:border-box;overscroll-behavior-x:none;"]);var E=e=>{let{images:t}=e;const[r,a]=n.useState(0);return n.createElement(y,{id:"slider"},n.createElement(v,{items:t,setSlide:a,currentSlide:r}),n.createElement(w,{currentSlide:r,moveToSlide:e=>{a(e)},maxItems:t.length}))};function k(e){let{data:t}=e;return n.createElement(n.Fragment,null,n.createElement(a.Z,{active:"work"},n.createElement(l.kz,null,n.createElement(l.WM,null,n.createElement(l.n8,{center:!0},n.createElement(E,{images:t.strapiWork.workphotos})),n.createElement(l.n8,{rowGap:!0,columnCenter:!0},n.createElement("div",null,n.createElement(o.hh,{to:"/work"},n.createElement("i",{className:"fa-solid fa-chevron-left"}),"Back to overview")),n.createElement("div",null,n.createElement(i.X,{level:2},t.strapiWork.name),n.createElement(s.Z,null,t.strapiWork.category.name)),n.createElement(c.Z,{htmlAst:t.strapiWork.description.data.childMarkdownRemark.htmlAst,options:{p:{topMargin:!1}}}),n.createElement("div",null,n.createElement(o.ZP,{href:t.strapiWork.demoUrl,as:"a"},"View demo")))))))}}}]);
//# sourceMappingURL=component---src-pages-work-strapi-work-slug-js-d006628c914f66f2af2c.js.map