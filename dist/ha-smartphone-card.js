function t(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):o.forEach(i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,S=`<${E}>`,A=document,C=()=>A.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,P="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,M=/>/g,k=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),L=new WeakMap,X=A.createTreeWalker(A,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const z=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===N?"!--"===l[1]?a=O:void 0!==l[1]?a=M:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=k):void 0!==l[3]&&(a=k):a===k?">"===l[0]?(a=null!=n?n:N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?k:'"'===l[3]?I:R):a===I||a===R?a=k:a===O||a===M?a=N:(a=k,n=void 0);const h=a===k&&t[e+1].startsWith("/>")?" ":"";r+=a===N?i+S:c>=0?(o.push(s),i.slice(0,c)+$+i.slice(c)+x+h):i+x+(-2===c?(o.push(void 0),e):h)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class F{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=z(t,e);if(this.el=F.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=X.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith($)||e.startsWith(x)){const i=c[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+$).split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Q:G})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],C()),X.nextNode(),s.push({type:2,index:++n});o.append(t[e],C())}}}else if(8===o.nodeType)if(o.data===E)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,o){var n,r,a,s;if(e===B)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,o)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);X.currentNode=n;let r=X.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=X.nextNode(),a++)}return X.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,o){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),D(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=F.createElement(Y(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new V(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new F(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new q(this.k(C()),this.k(C()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,o,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=W(this,o[i+a],e,a),s===B&&(s=this._$AH[a]),r||(r=!D(s)||s!==this._$AH[a]),s===j?t=j:t!==j&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Z=y?y.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:j)===B)return;const o=this._$AH,n=t===j&&o!==j||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==j&&(o===j||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=_.litHtmlPolyfillSupport;null==et||et(F,q),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,ot;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new q(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
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
var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;const ht="ha-smartphone-card",ut="ha-smartphone-card-editor";function pt(t,e){return t.states[e.entity]}function vt(t,e){const i=pt(t,e);if(!i)return"—";const o=function(t,e){var i,o;if(void 0!==e.unit)return e.unit;const n=pt(t,e);return null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:""}(t,e);return o?`${i.state} ${o}`:i.state}function ft(t,e){if(!e)return!1;const i=t.states[e];return!!i&&("on"===i.state||"home"===i.state||"connected"===i.state)}var gt,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function bt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _t(){return _t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},_t.apply(null,arguments)}function yt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function wt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(i),!0).forEach(function(e){bt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):yt(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function $t(t){return $t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(t)}function xt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Et=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),St=xt(/Edge/i),At=xt(/firefox/i),Ct=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Dt=xt(/iP(ad|od|hone)/i),Tt=xt(/chrome/i)&&xt(/android/i),Pt={capture:!1,passive:!1};function Nt(t,e,i){t.addEventListener(e,i,!Et&&Pt)}function Ot(t,e,i){t.removeEventListener(e,i,!Et&&Pt)}function Mt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function kt(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Rt(t,e,i,o){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Mt(t,e):Mt(t,e))||o&&t===i)return t;if(t===i)break}while(t=kt(t))}return null}var It,Ht=/\s+/g;function Ut(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(Ht," ").replace(" "+e+" "," ");t.className=(o+(i?" "+e:"")).replace(Ht," ")}}function Bt(t,e,i){var o=t&&t.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=i+("string"==typeof i?"":"px")}}function jt(t,e){var i="";if("string"==typeof t)i=t;else do{var o=Bt(t,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function Lt(t,e,i){if(t){var o=t.getElementsByTagName(e),n=0,r=o.length;if(i)for(;n<r;n++)i(o[n],n);return o}return[]}function Xt(){var t=document.scrollingElement;return t||document.documentElement}function Yt(t,e,i,o,n){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Xt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(n=n||t.parentNode,!Et))do{if(n&&n.getBoundingClientRect&&("none"!==Bt(n,"transform")||i&&"static"!==Bt(n,"position"))){var u=n.getBoundingClientRect();a-=u.top+parseInt(Bt(n,"border-top-width")),s-=u.left+parseInt(Bt(n,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(n=n.parentNode);if(o&&t!==window){var p=jt(n||t),v=p&&p.a,f=p&&p.d;p&&(l=(a/=f)+(d/=f),c=(s/=v)+(h/=v))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function zt(t,e,i){for(var o=Gt(t,!0),n=Yt(t)[e];o;){if(!(n>=Yt(o)[i]))return o;if(o===Xt())break;o=Gt(o,!1)}return!1}function Ft(t,e,i,o){for(var n=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Qe.ghost&&(o||a[r]!==Qe.dragged)&&Rt(a[r],i.draggable,t,!1)){if(n===e)return a[r];n++}r++}return null}function Wt(t,e){for(var i=t.lastElementChild;i&&(i===Qe.ghost||"none"===Bt(i,"display")||e&&!Mt(i,e));)i=i.previousElementSibling;return i||null}function Vt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Qe.clone||e&&!Mt(t,e)||i++;return i}function qt(t){var e=0,i=0,o=Xt();if(t)do{var n=jt(t),r=n.a,a=n.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,i]}function Gt(t,e){if(!t||!t.getBoundingClientRect)return Xt();var i=t,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=Bt(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Xt();if(o||e)return i;o=!0}}}while(i=i.parentNode);return Xt()}function Kt(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Zt(t,e){return function(){if(!It){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),It=setTimeout(function(){It=void 0},e)}}}function Jt(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Qt(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function te(t,e,i){var o={};return Array.from(t.children).forEach(function(n){var r,a,s,l;if(Rt(n,e.draggable,t,!1)&&!n.animated&&n!==i){var c=Yt(n);o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var ee="Sortable"+(new Date).getTime();function ie(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==Bt(t,"display")&&t!==Qe.ghost){e.push({target:t,rect:Yt(t)});var i=wt({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=jt(t,!0);o&&(i.top-=o.f,i.left-=o.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[i][o])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var n=!1,r=0;e.forEach(function(t){var e=0,i=t.target,a=i.fromRect,s=Yt(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=jt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&Kt(l,s)&&!Kt(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*o.animation}(d,l,c,o.options)),Kt(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=o.options.animation),o.animate(i,d,s,e)),e&&(n=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),n?t=setTimeout(function(){"function"==typeof i&&i()},r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,o){if(o){Bt(t,"transition",""),Bt(t,"transform","");var n=jt(this.el),r=n&&n.a,a=n&&n.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Bt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Bt(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Bt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){Bt(t,"transition",""),Bt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var oe=[],ne={initializeByDefault:!0},re={mount:function(t){for(var e in ne)ne.hasOwnProperty(e)&&!(e in t)&&(t[e]=ne[e]);oe.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),oe.push(t)},pluginEvent:function(t,e,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var n=t+"Global";oe.forEach(function(o){e[o.pluginName]&&(e[o.pluginName][n]&&e[o.pluginName][n](wt({sortable:e},i)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](wt({sortable:e},i)))})},initializePlugins:function(t,e,i,o){for(var n in oe.forEach(function(o){var n=o.pluginName;if(t.options[n]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[n]=r,_t(i,r.defaults)}}),t.options)if(t.options.hasOwnProperty(n)){var r=this.modifyOption(t,n,t.options[n]);void 0!==r&&(t.options[n]=r)}},getEventProperties:function(t,e){var i={};return oe.forEach(function(o){"function"==typeof o.eventProperties&&_t(i,o.eventProperties.call(e[o.pluginName],t))}),i},modifyOption:function(t,e,i){var o;return oe.forEach(function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(o=n.optionListeners[e].call(t[n.pluginName],i))}),o}};var ae=["evt"],se=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,n=function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue;i[o]=t[o]}return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],-1===e.indexOf(i)&&{}.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(i,ae);re.pluginEvent.bind(Qe)(t,e,wt({dragEl:ce,parentEl:de,ghostEl:he,rootEl:ue,nextEl:pe,lastDownEl:ve,cloneEl:fe,cloneHidden:ge,dragStarted:Te,putSortable:$e,activeSortable:Qe.active,originalEvent:o,oldIndex:me,oldDraggableIndex:_e,newIndex:be,newDraggableIndex:ye,hideGhostForTarget:Ge,unhideGhostForTarget:Ke,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(t){le({sortable:e,name:t,originalEvent:o})}},n))};function le(t){!function(t){var e=t.sortable,i=t.rootEl,o=t.name,n=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||i&&i[ee]){var f,g=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Et||St?(f=document.createEvent("Event")).initEvent(o,!0,!0):f=new CustomEvent(o,{bubbles:!0,cancelable:!0}),f.to=a||i,f.from=s||i,f.item=n||i,f.clone=r,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var b=wt(wt({},v),re.getEventProperties(o,e));for(var _ in b)f[_]=b[_];i&&i.dispatchEvent(f),g[m]&&g[m].call(e,f)}}(wt({putSortable:$e,cloneEl:fe,targetEl:ce,rootEl:ue,oldIndex:me,oldDraggableIndex:_e,newIndex:be,newDraggableIndex:ye},t))}var ce,de,he,ue,pe,ve,fe,ge,me,be,_e,ye,we,$e,xe,Ee,Se,Ae,Ce,De,Te,Pe,Ne,Oe,Me,ke=!1,Re=!1,Ie=[],He=!1,Ue=!1,Be=[],je=!1,Le=[],Xe="undefined"!=typeof document,Ye=Dt,ze=St||Et?"cssFloat":"float",Fe=Xe&&!Tt&&!Dt&&"draggable"in document.createElement("div"),We=function(){if(Xe){if(Et)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ve=function(t,e){var i=Bt(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=Ft(t,0,e),r=Ft(t,1,e),a=n&&Bt(n),s=r&&Bt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Yt(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Yt(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=o&&"none"===i[ze]||r&&"none"===i[ze]&&l+c>o)?"vertical":"horizontal"},qe=function(t){function e(t,i){return function(o,n,r,a){var s=o.options.group.name&&n.options.group.name&&o.options.group.name===n.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(o,n,r,a),i)(o,n,r,a);var l=(i?o:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},o=t.group;o&&"object"==$t(o)||(o={name:o}),i.name=o.name,i.checkPull=e(o.pull,!0),i.checkPut=e(o.put),i.revertClone=o.revertClone,t.group=i},Ge=function(){!We&&he&&Bt(he,"display","none")},Ke=function(){!We&&he&&Bt(he,"display","")};Xe&&!Tt&&document.addEventListener("click",function(t){if(Re)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Re=!1,!1},!0);var Ze=function(t){if(ce){var e=function(t,e){var i;return Ie.some(function(o){var n=o[ee].options.emptyInsertThreshold;if(n&&!Wt(o)){var r=Yt(o),a=t>=r.left-n&&t<=r.right+n,s=e>=r.top-n&&e<=r.bottom+n;return a&&s?i=o:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[ee]._onDragOver(i)}}},Je=function(t){ce&&ce.parentNode[ee]._isOutsideThisEl(t.target)};function Qe(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=_t({},e),t[ee]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ve(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Qe.supportPointer&&"PointerEvent"in window&&(!Ct||Dt),emptyInsertThreshold:5};for(var o in re.initializePlugins(this,t,i),i)!(o in e)&&(e[o]=i[o]);for(var n in qe(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&Fe,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Nt(t,"pointerdown",this._onTapStart):(Nt(t,"mousedown",this._onTapStart),Nt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Nt(t,"dragover",this),Nt(t,"dragenter",this)),Ie.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),_t(this,ie())}function ti(t,e,i,o,n,r,a,s){var l,c,d=t[ee],h=d.options.onMove;return!window.CustomEvent||Et||St?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=o,l.related=n||e,l.relatedRect=r||Yt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function ei(t){t.draggable=!1}function ii(){je=!1}function oi(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,o=0;i--;)o+=e.charCodeAt(i);return o.toString(36)}function ni(t){return setTimeout(t,0)}function ri(t){return clearTimeout(t)}Qe.prototype={constructor:Qe,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Pe=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ce):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,o=this.options,n=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter;if(function(t){Le.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var o=e[i];o.checked&&Le.push(o)}}(i),!ce&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ct||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Rt(s,o.draggable,i,!1))&&s.animated||ve===s)){if(me=Vt(s),_e=Vt(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return le({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),se("filter",e,{evt:t}),void(n&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=Rt(l,o.trim(),i,!1))return le({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),se("filter",e,{evt:t}),!0})))return void(n&&t.preventDefault());o.handle&&!Rt(l,o.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var o,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(i&&!ce&&i.parentNode===r){var l=Yt(i);if(ue=r,de=(ce=i).parentNode,pe=ce.nextSibling,ve=i,we=a.group,Qe.dragged=ce,xe={target:ce,clientX:(e||t).clientX,clientY:(e||t).clientY},Ce=xe.clientX-l.left,De=xe.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ce.style["will-change"]="all",o=function(){se("delayEnded",n,{evt:t}),Qe.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!At&&n.nativeDraggable&&(ce.draggable=!0),n._triggerDragStart(t,e),le({sortable:n,name:"choose",originalEvent:t}),Ut(ce,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){Lt(ce,t.trim(),ei)}),Nt(s,"dragover",Ze),Nt(s,"mousemove",Ze),Nt(s,"touchmove",Ze),a.supportPointer?(Nt(s,"pointerup",n._onDrop),!this.nativeDraggable&&Nt(s,"pointercancel",n._onDrop)):(Nt(s,"mouseup",n._onDrop),Nt(s,"touchend",n._onDrop),Nt(s,"touchcancel",n._onDrop)),At&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ce.draggable=!0),se("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(St||Et))o();else{if(Qe.eventCanceled)return void this._onDrop();a.supportPointer?(Nt(s,"pointerup",n._disableDelayedDrag),Nt(s,"pointercancel",n._disableDelayedDrag)):(Nt(s,"mouseup",n._disableDelayedDrag),Nt(s,"touchend",n._disableDelayedDrag),Nt(s,"touchcancel",n._disableDelayedDrag)),Nt(s,"mousemove",n._delayedDragTouchMoveHandler),Nt(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&Nt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ce&&ei(ce),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ot(t,"mouseup",this._disableDelayedDrag),Ot(t,"touchend",this._disableDelayedDrag),Ot(t,"touchcancel",this._disableDelayedDrag),Ot(t,"pointerup",this._disableDelayedDrag),Ot(t,"pointercancel",this._disableDelayedDrag),Ot(t,"mousemove",this._delayedDragTouchMoveHandler),Ot(t,"touchmove",this._delayedDragTouchMoveHandler),Ot(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Nt(document,"pointermove",this._onTouchMove):Nt(document,e?"touchmove":"mousemove",this._onTouchMove):(Nt(ce,"dragend",this),Nt(ue,"dragstart",this._onDragStart));try{document.selection?ni(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(ke=!1,ue&&ce){se("dragStarted",this,{evt:e}),this.nativeDraggable&&Nt(document,"dragover",Je);var i=this.options;!t&&Ut(ce,i.dragClass,!1),Ut(ce,i.ghostClass,!0),Qe.active=this,t&&this._appendGhost(),le({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Ee){this._lastX=Ee.clientX,this._lastY=Ee.clientY,Ge();for(var t=document.elementFromPoint(Ee.clientX,Ee.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Ee.clientX,Ee.clientY))!==e;)e=t;if(ce.parentNode[ee]._isOutsideThisEl(t),e)do{if(e[ee]){if(e[ee]._onDragOver({clientX:Ee.clientX,clientY:Ee.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=kt(e));Ke()}},_onTouchMove:function(t){if(xe){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,n=t.touches?t.touches[0]:t,r=he&&jt(he,!0),a=he&&r&&r.a,s=he&&r&&r.d,l=Ye&&Me&&qt(Me),c=(n.clientX-xe.clientX+o.x)/(a||1)+(l?l[0]-Be[0]:0)/(a||1),d=(n.clientY-xe.clientY+o.y)/(s||1)+(l?l[1]-Be[1]:0)/(s||1);if(!Qe.active&&!ke){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(he){r?(r.e+=c-(Se||0),r.f+=d-(Ae||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Bt(he,"webkitTransform",h),Bt(he,"mozTransform",h),Bt(he,"msTransform",h),Bt(he,"transform",h),Se=c,Ae=d,Ee=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!he){var t=this.options.fallbackOnBody?document.body:ue,e=Yt(ce,!0,Ye,!0,t),i=this.options;if(Ye){for(Me=t;"static"===Bt(Me,"position")&&"none"===Bt(Me,"transform")&&Me!==document;)Me=Me.parentNode;Me!==document.body&&Me!==document.documentElement?(Me===document&&(Me=Xt()),e.top+=Me.scrollTop,e.left+=Me.scrollLeft):Me=Xt(),Be=qt(Me)}Ut(he=ce.cloneNode(!0),i.ghostClass,!1),Ut(he,i.fallbackClass,!0),Ut(he,i.dragClass,!0),Bt(he,"transition",""),Bt(he,"transform",""),Bt(he,"box-sizing","border-box"),Bt(he,"margin",0),Bt(he,"top",e.top),Bt(he,"left",e.left),Bt(he,"width",e.width),Bt(he,"height",e.height),Bt(he,"opacity","0.8"),Bt(he,"position",Ye?"absolute":"fixed"),Bt(he,"zIndex","100000"),Bt(he,"pointerEvents","none"),Qe.ghost=he,t.appendChild(he),Bt(he,"transform-origin",Ce/parseInt(he.style.width)*100+"% "+De/parseInt(he.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,o=t.dataTransfer,n=i.options;se("dragStart",this,{evt:t}),Qe.eventCanceled?this._onDrop():(se("setupClone",this),Qe.eventCanceled||((fe=Qt(ce)).removeAttribute("id"),fe.draggable=!1,fe.style["will-change"]="",this._hideClone(),Ut(fe,this.options.chosenClass,!1),Qe.clone=fe),i.cloneId=ni(function(){se("clone",i),Qe.eventCanceled||(i.options.removeCloneOnHide||ue.insertBefore(fe,ce),i._hideClone(),le({sortable:i,name:"clone"}))}),!e&&Ut(ce,n.dragClass,!0),e?(Re=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ot(document,"mouseup",i._onDrop),Ot(document,"touchend",i._onDrop),Ot(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",n.setData&&n.setData.call(i,o,ce)),Nt(document,"drop",i),Bt(ce,"transform","translateZ(0)")),ke=!0,i._dragStartId=ni(i._dragStarted.bind(i,e,t)),Nt(document,"selectstart",i),Te=!0,window.getSelection().removeAllRanges(),Ct&&Bt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,o,n,r=this.el,a=t.target,s=this.options,l=s.group,c=Qe.active,d=we===l,h=s.sort,u=$e||c,p=this,v=!1;if(!je){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Rt(a,s.draggable,r,!0),T("dragOver"),Qe.eventCanceled)return v;if(ce.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return N(!1);if(Re=!1,c&&!s.disabled&&(d?h||(o=de!==ue):$e===this||(this.lastPutMode=we.checkPull(this,c,ce,t))&&l.checkPut(this,c,ce,t))){if(n="vertical"===this._getDirection(t,a),e=Yt(ce),T("dragOverValid"),Qe.eventCanceled)return v;if(o)return de=ue,P(),this._hideClone(),T("revert"),Qe.eventCanceled||(pe?ue.insertBefore(ce,pe):ue.appendChild(ce)),N(!0);var f=Wt(r,s.draggable);if(!f||function(t,e,i){var o=Yt(Wt(i.el,i.options.draggable)),n=te(i.el,i.options,he),r=10;return e?t.clientX>n.right+r||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+r||t.clientX>o.right&&t.clientY>o.top}(t,n,this)&&!f.animated){if(f===ce)return N(!1);if(f&&r===t.target&&(a=f),a&&(i=Yt(a)),!1!==ti(ue,r,ce,e,a,i,t,!!a))return P(),f&&f.nextSibling?r.insertBefore(ce,f.nextSibling):r.appendChild(ce),de=r,O(),N(!0)}else if(f&&function(t,e,i){var o=Yt(Ft(i.el,0,i.options,!0)),n=te(i.el,i.options,he),r=10;return e?t.clientX<n.left-r||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-r||t.clientY<o.bottom&&t.clientX<o.left}(t,n,this)){var g=Ft(r,0,s,!0);if(g===ce)return N(!1);if(i=Yt(a=g),!1!==ti(ue,r,ce,e,a,i,t,!1))return P(),r.insertBefore(ce,g),de=r,O(),N(!0)}else if(a.parentNode===r){i=Yt(a);var m,b,_,y=ce.parentNode!==r,w=!function(t,e,i){var o=i?t.left:t.top,n=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return o===a||n===s||o+r/2===a+l/2}(ce.animated&&ce.toRect||e,a.animated&&a.toRect||i,n),$=n?"top":"left",x=zt(a,"top","top")||zt(ce,"top","top"),E=x?x.scrollTop:void 0;if(Pe!==a&&(b=i[$],He=!1,Ue=!w&&s.invertSwap||y),m=function(t,e,i,o,n,r,a,s){var l=o?t.clientY:t.clientX,c=o?i.height:i.width,d=o?i.top:i.left,h=o?i.bottom:i.right,u=!1;if(!a)if(s&&Oe<c*n){if(!He&&(1===Ne?l>d+c*r/2:l<h-c*r/2)&&(He=!0),He)u=!0;else if(1===Ne?l<d+Oe:l>h-Oe)return-Ne}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return Vt(ce)<Vt(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ue,Pe===a),0!==m){var S=Vt(ce);do{S-=m,_=de.children[S]}while(_&&("none"===Bt(_,"display")||_===he))}if(0===m||_===a)return N(!1);Pe=a,Ne=m;var A=a.nextElementSibling,C=!1,D=ti(ue,r,ce,e,a,i,t,C=1===m);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),je=!0,setTimeout(ii,30),P(),C&&!A?r.appendChild(ce):a.parentNode.insertBefore(ce,C?A:a),x&&Jt(x,0,E-x.scrollTop),de=ce.parentNode,void 0===b||Ue||(Oe=Math.abs(b-Yt(a)[$])),O(),N(!0)}if(r.contains(ce))return N(!1)}return!1}function T(s,l){se(s,p,wt({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:o,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:N,onMove:function(i,o){return ti(ue,r,ce,e,i,Yt(i),t,o)},changed:O},l))}function P(){T("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function N(e){return T("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Ut(ce,$e?$e.options.ghostClass:c.options.ghostClass,!1),Ut(ce,s.ghostClass,!0)),$e!==p&&p!==Qe.active?$e=p:p===Qe.active&&$e&&($e=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){T("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ce&&!ce.animated||a===r&&!a.animated)&&(Pe=null),s.dragoverBubble||t.rootEl||a===document||(ce.parentNode[ee]._isOutsideThisEl(t.target),!e&&Ze(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function O(){be=Vt(ce),ye=Vt(ce,s.draggable),le({sortable:p,name:"change",toEl:r,newIndex:be,newDraggableIndex:ye,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ot(document,"mousemove",this._onTouchMove),Ot(document,"touchmove",this._onTouchMove),Ot(document,"pointermove",this._onTouchMove),Ot(document,"dragover",Ze),Ot(document,"mousemove",Ze),Ot(document,"touchmove",Ze)},_offUpEvents:function(){var t=this.el.ownerDocument;Ot(t,"mouseup",this._onDrop),Ot(t,"touchend",this._onDrop),Ot(t,"pointerup",this._onDrop),Ot(t,"pointercancel",this._onDrop),Ot(t,"touchcancel",this._onDrop),Ot(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;be=Vt(ce),ye=Vt(ce,i.draggable),se("drop",this,{evt:t}),de=ce&&ce.parentNode,be=Vt(ce),ye=Vt(ce,i.draggable),Qe.eventCanceled||(ke=!1,Ue=!1,He=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ri(this.cloneId),ri(this._dragStartId),this.nativeDraggable&&(Ot(document,"drop",this),Ot(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ct&&Bt(document.body,"user-select",""),Bt(ce,"transform",""),t&&(Te&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),he&&he.parentNode&&he.parentNode.removeChild(he),(ue===de||$e&&"clone"!==$e.lastPutMode)&&fe&&fe.parentNode&&fe.parentNode.removeChild(fe),ce&&(this.nativeDraggable&&Ot(ce,"dragend",this),ei(ce),ce.style["will-change"]="",Te&&!ke&&Ut(ce,$e?$e.options.ghostClass:this.options.ghostClass,!1),Ut(ce,this.options.chosenClass,!1),le({sortable:this,name:"unchoose",toEl:de,newIndex:null,newDraggableIndex:null,originalEvent:t}),ue!==de?(be>=0&&(le({rootEl:de,name:"add",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"remove",toEl:de,originalEvent:t}),le({rootEl:de,name:"sort",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),$e&&$e.save()):be!==me&&be>=0&&(le({sortable:this,name:"update",toEl:de,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),Qe.active&&(null!=be&&-1!==be||(be=me,ye=_e),le({sortable:this,name:"end",toEl:de,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){se("nulling",this),ue=ce=de=he=pe=fe=ve=ge=xe=Ee=Te=be=ye=me=_e=Pe=Ne=$e=we=Qe.dragged=Qe.ghost=Qe.clone=Qe.active=null;var t=this.el;Le.forEach(function(e){t.contains(e)&&(e.checked=!0)}),Le.length=Se=Ae=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ce&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,n=i.length,r=this.options;o<n;o++)Rt(t=i[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||oi(t));return e},sort:function(t,e){var i={},o=this.el;this.toArray().forEach(function(t,e){var n=o.children[e];Rt(n,this.options.draggable,o,!1)&&(i[t]=n)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(o.removeChild(i[t]),o.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Rt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var o=re.modifyOption(this,t,e);i[t]=void 0!==o?o:e,"group"===t&&qe(i)},destroy:function(){se("destroy",this);var t=this.el;t[ee]=null,Ot(t,"mousedown",this._onTapStart),Ot(t,"touchstart",this._onTapStart),Ot(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ot(t,"dragover",this),Ot(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ie.splice(Ie.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!ge){if(se("hideClone",this),Qe.eventCanceled)return;Bt(fe,"display","none"),this.options.removeCloneOnHide&&fe.parentNode&&fe.parentNode.removeChild(fe),ge=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(ge){if(se("showClone",this),Qe.eventCanceled)return;ce.parentNode!=ue||this.options.group.revertClone?pe?ue.insertBefore(fe,pe):ue.appendChild(fe):ue.insertBefore(fe,ce),this.options.group.revertClone&&this.animate(ce,fe),Bt(fe,"display",""),ge=!1}}else this._hideClone()}},Xe&&Nt(document,"touchmove",function(t){(Qe.active||ke)&&t.cancelable&&t.preventDefault()}),Qe.utils={on:Nt,off:Ot,css:Bt,find:Lt,is:function(t,e){return!!Rt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:Zt,closest:Rt,toggleClass:Ut,clone:Qt,index:Vt,nextTick:ni,cancelNextTick:ri,detectDirection:Ve,getChild:Ft,expando:ee},Qe.get=function(t){return t[ee]},Qe.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Qe.utils=wt(wt({},Qe.utils),t.utils)),re.mount(t)})},Qe.create=function(t,e){return new Qe(t,e)},Qe.version="1.15.7";var ai,si,li,ci,di,hi,ui=[],pi=!1;function vi(){ui.forEach(function(t){clearInterval(t.pid)}),ui=[]}function fi(){clearInterval(hi)}var gi=Zt(function(t,e,i,o){if(e.scroll){var n,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Xt(),d=!1;si!==i&&(si=i,vi(),ai=e.scroll,n=e.scrollFn,!0===ai&&(ai=Gt(i,!0)));var h=0,u=ai;do{var p=u,v=Yt(p),f=v.top,g=v.bottom,m=v.left,b=v.right,_=v.width,y=v.height,w=void 0,$=void 0,x=p.scrollWidth,E=p.scrollHeight,S=Bt(p),A=p.scrollLeft,C=p.scrollTop;p===c?(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY));var D=w&&(Math.abs(b-r)<=s&&A+_<x)-(Math.abs(m-r)<=s&&!!A),T=$&&(Math.abs(g-a)<=s&&C+y<E)-(Math.abs(f-a)<=s&&!!C);if(!ui[h])for(var P=0;P<=h;P++)ui[P]||(ui[P]={});ui[h].vx==D&&ui[h].vy==T&&ui[h].el===p||(ui[h].el=p,ui[h].vx=D,ui[h].vy=T,clearInterval(ui[h].pid),0==D&&0==T||(d=!0,ui[h].pid=setInterval(function(){o&&0===this.layer&&Qe.active._onTouchMove(di);var e=ui[this.layer].vy?ui[this.layer].vy*l:0,i=ui[this.layer].vx?ui[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(Qe.dragged.parentNode[ee],i,e,t,di,ui[this.layer].el)||Jt(ui[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=Gt(u,!1)));pi=d}},30),mi=function(t){var e=t.originalEvent,i=t.putSortable,o=t.dragEl,n=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||n;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function bi(){}function _i(){}bi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=Ft(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:mi},_t(bi,{pluginName:"revertOnSpill"}),_i.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:mi},_t(_i,{pluginName:"removeOnSpill"}),Qe.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Nt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Nt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Nt(document,"touchmove",this._handleFallbackAutoScroll):Nt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Ot(document,"dragover",this._handleAutoScroll):(Ot(document,"pointermove",this._handleFallbackAutoScroll),Ot(document,"touchmove",this._handleFallbackAutoScroll),Ot(document,"mousemove",this._handleFallbackAutoScroll)),fi(),vi(),clearTimeout(It),It=void 0},nulling:function(){di=si=ai=pi=hi=li=ci=null,ui.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,o=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,n);if(di=t,e||this.options.forceAutoScrollFallback||St||Et||Ct){gi(t,this.options,r,e);var a=Gt(r,!0);!pi||hi&&o===li&&n===ci||(hi&&fi(),hi=setInterval(function(){var r=Gt(document.elementFromPoint(o,n),!0);r!==a&&(a=r,vi()),gi(t,i.options,r,e)},10),li=o,ci=n)}else{if(!this.options.bubbleScroll||Gt(r,!0)===Xt())return void vi();gi(t,this.options,Gt(r,!1),!1)}}},_t(t,{pluginName:"scroll",initializeByDefault:!0})}),Qe.mount(_i,bi);const yi={select:{mode:"dropdown",options:[{value:"list",label:"List"},{value:"phone",label:"Phone"}]}},wi={select:{mode:"dropdown",options:[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"}]}},$i={entity:{}},xi={icon:{}},Ei={text:{}},Si={number:{mode:"box"}},Ai={device:{}};let Ci=class extends nt{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=Qe.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[i]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,i),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const i=this._config.rows.map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({rows:i})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,i)=>i!==t);this._updateConfig({rows:e})}_addRowsFromDevice(){var t;const e=this._deviceToAdd;if(!e)return;const i=null!==(t=this.hass.entities)&&void 0!==t?t:{},o=new Set(this._config.rows.map(t=>t.entity)),n=Object.values(i).filter(t=>t.device_id===e&&!t.hidden&&!t.disabled_by&&!o.has(t.entity_id)).map(t=>({entity:t.entity_id}));n.length&&this._updateConfig({rows:[...this._config.rows,...n]}),this._deviceToAdd=void 0}render(){var t,e,i,o,n,r,a,s,l;if(!this.hass||!this._config)return U``;const c=null!==(t=this._config.mode)&&void 0!==t?t:"list",d=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return U`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${yi}
            label="Mode"
            .value=${c}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({mode:t.detail.value})}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${Ei}
            label="Device name"
            .value=${null!==(i=this._config.device_name)&&void 0!==i?i:""}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({device_name:t.detail.value})}}
          ></ha-selector>

          ${"list"===c?U`<ha-selector
                .hass=${this.hass}
                .selector=${Ei}
                label="Card title (optional)"
                .value=${null!==(o=this._config.title)&&void 0!==o?o:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateConfig({title:t.detail.value})}}
              ></ha-selector>`:j}
        </div>

        ${"phone"===c?U`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${$i}
                  label="Battery (%)"
                  .value=${null!==(n=d.battery_entity)&&void 0!==n?n:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,battery_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${$i}
                  label="Charging (binary_sensor)"
                  .value=${null!==(r=d.charging_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,charging_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${$i}
                  label="Wi-Fi connection"
                  .value=${null!==(a=d.wifi_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,wifi_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${$i}
                  label="Mobile data"
                  .value=${null!==(s=d.mobile_data_entity)&&void 0!==s?s:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,mobile_data_entity:t.detail.value}})}}
                ></ha-selector>
              </div>
            `:j}

        <div class="section">
          <div class="section-title">Add entities from a device</div>
          <div class="device-add">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ai}
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
            ${"phone"===c?"Screen items":"Rows"}
          </div>
          <div class="rows">
            ${this._config.rows.map((t,e)=>this._renderRowEditor(t,e))}
          </div>
          <mwc-button @click=${this._addRow}>+ Add entity</mwc-button>
        </div>
      </div>
    `}_renderRowEditor(t,e){var i,o,n,r,a;return U`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${$i}
            label="Entity"
            .value=${t.entity}
            @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{entity:t.detail.value})}}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ei}
              label="Name (optional)"
              .value=${null!==(i=t.name)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{name:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${xi}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${wi}
              label="Display"
              .value=${null!==(n=t.type)&&void 0!==n?n:"text"}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{type:t.detail.value})}}
            ></ha-selector>
          </div>
          ${"bar"===t.type?U`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Si}
                  label="Min"
                  .value=${null!==(r=t.min)&&void 0!==r?r:0}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{min:Number(t.detail.value)})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Si}
                  label="Max"
                  .value=${null!==(a=t.max)&&void 0!==a?a:100}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{max:Number(t.detail.value)})}}
                ></ha-selector>
              </div>`:j}
        </div>
        <ha-icon-button class="remove" @click=${()=>this._removeRow(e)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}static get styles(){return a`
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
      ha-selector {
        display: block;
        width: 100%;
      }
    `}};t([lt({attribute:!1})],Ci.prototype,"hass",void 0),t([ct()],Ci.prototype,"_config",void 0),t([ct()],Ci.prototype,"_deviceToAdd",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}(".rows")],Ci.prototype,"_rowsEl",void 0),Ci=t([at(ut)],Ci);let Di=class extends nt{static getConfigElement(){return document.createElement(ut)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,i,o;const n=null!==(i=null===(e=null===(t=this._config)||void 0===t?void 0:t.rows)||void 0===e?void 0:e.length)&&void 0!==i?i:0;return"phone"===(null===(o=this._config)||void 0===o?void 0:o.mode)?6+Math.ceil(n/2):1+n}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():U``}_renderRow(t){const e=this.hass,i=pt(e,t),o=function(t,e){var i,o;if(e.name)return e.name;const n=pt(t,e);return null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==o?o:e.entity}(e,t),n=function(t,e){var i;if(e.icon)return e.icon;const o=pt(t,e);return null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.icon}(e,t),r=function(t,e){var i,o;if(e.type)return e.type;const n=pt(t,e);if(!n)return"text";const r=!Number.isNaN(Number(n.state)),a=null===(i=n.attributes)||void 0===i?void 0:i.device_class;return!r||"battery"!==a&&"%"!==(null===(o=n.attributes)||void 0===o?void 0:o.unit_of_measurement)?"text":"bar"}(e,t);return U`
      <div class="row ${!i?"unavailable":""}">
        <ha-icon class="row-icon" .icon=${null!=n?n:"mdi:help-circle-outline"}></ha-icon>
        <div class="row-main">
          <div class="row-name">${o}</div>
          ${"bar"===r?this._renderBar(t):U`<div class="row-value">${vt(e,t)}</div>`}
        </div>
      </div>
    `}_renderBar(t){const e=function(t,e){var i,o;const n=pt(t,e);if(!n)return;const r=Number(n.state);if(Number.isNaN(r))return;const a=null!==(i=e.min)&&void 0!==i?i:0,s=null!==(o=e.max)&&void 0!==o?o:100;if(s===a)return;const l=(r-a)/(s-a)*100;return Math.max(0,Math.min(100,l))}(this.hass,t),i=vt(this.hass,t);return U`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style="width:${null!=e?e:0}%"
          ></div>
        </div>
        <div class="bar-value">${i}</div>
      </div>
    `}_renderList(){var t;const e=null!==(t=this._config.title)&&void 0!==t?t:this._config.device_name;return U`
      <ha-card .header=${null!=e?e:j}>
        <div class="card-content list-mode">
          ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t)):U`<div class="empty">Add entities in the card settings.</div>`}
        </div>
      </ha-card>
    `}_renderPhone(){var t,e,i;const o=this.hass,n=null!==(t=this._config.status_bar)&&void 0!==t?t:{},r=null!==(i=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==i?i:"Smartphone",a=function(t,e){var i;if(e)return null===(i=t.states[e])||void 0===i?void 0:i.state}(o,n.battery_entity),s=ft(o,n.charging_entity),l=ft(o,n.wifi_entity),c=ft(o,n.mobile_data_entity),d=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return U`
      <ha-card>
        <div class="phone">
          <div class="phone-frame">
            <div class="notch"></div>
            <div class="status-bar">
              <div class="status-left">
                <span class="clock">${d}</span>
              </div>
              <div class="status-center">${r}</div>
              <div class="status-right">
                ${n.mobile_data_entity?U`<ha-icon
                      class="status-icon ${c?"on":"off"}"
                      icon="mdi:signal-cellular-3"
                    ></ha-icon>`:j}
                ${n.wifi_entity?U`<ha-icon
                      class="status-icon ${l?"on":"off"}"
                      icon=${l?"mdi:wifi":"mdi:wifi-off"}
                    ></ha-icon>`:j}
                ${n.battery_entity?U`<span class="battery-pill ${s?"charging":""}">
                      ${s?U`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`:j}
                      <ha-icon class="status-icon" icon=${this._batteryIcon(a,s)}></ha-icon>
                      <span>${null!=a?a:"—"}%</span>
                    </span>`:j}
              </div>
            </div>
            <div class="screen">
              ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t)):U`<div class="empty">Add entities in the card settings.</div>`}
            </div>
            <div class="home-indicator"></div>
          </div>
        </div>
      </ha-card>
    `}_batteryIcon(t,e){const i=Number(t);if(Number.isNaN(i))return"mdi:battery-unknown";const o=10*Math.round(i/10),n=o<=0?"outline":o>=100?"":`-${o}`;return e?`mdi:battery-charging${o>=100?"":n}`:`mdi:battery${n}`}static get styles(){return a`
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
      }
      .row:last-child {
        border-bottom: none;
      }
      .row.unavailable {
        opacity: 0.5;
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
        transition: width 0.3s ease-in-out;
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
        padding: 16px;
      }
      .phone-frame {
        position: relative;
        width: 100%;
        max-width: 320px;
        border-radius: 32px;
        background: var(--card-background-color, var(--ha-card-background));
        border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
        overflow: hidden;
        padding-bottom: 14px;
      }
      .notch {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 14px;
        border-radius: 8px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
        z-index: 2;
      }
      .status-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 14px 16px 8px;
        font-size: 12px;
        font-weight: 500;
        color: var(--primary-text-color);
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
        --mdc-icon-size: 16px;
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
      .screen {
        padding: 4px 16px 0;
      }
      .home-indicator {
        margin: 10px auto 0;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.2));
      }
    `}};t([lt({attribute:!1})],Di.prototype,"hass",void 0),t([ct()],Di.prototype,"_config",void 0),Di=t([at(ht)],Di),window.customCards=window.customCards||[],window.customCards.push({type:ht,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{Di as HaSmartphoneCard};
