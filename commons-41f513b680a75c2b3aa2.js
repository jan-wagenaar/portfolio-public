(self.webpackChunkjan_wagenaar_v2=self.webpackChunkjan_wagenaar_v2||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},5931:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),o=n(2788),i=n(1883);const a=o.default.a.withConfig({displayName:"download-link__StyledDownloadLink",componentId:"sc-1u99x9x-0"})(["position:relative;display:inline;text-decoration:inherit;color:inherit;font-size:var(--font-size-m);font-weight:var(--font-weight-semibold);background-image:linear-gradient(var(--color-primary-1),var(--color-primary-1));background-position:0% 135%;background-repeat:no-repeat;background-size:100% 0.4rem;transition:background-size var(--transition-fast);transition-delay:0.1s;overflow:visible;z-index:0;cursor:pointer;&:hover,&:focus,&:active{background-size:100% 0.6rem;}& svg.svg-inline--fa{margin-left:var(--spacing-xs);margin-right:var(--spacing-xxs);}"]);var c=e=>{let{children:t,to:n}=e;return r.createElement(a,{href:n,"data-splitbee-event":"Download file","data-splitbee-event-filepath":n},t,r.createElement("i",{className:"fa-solid fa-file-arrow-down"}))};const l=e=>{let{children:t,to:n,activeClassName:o,partiallyActive:i,...a}=e;const l=/^\/(?!\/)/.test(n),f=/\.[0-9a-z]+$/i.test(n);return l?f?r.createElement(c,Object.assign({to:n},a),t):r.createElement(s,Object.assign({to:n,activeClassName:o,partiallyActive:i},a),t):r.createElement(u,Object.assign({href:n},a),t)};l.defaultProps={partiallyActive:!0};const s=(0,o.default)(i.rU).withConfig({displayName:"base-link__StyledGatsbyLink",componentId:"sc-12ujxhx-0"})(["position:relative;font-size:1rem;text-decoration:inherit;color:inherit;box-sizing:border-box;transition-delay:0.1s;border:0;outline:0;"]),u=o.default.a.withConfig({displayName:"base-link__StyledAnchorLink",componentId:"sc-12ujxhx-1"})(["position:relative;font-size:1rem;text-decoration:inherit;color:inherit;box-sizing:border-box;transition-delay:0.1s;border:0;outline:0;word-break:break-word;"]);var f=l},111:function(e,t,n){"use strict";var r,o=n(1880),i=n(2788),a=n(5931),c=n(6427);const l=(0,i.default)(a.Z).withConfig({displayName:"menu-link__MenuLink",componentId:"sc-n5bpiq-0"})(['position:relative;display:inline-block;margin:var(--spacing-s) var(--spacing-base);font-weight:var(--font-weight-bold);font-size:var(--font-size-l);text-transform:uppercase;z-index:0;&::after{content:"";display:block;position:absolute;bottom:0;left:-0.3rem;width:0;height:0.5rem;background-color:var(--color-primary-1);transition:all var(--transition-fast);transition-delay:0.1s;pointer-events:none;z-index:-1;}&:hover::after,&:focus::after,&:active::after{width:calc(100% + 0.6rem);}&[activelink="true"]::after{width:calc(100% + 0.6rem);}.font-loading &{font-family:Calibri;font-size:1.25rem;}',""],c.Z.sm(r||(r=(0,o.Z)(["\n        & {\n            font-size: var(--font-size-m);\n        }\n    "]))));t.Z=l},4579:function(e,t,n){"use strict";n.d(t,{X:function(){return i},x:function(){return c}});var r=n(2788),o=n(7294);const i=e=>{let{level:t,center:n,marginTop:r,marginBottom:i,noMargin:c,children:l}=e;const s="h"+t;return o.createElement(a,{as:s,level:t,center:n,marginTop:r,marginBottom:i,noMargin:c},l)},a=r.default.h2.withConfig({displayName:"typography__HeaderObject",componentId:"sc-eic1r0-0"})(["font-size:",";"," margin-top:",";margin-bottom:",";",""],(e=>{let{level:t}=e;switch(t){case 1:return"var(--font-size-xxxl)";case 2:return"var(--font-size-xxl)";case 3:return"var(--font-size-xl)";case 4:return"var(--font-size-l)";default:return"var(--font-size-m)"}}),(e=>e.noMargin&&(0,r.css)(["margin:0;"])),(e=>{let{marginTop:t}=e;return t||"0"}),(e=>{let{marginBottom:t}=e;return t||"var(--spacing-s)"}),(e=>e.center&&(0,r.css)(["text-align:center;"]))),c=r.default.p.withConfig({displayName:"typography__Text",componentId:"sc-eic1r0-1"})(["  font-size:",";"," "," "," "," "," "," ",""],(e=>{let{level:t}=e;switch(t){case 3:default:return"var(--font-size-m)";case 4:return"var(--font-size-s)";case 5:return"var(--font-size-xs)"}}),(e=>{let{semibold:t}=e;return t&&(0,r.css)(["font-weight:var(--font-weight-semibold);"])}),(e=>{let{bold:t}=e;return t&&(0,r.css)(["font-weight:var(--font-weight-bold);"])}),(e=>{let{black:t}=e;return t&&(0,r.css)(["font-weight:var(--font-weight-black);"])}),(e=>{let{italic:t}=e;return t&&(0,r.css)(["font-style:italic;"])}),(e=>{let{center:t}=e;return t&&(0,r.css)(["text-align:center;"])}),(e=>{let{noMargin:t}=e;return t&&(0,r.css)(["margin:0;"])}),(e=>{let{noTopMargin:t}=e;return t&&(0,r.css)(["margin-top:0;"])}))},6427:function(e,t,n){"use strict";var r=n(2788);const o={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},i=Object.keys(o).reduce(((e,t)=>(e[t]=function(){return(0,r.css)(["@media (min-width:","){",";}"],o[t],r.css.apply(void 0,arguments))},e)),{});t.Z=i},1667:function(e,t,n){"use strict";n.d(t,{J3:function(){return g},WB:function(){return s},WM:function(){return d},cd:function(){return m},kz:function(){return f},m6:function(){return u},n8:function(){return p}});var r,o,i,a=n(1880),c=n(2788),l=n(6427);const s=c.default.div.withConfig({displayName:"layout__LayoutWrapper",componentId:"sc-14cxk76-0"})(["position:relative;display:flex;flex-direction:column;height:100%;overflow-y:scroll;"]),u=c.default.div.withConfig({displayName:"layout__LayoutPageContainer",componentId:"sc-14cxk76-1"})(["  flex:1;",""],l.Z.md(r||(r=(0,a.Z)(["\n    & {\n        padding: var(--spacing-m);\n        padding-top: 0;\n      }\n    "])))),f=c.default.div.withConfig({displayName:"layout__LayoutContainer",componentId:"sc-14cxk76-2"})(["position:relative;flex:1;margin-bottom:var(--spacing-m);background-color:var(--color-neutral-1);&:only-child{height:100%;}&:first-child{margin-top:0;}"]),d=c.default.div.withConfig({displayName:"layout__LayoutRow",componentId:"sc-14cxk76-3"})(["position:relative;display:flex;flex-flow:",";flex:1;"," &:only-child{height:100%;}",""],(e=>e.reverse?"column-reverse wrap":"column wrap"),(e=>{let{center:t}=e;return t&&(0,c.css)(["justify-content:center;align-items:center;"])}),l.Z.md(o||(o=(0,a.Z)(["\n        & {\n            flex-flow: row wrap;\n        }\n    "])))),p=c.default.div.withConfig({displayName:"layout__LayoutItemWrapper",componentId:"sc-14cxk76-4"})(["position:relative;display:flex;flex:1;flex-flow:column nowrap;padding:",";width:100%;height:auto;box-sizing:border-box;"," "," "," "," "," "," &:first-child{margin-top:0;}",""],(e=>{let{noPadding:t}=e;return t?"0":"var(--spacing-m)"}),(e=>{let{overflowHidden:t}=e;return t&&(0,c.css)(["overflow:hidden;"])}),(e=>{let{center:t}=e;return t&&(0,c.css)(["justify-content:center;align-items:center;"])}),(e=>{let{columnCenter:t}=e;return t&&(0,c.css)(["justify-content:center;"])}),(e=>{let{rowCenter:t}=e;return t&&(0,c.css)(["align-items:center;"])}),(e=>{let{primaryColor:t}=e;return t&&(0,c.css)(["background-color:var(--color-primary-1);"])}),(e=>{let{rowGap:t}=e;return t&&(0,c.css)(["row-gap:",";"],(e=>{let{rowGap:t}=e;return"boolean"!=typeof t?t:"var(--spacing-base)"}))}),l.Z.md(i||(i=(0,a.Z)(["\n        & {\n            width: auto;\n            height: ",";\n            padding: ",";\n        }\n    "])),(e=>{let{height:t}=e;return t?"clamp(var(--spacing-m), "+t+", calc(var(--spacing-xxl) * 2.5))":"100%"}),(e=>{let{noPadding:t}=e;return t?"0":"var(--spacing-l) var(--spacing-m)"}))),m=c.default.section.withConfig({displayName:"layout__LayoutItem",componentId:"sc-14cxk76-5"})(["position:relative;display:inline-flex;flex-flow:column wrap;align-items:flex-start;word-break:break-word;"," "," ",""],(e=>{let{center:t}=e;return t&&(0,c.css)(["align-items:center;"])}),(e=>{let{maxWidth:t}=e;return t&&(0,c.css)(["display:inline-flex;max-width:",";"],(e=>{let{maxWidth:t}=e;return!0===t?"25rem":t}))}),(e=>{let{fullWidth:t}=e;return t&&(0,c.css)(["width:100%;"])})),g=c.default.ol.withConfig({displayName:"layout__LayoutGrid",componentId:"sc-14cxk76-6"})(["display:flex;flex-flow:row wrap;gap:var(--spacing-m);width:100%;margin:var(--spacing-m) 0;padding:0;list-style:none;"," ",""],(e=>{let{columnCenter:t}=e;return t&&(0,c.css)(["justify-content:center;"])}),(e=>{let{maxWidth:t}=e;return t&&(0,c.css)(["max-width:",";"],t)}))},3667:function(e,t,n){"use strict";n.d(t,{Z:function(){return it}});var r,o,i,a,c=n(7294),l=n(5697),s=n.n(l),u=n(3524),f=n.n(u),d=n(9590),p=n.n(d),m=n(4852),g=n.n(m),v="bodyAttributes",h="htmlAttributes",y="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),x="cssText",k="href",E="http-equiv",T="innerHTML",A="itemprop",C="name",O="property",S="rel",z="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",L="defer",N="encodeSpecialCharacters",P="onChangeClientState",M="titleTemplate",Z=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),B=[b.NOSCRIPT,b.SCRIPT,b.STYLE],F="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=X(e,b.TITLE),n=X(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,_);return t||r||void 0},G=function(e){return X(e,P)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==T&&c!==x&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=g()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(b.BODY,r),le(b.HTML,o),ce(f,d);var p={baseTag:se(b.BASE,n),linkTags:se(b.LINK,i),metaTags:se(b.META,a),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),l(e,m,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+F+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+" "+F+'="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+" "+F+'="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case h:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===T||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+" "+F+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(h,o,r),link:de(b.LINK,i,r),meta:de(b.META,a,r),noscript:de(b.NOSCRIPT,c,r),script:de(b.SCRIPT,l,r),style:de(b.STYLE,s,r),title:de(b.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:K([k,j],e),bodyAttributes:Q(v,e),defer:X(e,L),encode:X(e,N),htmlAttributes:Q(h,e),linkTags:V(b.LINK,[S,k],e),metaTags:V(b.META,[C,w,E,O,A],e),noscriptTags:V(b.NOSCRIPT,[T],e),onChangeClientState:G(e),scriptTags:V(b.SCRIPT,[z,T],e),styleTags:V(b.STYLE,[x],e),title:J(e),titleAttributes:Q(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),ge=(o=me,a=i=function(e){function t(){return Y(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return q({},o,((t={})[r.type]=a,t.titleAttributes=q({},i),t));case b.BODY:return q({},o,{bodyAttributes:q({},i)});case b.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((n={})[r.type]=q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},R(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var ve,he=e=>c.createElement(ge,{htmlAttributes:{lang:"en"},link:[{rel:"icon",type:"image/png",sizes:"16x16",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsSAAALEgHS3X78AAAApklEQVQ4EWP8fNAggYGBAYTJBQtYGBgYFBgYGOwpMOQAEyEVHz7/Zdh/9jNeNQQN8Su+y+BXdJehf9krnGpYCBniYMzD8P7zHwYDdU7yXbL+wAcwrSjJTr4hIPDg2S+88kQZQgiMNENAiY0QwJlO6mY+Y7hw8zvYEAUpNjAm2SWgaD1/6xuDoToXw6IGUPbCDXC6ZFEjfo1EuYQUAHLJAYpMYGA4AAB6vS0IxJ8+0gAAAABJRU5ErkJggg=="},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap",media:"print",onload:"this.media='all'"}],script:[{src:"https://cdn.splitbee.io/sb.js",type:"text/javascript",defer:"defer","data-no-cookie":"true","data-token":"9X2C0J2T9O5J"},{src:"/assets/font-awesome/solid.js",type:"text/javascript",defer:"defer"},{src:"/assets/font-awesome/fontawesome.js",type:"text/javascript",defer:"defer"}]}),ye=n(1880),be=n(2788),we=n(6427);var xe=(0,be.createGlobalStyle)([":root{--font-family:Montserrat,Calibri,sans-serif;--font-size-scale-ratio:1.25;--font-size-xs:calc((1rem / var(--font-size-scale-ratio)) / var(--font-size-scale-ratio));--font-size-s:calc(var(--font-size-xs) * var(--font-size-scale-ratio));--font-size-m:calc(var(--font-size-s) * var(--font-size-scale-ratio));--font-size-l:calc(var(--font-size-m) * var(--font-size-scale-ratio));--font-size-xl:calc(var(--font-size-l) * var(--font-size-scale-ratio));--font-size-xxl:calc(var(--font-size-xl) * var(--font-size-scale-ratio));--font-size-xxxl:calc(var(--font-size-xxl) * var(--font-size-scale-ratio));--font-weight-regular:400;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--spacing-ratio:2;--spacing-xxxs:calc(var(--spacing-xxs) / var(--spacing-ratio));--spacing-xxs:calc(var(--spacing-xs) / var(--spacing-ratio));--spacing-xs:calc(var(--spacing-s) / var(--spacing-ratio));--spacing-s:calc(var(--spacing-base) / var(--spacing-ratio));--spacing-base:1rem;--spacing-m:calc(var(--spacing-base) * var(--spacing-ratio));--spacing-l:calc(var(--spacing-m) * var(--spacing-ratio));--spacing-xl:calc(var(--spacing-l) * var(--spacing-ratio));--spacing-xxl:calc(var(--spacing-xl) * var(--spacing-ratio));--border-base:var(--spacing-xxs) solid var(--color-neutral-6);--border-radius-rounded:4px;--transition-base:0.3s ease;--transition-fast:0.15s ease-in-out;--color-primary-1:#f3c130;--color-primary-2:#91731d;--color-secondary-1:#000;--color-neutral-0:#FFF;--color-neutral-1:#f5f5f5;--color-neutral-2:#F0F0F0;--color-neutral-3:#d9d9d9;--color-neutral-4:#c4c4c4;--color-neutral-5:#9d9d9d;--color-neutral-6:#7b7b7b;--color-neutral-7:#3d3d3d;--color-neutral-8:#2B2B2B;--color-neutral-9:#000;--color-background:#F0F0F0;--color-text:#000;--img-base-size:6rem;--img-scale-ratio:2;--img-xs:calc(var(--img-base-size) / var(--img-scale-ratio));--img-s:calc(var(--img-xs) * var(--img-scale-ratio));--img-m:calc(var(--img-s) * var(--img-scale-ratio) * var(--img-scale-ratio));--img-l:calc(var(--img-m) * var(--img-scale-ratio));--img-xl:calc(var(--img-l) * var(--img-scale-ratio));--img-xxl:calc(var(--img-xl) * var(--img-scale-ratio));}.dark-mode{--color-primary-1:#574512;--color-primary-2:#f8db83;--color-secondary-1:#ffffffde;--color-neutral-0:#121212;--color-neutral-1:#1e1e1e;--color-neutral-2:#222222;--color-neutral-3:#262626;--color-neutral-4:#2B2B2B;--color-neutral-5:#303030;--color-neutral-6:#363636;--color-neutral-7:#3D3D3D;--color-neutral-8:#4F4F4F;--color-neutral-9:#8C8C8C;--color-background:#262626;--color-text:#ffffffde;}html{height:100%;font-family:var(--font-family);font-size:100%;box-sizing:border-box;",'}body{position:relative;margin:0;padding:0;height:100%;background-color:var(--color-neutral-0);color:var(--color-text);}#___gatsby{height:100%;}#gatsby-focus-wrapper{height:100%;}h3 + p{margin-top:var(--spacing-xs);}.svg-inline--fa{max-height:1rem;}.gatsby-highlight pre[class*="language-"].line-numbers{padding-left:2.8rem;}.gatsby-highlight{background-color:#2d2d2d;border-radius:0.3em;margin:0.5rem 0;padding:0.5rem;overflow:auto;max-width:40rem;}.gatsby-highlight pre[class*="language-"].line-numbers{margin:0;padding:0;padding-left:2.5rem;overflow:initial;}:not(pre)>code[class*=language-]{padding:.1em 0.2em;border-radius:.3em;white-space:normal;word-break:break-all;}@media screen and (max-width:768px){:root{--img-base-size:4rem;}}@media screen and (max-width:480px){:root{--img-base-size:3.5rem;}}'],we.Z.md(ve||(ve=(0,ye.Z)(["\n            & {\n              font-size: 112.5%;\n            }\n        "])))),ke=n(5931),Ee=n(111);function Te(e,t,r,o){void 0===r&&(r=n.g),void 0===o&&(o={});var i=(0,c.useRef)(),a=o.capture,l=o.passive,s=o.once;(0,c.useEffect)((function(){i.current=t}),[t]),(0,c.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return i.current(e)},r={capture:a,passive:l,once:s};return n.g.addEventListener(e,t,r),function(){n.g.removeEventListener(e,t,r)}}}),[e,n.g,a,l,s])}var Ae={},Ce=function(e,t,n){return Ae[e]||(Ae[e]={callbacks:[],value:n}),Ae[e].callbacks.push(t),{deregister:function(){var n=Ae[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){Ae[e].value!==n&&(Ae[e].value=n,Ae[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function Oe(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var r=(o=t,{get:function(e,t){var n=o.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var r=n.get,o=n.set,i=(0,c.useRef)(null),a=(0,c.useState)((function(){return r(t,e)})),l=a[0],s=a[1];Te("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);l!==n&&s(n)}})),(0,c.useEffect)((function(){return i.current=Ce(t,s,e),function(){i.current.deregister()}}),[e,t]);var u=(0,c.useCallback)((function(e){var n="function"==typeof e?e(l):e;o(t,n),s(n),i.current.emit(e)}),[l,o,t]);return[l,u]}(t,e,r)}}var o;return c.useState}var Se=function(){},ze={classList:{add:Se,remove:Se}},je=function(e,t,r){void 0===r&&(r=n.g);var o=e?Oe(e,t):c.useState,i=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},a={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},l="(prefers-color-scheme: dark)"===i.media,s=n.g.document&&n.g.document.body||ze;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=s),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:a,getInitialValue:function(e){return l?i.matches:e}}};const Ie=be.default.button.withConfig({displayName:"themetoggle__ToggleButton",componentId:"sc-1aa4yjy-0"})(["transition:all var(--transition-base);font-size:var(--font-size-m);color:var(--color-text);background-color:transparent;border:none;cursor:pointer;.dark-mode &{transform:rotate(180deg);}"]);var _e,Le,Ne,Pe,Me,Ze=()=>{const e=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,r=t.classNameDark,o=t.classNameLight,i=t.onChange,a=t.storageKey;void 0===a&&(a="darkMode");var l=t.storageProvider,s=t.global,u=(0,c.useMemo)((function(){return je(a,l,s)}),[a,l,s]),f=u.getDefaultOnChange,d=u.mediaQueryEventTarget,p=(0,u.usePersistedDarkModeState)((0,u.getInitialValue)(e)),m=p[0],g=p[1],v=(0,c.useMemo)((function(){return i||f(n,r,o)}),[i,n,r,o,f]);return(0,c.useEffect)((function(){v(m)}),[v,m]),Te("change",(function(e){return g(e.matches)}),d),{value:m,enable:(0,c.useCallback)((function(){return g(!0)}),[g]),disable:(0,c.useCallback)((function(){return g(!1)}),[g]),toggle:(0,c.useCallback)((function(){return g((function(e){return!e}))}),[g])}}(!1);return c.createElement(c.Fragment,null,c.createElement(Ie,{onClick:e.toggle,"aria-label":"Toggle dark mode"},c.createElement("i",{className:"fa-solid fa-adjust","aria-hidden":"true"})))};const Be=(0,be.default)(ke.Z).withConfig({displayName:"navbar__Logo",componentId:"sc-rkwkqs-0"})(["display:block;position:relative;margin-left:0;margin-bottom:2rem;font-weight:var(--font-weight-bold);font-size:3rem;text-decoration:inherit;color:var(--color-secondary-1);z-index:3;.font-loading &{font-family:Calibri;font-weight:700;font-size:4.9rem;line-height:1;}",""],we.Z.md(_e||(_e=(0,ye.Z)(["\n      & {\n        font-size: 4rem;\n        margin-left: 2.75rem;\n        margin-bottom: -1.25rem;\n      }\n    "])))),Fe=be.default.nav.withConfig({displayName:"navbar__Nav",componentId:"sc-rkwkqs-1"})(["position:fixed;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;left:0;right:0;bottom:0;height:3rem;margin:0;padding:0 var(--spacing-m);background-color:var(--color-neutral-0);z-index:100;user-select:none;",""],we.Z.md(Le||(Le=(0,ye.Z)(["\n  & {\n    position: relative;\n    left: unset;\n    right: unset;\n    bottom: unset;\n    width: auto;\n    height: 4rem;\n    }\n  "])))),De=be.default.ul.withConfig({displayName:"navbar__NavLinks",componentId:"sc-rkwkqs-2"})(["position:fixed;top:0;left:0;display:",";flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;width:100%;height:100%;list-style-type:none;z-index:50;background-color:",";user-select:auto;",""],(e=>{let{isOpen:t}=e;return t?"flex":"none"}),(e=>{let{isOpen:t}=e;return t?"var(--color-neutral-0)":"none"}),we.Z.sm(Ne||(Ne=(0,ye.Z)(["\n    & {\n      position: relative;\n      display: flex;\n      flex-direction: row; \n      align-items: center;\n      width: auto;\n      height: auto;\n      margin: var(--spacing-base) var(--spacing-m);\n    }\n  "])))),Ye=be.default.li.withConfig({displayName:"navbar__NavLinkItem",componentId:"sc-rkwkqs-3"})(["display:flex;align-items:center;padding:var(--spacing-s) 0;",""],we.Z.sm(Pe||(Pe=(0,ye.Z)(["\n    padding: 0;\n  "])))),Re=be.default.button.withConfig({displayName:"navbar__MenuIcon",componentId:"sc-rkwkqs-4"})(["position:relative;display:flex;flex-direction:column;justify-content:",";width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:75;transition:all var(--transition-fast);user-select:auto;&:focus,&:active{outline:none;}& div{position:relative;width:100%;background:var(--color-neutral-9);transition:all var(--transition-fast);:first-child,:last-child{height:",";}:nth-child(2){height:",";}}",""],(e=>{let{isOpen:t}=e;return t?"center":"space-around"}),(e=>{let{isOpen:t}=e;return t?"0.125rem":"0.25rem"}),(e=>{let{isOpen:t}=e;return t?"0":"0.25rem"}),we.Z.sm(Me||(Me=(0,ye.Z)(["\n    & {\n      display: none;\n    }\n  "])))),qe=e=>{let{isOpen:t,setIsOpen:n}=e;return c.createElement(Re,{isOpen:t,onClick:()=>n(!t),"aria-label":"Toggle menu","aria-haspopup":"menu"},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null))},He=(e,t)=>e===t?"true":"false",Ue=e=>{let{active:t}=e;const[n,r]=c.useState(!1);return c.createElement(c.Fragment,null,c.createElement(Fe,null,c.createElement(Be,{to:"/"},"j"),c.createElement(De,{isOpen:n},c.createElement(Ye,null,c.createElement(Ee.Z,{to:"/",activelink:He("index",t)},"Home")),c.createElement(Ye,null,c.createElement(Ee.Z,{to:"/work",activelink:He("work",t)},"Work")),c.createElement(Ye,null,c.createElement(Ee.Z,{to:"/blog",activelink:He("blog",t)}," blog")),c.createElement(Ye,null,c.createElement(Ee.Z,{to:"/about",activelink:He("about",t)},"About me")),c.createElement(Ye,null,c.createElement(Ee.Z,{to:"/contact",activelink:He("contact",t)},"Contact")),c.createElement(Ye,null,c.createElement(Ze,null))),c.createElement(qe,{isOpen:n,setIsOpen:r})))};var We,Je,Ge=(0,be.default)(ke.Z).withConfig({displayName:"footer-links__FooterLink",componentId:"sc-1444sra-0"})(["color:var(--color-neutral-0);margin:0 var(--spacing-m);font-weight:var(--font-weight-bold);.dark-mode &{color:var(--color-text);}"]);const Qe=be.default.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"sc-u6qnf1-0"})(["position:relative;display:flex;flex-shrink:0;margin:0;padding:var(--spacing-m) var(--spacing-m) var(--spacing-xl) var(--spacing-m);justify-content:center;align-items:center;background-color:var(--color-neutral-7);z-index:10;overflow:hidden;",""],we.Z.md(We||(We=(0,ye.Z)(["\n      & {\n        padding: var(--spacing-m) var(--spacing-xl);\n      }\n    "])))),Ke=(0,be.default)(Be).withConfig({displayName:"footer__FooterLogo",componentId:"sc-u6qnf1-1"})(["display:none;position:absolute;z-index:-1;top:-3.125rem;left:var(--spacing-m);color:var(--color-neutral-0);",""],we.Z.sm(Je||(Je=(0,ye.Z)(["\n      display: block;\n    "])))),Ve=be.default.div.withConfig({displayName:"footer__FooterLinkContainer",componentId:"sc-u6qnf1-2"})(["display:inline-block;"]);var Xe=()=>c.createElement(c.Fragment,null,c.createElement(Qe,null,c.createElement(Ke,{to:"/"},"j"),c.createElement(Ve,null,c.createElement(Ge,{to:"/work"},"Work"),c.createElement(Ge,{to:"/contact"},"Contact")))),$e=n(1667),et=n(7896),tt=n(1883);const nt=e=>{let{title:t,description:n,image:r,article:o}=e;const{pathname:i}=(0,et.useLocation)(),{site:a}=(0,tt.K2)(ot),{defaultTitle:l,defaultDescription:s,siteUrl:u,defaultImage:f}=a.siteMetadata,d={title:t||l,description:n||s,image:r||f,url:""+u+i};return c.createElement(ge,{title:d.title},c.createElement("meta",{name:"description",content:d.description}),c.createElement("meta",{name:"image",content:d.image}),d.url&&c.createElement("meta",{property:"og:url",content:d.url}),!o?null:c.createElement("meta",{property:"og:type",content:"article"}),d.title&&c.createElement("meta",{property:"og:title",content:d.title}),d.description&&c.createElement("meta",{property:"og:description",content:d.description}),d.image&&c.createElement("meta",{property:"og:image",content:d.image}))};var rt=nt;nt.defaultProps={title:null,description:null,image:null,article:!1};const ot="2389677789";var it=e=>c.createElement(c.Fragment,null,c.createElement(he,{title:e.title}),c.createElement(rt,{title:e.title,description:e.description,image:e.image}),c.createElement(xe,null),c.createElement($e.WB,null,c.createElement(Ue,{active:e.active}),c.createElement($e.m6,null,e.children),c.createElement(Xe,null)))},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1880:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-41f513b680a75c2b3aa2.js.map