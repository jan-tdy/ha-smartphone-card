function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const y=window,_=y.trustedTypes,w=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,S=`<${E}>`,A=document,C=()=>A.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,P="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),L=new WeakMap,X=A.createTreeWalker(A,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const z=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=k;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===k?"!--"===l[1]?a=N:void 0!==l[1]?a=O:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=o?o:k,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?M:'"'===l[3]?I:R):a===I||a===R?a=M:a===N||a===O?a=k:(a=M,o=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";r+=a===k?i+S:c>=0?(n.push(s),i.slice(0,c)+$+i.slice(c)+x+h):i+x+(-2===c?(n.push(void 0),e):h)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class F{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=z(t,e);if(this.el=F.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=X.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(x)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Q:G})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(H.test(n.tagName)){const t=n.textContent.split(x),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],C()),X.nextNode(),s.push({type:2,index:++o});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===E)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(x,t+1));)s.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){var o,r,a,s;if(e===B)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);X.currentNode=o;let r=X.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=X.nextNode(),a++)}return X.currentNode=A,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,n){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),D(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=F.createElement(Y(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new V(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new F(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new q(this.k(C()),this.k(C()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=W(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=W(this,n[i+a],e,a),s===B&&(s=this._$AH[a]),r||(r=!D(s)||s!==this._$AH[a]),s===j?t=j:t!==j&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Z=_?_.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:j)===B)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(F,q),(null!==(b=y.litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,nt;class ot extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new q(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
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
var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;const ht="ha-smartphone-card",ut="ha-smartphone-card-editor";function pt(t,e){return t.states[e.entity]}function ft(t,e){const i=pt(t,e);if(!i)return"—";const n=function(t,e){var i,n;if(void 0!==e.unit)return e.unit;const o=pt(t,e);return null!==(n=null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==n?n:""}(t,e);return n?`${i.state} ${n}`:i.state}function vt(t,e){if(!e)return!1;const i=t.states[e];return!!i&&("on"===i.state||"home"===i.state||"connected"===i.state)}var gt,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function bt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e);if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function yt(){return yt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},yt.apply(null,arguments)}function _t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function wt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(i),!0).forEach(function(e){bt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_t(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function $t(t){return $t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(t)}function xt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Et=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),St=xt(/Edge/i),At=xt(/firefox/i),Ct=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Dt=xt(/iP(ad|od|hone)/i),Tt=xt(/chrome/i)&&xt(/android/i),Pt={capture:!1,passive:!1};function kt(t,e,i){t.addEventListener(e,i,!Et&&Pt)}function Nt(t,e,i){t.removeEventListener(e,i,!Et&&Pt)}function Ot(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Mt(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Rt(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Ot(t,e):Ot(t,e))||n&&t===i)return t;if(t===i)break}while(t=Mt(t))}return null}var It,Ht=/\s+/g;function Ut(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Ht," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Ht," ")}}function Bt(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function jt(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Bt(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Lt(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function Xt(){var t=document.scrollingElement;return t||document.documentElement}function Yt(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Xt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Et))do{if(o&&o.getBoundingClientRect&&("none"!==Bt(o,"transform")||i&&"static"!==Bt(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Bt(o,"border-top-width")),s-=u.left+parseInt(Bt(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=jt(o||t),f=p&&p.a,v=p&&p.d;p&&(l=(a/=v)+(d/=v),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function zt(t,e,i){for(var n=Gt(t,!0),o=Yt(t)[e];n;){if(!(o>=Yt(n)[i]))return n;if(n===Xt())break;n=Gt(n,!1)}return!1}function Ft(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Qe.ghost&&(n||a[r]!==Qe.dragged)&&Rt(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function Wt(t,e){for(var i=t.lastElementChild;i&&(i===Qe.ghost||"none"===Bt(i,"display")||e&&!Ot(i,e));)i=i.previousElementSibling;return i||null}function Vt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Qe.clone||e&&!Ot(t,e)||i++;return i}function qt(t){var e=0,i=0,n=Xt();if(t)do{var o=jt(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function Gt(t,e){if(!t||!t.getBoundingClientRect)return Xt();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Bt(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Xt();if(n||e)return i;n=!0}}}while(i=i.parentNode);return Xt()}function Kt(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Zt(t,e){return function(){if(!It){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),It=setTimeout(function(){It=void 0},e)}}}function Jt(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Qt(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function te(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(Rt(o,e.draggable,t,!1)&&!o.animated&&o!==i){var c=Yt(o);n.left=Math.min(null!==(r=n.left)&&void 0!==r?r:1/0,c.left),n.top=Math.min(null!==(a=n.top)&&void 0!==a?a:1/0,c.top),n.right=Math.max(null!==(s=n.right)&&void 0!==s?s:-1/0,c.right),n.bottom=Math.max(null!==(l=n.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var ee="Sortable"+(new Date).getTime();function ie(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==Bt(t,"display")&&t!==Qe.ghost){e.push({target:t,rect:Yt(t)});var i=wt({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=jt(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach(function(t){var e=0,i=t.target,a=i.fromRect,s=Yt(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=jt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&Kt(l,s)&&!Kt(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),Kt(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),o?t=setTimeout(function(){"function"==typeof i&&i()},r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Bt(t,"transition",""),Bt(t,"transform","");var o=jt(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Bt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Bt(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Bt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){Bt(t,"transition",""),Bt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},n)}}}}var ne=[],oe={initializeByDefault:!0},re={mount:function(t){for(var e in oe)oe.hasOwnProperty(e)&&!(e in t)&&(t[e]=oe[e]);ne.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),ne.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";ne.forEach(function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](wt({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](wt({sortable:e},i)))})},initializePlugins:function(t,e,i,n){for(var o in ne.forEach(function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,yt(i,r.defaults)}}),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return ne.forEach(function(n){"function"==typeof n.eventProperties&&yt(i,n.eventProperties.call(e[n.pluginName],t))}),i},modifyOption:function(t,e,i){var n;return ne.forEach(function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))}),n}};var ae=["evt"],se=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=function(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(-1!==e.indexOf(n))continue;i[n]=t[n]}return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],-1===e.indexOf(i)&&{}.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}(i,ae);re.pluginEvent.bind(Qe)(t,e,wt({dragEl:ce,parentEl:de,ghostEl:he,rootEl:ue,nextEl:pe,lastDownEl:fe,cloneEl:ve,cloneHidden:ge,dragStarted:Te,putSortable:$e,activeSortable:Qe.active,originalEvent:n,oldIndex:me,oldDraggableIndex:ye,newIndex:be,newDraggableIndex:_e,hideGhostForTarget:Ge,unhideGhostForTarget:Ke,cloneNowHidden:function(){ge=!0},cloneNowShown:function(){ge=!1},dispatchSortableEvent:function(t){le({sortable:e,name:t,originalEvent:n})}},o))};function le(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[ee]){var v,g=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Et||St?(v=document.createEvent("Event")).initEvent(n,!0,!0):v=new CustomEvent(n,{bubbles:!0,cancelable:!0}),v.to=a||i,v.from=s||i,v.item=o||i,v.clone=r,v.oldIndex=l,v.newIndex=c,v.oldDraggableIndex=d,v.newDraggableIndex=h,v.originalEvent=u,v.pullMode=p?p.lastPutMode:void 0;var b=wt(wt({},f),re.getEventProperties(n,e));for(var y in b)v[y]=b[y];i&&i.dispatchEvent(v),g[m]&&g[m].call(e,v)}}(wt({putSortable:$e,cloneEl:ve,targetEl:ce,rootEl:ue,oldIndex:me,oldDraggableIndex:ye,newIndex:be,newDraggableIndex:_e},t))}var ce,de,he,ue,pe,fe,ve,ge,me,be,ye,_e,we,$e,xe,Ee,Se,Ae,Ce,De,Te,Pe,ke,Ne,Oe,Me=!1,Re=!1,Ie=[],He=!1,Ue=!1,Be=[],je=!1,Le=[],Xe="undefined"!=typeof document,Ye=Dt,ze=St||Et?"cssFloat":"float",Fe=Xe&&!Tt&&!Dt&&"draggable"in document.createElement("div"),We=function(){if(Xe){if(Et)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ve=function(t,e){var i=Bt(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=Ft(t,0,e),r=Ft(t,1,e),a=o&&Bt(o),s=r&&Bt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Yt(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Yt(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[ze]||r&&"none"===i[ze]&&l+c>n)?"vertical":"horizontal"},qe=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==$t(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},Ge=function(){!We&&he&&Bt(he,"display","none")},Ke=function(){!We&&he&&Bt(he,"display","")};Xe&&!Tt&&document.addEventListener("click",function(t){if(Re)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Re=!1,!1},!0);var Ze=function(t){if(ce){var e=function(t,e){var i;return Ie.some(function(n){var o=n[ee].options.emptyInsertThreshold;if(o&&!Wt(n)){var r=Yt(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[ee]._onDragOver(i)}}},Je=function(t){ce&&ce.parentNode[ee]._isOutsideThisEl(t.target)};function Qe(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=yt({},e),t[ee]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ve(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Qe.supportPointer&&"PointerEvent"in window&&(!Ct||Dt),emptyInsertThreshold:5};for(var n in re.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in qe(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Fe,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?kt(t,"pointerdown",this._onTapStart):(kt(t,"mousedown",this._onTapStart),kt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(kt(t,"dragover",this),kt(t,"dragenter",this)),Ie.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),yt(this,ie())}function ti(t,e,i,n,o,r,a,s){var l,c,d=t[ee],h=d.options.onMove;return!window.CustomEvent||Et||St?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Yt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function ei(t){t.draggable=!1}function ii(){je=!1}function ni(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function oi(t){return setTimeout(t,0)}function ri(t){return clearTimeout(t)}Qe.prototype={constructor:Qe,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Pe=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ce):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){Le.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&Le.push(n)}}(i),!ce&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ct||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Rt(s,n.draggable,i,!1))&&s.animated||fe===s)){if(me=Vt(s),ye=Vt(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return le({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),se("filter",e,{evt:t}),void(o&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(n){if(n=Rt(l,n.trim(),i,!1))return le({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),se("filter",e,{evt:t}),!0})))return void(o&&t.preventDefault());n.handle&&!Rt(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!ce&&i.parentNode===r){var l=Yt(i);if(ue=r,de=(ce=i).parentNode,pe=ce.nextSibling,fe=i,we=a.group,Qe.dragged=ce,xe={target:ce,clientX:(e||t).clientX,clientY:(e||t).clientY},Ce=xe.clientX-l.left,De=xe.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ce.style["will-change"]="all",n=function(){se("delayEnded",o,{evt:t}),Qe.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!At&&o.nativeDraggable&&(ce.draggable=!0),o._triggerDragStart(t,e),le({sortable:o,name:"choose",originalEvent:t}),Ut(ce,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){Lt(ce,t.trim(),ei)}),kt(s,"dragover",Ze),kt(s,"mousemove",Ze),kt(s,"touchmove",Ze),a.supportPointer?(kt(s,"pointerup",o._onDrop),!this.nativeDraggable&&kt(s,"pointercancel",o._onDrop)):(kt(s,"mouseup",o._onDrop),kt(s,"touchend",o._onDrop),kt(s,"touchcancel",o._onDrop)),At&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ce.draggable=!0),se("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(St||Et))n();else{if(Qe.eventCanceled)return void this._onDrop();a.supportPointer?(kt(s,"pointerup",o._disableDelayedDrag),kt(s,"pointercancel",o._disableDelayedDrag)):(kt(s,"mouseup",o._disableDelayedDrag),kt(s,"touchend",o._disableDelayedDrag),kt(s,"touchcancel",o._disableDelayedDrag)),kt(s,"mousemove",o._delayedDragTouchMoveHandler),kt(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&kt(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ce&&ei(ce),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Nt(t,"mouseup",this._disableDelayedDrag),Nt(t,"touchend",this._disableDelayedDrag),Nt(t,"touchcancel",this._disableDelayedDrag),Nt(t,"pointerup",this._disableDelayedDrag),Nt(t,"pointercancel",this._disableDelayedDrag),Nt(t,"mousemove",this._delayedDragTouchMoveHandler),Nt(t,"touchmove",this._delayedDragTouchMoveHandler),Nt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?kt(document,"pointermove",this._onTouchMove):kt(document,e?"touchmove":"mousemove",this._onTouchMove):(kt(ce,"dragend",this),kt(ue,"dragstart",this._onDragStart));try{document.selection?oi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Me=!1,ue&&ce){se("dragStarted",this,{evt:e}),this.nativeDraggable&&kt(document,"dragover",Je);var i=this.options;!t&&Ut(ce,i.dragClass,!1),Ut(ce,i.ghostClass,!0),Qe.active=this,t&&this._appendGhost(),le({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Ee){this._lastX=Ee.clientX,this._lastY=Ee.clientY,Ge();for(var t=document.elementFromPoint(Ee.clientX,Ee.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Ee.clientX,Ee.clientY))!==e;)e=t;if(ce.parentNode[ee]._isOutsideThisEl(t),e)do{if(e[ee]){if(e[ee]._onDragOver({clientX:Ee.clientX,clientY:Ee.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=Mt(e));Ke()}},_onTouchMove:function(t){if(xe){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=he&&jt(he,!0),a=he&&r&&r.a,s=he&&r&&r.d,l=Ye&&Oe&&qt(Oe),c=(o.clientX-xe.clientX+n.x)/(a||1)+(l?l[0]-Be[0]:0)/(a||1),d=(o.clientY-xe.clientY+n.y)/(s||1)+(l?l[1]-Be[1]:0)/(s||1);if(!Qe.active&&!Me){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(he){r?(r.e+=c-(Se||0),r.f+=d-(Ae||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Bt(he,"webkitTransform",h),Bt(he,"mozTransform",h),Bt(he,"msTransform",h),Bt(he,"transform",h),Se=c,Ae=d,Ee=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!he){var t=this.options.fallbackOnBody?document.body:ue,e=Yt(ce,!0,Ye,!0,t),i=this.options;if(Ye){for(Oe=t;"static"===Bt(Oe,"position")&&"none"===Bt(Oe,"transform")&&Oe!==document;)Oe=Oe.parentNode;Oe!==document.body&&Oe!==document.documentElement?(Oe===document&&(Oe=Xt()),e.top+=Oe.scrollTop,e.left+=Oe.scrollLeft):Oe=Xt(),Be=qt(Oe)}Ut(he=ce.cloneNode(!0),i.ghostClass,!1),Ut(he,i.fallbackClass,!0),Ut(he,i.dragClass,!0),Bt(he,"transition",""),Bt(he,"transform",""),Bt(he,"box-sizing","border-box"),Bt(he,"margin",0),Bt(he,"top",e.top),Bt(he,"left",e.left),Bt(he,"width",e.width),Bt(he,"height",e.height),Bt(he,"opacity","0.8"),Bt(he,"position",Ye?"absolute":"fixed"),Bt(he,"zIndex","100000"),Bt(he,"pointerEvents","none"),Qe.ghost=he,t.appendChild(he),Bt(he,"transform-origin",Ce/parseInt(he.style.width)*100+"% "+De/parseInt(he.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;se("dragStart",this,{evt:t}),Qe.eventCanceled?this._onDrop():(se("setupClone",this),Qe.eventCanceled||((ve=Qt(ce)).removeAttribute("id"),ve.draggable=!1,ve.style["will-change"]="",this._hideClone(),Ut(ve,this.options.chosenClass,!1),Qe.clone=ve),i.cloneId=oi(function(){se("clone",i),Qe.eventCanceled||(i.options.removeCloneOnHide||ue.insertBefore(ve,ce),i._hideClone(),le({sortable:i,name:"clone"}))}),!e&&Ut(ce,o.dragClass,!0),e?(Re=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Nt(document,"mouseup",i._onDrop),Nt(document,"touchend",i._onDrop),Nt(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,ce)),kt(document,"drop",i),Bt(ce,"transform","translateZ(0)")),Me=!0,i._dragStartId=oi(i._dragStarted.bind(i,e,t)),kt(document,"selectstart",i),Te=!0,window.getSelection().removeAllRanges(),Ct&&Bt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=Qe.active,d=we===l,h=s.sort,u=$e||c,p=this,f=!1;if(!je){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Rt(a,s.draggable,r,!0),T("dragOver"),Qe.eventCanceled)return f;if(ce.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return k(!1);if(Re=!1,c&&!s.disabled&&(d?h||(n=de!==ue):$e===this||(this.lastPutMode=we.checkPull(this,c,ce,t))&&l.checkPut(this,c,ce,t))){if(o="vertical"===this._getDirection(t,a),e=Yt(ce),T("dragOverValid"),Qe.eventCanceled)return f;if(n)return de=ue,P(),this._hideClone(),T("revert"),Qe.eventCanceled||(pe?ue.insertBefore(ce,pe):ue.appendChild(ce)),k(!0);var v=Wt(r,s.draggable);if(!v||function(t,e,i){var n=Yt(Wt(i.el,i.options.draggable)),o=te(i.el,i.options,he),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}(t,o,this)&&!v.animated){if(v===ce)return k(!1);if(v&&r===t.target&&(a=v),a&&(i=Yt(a)),!1!==ti(ue,r,ce,e,a,i,t,!!a))return P(),v&&v.nextSibling?r.insertBefore(ce,v.nextSibling):r.appendChild(ce),de=r,N(),k(!0)}else if(v&&function(t,e,i){var n=Yt(Ft(i.el,0,i.options,!0)),o=te(i.el,i.options,he),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var g=Ft(r,0,s,!0);if(g===ce)return k(!1);if(i=Yt(a=g),!1!==ti(ue,r,ce,e,a,i,t,!1))return P(),r.insertBefore(ce,g),de=r,N(),k(!0)}else if(a.parentNode===r){i=Yt(a);var m,b,y,_=ce.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(ce.animated&&ce.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",x=zt(a,"top","top")||zt(ce,"top","top"),E=x?x.scrollTop:void 0;if(Pe!==a&&(b=i[$],He=!1,Ue=!w&&s.invertSwap||_),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Ne<c*o){if(!He&&(1===ke?l>d+c*r/2:l<h-c*r/2)&&(He=!0),He)u=!0;else if(1===ke?l<d+Ne:l>h-Ne)return-ke}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return Vt(ce)<Vt(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ue,Pe===a),0!==m){var S=Vt(ce);do{S-=m,y=de.children[S]}while(y&&("none"===Bt(y,"display")||y===he))}if(0===m||y===a)return k(!1);Pe=a,ke=m;var A=a.nextElementSibling,C=!1,D=ti(ue,r,ce,e,a,i,t,C=1===m);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),je=!0,setTimeout(ii,30),P(),C&&!A?r.appendChild(ce):a.parentNode.insertBefore(ce,C?A:a),x&&Jt(x,0,E-x.scrollTop),de=ce.parentNode,void 0===b||Ue||(Ne=Math.abs(b-Yt(a)[$])),N(),k(!0)}if(r.contains(ce))return k(!1)}return!1}function T(s,l){se(s,p,wt({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:k,onMove:function(i,n){return ti(ue,r,ce,e,i,Yt(i),t,n)},changed:N},l))}function P(){T("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function k(e){return T("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Ut(ce,$e?$e.options.ghostClass:c.options.ghostClass,!1),Ut(ce,s.ghostClass,!0)),$e!==p&&p!==Qe.active?$e=p:p===Qe.active&&$e&&($e=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){T("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ce&&!ce.animated||a===r&&!a.animated)&&(Pe=null),s.dragoverBubble||t.rootEl||a===document||(ce.parentNode[ee]._isOutsideThisEl(t.target),!e&&Ze(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function N(){be=Vt(ce),_e=Vt(ce,s.draggable),le({sortable:p,name:"change",toEl:r,newIndex:be,newDraggableIndex:_e,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Nt(document,"mousemove",this._onTouchMove),Nt(document,"touchmove",this._onTouchMove),Nt(document,"pointermove",this._onTouchMove),Nt(document,"dragover",Ze),Nt(document,"mousemove",Ze),Nt(document,"touchmove",Ze)},_offUpEvents:function(){var t=this.el.ownerDocument;Nt(t,"mouseup",this._onDrop),Nt(t,"touchend",this._onDrop),Nt(t,"pointerup",this._onDrop),Nt(t,"pointercancel",this._onDrop),Nt(t,"touchcancel",this._onDrop),Nt(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;be=Vt(ce),_e=Vt(ce,i.draggable),se("drop",this,{evt:t}),de=ce&&ce.parentNode,be=Vt(ce),_e=Vt(ce,i.draggable),Qe.eventCanceled||(Me=!1,Ue=!1,He=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ri(this.cloneId),ri(this._dragStartId),this.nativeDraggable&&(Nt(document,"drop",this),Nt(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ct&&Bt(document.body,"user-select",""),Bt(ce,"transform",""),t&&(Te&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),he&&he.parentNode&&he.parentNode.removeChild(he),(ue===de||$e&&"clone"!==$e.lastPutMode)&&ve&&ve.parentNode&&ve.parentNode.removeChild(ve),ce&&(this.nativeDraggable&&Nt(ce,"dragend",this),ei(ce),ce.style["will-change"]="",Te&&!Me&&Ut(ce,$e?$e.options.ghostClass:this.options.ghostClass,!1),Ut(ce,this.options.chosenClass,!1),le({sortable:this,name:"unchoose",toEl:de,newIndex:null,newDraggableIndex:null,originalEvent:t}),ue!==de?(be>=0&&(le({rootEl:de,name:"add",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"remove",toEl:de,originalEvent:t}),le({rootEl:de,name:"sort",toEl:de,fromEl:ue,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),$e&&$e.save()):be!==me&&be>=0&&(le({sortable:this,name:"update",toEl:de,originalEvent:t}),le({sortable:this,name:"sort",toEl:de,originalEvent:t})),Qe.active&&(null!=be&&-1!==be||(be=me,_e=ye),le({sortable:this,name:"end",toEl:de,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){se("nulling",this),ue=ce=de=he=pe=ve=fe=ge=xe=Ee=Te=be=_e=me=ye=Pe=ke=$e=we=Qe.dragged=Qe.ghost=Qe.clone=Qe.active=null;var t=this.el;Le.forEach(function(e){t.contains(e)&&(e.checked=!0)}),Le.length=Se=Ae=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ce&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Rt(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||ni(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach(function(t,e){var o=n.children[e];Rt(o,this.options.draggable,n,!1)&&(i[t]=o)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Rt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=re.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&qe(i)},destroy:function(){se("destroy",this);var t=this.el;t[ee]=null,Nt(t,"mousedown",this._onTapStart),Nt(t,"touchstart",this._onTapStart),Nt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Nt(t,"dragover",this),Nt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ie.splice(Ie.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!ge){if(se("hideClone",this),Qe.eventCanceled)return;Bt(ve,"display","none"),this.options.removeCloneOnHide&&ve.parentNode&&ve.parentNode.removeChild(ve),ge=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(ge){if(se("showClone",this),Qe.eventCanceled)return;ce.parentNode!=ue||this.options.group.revertClone?pe?ue.insertBefore(ve,pe):ue.appendChild(ve):ue.insertBefore(ve,ce),this.options.group.revertClone&&this.animate(ce,ve),Bt(ve,"display",""),ge=!1}}else this._hideClone()}},Xe&&kt(document,"touchmove",function(t){(Qe.active||Me)&&t.cancelable&&t.preventDefault()}),Qe.utils={on:kt,off:Nt,css:Bt,find:Lt,is:function(t,e){return!!Rt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:Zt,closest:Rt,toggleClass:Ut,clone:Qt,index:Vt,nextTick:oi,cancelNextTick:ri,detectDirection:Ve,getChild:Ft,expando:ee},Qe.get=function(t){return t[ee]},Qe.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Qe.utils=wt(wt({},Qe.utils),t.utils)),re.mount(t)})},Qe.create=function(t,e){return new Qe(t,e)},Qe.version="1.15.7";var ai,si,li,ci,di,hi,ui=[],pi=!1;function fi(){ui.forEach(function(t){clearInterval(t.pid)}),ui=[]}function vi(){clearInterval(hi)}var gi=Zt(function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Xt(),d=!1;si!==i&&(si=i,fi(),ai=e.scroll,o=e.scrollFn,!0===ai&&(ai=Gt(i,!0)));var h=0,u=ai;do{var p=u,f=Yt(p),v=f.top,g=f.bottom,m=f.left,b=f.right,y=f.width,_=f.height,w=void 0,$=void 0,x=p.scrollWidth,E=p.scrollHeight,S=Bt(p),A=p.scrollLeft,C=p.scrollTop;p===c?(w=y<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=_<E&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=y<x&&("auto"===S.overflowX||"scroll"===S.overflowX),$=_<E&&("auto"===S.overflowY||"scroll"===S.overflowY));var D=w&&(Math.abs(b-r)<=s&&A+y<x)-(Math.abs(m-r)<=s&&!!A),T=$&&(Math.abs(g-a)<=s&&C+_<E)-(Math.abs(v-a)<=s&&!!C);if(!ui[h])for(var P=0;P<=h;P++)ui[P]||(ui[P]={});ui[h].vx==D&&ui[h].vy==T&&ui[h].el===p||(ui[h].el=p,ui[h].vx=D,ui[h].vy=T,clearInterval(ui[h].pid),0==D&&0==T||(d=!0,ui[h].pid=setInterval(function(){n&&0===this.layer&&Qe.active._onTouchMove(di);var e=ui[this.layer].vy?ui[this.layer].vy*l:0,i=ui[this.layer].vx?ui[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(Qe.dragged.parentNode[ee],i,e,t,di,ui[this.layer].el)||Jt(ui[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=Gt(u,!1)));pi=d}},30),mi=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function bi(){}function yi(){}bi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=Ft(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:mi},yt(bi,{pluginName:"revertOnSpill"}),yi.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:mi},yt(yi,{pluginName:"removeOnSpill"}),Qe.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?kt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?kt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?kt(document,"touchmove",this._handleFallbackAutoScroll):kt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Nt(document,"dragover",this._handleAutoScroll):(Nt(document,"pointermove",this._handleFallbackAutoScroll),Nt(document,"touchmove",this._handleFallbackAutoScroll),Nt(document,"mousemove",this._handleFallbackAutoScroll)),vi(),fi(),clearTimeout(It),It=void 0},nulling:function(){di=si=ai=pi=hi=li=ci=null,ui.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(di=t,e||this.options.forceAutoScrollFallback||St||Et||Ct){gi(t,this.options,r,e);var a=Gt(r,!0);!pi||hi&&n===li&&o===ci||(hi&&vi(),hi=setInterval(function(){var r=Gt(document.elementFromPoint(n,o),!0);r!==a&&(a=r,fi()),gi(t,i.options,r,e)},10),li=n,ci=o)}else{if(!this.options.bubbleScroll||Gt(r,!0)===Xt())return void fi();gi(t,this.options,Gt(r,!1),!1)}}},yt(t,{pluginName:"scroll",initializeByDefault:!0})}),Qe.mount(yi,bi);const _i=[{value:"text",label:"Text"},{value:"bar",label:"Bar (percentage)"},{value:"icon",label:"Icon only"}];let wi=class extends ot{setConfig(t){var e;this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}firstUpdated(){this._setupSortable()}updated(){this._setupSortable()}_setupSortable(){this._rowsEl&&!this._sortable&&(this._sortable=Qe.create(this._rowsEl,{handle:".drag-handle",animation:150,onEnd:t=>{if(void 0===t.oldIndex||void 0===t.newIndex||t.oldIndex===t.newIndex)return;const e=[...this._config.rows],[i]=e.splice(t.oldIndex,1);e.splice(t.newIndex,0,i),this._updateConfig({rows:e})}}))}_updateConfig(t){this._config={...this._config,...t},function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=i,t.dispatchEvent(o)}(this,"config-changed",{config:this._config})}_updateRow(t,e){const i=this._config.rows.map((i,n)=>n===t?{...i,...e}:i);this._updateConfig({rows:i})}_addRow(){const t=[...this._config.rows,{entity:""}];this._updateConfig({rows:t})}_removeRow(t){const e=this._config.rows.filter((e,i)=>i!==t);this._updateConfig({rows:e})}render(){var t,e,i,n,o,r,a,s;if(!this.hass||!this._config)return U``;const l=null!==(t=this._config.mode)&&void 0!==t?t:"list",c=null!==(e=this._config.status_bar)&&void 0!==e?e:{};return U`
      <div class="form">
        <div class="section">
          <ha-select
            label="Mode"
            .value=${l}
            @selected=${t=>this._updateConfig({mode:t.target.value})}
            @closed=${t=>t.stopPropagation()}
          >
            <mwc-list-item value="list">List</mwc-list-item>
            <mwc-list-item value="phone">Phone</mwc-list-item>
          </ha-select>

          <ha-textfield
            label="Device name"
            .value=${null!==(i=this._config.device_name)&&void 0!==i?i:""}
            @input=${t=>this._updateConfig({device_name:t.target.value})}
          ></ha-textfield>

          ${"list"===l?U`<ha-textfield
                label="Card title (optional)"
                .value=${null!==(n=this._config.title)&&void 0!==n?n:""}
                @input=${t=>this._updateConfig({title:t.target.value})}
              ></ha-textfield>`:j}
        </div>

        ${"phone"===l?U`
              <div class="section">
                <div class="section-title">Status bar</div>
                <ha-entity-picker
                  label="Battery (%)"
                  .hass=${this.hass}
                  .value=${null!==(o=c.battery_entity)&&void 0!==o?o:""}
                  @value-changed=${t=>this._updateConfig({status_bar:{...c,battery_entity:t.detail.value}})}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Charging (binary_sensor)"
                  .hass=${this.hass}
                  .value=${null!==(r=c.charging_entity)&&void 0!==r?r:""}
                  @value-changed=${t=>this._updateConfig({status_bar:{...c,charging_entity:t.detail.value}})}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Wi-Fi connection"
                  .hass=${this.hass}
                  .value=${null!==(a=c.wifi_entity)&&void 0!==a?a:""}
                  @value-changed=${t=>this._updateConfig({status_bar:{...c,wifi_entity:t.detail.value}})}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="Mobile data"
                  .hass=${this.hass}
                  .value=${null!==(s=c.mobile_data_entity)&&void 0!==s?s:""}
                  @value-changed=${t=>this._updateConfig({status_bar:{...c,mobile_data_entity:t.detail.value}})}
                ></ha-entity-picker>
              </div>
            `:j}

        <div class="section">
          <div class="section-title">
            ${"phone"===l?"Screen items":"Rows"}
          </div>
          <div class="rows">
            ${this._config.rows.map((t,e)=>this._renderRowEditor(t,e))}
          </div>
          <mwc-button @click=${this._addRow}>+ Add entity</mwc-button>
        </div>
      </div>
    `}_renderRowEditor(t,e){var i,n,o,r,a;return U`
      <div class="row-editor">
        <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
        <div class="row-editor-fields">
          <ha-entity-picker
            label="Entity"
            .hass=${this.hass}
            .value=${t.entity}
            @value-changed=${t=>this._updateRow(e,{entity:t.detail.value})}
          ></ha-entity-picker>
          <div class="row-editor-line">
            <ha-textfield
              label="Name (optional)"
              .value=${null!==(i=t.name)&&void 0!==i?i:""}
              @input=${t=>this._updateRow(e,{name:t.target.value})}
            ></ha-textfield>
            <ha-icon-picker
              label="Icon"
              .hass=${this.hass}
              .value=${null!==(n=t.icon)&&void 0!==n?n:""}
              @value-changed=${t=>this._updateRow(e,{icon:t.detail.value})}
            ></ha-icon-picker>
            <ha-select
              label="Display"
              .value=${null!==(o=t.type)&&void 0!==o?o:"text"}
              @selected=${t=>this._updateRow(e,{type:t.target.value})}
              @closed=${t=>t.stopPropagation()}
            >
              ${_i.map(t=>U`<mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>`)}
            </ha-select>
          </div>
          ${"bar"===t.type?U`<div class="row-editor-line">
                <ha-textfield
                  label="Min"
                  type="number"
                  .value=${String(null!==(r=t.min)&&void 0!==r?r:0)}
                  @input=${t=>this._updateRow(e,{min:Number(t.target.value)})}
                ></ha-textfield>
                <ha-textfield
                  label="Max"
                  type="number"
                  .value=${String(null!==(a=t.max)&&void 0!==a?a:100)}
                  @input=${t=>this._updateRow(e,{max:Number(t.target.value)})}
                ></ha-textfield>
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
      ha-select,
      ha-textfield,
      ha-entity-picker,
      ha-icon-picker {
        width: 100%;
      }
    `}};t([lt({attribute:!1})],wi.prototype,"hass",void 0),t([ct()],wi.prototype,"_config",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}(".rows")],wi.prototype,"_rowsEl",void 0),wi=t([at(ut)],wi);let $i=class extends ot{static getConfigElement(){return document.createElement(ut)}static getStubConfig(){return{mode:"list",rows:[]}}setConfig(t){var e;if(!t)throw new Error("Invalid configuration");this._config={mode:"list",...t,rows:null!==(e=t.rows)&&void 0!==e?e:[]}}getCardSize(){var t,e,i,n;const o=null!==(i=null===(e=null===(t=this._config)||void 0===t?void 0:t.rows)||void 0===e?void 0:e.length)&&void 0!==i?i:0;return"phone"===(null===(n=this._config)||void 0===n?void 0:n.mode)?6+Math.ceil(o/2):1+o}render(){return this._config&&this.hass?"phone"===this._config.mode?this._renderPhone():this._renderList():U``}_renderRow(t){const e=this.hass,i=pt(e,t),n=function(t,e){var i,n;if(e.name)return e.name;const o=pt(t,e);return null!==(n=null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.friendly_name)&&void 0!==n?n:e.entity}(e,t),o=function(t,e){var i;if(e.icon)return e.icon;const n=pt(t,e);return null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.icon}(e,t),r=function(t,e){var i,n;if(e.type)return e.type;const o=pt(t,e);if(!o)return"text";const r=!Number.isNaN(Number(o.state)),a=null===(i=o.attributes)||void 0===i?void 0:i.device_class;return!r||"battery"!==a&&"%"!==(null===(n=o.attributes)||void 0===n?void 0:n.unit_of_measurement)?"text":"bar"}(e,t);return U`
      <div class="row ${!i?"unavailable":""}">
        <ha-icon class="row-icon" .icon=${null!=o?o:"mdi:help-circle-outline"}></ha-icon>
        <div class="row-main">
          <div class="row-name">${n}</div>
          ${"bar"===r?this._renderBar(t):U`<div class="row-value">${ft(e,t)}</div>`}
        </div>
      </div>
    `}_renderBar(t){const e=function(t,e){var i,n;const o=pt(t,e);if(!o)return;const r=Number(o.state);if(Number.isNaN(r))return;const a=null!==(i=e.min)&&void 0!==i?i:0,s=null!==(n=e.max)&&void 0!==n?n:100;if(s===a)return;const l=(r-a)/(s-a)*100;return Math.max(0,Math.min(100,l))}(this.hass,t),i=ft(this.hass,t);return U`
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
    `}_renderPhone(){var t,e,i;const n=this.hass,o=null!==(t=this._config.status_bar)&&void 0!==t?t:{},r=null!==(i=null!==(e=this._config.device_name)&&void 0!==e?e:this._config.title)&&void 0!==i?i:"Smartphone",a=function(t,e){var i;if(e)return null===(i=t.states[e])||void 0===i?void 0:i.state}(n,o.battery_entity),s=vt(n,o.charging_entity),l=vt(n,o.wifi_entity),c=vt(n,o.mobile_data_entity),d=(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return U`
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
                ${o.mobile_data_entity?U`<ha-icon
                      class="status-icon ${c?"on":"off"}"
                      icon="mdi:signal-cellular-3"
                    ></ha-icon>`:j}
                ${o.wifi_entity?U`<ha-icon
                      class="status-icon ${l?"on":"off"}"
                      icon=${l?"mdi:wifi":"mdi:wifi-off"}
                    ></ha-icon>`:j}
                ${o.battery_entity?U`<span class="battery-pill ${s?"charging":""}">
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
    `}_batteryIcon(t,e){const i=Number(t);if(Number.isNaN(i))return"mdi:battery-unknown";const n=10*Math.round(i/10),o=n<=0?"outline":n>=100?"":`-${n}`;return e?`mdi:battery-charging${n>=100?"":o}`:`mdi:battery${o}`}static get styles(){return a`
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
    `}};t([lt({attribute:!1})],$i.prototype,"hass",void 0),t([ct()],$i.prototype,"_config",void 0),$i=t([at(ht)],$i),window.customCards=window.customCards||[],window.customCards.push({type:ht,name:"Smartphone Card",description:"Display Home Assistant companion app sensors as a list or a phone-like preview.",preview:!0});export{$i as HaSmartphoneCard};
