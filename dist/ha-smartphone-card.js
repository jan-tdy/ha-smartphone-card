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
var _;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,k="?"+x,A=`<${k}>`,S=document,E=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,O=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=j(1),z=j(2),U=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Q=new WeakMap,X=S.createTreeWalker(S,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,o=[];let n,a=2===e?"<svg>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===D?"!--"===l[1]?r=N:void 0!==l[1]?r=M:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:D,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?O:'"'===l[3]?R:I):r===R||r===I?r=O:r===N||r===M?r=D:(r=O,n=void 0);const h=r===O&&t[e+1].startsWith("/>")?" ":"";a+=r===D?i+A:c>=0?(o.push(s),i.slice(0,c)+w+i.slice(c)+x+h):i+x+(-2===c?(o.push(void 0),e):h)}return[Y(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0;const r=t.length-1,s=this.parts,[l,c]=F(t,e);if(this.el=q.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=X.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(x)){const i=c[a++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+w).split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?tt:"@"===e[1]?et:Z})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),X.nextNode(),s.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===k)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,o){var n,a,r,s;if(e===U)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,o)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);X.currentNode=n;let a=X.nextNode(),r=0,s=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new G(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new it(a,this,t)),this._$AV.push(e),l=o[++s]}r!==(null==l?void 0:l.index)&&(a=X.nextNode(),r++)}return X.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var n;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=q.createElement(Y(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new V(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new q(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new G(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,o,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let a=!1;if(void 0===n)t=W(this,t,e,0),a=!C(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const o=t;let r,s;for(t=n[0],r=0;r<n.length-1;r++)s=W(this,o[i+r],e,r),s===U&&(s=this._$AH[r]),a||(a=!C(s)||s!==this._$AH[r]),s===B?t=B:t!==B&&(t+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}a&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const J=y?y.emptyScript:"";class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class et extends Z{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:B)===U)return;const o=this._$AH,n=t===B&&o!==B||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==B&&(o===B||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const ot=b.litHtmlPolyfillSupport;null==ot||ot(q,G),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,at;class rt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const a=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=a._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new G(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}rt.finalized=!0,rt._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:rt});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:rt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return dt({...t,state:!0})}
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
var ut,pt,vt;function ft(t){return t.substr(0,t.indexOf("."))}null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));var gt=["closed","locked","off"],mt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var o,n=ft(e),a="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}return t.callService(a,o,{entity_id:e})}(t,e,gt.includes(t.states[e].state))};const _t="ha-smartphone-card",bt="ha-smartphone-card-editor";function yt(t,e){return t.states[e.entity]}function $t(t,e){var i,o,n,a,r;const s=t.states[e],l=null!==(o=null===(i=null==s?void 0:s.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==o?o:e,c=null===(n=t.entities)||void 0===n?void 0:n[e];if(null==c?void 0:c.name)return c.name;if(null==c?void 0:c.original_name)return c.original_name;const d=null==c?void 0:c.device_id,h=d?null===(a=t.devices)||void 0===a?void 0:a[d]:void 0,u=null!==(r=null==h?void 0:h.name_by_user)&&void 0!==r?r:null==h?void 0:h.name;if(u&&l.startsWith(u)){const t=l.slice(u.length).trim();if(t)return t}return l}function wt(t,e){var i,o;if(void 0!==e.unit)return e.unit;const n=yt(t,e);return null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:""}function xt(t,e){var i,o;const n=yt(t,e);if(!n)return;const a=Number(n.state);if(Number.isNaN(a))return;const r=null!==(i=e.min)&&void 0!==i?i:0,s=null!==(o=e.max)&&void 0!==o?o:100;if(s===r)return;const l=(a-r)/(s-r)*100;return Math.max(0,Math.min(100,l))}function kt(t,e){var i;const o=yt(t,e);if(!o)return"—";if(e.value_attribute){const t=null===(i=o.attributes)||void 0===i?void 0:i[e.value_attribute];if(null!=t&&""!==t)return String(t)}if(Nt(t,e.entity))return Ot(o.state);const n=wt(t,e);return n?`${o.state} ${n}`:o.state}function At(t,e){let i;return i="%"===e?t:t<=0&&t>=-100?t+100:t,i=Math.max(0,Math.min(100,i)),i>=75?4:i>=50?3:i>=25?2:1}const St=new Set(["switch","light","fan","input_boolean","siren","lock","cover","humidifier"]);function Et(t){return St.has(t)}function Ct(t,e){if(!e)return!1;const i=t.states[e];return!!i&&("on"===i.state||"home"===i.state||"connected"===i.state)}const Pt=new Set(["off","unavailable","unknown","not_connected","not connected","disconnected","none",""]);function Tt(t,e){if(!e)return!1;const i=t.states[e];return!!i&&!Pt.has(i.state.toLowerCase())}const Dt=new Set(["device_tracker","person"]);function Nt(t,e){var i;const o=e.split(".")[0];if(Dt.has(o))return!0;const n=null===(i=t.states[e])||void 0===i?void 0:i.attributes;return"number"==typeof(null==n?void 0:n.latitude)&&"number"==typeof(null==n?void 0:n.longitude)}function Mt(t,e,i){const o=256*Math.pow(2,i),n=(e+180)/360*o,a=Math.max(-.9999,Math.min(.9999,Math.sin(t*Math.PI/180)));return{x:n,y:(.5-Math.log((1+a)/(1-a))/(4*Math.PI))*o}}function Ot(t){const e=t.replace(/_/g," ");return e.charAt(0).toUpperCase()+e.slice(1)}const It=[{value:"com.whatsapp",label:"WhatsApp"},{value:"com.android.chrome",label:"Chrome"},{value:"com.google.android.gm",label:"Gmail"},{value:"com.google.android.apps.maps",label:"Google Maps"},{value:"com.google.android.youtube",label:"YouTube"},{value:"com.spotify.music",label:"Spotify"},{value:"com.instagram.android",label:"Instagram"},{value:"com.facebook.katana",label:"Facebook"},{value:"com.facebook.orca",label:"Messenger"},{value:"org.telegram.messenger",label:"Telegram"},{value:"org.thoughtcrime.securesms",label:"Signal"},{value:"com.twitter.android",label:"X (Twitter)"},{value:"com.android.camera2",label:"Camera"},{value:"com.android.dialer",label:"Phone"},{value:"com.android.vending",label:"Play Store"},{value:"io.homeassistant.companion.android",label:"Home Assistant"},{value:"com.netflix.mediaclient",label:"Netflix"},{value:"com.google.android.apps.photos",label:"Google Photos"},{value:"com.google.android.calendar",label:"Google Calendar"},{value:"com.google.android.deskclock",label:"Clock"}];
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Rt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ht(){return Ht=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Ht.apply(null,arguments)}function jt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Lt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(i),!0).forEach(function(e){Rt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):jt(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function zt(t){return zt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zt(t)}function Ut(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Bt=Ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Qt=Ut(/Edge/i),Xt=Ut(/firefox/i),Yt=Ut(/safari/i)&&!Ut(/chrome/i)&&!Ut(/android/i),Ft=Ut(/iP(ad|od|hone)/i),qt=Ut(/chrome/i)&&Ut(/android/i),Wt={capture:!1,passive:!1};function Vt(t,e,i){t.addEventListener(e,i,!Bt&&Wt)}function Gt(t,e,i){t.removeEventListener(e,i,!Bt&&Wt)}function Zt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Kt(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Jt(t,e,i,o){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Zt(t,e):Zt(t,e))||o&&t===i)return t;if(t===i)break}while(t=Kt(t))}return null}var te,ee=/\s+/g;function ie(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(ee," ").replace(" "+e+" "," ");t.className=(o+(i?" "+e:"")).replace(ee," ")}}function oe(t,e,i){var o=t&&t.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=i+("string"==typeof i?"":"px")}}function ne(t,e){var i="";if("string"==typeof t)i=t;else do{var o=oe(t,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function ae(t,e,i){if(t){var o=t.getElementsByTagName(e),n=0,a=o.length;if(i)for(;n<a;n++)i(o[n],n);return o}return[]}function re(){var t=document.scrollingElement;return t||document.documentElement}function se(t,e,i,o,n){if(t.getBoundingClientRect||t===window){var a,r,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==re()?(r=(a=t.getBoundingClientRect()).top,s=a.left,l=a.bottom,c=a.right,d=a.height,h=a.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(n=n||t.parentNode,!Bt))do{if(n&&n.getBoundingClientRect&&("none"!==oe(n,"transform")||i&&"static"!==oe(n,"position"))){var u=n.getBoundingClientRect();r-=u.top+parseInt(oe(n,"border-top-width")),s-=u.left+parseInt(oe(n,"border-left-width")),l=r+a.height,c=s+a.width;break}}while(n=n.parentNode);if(o&&t!==window){var p=ne(n||t),v=p&&p.a,f=p&&p.d;p&&(l=(r/=f)+(d/=f),c=(s/=v)+(h/=v))}return{top:r,left:s,bottom:l,right:c,width:h,height:d}}}function le(t,e,i){for(var o=pe(t,!0),n=se(t)[e];o;){if(!(n>=se(o)[i]))return o;if(o===re())break;o=pe(o,!1)}return!1}function ce(t,e,i,o){for(var n=0,a=0,r=t.children;a<r.length;){if("none"!==r[a].style.display&&r[a]!==mi.ghost&&(o||r[a]!==mi.dragged)&&Jt(r[a],i.draggable,t,!1)){if(n===e)return r[a];n++}a++}return null}function de(t,e){for(var i=t.lastElementChild;i&&(i===mi.ghost||"none"===oe(i,"display")||e&&!Zt(i,e));)i=i.previousElementSibling;return i||null}function he(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===mi.clone||e&&!Zt(t,e)||i++;return i}function ue(t){var e=0,i=0,o=re();if(t)do{var n=ne(t),a=n.a,r=n.d;e+=t.scrollLeft*a,i+=t.scrollTop*r}while(t!==o&&(t=t.parentNode));return[e,i]}function pe(t,e){if(!t||!t.getBoundingClientRect)return re();var i=t,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=oe(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return re();if(o||e)return i;o=!0}}}while(i=i.parentNode);return re()}function ve(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function fe(t,e){return function(){if(!te){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),te=setTimeout(function(){te=void 0},e)}}}function ge(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function me(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function _e(t,e,i){var o={};return Array.from(t.children).forEach(function(n){var a,r,s,l;if(Jt(n,e.draggable,t,!1)&&!n.animated&&n!==i){var c=se(n);o.left=Math.min(null!==(a=o.left)&&void 0!==a?a:1/0,c.left),o.top=Math.min(null!==(r=o.top)&&void 0!==r?r:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var be="Sortable"+(new Date).getTime();function ye(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==oe(t,"display")&&t!==mi.ghost){e.push({target:t,rect:se(t)});var i=Lt({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=ne(t,!0);o&&(i.top-=o.f,i.left-=o.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[i][o])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var n=!1,a=0;e.forEach(function(t){var e=0,i=t.target,r=i.fromRect,s=se(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ne(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&ve(l,s)&&!ve(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(e=function(t,e,i,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*o.animation}(d,l,c,o.options)),ve(s,r)||(i.prevFromRect=r,i.prevToRect=s,e||(e=o.options.animation),o.animate(i,d,s,e)),e&&(n=!0,a=Math.max(a,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),n?t=setTimeout(function(){"function"==typeof i&&i()},a):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,o){if(o){oe(t,"transition",""),oe(t,"transform","");var n=ne(this.el),a=n&&n.a,r=n&&n.d,s=(e.left-i.left)/(a||1),l=(e.top-i.top)/(r||1);t.animatingX=!!s,t.animatingY=!!l,oe(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),oe(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),oe(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){oe(t,"transition",""),oe(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var $e=[],we={initializeByDefault:!0},xe={mount:function(t){for(var e in we)we.hasOwnProperty(e)&&!(e in t)&&(t[e]=we[e]);$e.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),$e.push(t)},pluginEvent:function(t,e,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var n=t+"Global";$e.forEach(function(o){e[o.pluginName]&&(e[o.pluginName][n]&&e[o.pluginName][n](Lt({sortable:e},i)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](Lt({sortable:e},i)))})},initializePlugins:function(t,e,i,o){for(var n in $e.forEach(function(o){var n=o.pluginName;if(t.options[n]||o.initializeByDefault){var a=new o(t,e,t.options);a.sortable=t,a.options=t.options,t[n]=a,Ht(i,a.defaults)}}),t.options)if(t.options.hasOwnProperty(n)){var a=this.modifyOption(t,n,t.options[n]);void 0!==a&&(t.options[n]=a)}},getEventProperties:function(t,e){var i={};return $e.forEach(function(o){"function"==typeof o.eventProperties&&Ht(i,o.eventProperties.call(e[o.pluginName],t))}),i},modifyOption:function(t,e,i){var o;return $e.forEach(function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(o=n.optionListeners[e].call(t[n.pluginName],i))}),o}};var ke=["evt"],Ae=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,n=function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue;i[o]=t[o]}return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],-1===e.indexOf(i)&&{}.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(i,ke);xe.pluginEvent.bind(mi)(t,e,Lt({dragEl:Ee,parentEl:Ce,ghostEl:Pe,rootEl:Te,nextEl:De,lastDownEl:Ne,cloneEl:Me,cloneHidden:Oe,dragStarted:qe,putSortable:ze,activeSortable:mi.active,originalEvent:o,oldIndex:Ie,oldDraggableIndex:He,newIndex:Re,newDraggableIndex:je,hideGhostForTarget:pi,unhideGhostForTarget:vi,cloneNowHidden:function(){Oe=!0},cloneNowShown:function(){Oe=!1},dispatchSortableEvent:function(t){Se({sortable:e,name:t,originalEvent:o})}},n))};function Se(t){!function(t){var e=t.sortable,i=t.rootEl,o=t.name,n=t.targetEl,a=t.cloneEl,r=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||i&&i[be]){var f,g=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Bt||Qt?(f=document.createEvent("Event")).initEvent(o,!0,!0):f=new CustomEvent(o,{bubbles:!0,cancelable:!0}),f.to=r||i,f.from=s||i,f.item=n||i,f.clone=a,f.oldIndex=l,f.newIndex=c,f.oldDraggableIndex=d,f.newDraggableIndex=h,f.originalEvent=u,f.pullMode=p?p.lastPutMode:void 0;var _=Lt(Lt({},v),xe.getEventProperties(o,e));for(var b in _)f[b]=_[b];i&&i.dispatchEvent(f),g[m]&&g[m].call(e,f)}}(Lt({putSortable:ze,cloneEl:Me,targetEl:Ee,rootEl:Te,oldIndex:Ie,oldDraggableIndex:He,newIndex:Re,newDraggableIndex:je},t))}var Ee,Ce,Pe,Te,De,Ne,Me,Oe,Ie,Re,He,je,Le,ze,Ue,Be,Qe,Xe,Ye,Fe,qe,We,Ve,Ge,Ze,Ke=!1,Je=!1,ti=[],ei=!1,ii=!1,oi=[],ni=!1,ai=[],ri="undefined"!=typeof document,si=Ft,li=Qt||Bt?"cssFloat":"float",ci=ri&&!qt&&!Ft&&"draggable"in document.createElement("div"),di=function(){if(ri){if(Bt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),hi=function(t,e){var i=oe(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=ce(t,0,e),a=ce(t,1,e),r=n&&oe(n),s=a&&oe(a),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+se(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+se(a).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!a||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=o&&"none"===i[li]||a&&"none"===i[li]&&l+c>o)?"vertical":"horizontal"},ui=function(t){function e(t,i){return function(o,n,a,r){var s=o.options.group.name&&n.options.group.name&&o.options.group.name===n.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(o,n,a,r),i)(o,n,a,r);var l=(i?o:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},o=t.group;o&&"object"==zt(o)||(o={name:o}),i.name=o.name,i.checkPull=e(o.pull,!0),i.checkPut=e(o.put),i.revertClone=o.revertClone,t.group=i},pi=function(){!di&&Pe&&oe(Pe,"display","none")},vi=function(){!di&&Pe&&oe(Pe,"display","")};ri&&!qt&&document.addEventListener("click",function(t){if(Je)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Je=!1,!1},!0);var fi=function(t){if(Ee){var e=function(t,e){var i;return ti.some(function(o){var n=o[be].options.emptyInsertThreshold;if(n&&!de(o)){var a=se(o),r=t>=a.left-n&&t<=a.right+n,s=e>=a.top-n&&e<=a.bottom+n;return r&&s?i=o:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[be]._onDragOver(i)}}},gi=function(t){Ee&&Ee.parentNode[be]._isOutsideThisEl(t.target)};function mi(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Ht({},e),t[be]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return hi(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==mi.supportPointer&&"PointerEvent"in window&&(!Yt||Ft),emptyInsertThreshold:5};for(var o in xe.initializePlugins(this,t,i),i)!(o in e)&&(e[o]=i[o]);for(var n in ui(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&ci,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Vt(t,"pointerdown",this._onTapStart):(Vt(t,"mousedown",this._onTapStart),Vt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Vt(t,"dragover",this),Vt(t,"dragenter",this)),ti.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Ht(this,ye())}function _i(t,e,i,o,n,a,r,s){var l,c,d=t[be],h=d.options.onMove;return!window.CustomEvent||Bt||Qt?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=o,l.related=n||e,l.relatedRect=a||se(e),l.willInsertAfter=s,l.originalEvent=r,t.dispatchEvent(l),h&&(c=h.call(d,l,r)),c}function bi(t){t.draggable=!1}function yi(){ni=!1}function $i(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,o=0;i--;)o+=e.charCodeAt(i);return o.toString(36)}function wi(t){return setTimeout(t,0)}function xi(t){return clearTimeout(t)}mi.prototype={constructor:mi,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(We=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Ee):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,o=this.options,n=o.preventOnFilter,a=t.type,r=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(r||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter;if(function(t){ai.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var o=e[i];o.checked&&ai.push(o)}}(i),!Ee&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Yt||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Jt(s,o.draggable,i,!1))&&s.animated||Ne===s)){if(Ie=he(s),He=he(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return Se({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Ae("filter",e,{evt:t}),void(n&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=Jt(l,o.trim(),i,!1))return Se({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),Ae("filter",e,{evt:t}),!0})))return void(n&&t.preventDefault());o.handle&&!Jt(l,o.handle,i,!1)||this._prepareDragStart(t,r,s)}}},_prepareDragStart:function(t,e,i){var o,n=this,a=n.el,r=n.options,s=a.ownerDocument;if(i&&!Ee&&i.parentNode===a){var l=se(i);if(Te=a,Ce=(Ee=i).parentNode,De=Ee.nextSibling,Ne=i,Le=r.group,mi.dragged=Ee,Ue={target:Ee,clientX:(e||t).clientX,clientY:(e||t).clientY},Ye=Ue.clientX-l.left,Fe=Ue.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Ee.style["will-change"]="all",o=function(){Ae("delayEnded",n,{evt:t}),mi.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!Xt&&n.nativeDraggable&&(Ee.draggable=!0),n._triggerDragStart(t,e),Se({sortable:n,name:"choose",originalEvent:t}),ie(Ee,r.chosenClass,!0))},r.ignore.split(",").forEach(function(t){ae(Ee,t.trim(),bi)}),Vt(s,"dragover",fi),Vt(s,"mousemove",fi),Vt(s,"touchmove",fi),r.supportPointer?(Vt(s,"pointerup",n._onDrop),!this.nativeDraggable&&Vt(s,"pointercancel",n._onDrop)):(Vt(s,"mouseup",n._onDrop),Vt(s,"touchend",n._onDrop),Vt(s,"touchcancel",n._onDrop)),Xt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Ee.draggable=!0),Ae("delayStart",this,{evt:t}),!r.delay||r.delayOnTouchOnly&&!e||this.nativeDraggable&&(Qt||Bt))o();else{if(mi.eventCanceled)return void this._onDrop();r.supportPointer?(Vt(s,"pointerup",n._disableDelayedDrag),Vt(s,"pointercancel",n._disableDelayedDrag)):(Vt(s,"mouseup",n._disableDelayedDrag),Vt(s,"touchend",n._disableDelayedDrag),Vt(s,"touchcancel",n._disableDelayedDrag)),Vt(s,"mousemove",n._delayedDragTouchMoveHandler),Vt(s,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&Vt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(o,r.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Ee&&bi(Ee),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Gt(t,"mouseup",this._disableDelayedDrag),Gt(t,"touchend",this._disableDelayedDrag),Gt(t,"touchcancel",this._disableDelayedDrag),Gt(t,"pointerup",this._disableDelayedDrag),Gt(t,"pointercancel",this._disableDelayedDrag),Gt(t,"mousemove",this._delayedDragTouchMoveHandler),Gt(t,"touchmove",this._delayedDragTouchMoveHandler),Gt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Vt(document,"pointermove",this._onTouchMove):Vt(document,e?"touchmove":"mousemove",this._onTouchMove):(Vt(Ee,"dragend",this),Vt(Te,"dragstart",this._onDragStart));try{document.selection?wi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Ke=!1,Te&&Ee){Ae("dragStarted",this,{evt:e}),this.nativeDraggable&&Vt(document,"dragover",gi);var i=this.options;!t&&ie(Ee,i.dragClass,!1),ie(Ee,i.ghostClass,!0),mi.active=this,t&&this._appendGhost(),Se({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Be){this._lastX=Be.clientX,this._lastY=Be.clientY,pi();for(var t=document.elementFromPoint(Be.clientX,Be.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Be.clientX,Be.clientY))!==e;)e=t;if(Ee.parentNode[be]._isOutsideThisEl(t),e)do{if(e[be]){if(e[be]._onDragOver({clientX:Be.clientX,clientY:Be.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=Kt(e));vi()}},_onTouchMove:function(t){if(Ue){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,n=t.touches?t.touches[0]:t,a=Pe&&ne(Pe,!0),r=Pe&&a&&a.a,s=Pe&&a&&a.d,l=si&&Ze&&ue(Ze),c=(n.clientX-Ue.clientX+o.x)/(r||1)+(l?l[0]-oi[0]:0)/(r||1),d=(n.clientY-Ue.clientY+o.y)/(s||1)+(l?l[1]-oi[1]:0)/(s||1);if(!mi.active&&!Ke){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Pe){a?(a.e+=c-(Qe||0),a.f+=d-(Xe||0)):a={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");oe(Pe,"webkitTransform",h),oe(Pe,"mozTransform",h),oe(Pe,"msTransform",h),oe(Pe,"transform",h),Qe=c,Xe=d,Be=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Pe){var t=this.options.fallbackOnBody?document.body:Te,e=se(Ee,!0,si,!0,t),i=this.options;if(si){for(Ze=t;"static"===oe(Ze,"position")&&"none"===oe(Ze,"transform")&&Ze!==document;)Ze=Ze.parentNode;Ze!==document.body&&Ze!==document.documentElement?(Ze===document&&(Ze=re()),e.top+=Ze.scrollTop,e.left+=Ze.scrollLeft):Ze=re(),oi=ue(Ze)}ie(Pe=Ee.cloneNode(!0),i.ghostClass,!1),ie(Pe,i.fallbackClass,!0),ie(Pe,i.dragClass,!0),oe(Pe,"transition",""),oe(Pe,"transform",""),oe(Pe,"box-sizing","border-box"),oe(Pe,"margin",0),oe(Pe,"top",e.top),oe(Pe,"left",e.left),oe(Pe,"width",e.width),oe(Pe,"height",e.height),oe(Pe,"opacity","0.8"),oe(Pe,"position",si?"absolute":"fixed"),oe(Pe,"zIndex","100000"),oe(Pe,"pointerEvents","none"),mi.ghost=Pe,t.appendChild(Pe),oe(Pe,"transform-origin",Ye/parseInt(Pe.style.width)*100+"% "+Fe/parseInt(Pe.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,o=t.dataTransfer,n=i.options;Ae("dragStart",this,{evt:t}),mi.eventCanceled?this._onDrop():(Ae("setupClone",this),mi.eventCanceled||((Me=me(Ee)).removeAttribute("id"),Me.draggable=!1,Me.style["will-change"]="",this._hideClone(),ie(Me,this.options.chosenClass,!1),mi.clone=Me),i.cloneId=wi(function(){Ae("clone",i),mi.eventCanceled||(i.options.removeCloneOnHide||Te.insertBefore(Me,Ee),i._hideClone(),Se({sortable:i,name:"clone"}))}),!e&&ie(Ee,n.dragClass,!0),e?(Je=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Gt(document,"mouseup",i._onDrop),Gt(document,"touchend",i._onDrop),Gt(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",n.setData&&n.setData.call(i,o,Ee)),Vt(document,"drop",i),oe(Ee,"transform","translateZ(0)")),Ke=!0,i._dragStartId=wi(i._dragStarted.bind(i,e,t)),Vt(document,"selectstart",i),qe=!0,window.getSelection().removeAllRanges(),Yt&&oe(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,o,n,a=this.el,r=t.target,s=this.options,l=s.group,c=mi.active,d=Le===l,h=s.sort,u=ze||c,p=this,v=!1;if(!ni){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),r=Jt(r,s.draggable,a,!0),P("dragOver"),mi.eventCanceled)return v;if(Ee.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return D(!1);if(Je=!1,c&&!s.disabled&&(d?h||(o=Ce!==Te):ze===this||(this.lastPutMode=Le.checkPull(this,c,Ee,t))&&l.checkPut(this,c,Ee,t))){if(n="vertical"===this._getDirection(t,r),e=se(Ee),P("dragOverValid"),mi.eventCanceled)return v;if(o)return Ce=Te,T(),this._hideClone(),P("revert"),mi.eventCanceled||(De?Te.insertBefore(Ee,De):Te.appendChild(Ee)),D(!0);var f=de(a,s.draggable);if(!f||function(t,e,i){var o=se(de(i.el,i.options.draggable)),n=_e(i.el,i.options,Pe),a=10;return e?t.clientX>n.right+a||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+a||t.clientX>o.right&&t.clientY>o.top}(t,n,this)&&!f.animated){if(f===Ee)return D(!1);if(f&&a===t.target&&(r=f),r&&(i=se(r)),!1!==_i(Te,a,Ee,e,r,i,t,!!r))return T(),f&&f.nextSibling?a.insertBefore(Ee,f.nextSibling):a.appendChild(Ee),Ce=a,N(),D(!0)}else if(f&&function(t,e,i){var o=se(ce(i.el,0,i.options,!0)),n=_e(i.el,i.options,Pe),a=10;return e?t.clientX<n.left-a||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-a||t.clientY<o.bottom&&t.clientX<o.left}(t,n,this)){var g=ce(a,0,s,!0);if(g===Ee)return D(!1);if(i=se(r=g),!1!==_i(Te,a,Ee,e,r,i,t,!1))return T(),a.insertBefore(Ee,g),Ce=a,N(),D(!0)}else if(r.parentNode===a){i=se(r);var m,_,b,y=Ee.parentNode!==a,$=!function(t,e,i){var o=i?t.left:t.top,n=i?t.right:t.bottom,a=i?t.width:t.height,r=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return o===r||n===s||o+a/2===r+l/2}(Ee.animated&&Ee.toRect||e,r.animated&&r.toRect||i,n),w=n?"top":"left",x=le(r,"top","top")||le(Ee,"top","top"),k=x?x.scrollTop:void 0;if(We!==r&&(_=i[w],ei=!1,ii=!$&&s.invertSwap||y),m=function(t,e,i,o,n,a,r,s){var l=o?t.clientY:t.clientX,c=o?i.height:i.width,d=o?i.top:i.left,h=o?i.bottom:i.right,u=!1;if(!r)if(s&&Ge<c*n){if(!ei&&(1===Ve?l>d+c*a/2:l<h-c*a/2)&&(ei=!0),ei)u=!0;else if(1===Ve?l<d+Ge:l>h-Ge)return-Ve}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return he(Ee)<he(t)?1:-1}(e);if((u=u||r)&&(l<d+c*a/2||l>h-c*a/2))return l>d+c/2?1:-1;return 0}(t,r,i,n,$?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,ii,We===r),0!==m){var A=he(Ee);do{A-=m,b=Ce.children[A]}while(b&&("none"===oe(b,"display")||b===Pe))}if(0===m||b===r)return D(!1);We=r,Ve=m;var S=r.nextElementSibling,E=!1,C=_i(Te,a,Ee,e,r,i,t,E=1===m);if(!1!==C)return 1!==C&&-1!==C||(E=1===C),ni=!0,setTimeout(yi,30),T(),E&&!S?a.appendChild(Ee):r.parentNode.insertBefore(Ee,E?S:r),x&&ge(x,0,k-x.scrollTop),Ce=Ee.parentNode,void 0===_||ii||(Ge=Math.abs(_-se(r)[w])),N(),D(!0)}if(a.contains(Ee))return D(!1)}return!1}function P(s,l){Ae(s,p,Lt({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:o,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:r,completed:D,onMove:function(i,o){return _i(Te,a,Ee,e,i,se(i),t,o)},changed:N},l))}function T(){P("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return P("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(ie(Ee,ze?ze.options.ghostClass:c.options.ghostClass,!1),ie(Ee,s.ghostClass,!0)),ze!==p&&p!==mi.active?ze=p:p===mi.active&&ze&&(ze=null),u===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){P("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(r===Ee&&!Ee.animated||r===a&&!r.animated)&&(We=null),s.dragoverBubble||t.rootEl||r===document||(Ee.parentNode[be]._isOutsideThisEl(t.target),!e&&fi(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function N(){Re=he(Ee),je=he(Ee,s.draggable),Se({sortable:p,name:"change",toEl:a,newIndex:Re,newDraggableIndex:je,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Gt(document,"mousemove",this._onTouchMove),Gt(document,"touchmove",this._onTouchMove),Gt(document,"pointermove",this._onTouchMove),Gt(document,"dragover",fi),Gt(document,"mousemove",fi),Gt(document,"touchmove",fi)},_offUpEvents:function(){var t=this.el.ownerDocument;Gt(t,"mouseup",this._onDrop),Gt(t,"touchend",this._onDrop),Gt(t,"pointerup",this._onDrop),Gt(t,"pointercancel",this._onDrop),Gt(t,"touchcancel",this._onDrop),Gt(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Re=he(Ee),je=he(Ee,i.draggable),Ae("drop",this,{evt:t}),Ce=Ee&&Ee.parentNode,Re=he(Ee),je=he(Ee,i.draggable),mi.eventCanceled||(Ke=!1,ii=!1,ei=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),xi(this.cloneId),xi(this._dragStartId),this.nativeDraggable&&(Gt(document,"drop",this),Gt(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Yt&&oe(document.body,"user-select",""),oe(Ee,"transform",""),t&&(qe&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Pe&&Pe.parentNode&&Pe.parentNode.removeChild(Pe),(Te===Ce||ze&&"clone"!==ze.lastPutMode)&&Me&&Me.parentNode&&Me.parentNode.removeChild(Me),Ee&&(this.nativeDraggable&&Gt(Ee,"dragend",this),bi(Ee),Ee.style["will-change"]="",qe&&!Ke&&ie(Ee,ze?ze.options.ghostClass:this.options.ghostClass,!1),ie(Ee,this.options.chosenClass,!1),Se({sortable:this,name:"unchoose",toEl:Ce,newIndex:null,newDraggableIndex:null,originalEvent:t}),Te!==Ce?(Re>=0&&(Se({rootEl:Ce,name:"add",toEl:Ce,fromEl:Te,originalEvent:t}),Se({sortable:this,name:"remove",toEl:Ce,originalEvent:t}),Se({rootEl:Ce,name:"sort",toEl:Ce,fromEl:Te,originalEvent:t}),Se({sortable:this,name:"sort",toEl:Ce,originalEvent:t})),ze&&ze.save()):Re!==Ie&&Re>=0&&(Se({sortable:this,name:"update",toEl:Ce,originalEvent:t}),Se({sortable:this,name:"sort",toEl:Ce,originalEvent:t})),mi.active&&(null!=Re&&-1!==Re||(Re=Ie,je=He),Se({sortable:this,name:"end",toEl:Ce,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Ae("nulling",this),Te=Ee=Ce=Pe=De=Me=Ne=Oe=Ue=Be=qe=Re=je=Ie=He=We=Ve=ze=Le=mi.dragged=mi.ghost=mi.clone=mi.active=null;var t=this.el;ai.forEach(function(e){t.contains(e)&&(e.checked=!0)}),ai.length=Qe=Xe=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Ee&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,n=i.length,a=this.options;o<n;o++)Jt(t=i[o],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||$i(t));return e},sort:function(t,e){var i={},o=this.el;this.toArray().forEach(function(t,e){var n=o.children[e];Jt(n,this.options.draggable,o,!1)&&(i[t]=n)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(o.removeChild(i[t]),o.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Jt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var o=xe.modifyOption(this,t,e);i[t]=void 0!==o?o:e,"group"===t&&ui(i)},destroy:function(){Ae("destroy",this);var t=this.el;t[be]=null,Gt(t,"mousedown",this._onTapStart),Gt(t,"touchstart",this._onTapStart),Gt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Gt(t,"dragover",this),Gt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ti.splice(ti.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Oe){if(Ae("hideClone",this),mi.eventCanceled)return;oe(Me,"display","none"),this.options.removeCloneOnHide&&Me.parentNode&&Me.parentNode.removeChild(Me),Oe=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Oe){if(Ae("showClone",this),mi.eventCanceled)return;Ee.parentNode!=Te||this.options.group.revertClone?De?Te.insertBefore(Me,De):Te.appendChild(Me):Te.insertBefore(Me,Ee),this.options.group.revertClone&&this.animate(Ee,Me),oe(Me,"display",""),Oe=!1}}else this._hideClone()}},ri&&Vt(document,"touchmove",function(t){(mi.active||Ke)&&t.cancelable&&t.preventDefault()}),mi.utils={on:Vt,off:Gt,css:oe,find:ae,is:function(t,e){return!!Jt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:fe,closest:Jt,toggleClass:ie,clone:me,index:he,nextTick:wi,cancelNextTick:xi,detectDirection:hi,getChild:ce,expando:be},mi.get=function(t){return t[be]},mi.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(mi.utils=Lt(Lt({},mi.utils),t.utils)),xe.mount(t)})},mi.create=function(t,e){return new mi(t,e)},mi.version="1.15.7";var ki,Ai,Si,Ei,Ci,Pi,Ti=[],Di=!1;function Ni(){Ti.forEach(function(t){clearInterval(t.pid)}),Ti=[]}function Mi(){clearInterval(Pi)}var Oi=fe(function(t,e,i,o){if(e.scroll){var n,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=re(),d=!1;Ai!==i&&(Ai=i,Ni(),ki=e.scroll,n=e.scrollFn,!0===ki&&(ki=pe(i,!0)));var h=0,u=ki;do{var p=u,v=se(p),f=v.top,g=v.bottom,m=v.left,_=v.right,b=v.width,y=v.height,$=void 0,w=void 0,x=p.scrollWidth,k=p.scrollHeight,A=oe(p),S=p.scrollLeft,E=p.scrollTop;p===c?($=b<x&&("auto"===A.overflowX||"scroll"===A.overflowX||"visible"===A.overflowX),w=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY||"visible"===A.overflowY)):($=b<x&&("auto"===A.overflowX||"scroll"===A.overflowX),w=y<k&&("auto"===A.overflowY||"scroll"===A.overflowY));var C=$&&(Math.abs(_-a)<=s&&S+b<x)-(Math.abs(m-a)<=s&&!!S),P=w&&(Math.abs(g-r)<=s&&E+y<k)-(Math.abs(f-r)<=s&&!!E);if(!Ti[h])for(var T=0;T<=h;T++)Ti[T]||(Ti[T]={});Ti[h].vx==C&&Ti[h].vy==P&&Ti[h].el===p||(Ti[h].el=p,Ti[h].vx=C,Ti[h].vy=P,clearInterval(Ti[h].pid),0==C&&0==P||(d=!0,Ti[h].pid=setInterval(function(){o&&0===this.layer&&mi.active._onTouchMove(Ci);var e=Ti[this.layer].vy?Ti[this.layer].vy*l:0,i=Ti[this.layer].vx?Ti[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(mi.dragged.parentNode[be],i,e,t,Ci,Ti[this.layer].el)||ge(Ti[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=pe(u,!1)));Di=d}},30),Ii=function(t){var e=t.originalEvent,i=t.putSortable,o=t.dragEl,n=t.activeSortable,a=t.dispatchSortableEvent,r=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||n;r();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function Ri(){}function Hi(){}Ri.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=ce(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Ii},Ht(Ri,{pluginName:"revertOnSpill"}),Hi.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Ii},Ht(Hi,{pluginName:"removeOnSpill"}),mi.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Vt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Vt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Vt(document,"touchmove",this._handleFallbackAutoScroll):Vt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Gt(document,"dragover",this._handleAutoScroll):(Gt(document,"pointermove",this._handleFallbackAutoScroll),Gt(document,"touchmove",this._handleFallbackAutoScroll),Gt(document,"mousemove",this._handleFallbackAutoScroll)),Mi(),Ni(),clearTimeout(te),te=void 0},nulling:function(){Ci=Ai=ki=Di=Pi=Si=Ei=null,Ti.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,o=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(o,n);if(Ci=t,e||this.options.forceAutoScrollFallback||Qt||Bt||Yt){Oi(t,this.options,a,e);var r=pe(a,!0);!Di||Pi&&o===Si&&n===Ei||(Pi&&Mi(),Pi=setInterval(function(){var a=pe(document.elementFromPoint(o,n),!0);a!==r&&(r=a,Ni()),Oi(t,i.options,a,e)},10),Si=o,Ei=n)}else{if(!this.options.bubbleScroll||pe(a,!0)===re())return void Ni();Oi(t,this.options,pe(a,!1),!1)}}},Ht(t,{pluginName:"scroll",initializeByDefault:!0})}),mi.mount(Hi,Ri);const ji={select:{mode:"dropdown",options:[{value:"list",label:"List"},{value:"phone",label:"Phone"}]}},Li={select:{mode:"dropdown",options:[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"},{value:"message",label:"Send message (compose dialog)"}]}},zi={select:{mode:"dropdown",options:[{value:"service",label:"Run a service"},{value:"message",label:"Send message (compose dialog)"},{value:"toggle",label:"Toggle (switch)"},{value:"app",label:"Launch app"}]}},Ui={select:{mode:"dropdown",custom_value:!0,options:It}},Bi={entity:{}},Qi={entity:{domain:"notify"}},Xi={icon:{}},Yi={text:{}},Fi={number:{mode:"box"}},qi={device:{}},Wi={object:{}};let Vi=class extends rt{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=mi.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[i]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,i),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const i=this._config.rows.map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({rows:i})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,i)=>i!==t);this._updateConfig({rows:e})}_addRowsFromDevice(){var t,e;const i=this._deviceToAdd;if(!i)return;const o=null!==(t=this.hass.entities)&&void 0!==t?t:{},n=null!==(e=this._config.status_bar)&&void 0!==e?e:{},a=new Set([...this._config.rows.map(t=>t.entity),n.battery_entity,n.charging_entity,n.wifi_entity,n.mobile_data_entity].filter(t=>!!t)),r=Object.values(o).filter(t=>!(t.device_id!==i||t.hidden_by||t.disabled_by||t.entity_category||a.has(t.entity_id))).map(t=>({entity:t.entity_id}));r.length&&this._updateConfig({rows:[...this._config.rows,...r]}),this._deviceToAdd=void 0}_updateQuickAction(t,e){var i;const o=(null!==(i=this._config.quick_actions)&&void 0!==i?i:[]).map((i,o)=>o===t?{...i,...e}:i);this._updateConfig({quick_actions:o})}_addQuickAction(){var t;const e=[...null!==(t=this._config.quick_actions)&&void 0!==t?t:[],{service:""}];this._updateConfig({quick_actions:e})}_removeQuickAction(t){var e;const i=(null!==(e=this._config.quick_actions)&&void 0!==e?e:[]).filter((e,i)=>i!==t);this._updateConfig({quick_actions:i})}render(){var t,e,i,o,n,a,r,s,l,c;if(!this.hass||!this._config)return L``;const d=null!==(t=this._config.mode)&&void 0!==t?t:"list",h=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return L`
      <div class="form">
        <div class="section">
          <ha-selector
            .hass=${this.hass}
            .selector=${ji}
            label="Mode"
            .value=${d}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({mode:t.detail.value})}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${Yi}
            label="Device name"
            .value=${null!==(i=this._config.device_name)&&void 0!==i?i:""}
            @value-changed=${t=>{t.stopPropagation(),this._updateConfig({device_name:t.detail.value})}}
          ></ha-selector>

          ${"list"===d?L`<ha-selector
                .hass=${this.hass}
                .selector=${Yi}
                label="Card title (optional)"
                .value=${null!==(o=this._config.title)&&void 0!==o?o:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateConfig({title:t.detail.value})}}
              ></ha-selector>`:B}
        </div>

        ${"phone"===d?L`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Bi}
                  label="Battery (%)"
                  .value=${null!==(n=h.battery_entity)&&void 0!==n?n:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,battery_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Bi}
                  label="Charging (binary_sensor)"
                  .value=${null!==(a=h.charging_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,charging_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Bi}
                  label="Wi-Fi connection"
                  .value=${null!==(r=h.wifi_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>{t.stopPropagation(),this._updateConfig({status_bar:{...h,wifi_entity:t.detail.value}})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Bi}
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
              .selector=${qi}
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

        ${"phone"===d?L`
              <div class="section">
                <div class="section-title">Quick actions</div>
                <div class="rows">
                  ${(null!==(c=this._config.quick_actions)&&void 0!==c?c:[]).map((t,e)=>this._renderQuickActionEditor(t,e))}
                </div>
                <mwc-button @click=${this._addQuickAction}>+ Add quick action</mwc-button>
              </div>
            `:B}
      </div>
    `}_renderQuickActionEditor(t,e){var i,o,n,a,r,s,l,c,d;const h=null!==(i=t.type)&&void 0!==i?i:"service";return L`
      <div class="row-editor">
        <div class="row-editor-fields">
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Xi}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Yi}
              label="Name"
              .value=${null!==(n=t.name)&&void 0!==n?n:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{name:t.detail.value})}}
            ></ha-selector>
          </div>
          <ha-selector
            .hass=${this.hass}
            .selector=${zi}
            label="Action type"
            .value=${h}
            @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{type:t.detail.value})}}
          ></ha-selector>
          ${"message"===h?L`<ha-selector
                .hass=${this.hass}
                .selector=${Qi}
                label="Notify entity"
                .value=${null!==(a=t.service)&&void 0!==a?a:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
              ></ha-selector>`:"toggle"===h?this._renderToggleQuickActionFields(t,e):"app"===h?L`
                    <ha-service-picker
                      .hass=${this.hass}
                      label="Notify service (a legacy notify.* service, e.g. notify.mobile_app_sm_a346b)"
                      .value=${null!==(r=t.service)&&void 0!==r?r:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
                    ></ha-service-picker>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${Ui}
                      label="App to launch (optional – leave empty to pick the app each time you tap this action)"
                      .value=${null!==(s=t.package_name)&&void 0!==s?s:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{package_name:t.detail.value})}}
                    ></ha-selector>
                  `:L`
                  <div class="row-editor-line">
                    <ha-service-picker
                      .hass=${this.hass}
                      label="Service"
                      .value=${null!==(l=t.service)&&void 0!==l?l:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{service:t.detail.value})}}
                    ></ha-service-picker>
                    <ha-selector
                      .hass=${this.hass}
                      .selector=${Bi}
                      label="Target entity (optional)"
                      .value=${null!==(c=t.entity_id)&&void 0!==c?c:""}
                      @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{entity_id:t.detail.value})}}
                    ></ha-selector>
                  </div>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Wi}
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
    `}_renderToggleQuickActionFields(t,e){var i,o,n,a,r,s;return L`
      <ha-selector
        .hass=${this.hass}
        .selector=${Bi}
        label="Entity (optional – a toggleable entity reflects its own state; any other entity is just passed as entity_id)"
        .value=${null!==(i=t.entity_id)&&void 0!==i?i:""}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{entity_id:t.detail.value})}}
      ></ha-selector>
      <ha-selector
        .hass=${this.hass}
        .selector=${Bi}
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
        .selector=${Wi}
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
        .selector=${Wi}
        label="Service data for 'off' (optional)"
        .value=${null!==(s=t.data_off)&&void 0!==s?s:{}}
        @value-changed=${t=>{t.stopPropagation(),this._updateQuickAction(e,{data_off:t.detail.value})}}
      ></ha-selector>
    `}_renderRowEditor(t,e){var i,o,n,a,r,s;const l="message"===t.type;return L`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${l?Qi:Bi}
            label=${l?"Notify entity":"Entity"}
            .value=${t.entity}
            @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{entity:t.detail.value})}}
          ></ha-selector>
          <div class="row-editor-line">
            <ha-selector
              .hass=${this.hass}
              .selector=${Yi}
              label="Name (optional)"
              .value=${null!==(i=t.name)&&void 0!==i?i:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{name:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Xi}
              label="Icon"
              .value=${null!==(o=t.icon)&&void 0!==o?o:""}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{icon:t.detail.value})}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Li}
              label="Display"
              .value=${null!==(n=t.type)&&void 0!==n?n:"text"}
              @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{type:t.detail.value})}}
            ></ha-selector>
          </div>
          ${l?B:L`<ha-selector
                .hass=${this.hass}
                .selector=${Yi}
                label="Value attribute (optional, e.g. app_name)"
                .value=${null!==(a=t.value_attribute)&&void 0!==a?a:""}
                @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{value_attribute:t.detail.value||void 0})}}
              ></ha-selector>`}
          ${"bar"===t.type?L`<div class="row-editor-line">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Fi}
                  label="Min"
                  .value=${null!==(r=t.min)&&void 0!==r?r:0}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{min:Number(t.detail.value)})}}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${Fi}
                  label="Max"
                  .value=${null!==(s=t.max)&&void 0!==s?s:100}
                  @value-changed=${t=>{t.stopPropagation(),this._updateRow(e,{max:Number(t.detail.value)})}}
                ></ha-selector>
              </div>`:B}
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
    `}};t([dt({attribute:!1})],Vi.prototype,"hass",void 0),t([ht()],Vi.prototype,"_config",void 0),t([ht()],Vi.prototype,"_deviceToAdd",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,a=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(a.finisher=function(e){t(e,o)}),a}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}(".rows")],Vi.prototype,"_rowsEl",void 0),Vi=t([lt(bt)],Vi);const Gi={text:{}},Zi={text:{multiline:!0}},Ki={select:{mode:"dropdown",options:[{value:"normal",label:"Normal"},{value:"high",label:"High"}]}},Ji={select:{mode:"dropdown",custom_value:!0,options:It}};let to=class extends rt{constructor(){super(...arguments),this._quickActionsOpen=!1,this._localToggleStates={},this._composeTitle="",this._composeMessage="",this._composePriority="normal",this._composeChannel="",this._appPickerValue=""}static getConfigElement(){return document.createElement(bt)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,i,o;return"phone"===(null===(t=this._config)||void 0===t?void 0:t.mode)?10:1+(null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0)}getLayoutOptions(){var t,e,i,o;if("phone"===(null===(t=this._config)||void 0===t?void 0:t.mode))return{grid_columns:2,grid_rows:8,grid_min_columns:2,grid_min_rows:6};const n=null!==(o=null===(i=null===(e=this._config)||void 0===e?void 0:e.rows)||void 0===i?void 0:i.length)&&void 0!==o?o:0;return{grid_columns:4,grid_rows:Math.max(2,Math.ceil((n+1)/2)+1),grid_min_columns:3,grid_min_rows:2}}connectedCallback(){super.connectedCallback(),this._clockInterval=setInterval(()=>this.requestUpdate(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._clockInterval&&clearInterval(this._clockInterval)}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():L``}_showMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_openSheet(t){t&&(this._sheetEntityId=t,this._historyPoints=void 0,this._locationHistory=void 0,Nt(this.hass,t)?this._loadLocationHistory(t):this._loadHistory(t))}_closeSheet(){this._sheetEntityId=void 0,this._historyPoints=void 0,this._locationHistory=void 0}_toggleSheetEntity(){this._sheetEntityId&&mt(this.hass,this._sheetEntityId)}async _loadHistory(t){var e;try{const i=new Date(Date.now()-864e5).toISOString(),o=await this.hass.callApi("GET",`history/period/${i}?filter_entity_id=${t}&minimal_response`);if(this._sheetEntityId!==t)return;this._historyPoints=null!==(e=null==o?void 0:o[0])&&void 0!==e?e:[]}catch{this._sheetEntityId===t&&(this._historyPoints=[])}}async _loadLocationHistory(t){var e;try{const i=new Date(Date.now()-864e5).toISOString(),o=await this.hass.callApi("GET",`history/period/${i}?filter_entity_id=${t}`);if(this._sheetEntityId!==t)return;const n=(null!==(e=null==o?void 0:o[0])&&void 0!==e?e:[]).filter(t=>{var e,i;return"number"==typeof(null===(e=t.attributes)||void 0===e?void 0:e.latitude)&&"number"==typeof(null===(i=t.attributes)||void 0===i?void 0:i.longitude)}).map(t=>({lat:t.attributes.latitude,lon:t.attributes.longitude,state:t.state,last_changed:t.last_changed}));this._locationHistory=n}catch{this._sheetEntityId===t&&(this._locationHistory=[])}}_openQuickActions(){var t;(null===(t=this._config.quick_actions)||void 0===t?void 0:t.length)&&(this._quickActionsOpen=!0)}_closeQuickActions(){this._quickActionsOpen=!1}_runQuickAction(t,e){var i;if("message"===t.type)return void this._openCompose(t);if("toggle"===t.type)return void this._toggleQuickAction(t,e);if("app"===t.type)return void(t.package_name?(this._launchApp(t.service,t.package_name),this._closeQuickActions()):this._openAppPicker(t));const[o,n]=(null!==(i=t.service)&&void 0!==i?i:"").split(".");if(!o||!n)return;const a={...t.data};t.entity_id&&(a.entity_id=t.entity_id),this.hass.callService(o,n,a),this._closeQuickActions()}_isQuickActionOn(t,e){var i;return t.state_entity?Ct(this.hass,t.state_entity):t.entity_id&&!t.service&&Et(ft(t.entity_id))?Ct(this.hass,t.entity_id):null!==(i=this._localToggleStates[e])&&void 0!==i&&i}_toggleQuickAction(t,e){var i;const o=t.entity_id?ft(t.entity_id):void 0;if(t.entity_id&&o&&Et(o)&&!t.service)return void mt(this.hass,t.entity_id);const n=!this._isQuickActionOn(t,e),a=n?t.service:t.service_off||t.service,[r,s]=(null!=a?a:"").split(".");if(r&&s){const e={...n?t.data:null!==(i=t.data_off)&&void 0!==i?i:t.data};t.entity_id&&(e.entity_id=t.entity_id),this.hass.callService(r,s,e)}t.state_entity||(this._localToggleStates={...this._localToggleStates,[e]:n})}_openCompose(t){t.service&&(this._composeTarget={service:t.service,name:t.name},this._composeTitle="",this._composeMessage="",this._composePriority="normal",this._composeChannel="",this._quickActionsOpen=!1)}_closeCompose(){this._composeTarget=void 0}_isNotifyEntity(t){return"notify"===ft(t)&&!!this.hass.states[t]}_submitCompose(){const t=this._composeTarget;if(!t||!this._composeMessage.trim())return;const e={message:this._composeMessage};if(this._composeTitle.trim()&&(e.title=this._composeTitle.trim()),this._isNotifyEntity(t.service))this.hass.callService("notify","send_message",e,{entity_id:t.service});else{const i={};this._composeChannel.trim()&&(i.channel=this._composeChannel.trim()),"high"===this._composePriority&&(i.push={priority:"high"}),Object.keys(i).length&&(e.data=i);const[o,n]=t.service.split(".");o&&n&&this.hass.callService(o,n,e)}this._closeCompose()}_launchApp(t,e){const[i,o]=(null!=t?t:"").split(".");i&&o&&e&&this.hass.callService(i,o,{message:"command_launch_app",data:{package_name:e}})}_openAppPicker(t){t.service&&(this._appPickerTarget={service:t.service,name:t.name},this._appPickerValue="",this._quickActionsOpen=!1)}_closeAppPicker(){this._appPickerTarget=void 0}_submitAppPicker(){const t=this._appPickerTarget;t&&this._appPickerValue.trim()&&(this._launchApp(t.service,this._appPickerValue.trim()),this._closeAppPicker())}_renderRow(t,e){const i=this.hass,o=function(t,e){var i,o;if(e.type)return e.type;const n=yt(t,e);if(!n)return"text";const a=!Number.isNaN(Number(n.state)),r=null===(i=n.attributes)||void 0===i?void 0:i.device_class;return!a||"battery"!==r&&"%"!==(null===(o=n.attributes)||void 0===o?void 0:o.unit_of_measurement)?"text":"bar"}(i,t);if("message"===o)return this._renderMessageRow(t);const n=yt(i,t),a=function(t,e){return e.name?e.name:$t(t,e.entity)}(i,t),r=function(t,e){var i;if(e.icon)return e.icon;const o=yt(t,e);return null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.icon}(i,t);return L`
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
          ${"bar"===o?this._renderBar(t):L`<div class="row-value">${kt(i,t)}</div>`}
        </div>
      </div>
    `}_renderMessageRow(t){var e,i;const o=null!==(e=t.name)&&void 0!==e?e:"Send message",n=null!==(i=t.icon)&&void 0!==i?i:"mdi:message-text",a=()=>this._openCompose({service:t.entity,name:t.name,icon:t.icon});return L`
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
    `}_renderBar(t){const e=xt(this.hass,t),i=kt(this.hass,t),o=function(t,e){var i;const o=yt(t,e);if(!o)return;const n=wt(t,e),a=null===(i=o.attributes)||void 0===i?void 0:i.device_class;if("%"!==n&&"battery"!==a)return;const r=xt(t,e);return void 0!==r?r<=20?"var(--error-color, #db4437)":r<=50?"var(--warning-color, #ff9800)":"var(--success-color, #4caf50)":void 0}(this.hass,t);return L`
      <div class="bar-wrap">
        <div class="bar-track">
          <div
            class="bar-fill"
            style=${`width:${null!=e?e:0}%;${o?` background-color:${o};`:""}`}
          ></div>
        </div>
        <div class="bar-value">${i}</div>
      </div>
    `}_renderList(){var t;const e=null!==(t=this._config.title)&&void 0!==t?t:this._config.device_name;return L`
      <ha-card .header=${null!=e?e:B} class="sheet-anchor">
        <div class="card-content list-mode">
          ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._showMoreInfo(t))):L`<div class="empty">Add entities in the card settings.</div>`}
        </div>
        ${this._composeTarget?this._renderComposeSheet():B}
      </ha-card>
    `}_renderPhone(){var t,e,i,o,n;const a=this.hass,r=null!==(t=this._config.status_bar)&&void 0!==t?t:{},s=null!==(i=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==i?i:"Smartphone",l=function(t,e){var i;if(e)return null===(i=t.states[e])||void 0===i?void 0:i.state}(a,r.battery_entity),c=Number(l),d=!Number.isNaN(c)&&c<=20,h=Ct(a,r.charging_entity),u=Tt(a,r.wifi_entity),p=Tt(a,r.mobile_data_entity),v=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),f=t=>t?this._openSheet(t):void 0,g=!!(null===(o=this._config.quick_actions)||void 0===o?void 0:o.length),m=this._config.frame_color?`background:${this._config.frame_color};`:"",_=null!==(n=this._config.notch_color)&&void 0!==n?n:this._config.frame_color;return L`
      <ha-card>
        <div class="phone">
          <div class="phone-frame" style=${m}>
            <div class="phone-screen">
              <div
                class="notch ${g?"tappable":""}"
                style=${_?`background:${_};`:""}
                role=${g?"button":B}
                tabindex=${g?"0":B}
                @click=${()=>this._openQuickActions()}
                @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
              ></div>
              <div class="status-bar">
                <div class="status-left">
                  <span class="clock">${v}</span>
                </div>
                <div
                  class="status-center ${g?"tappable":""}"
                  role=${g?"button":B}
                  tabindex=${g?"0":B}
                  @click=${()=>this._openQuickActions()}
                  @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._openQuickActions()}
                >
                  ${s}
                </div>
                <div class="status-right">
                  ${r.mobile_data_entity?L`<ha-icon
                        class="status-icon ${p?"on":"off"}"
                        icon=${function(t,e){var i,o;const n=e?t.states[e]:void 0,a=n?Number(n.state):NaN;if(n&&!Number.isNaN(a)){const t=null!==(o=null===(i=n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:"";return`mdi:signal-cellular-${Math.min(3,At(a,t))}`}return"mdi:signal-cellular-3"}(a,r.mobile_data_entity)}
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.mobile_data_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.mobile_data_entity)}
                      ></ha-icon>`:B}
                  ${r.wifi_entity?L`<ha-icon
                        class="status-icon ${u?"on":"off"}"
                        icon=${function(t,e,i){var o,n;const a=e?t.states[e]:void 0,r=a?Number(a.state):NaN;if(a&&!Number.isNaN(r))return`mdi:wifi-strength-${At(r,null!==(n=null===(o=a.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"")}`;return i?"mdi:wifi":"mdi:wifi-off"}(a,r.wifi_entity,u)}
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.wifi_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.wifi_entity)}
                      ></ha-icon>`:B}
                  ${r.battery_entity?L`<span
                        class="battery-pill ${h?"charging":""} ${d&&!h?"low":""}"
                        role="button"
                        tabindex="0"
                        @click=${()=>f(r.battery_entity)}
                        @keydown=${t=>("Enter"===t.key||" "===t.key)&&f(r.battery_entity)}
                      >
                        ${h?L`<ha-icon class="status-icon" icon="mdi:lightning-bolt"></ha-icon>`:B}
                        <ha-icon class="status-icon" icon=${this._batteryIcon(l,h)}></ha-icon>
                        <span>${null!=l?l:"—"}%</span>
                      </span>`:B}
                </div>
              </div>
              <div class="screen-content">
                ${this._config.rows.length?this._config.rows.map(t=>this._renderRow(t,t=>this._openSheet(t))):L`<div class="empty">Add entities in the card settings.</div>`}
              </div>
              <div class="home-indicator"></div>
              ${this._sheetEntityId?this._renderSheet(this._sheetEntityId):B}
              ${this._quickActionsOpen?this._renderQuickActionsSheet():B}
              ${this._composeTarget?this._renderComposeSheet():B}
              ${this._appPickerTarget?this._renderAppPickerSheet():B}
            </div>
          </div>
        </div>
      </ha-card>
    `}_renderQuickActionsSheet(){var t;const e=null!==(t=this._config.quick_actions)&&void 0!==t?t:[];return L`
      <div class="sheet-backdrop" @click=${()=>this._closeQuickActions()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">Quick actions</div>
          <div class="quick-actions-list">
            ${e.map((t,e)=>{var i,o,n,a,r;const s="toggle"===t.type,l=s&&this._isQuickActionOn(t,e);return L`
                <button class="quick-action-row" @click=${()=>this._runQuickAction(t,e)}>
                  <ha-icon icon=${null!==(i=t.icon)&&void 0!==i?i:"mdi:flash"}></ha-icon>
                  <span>${null!==(r=null!==(a=null!==(n=null!==(o=t.name)&&void 0!==o?o:t.package_name)&&void 0!==n?n:t.service)&&void 0!==a?a:t.entity_id)&&void 0!==r?r:"Quick action"}</span>
                  ${s?L`<ha-switch .checked=${l} tabindex="-1"></ha-switch>`:B}
                </button>
              `})}
          </div>
        </div>
      </div>
    `}_renderComposeSheet(){var t;const e=this._composeTarget;if(!e)return L``;const i=this._isNotifyEntity(e.service);return L`
      <div class="sheet-backdrop" @click=${()=>this._closeCompose()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${null!==(t=e.name)&&void 0!==t?t:"Send message"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${Gi}
              label="Title (optional)"
              .value=${this._composeTitle}
              @value-changed=${t=>{t.stopPropagation(),this._composeTitle=t.detail.value}}
            ></ha-selector>
            <ha-selector
              .hass=${this.hass}
              .selector=${Zi}
              label="Message"
              .value=${this._composeMessage}
              @value-changed=${t=>{t.stopPropagation(),this._composeMessage=t.detail.value}}
            ></ha-selector>
            ${i?B:L`
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Ki}
                    label="Priority"
                    .value=${this._composePriority}
                    @value-changed=${t=>{t.stopPropagation(),this._composePriority=t.detail.value}}
                  ></ha-selector>
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${Gi}
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
    `}_renderAppPickerSheet(){var t;const e=this._appPickerTarget;return e?L`
      <div class="sheet-backdrop" @click=${()=>this._closeAppPicker()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-title">${null!==(t=e.name)&&void 0!==t?t:"Launch app"}</div>
          <div class="compose-form">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ji}
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
    `:L``}_renderSheet(t){var e,i,o,n;const a=this.hass,r=a.states[t],s=Et(ft(t)),l=$t(a,t),c=null!==(i=null===(e=null==r?void 0:r.attributes)||void 0===e?void 0:e.icon)&&void 0!==i?i:"mdi:help-circle-outline",d=null!==(n=null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==n?n:"",h=Nt(a,t),u=r?h?Ot(r.state):`${r.state}${d?` ${d}`:""}`:"Unavailable";return L`
      <div class="sheet-backdrop" @click=${()=>this._closeSheet()}>
        <div class="sheet" @click=${t=>t.stopPropagation()}>
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <ha-icon class="sheet-icon" .icon=${c}></ha-icon>
            <div>
              <div class="sheet-name">${l}</div>
              <div class="sheet-value">${u}</div>
            </div>
          </div>
          ${h?this._renderLocationMap(t):this._renderHistory(d)}
          <div class="sheet-actions">
            ${s?L`<button class="sheet-btn primary" @click=${()=>this._toggleSheetEntity()}>Toggle</button>`:B}
            <button
              class="sheet-btn"
              @click=${()=>{this._showMoreInfo(t),this._closeSheet()}}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    `}_renderHistory(t){const e=this._historyPoints;return void 0===e?L`<div class="sheet-history-loading">Loading 24h history…</div>`:e.length<2?B:function(t){if(!t.length)return!1;const e=t.filter(t=>""!==t.state&&!Number.isNaN(Number(t.state)));return e.length/t.length>.8}(e)?this._renderSparkline(e,t):this._renderHistoryList(e)}_renderSparkline(t,e){const i=t.map(t=>Number(t.state)).filter(t=>!Number.isNaN(t));if(i.length<2)return B;const o=Math.min(...i),n=Math.max(...i),a=(o+n)/2,r=n-o||1,s=230,l=44,c=s/(i.length-1),d=i.map((t,e)=>`${(e*c).toFixed(1)},${(l-(t-o)/r*l).toFixed(1)}`).join(" "),h=t=>`${Math.round(10*t)/10}${e?` ${e}`:""}`,u=this._formatHistoryTime(t[0].last_changed),p=this._formatHistoryTime(t[t.length-1].last_changed),v=this._formatHistoryTime(t[Math.floor(t.length/2)].last_changed);return L`
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
    `}_formatHistoryTime(t){return new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}_renderHistoryList(t){const e=t.slice(-5).reverse();return L`
      <div class="sheet-history-list">
        ${e.map(t=>L`
            <div class="sheet-history-row">
              <span>${t.state}</span>
              <span>${this._formatHistoryTime(t.last_changed)}</span>
            </div>
          `)}
      </div>
    `}_renderLocationMap(t){var e,i,o;const n=this.hass.states[t],a=Number(null===(e=null==n?void 0:n.attributes)||void 0===e?void 0:e.latitude),r=Number(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.longitude);if(Number.isNaN(a)||Number.isNaN(r))return L`<div class="sheet-history-loading">No location data.</div>`;const s=280,l=160,c=256,d=Mt(a,r,15),h=d.x-140,u=d.y-80,p=Math.pow(2,15),v=Math.floor(h/c),f=Math.floor(u/c),g=Math.floor((h+s)/c),m=Math.floor((u+l)/c),_=["a","b","c","d"],b=[];for(let t=f;t<=m;t++)for(let e=v;e<=g;e++){const i=(e%p+p)%p,o=_[(i+t)%_.length];b.push(z`
          <image
            href="https://${o}.basemaps.cartocdn.com/light_all/${15}/${i}/${t}.png"
            x=${e*c-h}
            y=${t*c-u}
            width=${c}
            height=${c}
            @error=${t=>{t.target.style.display="none"}}
          />
        `)}const y=null!==(o=this._locationHistory)&&void 0!==o?o:[],$=y.map(t=>((t,e)=>{const i=Mt(t,e,15);return{x:i.x-h,y:i.y-u}})(t.lat,t.lon)),w=$.map(t=>`${t.x.toFixed(1)},${t.y.toFixed(1)}`).join(" "),x=[...y].reverse().slice(0,6);return L`
      <div class="location-map">
        <svg class="location-map-svg" viewBox="0 0 ${s} ${l}" preserveAspectRatio="xMidYMid slice">
          <clipPath id="map-clip-${t.replace(/[^a-zA-Z0-9]/g,"")}">
            <rect x="0" y="0" width=${s} height=${l} rx="12" />
          </clipPath>
          <g clip-path="url(#map-clip-${t.replace(/[^a-zA-Z0-9]/g,"")})">
            ${b}
            ${$.length>1?z`<polyline
                    points=${w}
                    fill="none"
                    stroke="var(--primary-color)"
                    stroke-width="2"
                    stroke-opacity="0.8"
                    vector-effect="non-scaling-stroke"
                  />`:B}
            ${$.slice(0,-1).map(t=>z`<circle cx=${t.x} cy=${t.y} r="2.5" fill="var(--primary-color)" fill-opacity="0.7" />`)}
            <circle cx=${140} cy=${80} r="7" fill="var(--primary-color)" stroke="white" stroke-width="2" />
          </g>
        </svg>
        <div class="location-map-attribution">© OpenStreetMap contributors © CARTO</div>
        ${x.length?L`
              <div class="location-timeline">
                ${x.map(t=>L`
                    <div class="location-timeline-row">
                      <span>${Ot(t.state)}</span>
                      <span>${this._formatHistoryTime(t.last_changed)}</span>
                    </div>
                  `)}
              </div>
            `:B}
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
      .location-map {
        margin-top: 12px;
      }
      .location-map-svg {
        width: 100%;
        height: 160px;
        display: block;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
      }
      .location-map-attribution {
        margin-top: 4px;
        font-size: 9px;
        color: var(--secondary-text-color);
        text-align: right;
      }
      .location-timeline {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .location-timeline-row {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `}};t([dt({attribute:!1})],to.prototype,"hass",void 0),t([ht()],to.prototype,"_config",void 0),t([ht()],to.prototype,"_sheetEntityId",void 0),t([ht()],to.prototype,"_quickActionsOpen",void 0),t([ht()],to.prototype,"_localToggleStates",void 0),t([ht()],to.prototype,"_historyPoints",void 0),t([ht()],to.prototype,"_locationHistory",void 0),t([ht()],to.prototype,"_composeTarget",void 0),t([ht()],to.prototype,"_composeTitle",void 0),t([ht()],to.prototype,"_composeMessage",void 0),t([ht()],to.prototype,"_composePriority",void 0),t([ht()],to.prototype,"_composeChannel",void 0),t([ht()],to.prototype,"_appPickerTarget",void 0),t([ht()],to.prototype,"_appPickerValue",void 0),to=t([lt(_t)],to),window.customCards=window.customCards||[],window.customCards.push({type:_t,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{to as HaSmartphoneCard};
