(self.webpackChunkjan_wagenaar_v2=self.webpackChunkjan_wagenaar_v2||[]).push([[682],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),a=n(7067);function l(t,n,o){return a()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,n){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return n&&r(l,n.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),a=n(6860),l=n(379),o=n(8206);e.exports=function(e){return r(e)||a(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1955:function(e,t,n){var r=n(7927);e.exports={MDXRenderer:r}},7927:function(e,t,n){var r=n(9100),a=n(319),l=n(9713),o=n(7316),i=["scope","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=n(7294),u=n(3497).mdx,f=n(2174).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,l=o(e,i),s=f(t),m=d.useMemo((function(){if(!n)return null;var e=c({React:d,mdx:u},s),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(l)))}),[n,t]);return d.createElement(m,c({},l))}},1250:function(e,t,n){"use strict";var r,a=n(1880),l=n(7294),o=n(6726),i=n(2121),s=n.n(i),c=n(6427),d=o.default.div.withConfig({displayName:"scroll-hint__ScrollHintWrapper",componentId:"sc-p7o46n-0"})(["display:none;position:absolute;right:0.25rem;bottom:0.75rem;transition:all ease-out .5s;animation-duration:2s;animation-iteration-count:infinite;animation-name:bounce;animation-timing-function:linear;backface-visibility:hidden;z-index:1;@keyframes bounce{0%{transform:translateY(0);}50%{transform:translateY(-0.625rem);}100%{transform:translateY(0);}}",""],c.Z.sm(r||(r=(0,a.Z)(["\n        display: block;\n    "])))),u=o.default.p.withConfig({displayName:"scroll-hint__ScrollHintCaption",componentId:"sc-p7o46n-1"})(["display:inline-block;margin:0;padding:0;font-weight:var(--font-weight-bold);"]),f=(0,o.default)(s()).withConfig({displayName:"scroll-hint__ScrollHintArrow",componentId:"sc-p7o46n-2"})(["display:inline-block;height:0.7rem;width:1.8rem;margin-left:var(--spacing-s);padding:0;fill:none;stroke:var(--color-neutral-9);stroke-linecap:round;stroke-linejoin:round;stroke-width:.07em;stroke-dasharray:200;stroke-dashoffset:0;"]);t.Z=function(){return l.createElement(d,null,l.createElement("div",{style:{transform:"rotate(90deg)"}},l.createElement(u,{onClick:function(){window.scrollTo(0,500)}},"Scroll"),l.createElement(f,null)))}},6811:function(e,t,n){"use strict";var r=n(6726),a=r.default.div.withConfig({displayName:"svgwrapper__SvgWrapper",componentId:"sc-ddqgux-0"})(["position:relative;height:auto;max-height:100%;box-sizing:border-box;"," "," "," & svg{height:100%;width:100%;}.dark-mode & svg .svg-fill-neutral-0{fill:var(--color-neutral-0);}.dark-mode & svg .svg-fill-neutral-1{fill:var(--color-neutral-1);}.dark-mode & svg .svg-fill-neutral-2{fill:var(--color-neutral-2);}.dark-mode & svg .svg-fill-neutral-3{fill:var(--color-neutral-3);}.dark-mode & svg .svg-fill-neutral-4{fill:var(--color-neutral-4);}.dark-mode & svg .svg-fill-neutral-5{fill:var(--color-neutral-5);}.dark-mode & svg .svg-fill-neutral-6{fill:var(--color-neutral-6);}.dark-mode & svg .svg-fill-neutral-7{fill:var(--color-neutral-7);}.dark-mode & svg .svg-fill-neutral-8{fill:var(--color-neutral-8);}.dark-mode & svg .svg-fill-neutral-9{fill:var(--color-neutral-9);}.dark-mode & svg .svg-fill-neutral-white{fill:var(--color-text);}.dark-mode & svg .svg-stroke-neutral-0{stroke:var(--color-neutral-0);}.dark-mode & svg .svg-stroke-neutral-1{stroke:var(--color-neutral-1);}.dark-mode & svg .svg-stroke-neutral-2{stroke:var(--color-neutral-2);}.dark-mode & svg .svg-stroke-neutral-3{stroke:var(--color-neutral-3);}.dark-mode & svg .svg-stroke-neutral-4{stroke:var(--color-neutral-4);}.dark-mode & svg .svg-stroke-neutral-5{stroke:var(--color-neutral-5);}.dark-mode & svg .svg-stroke-neutral-6{stroke:var(--color-neutral-6);}.dark-mode & svg .svg-stroke-neutral-7{stroke:var(--color-neutral-7);}.dark-mode & svg .svg-stroke-neutral-8{stroke:var(--color-neutral-8);}.dark-mode & svg .svg-stroke-neutral-9{stroke:var(--color-neutral-9);}.dark-mode & svg .svg-stroke-neutral-white{stroke:var(--color-text);}"],(function(e){return e.extrasmall&&(0,r.css)(["width:clamp(50px,var(--img-xs),100%);"])}),(function(e){return e.small&&(0,r.css)(["width:clamp(75px,var(--img-s),100%);"])}),(function(e){return e.medium&&(0,r.css)(["width:clamp(150px,var(--img-m),100%);"])}));t.Z=a},9957:function(e,t,n){"use strict";var r=n(6726).default.div.withConfig({displayName:"tag__Tag",componentId:"sc-185t9z-0"})(["display:inline-block;padding:var(--spacing-s) var(--spacing-base);border:var(--spacing-xxxs) dotted var(--color-neutral-9);font-size:var(--font-size-s);font-weight:var(--font-weight-bold);"]);t.Z=r},1294:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return N}});var a,l,o=n(7294),i=n(3497),s=n(1955);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=(l=a=function(e){function t(){return c(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this.updateIframeContent()},t.prototype.updateIframeContent=function(){var e=this.props,t=e.id,n=e.platform,r=e.preview,a=e.theme,l=e.height,o=this.iframeNode,i=o.document;o.contentDocument?i=o.contentDocument:o.contentWindow&&(i=o.contentWindow.document);var s='<html><head><base target="_parent"></head><body>'+('<div data-snack-id="'+t+'" data-snack-platform="'+n+'" data-snack-preview="'+r+'" data-snack-theme="'+a+'" style="overflow:hidden;background:#'+("dark"===a?"212733":"fafafa")+";border:1px solid rgba(0,0,0,.16);border-radius:4px;height:"+l+'px;width:100%"></div><script async src="https://snack.expo.io/embed.js"><\/script>')+"</body></html>";i.open(),i.writeln(s),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.height;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",height:r+18+"px",frameBorder:0,id:"expo-snack-"+n})},t}(o.PureComponent),a.defaultProps={platform:"ios",theme:"dark",preview:!0,height:505},l),f=u,m=n(6066),p=n(4579),g=n(6726),v=g.default.img.withConfig({displayName:"image__StyledImage",componentId:"sc-8u8oks-0"})(["width:auto;max-width:100%;height:100%;object-fit:cover;"]),k=g.default.div.withConfig({displayName:"image__StyledImageWrapper",componentId:"sc-8u8oks-1"})(["position:relative;display:flex;justify-content:center;margin:var(--spacing-m) 0;max-height:var(--img-m);width:100%;"]),y=function(e){var t=e.src,n=e.alt;return o.createElement(k,null,o.createElement(v,{src:t,alt:n}))},h=["node"],b=["node"],E=["node"],x=["node"],w=["node"],j=["node"],_=function(e){var t=e.children,n=e.options;return o.createElement(o.Fragment,null,o.createElement(i.MDXProvider,{components:{h2:function(e){e.node;var t=r(e,h);return o.createElement(p.X,Object.assign({},t,{level:2,noMargin:!0}))},h3:function(e){e.node;var t=r(e,b);return o.createElement(p.X,Object.assign({},t,{level:3,noMargin:!0}))},h4:function(e){e.node;var t=r(e,E);return o.createElement(p.X,Object.assign({},t,{level:4,noMargin:!0}))},h5:function(e){e.node;var t=r(e,x);return o.createElement(p.X,Object.assign({},t,{level:5,noMargin:!0}))},p:function(e){e.node;var t=r(e,w);return o.createElement(p.x,Object.assign({},t,{noTopMargin:!n.p.topMargin}))},a:m.PN,img:function(e){e.node;var t=r(e,j);return o.createElement(y,t)},ExpoSnack:f}},o.createElement(s.MDXRenderer,null,t)))};_.defaultProps={options:{p:{topMargin:!0}}};var N=_},7561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(7294),a=n(7251),l=n(1667),o=n(4579),i=n(6066),s=n(6811),c=n(1597),d=n(6726),u=d.default.div.withConfig({displayName:"ListSpaced__ListSpacedWrapper",componentId:"sc-1j0jepu-0"})([""]),f=d.default.div.withConfig({displayName:"ListSpaced__ListSpacedItem",componentId:"sc-1j0jepu-1"})(["display:flex;flex-flow:row nowrap;flex:1 1 100%;margin-bottom:var(--spacing-s);align-items:flex-end;"]),m=(0,d.default)(o.x).withConfig({displayName:"ListSpaced__ListSpacedItemName",componentId:"sc-1j0jepu-2"})(["align-self:flex-start;flex-wrap:nowrap;margin:0;font-weight:var(--font-weight-semibold);"]),p=d.default.div.withConfig({displayName:"ListSpaced__ListSpacedItemSpacer",componentId:"sc-1j0jepu-3"})(["flex:1;height:1rem;min-width:1rem;margin:0 var(--spacing-xs);border-bottom:var(--spacing-xxxs) dotted var(--color-neutral-9);"]),g=(0,d.default)(o.x).withConfig({displayName:"ListSpaced__ListSpacedItemLevel",componentId:"sc-1j0jepu-4"})(["align-self:flex-end;margin:0;word-break:normal;"]),v=function(e){var t=e.items;return r.createElement(u,null,t.map((function(e){return r.createElement(f,{key:e.id},r.createElement(m,null,e.name),r.createElement(p,null),r.createElement(g,null,e.level))})))},k=function(){var e=(0,c.K2)("2619533038").allStrapiSkill.nodes.map((function(e,t){return{id:e.order,name:e.name,level:e.level}}));return r.createElement(v,{items:e})},y=n(5785),h=n(4942),b=n(5697),E=n.n(b),x=d.default.button.withConfig({displayName:"buttons__BaseButton",componentId:"sc-m6abix-0"})(["padding:var(--spacing-s) var(--spacing-xs);font-size:1rem;color:var(--color-text);background:none;outline:none;border:none;cursor:pointer;"]),w=((0,d.default)(x).withConfig({displayName:"buttons__Button",componentId:"sc-m6abix-1"})(["position:relative;display:inline-block;margin-top:var(--spacing-s);padding:var(--spacing-base) var(--spacing-m);color:var(--color-neutral-0);font-weight:var(--font-weight-bold);text-align:center;background-color:var(--color-secondary-1);transition:all var(--transition-base);&:hover,&:focus,&:active{padding-left:calc(var(--spacing-m) + var(--spacing-s));background-color:var(--color-neutral-9);text-decoration:underline;}"]),(0,d.default)(x).withConfig({displayName:"buttons__TextButton",componentId:"sc-m6abix-2"})(['position:relative;display:inline-block;font-size:var(--font-size-m);font-weight:var(--font-weight-semibold);z-index:0;&::after{content:"";display:block;position:absolute;bottom:var(--spacing-xs);left:0;width:100%;height:0.1rem;background-color:var(--color-primary-1);transition:all var(--transition-fast);transition-delay:0.1s;pointer-events:none;z-index:-1;}&:hover::after,&:focus::after,&:active::after{height:0.2rem;}'])),j=n(9957),_=n(1294);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.items,n=r.useState((function(){return t.map((function(e){return M(M({},e),{},{isOpen:!1})}))})),a=n[0],l=n[1],o=r.useState(!1),i=o[0],s=o[1],c=function(e){var t=(0,y.Z)(a),n=t.findIndex((function(t){return t.id===e}));t[n].isOpen=!t[n].isOpen,l(t);var r=a.some((function(e){return!0===e.isOpen}));s(r)};return r.createElement(L,null,r.createElement(A,null,i&&r.createElement(W,{onClick:function(){var e=(0,y.Z)(a);e.forEach((function(e){return e.isOpen=!1})),l(e),s(!1)}},"Collapse all")),a.map((function(e){return r.createElement(C,{key:e.id,item:e,isOpen:e.isOpen,triggerClose:c})})))},L=d.default.div.withConfig({displayName:"accordion__AccordionGroupWrapper",componentId:"sc-6d3dex-0"})(["display:flex;flex-flow:column wrap;gap:var(--spacing-s);"]),C=function(e){var t=e.item,n=e.isOpen,a=e.triggerClose;return r.createElement(S,{open:n},r.createElement(I,{onClick:function(e){a(t.id),e.preventDefault()}},t.title,r.createElement(P,{isOpen:n},r.createElement("i",{class:"fa-solid fa-chevron-down"}))),r.createElement(Z,null,r.createElement(o.x,null,t.date),r.createElement(j.Z,null,t.tag),r.createElement(_.Z,null,t.description)))},S=d.default.details.withConfig({displayName:"accordion__AccordionItem",componentId:"sc-6d3dex-1"})([""]),I=d.default.summary.withConfig({displayName:"accordion__AccordionItemSummary",componentId:"sc-6d3dex-2"})(["display:inline-block;position:relative;font-weight:var(--font-weight-bold);padding:var(--spacing-s) 0;cursor:pointer;user-select:none;outline:none;list-style:none;&::-webkit-details-marker{display:none;"]),P=d.default.div.withConfig({displayName:"accordion__AccordionMarker",componentId:"sc-6d3dex-3"})(["display:inline-block;margin-left:var(--spacing-s);transition:transform var(--transition-fast);transform:rotate(","deg);"],(function(e){return e.isOpen?"180":"0"}));P.propTypes={isOpen:E().bool};var Z=d.default.div.withConfig({displayName:"accordion__AccordionItemContent",componentId:"sc-6d3dex-4"})(["overflow:hidden;flex:1;gap:var(--spacing-s);"]),A=d.default.div.withConfig({displayName:"accordion__AccordionGroupCollapseContainer",componentId:"sc-6d3dex-5"})(["height:1.5rem;"]),W=(0,d.default)(w).withConfig({displayName:"accordion__AccordionGroupCollapseButton",componentId:"sc-6d3dex-6"})(["font-size:var(--font-size-s);"]),z=function(){var e=(0,c.K2)("2518414805").allStrapiExperience.nodes.map((function(e,t){return{id:t,title:e.organizationName,date:e.startedOn+" - "+(e.leftOn||"current"),tag:e.jobTitle,description:e.description.data.childMdx.body}}));return r.createElement(O,{items:e})},B=function(){var e=(0,c.K2)("1347461330").allStrapiEducation.nodes.map((function(e,t){return{id:t,title:e.name,date:e.date,tag:e.organizationName,description:e.description.data.childMdx.body}}));return r.createElement(O,{items:e})},D=n(1250),X=n(8945),T=n(2254),R=n.n(T),H=n(5869),q=n.n(H),F=n(7425),G=n.n(F),K=n(6503),Y=n.n(K),J=n(8221),U=n.n(J),V=n(6721),$=n.n(V),Q=function(){return r.createElement(l.kz,null,r.createElement(l.WM,{center:!0,reverse:!0},r.createElement(l.n8,{height:"50vw",center:!0},r.createElement(l.cd,{maxWidth:"20rem"},r.createElement(o.X,{level:1},"Hi, I'm Jan"),r.createElement(o.x,{bold:!0},"Creative Low Code developer from Rotterdam."),r.createElement(i.ZP,{href:"https://www.linkedin.com/in/jan-wagenaar/",as:"a"},"Connect with me at LinkedIn"))),r.createElement(l.n8,{height:"50vw",noPadding:!0},r.createElement(X.S,{src:"../../../images/pf.jpg",alt:"Profile picture",style:{height:"100%"},__imageData:n(7919)})),r.createElement(D.Z,null)))},ee=function(){return r.createElement(l.kz,null,r.createElement(l.WM,{center:!0},r.createElement(l.n8,{center:!0},r.createElement(l.cd,{maxWidth:"15rem",center:!0},r.createElement(s.Z,{extrasmall:!0},r.createElement(R(),null)),r.createElement(o.X,{level:3,center:!0,marginTop:"var(--spacing-s)"},"Playful"),r.createElement(o.x,{center:!0,noMargin:!0},"A creative twist helps to spark interaction with users."))),r.createElement(l.n8,{center:!0},r.createElement(l.cd,{maxWidth:"15rem",center:!0},r.createElement(s.Z,{extrasmall:!0},r.createElement(q(),null)),r.createElement(o.X,{level:3,center:!0,marginTop:"var(--spacing-s)"},"Powerful"),r.createElement(o.x,{center:!0,noMargin:!0},"Efficient interfaces help generate business value."))),r.createElement(l.n8,{center:!0},r.createElement(l.cd,{maxWidth:"15rem",center:!0},r.createElement(s.Z,{extrasmall:!0},r.createElement(G(),null)),r.createElement(o.X,{level:3,center:!0,marginTop:"var(--spacing-s)"},"Personal"),r.createElement(o.x,{center:!0,noMargin:!0},"Tailored experiences build trust.")))))},te=function(){return r.createElement(l.kz,null,r.createElement(l.WM,{center:!0,reverse:!0},r.createElement(l.n8,{center:!0},r.createElement(l.cd,null,r.createElement(o.X,{level:3,marginBottom:"2rem"},"Skills"),r.createElement(k,null))),r.createElement(l.n8,{center:!0},r.createElement(s.Z,{medium:!0},r.createElement(Y(),null)))),r.createElement(l.WM,{center:!0},r.createElement(l.n8,{center:!0},r.createElement(s.Z,{medium:!0},r.createElement(U(),null))),r.createElement(l.n8,{center:!0},r.createElement(l.cd,{maxWidth:"30rem",style:{width:"100%"}},r.createElement(o.X,{level:3,marginBottom:"0"},"Places I've worked at"),r.createElement(z,null)))),r.createElement(l.WM,{center:!0,reverse:!0},r.createElement(l.n8,{center:!0},r.createElement(l.cd,{maxWidth:"30rem",style:{width:"100%"}},r.createElement(o.X,{level:3,marginBottom:"0"},"What I've learned"),r.createElement(B,null))),r.createElement(l.n8,{center:!0},r.createElement(s.Z,{medium:!0},r.createElement($(),null)))))},ne=function(){return r.createElement(r.Fragment,null,r.createElement(a.Z,{active:"about"},r.createElement(Q,null),r.createElement(ee,null),r.createElement(te,null)))}},6721:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about"),r.createElement("polygon",{className:"svg-fill-neutral-6 svg-stroke-neutral-8",points:"201.46 53.72 100.98 106.93 0.5 53.72 100.98 0.5 201.46 53.72",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:1}),r.createElement("polygon",{className:"svg-fill-neutral-0 svg-stroke-neutral-8",points:"100.98 144.98 0.5 91.77 0.5 53.72 100.98 106.93 100.98 144.98",fill:"#1d1d1b",stroke:"#1d1d1b",strokeLinejoin:"round",key:2}),r.createElement("polygon",{className:"svg-fill-neutral-4 svg-stroke-neutral-8",points:"100.98 144.98 201.46 91.77 201.46 53.72 100.98 106.93 100.98 144.98",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:3}),r.createElement("ellipse",{className:"svg-fill-neutral-7 svg-stroke-neutral-9",cx:"105.01",cy:"24.35",rx:"11.52",ry:"15.95",transform:"translate(-1.99 37.45) rotate(-20.04)",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:4}),r.createElement("ellipse",{className:"svg-fill-neutral-7 svg-stroke-neutral-9",cx:"133.41",cy:"43.12",rx:"11.52",ry:"15.95",transform:"translate(-5.71 60.51) rotate(-25.04)",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:5}),r.createElement("path",{className:"svg-stroke-neutral-9",d:"M109.81,84.45c-2.79-16.63,5.8-19.53,9.45-21.6C120.72,62,132.44,55,146,47",fill:"none",stroke:"#1d1d1b",strokeLinejoin:"round",key:6}),r.createElement("path",{className:"svg-stroke-neutral-9",d:"M92.87,19.4c-13.53,8.06-25.25,15-26.71,15.87-3.65,2.08-12.81,7.37-9.45,21.6",fill:"none",stroke:"#1d1d1b",strokeLinejoin:"round",key:7}),r.createElement("path",{className:"svg-fill-neutral-7 svg-stroke-neutral-9",d:"M117.07,29.21c1.58-1.8,6.6,2.6,5,4.4",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:8})])}a.defaultProps={id:"svg-education","data-name":"svg-education",viewBox:"0 0 201.96 145.48"},e.exports=a,a.default=a},8221:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about"),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M7.72,197.35c27.9-10.9,79.42-48.79,79.42-48.79L75.85,128.49S26.91,154.33,0,155.93",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:1}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M75.56,132.61s-1.29-9.09,7.76-20.87c4.73-10.43,6-17.31,9.92-15.93s2,6.83,2,6.83l-1.6,7.91s7.66-2.79,10.13-4.82h0l14.14-11.32a3.6,3.6,0,0,1,4.75,5.3l-.19.16-7.36,5.92A71.11,71.11,0,0,0,109.9,111a12.52,12.52,0,0,0,6.21-1.27h0l14.28-6.25a3.62,3.62,0,0,1,4,5.85,3.16,3.16,0,0,1-1,.62l-13.76,6.09a42.24,42.24,0,0,0-5.11,3.73h0a11.71,11.71,0,0,0,6.37.7l13.25-3.68a3.59,3.59,0,0,1,3.55,1,3.59,3.59,0,0,1-1.59,6l-13.21,3.78h0a35,35,0,0,0-4.9,2.52c.86.35,5.56.35,5.57.35l11.66-1a3.19,3.19,0,0,1,2.55,5.48,3.13,3.13,0,0,1-1.93.82l-12.39,1.14h0a51,51,0,0,0-8.77,3.34c-.54.33-1.12.67-1.77,1l-.2.12h0c-8,4.37-23.65,9.78-29.68,6",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:2}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M137.85,0c-2.42,37.79-8.94,81.18-8.94,81.18l-23,1.16s-2.59-47.17-4.17-80.19",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:3}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M109.25,79.93s-8.38,3.75-13.5,17.7c-6.3,9.56-11.43,14.34-8.19,16.89s6.83-2,6.83-2l5.83-5.58s1.73,8,1.34,11.15l0,0-2,18a3.59,3.59,0,0,0,7,1.19c0-.09,0-.25,0-.25l1.08-9.38a69.12,69.12,0,0,1,1.64-7.2,12.43,12.43,0,0,1,2.23,5.92h0l2.35,15.42a3.62,3.62,0,0,0,7.09.28,3.53,3.53,0,0,0,0-1.17l-2.2-14.89a41.54,41.54,0,0,1,.43-6.32h0a11.89,11.89,0,0,1,4,5l4,13.17a3.61,3.61,0,1,0,6.92-2l-3.86-13.19h0a36,36,0,0,1-.48-5.49c.75.53,3.27,4.51,3.27,4.52l5.4,10.38a3.17,3.17,0,0,0,2.19,1.71,3.21,3.21,0,0,0,3.8-2.48,3.12,3.12,0,0,0-.33-2.07l-5.65-11.08h0a51.28,51.28,0,0,1-1.86-9.2c0-.63,0-1.31-.07-2v-.23s0,0,0,0c-.6-9.14-4.35-25.22-10.81-28.27",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:4}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M221.73,202.21c-27.89-10.9-79.42-48.79-79.42-48.79l11.29-20.06s48.94,25.83,75.83,27.44",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:5}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M153.89,137.47s1.3-9.08-7.76-20.86c-4.73-10.43-6-17.32-9.92-15.94s-2,6.83-2,6.83l1.6,7.91s-7.66-2.78-10.14-4.82l0,0L111.53,99.29a3.59,3.59,0,0,0-4.74,5.29l.19.17,7.35,5.91a69.56,69.56,0,0,1,5.22,5.24,12.53,12.53,0,0,1-6.2-1.28h0l-14.29-6.24a3.62,3.62,0,0,0-4,5.84,3.31,3.31,0,0,0,1,.63l13.76,6.09a42.24,42.24,0,0,1,5.11,3.73h0a11.79,11.79,0,0,1-6.37.71l-13.24-3.69a3.61,3.61,0,0,0-3.55,1,3.65,3.65,0,0,0,.1,5.17,3.56,3.56,0,0,0,1.48.82l13.22,3.78h0a36.19,36.19,0,0,1,4.9,2.52c-.86.35-5.56.36-5.57.36l-11.67-1a3.18,3.18,0,0,0-2.61.94,3.22,3.22,0,0,0,.07,4.54,3.18,3.18,0,0,0,1.93.83L106,141.75h0a51.9,51.9,0,0,1,8.78,3.34c.53.33,1.12.68,1.76,1l.2.12h0c8.06,4.37,23.66,9.77,29.68,5.94",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:6}),r.createElement("path",{className:"svg-fill-neutral-1 svg-stroke-neutral-9",d:"M200.59,82.37c-7.23,4.15-47.15,29.85-54.35,34.05-1.55.91-3,2-4.54,2.94a8.54,8.54,0,0,0-2.68,2.83c-2.5,3.93-5.78,6.88-10.44,8-1.59.39-3,.28-4-1.22-.22-.33-.48-.35-.87-.24-3.46,1-6.32-.94-6.6-4.42,0-.45-.22-.54-.59-.65a4.79,4.79,0,0,1-2.09-7.53,1.47,1.47,0,0,0,.28-2c-.75-1.44-.2-2.79.78-3.95a17.23,17.23,0,0,1,7.64-5.2,36.94,36.94,0,0,1,5.07-1.51,4.63,4.63,0,0,0,1.79-.92c5-3.72,10.06-7.36,15-11.21,3.11-2.43,39-26.28,42.12-28.66",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:7}),r.createElement("line",{className:"svg-stroke-neutral-9",x1:"124.06",y1:"128.71",x2:"127.56",y2:"127.2",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:8}),r.createElement("line",{className:"svg-stroke-neutral-9",x1:"116.96",y1:"123.9",x2:"121.48",y2:"121.15",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:9}),r.createElement("line",{className:"svg-stroke-neutral-9",x1:"114.95",y1:"114.88",x2:"118.59",y2:"114.38",fill:"#fff",stroke:"#000",strokeMiterlimit:"10",key:10}),r.createElement("path",{className:"svg-fill-neutral-9",d:"M132.2,101s8.57-2.09,12.28.8,7.54-1.63,3.8-5.28,1.53-8.68,1.53-8.68Z",key:11}),r.createElement("path",{className:"svg-fill-neutral-9",d:"M169,89.7s-3,3.43-1.52,5.37c2.43,3.2-1.86,1.59-.8,4.24s10.4-1.47,14.89-4.73-.86-4.33.25-6.15C183.82,85.1,173.21,85.29,169,89.7Z",key:12}),r.createElement("path",{className:"svg-fill-neutral-9",d:"M133.64,110.88c-2.8.09-5.1-.17-4.42,2s.87,1.79-.12,3,.51,4,2.27,2,2.44-3,3.64-2.13,4.67-.93,2.38-3.14S133.64,110.88,133.64,110.88Z",key:13}),r.createElement("path",{className:"svg-fill-neutral-9",d:"M163.13,79s5.05-1.78,8.25-.37,5.64-.68,6.49-3.45,1.2-4.6,2.95-4.71,1.28-4.27,1.28-4.27Z",key:14})])}a.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 229.45 202.68"},e.exports=a,a.default=a},2254:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about"),r.createElement("path",{className:"svg-fill-neutral-8",d:"M70.51,51.3c0,6.15,0,12.3,0,18.45,0,.87-.26,1.14-1.13,1.11-2.24,0-4.48,0-6.72,0-1.19,0-1.2,0-1.2-1.2V44.91c0-3.54.11-7.08,0-10.6-.39-9.74-4.9-17.15-13.31-21.93a25.62,25.62,0,0,0-31.05,4.25A24.58,24.58,0,0,0,9.44,34.37c-.08,11.52,0,23,0,34.56,0,.32,0,.63,0,.95.06.74-.25,1-1,1q-3.54-.06-7.07,0c-.78,0-1-.27-1-1C.39,57.71.25,45.55.45,33.4A32.7,32.7,0,0,1,8.54,12.6,33.8,33.8,0,0,1,28.59.7,34.1,34.1,0,0,1,58.27,8.5a34.31,34.31,0,0,1,12,22.13,23.73,23.73,0,0,1,.25,3.26c0,5.81,0,11.61,0,17.41Z",key:1}),r.createElement("path",{className:"svg-fill-neutral-8",d:"M53.27,53.51V69.63c0,1.21,0,1.22-1.25,1.22H45.38c-1.12,0-1.14,0-1.14-1.18q0-15,0-29.91a19.77,19.77,0,0,0-1.11-7.28c-1-2.65-2.71-4.67-5.59-5.41a7.87,7.87,0,0,0-9.41,4.65,17.36,17.36,0,0,0-1.43,7.21q0,15.26,0,30.52c0,1.4,0,1.4-1.43,1.4-2.21,0-4.42,0-6.63,0-.75,0-1-.23-1-1,0-10.51-.07-21,.06-31.55.06-5.23,1.35-10.19,4.76-14.37a16.87,16.87,0,0,1,27.68,2.34,23.92,23.92,0,0,1,3.09,11.53c.1,5.23,0,10.46,0,15.69Z",key:2})])}a.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 70.87 70.87"},e.exports=a,a.default=a},5869:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about-highlight"),r.createElement("path",{className:"svg-fill-neutral-8",d:"M38,23.67a9.22,9.22,0,1,1-9.21,9.22A9.24,9.24,0,0,1,38,23.67m0-9A18.22,18.22,0,1,0,56.19,32.89,18.21,18.21,0,0,0,38,14.67Z",key:1}),r.createElement("path",{className:"svg-fill-neutral-8",d:"M38,9A23.89,23.89,0,1,1,14.08,32.89,23.92,23.92,0,0,1,38,9m0-9a32.89,32.89,0,1,0,32.9,32.89A32.89,32.89,0,0,0,38,0Z",key:2}),r.createElement("circle",{cx:"37.97",cy:"32.89",r:"3.2",fill:"#f3c130",key:3}),r.createElement("rect",{x:"20.13",y:"26.73",width:"6.39",height:"41.64",transform:"translate(40.45 -2.57) rotate(45)",fill:"#f3c130",key:4}),r.createElement("polygon",{points:"14.78 60.61 12.52 58.35 10.26 56.09 5.05 55.74 0 60.8 7.28 63.59 10.07 70.87 15.13 65.81 14.78 60.61",fill:"#f3c130",key:5})])}a.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 70.87 70.87"},e.exports=a,a.default=a},7425:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about"),r.createElement("path",{className:"svg-fill-neutral-8",d:"M52,12.92a9.83,9.83,0,0,1,7.23,16.51l0,0,0,0-.32.35L35.45,54l-24-24.77a9.83,9.83,0,0,1,7.4-16.32,9.73,9.73,0,0,1,5.74,1.87l4.84,4.35,6.09,5.47,6-5.54,4.29-4A9.67,9.67,0,0,1,52,12.92m0-9A18.8,18.8,0,0,0,39.9,8.34l-4.45,4.11L30.31,7.83A18.83,18.83,0,0,0,4.85,35.36l30.6,31.58,30-31,.42-.45A18.83,18.83,0,0,0,52,3.92Z",key:1})])}a.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 70.87 70.87"},e.exports=a,a.default=a},6503:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"about"),r.createElement("polygon",{className:"svg-fill-neutral-4 svg-stroke-neutral-8",points:"146.06 45.76 97.54 71.46 49.02 45.76 97.54 20.06 146.06 45.76",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:1}),r.createElement("polygon",{className:"svg-fill-neutral-0 svg-stroke-neutral-8",points:"97.54 89.83 49.02 64.14 49.02 45.76 97.54 71.46 97.54 89.83",fill:"#1d1d1b",stroke:"#1d1d1b",strokeLinejoin:"round",key:2}),r.createElement("polygon",{className:"svg-fill-neutral-7 svg-stroke-neutral-8",points:"97.54 89.83 146.06 64.14 146.06 45.76 97.54 71.46 97.54 89.83",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:3}),r.createElement("polygon",{className:"svg-fill-neutral-4 svg-stroke-neutral-8",points:"194.58 89.83 146.06 115.53 97.54 89.83 146.06 64.14 194.58 89.83",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:4}),r.createElement("polygon",{className:"svg-fill-neutral-0 svg-stroke-neutral-8",points:"146.06 133.91 97.54 108.21 97.54 89.83 146.06 115.53 146.06 133.91",fill:"#1d1d1b",stroke:"#1d1d1b",strokeLinejoin:"round",key:5}),r.createElement("polygon",{className:"svg-fill-neutral-7 svg-stroke-neutral-8",points:"146.06 133.91 194.58 108.21 194.58 89.83 146.06 115.53 146.06 133.91",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:6}),r.createElement("polygon",{className:"svg-fill-neutral-4 svg-stroke-neutral-8",points:"97.54 89.33 49.02 115.03 0.5 89.33 49.02 63.63 97.54 89.33",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:7}),r.createElement("polygon",{className:"svg-fill-neutral-0 svg-stroke-neutral-8",points:"49.02 133.41 0.5 107.71 0.5 89.33 49.02 115.03 49.02 133.41",fill:"#1d1d1b",stroke:"#1d1d1b",strokeLinejoin:"round",key:8}),r.createElement("polygon",{className:"svg-fill-neutral-8 svg-stroke-neutral-8",points:"49.02 133.41 97.54 107.71 97.54 89.33 49.02 115.03 49.02 133.41",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"round",key:9}),r.createElement("polygon",{className:"svg-fill-neutral-5 svg-stroke-neutral-9",points:"98.26 0.44 132.9 18.59 127.22 48.24 92.58 30.1 98.26 0.44",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:10}),r.createElement("polygon",{className:"svg-fill-neutral-5 svg-stroke-neutral-9",points:"92.54 29.79 127.18 47.94 102.2 61.42 67.57 43.27 92.54 29.79",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:11}),r.createElement("polygon",{className:"svg-fill-neutral-9",points:"89.02 44.55 97.1 48.79 91.28 51.93 83.2 47.7 89.02 44.55",fill:"#1d1d1b",key:12}),r.createElement("polygon",{className:"svg-fill-neutral-8 svg-stroke-neutral-9",points:"53.85 73.52 19.21 91.66 44.19 105.15 78.83 87 53.85 73.52",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:13}),r.createElement("polygon",{className:"svg-fill-neutral-8 svg-stroke-neutral-9",points:"141.23 74.02 175.87 92.16 150.89 105.65 116.26 87.5 141.23 74.02",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:14}),r.createElement("rect",{className:"svg-fill-neutral-9",x:"34.87",y:"80.76",width:"20.83",height:"1.96",transform:"translate(127.05 36.5) rotate(90.04)",key:15}),r.createElement("polygon",{className:"svg-fill-neutral-2",points:"44.5 92.3 46.05 92.3 45.29 94.64 44.5 92.3",fill:"#fff",key:16}),r.createElement("path",{className:"svg-fill-neutral-7",d:"M45.84,92.45l-.35,1.09-.2.62-.21-.62-.37-1.09h1.13m.42-.3h-2l.49,1.49.5,1.48.48-1.49.49-1.48Z",key:17}),r.createElement("polygon",{className:"svg-fill-neutral-7",points:"45.57 93.77 44.98 93.78 45.28 94.54 45.57 93.77",key:18}),r.createElement("path",{className:"svg-stroke-neutral-9",d:"M45.29,95.12S37.57,94,39.44,90.29s12.5,2.75,12.69-4.5",fill:"none",stroke:"#000",strokeMiterlimit:"10",key:19}),r.createElement("ellipse",{className:"svg-fill-neutral-3 svg-stroke-neutral-9",cx:"145.98",cy:"85.24",rx:"11.08",ry:"6.38",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:20}),r.createElement("ellipse",{className:"svg-fill-neutral-7 svg-stroke-neutral-9",cx:"145.98",cy:"83.99",rx:"11.08",ry:"6.38",fill:"#fff",stroke:"#1d1d1b",strokeLinejoin:"bevel",key:21}),r.createElement("line",{className:"svg-fill-neutral-7 svg-stroke-neutral-9",x1:"157.27",y1:"84.81",x2:"172.97",y2:"85.69",fill:"none",stroke:"#1d1d1b",strokeLinejoin:"round",strokeWidth:"2",key:22})])}a.defaultProps={id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 195.08 134.41"},e.exports=a,a.default=a},2121:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M0.7,5h29 M25.7,10l4-5l-4-5"}))}a.defaultProps={version:"1.1",id:"contact-phone",x:"0px",y:"0px",viewBox:"0 0 30.5 10",enableBackground:"new 0 0 30.5 10",xmlSpace:"preserve"},e.exports=a,a.default=a},7919:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8a8a8","images":{"fallback":{"src":"/static/53ed68ce112709b72e9176ee3bd99253/ddc41/pf.jpg","srcSet":"/static/53ed68ce112709b72e9176ee3bd99253/0e51d/pf.jpg 224w,\\n/static/53ed68ce112709b72e9176ee3bd99253/1701d/pf.jpg 447w,\\n/static/53ed68ce112709b72e9176ee3bd99253/ddc41/pf.jpg 894w","sizes":"(min-width: 894px) 894px, 100vw"},"sources":[{"srcSet":"/static/53ed68ce112709b72e9176ee3bd99253/f42a0/pf.webp 224w,\\n/static/53ed68ce112709b72e9176ee3bd99253/9722b/pf.webp 447w,\\n/static/53ed68ce112709b72e9176ee3bd99253/67872/pf.webp 894w","type":"image/webp","sizes":"(min-width: 894px) 894px, 100vw"}]},"width":894,"height":895}')}}]);
//# sourceMappingURL=component---src-pages-about-js-ff1328513968c51d2846.js.map