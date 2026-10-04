function t(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new r(o,t,i)},s=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{o?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(o=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,t.appendChild(i)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=f){var i;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:p).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,S=`<${E}>`,A=document,C=()=>A.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,P="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),j=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),L=new WeakMap,X=A.createTreeWalker(A,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const z=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=k;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===k?"!--"===l[1]?a=N:void 0!==l[1]?a=O:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=n?n:k,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?M:'"'===l[3]?R:I):a===R||a===I?a=M:a===N||a===O?a=k:(a=M,n=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";r+=a===k?o+S:c>=0?(i.push(s),o.slice(0,c)+$+o.slice(c)+x+h):o+x+(-2===c?(i.push(void 0),e):h)}return[Y(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class F{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=z(t,e);if(this.el=F.createElement(l,o),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=X.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith($)||e.startsWith(x)){const o=c[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+$).split(x),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Q:G})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(H.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],C()),X.nextNode(),s.push({type:2,index:++n});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===E)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function W(t,e,o=t,i){var n,r,a,s;if(e===j)return e;let l=void 0!==i?null===(n=o._$Co)||void 0===n?void 0:n[i]:o._$Cl;const c=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Co)&&void 0!==a?a:s._$Co=[])[i]=l:o._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,i)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(o,!0);X.currentNode=n;let r=X.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(r=X.nextNode(),a++)}return X.currentNode=A,n}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class q{constructor(t,e,o,i){var n;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),D(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(Y(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(o);else{const t=new V(n,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new F(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new q(this.k(C()),this.k(C()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,o,i,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=W(this,i[o+a],e,a),s===j&&(s=this._$AH[a]),r||(r=!D(s)||s!==this._$AH[a]),s===B?t=B:t!==B&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const Z=y?y.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=W(this,t,e,0))&&void 0!==o?o:B)===j)return;const i=this._$AH,n=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==B&&(i===B||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=_.litHtmlPolyfillSupport;null==et||et(F,q),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,it;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new q(e.insertBefore(C(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}nt.finalized=!0,nt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):st(t,e)}
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
var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;const ht="ha-smartphone-card",ut="ha-smartphone-card-editor";function pt(t,e){return t.states[e.entity]}function vt(t,e){const o=pt(t,e);if(!o)return"—";const i=function(t,e){var o,i;if(void 0!==e.unit)return e.unit;const n=pt(t,e);return null!==(i=null===(o=null==n?void 0:n.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==i?i:""}(t,e);return i?`${o.state} ${i}`:o.state}function ft(t,e){if(!e)return!1;const o=t.states[e];return!!o&&("on"===o.state||"home"===o.state||"connected"===o.state)}var gt,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function bt(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _t(){return _t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)({}).hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_t.apply(null,arguments)}function yt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,i)}return o}function wt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(o),!0).forEach(function(e){bt(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):yt(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function $t(t){return $t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(t)}function xt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Et=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),St=xt(/Edge/i),At=xt(/firefox/i),Ct=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Dt=xt(/iP(ad|od|hone)/i),Tt=xt(/chrome/i)&&xt(/android/i),Pt={capture:!1,passive:!1};function kt(t,e,o){t.addEventListener(e,o,!Et&&Pt)}function Nt(t,e,o){t.removeEventListener(e,o,!Et&&Pt)}function Ot(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Mt(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function It(t,e,o,i){if(t){o=o||document;do{if(null!=e&&(">"===e[0]?t.parentNode===o&&Ot(t,e):Ot(t,e))||i&&t===o)return t;if(t===o)break}while(t=Mt(t))}return null}var Rt,Ht=/\s+/g;function Ut(t,e,o){if(t&&e)if(t.classList)t.classList[o?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(Ht," ").replace(" "+e+" "," ");t.className=(i+(o?" "+e:"")).replace(Ht," ")}}function jt(t,e,o){var i=t&&t.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(o=t.currentStyle),void 0===e?o:o[e];e in i||-1!==e.indexOf("webkit")||(e="-webkit-"+e),i[e]=o+("string"==typeof o?"":"px")}}function Bt(t,e){var o="";if("string"==typeof t)o=t;else do{var i=jt(t,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function Lt(t,e,o){if(t){var i=t.getElementsByTagName(e),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function Xt(){var t=document.scrollingElement;return t||document.documentElement}function Yt(t,e,o,i,n){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Xt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||o)&&t!==window&&(n=n||t.parentNode,!Et))do{if(n&&n.getBoundingClientRect&&("none"!==jt(n,"transform")||o&&"static"!==jt(n,"position"))){var u=n.getBoundingClientRect();a-=u.top+parseInt(jt(n,"border-top-width")),s-=u.left+parseInt(jt(n,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(n=n.parentNode);if(i&&t!==window){var p=Bt(n||t),v=p&&p.a,f=p&&p.d;p&&(l=(a/=f)+(d/=f),c=(s/=v)+(h/=v))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function zt(t,e,o){for(var i=Gt(t,!0),n=Yt(t)[e];i;){if(!(n>=Yt(i)[o]))return i;if(i===Xt())break;i=Gt(i,!1)}return!1}function Ft(t,e,o,i){for(var n=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Qe.ghost&&(i||a[r]!==Qe.dragged)&&It(a[r],o.draggable,t,!1)){if(n===e)return a[r];n++}r++}return null}function Wt(t,e){for(var o=t.lastElementChild;o&&(o===Qe.ghost||"none"===jt(o,"display")||e&&!Ot(o,e));)o=o.previousElementSibling;return o||null}function Vt(t,e){var o=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Qe.clone||e&&!Ot(t,e)||o++;return o}function qt(t){var e=0,o=0,i=Xt();if(t)do{var n=Bt(t),r=n.a,a=n.d;e+=t.scrollLeft*r,o+=t.scrollTop*a}while(t!==i&&(t=t.parentNode));return[e,o]}function Gt(t,e){if(!t||!t.getBoundingClientRect)return Xt();var o=t,i=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=jt(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return Xt();if(i||e)return o;i=!0}}}while(o=o.parentNode);return Xt()}function Kt(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Zt(t,e){return function(){if(!Rt){var o=arguments;1===o.length?t.call(this,o[0]):t.apply(this,o),Rt=setTimeout(function(){Rt=void 0},e)}}}function Jt(t,e,o){t.scrollLeft+=e,t.scrollTop+=o}function Qt(t){var e=window.Polymer,o=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):o?o(t).clone(!0)[0]:t.cloneNode(!0)}function te(t,e,o){var i={};return Array.from(t.children).forEach(function(n){var r,a,s,l;if(It(n,e.draggable,t,!1)&&!n.animated&&n!==o){var c=Yt(n);i.left=Math.min(null!==(r=i.left)&&void 0!==r?r:1/0,c.left),i.top=Math.min(null!==(a=i.top)&&void 0!==a?a:1/0,c.top),i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var ee="Sortable"+(new Date).getTime();function oe(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==jt(t,"display")&&t!==Qe.ghost){e.push({target:t,rect:Yt(t)});var o=wt({},e[e.length-1].rect);if(t.thisAnimationDuration){var i=Bt(t,!0);i&&(o.top-=i.f,o.left-=i.e)}t.fromRect=o}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var o in t)if(t.hasOwnProperty(o))for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[o][i])return Number(o);return-1}(e,{target:t}),1)},animateAll:function(o){var i=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof o&&o());var n=!1,r=0;e.forEach(function(t){var e=0,o=t.target,a=o.fromRect,s=Yt(o),l=o.prevFromRect,c=o.prevToRect,d=t.rect,h=Bt(o,!0);h&&(s.top-=h.f,s.left-=h.e),o.toRect=s,o.thisAnimationDuration&&Kt(l,s)&&!Kt(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,o,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))*i.animation}(d,l,c,i.options)),Kt(s,a)||(o.prevFromRect=a,o.prevToRect=s,e||(e=i.options.animation),i.animate(o,d,s,e)),e&&(n=!0,r=Math.max(r,e),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout(function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null},e),o.thisAnimationDuration=e)}),clearTimeout(t),n?t=setTimeout(function(){"function"==typeof o&&o()},r):"function"==typeof o&&o(),e=[]},animate:function(t,e,o,i){if(i){jt(t,"transition",""),jt(t,"transform","");var n=Bt(this.el),r=n&&n.a,a=n&&n.d,s=(e.left-o.left)/(r||1),l=(e.top-o.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,jt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),jt(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),jt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){jt(t,"transition",""),jt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},i)}}}}var ie=[],ne={initializeByDefault:!0},re={mount:function(t){for(var e in ne)ne.hasOwnProperty(e)&&!(e in t)&&(t[e]=ne[e]);ie.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),ie.push(t)},pluginEvent:function(t,e,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=t+"Global";ie.forEach(function(i){e[i.pluginName]&&(e[i.pluginName][n]&&e[i.pluginName][n](wt({sortable:e},o)),e.options[i.pluginName]&&e[i.pluginName][t]&&e[i.pluginName][t](wt({sortable:e},o)))})},initializePlugins:function(t,e,o,i){for(var n in ie.forEach(function(i){var n=i.pluginName;if(t.options[n]||i.initializeByDefault){var r=new i(t,e,t.options);r.sortable=t,r.options=t.options,t[n]=r,_t(o,r.defaults)}}),t.options)if(t.options.hasOwnProperty(n)){var r=this.modifyOption(t,n,t.options[n]);void 0!==r&&(t.options[n]=r)}},getEventProperties:function(t,e){var o={};return ie.forEach(function(i){"function"==typeof i.eventProperties&&_t(o,i.eventProperties.call(e[i.pluginName],t))}),o},modifyOption:function(t,e,o){var i;return ie.forEach(function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(i=n.optionListeners[e].call(t[n.pluginName],o))}),i}};var ae=["evt"],se=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=function(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(-1!==e.indexOf(i))continue;o[i]=t[i]}return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],-1===e.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}(o,ae);re.pluginEvent.bind(Qe)(t,e,wt({dragEl:ce,parentEl:de,ghostEl:he,rootEl:ue,nextEl:pe,lastDownEl:ve,cloneEl:fe,cloneHidden:ge,dragStarted:Te,putSortable:$e,activeSortable:Qe.active,originalEvent:i,oldIndex:me,oldDraggableIndex:_e,newIndex:be,newDraggableIndex:ye,hideGhostForTarget:Ge,unhideGhostForTarget:Ke,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(t){le({sortable:e,name:t,originalEvent:i})}},n))};function le(t){!function(t){var e=t.sortable,o=t.rootEl,i=t.name,n=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||o&&o[ee]){var f,g=e.options,m="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||Et||St?(f=document.createEvent("Event")).initEvent(i,!0,!0):f=new CustomEvent(i,{bubbles:!0,cancelable:!0}),f.to=a||o,f.from=s||o,f.item=n||o,f.clone=r,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var b=wt(wt({},v),re.getEventProperties(i,e));for(var _ in b)f[_]=b[_];o&&o.dispatchEvent(f),g[m]&&g[m].call(e,f)}}(wt({putSortable:$e,cloneEl:fe,targetEl:ce,rootEl:ue,oldIndex:me,oldDraggableIndex:_e,newIndex:be,newDraggableIndex:ye},t))}var ce,de,he,ue,pe,ve,fe,ge,me,be,_e,ye,we,$e,xe,Ee,Se,Ae,Ce,De,Te,Pe,ke,Ne,Oe,Me=!1,Ie=!1,Re=[],He=!1,Ue=!1,je=[],Be=!1,Le=[],Xe="undefined"!=typeof document,Ye=Dt,ze=St||Et?"cssFloat":"float",Fe=Xe&&!Tt&&!Dt&&"draggable"in document.createElement("div"),We=function(){if(Xe){if(Et)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ve=function(t,e){var o=jt(t),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=Ft(t,0,e),r=Ft(t,1,e),a=n&&jt(n),s=r&&jt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Yt(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Yt(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===o[ze]||r&&"none"===o[ze]&&l+c>i)?"vertical":"horizontal"},qe=function(t){function e(t,o){return function(i,n,r,a){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==t&&(o||s))return!0;if(null==t||!1===t)return!1;if(o&&"clone"===t)return t;if("function"==typeof t)return e(t(i,n,r,a),o)(i,n,r,a);var l=(o?i:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var o={},i=t.group;i&&"object"==$t(i)||(i={name:i}),o.name=i.name,o.checkPull=e(i.pull,!0),o.checkPut=e(i.put),o.revertClone=i.revertClone,t.group=o},Ge=function(){!We&&he&&jt(he,"display","none")},Ke=function(){!We&&he&&jt(he,"display","")};Xe&&!Tt&&document.addEventListener("click",function(t){if(Ie)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ie=!1,!1},!0);var Ze=function(t){if(ce){var e=function(t,e){var o;return Re.some(function(i){var n=i[ee].options.emptyInsertThreshold;if(n&&!Wt(i)){var r=Yt(i),a=t>=r.left-n&&t<=r.right+n,s=e>=r.top-n&&e<=r.bottom+n;return a&&s?o=i:void 0}}),o}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[ee]._onDragOver(o)}}},Je=function(t){ce&&ce.parentNode[ee]._isOutsideThisEl(t.target)};function Qe(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=_t({},e),t[ee]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ve(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Qe.supportPointer&&"PointerEvent"in window&&(!Ct||Dt),emptyInsertThreshold:5};for(var i in re.initializePlugins(this,t,o),o)!(i in e)&&(e[i]=o[i]);for(var n in qe(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&Fe,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?kt(t,"pointerdown",this._onTapStart):(kt(t,"mousedown",this._onTapStart),kt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(kt(t,"dragover",this),kt(t,"dragenter",this)),Re.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),_t(this,oe())}function to(t,e,o,i,n,r,a,s){var l,c,d=t[ee],h=d.options.onMove;return!window.CustomEvent||Et||St?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=o,l.draggedRect=i,l.related=n||e,l.relatedRect=r||Yt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function eo(t){t.draggable=!1}function oo(){Be=!1}function io(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,o=e.length,i=0;o--;)i+=e.charCodeAt(o);return i.toString(36)}function no(t){return setTimeout(t,0)}function ro(t){return clearTimeout(t)}Qe.prototype={constructor:Qe,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Pe=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ce):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,o=this.el,i=this.options,n=i.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=i.filter;if(function(t){Le.length=0;var e=t.getElementsByTagName("input"),o=e.length;for(;o--;){var i=e[o];i.checked&&Le.push(i)}}(o),!ce&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ct||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=It(s,i.draggable,o,!1))&&s.animated||ve===s)){if(me=Vt(s),_e=Vt(s,i.draggable),"function"==typeof c){if(c.call(this,t,s,this))return le({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),se("filter",e,{evt:t}),void(n&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(i){if(i=It(l,i.trim(),o,!1))return le({sortable:e,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),se("filter",e,{evt:t}),!0})))return void(n&&t.preventDefault());i.handle&&!It(l,i.handle,o,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,o){var i,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(o&&!ce&&o.parentNode===r){var l=Yt(o);if(ue=r,de=(ce=o).parentNode,pe=ce.nextSibling,ve=o,we=a.group,Qe.dragged=ce,xe={target:ce,clientX:(e||t).clientX,clientY:(e||t).clientY},Ce=xe.clientX-l.left,De=xe.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ce.style["will-change"]="all",i=function(){se("delayEnded",n,{evt:t}),Qe.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!At&&n.nativeDraggable&&(ce.draggable=!0),n._triggerDragStart(t,e),le({sortable:n,name:"choose",originalEvent:t}),Ut(ce,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){Lt(ce,t.trim(),eo)}),kt(s,"dragover",Ze),kt(s,"mousemove",Ze),kt(s,"touchmove",Ze),a.supportPointer?(kt(s,"pointerup",n._onDrop),!this.nativeDraggable&&kt(s,"pointercancel",n._onDrop)):(kt(s,"mouseup",n._onDrop),kt(s,"touchend",n._onDrop),kt(s,"touchcancel",n._onDrop)),At&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ce.draggable=!0),se("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(St||Et))i();else{if(Qe.eventCanceled)return void this._onDrop();a.supportPointer?(kt(s,"pointerup",n._disableDelayedDrag),kt(s,"pointercancel",n._disableDelayedDrag)):(kt(s,"mouseup",n._disableDelayedDrag),kt(s,"touchend",n._disableDelayedDrag),kt(s,"touchcancel",n._disableDelayedDrag)),kt(s,"mousemove",n._delayedDragTouchMoveHandler),kt(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&kt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ce&&eo(ce),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Nt(t,"mouseup",this._disableDelayedDrag),Nt(t,"touchend",this._disableDelayedDrag),Nt(t,"touchcancel",this._disableDelayedDrag),Nt(t,"pointerup",this._disableDelayedDrag),Nt(t,"pointercancel",this._disableDelayedDrag),Nt(t,"mousemove",this._delayedDragTouchMoveHandler),Nt(t,"touchmove",this._delayedDragTouchMoveHandler),Nt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?kt(document,"pointermove",this._onTouchMove):kt(document,e?"touchmove":"mousemove",this._onTouchMove):(kt(ce,"dragend",this),kt(ue,"dragstart",this._onDragStart));try{document.selection?no(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Me=!1,ue&&ce){se("dragStarted",this,{evt:e}),this.nativeDraggable&&kt(document,"dragover",Je);var o=this.options;!t&&Ut(ce,o.dragClass,!1),Ut(ce,o.ghostClass,!0),Qe.active=this,t&&this._appendGhost(),le({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Ee){this._lastX=Ee.clientX,this._lastY=Ee.clientY,Ge();for(var t=document.elementFromPoint(Ee.clientX,Ee.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Ee.clientX,Ee.clientY))!==e;)e=t;if(ce.parentNode[ee]._isOutsideThisEl(t),e)do{if(e[ee]){if(e[ee]._onDragOver({clientX:Ee.clientX,clientY:Ee.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=Mt(e));Ke()}},_onTouchMove:function(t){if(xe){var e=this.options,o=e.fallbackTolerance,i=e.fallbackOffset,n=t.touches?t.touches[0]:t,r=he&&Bt(he,!0),a=he&&r&&r.a,s=he&&r&&r.d,l=Ye&&Oe&&qt(Oe),c=(n.clientX-xe.clientX+i.x)/(a||1)+(l?l[0]-je[0]:0)/(a||1),d=(n.clientY-xe.clientY+i.y)/(s||1)+(l?l[1]-je[1]:0)/(s||1);if(!Qe.active&&!Me){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(t,!0)}if(he){r?(r.e+=c-(Se||0),r.f+=d-(Ae||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");jt(he,"webkitTransform",h),jt(he,"mozTransform",h),jt(he,"msTransform",h),jt(he,"transform",h),Se=c,Ae=d,Ee=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!he){var t=this.options.fallbackOnBody?document.body:ue,e=Yt(ce,!0,Ye,!0,t),o=this.options;if(Ye){for(Oe=t;"static"===jt(Oe,"position")&&"none"===jt(Oe,"transform")&&Oe!==document;)Oe=Oe.parentNode;Oe!==document.body&&Oe!==document.documentElement?(Oe===document&&(Oe=Xt()),e.top+=Oe.scrollTop,e.left+=Oe.scrollLeft):Oe=Xt(),je=qt(Oe)}Ut(he=ce.cloneNode(!0),o.ghostClass,!1),Ut(he,o.fallbackClass,!0),Ut(he,o.dragClass,!0),jt(he,"transition",""),jt(he,"transform",""),jt(he,"box-sizing","border-box"),jt(he,"margin",0),jt(he,"top",e.top),jt(he,"left",e.left),jt(he,"width",e.width),jt(he,"height",e.height),jt(he,"opacity","0.8"),jt(he,"position",Ye?"absolute":"fixed"),jt(he,"zIndex","100000"),jt(he,"pointerEvents","none"),Qe.ghost=he,t.appendChild(he),jt(he,"transform-origin",Ce/parseInt(he.style.width)*100+"% "+De/parseInt(he.style.height)*100+"%")}},_onDragStart:function(t,e){var o=this,i=t.dataTransfer,n=o.options;se("dragStart",this,{evt:t}),Qe.eventCanceled?this._onDrop():(se("setupClone",this),Qe.eventCanceled||((fe=Qt(ce)).removeAttribute("id"),fe.draggable=!1,fe.style["will-change"]="",this._hideClone(),Ut(fe,this.options.chosenClass,!1),Qe.clone=fe),o.cloneId=no(function(){se("clone",o),Qe.eventCanceled||(o.options.removeCloneOnHide||ue.insertBefore(fe,ce),o._hideClone(),le({sortable:o,name:"clone"}))}),!e&&Ut(ce,n.dragClass,!0),e?(Ie=!0,o._loopId=setInterval(o._emulateDragOver,50)):(Nt(document,"mouseup",o._onDrop),Nt(document,"touchend",o._onDrop),Nt(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,ce)),kt(document,"drop",o),jt(ce,"transform","translateZ(0)")),Me=!0,o._dragStartId=no(o._dragStarted.bind(o,e,t)),kt(document,"selectstart",o),Te=!0,window.getSelection().removeAllRanges(),Ct&&jt(document.body,"user-select","none"))},_onDragOver:function(t){var e,o,i,n,r=this.el,a=t.target,s=this.options,l=s.group,c=Qe.active,d=we===l,h=s.sort,u=$e||c,p=this,v=!1;if(!Be){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=It(a,s.draggable,r,!0),T("dragOver"),Qe.eventCanceled)return v;if(ce.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return k(!1);if(Ie=!1,c&&!s.disabled&&(d?h||(i=de!==ue):$e===this||(this.lastPutMode=we.checkPull(this,c,ce,t))&&l.checkPut(this,c,ce,t))){if(n="vertical"===this._getDirection(t,a),e=Yt(ce),T("dragOverValid"),Qe.eventCanceled)return v;if(i)return de=ue,P(),this._hideClone(),T("revert"),Qe.eventCanceled||(pe?ue.insertBefore(ce,pe):ue.appendChild(ce)),k(!0);var f=Wt(r,s.draggable);if(!f||function(t,e,o){var i=Yt(Wt(o.el,o.options.draggable)),n=te(o.el,o.options,he),r=10;return e?t.clientX>n.right+r||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>n.bottom+r||t.clientX>i.right&&t.clientY>i.top}(t,n,this)&&!f.animated){if(f===ce)return k(!1);if(f&&r===t.target&&(a=f),a&&(o=Yt(a)),!1!==to(ue,r,ce,e,a,o,t,!!a))return P(),f&&f.nextSibling?r.insertBefore(ce,f.nextSibling):r.appendChild(ce),de=r,N(),k(!0)}else if(f&&function(t,e,o){var i=Yt(Ft(o.el,0,o.options,!0)),n=te(o.el,o.options,he),r=10;return e?t.clientX<n.left-r||t.clientY<i.top&&t.clientX<i.right:t.clientY<n.top-r||t.clientY<i.bottom&&t.clientX<i.left}(t,n,this)){var g=Ft(r,0,s,!0);if(g===ce)return k(!1);if(o=Yt(a=g),!1!==to(ue,r,ce,e,a,o,t,!1))return P(),r.insertBefore(ce,g),de=r,N(),k(!0)}else if(a.parentNode===r){o=Yt(a);var m,b,_,y=ce.parentNode!==r,w=!function(t,e,o){var i=o?t.left:t.top,n=o?t.right:t.bottom,r=o?t.width:t.height,a=o?e.left:e.top,s=o?e.right:e.bottom,l=o?e.width:e.height;return i===a||n===s||i+r/2===a+l/2}(ce.animated&&ce.toRect||e,a.animated&&a.toRect||o,n),$=n?"top":"left",x=zt(a,"top","top")||zt(ce,"top","top"),E=x?x.scrollTop:void 0;if(Pe!==a&&(b=o[$],He=!1,Ue=!w&&s.invertSwap||y),m=function(t,e,o,i,n,r,a,s){var l=i?t.clientY:t.clientX,c=i?o.height:o.width,d=i?o.top:o.left,h=i?o.bottom:o.right,u=!1;if(!a)if(s&&Ne<c*n){if(!He&&(1===ke?l>d+c*r/2:l<h-c*r/2)&&(He=!0),He)u=!0;else if(1===ke?l<d+Ne:l>h-Ne)return-ke}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return Vt(ce)<Vt(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,o,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ue,Pe===a),0!==m){var S=Vt(ce);do{S-=m,_=de.children[S]}while(_&&("none"===jt(_,"display")||_===he))}if(0===m||_===a)return k(!1);Pe=a,ke=m;var A=a.nextElementSibling,C=!1,D=to(ue,r,ce,e,a,o,t,C=1===m);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),Be=!0,setTimeout(oo,30),P(),C&&!A?r.appendChild(ce):a.parentNode.insertBefore(ce,C?A:a),x&&Jt(x,0,E-x.scrollTop),de=ce.parentNode,void 0===b||Ue||(Ne=Math.abs(b-Yt(a)[$])),N(),k(!0)}if(r.contains(ce))return k(!1)}return!1}function T(s,l){se(s,p,wt({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:i,dragRect:e,targetRect:o,canSort:h,fromSortable:u,target:a,completed:k,onMove:function(o,i){return to(ue,r,ce,e,o,Yt(o),t,i)},changed:N},l))}function P(){T("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function k(e){return T("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Ut(ce,$e?$e.options.ghostClass:c.options.ghostClass,!1),Ut(ce,s.ghostClass,!0)),$e!==p&&p!==Qe.active?$e=p:p===Qe.active&&$e&&($e=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){T("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ce&&!ce.animated||a===r&&!a.animated)&&(Pe=null),s.dragoverBubble||t.rootEl||a===document||(ce.parentNode[ee]._isOutsideThisEl(t.target),!e&&Ze(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function N(){be=Vt(ce),ye=Vt(ce,s.draggable),le({sortable:p,name:"change",toEl:r,newIndex:be,newDraggableIndex:ye,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Nt(document,"mousemove",this._onTouchMove),Nt(document,"touchmove",this._onTouchMove),Nt(document,"pointermove",this._onTouchMove),Nt(document,"dragover",Ze),Nt(document,"mousemove",Ze),Nt(document,"touchmove",Ze)},_offUpEvents:function(){var t=this.el.ownerDocument;Nt(t,"mouseup",this._onDrop),Nt(t,"touchend",this._onDrop),Nt(t,"pointerup",this._onDrop),Nt(t,"pointercancel",this._onDrop),Nt(t,"touchcancel",this._onDrop),Nt(document,"selectstart",this)},_onDrop:function(t){var e=this.el,o=this.options;be=Vt(ce),ye=Vt(ce,o.draggable),se("drop",this,{evt:t}),de=ce&&ce.parentNode,be=Vt(ce),ye=Vt(ce,o.draggable),Qe.eventCanceled||(Me=!1,Ue=!1,He=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ro(this.cloneId),ro(this._dragStartId),this.nativeDraggable&&(Nt(document,"drop",this),Nt(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ct&&jt(document.body,"user-select",""),jt(ce,"transform",""),t&&(Te&&(t.cancelable&&t.preventDefault(),!o.dropBubble&&t.stopPropagation()),he&&he.parentNode&&he.parentNode.removeChild(he),(ue===de||$e&&"clone"!==$e.lastPutMode)&&fe&&fe.parentNode&&fe.parentNode.removeChild(fe),ce&&(this.nativeDraggable&&Nt(ce,"dragend",this),eo(ce),ce.style["will-change"]="",Te&&!Me&&Ut(ce,$e?$e.options.ghostClass:this.options.ghostClass,!1),Ut(ce,this.options.chosenClass,!1),le({sortable:this,name:"unchoose",toEl:de,newIndex:null,newDraggableIndex:null,originalEvent:t}),ue!==de?(be>=0&&(le({rootEl:de,name:"add",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"remove",toEl:de,originalEvent:t}),le({rootEl:de,name:"sort",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),$e&&$e.save()):be!==me&&be>=0&&(le({sortable:this,name:"update",toEl:de,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),Qe.active&&(null!=be&&-1!==be||(be=me,ye=_e),le({sortable:this,name:"end",toEl:de,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){se("nulling",this),ue=ce=de=he=pe=fe=ve=ge=xe=Ee=Te=be=ye=me=_e=Pe=ke=$e=we=Qe.dragged=Qe.ghost=Qe.clone=Qe.active=null;var t=this.el;Le.forEach(function(e){t.contains(e)&&(e.checked=!0)}),Le.length=Se=Ae=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ce&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],o=this.el.children,i=0,n=o.length,r=this.options;i<n;i++)It(t=o[i],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||io(t));return e},sort:function(t,e){var o={},i=this.el;this.toArray().forEach(function(t,e){var n=i.children[e];It(n,this.options.draggable,i,!1)&&(o[t]=n)},this),e&&this.captureAnimationState(),t.forEach(function(t){o[t]&&(i.removeChild(o[t]),i.appendChild(o[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return It(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var o=this.options;if(void 0===e)return o[t];var i=re.modifyOption(this,t,e);o[t]=void 0!==i?i:e,"group"===t&&qe(o)},destroy:function(){se("destroy",this);var t=this.el;t[ee]=null,Nt(t,"mousedown",this._onTapStart),Nt(t,"touchstart",this._onTapStart),Nt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Nt(t,"dragover",this),Nt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Re.splice(Re.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!ge){if(se("hideClone",this),Qe.eventCanceled)return;jt(fe,"display","none"),this.options.removeCloneOnHide&&fe.parentNode&&fe.parentNode.removeChild(fe),ge=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(ge){if(se("showClone",this),Qe.eventCanceled)return;ce.parentNode!=ue||this.options.group.revertClone?pe?ue.insertBefore(fe,pe):ue.appendChild(fe):ue.insertBefore(fe,ce),this.options.group.revertClone&&this.animate(ce,fe),jt(fe,"display",""),ge=!1}}else this._hideClone()}},Xe&&kt(document,"touchmove",function(t){(Qe.active||Me)&&t.cancelable&&t.preventDefault()}),Qe.utils={on:kt,off:Nt,css:jt,find:Lt,is:function(t,e){return!!It(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t},throttle:Zt,closest:It,toggleClass:Ut,clone:Qt,index:Vt,nextTick:no,cancelNextTick:ro,detectDirection:Ve,getChild:Ft,expando:ee},Qe.get=function(t){return t[ee]},Qe.mount=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Qe.utils=wt(wt({},Qe.utils),t.utils)),re.mount(t)})},Qe.create=function(t,e){return new Qe(t,e)},Qe.version="1.15.7";var ao,so,lo,co,ho,uo,po=[],vo=!1;function fo(){po.forEach(function(t){clearInterval(t.pid)}),po=[]}function go(){clearInterval(uo)}var mo=Zt(function(t,e,o,i){if(e.scroll){var n,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Xt(),d=!1;so!==o&&(so=o,fo(),ao=e.scroll,n=e.scrollFn,!0===ao&&(ao=Gt(o,!0)));var h=0,u=ao;do{var p=u,v=Yt(p),f=v.top,g=v.bottom,m=v.left,b=v.right,_=v.width,y=v.height,w=void 0,$=void 0,x=p.scrollWidth,E=p.scrollHeight,S=jt(p),A=p.scrollLeft,C=p.scrollTop;p===c?(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<x&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<E&&("auto"===S.overflowY||"scroll"===S.overflowY));var D=w&&(Math.abs(b-r)<=s&&A+_<x)-(Math.abs(m-r)<=s&&!!A),T=$&&(Math.abs(g-a)<=s&&C+y<E)-(Math.abs(f-a)<=s&&!!C);if(!po[h])for(var P=0;P<=h;P++)po[P]||(po[P]={});po[h].vx==D&&po[h].vy==T&&po[h].el===p||(po[h].el=p,po[h].vx=D,po[h].vy=T,clearInterval(po[h].pid),0==D&&0==T||(d=!0,po[h].pid=setInterval(function(){i&&0===this.layer&&Qe.active._onTouchMove(ho);var e=po[this.layer].vy?po[this.layer].vy*l:0,o=po[this.layer].vx?po[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(Qe.dragged.parentNode[ee],o,e,t,ho,po[this.layer].el)||Jt(po[this.layer].el,o,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=Gt(u,!1)));vo=d}},30),bo=function(t){var e=t.originalEvent,o=t.putSortable,i=t.dragEl,n=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=o||n;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function _o(){}function yo(){}_o.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,o=t.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=Ft(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(e,i):this.sortable.el.appendChild(e),this.sortable.animateAll(),o&&o.animateAll()},drop:bo},_t(_o,{pluginName:"revertOnSpill"}),yo.prototype={onSpill:function(t){var e=t.dragEl,o=t.putSortable||this.sortable;o.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),o.animateAll()},drop:bo},_t(yo,{pluginName:"removeOnSpill"}),Qe.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?kt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?kt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?kt(document,"touchmove",this._handleFallbackAutoScroll):kt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Nt(document,"dragover",this._handleAutoScroll):(Nt(document,"pointermove",this._handleFallbackAutoScroll),Nt(document,"touchmove",this._handleFallbackAutoScroll),Nt(document,"mousemove",this._handleFallbackAutoScroll)),go(),fo(),clearTimeout(Rt),Rt=void 0},nulling:function(){ho=so=ao=vo=uo=lo=co=null,po.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var o=this,i=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(i,n);if(ho=t,e||this.options.forceAutoScrollFallback||St||Et||Ct){mo(t,this.options,r,e);var a=Gt(r,!0);!vo||uo&&i===lo&&n===co||(uo&&go(),uo=setInterval(function(){var r=Gt(document.elementFromPoint(i,n),!0);r!==a&&(a=r,fo()),mo(t,o.options,r,e)},10),lo=i,co=n)}else{if(!this.options.bubbleScroll||Gt(r,!0)===Xt())return void fo();mo(t,this.options,Gt(r,!1),!1)}}},_t(t,{pluginName:"scroll",initializeByDefault:!0})}),Qe.mount(yo,_o);const wo={select:{mode:"dropdown",options:[{value:"list",label:"List"},{value:"phone",label:"Phone"}]}},$o={select:{mode:"dropdown",options:[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"}]}},xo={entity:{}},Eo={icon:{}},So={text:{}},Ao={number:{mode:"box"}},Co={device:{}};let Do=class extends nt{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=Qe.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[o]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,o),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,o,i){i=i||{},o=null==o?{}:o;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=o,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const o=this._config.rows.map((o,i)=>i===t?{...o,...e}:o);this._updateConfig({rows:o})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,o)=>o!==t);this._updateConfig({rows:e})}_addRowsFromDevice(){var t;const e=this._deviceToAdd;if(!e)return;const o=null!==(t=this.hass.entities)&&void 0!==t?t:{},i=new Set(this._config.rows.map(t=>t.entity)),n=Object.values(o).filter(t=>t.device_id===e&&!t.hidden_by&&!t.disabled_by&&!i.has(t.entity_id)).map(t=>({entity:t.entity_id}));n.length&&this._updateConfig({rows:[...this._config.rows,...n]}),this._deviceToAdd=void 0}render(){var t,e,o,i,n,r,a,s,l;if(!this.hass||!this._config)return U``;const c=null!==(t=this._config.mode)&&void 0!==t?t:"list",d=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return U`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${wo}
            label="Mode"
            .value=${c}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({mode:t.detail.value})}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${So}
            label="Device name"
            .value=${null!==(o=this._config.device_name)&&void 0!==o?o:""}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({device_name:t.detail.value})}}
          ></ha-selector>

          ${"list"===c?U`<ha-selector
                .hass=${this.hass}
                .selector=${So}
                label="Card title (optional)"
                .value=${null!==(i=this._config.title)&&void 0!==i?i:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateConfig({title:t.detail.value})}}
              ></ha-selector>`:B}
        </div>

        ${"phone"===c?U`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${xo}
                  label="Battery (%)"
                  .value=${null!==(n=d.battery_entity)&&void 0!==n?n:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,battery_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${xo}
                  label="Charging (binary_sensor)"
                  .value=${null!==(r=d.charging_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,charging_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${xo}
                  label="Wi-Fi connection"
                  .value=${null!==(a=d.wifi_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,wifi_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${xo}
                  label="Mobile data"
                  .value=${null!==(s=d.mobile_data_entity)&&void 0!==s?s:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...d,mobile_data_entity:t.detail.value}})}}
                ></ha-selector>
              </div>
            `:B}

        <div class="section">
          <div class="section-title">Add entities from a device</div>
          <div class="device-add">
            <ha-selector
              .hass=${this.hass}
              .selector=${Co}
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
    `}_renderRowEditor(t,e){var o,i,n,r,a;return U`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${xo}
            label="Entity"
            .value=${t.entity}
            @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{entity:t.detail.value})}}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${So}
              label="Name (optional)"
              .value=${null!==(o=t.name)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{name:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Eo}
              label="Icon"
              .value=${null!==(i=t.icon)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${$o}
              label="Display"
              .value=${null!==(n=t.type)&&void 0!==n?n:"text"}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{type:t.detail.value})}}
            ></ha-selector>
          </div>
          ${"bar"===t.type?U`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ao}
                  label="Min"
                  .value=${null!==(r=t.min)&&void 0!==r?r:0}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{min:Number(t.detail.value)})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Ao}
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
      ha-selector {
        display: block;
        width: 100%;
      }
    `}};t([lt({attribute:!1})],Do.prototype,"hass",void 0),t([ct()],Do.prototype,"_config",void 0),t([ct()],Do.prototype,"_deviceToAdd",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}})({descriptor:e=>{const o={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};return o}})}(".rows")],Do.prototype,"_rowsEl",void 0),Do=t([at(ut)],Do);let To=class extends nt{static getConfigElement(){return document.createElement(ut)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,o,i;return"phone"===(null===(t=this._config)||void 0===t?void 0:t.mode)?10:1+(null!==(i=null===(o=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===o?void 0:o.length)&&void 0!==i?i:0)}connectedCallback(){super.connectedCallback(),this._clockInterval=setInterval(()=>this.requestUpdate(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._clockInterval&&clearInterval(this._clockInterval)}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():U``}_showMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_renderRow(t){const e=this.hass,o=pt(e,t),i=function(t,e){var o,i,n,r,a;if(e.name)return e.name;const s=pt(t,e),l=null!==(i=null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==i?i:e.entity,c=null===(n=t.entities)||void 0===n?void 0:n[e.entity];if(null==c?void 0:c.name)return c.name;if(null==c?void 0:c.original_name)return c.original_name;const d=null==c?void 0:c.device_id,h=d?null===(r=t.devices)||void 0===r?void 0:r[d]:void 0,u=null!==(a=null==h?void 0:h.name_by_user)&&void 0!==a?a:null==h?void 0:h.name;if(u&&l.startsWith(u)){const t=l.slice(u.length).trim();if(t)return t}return l}(e,t),n=function(t,e){var o;if(e.icon)return e.icon;const i=pt(t,e);return null===(o=null==i?void 0:i.attributes)||void 0===o?void 0:o.icon}(e,t),r=function(t,e){var o,i;if(e.type)return e.type;const n=pt(t,e);if(!n)return"text";const r=!Number.isNaN(Number(n.state)),a=null===(o=n.attributes)||void 0===o?void 0:o.device_class;return!r||"battery"!==a&&"%"!==(null===(i=n.attributes)||void 0===i?void 0:i.unit_of_measurement)?"text":"bar"}(e,t);return U`
      <div
        class="row ${!o?"unavailable":""}"
        role="button"
        tabindex="0"
        @click=${()=>this._showMoreInfo(t.entity)}
        @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._showMoreInfo(t.entity))}}
      >
        <span class="row-icon-wrap">
          <ha-icon class="row-icon" .icon=${null!=n?n:"mdi:help-circle-outline"}></ha-icon>
        </span>
        <div class="row-main">
          <div class="row-name">${i}</div>
          ${"bar"===r?this._renderBar(t):U`<div class="row-value">${vt(e,t)}</div>`}
        </div>
      </div>
    `}_renderBar(t){const e=function(t,e){var o,i;const n=pt(t,e);if(!n)return;const r=Number(n.state);if(Number.isNaN(r))return;const a=null!==(o=e.min)&&void 0!==o?o:0,s=null!==(i=e.max)&&void 0!==i?i:100;if(s===a)return;const l=(r-a)/(s-a)*100;return Math.max(0,Math.min(100,l))}(this.hass,t),o=vt(this.hass,t);return U`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style="width:${null!=e?e:0}%"
          ></div>
        </div>
        <div class="bar-value">${o}</div>
      </div>
    `}_renderList(){var t;const e=null!==(t=this._config.title)&&void 0!==t?t:this._config.device_name;return U`
      <ha-card .header=${null!=e?e:B}>
        <div class="card-content list-mode">
          ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t)):U`<div class="empty">Add entities in the card settings.</div>`}
        </div>
      </ha-card>
    `}_renderPhone(){var t,e,o;const i=this.hass,n=null!==(t=this._config.status_bar)&&void 0!==t?t:{},r=null!==(o=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==o?o:"Smartphone",a=function(t,e){var o;if(e)return null===(o=t.states[e])||void 0===o?void 0:o.state}(i,n.battery_entity),s=ft(i,n.charging_entity),l=ft(i,n.wifi_entity),c=ft(i,n.mobile_data_entity),d=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return U`
      <ha-card>
        <div class="phone">
          <div class="phone-frame">
            <div class="phone-screen">
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
                      ></ha-icon>`:B}
                  ${n.wifi_entity?U`<ha-icon
                        class="status-icon ${l?"on":"off"}"
                        icon=${l?"mdi:wifi":"mdi:wifi-off"}
                      ></ha-icon>`:B}
                  ${n.battery_entity?U`<span class="battery-pill ${s?"charging":""}">
                        ${s?U`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`:B}
                        <ha-icon class="status-icon" icon=${this._batteryIcon(a,s)}></ha-icon>
                        <span>${null!=a?a:"—"}%</span>
                      </span>`:B}
                </div>
              </div>
              <div class="screen-content">
                ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t)):U`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
            </div>
          </div>
        </div>
      </ha-card>
    `}_batteryIcon(t,e){const o=Number(t);if(Number.isNaN(o))return"mdi:battery-unknown";const i=10*Math.round(o/10),n=i<=0?"-outline":i>=100?"":`-${i}`;return e?`mdi:battery-charging${i>=100?"":n}`:`mdi:battery${n}`}static get styles(){return a`
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
    `}};t([lt({attribute:!1})],To.prototype,"hass",void 0),t([ct()],To.prototype,"_config",void 0),To=t([at(ht)],To),window.customCards=window.customCards||[],window.customCards.push({type:ht,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{To as HaSmartphoneCard};
