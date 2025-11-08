(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const N=globalThis,k=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),Q=new WeakMap;let at=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const mt=r=>new at(typeof r=="string"?r:r+"",void 0,I),q=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1]),r[0]);return new at(e,r,I)},gt=(r,t)=>{if(k)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},X=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return mt(e)})(r):r;const{is:yt,defineProperty:vt,getOwnPropertyDescriptor:At,getOwnPropertyNames:bt,getOwnPropertySymbols:Et,getPrototypeOf:wt}=Object,L=globalThis,Y=L.trustedTypes,St=Y?Y.emptyScript:"",Pt=L.reactiveElementPolyfillSupport,w=(r,t)=>r,T={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},V=(r,t)=>!yt(r,t),tt={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&vt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...bt(e),...Et(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:T;this._$Em=i;const l=o.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??V)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,Pt?.({ReactiveElement:v}),(L.reactiveElementVersions??=[]).push("2.1.1");const W=globalThis,H=W.trustedTypes,et=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,lt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+f,Ct=`<${ht}>`,y=document,S=()=>y.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",F=Array.isArray,Ot=r=>F(r)||typeof r?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,nt=/"/g,ct=/^(?:script|style|textarea|title)$/i,xt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),K=xt(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ot=new WeakMap,m=y.createTreeWalker(y,129);function dt(r,t){if(!F(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Ut=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=E;for(let l=0;l<e;l++){const a=r[l];let c,u,h=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===E?u[1]==="!--"?o=st:u[1]!==void 0?o=it:u[2]!==void 0?(ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=i??E,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_:u[3]==='"'?nt:rt):o===nt||o===rt?o=_:o===st||o===it?o=E:(o=_,i=void 0);const $=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===E?a+Ct:h>=0?(s.push(c),a.slice(0,h)+lt+a.slice(h)+f+$):a+f+(h===-2?l:$)}return[dt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[c,u]=Ut(t,e);if(this.el=C.createElement(c,s),m.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=m.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(lt)){const p=u[o++],$=i.getAttribute(h).split(f),U=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:U[2],strings:$,ctor:U[1]==="."?Nt:U[1]==="?"?Tt:U[1]==="@"?Ht:j}),i.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(ct.test(i.tagName)){const h=i.textContent.split(f),p=h.length-1;if(p>0){i.textContent=H?H.emptyScript:"";for(let $=0;$<p;$++)i.append(h[$],S()),m.nextNode(),a.push({type:2,index:++n});i.append(h[p],S())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);m.currentNode=i;let n=m.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new x(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Rt(n,this,t)),this._$AV.push(c),a=s[++l]}o!==a?.index&&(n=m.nextNode(),o++)}return m.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(dt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new Mt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new C(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new x(this.O(S()),this.O(S()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=b(this,l[s+a],e,a),c===A&&(c=this._$AH[a]),o||=!P(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Tt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ht extends j{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===A)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Dt=W.litHtmlPolyfillSupport;Dt?.(C,x),(W.litHtmlVersions??=[]).push("3.3.1");const Lt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new x(t.insertBefore(S(),n),n,void 0,e??{})}return i._$AI(r),i};const J=globalThis;class g extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}g._$litElement$=!0,g.finalized=!0,J.litElementHydrateSupport?.({LitElement:g});const jt=J.litElementPolyfillSupport;jt?.({LitElement:g});(J.litElementVersions??=[]).push("4.2.1");const Z=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const zt={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:V},Bt=(r=zt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function z(r){return(t,e)=>typeof e=="object"?Bt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}var ut=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,It=(r,t,e)=>t in r?ut(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,G=(r,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&ut(t,e,i),i},qt=(r,t,e)=>It(r,t+"",e);function Vt(r,t,e){return K` <button @click=${e}>${r}: ${t}</button> `}function Wt(){return q`
    button {
      background-color: #0078d4;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
  `}let O=class extends g{constructor(){super(),this.message="Button",this.count=0}_handleClick=()=>{this.count++};_renderButton(){return Vt(this.message,this.count,this._handleClick)}render(){return this._renderButton()}};qt(O,"styles",Wt());G([z({type:String})],O.prototype,"message",2);G([z({type:Number})],O.prototype,"count",2);O=G([Z("button-element")],O);var pt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Kt=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,$t=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&pt(t,e,i),i},Jt=(r,t,e)=>Kt(r,t+"",e);let R=class extends g{constructor(){super(),this.message="¡Hello from sample-element!"}render(){return K`
      <h2>Sample Element</h2>
      <!-- <p>${this.message}</p> -->
      <button-element message="Click Me"></button-element>
    `}};Jt(R,"styles",q`
    :host {
      display: block;
      padding: 1rem;
      background: #f0f0f0;
      font-family: sans-serif;
    }
    h2 {
      color: #0078d4;
      margin: 0 0 0.5rem 0;
    }
  `);$t([z()],R.prototype,"message",2);R=$t([Z("sample-element")],R);var ft=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Gt=(r,t,e)=>t in r?ft(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,_t=(r,t,e,s)=>{for(var i=s>1?void 0:s?Zt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&ft(t,e,i),i},Qt=(r,t,e)=>Gt(r,t+"",e);function Xt(r){return K`
    <div yz-switcher>
      <label for="radio-browser">
        <input
          id="radio-browser"
          name="switch"
          type="radio"
          value="browser"
          checked
          @change=${r}
        />
        <i style="--icon: url('src/utils/icons/sun_and_moon.svg');"></i>
      </label>
      <label for="radio-light">
        <input
          id="radio-light"
          name="switch"
          type="radio"
          value="light"
          @change=${r}
        />
        <i style="--icon: url('src/utils/icons/sun.svg');"></i>
      </label>
      <label for="radio-dark">
        <input
          id="radio-dark"
          name="switch"
          type="radio"
          value="dark"
          @change=${r}
        />
        <i style="--icon: url('src/utils/icons/moon.svg');"></i>
      </label>
    </div>
  `}function Yt(){return q`
    div[yz-switcher] {
      background-color: light-dark(#1d1d1d, #f5f5f5);
      color: light-dark(#dddddd, #1d1d1d);
      padding: 0.5rem;
      border-radius: 1rem;
      position: absolute;
      top: 1rem;
      right: 1rem;

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

        > i {
          display: inline-flex;

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
      }

      > label:has(input:checked) {
        background-color: light-dark(#ee5656, #8cf777);
      }
    }
  `}let D=class extends g{constructor(){super(),this.isOn=!1}_renderSwitcher(){return Xt(this._onThemeChange.bind(this))}_onThemeChange(r){const t=r.target.value;document.querySelector("#app")?.setAttribute("data-theme",t)}render(){return this._renderSwitcher()}};Qt(D,"styles",Yt());_t([z({type:Boolean})],D.prototype,"isOn",2);D=_t([Z("switcher-element")],D);const M=document.querySelector("#app");if(M){M.setAttribute("data-theme","browser");const r=document.createElement("switcher-element");M.appendChild(r);const t=document.createElement("sample-element");M.appendChild(t)}
