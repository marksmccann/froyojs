"use strict";(self.webpackChunkfroyo=self.webpackChunkfroyo||[]).push([[152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),s=r(6550),u=r(1980),c=r(7392),i=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=r(2389);const g="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==s&&(d(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const s={},u="Installation",c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Node",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/froyo/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/marksmccann/froyo/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/froyo/docs/"},next:{title:"Creating a Component",permalink:"/froyo/docs/getting-started/creating-a-component"}},i={},d=[{value:"Node",id:"node",level:2},{value:"Browser (CDN)",id:"browser-cdn",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i froyojs\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add froyojs\n")))),(0,a.kt)("h2",{id:"browser-cdn"},"Browser (CDN)"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"production",label:"Prod",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/gh/marksmccann/froyo@latest/packages/froyojs/bundles/froyojs.min.js"><\/script>\n'))),(0,a.kt)(l.Z,{value:"development",label:"Dev",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/gh/marksmccann/froyo@latest/packages/froyojs/bundles/froyojs.js"><\/script>\n')))))}m.isMDXComponent=!0}}]);