(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{166:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),l=t(177),o=t.n(l),i=t(182),s=t(178),u=t(176),m=t(186),p=t(167),d=t.n(p),h=[{title:c.a.createElement(c.a.Fragment,null,"Engaging Countries"),imageUrl:"img/noun_Government_289436.svg",description:c.a.createElement(c.a.Fragment,null,"Reach out to government, citizens & companies to promote MyData principles.")},{title:c.a.createElement(c.a.Fragment,null,"International Collaborations"),imageUrl:"img/noun_Government_1989687.svg",description:c.a.createElement(c.a.Fragment,null,"Foster joint projects between countries involved with MyData movement.")},{title:c.a.createElement(c.a.Fragment,null,"Cross Pollinations"),imageUrl:"img/noun_bee pollination_1251001.svg",description:c.a.createElement(c.a.Fragment,null,"Increase Asian influences in MyData community.")}];function b(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(m.a)(a);return c.a.createElement("div",{className:o()("col col--4",d.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(u.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(i.a,{title:""+a.title,description:"Our main motivation is to share expertise on data and privacy protection among hubs in Asia."},c.a.createElement("header",{className:o()("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},"Our main motivation is to share expertise on data and privacy protection among hubs in Asia.",c.a.createElement("br",null),a.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(s.a,{className:o()("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),c.a.createElement("main",null,h&&h.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},h.map((function(e,a){return c.a.createElement(b,Object(n.a)({key:a},e))})))))))}},183:function(e,a,t){"use strict";t(50),t(23),t(18),t(17),t(70);var n=t(0),r=t.n(n),c=t(177),l=t.n(c),o=t(176),i=t(179),s=t(180),u=t(126),m=t.n(u);a.a=function(e){var a,c,u=e.handleSearchBarToggle,p=e.isSearchBarExpanded,d=Object(n.useState)(!1),h=d[0],b=d[1],v=Object(n.useRef)(null),g=Object(o.a)().siteConfig,E=(void 0===g?{}:g).themeConfig.algolia,f=Object(i.b)(),O=Object(s.a)().navigateToSearchPage;var _=function(e){void 0===e&&(e=!0),h||Promise.all([Promise.all([t.e(4),t.e(41)]).then(t.t.bind(null,184,7)),t.e(26).then(t.t.bind(null,185,7))]).then((function(a){var t=a[0].default;b(!0),window.docsearch=t,function(e){window.docsearch({appId:E.appId,apiKey:E.apiKey,indexName:E.indexName,inputSelector:"#search_input_react",algoliaOptions:E.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:function(e,a,t){a.stopPropagation();var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;f.push(r)}}),e&&v.current.focus()}(e)}))},N=Object(n.useCallback)((function(){_(),h&&v.current.focus(),u(!p)}),[p]),y=Object(n.useCallback)((function(){u(!p)}),[p]),j=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;_(a)})),w=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||O(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:m.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()(m.a.searchIconButton,(a={},a[m.a.searchIconButtonHidden]=p,a)),onClick:N,onKeyDown:N,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",m.a.searchInput,(c={},c[m.a.searchInputExpanded]=p,c)),onMouseOver:j,onFocus:j,onBlur:y,onKeyDown:w,ref:v})))}}}]);