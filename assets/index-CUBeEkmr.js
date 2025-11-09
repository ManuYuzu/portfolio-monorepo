(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const R=globalThis,F=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Y=new WeakMap;let le=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Y.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(t,e))}return e}toString(){return this.cssText}};const ye=i=>new le(typeof i=="string"?i:i+"",void 0,K),T=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1]),i[0]);return new le(t,i,K)},ve=(i,e)=>{if(F)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),r=R.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},ee=F?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ye(t)})(i):i;const{is:be,defineProperty:Ae,getOwnPropertyDescriptor:we,getOwnPropertyNames:Ee,getOwnPropertySymbols:Se,getPrototypeOf:Pe}=Object,k=globalThis,te=k.trustedTypes,Ce=te?te.emptyScript:"",xe=k.reactiveElementPolyfillSupport,P=(i,e)=>i,D={toAttribute(i,e){switch(e){case Boolean:i=i?Ce:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},J=(i,e)=>!be(i,e),se={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:n}=we(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){const h=r?.call(this);n?.call(this,o),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,s=[...Ee(t),...Se(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ee(r))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:D).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:D;this._$Em=r;const h=o.fromAttribute(t,n.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const r=this.constructor,n=this[e];if(s??=r.getPropertyOptions(e),!((s.hasChanged??J)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s){const{wrapped:o}=n,h=this[r];o!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,n,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,xe?.({ReactiveElement:b}),(k.reactiveElementVersions??=[]).push("2.1.1");const Z=globalThis,z=Z.trustedTypes,re=z?z.createPolicy("lit-html",{createHTML:i=>i}):void 0,ce="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+m,Oe=`<${de}>`,y=document,C=()=>y.createComment(""),x=i=>i===null||typeof i!="object"&&typeof i!="function",G=Array.isArray,Ue=i=>G(i)||typeof i?.[Symbol.iterator]=="function",q=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,ne=/>/g,_=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,ae=/"/g,ue=/^(?:script|style|textarea|title)$/i,Te=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=Te(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),he=new WeakMap,g=y.createTreeWalker(y,129);function pe(i,e){if(!G(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Me=(i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=S;for(let h=0;h<t;h++){const a=i[h];let c,u,l=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===S?u[1]==="!--"?o=ie:u[1]!==void 0?o=ne:u[2]!==void 0?(ue.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=r??S,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_:u[3]==='"'?ae:oe):o===ae||o===oe?o=_:o===ie||o===ne?o=S:(o=_,r=void 0);const f=o===_&&i[h+1].startsWith("/>")?" ":"";n+=o===S?a+Oe:l>=0?(s.push(c),a.slice(0,l)+ce+a.slice(l)+m+f):a+m+(l===-2?h:f)}return[pe(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class O{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[c,u]=Me(e,t);if(this.el=O.createElement(c,s),g.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=g.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(ce)){const p=u[o++],f=r.getAttribute(l).split(m),H=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:H[2],strings:f,ctor:H[1]==="."?He:H[1]==="?"?Re:H[1]==="@"?De:B}),r.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:n}),r.removeAttribute(l));if(ue.test(r.tagName)){const l=r.textContent.split(m),p=l.length-1;if(p>0){r.textContent=z?z.emptyScript:"";for(let f=0;f<p;f++)r.append(l[f],C()),g.nextNode(),a.push({type:2,index:++n});r.append(l[p],C())}}}else if(r.nodeType===8)if(r.data===de)a.push({type:2,index:n});else{let l=-1;for(;(l=r.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(e,t){const s=y.createElement("template");return s.innerHTML=e,s}}function E(i,e,t=i,s){if(e===w)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl;const n=x(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,s)),e}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??y).importNode(t,!0);g.currentNode=r;let n=g.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new M(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new ze(n,this,e)),this._$AV.push(c),a=s[++h]}o!==a?.index&&(n=g.nextNode(),o++)}return g.currentNode=y,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),x(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ue(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=O.createElement(pe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{const n=new Ne(r,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new O(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new M(this.O(C()),this.O(C()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,r){const n=this.strings;let o=!1;if(n===void 0)e=E(this,e,t,0),o=!x(e)||e!==this._$AH&&e!==w,o&&(this._$AH=e);else{const h=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=E(this,h[s+a],t,a),c===w&&(c=this._$AH[a]),o||=!x(c)||c!==this._$AH[a],c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class He extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Re extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class De extends B{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===w)return;const s=this._$AH,r=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const Le=Z.litHtmlPolyfillSupport;Le?.(O,M),(Z.litHtmlVersions??=[]).push("3.3.1");const je=(i,e,t)=>{const s=t?.renderBefore??e;let r=s._$litPart$;if(r===void 0){const n=t?.renderBefore??null;s._$litPart$=r=new M(e.insertBefore(C(),n),n,void 0,t??{})}return r._$AI(i),r};const Q=globalThis;class $ extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=je(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});const ke=Q.litElementPolyfillSupport;ke?.({LitElement:$});(Q.litElementVersions??=[]).push("4.2.1");const N=i=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};const Be={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J},Ie=(i=Be,e,t)=>{const{kind:s,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),s==="accessor"){const{name:o}=t;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,i)},init(h){return h!==void 0&&this.C(o,void 0,i,h),h}}}if(s==="setter"){const{name:o}=t;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function I(i){return(e,t)=>typeof t=="object"?Ie(i,e,t):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}var $e=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ve=(i,e,t)=>e in i?$e(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,X=(i,e,t,s)=>{for(var r=s>1?void 0:s?qe(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&$e(e,t,r),r},We=(i,e,t)=>Ve(i,e+"",t);function Fe({message:i,count:e,onClick:t}){return A` <button @click=${t}>${i}: ${e}</button> `}function Ke(){return T`
    button {
      background-color: #0078d4;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
  `}let U=class extends ${constructor(){super(),this.message="Button",this.count=0}_handleClick=()=>{this.count++};_renderButton(){return Fe({message:this.message,count:this.count,onClick:this._handleClick})}render(){return this._renderButton()}};We(U,"styles",Ke());X([I({type:String})],U.prototype,"message",2);X([I({type:Number})],U.prototype,"count",2);U=X([N("button-element")],U);var fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ze=(i,e,t)=>e in i?fe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,me=(i,e,t,s)=>{for(var r=s>1?void 0:s?Je(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&fe(e,t,r),r},Ge=(i,e,t)=>Ze(i,e+"",t);let L=class extends ${constructor(){super(),this.message="¡I'm being build!"}render(){return A`
      <h2>Sample Element</h2>
      <p>${this.message}</p>
      <button-element message="Click Me"></button-element>
    `}};Ge(L,"styles",T`
    :host {
      display: block;
      padding: 1rem;
      background: #aaaaaa;
      font-family: sans-serif;
    }
    h2 {
      color: #0078d4;
      margin: 0 0 0.5rem 0;
    }
  `);me([I()],L.prototype,"message",2);L=me([N("sample-element")],L);var _e=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=(i,e,t)=>e in i?_e(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ge=(i,e,t,s)=>{for(var r=s>1?void 0:s?Qe(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&_e(e,t,r),r},Ye=(i,e,t)=>Xe(i,e+"",t);let j=class extends ${constructor(){super(),this.url=""}render(){return et({url:this.url})}};Ye(j,"styles",tt());ge([I({type:String})],j.prototype,"url",2);j=ge([N("icon-element")],j);function et({url:i}){const e=`--icon: url('${i}');`;return A`<i style="${e}"></i>`}function tt(){return T`
    :host {
      display: inline-block;
      width: 2em;
      height: 2em;
      color: inherit;
    }

    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        mask: var(--icon) center / 1em no-repeat;
        background-color: currentColor;

        transition: background-color 0.3s ease;
      }
    }
  `}var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,it=(i,e,t)=>e in i?st(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,nt=(i,e,t,s)=>{for(var r=s>1?void 0:s?rt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(r)||r);return r},ot=(i,e,t)=>it(i,e+"",t);let V=class extends ${icons=[{name:"browser",url:"./icons/sun_and_moon.svg"},{name:"light",url:"./icons/sun.svg"},{name:"dark",url:"./icons/moon.svg"}];constructor(){super()}selected="browser";_onThemeChange=i=>{const e=i.target.value;this.selected=e,document.querySelector("#app")?.setAttribute("data-theme",e),this.requestUpdate(),i.target.blur()};render(){return lt(this,this.icons.length),at({icons:this.icons,selected:this.selected,onThemeChange:this._onThemeChange})}};ot(V,"styles",ht());V=nt([N("switcher-element")],V);function at({icons:i,selected:e,onThemeChange:t}){return A`
    <div yz-switcher role="radiogroup" aria-label="Theme selector">
      ${i.map(({name:s,url:r})=>A`
          <label for="radio-${s}">
            <input
              id="radio-${s}"
              name="switch"
              type="radio"
              value="${s}"
              ?checked=${e===s}
              @change=${t}
              role="radio"
              aria-checked="${e===s}"
              aria-label="${s} theme"
            />
            <icon-element url="${r}"></icon-element>
          </label>
        `)}
    </div>
  `}function ht(){return T`
    :host {
      --switcher-max-height: 2rem;
    }

    [yz-switcher] {
      background-color: light-dark(#1d1d1d, #f5f5f5);
      color: light-dark(#dddddd, #1d1d1d);
      padding: 0.5rem;
      border-radius: 1rem;
      position: fixed;
      z-index: 1001;
      top: 1rem;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      overflow: hidden;

      transition: height 0.3s ease;

      > label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
        position: relative;

        > input {
          opacity: 0;
          position: absolute;
          width: 1px;
          height: 1px;
        }

        &:has(input:focus-visible + i) {
          outline: 2px solid #3caaff;
          outline-offset: 2px;
        }

        &:has(input:checked) {
          background-color: light-dark(#ee5656, #8cf777);
        }

        &:not(:has(input:checked)) {
          display: none;
        }
      }

      &:focus-within,
      &:hover {
        height: var(--switcher-max-height);
        > label:not(:has(input:checked)) {
          display: inline-flex;
        }
      }
    }
  `}function lt(i,e){i.style.setProperty("--switcher-max-height",`${e*2}rem`)}var ct=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ut=(i,e,t)=>e in i?ct(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,pt=(i,e,t,s)=>{for(var r=s>1?void 0:s?dt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(r)||r);return r},$t=(i,e,t)=>ut(i,e+"",t);let W=class extends ${constructor(){super()}render(){return ft()}};$t(W,"styles",mt());W=pt([N("header-component")],W);function ft(){return A` <header>
    <h1>My Application Header</h1>
  </header>`}function mt(){return T`
    :host {
      display: block;
      background-color: light-dark(
        var(--th-light-header-bg-color, #f0f0f0),
        var(--th-dark-header-bg-color, #2c2c2c)
      );
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      min-height: 80px;

      *,
      *:after,
      *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
  `}const v=document.querySelector("#app");if(v){v.setAttribute("data-theme","browser");const i=document.createElement("header-component");v.appendChild(i);const e=document.createElement("switcher-element");v.appendChild(e);const t=document.createElement("sample-element");v.appendChild(t),Array.from({length:20},(s,r)=>{const n=document.createElement("p");n.textContent=`This is sample element line number ${r+1}.`,v.appendChild(n)})}
