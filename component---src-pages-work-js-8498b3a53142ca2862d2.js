"use strict";(self.webpackChunkjan_wagenaar_portfolio=self.webpackChunkjan_wagenaar_portfolio||[]).push([[624],{3771:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var r=a(5785),o=a(7294),n=a(3667),l=a(1667),i=a(4579),c=a(4160),s=a(5086),d=a(8032),m=a(5931);var u=s.default.div.withConfig({displayName:"card__Card",componentId:"sc-1jbix7g-0"})(["position:relative;display:flex;flex-direction:column;width:15rem;height:18rem;box-sizing:border-box;"]),p=a(6427);const g=e=>{let{posts:t}=e;return o.createElement(l.J3,{columnCenter:!0,maxWidth:"70rem"},t.map((e=>o.createElement(f,{key:e.id,title:e.name,slug:e.slug,featuredImage:e.featuredImage.localFile}))))},f=e=>{let{title:t,slug:a,featuredImage:r}=e;const n=(0,d.c)(r);return o.createElement(m.Z,{to:`/work/${a}`},o.createElement(v,null,o.createElement(w,{image:n,alt:"screenshot"}),o.createElement(h,null,t)))},v=(0,s.default)(u).withConfig({displayName:"work-content__WorkCardWrapper",componentId:"sc-1ad97bu-0"})(['z-index:0;overflow:hidden;&::after{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--color-primary-1);opacity:0;transition:all var(--transition-base);z-index:1;}&:hover::after{opacity:0.95;}']),w=(0,s.default)(d.G).withConfig({displayName:"work-content__WorkCardImage",componentId:"sc-1ad97bu-1"})(["height:100%;"]),h=s.default.span.withConfig({displayName:"work-content__WorkCardText",componentId:"sc-1ad97bu-2"})(["position:absolute;left:var(--spacing-m);bottom:-5rem;margin:0;color:var(--color-neutral-0);font-size:var(--font-size-l);font-weight:var(--font-weight-bold);transition:all var(--transition-fast);z-index:2;",":hover &{bottom:var(--spacing-m);}"],v),k=e=>{let{selectedCategory:t,setCategory:a}=e;const r=(0,c.K2)("3769587215"),n=e=>{a(e.target.dataset.category)};return o.createElement(b,null,o.createElement(y,{key:"All",onClick:n,"data-category":"",$isActive:""===t},"All"),r.allStrapiCategory.nodes.slice(0).reverse().map((e=>o.createElement(y,{key:e.name,$isActive:t===e.name,onClick:n,"data-category":e.name},e.name))))},b=s.default.div.withConfig({displayName:"work-content__WorkFiltersWrapper",componentId:"sc-1ad97bu-3"})(["position:relative;display:flex;flex-flow:row nowrap;margin-top:var(--spacing-m);"]),y=s.default.button.withConfig({displayName:"work-content__WorkFilterButton",componentId:"sc-1ad97bu-4"})(["margin:0;padding:var(--spacing-base);min-width:4rem;font-weight:var(--font-weight-semibold);color:",";background-color:",";border:none;border-radius:0;cursor:pointer;appearance:none;"," ",""],(e=>{let{$isActive:t}=e;return t?"var(--color-neutral-1)":"var(--color-text)"}),(e=>{let{$isActive:t}=e;return t?"var(--color-neutral-8)":"var(--color-neutral-4)"}),(e=>{let{$isActive:t}=e;return t&&(0,s.css)([".dark-mode &{color:var(--color-text);}"])}),p.Z.sm`
        min-width: 6rem;
        padding: var(--spacing-base) var(--spacing-m);
    `);var C=e=>{let{data:t}=e;const{allStrapiWork:a}=t,c=(0,r.Z)(a.nodes),[s,d]=o.useState("");return o.createElement(o.Fragment,null,o.createElement(n.Z,{active:"work"},o.createElement(l.kz,null,o.createElement(l.WM,null,o.createElement(l.n8,{rowCenter:!0},o.createElement(i.X,{level:1},"Work"),o.createElement(k,{selectedCategory:s,setCategory:e=>{d(e)}}),o.createElement(g,{posts:c.filter((e=>""===s||e.category.name===s))}))))))}}}]);
//# sourceMappingURL=component---src-pages-work-js-8498b3a53142ca2862d2.js.map