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
var b;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,S=`<${E}>`,A=document,k=()=>A.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,M=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),L=new WeakMap,z=A.createTreeWalker(A,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",a=P;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=N:void 0!==l[1]?a=O:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?M:'"'===l[3]?R:I):a===R||a===I?a=M:a===N||a===O?a=P:(a=M,n=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";r+=a===P?i+S:c>=0?(o.push(s),i.slice(0,c)+$+i.slice(c)+x+h):i+x+(-2===c?(o.push(void 0),e):h)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class F{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=Y(t,e);if(this.el=F.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith($)||e.startsWith(x)){const i=c[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+$).split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Z:"@"===e[1]?J:V})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),z.nextNode(),s.push({type:2,index:++n});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===E)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var n,r,a,s;if(e===U)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);z.currentNode=n;let r=z.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=z.nextNode(),a++)}return z.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,o){var n;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),C(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=F.createElement(X(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new F(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new W(this.k(k()),this.k(k()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,o,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=q(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=q(this,o[i+a],e,a),s===U&&(s=this._$AH[a]),r||(r=!C(s)||s!==this._$AH[a]),s===B?t=B:t!==B&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const K=y?y.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:B)===U)return;const o=this._$AH,n=t===B&&o!==B||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==B&&(o===B||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let tt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};const et=_.litHtmlPolyfillSupport;null==et||et(F,W),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,ot;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new W(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");
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
var dt,ht,ut;function pt(t){return t.substr(0,t.indexOf("."))}null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ht||(ht={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var vt=["closed","locked","off"],ft=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var o,n=pt(e),r="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}return t.callService(r,o,{entity_id:e})}(t,e,vt.includes(t.states[e].state))};const gt="ha-smartphone-card",mt="ha-smartphone-card-editor";function bt(t,e){return t.states[e.entity]}function _t(t,e){var i,o,n,r,a;const s=t.states[e],l=null!==(o=null===(i=null==s?void 0:s.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==o?o:e,c=null===(n=t.entities)||void 0===n?void 0:n[e];if(null==c?void 0:c.name)return c.name;if(null==c?void 0:c.original_name)return c.original_name;const d=null==c?void 0:c.device_id,h=d?null===(r=t.devices)||void 0===r?void 0:r[d]:void 0,u=null!==(a=null==h?void 0:h.name_by_user)&&void 0!==a?a:null==h?void 0:h.name;if(u&&l.startsWith(u)){const t=l.slice(u.length).trim();if(t)return t}return l}function yt(t,e){var i,o;if(void 0!==e.unit)return e.unit;const n=bt(t,e);return null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:""}function wt(t,e){var i,o;const n=bt(t,e);if(!n)return;const r=Number(n.state);if(Number.isNaN(r))return;const a=null!==(i=e.min)&&void 0!==i?i:0,s=null!==(o=e.max)&&void 0!==o?o:100;if(s===a)return;const l=(r-a)/(s-a)*100;return Math.max(0,Math.min(100,l))}function $t(t,e){const i=bt(t,e);if(!i)return"—";const o=yt(t,e);return o?`${i.state} ${o}`:i.state}function xt(t,e){let i;return i="%"===e?t:t<=0&&t>=-100?t+100:t,i=Math.max(0,Math.min(100,i)),i>=75?4:i>=50?3:i>=25?2:1}const Et=new Set(["switch","light","fan","input_boolean","siren","lock","cover","humidifier"]);const St=new Set(["off","unavailable","unknown","not_connected","not connected","disconnected","none",""]);function At(t,e){if(!e)return!1;const i=t.states[e];return!!i&&!St.has(i.state.toLowerCase())}
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function kt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ct(){return Ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Ct.apply(null,arguments)}function Dt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Tt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Dt(Object(i),!0).forEach(function(e){kt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Dt(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Pt(t){return Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(t)}function Nt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Ot=Nt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Mt=Nt(/Edge/i),It=Nt(/firefox/i),Rt=Nt(/safari/i)&&!Nt(/chrome/i)&&!Nt(/android/i),Ht=Nt(/iP(ad|od|hone)/i),jt=Nt(/chrome/i)&&Nt(/android/i),Ut={capture:!1,passive:!1};function Bt(t,e,i){t.addEventListener(e,i,!Ot&&Ut)}function Lt(t,e,i){t.removeEventListener(e,i,!Ot&&Ut)}function zt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Xt(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Yt(t,e,i,o){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&zt(t,e):zt(t,e))||o&&t===i)return t;if(t===i)break}while(t=Xt(t))}return null}var Ft,qt=/\s+/g;function Qt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(qt," ").replace(" "+e+" "," ");t.className=(o+(i?" "+e:"")).replace(qt," ")}}function Wt(t,e,i){var o=t&&t.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=i+("string"==typeof i?"":"px")}}function Vt(t,e){var i="";if("string"==typeof t)i=t;else do{var o=Wt(t,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function Gt(t,e,i){if(t){var o=t.getElementsByTagName(e),n=0,r=o.length;if(i)for(;n<r;n++)i(o[n],n);return o}return[]}function Kt(){var t=document.scrollingElement;return t||document.documentElement}function Zt(t,e,i,o,n){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Kt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(n=n||t.parentNode,!Ot))do{if(n&&n.getBoundingClientRect&&("none"!==Wt(n,"transform")||i&&"static"!==Wt(n,"position"))){var u=n.getBoundingClientRect();a-=u.top+parseInt(Wt(n,"border-top-width")),s-=u.left+parseInt(Wt(n,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(n=n.parentNode);if(o&&t!==window){var p=Vt(n||t),v=p&&p.a,f=p&&p.d;p&&(l=(a/=f)+(d/=f),c=(s/=v)+(h/=v))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function Jt(t,e,i){for(var o=ne(t,!0),n=Zt(t)[e];o;){if(!(n>=Zt(o)[i]))return o;if(o===Kt())break;o=ne(o,!1)}return!1}function te(t,e,i,o){for(var n=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==li.ghost&&(o||a[r]!==li.dragged)&&Yt(a[r],i.draggable,t,!1)){if(n===e)return a[r];n++}r++}return null}function ee(t,e){for(var i=t.lastElementChild;i&&(i===li.ghost||"none"===Wt(i,"display")||e&&!zt(i,e));)i=i.previousElementSibling;return i||null}function ie(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===li.clone||e&&!zt(t,e)||i++;return i}function oe(t){var e=0,i=0,o=Kt();if(t)do{var n=Vt(t),r=n.a,a=n.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,i]}function ne(t,e){if(!t||!t.getBoundingClientRect)return Kt();var i=t,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=Wt(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Kt();if(o||e)return i;o=!0}}}while(i=i.parentNode);return Kt()}function re(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function ae(t,e){return function(){if(!Ft){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Ft=setTimeout(function(){Ft=void 0},e)}}}function se(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function le(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function ce(t,e,i){var o={};return Array.from(t.children).forEach(function(n){var r,a,s,l;if(Yt(n,e.draggable,t,!1)&&!n.animated&&n!==i){var c=Zt(n);o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var de="Sortable"+(new Date).getTime();function he(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==Wt(t,"display")&&t!==li.ghost){e.push({target:t,rect:Zt(t)});var i=Tt({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=Vt(t,!0);o&&(i.top-=o.f,i.left-=o.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[i][o])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var n=!1,r=0;e.forEach(function(t){var e=0,i=t.target,a=i.fromRect,s=Zt(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Vt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&re(l,s)&&!re(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*o.animation}(d,l,c,o.options)),re(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=o.options.animation),o.animate(i,d,s,e)),e&&(n=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),n?t=setTimeout(function(){"function"==typeof i&&i()},r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,o){if(o){Wt(t,"transition",""),Wt(t,"transform","");var n=Vt(this.el),r=n&&n.a,a=n&&n.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Wt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Wt(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Wt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){Wt(t,"transition",""),Wt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var ue=[],pe={initializeByDefault:!0},ve={mount:function(t){for(var e in pe)pe.hasOwnProperty(e)&&!(e in t)&&(t[e]=pe[e]);ue.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),ue.push(t)},pluginEvent:function(t,e,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var n=t+"Global";ue.forEach(function(o){e[o.pluginName]&&(e[o.pluginName][n]&&e[o.pluginName][n](Tt({sortable:e},i)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](Tt({sortable:e},i)))})},initializePlugins:function(t,e,i,o){for(var n in ue.forEach(function(o){var n=o.pluginName;if(t.options[n]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[n]=r,Ct(i,r.defaults)}}),t.options)if(t.options.hasOwnProperty(n)){var r=this.modifyOption(t,n,t.options[n]);void 0!==r&&(t.options[n]=r)}},getEventProperties:function(t,e){var i={};return ue.forEach(function(o){"function"==typeof o.eventProperties&&Ct(i,o.eventProperties.call(e[o.pluginName],t))}),i},modifyOption:function(t,e,i){var o;return ue.forEach(function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(o=n.optionListeners[e].call(t[n.pluginName],i))}),o}};var fe=["evt"],ge=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,n=function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue;i[o]=t[o]}return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],-1===e.indexOf(i)&&{}.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(i,fe);ve.pluginEvent.bind(li)(t,e,Tt({dragEl:be,parentEl:_e,ghostEl:ye,rootEl:we,nextEl:$e,lastDownEl:xe,cloneEl:Ee,cloneHidden:Se,dragStarted:je,putSortable:Pe,activeSortable:li.active,originalEvent:o,oldIndex:Ae,oldDraggableIndex:Ce,newIndex:ke,newDraggableIndex:De,hideGhostForTarget:ni,unhideGhostForTarget:ri,cloneNowHidden:function(){Se=!0},cloneNowShown:function(){Se=!1},dispatchSortableEvent:function(t){me({sortable:e,name:t,originalEvent:o})}},n))};function me(t){!function(t){var e=t.sortable,i=t.rootEl,o=t.name,n=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||i&&i[de]){var f,g=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Ot||Mt?(f=document.createEvent("Event")).initEvent(o,!0,!0):f=new CustomEvent(o,{bubbles:!0,cancelable:!0}),f.to=a||i,f.from=s||i,f.item=n||i,f.clone=r,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var b=Tt(Tt({},v),ve.getEventProperties(o,e));for(var _ in b)f[_]=b[_];i&&i.dispatchEvent(f),g[m]&&g[m].call(e,f)}}(Tt({putSortable:Pe,cloneEl:Ee,targetEl:be,rootEl:we,oldIndex:Ae,oldDraggableIndex:Ce,newIndex:ke,newDraggableIndex:De},t))}var be,_e,ye,we,$e,xe,Ee,Se,Ae,ke,Ce,De,Te,Pe,Ne,Oe,Me,Ie,Re,He,je,Ue,Be,Le,ze,Xe=!1,Ye=!1,Fe=[],qe=!1,Qe=!1,We=[],Ve=!1,Ge=[],Ke="undefined"!=typeof document,Ze=Ht,Je=Mt||Ot?"cssFloat":"float",ti=Ke&&!jt&&!Ht&&"draggable"in document.createElement("div"),ei=function(){if(Ke){if(Ot)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),ii=function(t,e){var i=Wt(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=te(t,0,e),r=te(t,1,e),a=n&&Wt(n),s=r&&Wt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Zt(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Zt(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=o&&"none"===i[Je]||r&&"none"===i[Je]&&l+c>o)?"vertical":"horizontal"},oi=function(t){function e(t,i){return function(o,n,r,a){var s=o.options.group.name&&n.options.group.name&&o.options.group.name===n.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(o,n,r,a),i)(o,n,r,a);var l=(i?o:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},o=t.group;o&&"object"==Pt(o)||(o={name:o}),i.name=o.name,i.checkPull=e(o.pull,!0),i.checkPut=e(o.put),i.revertClone=o.revertClone,t.group=i},ni=function(){!ei&&ye&&Wt(ye,"display","none")},ri=function(){!ei&&ye&&Wt(ye,"display","")};Ke&&!jt&&document.addEventListener("click",function(t){if(Ye)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ye=!1,!1},!0);var ai=function(t){if(be){var e=function(t,e){var i;return Fe.some(function(o){var n=o[de].options.emptyInsertThreshold;if(n&&!ee(o)){var r=Zt(o),a=t>=r.left-n&&t<=r.right+n,s=e>=r.top-n&&e<=r.bottom+n;return a&&s?i=o:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[de]._onDragOver(i)}}},si=function(t){be&&be.parentNode[de]._isOutsideThisEl(t.target)};function li(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Ct({},e),t[de]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ii(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==li.supportPointer&&"PointerEvent"in window&&(!Rt||Ht),emptyInsertThreshold:5};for(var o in ve.initializePlugins(this,t,i),i)!(o in e)&&(e[o]=i[o]);for(var n in oi(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&ti,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Bt(t,"pointerdown",this._onTapStart):(Bt(t,"mousedown",this._onTapStart),Bt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Bt(t,"dragover",this),Bt(t,"dragenter",this)),Fe.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Ct(this,he())}function ci(t,e,i,o,n,r,a,s){var l,c,d=t[de],h=d.options.onMove;return!window.CustomEvent||Ot||Mt?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=o,l.related=n||e,l.relatedRect=r||Zt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function di(t){t.draggable=!1}function hi(){Ve=!1}function ui(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,o=0;i--;)o+=e.charCodeAt(i);return o.toString(36)}function pi(t){return setTimeout(t,0)}function vi(t){return clearTimeout(t)}li.prototype={constructor:li,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Ue=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,be):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,o=this.options,n=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter;if(function(t){Ge.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var o=e[i];o.checked&&Ge.push(o)}}(i),!be&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Rt||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Yt(s,o.draggable,i,!1))&&s.animated||xe===s)){if(Ae=ie(s),Ce=ie(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return me({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),ge("filter",e,{evt:t}),void(n&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=Yt(l,o.trim(),i,!1))return me({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),ge("filter",e,{evt:t}),!0})))return void(n&&t.preventDefault());o.handle&&!Yt(l,o.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var o,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(i&&!be&&i.parentNode===r){var l=Zt(i);if(we=r,_e=(be=i).parentNode,$e=be.nextSibling,xe=i,Te=a.group,li.dragged=be,Ne={target:be,clientX:(e||t).clientX,clientY:(e||t).clientY},Re=Ne.clientX-l.left,He=Ne.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,be.style["will-change"]="all",o=function(){ge("delayEnded",n,{evt:t}),li.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!It&&n.nativeDraggable&&(be.draggable=!0),n._triggerDragStart(t,e),me({sortable:n,name:"choose",originalEvent:t}),Qt(be,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){Gt(be,t.trim(),di)}),Bt(s,"dragover",ai),Bt(s,"mousemove",ai),Bt(s,"touchmove",ai),a.supportPointer?(Bt(s,"pointerup",n._onDrop),!this.nativeDraggable&&Bt(s,"pointercancel",n._onDrop)):(Bt(s,"mouseup",n._onDrop),Bt(s,"touchend",n._onDrop),Bt(s,"touchcancel",n._onDrop)),It&&this.nativeDraggable&&(this.options.touchStartThreshold=4,be.draggable=!0),ge("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Mt||Ot))o();else{if(li.eventCanceled)return void this._onDrop();a.supportPointer?(Bt(s,"pointerup",n._disableDelayedDrag),Bt(s,"pointercancel",n._disableDelayedDrag)):(Bt(s,"mouseup",n._disableDelayedDrag),Bt(s,"touchend",n._disableDelayedDrag),Bt(s,"touchcancel",n._disableDelayedDrag)),Bt(s,"mousemove",n._delayedDragTouchMoveHandler),Bt(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&Bt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){be&&di(be),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Lt(t,"mouseup",this._disableDelayedDrag),Lt(t,"touchend",this._disableDelayedDrag),Lt(t,"touchcancel",this._disableDelayedDrag),Lt(t,"pointerup",this._disableDelayedDrag),Lt(t,"pointercancel",this._disableDelayedDrag),Lt(t,"mousemove",this._delayedDragTouchMoveHandler),Lt(t,"touchmove",this._delayedDragTouchMoveHandler),Lt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Bt(document,"pointermove",this._onTouchMove):Bt(document,e?"touchmove":"mousemove",this._onTouchMove):(Bt(be,"dragend",this),Bt(we,"dragstart",this._onDragStart));try{document.selection?pi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Xe=!1,we&&be){ge("dragStarted",this,{evt:e}),this.nativeDraggable&&Bt(document,"dragover",si);var i=this.options;!t&&Qt(be,i.dragClass,!1),Qt(be,i.ghostClass,!0),li.active=this,t&&this._appendGhost(),me({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Oe){this._lastX=Oe.clientX,this._lastY=Oe.clientY,ni();for(var t=document.elementFromPoint(Oe.clientX,Oe.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Oe.clientX,Oe.clientY))!==e;)e=t;if(be.parentNode[de]._isOutsideThisEl(t),e)do{if(e[de]){if(e[de]._onDragOver({clientX:Oe.clientX,clientY:Oe.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=Xt(e));ri()}},_onTouchMove:function(t){if(Ne){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,n=t.touches?t.touches[0]:t,r=ye&&Vt(ye,!0),a=ye&&r&&r.a,s=ye&&r&&r.d,l=Ze&&ze&&oe(ze),c=(n.clientX-Ne.clientX+o.x)/(a||1)+(l?l[0]-We[0]:0)/(a||1),d=(n.clientY-Ne.clientY+o.y)/(s||1)+(l?l[1]-We[1]:0)/(s||1);if(!li.active&&!Xe){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(ye){r?(r.e+=c-(Me||0),r.f+=d-(Ie||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Wt(ye,"webkitTransform",h),Wt(ye,"mozTransform",h),Wt(ye,"msTransform",h),Wt(ye,"transform",h),Me=c,Ie=d,Oe=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!ye){var t=this.options.fallbackOnBody?document.body:we,e=Zt(be,!0,Ze,!0,t),i=this.options;if(Ze){for(ze=t;"static"===Wt(ze,"position")&&"none"===Wt(ze,"transform")&&ze!==document;)ze=ze.parentNode;ze!==document.body&&ze!==document.documentElement?(ze===document&&(ze=Kt()),e.top+=ze.scrollTop,e.left+=ze.scrollLeft):ze=Kt(),We=oe(ze)}Qt(ye=be.cloneNode(!0),i.ghostClass,!1),Qt(ye,i.fallbackClass,!0),Qt(ye,i.dragClass,!0),Wt(ye,"transition",""),Wt(ye,"transform",""),Wt(ye,"box-sizing","border-box"),Wt(ye,"margin",0),Wt(ye,"top",e.top),Wt(ye,"left",e.left),Wt(ye,"width",e.width),Wt(ye,"height",e.height),Wt(ye,"opacity","0.8"),Wt(ye,"position",Ze?"absolute":"fixed"),Wt(ye,"zIndex","100000"),Wt(ye,"pointerEvents","none"),li.ghost=ye,t.appendChild(ye),Wt(ye,"transform-origin",Re/parseInt(ye.style.width)*100+"% "+He/parseInt(ye.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,o=t.dataTransfer,n=i.options;ge("dragStart",this,{evt:t}),li.eventCanceled?this._onDrop():(ge("setupClone",this),li.eventCanceled||((Ee=le(be)).removeAttribute("id"),Ee.draggable=!1,Ee.style["will-change"]="",this._hideClone(),Qt(Ee,this.options.chosenClass,!1),li.clone=Ee),i.cloneId=pi(function(){ge("clone",i),li.eventCanceled||(i.options.removeCloneOnHide||we.insertBefore(Ee,be),i._hideClone(),me({sortable:i,name:"clone"}))}),!e&&Qt(be,n.dragClass,!0),e?(Ye=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Lt(document,"mouseup",i._onDrop),Lt(document,"touchend",i._onDrop),Lt(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",n.setData&&n.setData.call(i,o,be)),Bt(document,"drop",i),Wt(be,"transform","translateZ(0)")),Xe=!0,i._dragStartId=pi(i._dragStarted.bind(i,e,t)),Bt(document,"selectstart",i),je=!0,window.getSelection().removeAllRanges(),Rt&&Wt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,o,n,r=this.el,a=t.target,s=this.options,l=s.group,c=li.active,d=Te===l,h=s.sort,u=Pe||c,p=this,v=!1;if(!Ve){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Yt(a,s.draggable,r,!0),D("dragOver"),li.eventCanceled)return v;if(be.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return P(!1);if(Ye=!1,c&&!s.disabled&&(d?h||(o=_e!==we):Pe===this||(this.lastPutMode=Te.checkPull(this,c,be,t))&&l.checkPut(this,c,be,t))){if(n="vertical"===this._getDirection(t,a),e=Zt(be),D("dragOverValid"),li.eventCanceled)return v;if(o)return _e=we,T(),this._hideClone(),D("revert"),li.eventCanceled||($e?we.insertBefore(be,$e):we.appendChild(be)),P(!0);var f=ee(r,s.draggable);if(!f||function(t,e,i){var o=Zt(ee(i.el,i.options.draggable)),n=ce(i.el,i.options,ye),r=10;return e?t.clientX>n.right+r||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+r||t.clientX>o.right&&t.clientY>o.top}(t,n,this)&&!f.animated){if(f===be)return P(!1);if(f&&r===t.target&&(a=f),a&&(i=Zt(a)),!1!==ci(we,r,be,e,a,i,t,!!a))return T(),f&&f.nextSibling?r.insertBefore(be,f.nextSibling):r.appendChild(be),_e=r,N(),P(!0)}else if(f&&function(t,e,i){var o=Zt(te(i.el,0,i.options,!0)),n=ce(i.el,i.options,ye),r=10;return e?t.clientX<n.left-r||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-r||t.clientY<o.bottom&&t.clientX<o.left}(t,n,this)){var g=te(r,0,s,!0);if(g===be)return P(!1);if(i=Zt(a=g),!1!==ci(we,r,be,e,a,i,t,!1))return T(),r.insertBefore(be,g),_e=r,N(),P(!0)}else if(a.parentNode===r){i=Zt(a);var m,b,_,y=be.parentNode!==r,w=!function(t,e,i){var o=i?t.left:t.top,n=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return o===a||n===s||o+r/2===a+l/2}(be.animated&&be.toRect||e,a.animated&&a.toRect||i,n),$=n?"top":"left",x=Jt(a,"top","top")||Jt(be,"top","top"),E=x?x.scrollTop:void 0;if(Ue!==a&&(b=i[$],qe=!1,Qe=!w&&s.invertSwap||y),m=function(t,e,i,o,n,r,a,s){var l=o?t.clientY:t.clientX,c=o?i.height:i.width,d=o?i.top:i.left,h=o?i.bottom:i.right,u=!1;if(!a)if(s&&Le<c*n){if(!qe&&(1===Be?l>d+c*r/2:l<h-c*r/2)&&(qe=!0),qe)u=!0;else if(1===Be?l<d+Le:l>h-Le)return-Be}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return ie(be)<ie(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Qe,Ue===a),0!==m){var S=ie(be);do{S-=m,_=_e.children[S]}while(_&&("none"===Wt(_,"display")||_===ye))}if(0===m||_===a)return P(!1);Ue=a,Be=m;var A=a.nextElementSibling,k=!1,C=ci(we,r,be,e,a,i,t,k=1===m);if(!1!==C)return 1!==C&&-1!==C||(k=1===C),Ve=!0,setTimeout(hi,30),T(),k&&!A?r.appendChild(be):a.parentNode.insertBefore(be,k?A:a),x&&se(x,0,E-x.scrollTop),_e=be.parentNode,void 0===b||Qe||(Le=Math.abs(b-Zt(a)[$])),N(),P(!0)}if(r.contains(be))return P(!1)}return!1}function D(s,l){ge(s,p,Tt({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:o,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:P,onMove:function(i,o){return ci(we,r,be,e,i,Zt(i),t,o)},changed:N},l))}function T(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function P(e){return D("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Qt(be,Pe?Pe.options.ghostClass:c.options.ghostClass,!1),Qt(be,s.ghostClass,!0)),Pe!==p&&p!==li.active?Pe=p:p===li.active&&Pe&&(Pe=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===be&&!be.animated||a===r&&!a.animated)&&(Ue=null),s.dragoverBubble||t.rootEl||a===document||(be.parentNode[de]._isOutsideThisEl(t.target),!e&&ai(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function N(){ke=ie(be),De=ie(be,s.draggable),me({sortable:p,name:"change",toEl:r,newIndex:ke,newDraggableIndex:De,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Lt(document,"mousemove",this._onTouchMove),Lt(document,"touchmove",this._onTouchMove),Lt(document,"pointermove",this._onTouchMove),Lt(document,"dragover",ai),Lt(document,"mousemove",ai),Lt(document,"touchmove",ai)},_offUpEvents:function(){var t=this.el.ownerDocument;Lt(t,"mouseup",this._onDrop),Lt(t,"touchend",this._onDrop),Lt(t,"pointerup",this._onDrop),Lt(t,"pointercancel",this._onDrop),Lt(t,"touchcancel",this._onDrop),Lt(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;ke=ie(be),De=ie(be,i.draggable),ge("drop",this,{evt:t}),_e=be&&be.parentNode,ke=ie(be),De=ie(be,i.draggable),li.eventCanceled||(Xe=!1,Qe=!1,qe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),vi(this.cloneId),vi(this._dragStartId),this.nativeDraggable&&(Lt(document,"drop",this),Lt(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Rt&&Wt(document.body,"user-select",""),Wt(be,"transform",""),t&&(je&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),ye&&ye.parentNode&&ye.parentNode.removeChild(ye),(we===_e||Pe&&"clone"!==Pe.lastPutMode)&&Ee&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),be&&(this.nativeDraggable&&Lt(be,"dragend",this),di(be),be.style["will-change"]="",je&&!Xe&&Qt(be,Pe?Pe.options.ghostClass:this.options.ghostClass,!1),Qt(be,this.options.chosenClass,!1),me({sortable:this,name:"unchoose",toEl:_e,newIndex:null,newDraggableIndex:null,originalEvent:t}),we!==_e?(ke>=0&&(me({rootEl:_e,name:"add",toEl:_e,fromEl:we,originalEvent:t}),me({sortable:this,name:"remove",toEl:_e,originalEvent:t}),me({rootEl:_e,name:"sort",toEl:_e,fromEl:we,originalEvent:t}),me({sortable:this,name:"sort",toEl:_e,originalEvent:t})),Pe&&Pe.save()):ke!==Ae&&ke>=0&&(me({sortable:this,name:"update",toEl:_e,originalEvent:t}),me({sortable:this,name:"sort",toEl:_e,originalEvent:t})),li.active&&(null!=ke&&-1!==ke||(ke=Ae,De=Ce),me({sortable:this,name:"end",toEl:_e,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){ge("nulling",this),we=be=_e=ye=$e=Ee=xe=Se=Ne=Oe=je=ke=De=Ae=Ce=Ue=Be=Pe=Te=li.dragged=li.ghost=li.clone=li.active=null;var t=this.el;Ge.forEach(function(e){t.contains(e)&&(e.checked=!0)}),Ge.length=Me=Ie=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":be&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,n=i.length,r=this.options;o<n;o++)Yt(t=i[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||ui(t));return e},sort:function(t,e){var i={},o=this.el;this.toArray().forEach(function(t,e){var n=o.children[e];Yt(n,this.options.draggable,o,!1)&&(i[t]=n)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(o.removeChild(i[t]),o.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Yt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var o=ve.modifyOption(this,t,e);i[t]=void 0!==o?o:e,"group"===t&&oi(i)},destroy:function(){ge("destroy",this);var t=this.el;t[de]=null,Lt(t,"mousedown",this._onTapStart),Lt(t,"touchstart",this._onTapStart),Lt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Lt(t,"dragover",this),Lt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Fe.splice(Fe.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Se){if(ge("hideClone",this),li.eventCanceled)return;Wt(Ee,"display","none"),this.options.removeCloneOnHide&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),Se=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Se){if(ge("showClone",this),li.eventCanceled)return;be.parentNode!=we||this.options.group.revertClone?$e?we.insertBefore(Ee,$e):we.appendChild(Ee):we.insertBefore(Ee,be),this.options.group.revertClone&&this.animate(be,Ee),Wt(Ee,"display",""),Se=!1}}else this._hideClone()}},Ke&&Bt(document,"touchmove",function(t){(li.active||Xe)&&t.cancelable&&t.preventDefault()}),li.utils={on:Bt,off:Lt,css:Wt,find:Gt,is:function(t,e){return!!Yt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:ae,closest:Yt,toggleClass:Qt,clone:le,index:ie,nextTick:pi,cancelNextTick:vi,detectDirection:ii,getChild:te,expando:de},li.get=function(t){return t[de]},li.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(li.utils=Tt(Tt({},li.utils),t.utils)),ve.mount(t)})},li.create=function(t,e){return new li(t,e)},li.version="1.15.7";var fi,gi,mi,bi,_i,yi,wi=[],$i=!1;function xi(){wi.forEach(function(t){clearInterval(t.pid)}),wi=[]}function Ei(){clearInterval(yi)}var Si=ae(function(t,e,i,o){if(e.scroll){var n,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Kt(),d=!1;gi!==i&&(gi=i,xi(),fi=e.scroll,n=e.scrollFn,!0===fi&&(fi=ne(i,!0)));var h=0,u=fi;do{var p=u,v=Zt(p),f=v.top,g=v.bottom,m=v.left,b=v.right,_=v.width,y=v.height,w=void 0,$=void 0,x=p.scrollWidth,E=p.scrollHeight,S=Wt(p),A=p.scrollLeft,k=p.scrollTop;p===c?(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY));var C=w&&(Math.abs(b-r)<=s&&A+_<x)-(Math.abs(m-r)<=s&&!!A),D=$&&(Math.abs(g-a)<=s&&k+y<E)-(Math.abs(f-a)<=s&&!!k);if(!wi[h])for(var T=0;T<=h;T++)wi[T]||(wi[T]={});wi[h].vx==C&&wi[h].vy==D&&wi[h].el===p||(wi[h].el=p,wi[h].vx=C,wi[h].vy=D,clearInterval(wi[h].pid),0==C&&0==D||(d=!0,wi[h].pid=setInterval(function(){o&&0===this.layer&&li.active._onTouchMove(_i);var e=wi[this.layer].vy?wi[this.layer].vy*l:0,i=wi[this.layer].vx?wi[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(li.dragged.parentNode[de],i,e,t,_i,wi[this.layer].el)||se(wi[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=ne(u,!1)));$i=d}},30),Ai=function(t){var e=t.originalEvent,i=t.putSortable,o=t.dragEl,n=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||n;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function ki(){}function Ci(){}ki.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=te(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Ai},Ct(ki,{pluginName:"revertOnSpill"}),Ci.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Ai},Ct(Ci,{pluginName:"removeOnSpill"}),li.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Bt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Bt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Bt(document,"touchmove",this._handleFallbackAutoScroll):Bt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Lt(document,"dragover",this._handleAutoScroll):(Lt(document,"pointermove",this._handleFallbackAutoScroll),Lt(document,"touchmove",this._handleFallbackAutoScroll),Lt(document,"mousemove",this._handleFallbackAutoScroll)),Ei(),xi(),clearTimeout(Ft),Ft=void 0},nulling:function(){_i=gi=fi=$i=yi=mi=bi=null,wi.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,o=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,n);if(_i=t,e||this.options.forceAutoScrollFallback||Mt||Ot||Rt){Si(t,this.options,r,e);var a=ne(r,!0);!$i||yi&&o===mi&&n===bi||(yi&&Ei(),yi=setInterval(function(){var r=ne(document.elementFromPoint(o,n),!0);r!==a&&(a=r,xi()),Si(t,i.options,r,e)},10),mi=o,bi=n)}else{if(!this.options.bubbleScroll||ne(r,!0)===Kt())return void xi();Si(t,this.options,ne(r,!1),!1)}}},Ct(t,{pluginName:"scroll",initializeByDefault:!0})}),li.mount(Ci,ki);const Di={select:{mode:"dropdown",options:[{value:"list",label:"List"},{value:"phone",label:"Phone"}]}},Ti={select:{mode:"dropdown",options:[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"}]}},Pi={entity:{}},Ni={icon:{}},Oi={text:{}},Mi={number:{mode:"box"}},Ii={device:{}};let Ri=class extends nt{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=li.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[i]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,i),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const i=this._config.rows.map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({rows:i})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,i)=>i!==t);this._updateConfig({rows:e})}_addRowsFromDevice(){var t,e;const i=this._deviceToAdd;if(!i)return;const o=null!==(t=this.hass.entities)&&void 0!==t?t:{},n=null!==(e=this._config.status_bar)&&void 0!==e?e:{},r=new Set([...this._config.rows.map(t=>t.entity),n.battery_entity,n.charging_entity,n.wifi_entity,n.mobile_data_entity].filter(t=>!!t)),a=Object.values(o).filter(t=>!(t.device_id!==i||t.hidden_by||t.disabled_by||t.entity_category||r.has(t.entity_id))).map(t=>({entity:t.entity_id}));a.length&&this._updateConfig({rows:[...this._config.rows,...a]}),this._deviceToAdd=void 0}_updateQuickAction(t,e){var i;const o=(null!==(i=this._config.quick_actions)&&void 0!==i?i:[]).map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({quick_actions:o})}_addQuickAction(){var t;const e=[...null!==(t=this._config.quick_actions)&&void 0!==t?t:[],{service:""}];this._updateConfig({quick_actions:e})}_removeQuickAction(t){var e;const i=(null!==(e=this._config.quick_actions)&&void 0!==e?e:[]).filter((e,i)=>i!==t);this._updateConfig({quick_actions:i})}render(){var t,e,i,o,n,r,a,s,l,c;if(!this.hass||!this._config)return j``;const d=null!==(t=this._config.mode)&&void 0!==t?t:"list",h=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return j`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${Di}
            label="Mode"
            .value=${d}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({mode:t.detail.value})}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${Oi}
            label="Device name"
            .value=${null!==(i=this._config.device_name)&&void 0!==i?i:""}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({device_name:t.detail.value})}}
          ></ha-selector>

          ${"list"===d?j`<ha-selector
                .hass=${this.hass}
                .selector=${Oi}
                label="Card title (optional)"
                .value=${null!==(o=this._config.title)&&void 0!==o?o:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateConfig({title:t.detail.value})}}
              ></ha-selector>`:B}
        </div>

        ${"phone"===d?j`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Pi}
                  label="Battery (%)"
                  .value=${null!==(n=h.battery_entity)&&void 0!==n?n:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,battery_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Pi}
                  label="Charging (binary_sensor)"
                  .value=${null!==(r=h.charging_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,charging_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Pi}
                  label="Wi-Fi connection"
                  .value=${null!==(a=h.wifi_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,wifi_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Pi}
                  label="Mobile data"
                  .value=${null!==(s=h.mobile_data_entity)&&void 0!==s?s:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,mobile_data_entity:t.detail.value}})}}
                ></ha-selector>
              </div>
            `:B}

        <div class="section">
          <div class="section-title">Add entities from a device</div>
          <div class="device-add">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ii}
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
            `:B}
      </div>
    `}_renderQuickActionEditor(t,e){var i,o,n;return j`
      <div class="row-editor">
        <div class="row-editor-fields">
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ni}
              label="Icon"
              .value=${null!==(i=t.icon)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Oi}
              label="Name"
              .value=${null!==(o=t.name)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{name:t.detail.value})}}
            ></ha-selector>
          </div>
          <div class="row-editor-line">
            <ha-service-picker
              .hass=${this.hass}
              label="Service"
              .value=${t.service}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
            ></ha-service-picker>
            <ha-selector
              .hass=${this.hass}
              .selector=${Pi}
              label="Target entity (optional)"
              .value=${null!==(n=t.entity_id)&&void 0!==n?n:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{entity_id:t.detail.value})}}
            ></ha-selector>
          </div>
        </div>
        <ha-icon-button class="remove" @click=${()=>this._removeQuickAction(e)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderRowEditor(t,e){var i,o,n,r,a;return j`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${Pi}
            label="Entity"
            .value=${t.entity}
            @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{entity:t.detail.value})}}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Oi}
              label="Name (optional)"
              .value=${null!==(i=t.name)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{name:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Ni}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Ti}
              label="Display"
              .value=${null!==(n=t.type)&&void 0!==n?n:"text"}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{type:t.detail.value})}}
            ></ha-selector>
          </div>
          ${"bar"===t.type?j`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Mi}
                  label="Min"
                  .value=${null!==(r=t.min)&&void 0!==r?r:0}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{min:Number(t.detail.value)})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Mi}
                  label="Max"
                  .value=${null!==(a=t.max)&&void 0!==a?a:100}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{max:Number(t.detail.value)})}}
                ></ha-selector>
              </div>`:B}
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
      ha-selector,
      ha-service-picker {
        display: block;
        width: 100%;
      }
    `}};t([lt({attribute:!1})],Ri.prototype,"hass",void 0),t([ct()],Ri.prototype,"_config",void 0),t([ct()],Ri.prototype,"_deviceToAdd",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}(".rows")],Ri.prototype,"_rowsEl",void 0),Ri=t([at(mt)],Ri);let Hi=class extends nt{constructor(){super(...arguments),this._quickActionsOpen=!1}static getConfigElement(){return document.createElement(mt)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,i,o;return"phone"===(null===(t=this._config)||void 0===t?void 0:t.mode)?10:1+(null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0)}getLayoutOptions(){var t,e,i,o;if("phone"===(null===(t=this._config)||void 0===t?void 0:t.mode))return{grid_columns:2,grid_rows:8,grid_min_columns:2,grid_min_rows:6};const n=null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0;return{grid_columns:4,grid_rows:Math.max(2,Math.ceil((n+1)/2)+1),grid_min_columns:3,grid_min_rows:2}}connectedCallback(){super.connectedCallback(),this._clockInterval=setInterval(()=>this.requestUpdate(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._clockInterval&&clearInterval(this._clockInterval)}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():j``}_showMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_openSheet(t){t&&(this._sheetEntityId=t,this._historyPoints=void 0,this._loadHistory(t))}_closeSheet(){this._sheetEntityId=void 0,this._historyPoints=void 0}_toggleSheetEntity(){this._sheetEntityId&&ft(this.hass,this._sheetEntityId)}async _loadHistory(t){var e;try{const i=new Date(Date.now()-864e5).toISOString(),o=await this.hass.callApi("GET",`history/period/${i}?filter_entity_id=${t}&minimal_response`);if(this._sheetEntityId!==t)return;this._historyPoints=null!==(e=null==o?void 0:o[0])&&void 0!==e?e:[]}catch{this._sheetEntityId===t&&(this._historyPoints=[])}}_openQuickActions(){var t;(null===(t=this._config.quick_actions)||void 0===t?void 0:t.length)&&(this._quickActionsOpen=!0)}_closeQuickActions(){this._quickActionsOpen=!1}_runQuickAction(t){const[e,i]=t.service.split(".");if(!e||!i)return;const o={};t.entity_id&&(o.entity_id=t.entity_id),this.hass.callService(e,i,o),this._closeQuickActions()}_renderRow(t,e){const i=this.hass,o=bt(i,t),n=function(t,e){return e.name?e.name:_t(t,e.entity)}(i,t),r=function(t,e){var i;if(e.icon)return e.icon;const o=bt(t,e);return null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.icon}(i,t),a=function(t,e){var i,o;if(e.type)return e.type;const n=bt(t,e);if(!n)return"text";const r=!Number.isNaN(Number(n.state)),a=null===(i=n.attributes)||void 0===i?void 0:i.device_class;return!r||"battery"!==a&&"%"!==(null===(o=n.attributes)||void 0===o?void 0:o.unit_of_measurement)?"text":"bar"}(i,t);return j`
      <div
        class="row ${!o?"unavailable":""}"
        role="button"
        tabindex="0"
        @click=${()=>e(t.entity)}
        @keydown=${i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),e(t.entity))}}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${null!=r?r:"mdi:help-circle-outline"}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${n}</div>
          ${"bar"===a?this._renderBar(t):j`<div class="row-value">${$t(i,t)}</div>`}
        </div>
      </div>
    `}_renderBar(t){const e=wt(this.hass,t),i=$t(this.hass,t),o=function(t,e){var i;const o=bt(t,e);if(!o)return;const n=yt(t,e),r=null===(i=o.attributes)||void 0===i?void 0:i.device_class;if("%"!==n&&"battery"!==r)return;const a=wt(t,e);return void 0!==a?a<=20?"var(--error-color, #db4437)":a<=50?"var(--warning-color, #ff9800)":"var(--success-color, #4caf50)":void 0}(this.hass,t);return j`
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
      <ha-card .header=${null!=e?e:B}>
        <div class="card-content list-mode">
          ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._showMoreInfo(t))):j`<div class="empty">Add entities in the card settings.</div>`}
        </div>
      </ha-card>
    `}_renderPhone(){var t,e,i,o;const n=this.hass,r=null!==(t=this._config.status_bar)&&void 0!==t?t:{},a=null!==(i=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==i?i:"Smartphone",s=function(t,e){var i;if(e)return null===(i=t.states[e])||void 0===i?void 0:i.state}(n,r.battery_entity),l=Number(s),c=!Number.isNaN(l)&&l<=20,d=function(t,e){if(!e)return!1;const i=t.states[e];return!!i&&("on"===i.state||"home"===i.state||"connected"===i.state)}(n,r.charging_entity),h=At(n,r.wifi_entity),u=At(n,r.mobile_data_entity),p=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),v=t=>t?this._openSheet(t):void 0,f=!!(null===(o=this._config.quick_actions)||void 0===o?void 0:o.length),g=this._config.frame_color?`background:${this._config.frame_color};`:"";return j`
      <ha-card>
        <div class="phone">
          <div class="phone-frame" style=${g}>
            <div class="phone-screen">
              <div
                class="notch ${f?"tappable":""}"
                role=${f?"button":B}
                tabindex=${f?"0":B}
                @click=${()=>this._openQuickActions()}
                @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
              ></div>
              <div class="status-bar">
                <div class="status-left">
                  <span class="clock">${p}</span>
                </div>
                <div
                  class="status-center ${f?"tappable":""}"
                  role=${f?"button":B}
                  tabindex=${f?"0":B}
                  @click=${()=>this._openQuickActions()}
                  @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
                >
                  ${a}
                </div>
                <div class="status-right">
                  ${r.mobile_data_entity?j`<ha-icon
                        class="status-icon ${u?"on":"off"}"
                        icon=${function(t,e){var i,o;const n=e?t.states[e]:void 0,r=n?Number(n.state):NaN;if(n&&!Number.isNaN(r)){const t=null!==(o=null===(i=n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:"";return`mdi:signal-cellular-${Math.min(3,xt(r,t))}`}return"mdi:signal-cellular-3"}(n,r.mobile_data_entity)}
                        role="button"
                        tabindex="0"
                        @click=${()=>v(r.mobile_data_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&v(r.mobile_data_entity)}
                      ></ha-icon>`:B}
                  ${r.wifi_entity?j`<ha-icon
                        class="status-icon ${h?"on":"off"}"
                        icon=${function(t,e,i){var o,n;const r=e?t.states[e]:void 0,a=r?Number(r.state):NaN;if(r&&!Number.isNaN(a))return`mdi:wifi-strength-${xt(a,null!==(n=null===(o=r.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"")}`;return i?"mdi:wifi":"mdi:wifi-off"}(n,r.wifi_entity,h)}
                        role="button"
                        tabindex="0"
                        @click=${()=>v(r.wifi_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&v(r.wifi_entity)}
                      ></ha-icon>`:B}
                  ${r.battery_entity?j`<span
                        class="battery-pill ${d?"charging":""} ${c&&!d?"low":""}"
                        role="button"
                        tabindex="0"
                        @click=${()=>v(r.battery_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&v(r.battery_entity)}
                      >
                        ${d?j`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`:B}
                        <ha-icon class="status-icon" icon=${this._batteryIcon(s,d)}></ha-icon>
                        <span>${null!=s?s:"—"}%</span>
                      </span>`:B}
                </div>
              </div>
              <div class="screen-content">
                ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._openSheet(t))):j`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
              ${this._sheetEntityId?this._renderSheet(this._sheetEntityId):B}
              ${this._quickActionsOpen?this._renderQuickActionsSheet():B}
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
            ${e.map(t=>{var e,i;return j`
                <button class="quick-action-row" @click=${()=>this._runQuickAction(t)}>
                  <ha-icon icon=${null!==(e=t.icon)&&void 0!==e?e:"mdi:flash"}></ha-icon>
                  <span>${null!==(i=t.name)&&void 0!==i?i:t.service}</span>
                </button>
              `})}
          </div>
        </div>
      </div>
    `}_renderSheet(t){var e,i,o,n;const r=this.hass,a=r.states[t],s=function(t){return Et.has(t)}(pt(t)),l=_t(r,t),c=null!==(i=null===(e=null==a?void 0:a.attributes)||void 0===e?void 0:e.icon)&&void 0!==i?i:"mdi:help-circle-outline",d=null!==(n=null===(o=null==a?void 0:a.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"",h=a?`${a.state}${d?` ${d}`:""}`:"Unavailable";return j`
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
          ${this._renderHistory()}
          <div class="sheet-actions">
            ${s?j`<mwc-button @click=${()=>this._toggleSheetEntity()}>Toggle</mwc-button>`:B}
            <mwc-button
              @click=${()=>{this._showMoreInfo(t),this._closeSheet()}}
            >
              More details
            </mwc-button>
          </div>
        </div>
      </div>
    `}_renderHistory(){const t=this._historyPoints;return void 0===t?j`<div class="sheet-history-loading">Loading 24h history…</div>`:t.length<2?B:function(t){if(!t.length)return!1;const e=t.filter(t=>""!==t.state&&!Number.isNaN(Number(t.state)));return e.length/t.length>.8}(t)?this._renderSparkline(t):this._renderHistoryList(t)}_renderSparkline(t){const e=t.map(t=>Number(t.state)).filter(t=>!Number.isNaN(t));if(e.length<2)return B;const i=Math.min(...e),o=Math.max(...e),n=o-i||1,r=260/(e.length-1),a=e.map((t,e)=>`${(e*r).toFixed(1)},${(48-(t-i)/n*48).toFixed(1)}`).join(" ");return j`
      <div class="sheet-history">
        <svg class="sheet-sparkline" viewBox="0 0 ${260} ${48}" preserveAspectRatio="none">
          <polyline points=${a} fill="none" stroke="var(--primary-color)" stroke-width="2" />
        </svg>
        <div class="sheet-history-range"><span>${i}</span><span>${o}</span></div>
      </div>
    `}_renderHistoryList(t){const e=t.slice(-5).reverse();return j`
      <div class="sheet-history-list">
        ${e.map(t=>j`
            <div class="sheet-history-row">
              <span>${t.state}</span>
              <span>${new Date(t.last_changed).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</span>
            </div>
          `)}
      </div>
    `}_batteryIcon(t,e){const i=Number(t);if(Number.isNaN(i))return"mdi:battery-unknown";const o=10*Math.round(i/10),n=o<=0?"-outline":o>=100?"":`-${o}`;return e?`mdi:battery-charging${o>=100?"":n}`:`mdi:battery${n}`}static get styles(){return a`
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
        gap: 4px;
        margin-top: 14px;
      }
      .sheet-title {
        color: var(--primary-text-color);
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 10px;
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
      .sheet-history {
        margin-top: 12px;
      }
      .sheet-sparkline {
        width: 100%;
        height: 48px;
        display: block;
      }
      .sheet-history-range {
        display: flex;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 11px;
        margin-top: 2px;
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
    `}};t([lt({attribute:!1})],Hi.prototype,"hass",void 0),t([ct()],Hi.prototype,"_config",void 0),t([ct()],Hi.prototype,"_sheetEntityId",void 0),t([ct()],Hi.prototype,"_quickActionsOpen",void 0),t([ct()],Hi.prototype,"_historyPoints",void 0),Hi=t([at(gt)],Hi),window.customCards=window.customCards||[],window.customCards.push({type:gt,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{Hi as HaSmartphoneCard};
