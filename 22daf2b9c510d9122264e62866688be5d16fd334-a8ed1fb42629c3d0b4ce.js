(self.webpackChunkjan_wagenaar_v2=self.webpackChunkjan_wagenaar_v2||[]).push([[918],{478:function(n,e,l){"use strict";var t=l(791),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,l){var t=(n.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var o=t+e+": "+l+";";n.properties.style=o}n.exports=function(n){return t(n,"element",a),n}},3790:function(n){"use strict";function e(n){if("string"==typeof n)return function(n){return e;function e(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return o;if("object"==typeof n)return("length"in n?t:l)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function l(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function t(n){var l=function(n){for(var l=[],t=n.length,o=-1;++o<t;)l[o]=e(n[o]);return l}(n),t=l.length;return function(){var n=-1;for(;++n<t;)if(l[n].apply(this,arguments))return!0;return!1}}function o(){return!0}n.exports=e},1150:function(n,e,l){"use strict";n.exports=a;var t=l(3790),o="skip",r=!1;function a(n,e,l,a){var u;function s(n,t,c){var p,d=[];return(e&&!u(n,t,c[c.length-1]||null)||(d=i(l(n,c)))[0]!==r)&&n.children&&d[0]!==o?(p=i(function(n,e){var l,t=-1,o=a?-1:1,i=(a?n.length:t)+o;for(;i>t&&i<n.length;){if((l=s(n[i],i,e))[0]===r)return l;i="number"==typeof l[1]?l[1]:i+o}}(n.children,c.concat(n))),p[0]===r?p:d):d}"function"==typeof e&&"function"!=typeof l&&(a=l,l=e,e=null),u=t(e),s(n,null,[])}function i(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[true,n]:[n]}a.CONTINUE=true,a.SKIP=o,a.EXIT=r},791:function(n,e,l){"use strict";n.exports=i;var t=l(1150),o=t.CONTINUE,r=t.SKIP,a=t.EXIT;function i(n,e,l,o){"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),t(n,e,(function(n,e){var t=e[e.length-1],o=t?t.children.indexOf(n):null;return l(n,o,t)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},2246:function(n,e,l){"use strict";var t=l(2788),o=l(5931);const r=(0,t.default)(o.Z).withConfig({displayName:"text-link__TextLink",componentId:"sc-25u8rr-0"})(["position:relative;display:inline;text-decoration:inherit;color:inherit;font-size:var(--font-size-m);font-weight:var(--font-weight-semibold);background-image:linear-gradient(var(--color-primary-1),var(--color-primary-1));background-position:0% 135%;background-repeat:no-repeat;background-size:100% 0.4rem;transition:background-size var(--transition-fast);transition-delay:0.1s;overflow:visible;z-index:0;cursor:pointer;&:hover,&:focus,&:active{background-size:100% 0.6rem;}"]);e.Z=r},3114:function(n,e,l){"use strict";l.d(e,{Z:function(){return cn}});var t={};l.r(t),l.d(t,{boolean:function(){return c},booleanish:function(){return p},commaOrSpaceSeparated:function(){return m},commaSeparated:function(){return f},number:function(){return h},overloadedBoolean:function(){return d},spaceSeparated:function(){return g}});var o=l(7294);class r{constructor(n,e,l){this.property=n,this.normal=e,l&&(this.space=l)}}function a(n,e){const l={},t={};let o=-1;for(;++o<n.length;)Object.assign(l,n[o].property),Object.assign(t,n[o].normal);return new r(l,t,e)}function i(n){return n.toLowerCase()}r.prototype.property={},r.prototype.normal={},r.prototype.space=null;class u{constructor(n,e){this.property=n,this.attribute=e}}u.prototype.space=null,u.prototype.boolean=!1,u.prototype.booleanish=!1,u.prototype.overloadedBoolean=!1,u.prototype.number=!1,u.prototype.commaSeparated=!1,u.prototype.spaceSeparated=!1,u.prototype.commaOrSpaceSeparated=!1,u.prototype.mustUseProperty=!1,u.prototype.defined=!1;let s=0;const c=y(),p=y(),d=y(),h=y(),g=y(),f=y(),m=y();function y(){return 2**++s}const v=Object.keys(t);class k extends u{constructor(n,e,l,o){let r=-1;if(super(n,e),b(this,"space",o),"number"==typeof l)for(;++r<v.length;){const n=v[r];b(this,v[r],(l&t[n])===t[n])}}}function b(n,e,l){l&&(n[e]=l)}k.prototype.defined=!0;const w={}.hasOwnProperty;function x(n){const e={},l={};let t;for(t in n.properties)if(w.call(n.properties,t)){const o=n.properties[t],r=new k(t,n.transform(n.attributes||{},t),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(r.mustUseProperty=!0),e[t]=r,l[i(t)]=t,l[i(r.attribute)]=t}return new r(e,l,n.space)}const C=x({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),S=x({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function P(n,e){return e in n?n[e]:e}function O(n,e){return P(n,e.toLowerCase())}const L=x({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:O,properties:{xmlns:null,xmlnsXLink:null}}),M=x({transform(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:p,ariaAutoComplete:null,ariaBusy:p,ariaChecked:p,ariaColCount:h,ariaColIndex:h,ariaColSpan:h,ariaControls:g,ariaCurrent:null,ariaDescribedBy:g,ariaDetails:null,ariaDisabled:p,ariaDropEffect:g,ariaErrorMessage:null,ariaExpanded:p,ariaFlowTo:g,ariaGrabbed:p,ariaHasPopup:null,ariaHidden:p,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:g,ariaLevel:h,ariaLive:null,ariaModal:p,ariaMultiLine:p,ariaMultiSelectable:p,ariaOrientation:null,ariaOwns:g,ariaPlaceholder:null,ariaPosInSet:h,ariaPressed:p,ariaReadOnly:p,ariaRelevant:null,ariaRequired:p,ariaRoleDescription:g,ariaRowCount:h,ariaRowIndex:h,ariaRowSpan:h,ariaSelected:p,ariaSetSize:h,ariaSort:null,ariaValueMax:h,ariaValueMin:h,ariaValueNow:h,ariaValueText:null,role:null}}),E=x({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:O,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:f,acceptCharset:g,accessKey:g,action:null,allow:null,allowFullScreen:c,allowPaymentRequest:c,allowUserMedia:c,alt:null,as:null,async:c,autoCapitalize:null,autoComplete:g,autoFocus:c,autoPlay:c,capture:c,charSet:null,checked:c,cite:null,className:g,cols:h,colSpan:null,content:null,contentEditable:p,controls:c,controlsList:g,coords:h|f,crossOrigin:null,data:null,dateTime:null,decoding:null,default:c,defer:c,dir:null,dirName:null,disabled:c,download:d,draggable:p,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:c,formTarget:null,headers:g,height:h,hidden:c,high:h,href:null,hrefLang:null,htmlFor:g,httpEquiv:g,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:c,itemId:null,itemProp:g,itemRef:g,itemScope:c,itemType:g,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:c,low:h,manifest:null,max:null,maxLength:h,media:null,method:null,min:null,minLength:h,multiple:c,muted:c,name:null,nonce:null,noModule:c,noValidate:c,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:c,optimum:h,pattern:null,ping:g,placeholder:null,playsInline:c,poster:null,preload:null,readOnly:c,referrerPolicy:null,rel:g,required:c,reversed:c,rows:h,rowSpan:h,sandbox:g,scope:null,scoped:c,seamless:c,selected:c,shape:null,size:h,sizes:null,slot:null,span:h,spellCheck:p,src:null,srcDoc:null,srcLang:null,srcSet:null,start:h,step:null,style:null,tabIndex:h,target:null,title:null,translate:null,type:null,typeMustMatch:c,useMap:null,value:p,width:h,wrap:null,align:null,aLink:null,archive:g,axis:null,background:null,bgColor:null,border:h,borderColor:null,bottomMargin:h,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:c,declare:c,event:null,face:null,frame:null,frameBorder:null,hSpace:h,leftMargin:h,link:null,longDesc:null,lowSrc:null,marginHeight:h,marginWidth:h,noResize:c,noHref:c,noShade:c,noWrap:c,object:null,profile:null,prompt:null,rev:null,rightMargin:h,rules:null,scheme:null,scrolling:p,standby:null,summary:null,text:null,topMargin:h,valueType:null,version:null,vAlign:null,vLink:null,vSpace:h,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:c,disableRemotePlayback:c,prefix:null,property:null,results:h,security:null,unselectable:null}}),D=x({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:P,properties:{about:m,accentHeight:h,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:h,amplitude:h,arabicForm:null,ascent:h,attributeName:null,attributeType:null,azimuth:h,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:h,by:null,calcMode:null,capHeight:h,className:g,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:h,diffuseConstant:h,direction:null,display:null,dur:null,divisor:h,dominantBaseline:null,download:c,dx:null,dy:null,edgeMode:null,editable:null,elevation:h,enableBackground:null,end:null,event:null,exponent:h,externalResourcesRequired:null,fill:null,fillOpacity:h,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:f,g2:f,glyphName:f,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:h,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:h,horizOriginX:h,horizOriginY:h,id:null,ideographic:h,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:h,k:h,k1:h,k2:h,k3:h,k4:h,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:h,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:h,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:h,overlineThickness:h,paintOrder:null,panose1:null,path:null,pathLength:h,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:g,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:h,pointsAtY:h,pointsAtZ:h,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:h,specularExponent:h,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:h,strikethroughThickness:h,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:h,strokeOpacity:h,strokeWidth:null,style:null,surfaceScale:h,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:h,tableValues:null,target:null,targetX:h,targetY:h,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,u1:null,u2:null,underlinePosition:h,underlineThickness:h,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:h,values:null,vAlphabetic:h,vMathematical:h,vectorEffect:null,vHanging:h,vIdeographic:h,version:null,vertAdvY:h,vertOriginX:h,vertOriginY:h,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:h,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),T=a([S,C,L,M,E],"html"),R=a([S,C,L,M,D],"svg"),A=/^data[-\w.:]+$/i,I=/-[a-z]/g,U=/[A-Z]/g;function z(n){return"-"+n.toLowerCase()}function j(n){return n.charAt(1).toUpperCase()}const B={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var N=l(9368);const H={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},F={}.hasOwnProperty;function X(n,e,l){if("function"!=typeof n)throw new TypeError("h is not a function");const t=function(n){const e=n("div",{});return Boolean(e&&("_owner"in e||"_store"in e)&&(void 0===e.key||null===e.key))}(n),o=function(n){const e=n("div",{});return Boolean(e&&e.context&&e.context._isVue)}(n),r=function(n){const e=n("div",{});return"VirtualNode"===e.type}(n);let a,i;if("string"==typeof l||"boolean"==typeof l?(a=l,l={}):(l||(l={}),a=l.prefix),e&&"root"===e.type){const n=e.children[0];i=1===e.children.length&&"element"===n.type?n:{type:"element",tagName:"div",properties:{},children:e.children}}else{if(!e||"element"!==e.type)throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");i=e}return _(n,i,{schema:"svg"===l.space?R:T,prefix:null==a?t||o||r?"h-":void 0:"string"==typeof a?a:a?"h-":void 0,key:0,react:t,vue:o,vdom:r,hyperscript:W(n)})}function _(n,e,l){const t=l.schema;let o=t,r=e.tagName;const a={},i=[];let u,s=-1;for(u in"html"===t.space&&"svg"===r.toLowerCase()&&(o=R,l.schema=o),e.properties)e.properties&&F.call(e.properties,u)&&V(a,u,e.properties[u],l,r);if(l.vdom&&("html"===o.space?r=r.toUpperCase():o.space&&(a.namespace=H[o.space])),l.prefix&&(l.key++,a.key=l.prefix+l.key),e.children)for(;++s<e.children.length;){const t=e.children[s];"element"===t.type?i.push(_(n,t,l)):"text"===t.type&&i.push(t.value)}return l.schema=t,i.length>0?n.call(e,r,a,i):n.call(e,r,a)}function V(n,e,l,t,o){const r=function(n,e){const l=i(e);let t=e,o=u;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&A.test(e)){if("-"===e.charAt(4)){const n=e.slice(5).replace(I,j);t="data"+n.charAt(0).toUpperCase()+n.slice(1)}else{const n=e.slice(4);if(!I.test(n)){let l=n.replace(U,z);"-"!==l.charAt(0)&&(l="-"+l),e="data"+l}}o=k}return new o(t,e)}(t.schema,e);let a;null==l||"number"==typeof l&&Number.isNaN(l)||!1===l&&(t.vue||t.vdom||t.hyperscript)||!l&&r.boolean&&(t.vue||t.vdom||t.hyperscript)||(Array.isArray(l)&&(l=r.commaSeparated?function(n,e){const l=e||{};return(""===n[n.length-1]?[...n,""]:n).join((l.padRight?" ":"")+","+(!1===l.padLeft?"":" ")).trim()}(l):l.join(" ").trim()),r.boolean&&t.hyperscript&&(l=""),"style"===r.property&&"string"==typeof l&&(t.react||t.vue||t.vdom)&&(l=function(n,e){const l={};try{N(n,((n,e)=>{"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4)),l[n.replace(/-([a-z])/g,((n,e)=>e.toUpperCase()))]=e}))}catch(t){const n=t;throw n.message=e+"[style]"+n.message.slice("undefined".length),n}return l}(l,o)),t.vue?"style"!==r.property&&(a="attrs"):r.mustUseProperty||(t.vdom?"style"!==r.property&&(a="attributes"):t.hyperscript&&(a="attrs")),a?n[a]=Object.assign(n[a]||{},{[r.attribute]:l}):r.space&&t.react?n[B[r.property]||r.property]=l:n[r.attribute]=l)}function W(n){return"context"in n&&"cleanup"in n}var K=l(478);const q={}.hasOwnProperty,Y=new Set(["table","thead","tbody","tfoot","tr"]);function Z(n){if(!n||"function"!=typeof n.createElement)throw new TypeError("createElement is not a function");const e=n.createElement;function l(l,t,o){if(o&&Y.has(l)&&(o=o.filter((n=>{return!("string"==typeof(l=(e=n)&&"object"==typeof e&&"text"===e.type?e.value||"":e)&&""===l.replace(/[ \t\n\f\r]/g,""));var e,l}))),n.components&&q.call(n.components,l)){const r=n.components[l];return n.passNode&&"function"==typeof r&&(t=Object.assign({node:this},t)),e(r,t,o)}return e(l,t,o)}Object.assign(this,{Compiler:function(t){let o=X(l,K(t),n.prefix);if("root"===t.type)return o=o&&"object"==typeof o&&"type"in o&&"props"in o&&"div"===o.type&&(1!==t.children.length||"element"!==t.children[0].type)?o.props.children:[o],e(n.Fragment||"div",{},o);return o}})}var J,$;function G(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}var nn=($=J=function(n){function e(){return G(this,e),Q(this,n.apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.componentDidMount=function(){this.updateIframeContent()},e.prototype.componentDidUpdate=function(n,e){this.updateIframeContent()},e.prototype.updateIframeContent=function(){var n=this.props,e=n.id,l=n.platform,t=n.preview,o=n.theme,r=n.height,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var u='<html><head><base target="_parent"></head><body>'+('<div data-snack-id="'+e+'" data-snack-platform="'+l+'" data-snack-preview="'+t+'" data-snack-theme="'+o+'" style="overflow:hidden;background:#'+("dark"===o?"212733":"fafafa")+";border:1px solid rgba(0,0,0,.16);border-radius:4px;height:"+r+'px;width:100%"></div><script async src="https://snack.expo.io/embed.js"><\/script>')+"</body></html>";i.open(),i.writeln(u),i.close()},e.prototype.render=function(){var n=this,e=this.props,l=e.id,t=e.height;return o.createElement("iframe",{ref:function(e){n.iframeNode=e},width:"100%",height:t+18+"px",frameBorder:0,id:"expo-snack-"+l})},e}(o.PureComponent),J.defaultProps={platform:"ios",theme:"dark",preview:!0,height:505},$),en=nn,ln=l(2246),tn=l(4579),on=l(2788);const rn=on.default.img.withConfig({displayName:"image__StyledImage",componentId:"sc-8u8oks-0"})(["position:relative;width:auto;max-width:100%;height:100%;object-fit:cover;"]),an=on.default.div.withConfig({displayName:"image__StyledImageWrapper",componentId:"sc-8u8oks-1"})(["position:relative;display:flex;justify-content:center;margin:var(--spacing-m) 0;max-height:var(--img-m);width:100%;overflow:hidden;"]);var un=n=>{let{src:e,alt:l}=n;return o.createElement(an,null,o.createElement(rn,{src:e,alt:l}))};const sn=n=>{let{htmlAst:e,options:l}=n;const t=new Z({createElement:o.createElement,components:{h2:n=>{let{node:e,...l}=n;return o.createElement(tn.X,Object.assign({},l,{level:2,noMargin:!0}))},h3:n=>{let{node:e,...l}=n;return o.createElement(tn.X,Object.assign({},l,{level:3,noMargin:!0}))},h4:n=>{let{node:e,...l}=n;return o.createElement(tn.X,Object.assign({},l,{level:4,noMargin:!0}))},h5:n=>{let{node:e,...l}=n;return o.createElement(tn.X,Object.assign({},l,{level:5,noMargin:!0}))},p:n=>{let{node:e,...t}=n;return o.createElement(tn.x,Object.assign({},t,{noTopMargin:!l.p.topMargin}))},a:n=>{let{node:e,href:l,...t}=n;return o.createElement(ln.Z,Object.assign({to:l},t))},img:n=>{let{node:e,...l}=n;return o.createElement(un,l)},"expo-snack":en}}).Compiler;return o.createElement(o.Fragment,null,o.createElement("div",null,t(e)))};sn.defaultProps={options:{p:{topMargin:!0}}};var cn=sn},8139:function(n){var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,t=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,u=/^\s+|\s+$/g,s="";function c(n){return n?n.replace(u,s):s}n.exports=function(n,u){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];u=u||{};var p=1,d=1;function h(n){var e=n.match(l);e&&(p+=e.length);var t=n.lastIndexOf("\n");d=~t?n.length-t:d+n.length}function g(){var n={line:p,column:d};return function(e){return e.position=new f(n),k(),e}}function f(n){this.start=n,this.end={line:p,column:d},this.source=u.source}f.prototype.content=n;var m=[];function y(e){var l=new Error(u.source+":"+p+":"+d+": "+e);if(l.reason=e,l.filename=u.source,l.line=p,l.column=d,l.source=n,!u.silent)throw l;m.push(l)}function v(e){var l=e.exec(n);if(l){var t=l[0];return h(t),n=n.slice(t.length),l}}function k(){v(t)}function b(n){var e;for(n=n||[];e=w();)!1!==e&&n.push(e);return n}function w(){var e=g();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var l=2;s!=n.charAt(l)&&("*"!=n.charAt(l)||"/"!=n.charAt(l+1));)++l;if(l+=2,s===n.charAt(l-1))return y("End of comment missing");var t=n.slice(2,l-2);return d+=2,h(t),n=n.slice(l),d+=2,e({type:"comment",comment:t})}}function x(){var n=g(),l=v(o);if(l){if(w(),!v(r))return y("property missing ':'");var t=v(a),u=n({type:"declaration",property:c(l[0].replace(e,s)),value:t?c(t[0].replace(e,s)):s});return v(i),u}}return k(),function(){var n,e=[];for(b(e);n=x();)!1!==n&&(e.push(n),b(e));return e}()}},9368:function(n,e,l){var t=l(8139);function o(n,e){var l,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=t(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(l=i[s]).property,a=l.value,u?e(r,a,l):a&&(o||(o={}),o[r]=a);return o}n.exports=o,n.exports.default=o}}]);
//# sourceMappingURL=22daf2b9c510d9122264e62866688be5d16fd334-a8ed1fb42629c3d0b4ce.js.map