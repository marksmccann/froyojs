"use strict";(self.webpackChunkfroyo=self.webpackChunkfroyo||[]).push([[1970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:f}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[N,z]=(0,i.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&y.some((t=>t.value===e))&&z(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==N&&(T(t),z(a),null!=d&&k(d,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:I,onClick:C},o,{className:(0,r.Z)("tabs__item",p,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},9631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(5488),o=n(5162);const l={},s="HTML-only Usage",c={unversionedId:"fundamentals/html-only-usage",id:"fundamentals/html-only-usage",title:"HTML-only Usage",description:"This guide explains how components can be implemented from the HTML.",source:"@site/docs/fundamentals/html-only-usage.md",sourceDirName:"fundamentals",slug:"/fundamentals/html-only-usage",permalink:"/froyo/docs/fundamentals/html-only-usage",draft:!1,editUrl:"https://github.com/marksmccann/froyo/docs/fundamentals/html-only-usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Creating Listeners",permalink:"/froyo/docs/fundamentals/creating-listeners"},next:{title:"Typechecking State",permalink:"/froyo/docs/advanced/typechecking-state"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating an Initializer",id:"creating-an-initializer",level:2},{value:"Marking Root Elements",id:"marking-root-elements",level:2},{value:"Setting the Initial State",id:"setting-the-initial-state",level:2},{value:"Retrieving Component Instances",id:"retrieving-component-instances",level:2},{value:"Initializing an Entire Library",id:"initializing-an-entire-library",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html-only-usage"},"HTML-only Usage"),(0,i.kt)("p",null,"This guide explains how components can be implemented from the HTML."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"With just a couple of attributes, Froyo components can be declared and configured directly from the HTML. Once an ",(0,i.kt)("a",{parentName:"p",href:"#creating-an-initializer"},"initializer")," has been created and called, consumers can build entire pages with functional and dynamic UI components without writing a single line of JavaScript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div\n    data-initialize="ComponentName"\n    data-initial-state=\'{"someState": true}\'\n></div>\n')),(0,i.kt)("h2",{id:"creating-an-initializer"},"Creating an Initializer"),(0,i.kt)("p",null,"To create an initializer, use the ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/api/create-initializer"},(0,i.kt)("inlineCode",{parentName:"a"},"createInitializer"))," tool. Give it a list of component names and constructors and it will return an initializer function. When called, this function will initialize every root element marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initialize")," attribute on the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Component, createInitializer } from 'froyojs';\n\nclass FrozenYogurt extends Component {\n    render() {\n        this.rootElement.innerHTML = 'I love frozen yogurt!';\n    }\n}\n\nconst initialize = createInitializer({ FrozenYogurt });\n\n// initializes elements with the \"data-initialize\" attribute\nconst instances = initialize();\n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"marking-root-elements"},"Marking Root Elements"),(0,i.kt)("p",null,"The initializer uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initialize")," attribute to identify which elements to initialize. Apply this attribute to the desired root element with the name of the desired component as its value."),(0,i.kt)("p",null,"When the initializer is called, it searches the DOM for every element that has this attribute and pairs its value with the list of components it was given. It then uses that element and the specified component constructor to initialize the component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div data-initialize="FrozenYogurt"></div>\n')),(0,i.kt)("p",null,"After initialization the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initialize")," attribute will be removed."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initialize")," attribute means the initializer to be can be called more than once. This can be useful if other components, not originally present (e.g. injected asynchronously), need to be initialized.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div>I love frozen yogurt!</div>\n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setting-the-initial-state"},"Setting the Initial State"),(0,i.kt)("p",null,"To set the initial state from the HTML, apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initial-state")," attribute onto the root element. The value should include the desired state as valid JSON."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because this attribute is defined in the HTML, it only supports primitive types. If you want to configure a state that is not a primitive type (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"), the property must instead be set at instantiation via the ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/api/component#constructor"},"constructor")," or post instantiation via ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/api/component#setstate"},(0,i.kt)("inlineCode",{parentName:"a"},"setState")),". See ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/fundamentals/component-lifecycle#determining-the-initial-state"},"Determining the Initial State")," to learn more.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div data-initial-state=\'{"flavor": "vanilla"}\'></div>\n')),(0,i.kt)("p",null,"After initialization the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-initial-state")," attribute will be removed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div>I love frozen yogurt!</div>\n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"retrieving-component-instances"},"Retrieving Component Instances"),(0,i.kt)("p",null,"If one has access to the ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/api/component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component"))," class, it is possible to retrieve any component instance. The ",(0,i.kt)("a",{parentName:"p",href:"/froyo/docs/api/component#instances"},(0,i.kt)("inlineCode",{parentName:"a"},"instances"))," class property returns an immutable array of all active component instances. This feature is particularly useful for recalling instances that were created by an ",(0,i.kt)("inlineCode",{parentName:"p"},"initializer")," in a different scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Component.instances); // [Component, Component, ...]\n")),(0,i.kt)("p",null,"This array can then be searched or filtered to find specific instance(s), for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// search for an instance with a specific root element\nconst myYogurt = Component.instances.find(\n    (instance) => instance.rootElement.id === 'my-yogurt'\n);\n\n// filter for instances created by a specific constructor\nconst allYogurts = Component.instances.filter(\n    (instance) => instance instanceof FrozenYogurt\n);\n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"initializing-an-entire-library"},"Initializing an Entire Library"),(0,i.kt)("p",null,"Create an initializer for an entire library by importing all of the components at once."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"es6",label:"ES6",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as myFroyoComponents from './my-froyo-library';\n\nconst initialize = createInitializer(myFroyoComponents);\n"))),(0,i.kt)(o.Z,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myFroyoComponents = require('./my-froyo-library');\n\nconst initialize = createInitializer(myFroyoComponents);\n"))),(0,i.kt)(o.Z,{value:"browser",label:"Browser (CDN)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myFroyoComponents = window.myFroyoLibrary;\n\nconst initialize = createInitializer(myFroyoComponents);\n")))))}d.isMDXComponent=!0}}]);