function t(t,e,i,o){var n,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new a(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):o.forEach(i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,k="?"+x,A=`<${k}>`,S=document,E=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,O=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),z=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function Q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,o=[];let n,a=2===e?"<svg>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===D?"!--"===l[1]?r=N:void 0!==l[1]?r=M:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:D,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?O:'"'===l[3]?R:I):r===R||r===I?r=O:r===N||r===M?r=D:(r=O,n=void 0);const h=r===O&&t[e+1].startsWith("/>")?" ":"";a+=r===D?i+A:c>=0?(o.push(s),i.slice(0,c)+$+i.slice(c)+x+h):i+x+(-2===c?(o.push(void 0),e):h)}return[Q(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0;const r=t.length-1,s=this.parts,[l,c]=X(t,e);if(this.el=Y.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=B.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith($)||e.startsWith(x)){const i=c[a++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+$).split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Z:"@"===e[1]?J:V})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),B.nextNode(),s.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===k)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,o){var n,a,r,s;if(e===U)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,o)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=n;let a=B.nextNode(),r=0,s=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new W(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new tt(a,this,t)),this._$AV.push(e),l=o[++s]}r!==(null==l?void 0:l.index)&&(a=B.nextNode(),r++)}return B.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,o){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(Q(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new Y(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new W(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,o,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let a=!1;if(void 0===n)t=F(this,t,e,0),a=!C(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const o=t;let r,s;for(t=n[0],r=0;r<n.length-1;r++)s=F(this,o[i+r],e,r),s===U&&(s=this._$AH[r]),a||(a=!C(s)||s!==this._$AH[r]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}a&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const K=y?y.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:L)===U)return;const o=this._$AH,n=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==L&&(o===L||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let tt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};const et=b.litHtmlPolyfillSupport;null==et||et(Y,W),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,ot;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const a=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=a._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new W(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return lt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var dt,ht,ut;function pt(t){return t.substr(0,t.indexOf("."))}null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ht||(ht={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var vt=["closed","locked","off"],ft=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var o,n=pt(e),a="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}return t.callService(a,o,{entity_id:e})}(t,e,vt.includes(t.states[e].state))};const gt="ha-smartphone-card",mt="ha-smartphone-card-editor";function _t(t,e){return t.states[e.entity]}function bt(t,e){var i,o,n,a,r;const s=t.states[e],l=null!==(o=null===(i=null==s?void 0:s.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==o?o:e,c=null===(n=t.entities)||void 0===n?void 0:n[e];if(null==c?void 0:c.name)return c.name;if(null==c?void 0:c.original_name)return c.original_name;const d=null==c?void 0:c.device_id,h=d?null===(a=t.devices)||void 0===a?void 0:a[d]:void 0,u=null!==(r=null==h?void 0:h.name_by_user)&&void 0!==r?r:null==h?void 0:h.name;if(u&&l.startsWith(u)){const t=l.slice(u.length).trim();if(t)return t}return l}function yt(t,e){var i,o;if(void 0!==e.unit)return e.unit;const n=_t(t,e);return null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:""}function wt(t,e){var i,o;const n=_t(t,e);if(!n)return;const a=Number(n.state);if(Number.isNaN(a))return;const r=null!==(i=e.min)&&void 0!==i?i:0,s=null!==(o=e.max)&&void 0!==o?o:100;if(s===r)return;const l=(a-r)/(s-r)*100;return Math.max(0,Math.min(100,l))}function $t(t,e){var i;const o=_t(t,e);if(!o)return"—";if(e.value_attribute){const t=null===(i=o.attributes)||void 0===i?void 0:i[e.value_attribute];if(null!=t&&""!==t)return String(t)}const n=yt(t,e);return n?`${o.state} ${n}`:o.state}function xt(t,e){let i;return i="%"===e?t:t<=0&&t>=-100?t+100:t,i=Math.max(0,Math.min(100,i)),i>=75?4:i>=50?3:i>=25?2:1}const kt=new Set(["switch","light","fan","input_boolean","siren","lock","cover","humidifier"]);function At(t){return kt.has(t)}function St(t,e){if(!e)return!1;const i=t.states[e];return!!i&&("on"===i.state||"home"===i.state||"connected"===i.state)}const Et=new Set(["off","unavailable","unknown","not_connected","not connected","disconnected","none",""]);function Ct(t,e){if(!e)return!1;const i=t.states[e];return!!i&&!Et.has(i.state.toLowerCase())}const Pt=[{value:"com.whatsapp",label:"WhatsApp"},{value:"com.android.chrome",label:"Chrome"},{value:"com.google.android.gm",label:"Gmail"},{value:"com.google.android.apps.maps",label:"Google Maps"},{value:"com.google.android.youtube",label:"YouTube"},{value:"com.spotify.music",label:"Spotify"},{value:"com.instagram.android",label:"Instagram"},{value:"com.facebook.katana",label:"Facebook"},{value:"com.facebook.orca",label:"Messenger"},{value:"org.telegram.messenger",label:"Telegram"},{value:"org.thoughtcrime.securesms",label:"Signal"},{value:"com.twitter.android",label:"X (Twitter)"},{value:"com.android.camera2",label:"Camera"},{value:"com.android.dialer",label:"Phone"},{value:"com.android.vending",label:"Play Store"},{value:"io.homeassistant.companion.android",label:"Home Assistant"},{value:"com.netflix.mediaclient",label:"Netflix"},{value:"com.google.android.apps.photos",label:"Google Photos"},{value:"com.google.android.calendar",label:"Google Calendar"},{value:"com.google.android.deskclock",label:"Clock"}];
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Dt(){return Dt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Dt.apply(null,arguments)}function Nt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Mt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Nt(Object(i),!0).forEach(function(e){Tt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Nt(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Ot(t){return Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(t)}function It(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Rt=It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ht=It(/Edge/i),jt=It(/firefox/i),Ut=It(/safari/i)&&!It(/chrome/i)&&!It(/android/i),Lt=It(/iP(ad|od|hone)/i),zt=It(/chrome/i)&&It(/android/i),Bt={capture:!1,passive:!1};function Qt(t,e,i){t.addEventListener(e,i,!Rt&&Bt)}function Xt(t,e,i){t.removeEventListener(e,i,!Rt&&Bt)}function Yt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Ft(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function qt(t,e,i,o){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Yt(t,e):Yt(t,e))||o&&t===i)return t;if(t===i)break}while(t=Ft(t))}return null}var Wt,Vt=/\s+/g;function Gt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(Vt," ").replace(" "+e+" "," ");t.className=(o+(i?" "+e:"")).replace(Vt," ")}}function Kt(t,e,i){var o=t&&t.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=i+("string"==typeof i?"":"px")}}function Zt(t,e){var i="";if("string"==typeof t)i=t;else do{var o=Kt(t,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function Jt(t,e,i){if(t){var o=t.getElementsByTagName(e),n=0,a=o.length;if(i)for(;n<a;n++)i(o[n],n);return o}return[]}function te(){var t=document.scrollingElement;return t||document.documentElement}function ee(t,e,i,o,n){if(t.getBoundingClientRect||t===window){var a,r,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==te()?(r=(a=t.getBoundingClientRect()).top,s=a.left,l=a.bottom,c=a.right,d=a.height,h=a.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(n=n||t.parentNode,!Rt))do{if(n&&n.getBoundingClientRect&&("none"!==Kt(n,"transform")||i&&"static"!==Kt(n,"position"))){var u=n.getBoundingClientRect();r-=u.top+parseInt(Kt(n,"border-top-width")),s-=u.left+parseInt(Kt(n,"border-left-width")),l=r+a.height,c=s+a.width;break}}while(n=n.parentNode);if(o&&t!==window){var p=Zt(n||t),v=p&&p.a,f=p&&p.d;p&&(l=(r/=f)+(d/=f),c=(s/=v)+(h/=v))}return{top:r,left:s,bottom:l,right:c,width:h,height:d}}}function ie(t,e,i){for(var o=se(t,!0),n=ee(t)[e];o;){if(!(n>=ee(o)[i]))return o;if(o===te())break;o=se(o,!1)}return!1}function oe(t,e,i,o){for(var n=0,a=0,r=t.children;a<r.length;){if("none"!==r[a].style.display&&r[a]!==hi.ghost&&(o||r[a]!==hi.dragged)&&qt(r[a],i.draggable,t,!1)){if(n===e)return r[a];n++}a++}return null}function ne(t,e){for(var i=t.lastElementChild;i&&(i===hi.ghost||"none"===Kt(i,"display")||e&&!Yt(i,e));)i=i.previousElementSibling;return i||null}function ae(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===hi.clone||e&&!Yt(t,e)||i++;return i}function re(t){var e=0,i=0,o=te();if(t)do{var n=Zt(t),a=n.a,r=n.d;e+=t.scrollLeft*a,i+=t.scrollTop*r}while(t!==o&&(t=t.parentNode));return[e,i]}function se(t,e){if(!t||!t.getBoundingClientRect)return te();var i=t,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=Kt(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return te();if(o||e)return i;o=!0}}}while(i=i.parentNode);return te()}function le(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function ce(t,e){return function(){if(!Wt){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Wt=setTimeout(function(){Wt=void 0},e)}}}function de(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function he(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function ue(t,e,i){var o={};return Array.from(t.children).forEach(function(n){var a,r,s,l;if(qt(n,e.draggable,t,!1)&&!n.animated&&n!==i){var c=ee(n);o.left=Math.min(null!==(a=o.left)&&void 0!==a?a:1/0,c.left),o.top=Math.min(null!==(r=o.top)&&void 0!==r?r:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var pe="Sortable"+(new Date).getTime();function ve(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==Kt(t,"display")&&t!==hi.ghost){e.push({target:t,rect:ee(t)});var i=Mt({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=Zt(t,!0);o&&(i.top-=o.f,i.left-=o.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[i][o])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var n=!1,a=0;e.forEach(function(t){var e=0,i=t.target,r=i.fromRect,s=ee(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Zt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&le(l,s)&&!le(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(e=function(t,e,i,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*o.animation}(d,l,c,o.options)),le(s,r)||(i.prevFromRect=r,i.prevToRect=s,e||(e=o.options.animation),o.animate(i,d,s,e)),e&&(n=!0,a=Math.max(a,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),n?t=setTimeout(function(){"function"==typeof i&&i()},a):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,o){if(o){Kt(t,"transition",""),Kt(t,"transform","");var n=Zt(this.el),a=n&&n.a,r=n&&n.d,s=(e.left-i.left)/(a||1),l=(e.top-i.top)/(r||1);t.animatingX=!!s,t.animatingY=!!l,Kt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Kt(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Kt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){Kt(t,"transition",""),Kt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var fe=[],ge={initializeByDefault:!0},me={mount:function(t){for(var e in ge)ge.hasOwnProperty(e)&&!(e in t)&&(t[e]=ge[e]);fe.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),fe.push(t)},pluginEvent:function(t,e,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var n=t+"Global";fe.forEach(function(o){e[o.pluginName]&&(e[o.pluginName][n]&&e[o.pluginName][n](Mt({sortable:e},i)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](Mt({sortable:e},i)))})},initializePlugins:function(t,e,i,o){for(var n in fe.forEach(function(o){var n=o.pluginName;if(t.options[n]||o.initializeByDefault){var a=new o(t,e,t.options);a.sortable=t,a.options=t.options,t[n]=a,Dt(i,a.defaults)}}),t.options)if(t.options.hasOwnProperty(n)){var a=this.modifyOption(t,n,t.options[n]);void 0!==a&&(t.options[n]=a)}},getEventProperties:function(t,e){var i={};return fe.forEach(function(o){"function"==typeof o.eventProperties&&Dt(i,o.eventProperties.call(e[o.pluginName],t))}),i},modifyOption:function(t,e,i){var o;return fe.forEach(function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(o=n.optionListeners[e].call(t[n.pluginName],i))}),o}};var _e=["evt"],be=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,n=function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue;i[o]=t[o]}return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],-1===e.indexOf(i)&&{}.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(i,_e);me.pluginEvent.bind(hi)(t,e,Mt({dragEl:we,parentEl:$e,ghostEl:xe,rootEl:ke,nextEl:Ae,lastDownEl:Se,cloneEl:Ee,cloneHidden:Ce,dragStarted:ze,putSortable:Oe,activeSortable:hi.active,originalEvent:o,oldIndex:Pe,oldDraggableIndex:De,newIndex:Te,newDraggableIndex:Ne,hideGhostForTarget:si,unhideGhostForTarget:li,cloneNowHidden:function(){Ce=!0},cloneNowShown:function(){Ce=!1},dispatchSortableEvent:function(t){ye({sortable:e,name:t,originalEvent:o})}},n))};function ye(t){!function(t){var e=t.sortable,i=t.rootEl,o=t.name,n=t.targetEl,a=t.cloneEl,r=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||i&&i[pe]){var f,g=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Rt||Ht?(f=document.createEvent("Event")).initEvent(o,!0,!0):f=new CustomEvent(o,{bubbles:!0,cancelable:!0}),f.to=r||i,f.from=s||i,f.item=n||i,f.clone=a,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var _=Mt(Mt({},v),me.getEventProperties(o,e));for(var b in _)f[b]=_[b];i&&i.dispatchEvent(f),g[m]&&g[m].call(e,f)}}(Mt({putSortable:Oe,cloneEl:Ee,targetEl:we,rootEl:ke,oldIndex:Pe,oldDraggableIndex:De,newIndex:Te,newDraggableIndex:Ne},t))}var we,$e,xe,ke,Ae,Se,Ee,Ce,Pe,Te,De,Ne,Me,Oe,Ie,Re,He,je,Ue,Le,ze,Be,Qe,Xe,Ye,Fe=!1,qe=!1,We=[],Ve=!1,Ge=!1,Ke=[],Ze=!1,Je=[],ti="undefined"!=typeof document,ei=Lt,ii=Ht||Rt?"cssFloat":"float",oi=ti&&!zt&&!Lt&&"draggable"in document.createElement("div"),ni=function(){if(ti){if(Rt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),ai=function(t,e){var i=Kt(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=oe(t,0,e),a=oe(t,1,e),r=n&&Kt(n),s=a&&Kt(a),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+ee(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+ee(a).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!a||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=o&&"none"===i[ii]||a&&"none"===i[ii]&&l+c>o)?"vertical":"horizontal"},ri=function(t){function e(t,i){return function(o,n,a,r){var s=o.options.group.name&&n.options.group.name&&o.options.group.name===n.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(o,n,a,r),i)(o,n,a,r);var l=(i?o:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},o=t.group;o&&"object"==Ot(o)||(o={name:o}),i.name=o.name,i.checkPull=e(o.pull,!0),i.checkPut=e(o.put),i.revertClone=o.revertClone,t.group=i},si=function(){!ni&&xe&&Kt(xe,"display","none")},li=function(){!ni&&xe&&Kt(xe,"display","")};ti&&!zt&&document.addEventListener("click",function(t){if(qe)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),qe=!1,!1},!0);var ci=function(t){if(we){var e=function(t,e){var i;return We.some(function(o){var n=o[pe].options.emptyInsertThreshold;if(n&&!ne(o)){var a=ee(o),r=t>=a.left-n&&t<=a.right+n,s=e>=a.top-n&&e<=a.bottom+n;return r&&s?i=o:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[pe]._onDragOver(i)}}},di=function(t){we&&we.parentNode[pe]._isOutsideThisEl(t.target)};function hi(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Dt({},e),t[pe]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ai(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==hi.supportPointer&&"PointerEvent"in window&&(!Ut||Lt),emptyInsertThreshold:5};for(var o in me.initializePlugins(this,t,i),i)!(o in e)&&(e[o]=i[o]);for(var n in ri(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&oi,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Qt(t,"pointerdown",this._onTapStart):(Qt(t,"mousedown",this._onTapStart),Qt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Qt(t,"dragover",this),Qt(t,"dragenter",this)),We.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Dt(this,ve())}function ui(t,e,i,o,n,a,r,s){var l,c,d=t[pe],h=d.options.onMove;return!window.CustomEvent||Rt||Ht?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=o,l.related=n||e,l.relatedRect=a||ee(e),l.willInsertAfter=s,l.originalEvent=r,t.dispatchEvent(l),h&&(c=h.call(d,l,r)),c}function pi(t){t.draggable=!1}function vi(){Ze=!1}function fi(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,o=0;i--;)o+=e.charCodeAt(i);return o.toString(36)}function gi(t){return setTimeout(t,0)}function mi(t){return clearTimeout(t)}hi.prototype={constructor:hi,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Be=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,we):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,o=this.options,n=o.preventOnFilter,a=t.type,r=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(r||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter;if(function(t){Je.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var o=e[i];o.checked&&Je.push(o)}}(i),!we&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ut||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=qt(s,o.draggable,i,!1))&&s.animated||Se===s)){if(Pe=ae(s),De=ae(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ye({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),be("filter",e,{evt:t}),void(n&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=qt(l,o.trim(),i,!1))return ye({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),be("filter",e,{evt:t}),!0})))return void(n&&t.preventDefault());o.handle&&!qt(l,o.handle,i,!1)||this._prepareDragStart(t,r,s)}}},_prepareDragStart:function(t,e,i){var o,n=this,a=n.el,r=n.options,s=a.ownerDocument;if(i&&!we&&i.parentNode===a){var l=ee(i);if(ke=a,$e=(we=i).parentNode,Ae=we.nextSibling,Se=i,Me=r.group,hi.dragged=we,Ie={target:we,clientX:(e||t).clientX,clientY:(e||t).clientY},Ue=Ie.clientX-l.left,Le=Ie.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,we.style["will-change"]="all",o=function(){be("delayEnded",n,{evt:t}),hi.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!jt&&n.nativeDraggable&&(we.draggable=!0),n._triggerDragStart(t,e),ye({sortable:n,name:"choose",originalEvent:t}),Gt(we,r.chosenClass,!0))},r.ignore.split(",").forEach(function(t){Jt(we,t.trim(),pi)}),Qt(s,"dragover",ci),Qt(s,"mousemove",ci),Qt(s,"touchmove",ci),r.supportPointer?(Qt(s,"pointerup",n._onDrop),!this.nativeDraggable&&Qt(s,"pointercancel",n._onDrop)):(Qt(s,"mouseup",n._onDrop),Qt(s,"touchend",n._onDrop),Qt(s,"touchcancel",n._onDrop)),jt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,we.draggable=!0),be("delayStart",this,{evt:t}),!r.delay||r.delayOnTouchOnly&&!e||this.nativeDraggable&&(Ht||Rt))o();else{if(hi.eventCanceled)return void this._onDrop();r.supportPointer?(Qt(s,"pointerup",n._disableDelayedDrag),Qt(s,"pointercancel",n._disableDelayedDrag)):(Qt(s,"mouseup",n._disableDelayedDrag),Qt(s,"touchend",n._disableDelayedDrag),Qt(s,"touchcancel",n._disableDelayedDrag)),Qt(s,"mousemove",n._delayedDragTouchMoveHandler),Qt(s,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&Qt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(o,r.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){we&&pi(we),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Xt(t,"mouseup",this._disableDelayedDrag),Xt(t,"touchend",this._disableDelayedDrag),Xt(t,"touchcancel",this._disableDelayedDrag),Xt(t,"pointerup",this._disableDelayedDrag),Xt(t,"pointercancel",this._disableDelayedDrag),Xt(t,"mousemove",this._delayedDragTouchMoveHandler),Xt(t,"touchmove",this._delayedDragTouchMoveHandler),Xt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Qt(document,"pointermove",this._onTouchMove):Qt(document,e?"touchmove":"mousemove",this._onTouchMove):(Qt(we,"dragend",this),Qt(ke,"dragstart",this._onDragStart));try{document.selection?gi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Fe=!1,ke&&we){be("dragStarted",this,{evt:e}),this.nativeDraggable&&Qt(document,"dragover",di);var i=this.options;!t&&Gt(we,i.dragClass,!1),Gt(we,i.ghostClass,!0),hi.active=this,t&&this._appendGhost(),ye({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Re){this._lastX=Re.clientX,this._lastY=Re.clientY,si();for(var t=document.elementFromPoint(Re.clientX,Re.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Re.clientX,Re.clientY))!==e;)e=t;if(we.parentNode[pe]._isOutsideThisEl(t),e)do{if(e[pe]){if(e[pe]._onDragOver({clientX:Re.clientX,clientY:Re.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=Ft(e));li()}},_onTouchMove:function(t){if(Ie){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,n=t.touches?t.touches[0]:t,a=xe&&Zt(xe,!0),r=xe&&a&&a.a,s=xe&&a&&a.d,l=ei&&Ye&&re(Ye),c=(n.clientX-Ie.clientX+o.x)/(r||1)+(l?l[0]-Ke[0]:0)/(r||1),d=(n.clientY-Ie.clientY+o.y)/(s||1)+(l?l[1]-Ke[1]:0)/(s||1);if(!hi.active&&!Fe){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(xe){a?(a.e+=c-(He||0),a.f+=d-(je||0)):a={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");Kt(xe,"webkitTransform",h),Kt(xe,"mozTransform",h),Kt(xe,"msTransform",h),Kt(xe,"transform",h),He=c,je=d,Re=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!xe){var t=this.options.fallbackOnBody?document.body:ke,e=ee(we,!0,ei,!0,t),i=this.options;if(ei){for(Ye=t;"static"===Kt(Ye,"position")&&"none"===Kt(Ye,"transform")&&Ye!==document;)Ye=Ye.parentNode;Ye!==document.body&&Ye!==document.documentElement?(Ye===document&&(Ye=te()),e.top+=Ye.scrollTop,e.left+=Ye.scrollLeft):Ye=te(),Ke=re(Ye)}Gt(xe=we.cloneNode(!0),i.ghostClass,!1),Gt(xe,i.fallbackClass,!0),Gt(xe,i.dragClass,!0),Kt(xe,"transition",""),Kt(xe,"transform",""),Kt(xe,"box-sizing","border-box"),Kt(xe,"margin",0),Kt(xe,"top",e.top),Kt(xe,"left",e.left),Kt(xe,"width",e.width),Kt(xe,"height",e.height),Kt(xe,"opacity","0.8"),Kt(xe,"position",ei?"absolute":"fixed"),Kt(xe,"zIndex","100000"),Kt(xe,"pointerEvents","none"),hi.ghost=xe,t.appendChild(xe),Kt(xe,"transform-origin",Ue/parseInt(xe.style.width)*100+"% "+Le/parseInt(xe.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,o=t.dataTransfer,n=i.options;be("dragStart",this,{evt:t}),hi.eventCanceled?this._onDrop():(be("setupClone",this),hi.eventCanceled||((Ee=he(we)).removeAttribute("id"),Ee.draggable=!1,Ee.style["will-change"]="",this._hideClone(),Gt(Ee,this.options.chosenClass,!1),hi.clone=Ee),i.cloneId=gi(function(){be("clone",i),hi.eventCanceled||(i.options.removeCloneOnHide||ke.insertBefore(Ee,we),i._hideClone(),ye({sortable:i,name:"clone"}))}),!e&&Gt(we,n.dragClass,!0),e?(qe=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Xt(document,"mouseup",i._onDrop),Xt(document,"touchend",i._onDrop),Xt(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",n.setData&&n.setData.call(i,o,we)),Qt(document,"drop",i),Kt(we,"transform","translateZ(0)")),Fe=!0,i._dragStartId=gi(i._dragStarted.bind(i,e,t)),Qt(document,"selectstart",i),ze=!0,window.getSelection().removeAllRanges(),Ut&&Kt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,o,n,a=this.el,r=t.target,s=this.options,l=s.group,c=hi.active,d=Me===l,h=s.sort,u=Oe||c,p=this,v=!1;if(!Ze){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),r=qt(r,s.draggable,a,!0),P("dragOver"),hi.eventCanceled)return v;if(we.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return D(!1);if(qe=!1,c&&!s.disabled&&(d?h||(o=$e!==ke):Oe===this||(this.lastPutMode=Me.checkPull(this,c,we,t))&&l.checkPut(this,c,we,t))){if(n="vertical"===this._getDirection(t,r),e=ee(we),P("dragOverValid"),hi.eventCanceled)return v;if(o)return $e=ke,T(),this._hideClone(),P("revert"),hi.eventCanceled||(Ae?ke.insertBefore(we,Ae):ke.appendChild(we)),D(!0);var f=ne(a,s.draggable);if(!f||function(t,e,i){var o=ee(ne(i.el,i.options.draggable)),n=ue(i.el,i.options,xe),a=10;return e?t.clientX>n.right+a||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+a||t.clientX>o.right&&t.clientY>o.top}(t,n,this)&&!f.animated){if(f===we)return D(!1);if(f&&a===t.target&&(r=f),r&&(i=ee(r)),!1!==ui(ke,a,we,e,r,i,t,!!r))return T(),f&&f.nextSibling?a.insertBefore(we,f.nextSibling):a.appendChild(we),$e=a,N(),D(!0)}else if(f&&function(t,e,i){var o=ee(oe(i.el,0,i.options,!0)),n=ue(i.el,i.options,xe),a=10;return e?t.clientX<n.left-a||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-a||t.clientY<o.bottom&&t.clientX<o.left}(t,n,this)){var g=oe(a,0,s,!0);if(g===we)return D(!1);if(i=ee(r=g),!1!==ui(ke,a,we,e,r,i,t,!1))return T(),a.insertBefore(we,g),$e=a,N(),D(!0)}else if(r.parentNode===a){i=ee(r);var m,_,b,y=we.parentNode!==a,w=!function(t,e,i){var o=i?t.left:t.top,n=i?t.right:t.bottom,a=i?t.width:t.height,r=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return o===r||n===s||o+a/2===r+l/2}(we.animated&&we.toRect||e,r.animated&&r.toRect||i,n),$=n?"top":"left",x=ie(r,"top","top")||ie(we,"top","top"),k=x?x.scrollTop:void 0;if(Be!==r&&(_=i[$],Ve=!1,Ge=!w&&s.invertSwap||y),m=function(t,e,i,o,n,a,r,s){var l=o?t.clientY:t.clientX,c=o?i.height:i.width,d=o?i.top:i.left,h=o?i.bottom:i.right,u=!1;if(!r)if(s&&Xe<c*n){if(!Ve&&(1===Qe?l>d+c*a/2:l<h-c*a/2)&&(Ve=!0),Ve)u=!0;else if(1===Qe?l<d+Xe:l>h-Xe)return-Qe}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return ae(we)<ae(t)?1:-1}(e);if((u=u||r)&&(l<d+c*a/2||l>h-c*a/2))return l>d+c/2?1:-1;return 0}(t,r,i,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ge,Be===r),0!==m){var A=ae(we);do{A-=m,b=$e.children[A]}while(b&&("none"===Kt(b,"display")||b===xe))}if(0===m||b===r)return D(!1);Be=r,Qe=m;var S=r.nextElementSibling,E=!1,C=ui(ke,a,we,e,r,i,t,E=1===m);if(!1!==C)return 1!==C&&-1!==C||(E=1===C),Ze=!0,setTimeout(vi,30),T(),E&&!S?a.appendChild(we):r.parentNode.insertBefore(we,E?S:r),x&&de(x,0,k-x.scrollTop),$e=we.parentNode,void 0===_||Ge||(Xe=Math.abs(_-ee(r)[$])),N(),D(!0)}if(a.contains(we))return D(!1)}return!1}function P(s,l){be(s,p,Mt({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:o,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:r,completed:D,onMove:function(i,o){return ui(ke,a,we,e,i,ee(i),t,o)},changed:N},l))}function T(){P("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return P("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Gt(we,Oe?Oe.options.ghostClass:c.options.ghostClass,!1),Gt(we,s.ghostClass,!0)),Oe!==p&&p!==hi.active?Oe=p:p===hi.active&&Oe&&(Oe=null),u===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){P("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(r===we&&!we.animated||r===a&&!r.animated)&&(Be=null),s.dragoverBubble||t.rootEl||r===document||(we.parentNode[pe]._isOutsideThisEl(t.target),!e&&ci(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function N(){Te=ae(we),Ne=ae(we,s.draggable),ye({sortable:p,name:"change",toEl:a,newIndex:Te,newDraggableIndex:Ne,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Xt(document,"mousemove",this._onTouchMove),Xt(document,"touchmove",this._onTouchMove),Xt(document,"pointermove",this._onTouchMove),Xt(document,"dragover",ci),Xt(document,"mousemove",ci),Xt(document,"touchmove",ci)},_offUpEvents:function(){var t=this.el.ownerDocument;Xt(t,"mouseup",this._onDrop),Xt(t,"touchend",this._onDrop),Xt(t,"pointerup",this._onDrop),Xt(t,"pointercancel",this._onDrop),Xt(t,"touchcancel",this._onDrop),Xt(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Te=ae(we),Ne=ae(we,i.draggable),be("drop",this,{evt:t}),$e=we&&we.parentNode,Te=ae(we),Ne=ae(we,i.draggable),hi.eventCanceled||(Fe=!1,Ge=!1,Ve=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),mi(this.cloneId),mi(this._dragStartId),this.nativeDraggable&&(Xt(document,"drop",this),Xt(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ut&&Kt(document.body,"user-select",""),Kt(we,"transform",""),t&&(ze&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),xe&&xe.parentNode&&xe.parentNode.removeChild(xe),(ke===$e||Oe&&"clone"!==Oe.lastPutMode)&&Ee&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),we&&(this.nativeDraggable&&Xt(we,"dragend",this),pi(we),we.style["will-change"]="",ze&&!Fe&&Gt(we,Oe?Oe.options.ghostClass:this.options.ghostClass,!1),Gt(we,this.options.chosenClass,!1),ye({sortable:this,name:"unchoose",toEl:$e,newIndex:null,newDraggableIndex:null,originalEvent:t}),ke!==$e?(Te>=0&&(ye({rootEl:$e,name:"add",toEl:$e,fromEl:ke,originalEvent:t}),ye({sortable:this,name:"remove",toEl:$e,originalEvent:t}),ye({rootEl:$e,name:"sort",toEl:$e,fromEl:ke,originalEvent:t}),ye({sortable:this,name:"sort",toEl:$e,originalEvent:t})),Oe&&Oe.save()):Te!==Pe&&Te>=0&&(ye({sortable:this,name:"update",toEl:$e,originalEvent:t}),ye({sortable:this,name:"sort",toEl:$e,originalEvent:t})),hi.active&&(null!=Te&&-1!==Te||(Te=Pe,Ne=De),ye({sortable:this,name:"end",toEl:$e,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){be("nulling",this),ke=we=$e=xe=Ae=Ee=Se=Ce=Ie=Re=ze=Te=Ne=Pe=De=Be=Qe=Oe=Me=hi.dragged=hi.ghost=hi.clone=hi.active=null;var t=this.el;Je.forEach(function(e){t.contains(e)&&(e.checked=!0)}),Je.length=He=je=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":we&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,n=i.length,a=this.options;o<n;o++)qt(t=i[o],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||fi(t));return e},sort:function(t,e){var i={},o=this.el;this.toArray().forEach(function(t,e){var n=o.children[e];qt(n,this.options.draggable,o,!1)&&(i[t]=n)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(o.removeChild(i[t]),o.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return qt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var o=me.modifyOption(this,t,e);i[t]=void 0!==o?o:e,"group"===t&&ri(i)},destroy:function(){be("destroy",this);var t=this.el;t[pe]=null,Xt(t,"mousedown",this._onTapStart),Xt(t,"touchstart",this._onTapStart),Xt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Xt(t,"dragover",this),Xt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),We.splice(We.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ce){if(be("hideClone",this),hi.eventCanceled)return;Kt(Ee,"display","none"),this.options.removeCloneOnHide&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),Ce=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ce){if(be("showClone",this),hi.eventCanceled)return;we.parentNode!=ke||this.options.group.revertClone?Ae?ke.insertBefore(Ee,Ae):ke.appendChild(Ee):ke.insertBefore(Ee,we),this.options.group.revertClone&&this.animate(we,Ee),Kt(Ee,"display",""),Ce=!1}}else this._hideClone()}},ti&&Qt(document,"touchmove",function(t){(hi.active||Fe)&&t.cancelable&&t.preventDefault()}),hi.utils={on:Qt,off:Xt,css:Kt,find:Jt,is:function(t,e){return!!qt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:ce,closest:qt,toggleClass:Gt,clone:he,index:ae,nextTick:gi,cancelNextTick:mi,detectDirection:ai,getChild:oe,expando:pe},hi.get=function(t){return t[pe]},hi.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(hi.utils=Mt(Mt({},hi.utils),t.utils)),me.mount(t)})},hi.create=function(t,e){return new hi(t,e)},hi.version="1.15.7";var _i,bi,yi,wi,$i,xi,ki=[],Ai=!1;function Si(){ki.forEach(function(t){clearInterval(t.pid)}),ki=[]}function Ei(){clearInterval(xi)}var Ci=ce(function(t,e,i,o){if(e.scroll){var n,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=te(),d=!1;bi!==i&&(bi=i,Si(),_i=e.scroll,n=e.scrollFn,!0===_i&&(_i=se(i,!0)));var h=0,u=_i;do{var p=u,v=ee(p),f=v.top,g=v.bottom,m=v.left,_=v.right,b=v.width,y=v.height,w=void 0,$=void 0,x=p.scrollWidth,k=p.scrollHeight,A=Kt(p),S=p.scrollLeft,E=p.scrollTop;p===c?(w=b<x&&("auto"===A.overflowX||"scroll"===A.overflowX||"visible"===A.overflowX),$=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY||"visible"===A.overflowY)):(w=b<x&&("auto"===A.overflowX||"scroll"===A.overflowX),$=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY));var C=w&&(Math.abs(_-a)<=s&&S+b<x)-(Math.abs(m-a)<=s&&!!S),P=$&&(Math.abs(g-r)<=s&&E+y<k)-(Math.abs(f-r)<=s&&!!E);if(!ki[h])for(var T=0;T<=h;T++)ki[T]||(ki[T]={});ki[h].vx==C&&ki[h].vy==P&&ki[h].el===p||(ki[h].el=p,ki[h].vx=C,ki[h].vy=P,clearInterval(ki[h].pid),0==C&&0==P||(d=!0,ki[h].pid=setInterval(function(){o&&0===this.layer&&hi.active._onTouchMove($i);var e=ki[this.layer].vy?ki[this.layer].vy*l:0,i=ki[this.layer].vx?ki[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(hi.dragged.parentNode[pe],i,e,t,$i,ki[this.layer].el)||de(ki[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=se(u,!1)));Ai=d}},30),Pi=function(t){var e=t.originalEvent,i=t.putSortable,o=t.dragEl,n=t.activeSortable,a=t.dispatchSortableEvent,r=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||n;r();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function Ti(){}function Di(){}Ti.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=oe(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Pi},Dt(Ti,{pluginName:"revertOnSpill"}),Di.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Pi},Dt(Di,{pluginName:"removeOnSpill"}),hi.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Qt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Qt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Qt(document,"touchmove",this._handleFallbackAutoScroll):Qt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Xt(document,"dragover",this._handleAutoScroll):(Xt(document,"pointermove",this._handleFallbackAutoScroll),Xt(document,"touchmove",this._handleFallbackAutoScroll),Xt(document,"mousemove",this._handleFallbackAutoScroll)),Ei(),Si(),clearTimeout(Wt),Wt=void 0},nulling:function(){$i=bi=_i=Ai=xi=yi=wi=null,ki.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,o=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(o,n);if($i=t,e||this.options.forceAutoScrollFallback||Ht||Rt||Ut){Ci(t,this.options,a,e);var r=se(a,!0);!Ai||xi&&o===yi&&n===wi||(xi&&Ei(),xi=setInterval(function(){var a=se(document.elementFromPoint(o,n),!0);a!==r&&(r=a,Si()),Ci(t,i.options,a,e)},10),yi=o,wi=n)}else{if(!this.options.bubbleScroll||se(a,!0)===te())return void Si();Ci(t,this.options,se(a,!1),!1)}}},Dt(t,{pluginName:"scroll",initializeByDefault:!0})}),hi.mount(Di,Ti);const Ni={select:{mode:"dropdown",options:[{value:"list",label:"List"},{value:"phone",label:"Phone"}]}},Mi={select:{mode:"dropdown",options:[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"},{value:"message",label:"Send message (compose dialog)"}]}},Oi={select:{mode:"dropdown",options:[{value:"service",label:"Run a service"},{value:"message",label:"Send message (compose dialog)"},{value:"toggle",label:"Toggle (switch)"},{value:"app",label:"Launch app"}]}},Ii={select:{mode:"dropdown",custom_value:!0,options:Pt}},Ri={entity:{}},Hi={entity:{domain:"notify"}},ji={icon:{}},Ui={text:{}},Li={number:{mode:"box"}},zi={device:{}},Bi={object:{}};let Qi=class extends nt{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=hi.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[i]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,i),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const i=this._config.rows.map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({rows:i})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,i)=>i!==t);this._updateConfig({rows:e})}_addRowsFromDevice(){var t,e;const i=this._deviceToAdd;if(!i)return;const o=null!==(t=this.hass.entities)&&void 0!==t?t:{},n=null!==(e=this._config.status_bar)&&void 0!==e?e:{},a=new Set([...this._config.rows.map(t=>t.entity),n.battery_entity,n.charging_entity,n.wifi_entity,n.mobile_data_entity].filter(t=>!!t)),r=Object.values(o).filter(t=>!(t.device_id!==i||t.hidden_by||t.disabled_by||t.entity_category||a.has(t.entity_id))).map(t=>({entity:t.entity_id}));r.length&&this._updateConfig({rows:[...this._config.rows,...r]}),this._deviceToAdd=void 0}_updateQuickAction(t,e){var i;const o=(null!==(i=this._config.quick_actions)&&void 0!==i?i:[]).map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({quick_actions:o})}_addQuickAction(){var t;const e=[...null!==(t=this._config.quick_actions)&&void 0!==t?t:[],{service:""}];this._updateConfig({quick_actions:e})}_removeQuickAction(t){var e;const i=(null!==(e=this._config.quick_actions)&&void 0!==e?e:[]).filter((e,i)=>i!==t);this._updateConfig({quick_actions:i})}render(){var t,e,i,o,n,a,r,s,l,c;if(!this.hass||!this._config)return j``;const d=null!==(t=this._config.mode)&&void 0!==t?t:"list",h=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return j`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${Ni}
            label="Mode"
            .value=${d}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({mode:t.detail.value})}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${Ui}
            label="Device name"
            .value=${null!==(i=this._config.device_name)&&void 0!==i?i:""}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({device_name:t.detail.value})}}
          ></ha-selector>

          ${"list"===d?j`<ha-selector
                .hass=${this.hass}
                .selector=${Ui}
                label="Card title (optional)"
                .value=${null!==(o=this._config.title)&&void 0!==o?o:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateConfig({title:t.detail.value})}}
              ></ha-selector>`:L}
        </div>

        ${"phone"===d?j`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ri}
                  label="Battery (%)"
                  .value=${null!==(n=h.battery_entity)&&void 0!==n?n:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,battery_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ri}
                  label="Charging (binary_sensor)"
                  .value=${null!==(a=h.charging_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,charging_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ri}
                  label="Wi-Fi connection"
                  .value=${null!==(r=h.wifi_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,wifi_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ri}
                  label="Mobile data"
                  .value=${null!==(s=h.mobile_data_entity)&&void 0!==s?s:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,mobile_data_entity:t.detail.value}})}}
                ></ha-selector>
              </div>
            `:L}

        <div class="section">
          <div class="section-title">Add entities from a device</div>
          <div class="device-add">
            <ha-selector
              .hass=${this.hass}
              .selector=${zi}
              label="Device"
              .value=${null!==(l=this._deviceToAdd)&&void 0!==l?l:""}
              @value-changed=${t=>{t.stopPropagation(),this._deviceToAdd=t.detail.value}}
            ></ha-selector>
            <mwc-button .disabled=${!this._deviceToAdd} @click=${this._addRowsFromDevice}>
              + Add all entities
            </mwc-button>
          </div>
        </div>

        <div class="section">
          <div class="section-title">
            ${"phone"===d?"Screen items":"Rows"}
          </div>
          <div class="rows">
            ${this._config.rows.map((t,e)=>this._renderRowEditor(t,e))}
          </div>
          <mwc-button @click=${this._addRow}>+ Add entity</mwc-button>
        </div>

        ${"phone"===d?j`
              <div class="section">
                <div class="section-title">Quick actions</div>
                <div class="rows">
                  ${(null!==(c=this._config.quick_actions)&&void 0!==c?c:[]).map((t,e)=>this._renderQuickActionEditor(t,e))}
                </div>
                <mwc-button @click=${this._addQuickAction}>+ Add quick action</mwc-button>
              </div>
            `:L}
      </div>
    `}_renderQuickActionEditor(t,e){var i,o,n,a,r,s,l,c,d;const h=null!==(i=t.type)&&void 0!==i?i:"service";return j`
      <div class="row-editor">
        <div class="row-editor-fields">
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${ji}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Ui}
              label="Name"
              .value=${null!==(n=t.name)&&void 0!==n?n:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{name:t.detail.value})}}
            ></ha-selector>
          </div>
          <ha-selector
            .hass=${this.hass}
            .selector=${Oi}
            label="Action type"
            .value=${h}
            @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{type:t.detail.value})}}
          ></ha-selector>
          ${"message"===h?j`<ha-selector
                .hass=${this.hass}
                .selector=${Hi}
                label="Notify entity"
                .value=${null!==(a=t.service)&&void 0!==a?a:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
              ></ha-selector>`:"toggle"===h?this._renderToggleQuickActionFields(t,e):"app"===h?j`
                    <ha-service-picker
                      .hass=${this.hass}
                      label="Notify service (a legacy notify.* service, e.g. notify.mobile_app_sm_a346b)"
                      .value=${null!==(r=t.service)&&void 0!==r?r:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
                    ></ha-service-picker>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${Ii}
                      label="App to launch (optional – leave empty to pick the app each time you tap this action)"
                      .value=${null!==(s=t.package_name)&&void 0!==s?s:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{package_name:t.detail.value})}}
                    ></ha-selector>
                  `:j`
                  <div class="row-editor-line">
                    <ha-service-picker
                      .hass=${this.hass}
                      label="Service"
                      .value=${null!==(l=t.service)&&void 0!==l?l:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
                    ></ha-service-picker>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${Ri}
                      label="Target entity (optional)"
                      .value=${null!==(c=t.entity_id)&&void 0!==c?c:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{entity_id:t.detail.value})}}
                    ></ha-selector>
                  </div>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Bi}
                    label="Service data (optional)"
                    .value=${null!==(d=t.data)&&void 0!==d?d:{}}
                    @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{data:t.detail.value})}}
                  ></ha-selector>
                `}
        </div>
        <ha-icon-button class="remove" @click=${()=>this._removeQuickAction(e)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderToggleQuickActionFields(t,e){var i,o,n,a,r,s;return j`
      <ha-selector
        .hass=${this.hass}
        .selector=${Ri}
        label="Entity (optional – a toggleable entity reflects its own state; any other entity is just passed as entity_id)"
        .value=${null!==(i=t.entity_id)&&void 0!==i?i:""}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{entity_id:t.detail.value})}}
      ></ha-selector>
      <ha-selector
        .hass=${this.hass}
        .selector=${Ri}
        label="State entity (optional – read on/off from here instead of tracking it locally)"
        .value=${null!==(o=t.state_entity)&&void 0!==o?o:""}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{state_entity:t.detail.value})}}
      ></ha-selector>
      <div class="section-title">Turn on</div>
      <div class="row-editor-line">
        <ha-service-picker
          .hass=${this.hass}
          label="Service (leave empty to just toggle the entity above)"
          .value=${null!==(n=t.service)&&void 0!==n?n:""}
          @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
        ></ha-service-picker>
      </div>
      <ha-selector
        .hass=${this.hass}
        .selector=${Bi}
        label="Service data for 'on' (optional)"
        .value=${null!==(a=t.data)&&void 0!==a?a:{}}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{data:t.detail.value})}}
      ></ha-selector>
      <div class="section-title">Turn off</div>
      <div class="row-editor-line">
        <ha-service-picker
          .hass=${this.hass}
          label="Service (optional, defaults to the 'on' service above)"
          .value=${null!==(r=t.service_off)&&void 0!==r?r:""}
          @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service_off:t.detail.value})}}
        ></ha-service-picker>
      </div>
      <ha-selector
        .hass=${this.hass}
        .selector=${Bi}
        label="Service data for 'off' (optional)"
        .value=${null!==(s=t.data_off)&&void 0!==s?s:{}}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{data_off:t.detail.value})}}
      ></ha-selector>
    `}_renderRowEditor(t,e){var i,o,n,a,r,s;const l="message"===t.type;return j`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${l?Hi:Ri}
            label=${l?"Notify entity":"Entity"}
            .value=${t.entity}
            @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{entity:t.detail.value})}}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ui}
              label="Name (optional)"
              .value=${null!==(i=t.name)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{name:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${ji}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Mi}
              label="Display"
              .value=${null!==(n=t.type)&&void 0!==n?n:"text"}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{type:t.detail.value})}}
            ></ha-selector>
          </div>
          ${l?L:j`<ha-selector
                .hass=${this.hass}
                .selector=${Ui}
                label="Value attribute (optional, e.g. app_name)"
                .value=${null!==(a=t.value_attribute)&&void 0!==a?a:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{value_attribute:t.detail.value||void 0})}}
              ></ha-selector>`}
          ${"bar"===t.type?j`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Li}
                  label="Min"
                  .value=${null!==(r=t.min)&&void 0!==r?r:0}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{min:Number(t.detail.value)})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Li}
                  label="Max"
                  .value=${null!==(s=t.max)&&void 0!==s?s:100}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{max:Number(t.detail.value)})}}
                ></ha-selector>
              </div>`:L}
        </div>
        <ha-icon-button class="remove" @click=${()=>this._removeRow(e)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}static get styles(){return r`
      .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 8px 0;
      }
      .section {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .section-title {
        font-weight: 500;
        color: var(--primary-text-color);
      }
      .device-add {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .device-add ha-selector {
        flex: 1;
      }
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row-editor {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 8px;
        background: var(--card-background-color);
      }
      .drag-handle {
        cursor: grab;
        color: var(--secondary-text-color);
        margin-top: 10px;
      }
      .row-editor-fields {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
      }
      .row-editor-line {
        display: flex;
        gap: 8px;
      }
      .row-editor-line > * {
        flex: 1;
        min-width: 0;
      }
      .remove {
        color: var(--secondary-text-color);
      }
      ha-selector,
      ha-service-picker {
        display: block;
        width: 100%;
      }
    `}};t([lt({attribute:!1})],Qi.prototype,"hass",void 0),t([ct()],Qi.prototype,"_config",void 0),t([ct()],Qi.prototype,"_deviceToAdd",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,a=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(a.finisher=function(e){t(e,o)}),a}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}(".rows")],Qi.prototype,"_rowsEl",void 0),Qi=t([rt(mt)],Qi);const Xi={text:{}},Yi={text:{multiline:!0}},Fi={select:{mode:"dropdown",options:[{value:"normal",label:"Normal"},{value:"high",label:"High"}]}},qi={select:{mode:"dropdown",custom_value:!0,options:Pt}};let Wi=class extends nt{constructor(){super(...arguments),this._quickActionsOpen=!1,this._localToggleStates={},this._composeTitle="",this._composeMessage="",this._composePriority="normal",this._composeChannel="",this._appPickerValue=""}static getConfigElement(){return document.createElement(mt)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,i,o;return"phone"===(null===(t=this._config)||void 0===t?void 0:t.mode)?10:1+(null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0)}getLayoutOptions(){var t,e,i,o;if("phone"===(null===(t=this._config)||void 0===t?void 0:t.mode))return{grid_columns:2,grid_rows:8,grid_min_columns:2,grid_min_rows:6};const n=null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0;return{grid_columns:4,grid_rows:Math.max(2,Math.ceil((n+1)/2)+1),grid_min_columns:3,grid_min_rows:2}}connectedCallback(){super.connectedCallback(),this._clockInterval=setInterval(()=>this.requestUpdate(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._clockInterval&&clearInterval(this._clockInterval)}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():j``}_showMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_openSheet(t){t&&(this._sheetEntityId=t,this._historyPoints=void 0,this._loadHistory(t))}_closeSheet(){this._sheetEntityId=void 0,this._historyPoints=void 0}_toggleSheetEntity(){this._sheetEntityId&&ft(this.hass,this._sheetEntityId)}async _loadHistory(t){var e;try{const i=new Date(Date.now()-864e5).toISOString(),o=await this.hass.callApi("GET",`history/period/${i}?filter_entity_id=${t}&minimal_response`);if(this._sheetEntityId!==t)return;this._historyPoints=null!==(e=null==o?void 0:o[0])&&void 0!==e?e:[]}catch{this._sheetEntityId===t&&(this._historyPoints=[])}}_openQuickActions(){var t;(null===(t=this._config.quick_actions)||void 0===t?void 0:t.length)&&(this._quickActionsOpen=!0)}_closeQuickActions(){this._quickActionsOpen=!1}_runQuickAction(t,e){var i;if("message"===t.type)return void this._openCompose(t);if("toggle"===t.type)return void this._toggleQuickAction(t,e);if("app"===t.type)return void(t.package_name?(this._launchApp(t.service,t.package_name),this._closeQuickActions()):this._openAppPicker(t));const[o,n]=(null!==(i=t.service)&&void 0!==i?i:"").split(".");if(!o||!n)return;const a={...t.data};t.entity_id&&(a.entity_id=t.entity_id),this.hass.callService(o,n,a),this._closeQuickActions()}_isQuickActionOn(t,e){var i;return t.state_entity?St(this.hass,t.state_entity):t.entity_id&&!t.service&&At(pt(t.entity_id))?St(this.hass,t.entity_id):null!==(i=this._localToggleStates[e])&&void 0!==i&&i}_toggleQuickAction(t,e){var i;const o=t.entity_id?pt(t.entity_id):void 0;if(t.entity_id&&o&&At(o)&&!t.service)return void ft(this.hass,t.entity_id);const n=!this._isQuickActionOn(t,e),a=n?t.service:t.service_off||t.service,[r,s]=(null!=a?a:"").split(".");if(r&&s){const e={...n?t.data:null!==(i=t.data_off)&&void 0!==i?i:t.data};t.entity_id&&(e.entity_id=t.entity_id),this.hass.callService(r,s,e)}t.state_entity||(this._localToggleStates={...this._localToggleStates,[e]:n})}_openCompose(t){t.service&&(this._composeTarget={service:t.service,name:t.name},this._composeTitle="",this._composeMessage="",this._composePriority="normal",this._composeChannel="",this._quickActionsOpen=!1)}_closeCompose(){this._composeTarget=void 0}_isNotifyEntity(t){return"notify"===pt(t)&&!!this.hass.states[t]}_submitCompose(){const t=this._composeTarget;if(!t||!this._composeMessage.trim())return;const e={message:this._composeMessage};if(this._composeTitle.trim()&&(e.title=this._composeTitle.trim()),this._isNotifyEntity(t.service))this.hass.callService("notify","send_message",e,{entity_id:t.service});else{const i={};this._composeChannel.trim()&&(i.channel=this._composeChannel.trim()),"high"===this._composePriority&&(i.push={priority:"high"}),Object.keys(i).length&&(e.data=i);const[o,n]=t.service.split(".");o&&n&&this.hass.callService(o,n,e)}this._closeCompose()}_launchApp(t,e){const[i,o]=(null!=t?t:"").split(".");i&&o&&e&&this.hass.callService(i,o,{message:"command_launch_app",data:{package_name:e}})}_openAppPicker(t){t.service&&(this._appPickerTarget={service:t.service,name:t.name},this._appPickerValue="",this._quickActionsOpen=!1)}_closeAppPicker(){this._appPickerTarget=void 0}_submitAppPicker(){const t=this._appPickerTarget;t&&this._appPickerValue.trim()&&(this._launchApp(t.service,this._appPickerValue.trim()),this._closeAppPicker())}_renderRow(t,e){const i=this.hass,o=function(t,e){var i,o;if(e.type)return e.type;const n=_t(t,e);if(!n)return"text";const a=!Number.isNaN(Number(n.state)),r=null===(i=n.attributes)||void 0===i?void 0:i.device_class;return!a||"battery"!==r&&"%"!==(null===(o=n.attributes)||void 0===o?void 0:o.unit_of_measurement)?"text":"bar"}(i,t);if("message"===o)return this._renderMessageRow(t);const n=_t(i,t),a=function(t,e){return e.name?e.name:bt(t,e.entity)}(i,t),r=function(t,e){var i;if(e.icon)return e.icon;const o=_t(t,e);return null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.icon}(i,t);return j`
      <div
        class="row ${!n?"unavailable":""}"
        role="button"
        tabindex="0"
        @click=${()=>e(t.entity)}
        @keydown=${i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),e(t.entity))}}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${null!=r?r:"mdi:help-circle-outline"}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${a}</div>
          ${"bar"===o?this._renderBar(t):j`<div class="row-value">${$t(i,t)}</div>`}
        </div>
      </div>
    `}_renderMessageRow(t){var e,i;const o=null!==(e=t.name)&&void 0!==e?e:"Send message",n=null!==(i=t.icon)&&void 0!==i?i:"mdi:message-text",a=()=>this._openCompose({service:t.entity,name:t.name,icon:t.icon});return j`
      <div
        class="row"
        role="button"
        tabindex="0"
        @click=${a}
        @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),a())}}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${n}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${o}</div>
          <div class="row-value">Tap to send</div>
        </div>
      </div>
    `}_renderBar(t){const e=wt(this.hass,t),i=$t(this.hass,t),o=function(t,e){var i;const o=_t(t,e);if(!o)return;const n=yt(t,e),a=null===(i=o.attributes)||void 0===i?void 0:i.device_class;if("%"!==n&&"battery"!==a)return;const r=wt(t,e);return void 0!==r?r<=20?"var(--error-color, #db4437)":r<=50?"var(--warning-color, #ff9800)":"var(--success-color, #4caf50)":void 0}(this.hass,t);return j`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style=${`width:${null!=e?e:0}%;${o?` background-color:${o};`:""}`}
          ></div>
        </div>
        <div class="bar-value">${i}</div>
      </div>
    `}_renderList(){var t;const e=null!==(t=this._config.title)&&void 0!==t?t:this._config.device_name;return j`
      <ha-card .header=${null!=e?e:L} class="sheet-anchor">
        <div class="card-content list-mode">
          ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._showMoreInfo(t))):j`<div class="empty">Add entities in the card settings.</div>`}
        </div>
        ${this._composeTarget?this._renderComposeSheet():L}
      </ha-card>
    `}_renderPhone(){var t,e,i,o,n;const a=this.hass,r=null!==(t=this._config.status_bar)&&void 0!==t?t:{},s=null!==(i=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==i?i:"Smartphone",l=function(t,e){var i;if(e)return null===(i=t.states[e])||void 0===i?void 0:i.state}(a,r.battery_entity),c=Number(l),d=!Number.isNaN(c)&&c<=20,h=St(a,r.charging_entity),u=Ct(a,r.wifi_entity),p=Ct(a,r.mobile_data_entity),v=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),f=t=>t?this._openSheet(t):void 0,g=!!(null===(o=this._config.quick_actions)||void 0===o?void 0:o.length),m=this._config.frame_color?`background:${this._config.frame_color};`:"",_=null!==(n=this._config.notch_color)&&void 0!==n?n:this._config.frame_color;return j`
      <ha-card>
        <div class="phone">
          <div class="phone-frame" style=${m}>
            <div class="phone-screen">
              <div
                class="notch ${g?"tappable":""}"
                style=${_?`background:${_};`:""}
                role=${g?"button":L}
                tabindex=${g?"0":L}
                @click=${()=>this._openQuickActions()}
                @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
              ></div>
              <div class="status-bar">
                <div class="status-left">
                  <span class="clock">${v}</span>
                </div>
                <div
                  class="status-center ${g?"tappable":""}"
                  role=${g?"button":L}
                  tabindex=${g?"0":L}
                  @click=${()=>this._openQuickActions()}
                  @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
                >
                  ${s}
                </div>
                <div class="status-right">
                  ${r.mobile_data_entity?j`<ha-icon
                        class="status-icon ${p?"on":"off"}"
                        icon=${function(t,e){var i,o;const n=e?t.states[e]:void 0,a=n?Number(n.state):NaN;if(n&&!Number.isNaN(a)){const t=null!==(o=null===(i=n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:"";return`mdi:signal-cellular-${Math.min(3,xt(a,t))}`}return"mdi:signal-cellular-3"}(a,r.mobile_data_entity)}
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.mobile_data_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.mobile_data_entity)}
                      ></ha-icon>`:L}
                  ${r.wifi_entity?j`<ha-icon
                        class="status-icon ${u?"on":"off"}"
                        icon=${function(t,e,i){var o,n;const a=e?t.states[e]:void 0,r=a?Number(a.state):NaN;if(a&&!Number.isNaN(r))return`mdi:wifi-strength-${xt(r,null!==(n=null===(o=a.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"")}`;return i?"mdi:wifi":"mdi:wifi-off"}(a,r.wifi_entity,u)}
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.wifi_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.wifi_entity)}
                      ></ha-icon>`:L}
                  ${r.battery_entity?j`<span
                        class="battery-pill ${h?"charging":""} ${d&&!h?"low":""}"
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.battery_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.battery_entity)}
                      >
                        ${h?j`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`:L}
                        <ha-icon class="status-icon" icon=${this._batteryIcon(l,h)}></ha-icon>
                        <span>${null!=l?l:"—"}%</span>
                      </span>`:L}
                </div>
              </div>
              <div class="screen-content">
                ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._openSheet(t))):j`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
              ${this._sheetEntityId?this._renderSheet(this._sheetEntityId):L}
              ${this._quickActionsOpen?this._renderQuickActionsSheet():L}
              ${this._composeTarget?this._renderComposeSheet():L}
              ${this._appPickerTarget?this._renderAppPickerSheet():L}
            </div>
          </div>
        </div>
      </ha-card>
    `}_renderQuickActionsSheet(){var t;const e=null!==(t=this._config.quick_actions)&&void 0!==t?t:[];return j`
      <div class="sheet-backdrop" @click=${()=>this._closeQuickActions()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">Quick actions</div>
          <div class="quick-actions-list">
            ${e.map((t,e)=>{var i,o,n,a,r;const s="toggle"===t.type,l=s&&this._isQuickActionOn(t,e);return j`
                <button class="quick-action-row" @click=${()=>this._runQuickAction(t,e)}>
                  <ha-icon icon=${null!==(i=t.icon)&&void 0!==i?i:"mdi:flash"}></ha-icon>
                  <span>${null!==(r=null!==(a=null!==(n=null!==(o=t.name)&&void 0!==o?o:t.package_name)&&void 0!==n?n:t.service)&&void 0!==a?a:t.entity_id)&&void 0!==r?r:"Quick action"}</span>
                  ${s?j`<ha-switch .checked=${l} tabindex="-1"></ha-switch>`:L}
                </button>
              `})}
          </div>
        </div>
      </div>
    `}_renderComposeSheet(){var t;const e=this._composeTarget;if(!e)return j``;const i=this._isNotifyEntity(e.service);return j`
      <div class="sheet-backdrop" @click=${()=>this._closeCompose()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${null!==(t=e.name)&&void 0!==t?t:"Send message"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${Xi}
              label="Title (optional)"
              .value=${this._composeTitle}
              @value-changed=${t=>{t.stopPropagation(),this._composeTitle=t.detail.value}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Yi}
              label="Message"
              .value=${this._composeMessage}
              @value-changed=${t=>{t.stopPropagation(),this._composeMessage=t.detail.value}}
            ></ha-selector>
            ${i?L:j`
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Fi}
                    label="Priority"
                    .value=${this._composePriority}
                    @value-changed=${t=>{t.stopPropagation(),this._composePriority=t.detail.value}}
                  ></ha-selector>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Xi}
                    label="Channel (optional)"
                    .value=${this._composeChannel}
                    @value-changed=${t=>{t.stopPropagation(),this._composeChannel=t.detail.value}}
                  ></ha-selector>
                `}
          </div>
          <div class="sheet-actions">
            <button class="sheet-btn" @click=${()=>this._closeCompose()}>Cancel</button>
            <button
              class="sheet-btn primary"
              ?disabled=${!this._composeMessage.trim()}
              @click=${()=>this._submitCompose()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    `}_renderAppPickerSheet(){var t;const e=this._appPickerTarget;return e?j`
      <div class="sheet-backdrop" @click=${()=>this._closeAppPicker()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${null!==(t=e.name)&&void 0!==t?t:"Launch app"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${qi}
              label="App to launch"
              .value=${this._appPickerValue}
              @value-changed=${t=>{t.stopPropagation(),this._appPickerValue=t.detail.value}}
            ></ha-selector>
          </div>
          <div class="sheet-actions">
            <button class="sheet-btn" @click=${()=>this._closeAppPicker()}>Cancel</button>
            <button
              class="sheet-btn primary"
              ?disabled=${!this._appPickerValue.trim()}
              @click=${()=>this._submitAppPicker()}
            >
              Launch
            </button>
          </div>
        </div>
      </div>
    `:j``}_renderSheet(t){var e,i,o,n;const a=this.hass,r=a.states[t],s=At(pt(t)),l=bt(a,t),c=null!==(i=null===(e=null==r?void 0:r.attributes)||void 0===e?void 0:e.icon)&&void 0!==i?i:"mdi:help-circle-outline",d=null!==(n=null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"",h=r?`${r.state}${d?` ${d}`:""}`:"Unavailable";return j`
      <div class="sheet-backdrop" @click=${()=>this._closeSheet()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <ha-icon class="sheet-icon" .icon=${c}></ha-icon>
            <div>
              <div class="sheet-name">${l}</div>
              <div class="sheet-value">${h}</div>
            </div>
          </div>
          ${this._renderHistory(d)}
          <div class="sheet-actions">
            ${s?j`<button class="sheet-btn primary" @click=${()=>this._toggleSheetEntity()}>Toggle</button>`:L}
            <button
              class="sheet-btn"
              @click=${()=>{this._showMoreInfo(t),this._closeSheet()}}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    `}_renderHistory(t){const e=this._historyPoints;return void 0===e?j`<div class="sheet-history-loading">Loading 24h history…</div>`:e.length<2?L:function(t){if(!t.length)return!1;const e=t.filter(t=>""!==t.state&&!Number.isNaN(Number(t.state)));return e.length/t.length>.8}(e)?this._renderSparkline(e,t):this._renderHistoryList(e)}_renderSparkline(t,e){const i=t.map(t=>Number(t.state)).filter(t=>!Number.isNaN(t));if(i.length<2)return L;const o=Math.min(...i),n=Math.max(...i),a=(o+n)/2,r=n-o||1,s=230,l=44,c=s/(i.length-1),d=i.map((t,e)=>`${(e*c).toFixed(1)},${(l-(t-o)/r*l).toFixed(1)}`).join(" "),h=t=>`${Math.round(10*t)/10}${e?` ${e}`:""}`,u=this._formatHistoryTime(t[0].last_changed),p=this._formatHistoryTime(t[t.length-1].last_changed),v=this._formatHistoryTime(t[Math.floor(t.length/2)].last_changed);return j`
      <div class="sheet-history">
        <div class="sheet-chart">
          <div class="sheet-chart-yaxis">
            <span>${h(n)}</span>
            <span>${h(a)}</span>
            <span>${h(o)}</span>
          </div>
          <svg class="sheet-sparkline" viewBox="0 0 ${s} ${l}" preserveAspectRatio="none">
            <line class="sheet-chart-gridline" x1="0" y1="1" x2=${s} y2="1" vector-effect="non-scaling-stroke" />
            <line
              class="sheet-chart-gridline"
              x1="0"
              y1=${22}
              x2=${s}
              y2=${22}
              vector-effect="non-scaling-stroke"
            />
            <line
              class="sheet-chart-gridline"
              x1="0"
              y1=${43}
              x2=${s}
              y2=${43}
              vector-effect="non-scaling-stroke"
            />
            <polyline
              points=${d}
              fill="none"
              stroke="var(--primary-color)"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div class="sheet-history-time-axis">
          <span>${u}</span>
          <span>${v}</span>
          <span>${p}</span>
        </div>
      </div>
    `}_formatHistoryTime(t){return new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}_renderHistoryList(t){const e=t.slice(-5).reverse();return j`
      <div class="sheet-history-list">
        ${e.map(t=>j`
            <div class="sheet-history-row">
              <span>${t.state}</span>
              <span>${this._formatHistoryTime(t.last_changed)}</span>
            </div>
          `)}
      </div>
    `}_batteryIcon(t,e){const i=Number(t);if(Number.isNaN(i))return"mdi:battery-unknown";const o=10*Math.round(i/10),n=o<=0?"-outline":o>=100?"":`-${o}`;return e?`mdi:battery-charging${o>=100?"":n}`:`mdi:battery${n}`}static get styles(){return r`
      :host {
        display: block;
      }
      .card-content {
        padding: 8px 16px 16px;
      }
      .empty {
        padding: 16px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 10px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        cursor: pointer;
        border-radius: 8px;
      }
      .row:last-child {
        border-bottom: none;
      }
      .row:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .row:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: -2px;
      }
      .row.unavailable {
        opacity: 0.5;
      }
      .row-icon-wrap {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row-icon {
        color: var(--state-icon-color, var(--paper-item-icon-color, #44739e));
        flex-shrink: 0;
      }
      .row-main {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .row-name {
        color: var(--primary-text-color);
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-value {
        color: var(--secondary-text-color);
        font-size: 14px;
        flex-shrink: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
      }
      .bar-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        justify-content: flex-end;
      }
      .bar-track {
        flex: 1;
        max-width: 140px;
        height: 6px;
        border-radius: 3px;
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        border-radius: 3px;
        background: var(--primary-color);
        transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
      }
      .bar-value {
        color: var(--secondary-text-color);
        font-size: 13px;
        min-width: 36px;
        text-align: right;
        flex-shrink: 0;
      }

      /* Phone mode */
      .phone {
        display: flex;
        justify-content: center;
        padding: 20px 16px;
      }
      .phone-frame {
        width: 100%;
        max-width: 280px;
        padding: 12px 10px;
        border-radius: 44px;
        background: var(--secondary-background-color, #e2e2e2);
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.2));
      }
      .phone-screen {
        position: relative;
        aspect-ratio: 9 / 19.5;
        border-radius: 32px;
        background: var(--card-background-color, var(--ha-card-background));
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .notch {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 14px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.2));
        z-index: 2;
      }
      .notch.tappable,
      .status-center.tappable {
        cursor: pointer;
      }
      .status-bar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 28px 14px 10px;
        font-size: 11px;
        font-weight: 500;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
      }
      .status-left,
      .status-right {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
      }
      .status-right {
        justify-content: flex-end;
      }
      .status-center {
        flex: 2;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .status-icon {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
      }
      .status-icon.on {
        color: var(--primary-text-color);
      }
      .status-icon.off {
        color: var(--disabled-text-color);
      }
      .battery-pill {
        display: flex;
        align-items: center;
        gap: 2px;
        color: var(--primary-text-color);
      }
      .battery-pill.charging {
        color: var(--success-color, #4caf50);
      }
      .battery-pill.low {
        color: var(--error-color, #db4437);
      }
      .screen-content {
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto;
        padding: 0 14px;
      }
      .home-indicator {
        flex: 0 0 auto;
        margin: 8px auto 10px;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
      }

      /* In-phone entity sheet */
      .sheet-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.32);
        display: flex;
        align-items: flex-end;
        z-index: 10;
      }
      .sheet {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: var(--card-background-color, var(--ha-card-background));
        border-radius: 20px 20px 0 0;
        padding: 14px 16px 18px;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
      }
      .sheet-handle {
        width: 36px;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
        margin: 0 auto 14px;
      }
      .sheet-header {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .sheet-icon {
        color: var(--state-icon-color, var(--paper-item-icon-color, #44739e));
        --mdc-icon-size: 28px;
      }
      .sheet-name {
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 500;
      }
      .sheet-value {
        color: var(--secondary-text-color);
        font-size: 13px;
      }
      .sheet-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 14px;
      }
      .sheet-btn {
        border: none;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-color);
        font: inherit;
        font-weight: 500;
        font-size: 13px;
        padding: 8px 16px;
        border-radius: 10px;
        cursor: pointer;
      }
      .sheet-btn:hover {
        filter: brightness(0.96);
      }
      .sheet-btn.primary {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .sheet-btn:disabled {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--disabled-text-color, #9e9e9e);
        cursor: default;
      }
      .sheet-title {
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      .sheet-anchor {
        position: relative;
        overflow: hidden;
      }
      .compose-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 100%;
      }
      .compose-form ha-selector {
        display: block;
        max-width: 100%;
      }
      .quick-actions-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 50vh;
        overflow-y: auto;
      }
      .quick-action-row {
        display: flex;
        align-items: center;
        gap: 14px;
        width: 100%;
        background: none;
        border: none;
        border-radius: 10px;
        padding: 10px 6px;
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
        text-align: left;
        cursor: pointer;
      }
      .quick-action-row:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .quick-action-row ha-icon {
        color: var(--primary-color);
      }
      .quick-action-row span {
        flex: 1;
        min-width: 0;
      }
      .quick-action-row ha-switch {
        pointer-events: none;
      }
      .sheet-history {
        margin-top: 12px;
      }
      .sheet-chart {
        display: flex;
        align-items: stretch;
        gap: 6px;
      }
      .sheet-chart-yaxis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 10px;
        text-align: right;
        white-space: nowrap;
      }
      .sheet-sparkline {
        flex: 1;
        min-width: 0;
        height: 44px;
        display: block;
      }
      .sheet-chart-gridline {
        stroke: var(--divider-color, rgba(0, 0, 0, 0.12));
        stroke-width: 1;
      }
      .sheet-history-time-axis {
        display: flex;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 10px;
        margin-top: 4px;
        padding-left: 34px;
      }
      .sheet-history-list {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .sheet-history-row {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .sheet-history-loading {
        margin-top: 12px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `}};t([lt({attribute:!1})],Wi.prototype,"hass",void 0),t([ct()],Wi.prototype,"_config",void 0),t([ct()],Wi.prototype,"_sheetEntityId",void 0),t([ct()],Wi.prototype,"_quickActionsOpen",void 0),t([ct()],Wi.prototype,"_localToggleStates",void 0),t([ct()],Wi.prototype,"_historyPoints",void 0),t([ct()],Wi.prototype,"_composeTarget",void 0),t([ct()],Wi.prototype,"_composeTitle",void 0),t([ct()],Wi.prototype,"_composeMessage",void 0),t([ct()],Wi.prototype,"_composePriority",void 0),t([ct()],Wi.prototype,"_composeChannel",void 0),t([ct()],Wi.prototype,"_appPickerTarget",void 0),t([ct()],Wi.prototype,"_appPickerValue",void 0),Wi=t([rt(gt)],Wi),window.customCards=window.customCards||[],window.customCards.push({type:gt,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{Wi as HaSmartphoneCard};
