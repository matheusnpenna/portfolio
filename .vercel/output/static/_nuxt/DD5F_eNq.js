function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CwHrTE0G.js","./index.CpliEw2w.css","./VJ-FMUC2.js","./BdwvvDE3.js","./default.RPwvFtw-.css","./BeIvwaAI.js","./DF8ttEen.js","./error-404.Cvfg5dJJ.css","./BuKV2CPp.js","./error-500.CNIrJuF_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const be={},Kr=[],St=()=>{},PE=()=>!1,Oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_u=t=>t.startsWith("onUpdate:"),je=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kE=Object.prototype.hasOwnProperty,fe=(t,e)=>kE.call(t,e),X=Array.isArray,Wr=t=>Ni(t)==="[object Map]",_g=t=>Ni(t)==="[object Set]",OE=t=>Ni(t)==="[object RegExp]",re=t=>typeof t=="function",ke=t=>typeof t=="string",ws=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",yg=t=>(Ie(t)||re(t))&&re(t.then)&&re(t.catch),vg=Object.prototype.toString,Ni=t=>vg.call(t),NE=t=>Ni(t).slice(8,-1),Eg=t=>Ni(t)==="[object Object]",vu=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zr=mu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},DE=/-(\w)/g,Zt=ma(t=>t.replace(DE,(e,n)=>n?n.toUpperCase():"")),xE=/\B([A-Z])/g,Ts=ma(t=>t.replace(xE,"-$1").toLowerCase()),_a=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),dc=ma(t=>t?`on${_a(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},wg=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let df;const Tg=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ke(r)?FE(r):ya(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ke(t)||Ie(t))return t}const ME=/;(?![^(]*\))/g,LE=/:([^]+)/,VE=/\/\*[^]*?\*\//g;function FE(t){const e={};return t.replace(VE,"").split(ME).forEach(n=>{if(n){const r=n.split(LE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function va(t){let e="";if(ke(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=va(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function UE(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ke(e)&&(t.class=va(e)),n&&(t.style=ya(n)),t}const BE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$E=mu(BE);function Ig(t){return!!t||t===""}const ix=t=>ke(t)?t:t==null?"":X(t)||Ie(t)&&(t.toString===vg||!re(t.toString))?JSON.stringify(t,Ag,2):String(t),Ag=(t,e)=>e&&e.__v_isRef?Ag(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:_g(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:ws(e)?pc(e):Ie(e)&&!X(e)&&!Eg(e)?String(e):e,pc=(t,e="")=>{var n;return ws(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class bg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rg(t){return new bg(t)}function jE(t,e=Dt){e&&e.active&&e.effects.push(t)}function HE(){return Dt}let fr;class Eu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,jE(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Sr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(qE(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Cr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Bn,n=fr;try{return Bn=!0,fr=this,this._runnings++,pf(this),this.fn()}finally{gf(this),this._runnings--,fr=n,Bn=e}}stop(){var e;this.active&&(pf(this),gf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function qE(t){return t.value}function pf(t){t._trackId++,t._depsLength=0}function gf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Sg(t.deps[e],t);t.deps.length=t._depsLength}}function Sg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Bn=!0,sl=0;const Cg=[];function Sr(){Cg.push(Bn),Bn=!1}function Cr(){const t=Cg.pop();Bn=t===void 0?!0:t}function wu(){sl++}function Tu(){for(sl--;!sl&&il.length;)il.shift()()}function Pg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Sg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const il=[];function kg(t,e,n){wu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&il.push(r.scheduler)))}Tu()}const Og=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Vo=new WeakMap,dr=Symbol(""),ol=Symbol("");function _t(t,e,n){if(Bn&&fr){let r=Vo.get(t);r||Vo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Og(()=>r.delete(n))),Pg(fr,s)}}function dn(t,e,n,r,s,i){const o=Vo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ws(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?vu(n)&&a.push(o.get("length")):(a.push(o.get(dr)),Wr(t)&&a.push(o.get(ol)));break;case"delete":X(t)||(a.push(o.get(dr)),Wr(t)&&a.push(o.get(ol)));break;case"set":Wr(t)&&a.push(o.get(dr));break}wu();for(const c of a)c&&kg(c,4);Tu()}function KE(t,e){var n;return(n=Vo.get(t))==null?void 0:n.get(e)}const WE=mu("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ws)),mf=zE();function zE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)_t(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr(),wu();const r=pe(this)[e].apply(this,n);return Tu(),Cr(),r}}),t}function GE(t){const e=pe(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aw:Vg:i?Lg:Mg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=X(e);if(!s){if(o&&fe(mf,n))return Reflect.get(mf,n,r);if(n==="hasOwnProperty")return GE}const a=Reflect.get(e,n,r);return(ws(n)?Ng.has(n):WE(n))||(s||_t(e,"get",n),i)?a:it(a)?o&&vu(n)?a:a.value:Ie(a)?s?Fg(a):Qn(a):a}}class xg extends Dg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=vr(i);if(!Fo(r)&&!vr(r)&&(i=pe(i),r=pe(r)),!X(e)&&it(i)&&!it(r))return c?!1:(i.value=r,!0)}const o=X(e)&&vu(n)?Number(n)<e.length:fe(e,n),a=Reflect.set(e,n,r,s);return e===pe(s)&&(o?Kn(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),a}deleteProperty(e,n){const r=fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ws(n)||!Ng.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",X(e)?"length":dr),Reflect.ownKeys(e)}}class QE extends Dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const JE=new xg,YE=new QE,XE=new xg(!0),Iu=t=>t,Ea=t=>Reflect.getPrototypeOf(t);function to(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(Kn(e,i)&&_t(s,"get",e),_t(s,"get",i));const{has:o}=Ea(s),a=r?Iu:n?Su:oi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function no(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(Kn(t,s)&&_t(r,"has",t),_t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ro(t,e=!1){return t=t.__v_raw,!e&&_t(pe(t),"iterate",dr),Reflect.get(t,"size",t)}function _f(t){t=pe(t);const e=pe(this);return Ea(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function yf(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=Ea(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Kn(e,o)&&dn(n,"set",t,e):dn(n,"add",t,e),this}function vf(t){const e=pe(this),{has:n,get:r}=Ea(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dn(e,"delete",t,void 0),i}function Ef(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&dn(t,"clear",void 0,void 0),n}function so(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?Iu:t?Su:oi;return!t&&_t(a,"iterate",dr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function io(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=Wr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Iu:e?Su:oi;return!e&&_t(i,"iterate",c?ol:dr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ZE(){const t={get(i){return to(this,i)},get size(){return ro(this)},has:no,add:_f,set:yf,delete:vf,clear:Ef,forEach:so(!1,!1)},e={get(i){return to(this,i,!1,!0)},get size(){return ro(this)},has:no,add:_f,set:yf,delete:vf,clear:Ef,forEach:so(!1,!0)},n={get(i){return to(this,i,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:so(!0,!1)},r={get(i){return to(this,i,!0,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=io(i,!1,!1),n[i]=io(i,!0,!1),e[i]=io(i,!1,!0),r[i]=io(i,!0,!0)}),[t,n,e,r]}const[ew,tw,nw,rw]=ZE();function Au(t,e){const n=e?t?rw:nw:t?tw:ew;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const sw={get:Au(!1,!1)},iw={get:Au(!1,!0)},ow={get:Au(!0,!1)},Mg=new WeakMap,Lg=new WeakMap,Vg=new WeakMap,aw=new WeakMap;function cw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lw(t){return t.__v_skip||!Object.isExtensible(t)?0:cw(NE(t))}function Qn(t){return vr(t)?t:bu(t,!1,JE,sw,Mg)}function Di(t){return bu(t,!1,XE,iw,Lg)}function Fg(t){return bu(t,!0,YE,ow,Vg)}function bu(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qr(t){return vr(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Ug(t){return Qr(t)||vr(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Ru(t){return Object.isExtensible(t)&&Lo(t,"__v_skip",!0),t}const oi=t=>Ie(t)?Qn(t):t,Su=t=>Ie(t)?Fg(t):t;class Bg{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Eu(()=>e(this._value),()=>Io(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return(!e._cacheable||e.effect.dirty)&&Kn(e._value,e._value=e.effect.run())&&Io(e,4),$g(e),e.effect._dirtyLevel>=2&&Io(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function uw(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=St):(r=t.get,s=t.set),new Bg(r,s,i||!s,n)}function $g(t){var e;Bn&&fr&&(t=pe(t),Pg(fr,(e=t.dep)!=null?e:t.dep=Og(()=>t.dep=void 0,t instanceof Bg?t:void 0)))}function Io(t,e=4,n){t=pe(t);const r=t.dep;r&&kg(r,e)}function it(t){return!!(t&&t.__v_isRef===!0)}function Qt(t){return jg(t,!1)}function ai(t){return jg(t,!0)}function jg(t,e){return it(t)?t:new hw(t,e)}class hw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:oi(e)}get value(){return $g(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||vr(e);e=n?e:pe(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oi(e),Io(this,4))}}function Ae(t){return it(t)?t.value:t}const fw={get:(t,e,n)=>Ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hg(t){return Qr(t)?t:new Proxy(t,fw)}class dw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return KE(pe(this._object),this._key)}}class pw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function gw(t,e,n){return it(t)?t:re(t)?new pw(t):Ie(t)&&arguments.length>1?mw(t,e,n):Qt(t)}function mw(t,e,n){const r=t[e];return it(r)?r:new dw(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(t,e,n,r){try{return r?t(...r):t()}catch(s){Is(s,e,n)}}function Pt(t,e,n,r){if(re(t)){const i=$n(t,e,n,r);return i&&yg(i)&&i.catch(o=>{Is(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function Is(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}_w(t,n,s,r)}function _w(t,e,n,r=!0){console.error(t)}let ci=!1,al=!1;const nt=[];let Ht=0;const Jr=[];let Sn=null,sr=0;const qg=Promise.resolve();let Cu=null;function As(t){const e=Cu||qg;return t?e.then(this?t.bind(this):t):e}function yw(t){let e=Ht+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=li(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function wa(t){(!nt.length||!nt.includes(t,ci&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?nt.push(t):nt.splice(yw(t.id),0,t),Kg())}function Kg(){!ci&&!al&&(al=!0,Cu=qg.then(Wg))}function vw(t){const e=nt.indexOf(t);e>Ht&&nt.splice(e,1)}function cl(t){X(t)?Jr.push(...t):(!Sn||!Sn.includes(t,t.allowRecurse?sr+1:sr))&&Jr.push(t),Kg()}function wf(t,e,n=ci?Ht+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function Uo(t){if(Jr.length){const e=[...new Set(Jr)].sort((n,r)=>li(n)-li(r));if(Jr.length=0,Sn){Sn.push(...e);return}for(Sn=e,sr=0;sr<Sn.length;sr++)Sn[sr]();Sn=null,sr=0}}const li=t=>t.id==null?1/0:t.id,Ew=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wg(t){al=!1,ci=!0,nt.sort(Ew);try{for(Ht=0;Ht<nt.length;Ht++){const e=nt[Ht];e&&e.active!==!1&&$n(e,null,14)}}finally{Ht=0,nt.length=0,Uo(),ci=!1,Cu=null,(nt.length||Jr.length)&&Wg()}}function ww(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||be;f&&(s=n.map(d=>ke(d)?d.trim():d)),h&&(s=n.map(rl))}let a,c=r[a=dc(e)]||r[a=dc(Zt(e))];!c&&i&&(c=r[a=dc(Ts(e))]),c&&Pt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,s)}}function zg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=zg(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):je(o,i),Ie(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!Oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Ts(e))||fe(t,e))}let Ve=null,Ia=null;function Bo(t){const e=Ve;return Ve=t,Ia=t&&t.type.__scopeId||null,e}function ox(t){Ia=t}function ax(){Ia=null}function Pu(t,e=Ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mf(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&Mf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:w}=t;let A,S;const y=Bo(t);try{if(n.shapeFlag&4){const v=s||r,I=v;A=At(u.call(I,v,h,i,d,f,_)),S=c}else{const v=e;A=At(v.length>1?v(i,{attrs:c,slots:a,emit:l}):v(i,null)),S=e.props?c:Iw(c)}}catch(v){zs.length=0,Is(v,t,1),A=Pe(ht)}let m=A;if(S&&w!==!1){const v=Object.keys(S),{shapeFlag:I}=m;v.length&&I&7&&(o&&v.some(_u)&&(S=Aw(S,o)),m=pn(m,S))}return n.dirs&&(m=pn(m),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&(m.transition=n.transition),A=m,Bo(y),A}function Tw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(us(s)){if(s.type!==ht||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Iw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oi(n))&&((e||(e={}))[n]=t[n]);return e},Aw=(t,e)=>{const n={};for(const r in t)(!_u(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Tf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ta(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Tf(r,o,l):!0:!!o;return!1}function Tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function ku({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ou="components";function cx(t,e){return Qg(Ou,t,!0,e)||t}const Gg=Symbol.for("v-ndc");function Rw(t){return ke(t)?Qg(Ou,t,!1)||t:t||Gg}function Qg(t,e,n=!0,r=!1){const s=Ve||Be;if(s){const i=s.type;if(t===Ou){const a=_l(i,!1);if(a&&(a===e||a===Zt(e)||a===_a(Zt(e))))return i}const o=If(s[t]||i[t],e)||If(s.appContext[t],e);return!o&&r?i:o}}function If(t,e){return t&&(t[e]||t[Zt(e)]||t[_a(Zt(e))])}const Jg=t=>t.__isSuspense;let ll=0;const Sw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){if(t==null)Cw(e,n,r,s,i,o,a,c,l);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Pw(t,e,n,r,s,o,a,c,l)}},hydrate:kw,create:Du,normalize:Ow},Nu=Sw;function ui(t,e){const n=t.props&&t.props[e];re(n)&&n()}function Cw(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Du(t,s,r,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(ui(t,"onPending"),ui(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),Yr(f,t.ssFallback)):f.resolve(!1,!0)}function Pw(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:_,pendingBranch:w,isInFallback:A,isHydrating:S}=h;if(w)h.pendingBranch=f,Mt(f,w)?(c(w,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():A&&(S||(c(_,d,n,r,s,null,i,o,a),Yr(h,d)))):(h.pendingId=ll++,S?(h.isHydrating=!1,h.activeBranch=w):l(w,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),A?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(_,d,n,r,s,null,i,o,a),Yr(h,d))):_&&Mt(f,_)?(c(_,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(_&&Mt(f,_))c(_,f,n,r,s,h,i,o,a),Yr(h,f);else if(ui(e,"onPending"),h.pendingBranch=f,f.shapeFlag&512?h.pendingId=f.component.suspenseId:h.pendingId=ll++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:m}=h;y>0?setTimeout(()=>{h.pendingId===m&&h.fallback(d)},y):y===0&&h.fallback(d)}}function Du(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:_,o:{parentNode:w,remove:A}}=l;let S;const y=Nw(t);y&&e!=null&&e.pendingBranch&&(S=e.pendingId,e.deps++);const m=t.props?wg(t.props.timeout):void 0,v=i,I={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:ll++,timeout:typeof m=="number"?m:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,N=!1){const{vnode:O,activeBranch:V,pendingBranch:M,pendingId:te,effects:L,parentComponent:Z,container:we}=I;let Te=!1;I.isHydrating?I.isHydrating=!1:T||(Te=V&&M.transition&&M.transition.mode==="out-in",Te&&(V.transition.afterLeave=()=>{te===I.pendingId&&(f(M,we,i===v?_(V):i,0),cl(L))}),V&&(w(V.el)!==I.hiddenContainer&&(i=_(V)),d(V,Z,I,!0)),Te||f(M,we,i,0)),Yr(I,M),I.pendingBranch=null,I.isInFallback=!1;let W=I.parent,oe=!1;for(;W;){if(W.pendingBranch){W.effects.push(...L),oe=!0;break}W=W.parent}!oe&&!Te&&cl(L),I.effects=[],y&&e&&e.pendingBranch&&S===e.pendingId&&(e.deps--,e.deps===0&&!N&&e.resolve()),ui(O,"onResolve")},fallback(T){if(!I.pendingBranch)return;const{vnode:N,activeBranch:O,parentComponent:V,container:M,namespace:te}=I;ui(N,"onFallback");const L=_(O),Z=()=>{I.isInFallback&&(h(null,T,M,L,V,null,te,a,c),Yr(I,T))},we=T.transition&&T.transition.mode==="out-in";we&&(O.transition.afterLeave=Z),I.isInFallback=!0,d(O,V,null,!0),we||Z()},move(T,N,O){I.activeBranch&&f(I.activeBranch,T,N,O),I.container=T},next(){return I.activeBranch&&_(I.activeBranch)},registerDep(T,N){const O=!!I.pendingBranch;O&&I.deps++;const V=T.vnode.el;T.asyncDep.catch(M=>{Is(M,T,0)}).then(M=>{if(T.isUnmounted||I.isUnmounted||I.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:te}=T;ml(T,M,!1),V&&(te.el=V);const L=!V&&T.subTree.el;N(T,te,w(V||T.subTree.el),V?null:_(T.subTree),I,o,c),L&&A(L),ku(T,te.el),O&&--I.deps===0&&I.resolve()})},unmount(T,N){I.isUnmounted=!0,I.activeBranch&&d(I.activeBranch,n,T,N),I.pendingBranch&&d(I.pendingBranch,n,T,N)}};return I}function kw(t,e,n,r,s,i,o,a,c){const l=e.suspense=Du(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Ow(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Af(r?n.default:n),t.ssFallback=r?Af(n.fallback):Pe(ht)}function Af(t){let e;if(re(t)){const n=ls&&t._c;n&&(t._d=!1,qt()),t=t(),n&&(t._d=!0,e=Ct,vm())}return X(t)&&(t=Tw(t)),t=At(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Yg(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):cl(t)}function Yr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,ku(r,s))}function Nw(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Dw=Symbol.for("v-scx"),xw=()=>ut(Dw);function lx(t,e){return xu(t,null,e)}const oo={};function Xr(t,e,n){return xu(t,e,n)}function xu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=be){if(e&&i){const T=e;e=(...N)=>{T(...N),I()}}const c=Be,l=T=>r===!0?T:or(T,r===!1?1:void 0);let u,h=!1,f=!1;if(it(t)?(u=()=>t.value,h=Fo(t)):Qr(t)?(u=()=>l(t),h=!0):X(t)?(f=!0,h=t.some(T=>Qr(T)||Fo(T)),u=()=>t.map(T=>{if(it(T))return T.value;if(Qr(T))return l(T);if(re(T))return $n(T,c,2)})):re(t)?e?u=()=>$n(t,c,2):u=()=>(d&&d(),Pt(t,c,3,[_])):u=St,e&&r){const T=u;u=()=>or(T())}let d,_=T=>{d=m.onStop=()=>{$n(T,c,4),d=m.onStop=void 0}},w;if(Li)if(_=St,e?n&&Pt(e,c,3,[u(),f?[]:void 0,_]):u(),s==="sync"){const T=xw();w=T.__watcherHandles||(T.__watcherHandles=[])}else return St;let A=f?new Array(t.length).fill(oo):oo;const S=()=>{if(!(!m.active||!m.dirty))if(e){const T=m.run();(r||h||(f?T.some((N,O)=>Kn(N,A[O])):Kn(T,A)))&&(d&&d(),Pt(e,c,3,[T,A===oo?void 0:f&&A[0]===oo?[]:A,_]),A=T)}else m.run()};S.allowRecurse=!!e;let y;s==="sync"?y=S:s==="post"?y=()=>ze(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),y=()=>wa(S));const m=new Eu(u,St,y),v=HE(),I=()=>{m.stop(),v&&yu(v.effects,m)};return e?n?S():A=m.run():s==="post"?ze(m.run.bind(m),c&&c.suspense):m.run(),w&&w.push(I),I}function Mw(t,e,n){const r=this.proxy,s=ke(t)?t.includes(".")?Xg(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=Mi(this),a=xu(s,i.bind(r),n);return o(),a}function Xg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function or(t,e,n=0,r){if(!Ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),it(t))or(t.value,e,n,r);else if(X(t))for(let s=0;s<t.length;s++)or(t[s],e,n,r);else if(_g(t)||Wr(t))t.forEach(s=>{or(s,e,n,r)});else if(Eg(t))for(const s in t)or(t[s],e,n,r);return t}function ux(t,e){if(Ve===null)return t;const n=Ra(Ve)||Ve.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=be]=e[s];i&&(re(i)&&(i={mounted:i,updated:i}),i.deep&&or(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Sr(),Pt(c,n,8,[t.el,a,t,e]),Cr())}}const Cn=Symbol("_leaveCb"),ao=Symbol("_enterCb");function Lw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mu(()=>{t.isMounted=!0}),Lu(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},Vw={name:"BaseTransition",props:Zg,setup(t,{slots:e}){const n=Bu(),r=Lw();return()=>{const s=e.default&&tm(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const f of s)if(f.type!==ht){i=f;break}}const o=pe(t),{mode:a}=o;if(r.isLeaving)return mc(i);const c=bf(i);if(!c)return mc(i);const l=ul(c,o,r,n);$o(c,l);const u=n.subTree,h=u&&bf(u);if(h&&h.type!==ht&&!Mt(c,h)){const f=ul(h,o,r,n);if($o(h,f),a==="out-in")return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},mc(i);a==="in-out"&&c.type!==ht&&(f.delayLeave=(d,_,w)=>{const A=em(r,h);A[String(h.key)]=h,d[Cn]=()=>{_(),d[Cn]=void 0,delete l.delayedLeave},l.delayedLeave=w})}return i}}},Fw=Vw;function em(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ul(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:w,onAppear:A,onAfterAppear:S,onAppearCancelled:y}=e,m=String(t.key),v=em(n,t),I=(O,V)=>{O&&Pt(O,r,9,V)},T=(O,V)=>{const M=V[1];I(O,V),X(O)?O.every(te=>te.length<=1)&&M():O.length<=1&&M()},N={mode:i,persisted:o,beforeEnter(O){let V=a;if(!n.isMounted)if(s)V=w||a;else return;O[Cn]&&O[Cn](!0);const M=v[m];M&&Mt(t,M)&&M.el[Cn]&&M.el[Cn](),I(V,[O])},enter(O){let V=c,M=l,te=u;if(!n.isMounted)if(s)V=A||c,M=S||l,te=y||u;else return;let L=!1;const Z=O[ao]=we=>{L||(L=!0,we?I(te,[O]):I(M,[O]),N.delayedLeave&&N.delayedLeave(),O[ao]=void 0)};V?T(V,[O,Z]):Z()},leave(O,V){const M=String(t.key);if(O[ao]&&O[ao](!0),n.isUnmounting)return V();I(h,[O]);let te=!1;const L=O[Cn]=Z=>{te||(te=!0,V(),Z?I(_,[O]):I(d,[O]),O[Cn]=void 0,v[M]===t&&delete v[M])};v[M]=t,f?T(f,[O,L]):L()},clone(O){return ul(O,e,n,r)}};return N}function mc(t){if(xi(t))return t=pn(t),t.children=null,t}function bf(t){return xi(t)?t.children?t.children[0]:void 0:t}function $o(t,e){t.shapeFlag&6&&t.component?$o(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===pt?(o.patchFlag&128&&s++,r=r.concat(tm(o.children,e,a))):(e||o.type!==ht)&&r.push(a!=null?pn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Jn(t,e){return re(t)?je({name:t.name},e,{setup:t}):t}const pr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Rf(t){re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((w,A)=>{a(_,()=>w(h()),()=>A(_),u+1)});throw _}).then(_=>d!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),l=_,_)))};return Jn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=Be;if(l)return()=>_c(l,d);const _=y=>{c=null,Is(y,d,13,!r)};if(o&&d.suspense||Li)return f().then(y=>()=>_c(y,d)).catch(y=>(_(y),()=>r?Pe(r,{error:y}):null));const w=Qt(!1),A=Qt(),S=Qt(!!s);return s&&setTimeout(()=>{S.value=!1},s),i!=null&&setTimeout(()=>{if(!w.value&&!A.value){const y=new Error(`Async component timed out after ${i}ms.`);_(y),A.value=y}},i),f().then(()=>{w.value=!0,d.parent&&xi(d.parent.vnode)&&(d.parent.effect.dirty=!0,wa(d.parent.update))}).catch(y=>{_(y),A.value=y}),()=>{if(w.value&&l)return _c(l,d);if(A.value&&r)return Pe(r,{error:A.value});if(n&&!S.value)return Pe(n)}}})}function _c(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const xi=t=>t.type.__isKeepAlive,Uw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Bu(),r=n.ctx;if(!r.renderer)return()=>{const y=e.default&&e.default();return y&&y.length===1?y[0]:y};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(y,m,v,I,T)=>{const N=y.component;l(y,m,v,0,a),c(N.vnode,y,m,v,N,a,I,y.slotScopeIds,T),ze(()=>{N.isDeactivated=!1,N.a&&Gr(N.a);const O=y.props&&y.props.onVnodeMounted;O&&dt(O,N.parent,y)},a)},r.deactivate=y=>{const m=y.component;l(y,f,null,1,a),ze(()=>{m.da&&Gr(m.da);const v=y.props&&y.props.onVnodeUnmounted;v&&dt(v,m.parent,y),m.isDeactivated=!0},a)};function d(y){yc(y),u(y,n,a,!0)}function _(y){s.forEach((m,v)=>{const I=_l(m.type);I&&(!y||!y(I))&&w(v)})}function w(y){const m=s.get(y);!o||!Mt(m,o)?d(m):o&&yc(o),s.delete(y),i.delete(y)}Xr(()=>[t.include,t.exclude],([y,m])=>{y&&_(v=>Us(y,v)),m&&_(v=>!Us(m,v))},{flush:"post",deep:!0});let A=null;const S=()=>{A!=null&&s.set(A,vc(n.subTree))};return Mu(S),rm(S),Lu(()=>{s.forEach(y=>{const{subTree:m,suspense:v}=n,I=vc(m);if(y.type===I.type&&y.key===I.key){yc(I);const T=I.component.da;T&&ze(T,v);return}d(y)})}),()=>{if(A=null,!e.default)return null;const y=e.default(),m=y[0];if(y.length>1)return o=null,y;if(!us(m)||!(m.shapeFlag&4)&&!(m.shapeFlag&128))return o=null,m;let v=vc(m);const I=v.type,T=_l(pr(v)?v.type.__asyncResolved||{}:I),{include:N,exclude:O,max:V}=t;if(N&&(!T||!Us(N,T))||O&&T&&Us(O,T))return o=v,m;const M=v.key==null?I:v.key,te=s.get(M);return v.el&&(v=pn(v),m.shapeFlag&128&&(m.ssContent=v)),A=M,te?(v.el=te.el,v.component=te.component,v.transition&&$o(v,v.transition),v.shapeFlag|=512,i.delete(M),i.add(M)):(i.add(M),V&&i.size>parseInt(V,10)&&w(i.values().next().value)),v.shapeFlag|=256,o=v,Jg(m.type)?m:v}}},Bw=Uw;function Us(t,e){return X(t)?t.some(n=>Us(n,e)):ke(t)?t.split(",").includes(e):OE(t)?t.test(e):!1}function $w(t,e){nm(t,"a",e)}function jw(t,e){nm(t,"da",e)}function nm(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xi(s.parent.vnode)&&Hw(r,e,n,s),s=s.parent}}function Hw(t,e,n,r){const s=Aa(e,t,r,!0);sm(()=>{yu(r[e],s)},n)}function yc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function vc(t){return t.shapeFlag&128?t.ssContent:t}function Aa(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sr();const a=Mi(n),c=Pt(e,n,t,o);return a(),Cr(),c});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=Be)=>(!Li||t==="sp")&&Aa(t,(...r)=>e(...r),n),qw=yn("bm"),Mu=yn("m"),Kw=yn("bu"),rm=yn("u"),Lu=yn("bum"),sm=yn("um"),Ww=yn("sp"),zw=yn("rtg"),Gw=yn("rtc");function im(t,e=Be){Aa("ec",t,e)}function hx(t,e,n,r){let s;const i=n&&n[r];if(X(t)||ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function fx(t,e,n={},r,s){if(Ve.isCE||Ve.parent&&pr(Ve.parent)&&Ve.parent.isCE)return e!=="default"&&(n.name=e),Pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),qt();const o=i&&om(i(n)),a=cn(pt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function om(t){return t.some(e=>us(e)?!(e.type===ht||e.type===pt&&!om(e.children)):!0)?t:null}const hl=t=>t?Rm(t)?Ra(t)||t.proxy:hl(t.parent):null,Ks=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>Vu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wa(t.update)}),$nextTick:t=>t.n||(t.n=As.bind(t.proxy)),$watch:t=>Mw.bind(t)}),Ec=(t,e)=>t!==be&&!t.__isScriptSetup&&fe(t,e),Qw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(r,e))return o[e]=1,r[e];if(s!==be&&fe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==be&&fe(n,e))return o[e]=4,n[e];fl&&(o[e]=0)}}const u=Ks[e];let h,f;if(u)return e==="$attrs"&&_t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ec(s,e)?(s[e]=n,!0):r!==be&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&fe(t,o)||Ec(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(Ks,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fl=!0;function Jw(t){const e=Vu(t),n=t.proxy,r=t.ctx;fl=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:w,deactivated:A,beforeDestroy:S,beforeUnmount:y,destroyed:m,unmounted:v,render:I,renderTracked:T,renderTriggered:N,errorCaptured:O,serverPrefetch:V,expose:M,inheritAttrs:te,components:L,directives:Z,filters:we}=e;if(l&&Yw(l,r,null),o)for(const oe in o){const G=o[oe];re(G)&&(r[oe]=G.bind(n))}if(s){const oe=s.call(n,n);Ie(oe)&&(t.data=Qn(oe))}if(fl=!0,i)for(const oe in i){const G=i[oe],Ot=re(G)?G.bind(n,n):re(G.get)?G.get.bind(n,n):St,En=!re(G)&&re(G.set)?G.set.bind(n):St,Bt=bt({get:Ot,set:En});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:ft=>Bt.value=ft})}if(a)for(const oe in a)am(a[oe],r,n,oe);if(c){const oe=re(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(G=>{gr(G,oe[G])})}u&&Cf(u,t,"c");function W(oe,G){X(G)?G.forEach(Ot=>oe(Ot.bind(n))):G&&oe(G.bind(n))}if(W(qw,h),W(Mu,f),W(Kw,d),W(rm,_),W($w,w),W(jw,A),W(im,O),W(Gw,T),W(zw,N),W(Lu,y),W(sm,v),W(Ww,V),X(M))if(M.length){const oe=t.exposed||(t.exposed={});M.forEach(G=>{Object.defineProperty(oe,G,{get:()=>n[G],set:Ot=>n[G]=Ot})})}else t.exposed||(t.exposed={});I&&t.render===St&&(t.render=I),te!=null&&(t.inheritAttrs=te),L&&(t.components=L),Z&&(t.directives=Z)}function Yw(t,e,n=St){X(t)&&(t=dl(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=ut(s.from||r,s.default,!0):i=ut(s.from||r):i=ut(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cf(t,e,n){Pt(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function am(t,e,n,r){const s=r.includes(".")?Xg(n,r):()=>n[r];if(ke(t)){const i=e[t];re(i)&&Xr(s,i)}else if(re(t))Xr(s,t.bind(n));else if(Ie(t))if(X(t))t.forEach(i=>am(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Xr(s,i,t)}}function Vu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>jo(c,l,o,!0)),jo(c,e,o)),Ie(e)&&i.set(e,c),c}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xw={data:Pf,props:kf,emits:kf,methods:Bs,computed:Bs,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Bs,directives:Bs,watch:eT,provide:Pf,inject:Zw};function Pf(t,e){return e?t?function(){return je(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Zw(t,e){return Bs(dl(t),dl(e))}function dl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?je(Object.create(null),t,e):e}function kf(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:je(Object.create(null),Sf(t),Sf(e??{})):e}function eT(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=at(t[r],e[r]);return n}function cm(){return{app:null,config:{isNativeTag:PE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tT=0;function nT(t,e){return function(r,s=null){re(r)||(r=je({},r)),s!=null&&!Ie(s)&&(s=null);const i=cm(),o=new WeakSet;let a=!1;const c=i.app={_uid:tT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Pe(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ra(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Zr;Zr=c;try{return l()}finally{Zr=u}}};return c}}let Zr=null;function gr(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function ut(t,e,n=!1){const r=Be||Ve;if(r||Zr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Zr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function lm(){return!!(Be||Ve||Zr)}function rT(t,e,n,r=!1){const s={},i={};Lo(i,ba,1),t.propsDefaults=Object.create(null),um(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Di(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(t.emitsOptions,f))continue;const d=e[f];if(c)if(fe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const _=Zt(f);s[_]=pl(c,a,_,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{um(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=Ts(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=pl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&dn(t,"set","$attrs")}function um(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zr(c))continue;const l=e[c];let u;s&&fe(s,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=pe(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=pl(s,c,h,l[h],t,!fe(l,h))}}return o}function pl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Mi(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ts(n))&&(r=!0))}return r}function hm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,d]=hm(h,e,!0);je(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,Kr),Kr;if(X(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Of(h)&&(o[h]=be)}else if(i)for(const u in i){const h=Zt(u);if(Of(h)){const f=i[u],d=o[h]=X(f)||re(f)?{type:f}:je({},f);if(d){const _=xf(Boolean,d.type),w=xf(String,d.type);d[0]=_>-1,d[1]=w<0||_<w,(_>-1||fe(d,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function Of(t){return t[0]!=="$"&&!zr(t)}function Nf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Df(t,e){return Nf(t)===Nf(e)}function xf(t,e){return X(e)?e.findIndex(n=>Df(n,t)):re(e)&&Df(e,t)?0:-1}const fm=t=>t[0]==="_"||t==="$stable",Fu=t=>X(t)?t.map(At):[At(t)],iT=(t,e,n)=>{if(e._n)return e;const r=Pu((...s)=>Fu(e(...s)),n);return r._c=!1,r},dm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fm(s))continue;const i=t[s];if(re(i))e[s]=iT(s,i,r);else if(i!=null){const o=Fu(i);e[s]=()=>o}}},pm=(t,e)=>{const n=Fu(e);t.slots.default=()=>n},oT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Lo(e,"_",n)):dm(e,t.slots={})}else t.slots={},e&&pm(t,e);Lo(t.slots,ba,1)},aT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,dm(e,s)),o=e}else e&&(pm(t,e),o={default:1});if(i)for(const a in s)!fm(a)&&o[a]==null&&delete s[a]};function Ho(t,e,n,r,s=!1){if(X(t)){t.forEach((f,d)=>Ho(f,e&&(X(e)?e[d]:e),n,r,s));return}if(pr(r)&&!s)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ke(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):it(l)&&(l.value=null)),re(c))$n(c,a,12,[o,u]);else{const f=ke(c),d=it(c);if(f||d){const _=()=>{if(t.f){const w=f?fe(h,c)?h[c]:u[c]:c.value;s?X(w)&&yu(w,i):X(w)?w.includes(i)||w.push(i):f?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,fe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ze(_,n)):_()}}}let Tn=!1;const cT=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",lT=t=>t.namespaceURI.includes("MathML"),co=t=>{if(cT(t))return"svg";if(lT(t))return"mathml"},lo=t=>t.nodeType===8;function uT(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(m,v)=>{if(!v.hasChildNodes()){n(null,m,v),Uo(),v._vnode=m;return}Tn=!1,h(v.firstChild,m,null,null,null),Uo(),v._vnode=m,Tn&&console.error("Hydration completed but contains mismatches.")},h=(m,v,I,T,N,O=!1)=>{const V=lo(m)&&m.data==="[",M=()=>w(m,v,I,T,N,V),{type:te,ref:L,shapeFlag:Z,patchFlag:we}=v;let Te=m.nodeType;v.el=m,we===-2&&(O=!1,v.dynamicChildren=null);let W=null;switch(te){case cs:Te!==3?v.children===""?(c(v.el=s(""),o(m),m),W=m):W=M():(m.data!==v.children&&(Tn=!0,m.data=v.children),W=i(m));break;case ht:y(m)?(W=i(m),S(v.el=m.content.firstChild,m,I)):Te!==8||V?W=M():W=i(m);break;case Ws:if(V&&(m=i(m),Te=m.nodeType),Te===1||Te===3){W=m;const oe=!v.children.length;for(let G=0;G<v.staticCount;G++)oe&&(v.children+=W.nodeType===1?W.outerHTML:W.data),G===v.staticCount-1&&(v.anchor=W),W=i(W);return V?i(W):W}else M();break;case pt:V?W=_(m,v,I,T,N,O):W=M();break;default:if(Z&1)(Te!==1||v.type.toLowerCase()!==m.tagName.toLowerCase())&&!y(m)?W=M():W=f(m,v,I,T,N,O);else if(Z&6){v.slotScopeIds=N;const oe=o(m);if(V?W=A(m):lo(m)&&m.data==="teleport start"?W=A(m,m.data,"teleport end"):W=i(m),e(v,oe,null,I,T,co(oe),O),pr(v)){let G;V?(G=Pe(pt),G.anchor=W?W.previousSibling:oe.lastChild):G=m.nodeType===3?Am(""):Pe("div"),G.el=m,v.component.subTree=G}}else Z&64?Te!==8?W=M():W=v.type.hydrate(m,v,I,T,N,O,t,d):Z&128&&(W=v.type.hydrate(m,v,I,T,co(o(m)),N,O,t,h))}return L!=null&&Ho(L,null,T,v),W},f=(m,v,I,T,N,O)=>{O=O||!!v.dynamicChildren;const{type:V,props:M,patchFlag:te,shapeFlag:L,dirs:Z,transition:we}=v,Te=V==="input"||V==="option";if(Te||te!==-1){Z&&jt(v,null,I,"created");let W=!1;if(y(m)){W=mm(T,we)&&I&&I.vnode.props&&I.vnode.props.appear;const G=m.content.firstChild;W&&we.beforeEnter(G),S(G,m,I),v.el=m=G}if(L&16&&!(M&&(M.innerHTML||M.textContent))){let G=d(m.firstChild,v,m,I,T,N,O);for(;G;){Tn=!0;const Ot=G;G=G.nextSibling,a(Ot)}}else L&8&&m.textContent!==v.children&&(Tn=!0,m.textContent=v.children);if(M)if(Te||!O||te&48)for(const G in M)(Te&&(G.endsWith("value")||G==="indeterminate")||Oi(G)&&!zr(G)||G[0]===".")&&r(m,G,null,M[G],void 0,void 0,I);else M.onClick&&r(m,"onClick",null,M.onClick,void 0,void 0,I);let oe;(oe=M&&M.onVnodeBeforeMount)&&dt(oe,I,v),Z&&jt(v,null,I,"beforeMount"),((oe=M&&M.onVnodeMounted)||Z||W)&&Yg(()=>{oe&&dt(oe,I,v),W&&we.enter(m),Z&&jt(v,null,I,"mounted")},T)}return m.nextSibling},d=(m,v,I,T,N,O,V)=>{V=V||!!v.dynamicChildren;const M=v.children,te=M.length;for(let L=0;L<te;L++){const Z=V?M[L]:M[L]=At(M[L]);if(m)m=h(m,Z,T,N,O,V);else{if(Z.type===cs&&!Z.children)continue;Tn=!0,n(null,Z,I,null,T,N,co(I),O)}}return m},_=(m,v,I,T,N,O)=>{const{slotScopeIds:V}=v;V&&(N=N?N.concat(V):V);const M=o(m),te=d(i(m),v,M,I,T,N,O);return te&&lo(te)&&te.data==="]"?i(v.anchor=te):(Tn=!0,c(v.anchor=l("]"),M,te),te)},w=(m,v,I,T,N,O)=>{if(Tn=!0,v.el=null,O){const te=A(m);for(;;){const L=i(m);if(L&&L!==te)a(L);else break}}const V=i(m),M=o(m);return a(m),n(null,v,M,V,I,T,co(M),N),V},A=(m,v="[",I="]")=>{let T=0;for(;m;)if(m=i(m),m&&lo(m)&&(m.data===v&&T++,m.data===I)){if(T===0)return i(m);T--}return m},S=(m,v,I)=>{const T=v.parentNode;T&&T.replaceChild(m,v);let N=I;for(;N;)N.vnode.el===v&&(N.vnode.el=N.subTree.el=m),N=N.parent},y=m=>m.nodeType===1&&m.tagName.toLowerCase()==="template";return[u,h]}const ze=Yg;function hT(t){return gm(t)}function fT(t){return gm(t,uT)}function gm(t,e){const n=Tg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=St,insertStaticContent:_}=t,w=(p,g,E,C=null,b=null,x=null,H=void 0,D=null,U=!!g.dynamicChildren)=>{if(p===g)return;p&&!Mt(p,g)&&(C=R(p),ft(p,b,x,!0),p=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:Y}=g;switch(k){case cs:A(p,g,E,C);break;case ht:S(p,g,E,C);break;case Ws:p==null&&y(g,E,C,H);break;case pt:L(p,g,E,C,b,x,H,D,U);break;default:Y&1?I(p,g,E,C,b,x,H,D,U):Y&6?Z(p,g,E,C,b,x,H,D,U):(Y&64||Y&128)&&k.process(p,g,E,C,b,x,H,D,U,z)}K!=null&&b&&Ho(K,p&&p.ref,x,g||p,!g)},A=(p,g,E,C)=>{if(p==null)r(g.el=a(g.children),E,C);else{const b=g.el=p.el;g.children!==p.children&&l(b,g.children)}},S=(p,g,E,C)=>{p==null?r(g.el=c(g.children||""),E,C):g.el=p.el},y=(p,g,E,C)=>{[p.el,p.anchor]=_(p.children,g,E,C,p.el,p.anchor)},m=({el:p,anchor:g},E,C)=>{let b;for(;p&&p!==g;)b=f(p),r(p,E,C),p=b;r(g,E,C)},v=({el:p,anchor:g})=>{let E;for(;p&&p!==g;)E=f(p),s(p),p=E;s(g)},I=(p,g,E,C,b,x,H,D,U)=>{g.type==="svg"?H="svg":g.type==="math"&&(H="mathml"),p==null?T(g,E,C,b,x,H,D,U):V(p,g,b,x,H,D,U)},T=(p,g,E,C,b,x,H,D)=>{let U,k;const{props:K,shapeFlag:Y,transition:Q,dirs:ie}=p;if(U=p.el=o(p.type,x,K&&K.is,K),Y&8?u(U,p.children):Y&16&&O(p.children,U,null,C,b,wc(p,x),H,D),ie&&jt(p,null,C,"created"),N(U,p,p.scopeId,H,C),K){for(const Ee in K)Ee!=="value"&&!zr(Ee)&&i(U,Ee,null,K[Ee],x,p.children,C,b,Xe);"value"in K&&i(U,"value",null,K.value,x),(k=K.onVnodeBeforeMount)&&dt(k,C,p)}ie&&jt(p,null,C,"beforeMount");const le=mm(b,Q);le&&Q.beforeEnter(U),r(U,g,E),((k=K&&K.onVnodeMounted)||le||ie)&&ze(()=>{k&&dt(k,C,p),le&&Q.enter(U),ie&&jt(p,null,C,"mounted")},b)},N=(p,g,E,C,b)=>{if(E&&d(p,E),C)for(let x=0;x<C.length;x++)d(p,C[x]);if(b){let x=b.subTree;if(g===x){const H=b.vnode;N(p,H,H.scopeId,H.slotScopeIds,b.parent)}}},O=(p,g,E,C,b,x,H,D,U=0)=>{for(let k=U;k<p.length;k++){const K=p[k]=D?Pn(p[k]):At(p[k]);w(null,K,g,E,C,b,x,H,D)}},V=(p,g,E,C,b,x,H)=>{const D=g.el=p.el;let{patchFlag:U,dynamicChildren:k,dirs:K}=g;U|=p.patchFlag&16;const Y=p.props||be,Q=g.props||be;let ie;if(E&&Zn(E,!1),(ie=Q.onVnodeBeforeUpdate)&&dt(ie,E,g,p),K&&jt(g,p,E,"beforeUpdate"),E&&Zn(E,!0),k?M(p.dynamicChildren,k,D,E,C,wc(g,b),x):H||G(p,g,D,null,E,C,wc(g,b),x,!1),U>0){if(U&16)te(D,g,Y,Q,E,C,b);else if(U&2&&Y.class!==Q.class&&i(D,"class",null,Q.class,b),U&4&&i(D,"style",Y.style,Q.style,b),U&8){const le=g.dynamicProps;for(let Ee=0;Ee<le.length;Ee++){const Ce=le[Ee],He=Y[Ce],Nt=Q[Ce];(Nt!==He||Ce==="value")&&i(D,Ce,He,Nt,b,p.children,E,C,Xe)}}U&1&&p.children!==g.children&&u(D,g.children)}else!H&&k==null&&te(D,g,Y,Q,E,C,b);((ie=Q.onVnodeUpdated)||K)&&ze(()=>{ie&&dt(ie,E,g,p),K&&jt(g,p,E,"updated")},C)},M=(p,g,E,C,b,x,H)=>{for(let D=0;D<g.length;D++){const U=p[D],k=g[D],K=U.el&&(U.type===pt||!Mt(U,k)||U.shapeFlag&70)?h(U.el):E;w(U,k,K,null,C,b,x,H,!0)}},te=(p,g,E,C,b,x,H)=>{if(E!==C){if(E!==be)for(const D in E)!zr(D)&&!(D in C)&&i(p,D,E[D],null,H,g.children,b,x,Xe);for(const D in C){if(zr(D))continue;const U=C[D],k=E[D];U!==k&&D!=="value"&&i(p,D,k,U,H,g.children,b,x,Xe)}"value"in C&&i(p,"value",E.value,C.value,H)}},L=(p,g,E,C,b,x,H,D,U)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:Y,dynamicChildren:Q,slotScopeIds:ie}=g;ie&&(D=D?D.concat(ie):ie),p==null?(r(k,E,C),r(K,E,C),O(g.children||[],E,K,b,x,H,D,U)):Y>0&&Y&64&&Q&&p.dynamicChildren?(M(p.dynamicChildren,Q,E,b,x,H,D),(g.key!=null||b&&g===b.subTree)&&_m(p,g,!0)):G(p,g,E,K,b,x,H,D,U)},Z=(p,g,E,C,b,x,H,D,U)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?b.ctx.activate(g,E,C,H,U):we(g,E,C,b,x,H,U):Te(p,g,U)},we=(p,g,E,C,b,x,H)=>{const D=p.component=yT(p,C,b);if(xi(p)&&(D.ctx.renderer=z),vT(D),D.asyncDep){if(b&&b.registerDep(D,W),!p.el){const U=D.subTree=Pe(ht);S(null,U,g,E)}}else W(D,p,g,E,b,x,H)},Te=(p,g,E)=>{const C=g.component=p.component;if(bw(p,g,E))if(C.asyncDep&&!C.asyncResolved){oe(C,g,E);return}else C.next=g,vw(C.update),C.effect.dirty=!0,C.update();else g.el=p.el,C.vnode=g},W=(p,g,E,C,b,x,H)=>{const D=()=>{if(p.isMounted){let{next:K,bu:Y,u:Q,parent:ie,vnode:le}=p;{const Mr=ym(p);if(Mr){K&&(K.el=le.el,oe(p,K,H)),Mr.asyncDep.then(()=>{p.isUnmounted||D()});return}}let Ee=K,Ce;Zn(p,!1),K?(K.el=le.el,oe(p,K,H)):K=le,Y&&Gr(Y),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&dt(Ce,ie,K,le),Zn(p,!0);const He=gc(p),Nt=p.subTree;p.subTree=He,w(Nt,He,h(Nt.el),R(Nt),p,b,x),K.el=He.el,Ee===null&&ku(p,He.el),Q&&ze(Q,b),(Ce=K.props&&K.props.onVnodeUpdated)&&ze(()=>dt(Ce,ie,K,le),b)}else{let K;const{el:Y,props:Q}=g,{bm:ie,m:le,parent:Ee}=p,Ce=pr(g);if(Zn(p,!1),ie&&Gr(ie),!Ce&&(K=Q&&Q.onVnodeBeforeMount)&&dt(K,Ee,g),Zn(p,!0),Y&&Se){const He=()=>{p.subTree=gc(p),Se(Y,p.subTree,p,b,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&He()):He()}else{const He=p.subTree=gc(p);w(null,He,E,C,p,b,x),g.el=He.el}if(le&&ze(le,b),!Ce&&(K=Q&&Q.onVnodeMounted)){const He=g;ze(()=>dt(K,Ee,He),b)}(g.shapeFlag&256||Ee&&pr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&ze(p.a,b),p.isMounted=!0,g=E=C=null}},U=p.effect=new Eu(D,St,()=>wa(k),p.scope),k=p.update=()=>{U.dirty&&U.run()};k.id=p.uid,Zn(p,!0),k()},oe=(p,g,E)=>{g.component=p;const C=p.vnode.props;p.vnode=g,p.next=null,sT(p,g.props,C,E),aT(p,g.children,E),Sr(),wf(p),Cr()},G=(p,g,E,C,b,x,H,D,U=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,Y=g.children,{patchFlag:Q,shapeFlag:ie}=g;if(Q>0){if(Q&128){En(k,Y,E,C,b,x,H,D,U);return}else if(Q&256){Ot(k,Y,E,C,b,x,H,D,U);return}}ie&8?(K&16&&Xe(k,b,x),Y!==k&&u(E,Y)):K&16?ie&16?En(k,Y,E,C,b,x,H,D,U):Xe(k,b,x,!0):(K&8&&u(E,""),ie&16&&O(Y,E,C,b,x,H,D,U))},Ot=(p,g,E,C,b,x,H,D,U)=>{p=p||Kr,g=g||Kr;const k=p.length,K=g.length,Y=Math.min(k,K);let Q;for(Q=0;Q<Y;Q++){const ie=g[Q]=U?Pn(g[Q]):At(g[Q]);w(p[Q],ie,E,null,b,x,H,D,U)}k>K?Xe(p,b,x,!0,!1,Y):O(g,E,C,b,x,H,D,U,Y)},En=(p,g,E,C,b,x,H,D,U)=>{let k=0;const K=g.length;let Y=p.length-1,Q=K-1;for(;k<=Y&&k<=Q;){const ie=p[k],le=g[k]=U?Pn(g[k]):At(g[k]);if(Mt(ie,le))w(ie,le,E,null,b,x,H,D,U);else break;k++}for(;k<=Y&&k<=Q;){const ie=p[Y],le=g[Q]=U?Pn(g[Q]):At(g[Q]);if(Mt(ie,le))w(ie,le,E,null,b,x,H,D,U);else break;Y--,Q--}if(k>Y){if(k<=Q){const ie=Q+1,le=ie<K?g[ie].el:C;for(;k<=Q;)w(null,g[k]=U?Pn(g[k]):At(g[k]),E,le,b,x,H,D,U),k++}}else if(k>Q)for(;k<=Y;)ft(p[k],b,x,!0),k++;else{const ie=k,le=k,Ee=new Map;for(k=le;k<=Q;k++){const yt=g[k]=U?Pn(g[k]):At(g[k]);yt.key!=null&&Ee.set(yt.key,k)}let Ce,He=0;const Nt=Q-le+1;let Mr=!1,uf=0;const Ds=new Array(Nt);for(k=0;k<Nt;k++)Ds[k]=0;for(k=ie;k<=Y;k++){const yt=p[k];if(He>=Nt){ft(yt,b,x,!0);continue}let $t;if(yt.key!=null)$t=Ee.get(yt.key);else for(Ce=le;Ce<=Q;Ce++)if(Ds[Ce-le]===0&&Mt(yt,g[Ce])){$t=Ce;break}$t===void 0?ft(yt,b,x,!0):(Ds[$t-le]=k+1,$t>=uf?uf=$t:Mr=!0,w(yt,g[$t],E,null,b,x,H,D,U),He++)}const hf=Mr?dT(Ds):Kr;for(Ce=hf.length-1,k=Nt-1;k>=0;k--){const yt=le+k,$t=g[yt],ff=yt+1<K?g[yt+1].el:C;Ds[k]===0?w(null,$t,E,ff,b,x,H,D,U):Mr&&(Ce<0||k!==hf[Ce]?Bt($t,E,ff,2):Ce--)}}},Bt=(p,g,E,C,b=null)=>{const{el:x,type:H,transition:D,children:U,shapeFlag:k}=p;if(k&6){Bt(p.component.subTree,g,E,C);return}if(k&128){p.suspense.move(g,E,C);return}if(k&64){H.move(p,g,E,z);return}if(H===pt){r(x,g,E);for(let Y=0;Y<U.length;Y++)Bt(U[Y],g,E,C);r(p.anchor,g,E);return}if(H===Ws){m(p,g,E);return}if(C!==2&&k&1&&D)if(C===0)D.beforeEnter(x),r(x,g,E),ze(()=>D.enter(x),b);else{const{leave:Y,delayLeave:Q,afterLeave:ie}=D,le=()=>r(x,g,E),Ee=()=>{Y(x,()=>{le(),ie&&ie()})};Q?Q(x,le,Ee):Ee()}else r(x,g,E)},ft=(p,g,E,C=!1,b=!1)=>{const{type:x,props:H,ref:D,children:U,dynamicChildren:k,shapeFlag:K,patchFlag:Y,dirs:Q}=p;if(D!=null&&Ho(D,null,E,p,!0),K&256){g.ctx.deactivate(p);return}const ie=K&1&&Q,le=!pr(p);let Ee;if(le&&(Ee=H&&H.onVnodeBeforeUnmount)&&dt(Ee,g,p),K&6)eo(p.component,E,C);else{if(K&128){p.suspense.unmount(E,C);return}ie&&jt(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,E,b,z,C):k&&(x!==pt||Y>0&&Y&64)?Xe(k,g,E,!1,!0):(x===pt&&Y&384||!b&&K&16)&&Xe(U,g,E),C&&Dr(p)}(le&&(Ee=H&&H.onVnodeUnmounted)||ie)&&ze(()=>{Ee&&dt(Ee,g,p),ie&&jt(p,null,g,"unmounted")},E)},Dr=p=>{const{type:g,el:E,anchor:C,transition:b}=p;if(g===pt){xr(E,C);return}if(g===Ws){v(p);return}const x=()=>{s(E),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:H,delayLeave:D}=b,U=()=>H(E,x);D?D(p.el,x,U):U()}else x()},xr=(p,g)=>{let E;for(;p!==g;)E=f(p),s(p),p=E;s(g)},eo=(p,g,E)=>{const{bum:C,scope:b,update:x,subTree:H,um:D}=p;C&&Gr(C),b.stop(),x&&(x.active=!1,ft(H,p,g,E)),D&&ze(D,g),ze(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Xe=(p,g,E,C=!1,b=!1,x=0)=>{for(let H=x;H<p.length;H++)ft(p[H],g,E,C,b)},R=p=>p.shapeFlag&6?R(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el);let q=!1;const j=(p,g,E)=>{p==null?g._vnode&&ft(g._vnode,null,null,!0):w(g._vnode||null,p,g,null,null,null,E),q||(q=!0,wf(),Uo(),q=!1),g._vnode=p},z={p:w,um:ft,m:Bt,r:Dr,mt:we,mc:O,pc:G,pbc:M,n:R,o:t};let me,Se;return e&&([me,Se]=e(z)),{render:j,hydrate:me,createApp:nT(j,me)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _m(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||_m(o,a)),a.type===cs&&(a.el=o.el)}}function dT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ym(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ym(e)}const pT=t=>t.__isTeleport,pt=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),zs=[];let Ct=null;function qt(t=!1){zs.push(Ct=t?null:[])}function vm(){zs.pop(),Ct=zs[zs.length-1]||null}let ls=1;function Mf(t){ls+=t}function Em(t){return t.dynamicChildren=ls>0?Ct||Kr:null,vm(),ls>0&&Ct&&Ct.push(t),t}function dx(t,e,n,r,s,i){return Em(Tm(t,e,n,r,s,i,!0))}function cn(t,e,n,r,s){return Em(Pe(t,e,n,r,s,!0))}function us(t){return t?t.__v_isVNode===!0:!1}function Mt(t,e){return t.type===e.type&&t.key===e.key}const ba="__vInternal",wm=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||it(t)||re(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function Tm(t,e=null,n=null,r=0,s=null,i=t===pt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wm(e),ref:e&&Ao(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Uu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),ls>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Pe=gT;function gT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gg)&&(t=ht),us(t)){const a=pn(t,e,!0);return n&&Uu(a,n),ls>0&&!i&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(IT(t)&&(t=t.__vccOpts),e){e=Im(e);let{class:a,style:c}=e;a&&!ke(a)&&(e.class=va(a)),Ie(c)&&(Ug(c)&&!X(c)&&(c=je({},c)),e.style=ya(c))}const o=ke(t)?1:Jg(t)?128:pT(t)?64:Ie(t)?4:re(t)?2:0;return Tm(t,e,n,r,s,o,i,!0)}function Im(t){return t?Ug(t)||ba in t?je({},t):t:null}function pn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bm(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wm(a),ref:e&&e.ref?n&&s?X(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Am(t=" ",e=0){return Pe(cs,null,t,e)}function px(t,e){const n=Pe(Ws,null,t);return n.staticCount=e,n}function gx(t="",e=!1){return e?(qt(),cn(ht,null,t)):Pe(ht,null,t)}function At(t){return t==null||typeof t=="boolean"?Pe(ht):X(t)?Pe(pt,null,t.slice()):typeof t=="object"?Pn(t):Pe(cs,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ba in e)?e._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),r&64?(n=16,e=[Am(e)]):n=8);t.children=e,t.shapeFlag|=n}function bm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=va([e.class,r.class]));else if(s==="style")e.style=ya([e.style,r.style]);else if(Oi(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dt(t,e,n,r=null){Pt(t,e,7,[n,r])}const mT=cm();let _T=0;function yT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mT,i={uid:_T++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hm(r,s),emitsOptions:zg(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ww.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const Bu=()=>Be||Ve;let qo,gl;{const t=Tg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qo=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),gl=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Mi=t=>{const e=Be;return qo(t),t.scope.on(),()=>{t.scope.off(),qo(e)}},Lf=()=>{Be&&Be.scope.off(),qo(null)};function Rm(t){return t.vnode.shapeFlag&4}let Li=!1;function vT(t,e=!1){e&&gl(e);const{props:n,children:r}=t.vnode,s=Rm(t);rT(t,n,s,e),oT(t,r);const i=s?ET(t,e):void 0;return e&&gl(!1),i}function ET(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ru(new Proxy(t.ctx,Qw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?TT(t):null,i=Mi(t);Sr();const o=$n(r,t,0,[t.props,s]);if(Cr(),i(),yg(o)){if(o.then(Lf,Lf),e)return o.then(a=>{ml(t,a,e)}).catch(a=>{Is(a,t,0)});t.asyncDep=o}else ml(t,o,e)}else Sm(t,e)}function ml(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Hg(e)),Sm(t,n)}let Vf;function Sm(t,e,n){const r=t.type;if(!t.render){if(!e&&Vf&&!r.render){const s=r.template||Vu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=Vf(s,l)}}t.render=r.render||St}{const s=Mi(t);Sr();try{Jw(t)}finally{Cr(),s()}}}function wT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _t(t,"get","$attrs"),e[n]}}))}function TT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wT(t)},slots:t.slots,emit:t.emit,expose:e}}function Ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hg(Ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}}))}function _l(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function IT(t){return re(t)&&"__vccOpts"in t}const bt=(t,e)=>uw(t,e,Li);function Et(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!X(e)?us(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&us(n)&&(n=[n]),Pe(t,e,n))}const Cm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const AT="http://www.w3.org/2000/svg",bT="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Ff=kn&&kn.createElement("template"),RT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(AT,t):e==="mathml"?kn.createElementNS(bT,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ff.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Ff.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},In="transition",xs="animation",hi=Symbol("_vtc"),Sa=(t,{slots:e})=>Et(Fw,ST(t),e);Sa.displayName="Transition";const Pm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sa.props=je({},Zg,Pm);const er=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function ST(t){const e={};for(const L in t)L in Pm||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=CT(s),w=_&&_[0],A=_&&_[1],{onBeforeEnter:S,onEnter:y,onEnterCancelled:m,onLeave:v,onLeaveCancelled:I,onBeforeAppear:T=S,onAppear:N=y,onAppearCancelled:O=m}=e,V=(L,Z,we)=>{tr(L,Z?u:a),tr(L,Z?l:o),we&&we()},M=(L,Z)=>{L._isLeaving=!1,tr(L,h),tr(L,d),tr(L,f),Z&&Z()},te=L=>(Z,we)=>{const Te=L?N:y,W=()=>V(Z,L,we);er(Te,[Z,W]),Bf(()=>{tr(Z,L?c:i),An(Z,L?u:a),Uf(Te)||$f(Z,r,w,W)})};return je(e,{onBeforeEnter(L){er(S,[L]),An(L,i),An(L,o)},onBeforeAppear(L){er(T,[L]),An(L,c),An(L,l)},onEnter:te(!1),onAppear:te(!0),onLeave(L,Z){L._isLeaving=!0;const we=()=>M(L,Z);An(L,h),OT(),An(L,f),Bf(()=>{L._isLeaving&&(tr(L,h),An(L,d),Uf(v)||$f(L,r,A,we))}),er(v,[L,we])},onEnterCancelled(L){V(L,!1),er(m,[L])},onAppearCancelled(L){V(L,!0),er(O,[L])},onLeaveCancelled(L){M(L),er(I,[L])}})}function CT(t){if(t==null)return null;if(Ie(t))return[Tc(t.enter),Tc(t.leave)];{const e=Tc(t);return[e,e]}}function Tc(t){return wg(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[hi]||(t[hi]=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[hi];n&&(n.delete(e),n.size||(t[hi]=void 0))}function Bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let PT=0;function $f(t,e,n,r){const s=t._endId=++PT,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=kT(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function kT(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${In}Delay`),i=r(`${In}Duration`),o=jf(s,i),a=r(`${xs}Delay`),c=r(`${xs}Duration`),l=jf(a,c);let u=null,h=0,f=0;e===In?o>0&&(u=In,h=o,f=i.length):e===xs?l>0&&(u=xs,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?In:xs:null,f=u?u===In?i.length:c.length:0);const d=u===In&&/\b(transform|all)(,|$)/.test(r(`${In}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function jf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hf(n)+Hf(t[r])))}function Hf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function OT(){return document.body.offsetHeight}function NT(t,e,n){const r=t[hi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qf=Symbol("_vod"),DT=Symbol("_vsh"),xT=Symbol(""),MT=/(^|;)\s*display\s*:/;function LT(t,e,n){const r=t.style,s=ke(n);let i=!1;if(n&&!s){if(e)if(ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bo(r,a,"")}else for(const o in e)n[o]==null&&bo(r,o,"");for(const o in n)o==="display"&&(i=!0),bo(r,o,n[o])}else if(s){if(e!==n){const o=r[xT];o&&(n+=";"+o),r.cssText=n,i=MT.test(n)}}else e&&t.removeAttribute("style");qf in t&&(t[qf]=i?r.display:"",t[DT]&&(r.display="none"))}const Kf=/\s*!important$/;function bo(t,e,n){if(X(n))n.forEach(r=>bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VT(t,e);Kf.test(n)?t.setProperty(Ts(r),n.replace(Kf,""),"important"):t[r]=n}}const Wf=["Webkit","Moz","ms"],Ic={};function VT(t,e){const n=Ic[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Ic[e]=r;r=_a(r);for(let s=0;s<Wf.length;s++){const i=Wf[s]+r;if(i in t)return Ic[e]=i}return e}const zf="http://www.w3.org/1999/xlink";function FT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zf,e.slice(6,e.length)):t.setAttributeNS(zf,e,n);else{const i=$E(e);n==null||i&&!Ig(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function UT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ig(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function BT(t,e,n,r){t.removeEventListener(e,n,r)}const Gf=Symbol("_vei");function $T(t,e,n,r,s=null){const i=t[Gf]||(t[Gf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=jT(e);if(r){const l=i[e]=KT(r,s);Vr(t,a,l,c)}else o&&(BT(t,a,o,c),i[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function jT(t){let e;if(Qf.test(t)){e={};let r;for(;r=t.match(Qf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let Ac=0;const HT=Promise.resolve(),qT=()=>Ac||(HT.then(()=>Ac=0),Ac=Date.now());function KT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(WT(r,n.value),e,5,[r])};return n.value=t,n.attached=qT(),n}function WT(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?NT(t,r,l):e==="style"?LT(t,n,r):Oi(e)?_u(e)||$T(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GT(t,e,r,l))?UT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),FT(t,e,r,l))};function GT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jf(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jf(e)&&ke(n)?!1:e in t}const Yf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Gr(e,n):e};function QT(t){t.target.composing=!0}function Xf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bc=Symbol("_assign"),mx={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bc]=Yf(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=rl(a)),t[bc](a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",QT),Vr(t,"compositionend",Xf),Vr(t,"change",Xf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[bc]=Yf(i),t.composing)return;const o=s||t.type==="number"?rl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},km=je({patchProp:zT},RT);let Gs,Zf=!1;function JT(){return Gs||(Gs=hT(km))}function YT(){return Gs=Zf?Gs:fT(km),Zf=!0,Gs}const XT=(...t)=>{const e=JT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Nm(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Om(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},ZT=(...t)=>{const e=YT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Nm(r);if(s)return n(s,!0,Om(s))},e};function Om(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Nm(t){return ke(t)?document.querySelector(t):t}const eI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,tI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,nI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function rI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){sI(t);return}return e}function sI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ko(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!nI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(eI.test(t)||tI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,rI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const iI=/#/g,oI=/&/g,aI=/\//g,cI=/=/g,$u=/\+/g,lI=/%5e/gi,uI=/%60/gi,hI=/%7c/gi,fI=/%20/gi;function dI(t){return encodeURI(""+t).replace(hI,"|")}function yl(t){return dI(typeof t=="string"?t:JSON.stringify(t)).replace($u,"%2B").replace(fI,"+").replace(iI,"%23").replace(oI,"%26").replace(uI,"`").replace(lI,"^").replace(aI,"%2F")}function Rc(t){return yl(t).replace(cI,"%3D")}function Wo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function pI(t){return Wo(t.replace($u," "))}function gI(t){return Wo(t.replace($u," "))}function mI(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=pI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=gI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function _I(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Rc(t)}=${yl(n)}`).join("&"):`${Rc(t)}=${yl(e)}`:Rc(t)}function yI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>_I(e,t[e])).filter(Boolean).join("&")}const vI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,EI=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,wI=/^([/\\]\s*){2,}[^/\\]/,TI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,II=/\/$|\/\?|\/#/,AI=/^\.?\//;function Pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?vI.test(t):EI.test(t)||(e.acceptRelative?wI.test(t):!1)}function bI(t){return!!t&&TI.test(t)}function vl(t="",e){return e?II.test(t):t.endsWith("/")}function ju(t="",e){if(!e)return(vl(t)?t.slice(0,-1):t)||"/";if(!vl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function El(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(vl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function RI(t=""){return t.startsWith("/")}function ed(t=""){return RI(t)?t:"/"+t}function SI(t,e){if(xm(e)||Pr(t))return t;const n=ju(e);return t.startsWith(n)?t:Hu(n,t)}function td(t,e){if(xm(e))return t;const n=ju(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Dm(t,e){const n=Ca(t),r={...mI(n.search),...e};return n.search=yI(r),kI(n)}function xm(t){return!t||t==="/"}function CI(t){return t&&t!=="/"}function Hu(t,...e){let n=t||"";for(const r of e.filter(s=>CI(s)))if(n){const s=r.replace(AI,"");n=El(n)+s}else n=r;return n}function Mm(...t){var o,a,c,l;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[h,f]of u.split(e).entries())if(!(!f||f===".")){if(f===".."){if(r.length===1&&Pr(r[0]))continue;r.pop(),s--;continue}if(h===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+f;continue}r.push(f),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(l=n[n.length-1])!=null&&l.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function PI(t,e,n={}){return n.trailingSlash||(t=El(t),e=El(e)),n.leadingSlash||(t=ed(t),e=ed(e)),n.encoding||(t=Wo(t),e=Wo(e)),t===e}const Lm=Symbol.for("ufo:protocolRelative");function Ca(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,f=""]=n;return{protocol:h.toLowerCase(),pathname:f,href:h+f,auth:"",host:"",search:"",hash:""}}if(!Pr(t,{acceptRelative:!0}))return e?Ca(e+t):nd(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:c,search:l,hash:u}=nd(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:l,hash:u,[Lm]:!r}}function nd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function kI(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Lm]?(t.protocol||"")+"//":"")+s+i+e+n+r}class OI extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function NI(t){var c,l,u,h,f;const e=((c=t.error)==null?void 0:c.message)||((l=t.error)==null?void 0:l.toString())||"",n=((u=t.request)==null?void 0:u.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((f=t.request)==null?void 0:f.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new OI(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[_]}});return a}const DI=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function rd(t="GET"){return DI.has(t.toUpperCase())}function xI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const MI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),LI=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function VI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return LI.test(e)?"json":MI.has(e)||e.startsWith("text/")?"text":"blob"}function FI(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const UI=new Set([408,409,425,429,500,502,503,504]),BI=new Set([101,204,205,304]);function Vm(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=rd(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):UI.has(h))){const f=a.options.retryDelay||0;return f>0&&await new Promise(d=>setTimeout(d,f)),i(a.request,{...a.options,retry:u-1})}}const l=NI(a);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(c,l={}){var d;const u={request:c,options:FI(l,t.defaults,n),response:void 0,error:void 0};u.options.method=(d=u.options.method)==null?void 0:d.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=SI(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=Dm(u.request,{...u.options.params,...u.options.query}))),u.options.body&&rd(u.options.method)&&(xI(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let h;if(!u.options.signal&&u.options.timeout){const _=new r;h=setTimeout(()=>_.abort(),u.options.timeout),u.options.signal=_.signal}try{u.response=await e(u.request,u.options)}catch(_){return u.error=_,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}finally{h&&clearTimeout(h)}if(u.response.body&&!BI.has(u.response.status)&&u.options.method!=="HEAD"){const _=(u.options.parseResponse?"json":u.options.responseType)||VI(u.response.headers.get("content-type")||"");switch(_){case"json":{const w=await u.response.text(),A=u.options.parseResponse||Ko;u.response._data=A(w);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[_]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(c,l){return(await i(c,l))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>Vm({...t,defaults:{...t.defaults,...a}}),o}const qu=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),$I=qu.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),jI=qu.Headers,HI=qu.AbortController,qI=Vm({fetch:$I,Headers:jI,AbortController:HI}),KI=qI,WI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},zo=WI().app,zI=()=>zo.baseURL,GI=()=>zo.buildAssetsDir,Ku=(...t)=>Mm(Fm(),GI(),...t),Fm=(...t)=>{const e=zo.cdnURL||zo.baseURL;return t.length?Mm(e,...t):e};globalThis.__buildAssetsURL=Ku,globalThis.__publicAssetsURL=Fm;globalThis.$fetch||(globalThis.$fetch=KI.create({baseURL:zI()}));function wl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?wl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const QI={run:t=>t()},JI=()=>QI,Um=typeof console.createTask<"u"?console.createTask:JI;function YI(t,e){const n=e.shift(),r=Um(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function XI(t,e){const n=e.shift(),r=Um(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Sc(t,e){for(const n of[...t])n(e)}class ZI{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=wl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=wl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(YI,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(XI,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Sc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Sc(this._after,s)}):(this._after&&s&&Sc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Bm(){return new ZI}function e0(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;Tl.add(l);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{Tl.delete(l)}}}}function t0(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=e0({...t,...r})),e[n],e[n]}}}const Go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},sd="__unctx__",n0=Go[sd]||(Go[sd]=t0()),r0=(t,e={})=>n0.get(t,e),id="__unctx_async_handlers__",Tl=Go[id]||(Go[id]=new Set);function fi(t){const e=[];for(const s of Tl){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const $m=r0("nuxt-app",{asyncContext:!1}),s0="__nuxt_plugin";function i0(t){let e=0;const n={_scope:Rg(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return n.vueApp.version}},payload:Qn({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>n._scope.run(()=>c0(n,s)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Bm(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;uo(n,o,i),uo(n.vueApp.config.globalProperties,o,i)},uo(n.vueApp,"$nuxt",n),uo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Ne;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}async function o0(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function a0(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var u;const l=((u=c.dependsOn)==null?void 0:u.filter(h=>e.some(f=>f._name===h)&&!n.includes(h)))??[];if(l.length>0)r.push([new Set(l),c]);else{const h=o0(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([f,d])=>{f.has(c._name)&&(f.delete(c._name),f.size===0&&(o++,await a(d)))})))});c.parallel?s.push(h.catch(f=>i.push(f))):await h}}for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function sn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[s0]:!0,_name:e})}function c0(t,e,n){const r=()=>n?e(...n):e();return $m.set(t),t.vueApp.runWithContext(r)}function l0(){var e;let t;return lm()&&(t=(e=Bu())==null?void 0:e.appContext.app.$nuxt),t=t||$m.tryUse(),t||null}function Ne(){const t=l0();if(!t)throw new Error("[nuxt] instance unavailable");return t}function Pa(t){return Ne().$config}function uo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function u0(t,e){return{ctx:{table:t},matchAll:n=>Hm(n,t,e)}}function jm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,jm(s)])):new Map(Object.entries(t[n]));return e}function h0(t){return u0(jm(t))}function Hm(t,e,n){n!==!0&&t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of od(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of od(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Hm(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function od(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Cc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Il(t,e,n=".",r){if(!Cc(e))return Il(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Cc(o)&&Cc(s[i])?s[i]=Il(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function qm(t){return(...e)=>e.reduce((n,r)=>Il(n,r,"",t),{})}const Km=qm(),f0=qm((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function d0(t,e){try{return e in t}catch{return!1}}var p0=Object.defineProperty,g0=(t,e,n)=>e in t?p0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nr=(t,e,n)=>(g0(t,typeof e!="symbol"?e+"":e,n),n);class Al extends Error{constructor(e,n={}){super(e,n),nr(this,"statusCode",500),nr(this,"fatal",!1),nr(this,"unhandled",!1),nr(this,"statusMessage"),nr(this,"data"),nr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Rl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Wm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}nr(Al,"__h3_error__",!0);function bl(t){if(typeof t=="string")return new Al(t);if(m0(t))return t;const e=new Al(t.message??t.statusMessage??"",{cause:t.cause||t});if(d0(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Rl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Rl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Wm(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function m0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const _0=/[^\u0009\u0020-\u007E]/g;function Wm(t=""){return t.replace(_0,"")}function Rl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const zm=Symbol("layout-meta"),Vi=Symbol("route"),on=()=>{var t;return(t=Ne())==null?void 0:t.$router},Wu=()=>lm()?ut(Vi,Ne()._route):Ne()._route;const y0=()=>{try{if(Ne()._processingMiddleware)return!0}catch{return!1}return!1},_x=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Dm(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){const{target:a="_blank",windowFeatures:c={}}=e.open,l=Object.entries(c).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");return open(n,a,l),Promise.resolve()}const r=(e==null?void 0:e.external)||Pr(n,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Ca(n).protocol;if(a&&bI(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=y0();if(!r&&s)return t;const i=on(),o=Ne();return r?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},Gm="__nuxt_error",ka=()=>gw(Ne().payload,"error"),jr=t=>{const e=Oa(t);try{const n=Ne(),r=ka();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},v0=async(t={})=>{const e=Ne(),n=ka();e.callHook("app:error:cleared",t),t.redirect&&await on().replace(t.redirect),n.value=null},E0=t=>!!t&&typeof t=="object"&&Gm in t,Oa=t=>{const e=bl(t);return Object.defineProperty(e,Gm,{value:!0,configurable:!1,writable:!1}),e},w0="modulepreload",T0=function(t,e){return t[0]==="."?new URL(t,e).href:t},ad={},I0=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=T0(c,r),c in ad)return;ad[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const _=i[d];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":w0,l||(f.as="script",f.crossOrigin=""),f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},di=(...t)=>I0(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),A0=-1,b0=-2,R0=-3,S0=-4,C0=-5,P0=-6;function k0(t,e){return O0(JSON.parse(t),e)}function O0(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===A0)return;if(i===R0)return NaN;if(i===S0)return 1/0;if(i===C0)return-1/0;if(i===P0)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=e==null?void 0:e[c];if(l)return r[i]=l(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let d=1;d<a.length;d+=1)u.add(s(a[d]));break;case"Map":const h=new Map;r[i]=h;for(let d=1;d<a.length;d+=2)h.set(s(a[d]),s(a[d+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=s(a[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==b0&&(c[l]=s(u))}}else{const c={};r[i]=c;for(const l in a){const u=a[l];c[l]=s(u)}}return r[i]}return s(0)}function N0(t){return Array.isArray(t)?t:[t]}const D0=["title","titleTemplate","script","style","noscript"],Ro=["base","meta","link","style","script","noscript"],x0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],M0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Qm=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],L0=typeof window<"u";function zu(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function cd(t){return t._h||zu(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Jm(t,e){const{props:n,tag:r}=t;if(M0.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function ld(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function V0(t,e,n){const r={tag:t,props:await Ym(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return Qm.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||D0.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function F0(t,e){const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,s])=>t==="style"?`${r}:${s}`:r)),(Array.isArray(e)?e.join(n):e).split(n).filter(r=>r.trim()).filter(Boolean).join(n)}async function Ym(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=F0(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!Qm.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const U0=10;async function B0(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&x0.includes(n)).forEach(([n,r])=>{const s=N0(r);e.push(...s.map(i=>V0(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<U0)+r,n))}const ud={base:-10,title:10},hd={critical:-80,high:-10,low:20};function Qo(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in ud&&(e=ud[t.tag]),typeof n=="string"&&n in hd?e+hd[n]:e)}const $0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],fd=["onload","onerror","onabort","onprogress","onloadstart"],bn="%separator";function So(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((c,l)=>c&&c[l]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())}),t.includes(bn)&&(t.endsWith(bn)&&(t=t.slice(0,-bn.length).trim()),t.startsWith(bn)&&(t=t.slice(bn.length).trim()),t=t.replace(new RegExp(`\\${bn}\\s*\\${bn}`,"g"),bn),t=So(t,{separator:n},n)),t}async function Xm(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(h=>({tag:h,id:Ro.includes(h.tag)?cd(h):h.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n[h])==null?void 0:u.children,d=[];for(const _ of[...f].filter(w=>Ro.includes(w.tagName.toLowerCase()))){const w={tag:_.tagName.toLowerCase(),props:await Ym(_.getAttributeNames().reduce((y,m)=>({...y,[m]:_.getAttribute(m)}),{})),innerHTML:_.innerHTML};let A=1,S=Jm(w);for(;S&&d.find(y=>y._d===S);)S=`${S}:${A++}`;w._d=S||void 0,d.push(w),i.elMap[_.getAttribute("data-hid")||cd(w)]=_}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const _=`${h}:${f}`;i.sideEffects[_]=d,delete i.pendingSideEffects[_]}function a({id:h,$el:f,tag:d}){const _=d.tag.endsWith("Attrs");i.elMap[h]=f,_||(["textContent","innerHTML"].forEach(w=>{d[w]&&d[w]!==f[w]&&(f[w]=d[w])}),o(h,"el",()=>{var w;(w=i.elMap[h])==null||w.remove(),delete i.elMap[h]}));for(const[w,A]of Object.entries(d._eventHandlers||{}))f.getAttribute(`data-${w}`)!==""&&((d.tag==="bodyAttrs"?n.defaultView:f).addEventListener(w.replace("on",""),A.bind(f)),f.setAttribute(`data-${w}`,""));Object.entries(d.props).forEach(([w,A])=>{const S=`attr:${w}`;if(w==="class")for(const y of(A||"").split(" ").filter(Boolean))_&&o(h,`${S}:${y}`,()=>f.classList.remove(y)),!f.classList.contains(y)&&f.classList.add(y);else if(w==="style")for(const y of(A||"").split(";").filter(Boolean)){const[m,...v]=y.split(":").map(I=>I.trim());o(h,`${S}:${y}:${m}`,()=>{f.style.removeProperty(m)}),f.style.setProperty(m,v.join(":"))}else f.getAttribute(w)!==A&&f.setAttribute(w,A===!0?"":String(A)),_&&o(h,S,()=>f.removeAttribute(w))})}const c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:f,shouldRender:d,id:_}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[_],h.$el?a(h):Ro.includes(f.tag)&&c.push(h)}}for(const h of c){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),l[f]=l[f]||n.createDocumentFragment(),l[f].appendChild(h.$el)}for(const h of s)await t.hooks.callHook("dom:renderTag",h,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function j0(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await Xm(t,e),delete t._domUpdatePromise,r()}))}function H0(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){j0(i,t)}}}}}const q0=["templateParams","htmlAttrs","bodyAttrs"],K0={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=Jm(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&q0.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{c[l]&&(r.props[l]?(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`):r.props[l]=c[l])}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(Qo(r)>Qo(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Ro.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},W0={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},z0=["script","link","bodyAttrs"],G0=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>z0.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&fd.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||zu(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>fd.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),Q0=["link","style","script","noscript"],J0={hooks:{"tag:normalise":({tag:t})=>{t.key&&Q0.includes(t.tag)&&(t.props["data-hid"]=t._h=zu(t.key))}}},Y0={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of $0)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Qo(n)-Qo(r))}}},X0={meta:"content",link:"href",htmlAttrs:"lang"},Z0=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(c=>c.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(c=>c.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=So(i.pageTitle||r||"",i,o);for(const c of n.filter(l=>l.processTemplateParams!==!1)){const l=X0[c.tag];l&&typeof c.props[l]=="string"?c.props[l]=So(c.props[l],i,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(u=>{typeof c[u]=="string"&&(c[u]=So(c[u],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(c=>c.tag!=="templateParams")}}}),eA={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=ld(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=ld(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},tA={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Zm;function nA(t={}){const e=rA(t);return e.use(H0()),Zm=e}function dd(t,e){return!t||t==="server"&&e||t==="client"&&!e}function rA(t={}){const e=Bm();e.addHooks(t.hooks||{}),t.document=t.document||(L0?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),dd(l.mode,n)&&e.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:s++,input:c,...l};return dd(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(h=>h._i!==u._i),e.callHook("entries:updated",a),r()},patch(h){i=i.map(f=>(f._i===u._i&&(f.input=u.input=h),f)),r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const h of await B0(l)){const f={tag:h,entry:l,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[K0,W0,G0,J0,Y0,Z0,eA,tA,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function sA(){return Zm}const iA=Cm.startsWith("3");function oA(t){return typeof t=="function"?t():Ae(t)}function Sl(t,e=""){if(t instanceof Promise)return t;const n=oA(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Sl(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Ae(s)]:[r,Sl(s,r)])):n}const aA={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Sl(e.input)}}},e_="usehead";function cA(t){return{install(n){iA&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(e_,t))}}.install}function lA(t={}){t.domDelayFn=t.domDelayFn||(n=>As(()=>setTimeout(()=>n(),0)));const e=nA(t);return e.use(aA),e.install=cA(e),e}const Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pl="__unhead_injection_handler__";function uA(t){Cl[Pl]=t}function yx(){if(Pl in Cl)return Cl[Pl]();const t=ut(e_);return t||sA()}const hA={nuxt:{buildId:"fc7aec7f-4bb6-4a08-8bb6-5cef6e07d9a8"}},fA=f0(hA);function t_(){const t=Ne();return t._appConfig||(t._appConfig=Qn(fA)),t._appConfig}const dA=!1,kl=!1,pA=!1,vx={componentName:"NuxtLink"},gA="#__nuxt";let Co,n_;function mA(){var e;const t=(e=t_().nuxt)==null?void 0:e.buildId;return Co=$fetch(Ku(`builds/meta/${t}.json`)),Co.then(n=>{n_=h0(n.matcher)}),Co}function Na(){return Co||mA()}async function Gu(t){return await Na(),Km({},...n_.matchAll(t).reverse())}function pd(t,e={}){const n=yA(t,e),r=Ne(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=vA(t).then(i=>i?r_(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const _A="_payload.json";function yA(t,e={}){var s;const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():(s=t_().nuxt)==null?void 0:s.buildId);return Hu(Pa().app.baseURL,n.pathname,_A+(r?`?${r}`:""))}async function r_(t){const e=fetch(t).then(n=>n.text().then(s_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function vA(t=Wu().path){if(t=ju(t),(await Na()).prerendered.includes(t))return!0;const n=await Gu(t);return!!n.prerender&&!n.redirect}let ho=null;async function EA(){if(ho)return ho;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await s_(t.textContent||""),n=t.dataset.src?await r_(t.dataset.src):void 0;return ho={...e,...n,...window.__NUXT__},ho}async function s_(t){return await k0(t,Ne()._payloadRevivers)}function wA(t,e){Ne()._payloadRevivers[t]=e}const gd={NuxtError:t=>Oa(t),EmptyShallowRef:t=>ai(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t)),EmptyRef:t=>Qt(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t)),ShallowRef:t=>ai(t),ShallowReactive:t=>Di(t),Ref:t=>Qt(t),Reactive:t=>Qn(t)},TA=sn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in gd)wA(r,gd[r]);Object.assign(t.payload,([e,n]=fi(()=>t.runWithContext(EA)),e=await e,n(),e)),window.__NUXT__=t.payload}}),IA=[],AA=sn({name:"nuxt:head",enforce:"pre",setup(t){const e=lA({plugins:IA});uA(()=>Ne().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Xm(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function bA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Lt(s)?s.map(t):t(s)}return n}const Qs=()=>{},Lt=Array.isArray,i_=/#/g,RA=/&/g,SA=/\//g,CA=/=/g,PA=/\?/g,o_=/\+/g,kA=/%5B/g,OA=/%5D/g,a_=/%5E/g,NA=/%60/g,c_=/%7B/g,DA=/%7C/g,l_=/%7D/g,xA=/%20/g;function Qu(t){return encodeURI(""+t).replace(DA,"|").replace(kA,"[").replace(OA,"]")}function MA(t){return Qu(t).replace(c_,"{").replace(l_,"}").replace(a_,"^")}function Ol(t){return Qu(t).replace(o_,"%2B").replace(xA,"+").replace(i_,"%23").replace(RA,"%26").replace(NA,"`").replace(c_,"{").replace(l_,"}").replace(a_,"^")}function LA(t){return Ol(t).replace(CA,"%3D")}function VA(t){return Qu(t).replace(i_,"%23").replace(PA,"%3F")}function FA(t){return t==null?"":VA(t).replace(SA,"%2F")}function pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const UA=/\/$/,BA=t=>t.replace(UA,"");function kc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:pi(o)}}function $A(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&u_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function u_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HA(t[n],e[n]))return!1;return!0}function HA(t,e){return Lt(t)?_d(t,e):Lt(e)?_d(e,t):t===e}function _d(t,e){return Lt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function KA(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BA(t)}const WA=/^[^#]+#/;function zA(t,e){return t.replace(WA,"#")+e}function GA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.scrollX,top:window.scrollY});function QA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=GA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yd(t,e){return(history.state?history.state.position-e:-1)+t}const Nl=new Map;function JA(t,e){Nl.set(t,e)}function YA(t){const e=Nl.get(t);return Nl.delete(t),e}let XA=()=>location.protocol+"//"+location.host;function h_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),md(c,"")}return md(n,t)+r+s}function ZA(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=h_(t,location),_=n.value,w=e.value;let A=0;if(f){if(n.value=d,e.value=f,o&&o===_){o=null;return}A=w?f.position-w.position:0}else r(d);s.forEach(S=>{S(n.value,_,{delta:A,type:gi.pop,direction:A?A>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:Da()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function vd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function eb(t){const{history:e,location:n}=window,r={value:h_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:XA()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,vd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ye({},s.value,e.state,{forward:c,scroll:Da()});i(u.current,u,!0);const h=ye({},vd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function f_(t){t=KA(t);const e=eb(t),n=ZA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:zA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),f_(t)}function nb(t){return typeof t=="string"||t&&typeof t=="object"}function d_(t){return typeof t=="string"||typeof t=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},p_=Symbol("");var Ed;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ed||(Ed={}));function fs(t,e){return ye(new Error,{type:t,[p_]:!0},e)}function an(t,e){return t instanceof Error&&p_ in t&&(e==null||!!(t.type&e))}const wd="[^/]+?",rb={sensitive:!1,strict:!1,start:!0,end:!0},sb=/[.+*?^${}()[\]/\\]/g;function ib(t,e){const n=ye({},rb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(sb,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:w,optional:A,regexp:S}=f;i.push({name:_,repeatable:w,optional:A});const y=S||wd;if(y!==wd){d+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+v.message)}}let m=w?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(m=A&&l.length<2?`(?:/${m})`:"/"+m),A&&(m+="?"),s+=m,d+=20,A&&(d+=-8),w&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=i[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:w,optional:A}=d,S=_ in l?l[_]:"";if(Lt(S)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=Lt(S)?S.join("/"):S;if(!y)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ob(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ab(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ob(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Td(r))return 1;if(Td(s))return-1}return s.length-r.length}function Td(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cb={type:0,value:""},lb=/[a-zA-Z0-9_]/;function ub(t){if(!t)return[[]];if(t==="/")return[[cb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:lb.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function hb(t,e,n){const r=ib(ub(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fb(t,e){const n=[],r=new Map;e=bd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,_=db(u);_.aliasOf=f&&f.record;const w=bd(e,u),A=[_];if("alias"in u){const m=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of m)A.push(ye({},_,{components:f?f.record.components:_.components,path:v,aliasOf:f?f.record:_}))}let S,y;for(const m of A){const{path:v}=m;if(h&&v[0]!=="/"){const I=h.record.path,T=I[I.length-1]==="/"?"":"/";m.path=h.record.path+(v&&T+v)}if(S=hb(m,h,w),f?f.alias.push(S):(y=y||S,y!==S&&y.alias.push(S),d&&u.name&&!Ad(S)&&o(u.name)),_.children){const I=_.children;for(let T=0;T<I.length;T++)i(I[T],S,f&&f.children[T])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return y?()=>{o(y)}:Qs}function o(u){if(d_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ab(u,n[h])>=0&&(u.record.path!==n[h].record.path||!g_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ad(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},_,w;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw fs(1,{location:u});w=f.record.name,d=ye(Id(h.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Id(u.params,f.keys.map(y=>y.name))),_=f.stringify(d)}else if(u.path!=null)_=u.path,f=n.find(y=>y.re.test(_)),f&&(d=f.parse(_),w=f.record.name);else{if(f=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw fs(1,{location:u,currentLocation:h});w=f.record.name,d=ye({},h.params,u.params),_=f.stringify(d)}const A=[];let S=f;for(;S;)A.unshift(S.record),S=S.parent;return{name:w,path:_,params:d,matched:A,meta:gb(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function db(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gb(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function bd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function g_(t,e){return e.children.some(n=>n===t||g_(t,n))}function mb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(o_," "),o=i.indexOf("="),a=pi(o<0?i:i.slice(0,o)),c=o<0?null:pi(i.slice(o+1));if(a in e){let l=e[a];Lt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rd(t){let e="";for(let n in t){const r=t[n];if(n=LA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(r)?r.map(i=>i&&Ol(i)):[r&&Ol(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function _b(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Lt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const yb=Symbol(""),Sd=Symbol(""),Ju=Symbol(""),Yu=Symbol(""),Dl=Symbol("");function Ms(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(fs(4,{from:n,to:e})):f instanceof Error?c(f):nb(f)?c(fs(2,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(f=>c(f))})}function Oc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(vb(c)){const u=(c.__vccOpts||c)[e];u&&i.push(On(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=bA(u)?u.default:u;o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&On(d,n,r,o,a,s)()}))}}return i}function vb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cd(t){const e=ut(Ju),n=ut(Yu),r=bt(()=>e.resolve(Ae(t.to))),s=bt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(hs.bind(null,u));if(f>-1)return f;const d=Pd(c[l-2]);return l>1&&Pd(u)===d&&h[h.length-1].path!==d?h.findIndex(hs.bind(null,c[l-2])):f}),i=bt(()=>s.value>-1&&Ib(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&u_(n.params,r.value.params));function a(c={}){return Tb(c)?e[Ae(t.replace)?"replace":"push"](Ae(t.to)).catch(Qs):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Eb=Jn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cd,setup(t,{slots:e}){const n=Qn(Cd(t)),{options:r}=ut(Ju),s=bt(()=>({[kd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Et("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wb=Eb;function Tb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ib(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Lt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kd=(t,e,n)=>t??e??n,Ab=Jn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ut(Dl),s=bt(()=>t.route||r.value),i=ut(Sd,0),o=bt(()=>{let l=Ae(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=bt(()=>s.value.matched[o.value]);gr(Sd,bt(()=>o.value+1)),gr(yb,a),gr(Dl,s);const c=Qt();return Xr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,_])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!hs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Od(n.default,{Component:f,route:l});const d=h.props[u],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,A=Et(f,ye({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Od(n.default,{Component:A,route:l})||A}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const m_=Ab;function bb(t){const e=fb(t.routes,t),n=t.parseQuery||mb,r=t.stringifyQuery||Rd,s=t.history,i=Ms(),o=Ms(),a=Ms(),c=ai(xt);let l=xt;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pc.bind(null,R=>""+R),h=Pc.bind(null,FA),f=Pc.bind(null,pi);function d(R,q){let j,z;return d_(R)?(j=e.getRecordMatcher(R),z=q):z=R,e.addRoute(z,j)}function _(R){const q=e.getRecordMatcher(R);q&&e.removeRoute(q)}function w(){return e.getRoutes().map(R=>R.record)}function A(R){return!!e.getRecordMatcher(R)}function S(R,q){if(q=ye({},q||c.value),typeof R=="string"){const g=kc(n,R,q.path),E=e.resolve({path:g.path},q),C=s.createHref(g.fullPath);return ye(g,E,{params:f(E.params),hash:pi(g.hash),redirectedFrom:void 0,href:C})}let j;if(R.path!=null)j=ye({},R,{path:kc(n,R.path,q.path).path});else{const g=ye({},R.params);for(const E in g)g[E]==null&&delete g[E];j=ye({},R,{params:h(g)}),q.params=h(q.params)}const z=e.resolve(j,q),me=R.hash||"";z.params=u(f(z.params));const Se=$A(r,ye({},R,{hash:MA(me),path:z.path})),p=s.createHref(Se);return ye({fullPath:Se,hash:me,query:r===Rd?_b(R.query):R.query||{}},z,{redirectedFrom:void 0,href:p})}function y(R){return typeof R=="string"?kc(n,R,c.value.path):ye({},R)}function m(R,q){if(l!==R)return fs(8,{from:q,to:R})}function v(R){return N(R)}function I(R){return v(ye(y(R),{replace:!0}))}function T(R){const q=R.matched[R.matched.length-1];if(q&&q.redirect){const{redirect:j}=q;let z=typeof j=="function"?j(R):j;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=y(z):{path:z},z.params={}),ye({query:R.query,hash:R.hash,params:z.path!=null?{}:R.params},z)}}function N(R,q){const j=l=S(R),z=c.value,me=R.state,Se=R.force,p=R.replace===!0,g=T(j);if(g)return N(ye(y(g),{state:typeof g=="object"?ye({},me,g.state):me,force:Se,replace:p}),q||j);const E=j;E.redirectedFrom=q;let C;return!Se&&jA(r,z,j)&&(C=fs(16,{to:E,from:z}),Bt(z,z,!0,!1)),(C?Promise.resolve(C):M(E,z)).catch(b=>an(b)?an(b,2)?b:En(b):G(b,E,z)).then(b=>{if(b){if(an(b,2))return N(ye({replace:p},y(b.to),{state:typeof b.to=="object"?ye({},me,b.to.state):me,force:Se}),q||E)}else b=L(E,z,!0,p,me);return te(E,z,b),b})}function O(R,q){const j=m(R,q);return j?Promise.reject(j):Promise.resolve()}function V(R){const q=xr.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(R):R()}function M(R,q){let j;const[z,me,Se]=Rb(R,q);j=Oc(z.reverse(),"beforeRouteLeave",R,q);for(const g of z)g.leaveGuards.forEach(E=>{j.push(On(E,R,q))});const p=O.bind(null,R,q);return j.push(p),Xe(j).then(()=>{j=[];for(const g of i.list())j.push(On(g,R,q));return j.push(p),Xe(j)}).then(()=>{j=Oc(me,"beforeRouteUpdate",R,q);for(const g of me)g.updateGuards.forEach(E=>{j.push(On(E,R,q))});return j.push(p),Xe(j)}).then(()=>{j=[];for(const g of Se)if(g.beforeEnter)if(Lt(g.beforeEnter))for(const E of g.beforeEnter)j.push(On(E,R,q));else j.push(On(g.beforeEnter,R,q));return j.push(p),Xe(j)}).then(()=>(R.matched.forEach(g=>g.enterCallbacks={}),j=Oc(Se,"beforeRouteEnter",R,q,V),j.push(p),Xe(j))).then(()=>{j=[];for(const g of o.list())j.push(On(g,R,q));return j.push(p),Xe(j)}).catch(g=>an(g,8)?g:Promise.reject(g))}function te(R,q,j){a.list().forEach(z=>V(()=>z(R,q,j)))}function L(R,q,j,z,me){const Se=m(R,q);if(Se)return Se;const p=q===xt,g=Fr?history.state:{};j&&(z||p?s.replace(R.fullPath,ye({scroll:p&&g&&g.scroll},me)):s.push(R.fullPath,me)),c.value=R,Bt(R,q,j,p),En()}let Z;function we(){Z||(Z=s.listen((R,q,j)=>{if(!eo.listening)return;const z=S(R),me=T(z);if(me){N(ye(me,{replace:!0}),z).catch(Qs);return}l=z;const Se=c.value;Fr&&JA(yd(Se.fullPath,j.delta),Da()),M(z,Se).catch(p=>an(p,12)?p:an(p,2)?(N(p.to,z).then(g=>{an(g,20)&&!j.delta&&j.type===gi.pop&&s.go(-1,!1)}).catch(Qs),Promise.reject()):(j.delta&&s.go(-j.delta,!1),G(p,z,Se))).then(p=>{p=p||L(z,Se,!1),p&&(j.delta&&!an(p,8)?s.go(-j.delta,!1):j.type===gi.pop&&an(p,20)&&s.go(-1,!1)),te(z,Se,p)}).catch(Qs)}))}let Te=Ms(),W=Ms(),oe;function G(R,q,j){En(R);const z=W.list();return z.length?z.forEach(me=>me(R,q,j)):console.error(R),Promise.reject(R)}function Ot(){return oe&&c.value!==xt?Promise.resolve():new Promise((R,q)=>{Te.add([R,q])})}function En(R){return oe||(oe=!R,we(),Te.list().forEach(([q,j])=>R?j(R):q()),Te.reset()),R}function Bt(R,q,j,z){const{scrollBehavior:me}=t;if(!Fr||!me)return Promise.resolve();const Se=!j&&YA(yd(R.fullPath,0))||(z||!j)&&history.state&&history.state.scroll||null;return As().then(()=>me(R,q,Se)).then(p=>p&&QA(p)).catch(p=>G(p,R,q))}const ft=R=>s.go(R);let Dr;const xr=new Set,eo={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,hasRoute:A,getRoutes:w,resolve:S,options:t,push:v,replace:I,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:Ot,install(R){const q=this;R.component("RouterLink",wb),R.component("RouterView",m_),R.config.globalProperties.$router=q,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(c)}),Fr&&!Dr&&c.value===xt&&(Dr=!0,v(s.location).catch(me=>{}));const j={};for(const me in xt)Object.defineProperty(j,me,{get:()=>c.value[me],enumerable:!0});R.provide(Ju,q),R.provide(Yu,Di(j)),R.provide(Dl,c);const z=R.unmount;xr.add(R),R.unmount=function(){xr.delete(R),xr.size<1&&(l=xt,Z&&Z(),Z=null,c.value=xt,Dr=!1,oe=!1),z()}}};function Xe(R){return R.reduce((q,j)=>q.then(()=>V(j)),Promise.resolve())}return eo}function Rb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hs(l,c))||s.push(c))}return[n,r,s]}function Sb(){return ut(Yu)}const Cb=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),xl=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&Cb(t.route,n));return typeof r=="function"?r(t.route):r},Pb=(t,e)=>({default:()=>t?Et(Bw,t===!0?{}:t,e):e});function Xu(t){return Array.isArray(t)?t:[t]}const Nc=null,Dc=null,Nd=[{name:"contato",path:"/contato",meta:{},alias:[],redirect:Nc==null?void 0:Nc.redirect,component:()=>di(()=>import("./B4afAMsV.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:Dc==null?void 0:Dc.redirect,component:()=>di(()=>import("./CwHrTE0G.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.default||t)}],__=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Et(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Dd(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function kb(t,e){return t===e||e===xt?!1:Dd(t)!==Dd(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const Ob={scrollBehavior(t,e,n){var l;const r=Ne(),s=((l=on().options)==null?void 0:l.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&kb(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:xd(t.hash),behavior:s}:!1;const a=u=>!!(u.meta.pageTransition??kl),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(c,async()=>{await new Promise(h=>setTimeout(h,0)),t.hash&&(i={el:t.hash,top:xd(t.hash),behavior:s}),u(i)})})}};function xd(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const Nb={hashMode:!1,scrollBehaviorType:"auto"},vt={...Nb,...Ob},Db=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=Ne(),s=on();if(([e,n]=fi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Oa({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(l=>{if(a(),l===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>jr(o)),window.history.pushState({},"",t.fullPath)});return!1}})},xb=async t=>{let e,n;const r=([e,n]=fi(()=>Gu(t.path)),e=await e,n(),e);if(r.redirect)return Pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Mb=[Db,xb],Ys={};function Lb(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const l=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),td(u,"")}const a=td(r,t),c=!n||PI(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const Vb=sn({name:"nuxt:router",enforce:"pre",async setup(t){var A,S;let e,n,r=Pa().app.baseURL;vt.hashMode&&!r.includes("#")&&(r+="#");const s=((A=vt.history)==null?void 0:A.call(vt,r))??(vt.hashMode?tb(r):f_(r)),i=((S=vt.routes)==null?void 0:S.call(vt,Nd))??Nd;let o;const a=bb({...vt,scrollBehavior:(y,m,v)=>{if(m===xt){o=v;return}if(vt.scrollBehavior){if(a.options.scrollBehavior=vt.scrollBehavior,"scrollRestoration"in window.history){const I=a.beforeEach(()=>{I(),window.history.scrollRestoration="manual"})}return vt.scrollBehavior(y,xt,o||v)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=ai(a.currentRoute.value);a.afterEach((y,m)=>{c.value=m}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=Lb(r,window.location,t.payload.path),u=ai(a.currentRoute.value),h=()=>{u.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((y,m)=>{var v,I,T,N;((I=(v=y.matched[0])==null?void 0:v.components)==null?void 0:I.default)===((N=(T=m.matched[0])==null?void 0:T.components)==null?void 0:N.default)&&h()});const f={};for(const y in u.value)Object.defineProperty(f,y,{get:()=>u.value[y]});t._route=Di(f),t._middleware=t._middleware||{global:[],named:{}};try{[e,n]=fi(()=>a.isReady()),await e,n()}catch(y){[e,n]=fi(()=>t.runWithContext(()=>jr(y))),await e,n()}const d=l!==a.currentRoute.value.fullPath?a.resolve(l):a.currentRoute.value;h();const _=t.payload.state._layout;a.beforeEach(async(y,m)=>{var v;await t.callHook("page:loading:start"),y.meta=Qn(y.meta),t.isHydrating&&_&&!vr(y.meta.layout)&&(y.meta.layout=_),t._processingMiddleware=!0;{const I=new Set([...Mb,...t._middleware.global]);for(const T of y.matched){const N=T.meta.middleware;if(N)for(const O of Xu(N))I.add(O)}{const T=await t.runWithContext(()=>Gu(y.path));if(T.appMiddleware)for(const N in T.appMiddleware)T.appMiddleware[N]?I.add(N):I.delete(N)}for(const T of I){const N=typeof T=="string"?t._middleware.named[T]||await((v=Ys[T])==null?void 0:v.call(Ys).then(V=>V.default||V)):T;if(!N)throw new Error(`Unknown route middleware: '${T}'.`);const O=await t.runWithContext(()=>N(y,m));if(!t.payload.serverRendered&&t.isHydrating&&(O===!1||O instanceof Error)){const V=O||bl({statusCode:404,statusMessage:`Page Not Found: ${l}`});return await t.runWithContext(()=>jr(V)),!1}if(O!==!0&&(O||O===!1))return O}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")});const w=ka();return a.afterEach(async(y,m,v)=>{delete t._processingMiddleware,!t.isHydrating&&w.value&&await t.runWithContext(v0),v&&await t.callHook("page:loading:end"),y.matched.length===0&&await t.runWithContext(()=>jr(bl({statusCode:404,fatal:!1,statusMessage:`Page not found: ${y.fullPath}`,data:{path:y.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in d&&(d.name=void 0),await a.replace({...d,force:!0}),a.options.scrollBehavior=vt.scrollBehavior}catch(y){await t.runWithContext(()=>jr(y))}}),{provide:{router:a}}}}),Md=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Ex=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),y_=t=>{const e=Ne();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Md(t)}):Md(t)},Fb=sn({name:"nuxt:payload",setup(t){on().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await pd(e.path);r&&Object.assign(t.static.data,r.data)}),y_(()=>{var e;t.hooks.hook("link:prefetch",async n=>{Ca(n).protocol||await pd(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Na,1e3)})}}),Ub=sn(t=>{let e;async function n(){const r=await Na();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);try{const s=await $fetch(Ku("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}y_(()=>{e=setTimeout(n,1e3*60*60)})}),Bb=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const $b=Symbol();var Ld;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ld||(Ld={}));function jb(){const t=Rg(!0),e=t.run(()=>Qt({}));let n=[],r=[];const s=Ru({install(i){s._a=i,i.provide($b,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Bb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}function Hb(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ko(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ne().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const qb=sn(t=>{const e=jb();return t.vueApp.use(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),Kb=sn({name:"nuxt:global-components"}),Ln={default:()=>di(()=>import("./VJ-FMUC2.js"),__vite__mapDeps([2,3,4]),import.meta.url).then(t=>t.default||t)},Wb=sn({name:"nuxt:prefetch",setup(t){const e=on();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Ln[r]=="function"&&await Ln[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Xu(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ys[o]=="function"&&Ys[o]();s&&typeof Ln[s]=="function"&&Ln[s]()})}}),zb=sn({name:"nuxt:chunk-reload",setup(t){const e=on(),n=Pa(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Hu(n.app.baseURL,i.fullPath);Hb({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}});var Vd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Qb;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(t){const e=v_(t);return E_.encodeByteArray(e,!0)},Jo=function(t){return Jb(t).replace(/\./g,"")},w_=function(t){try{return E_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=()=>Yb().__FIREBASE_DEFAULTS__,Zb=()=>{if(typeof process>"u"||typeof Vd>"u")return;const t=Vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w_(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return Xb()||Zb()||eR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T_=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tR=t=>{const e=T_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I_=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},A_=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function iR(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function b_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aR(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cR(){return!iR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zu(){try{return typeof indexedDB=="object"}catch{return!1}}function R_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function lR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uR,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function hR(t,e){return t.replace(fR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fR=/\{\$([^}]+)}/g;function dR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fd(i)&&Fd(o)){if(!mi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pR(t,e){const n=new gR(t,e);return n.subscribe.bind(n)}class gR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=1e3,yR=2,vR=4*60*60*1e3,ER=.5;function Ud(t,e=_R,n=yR){const r=e*Math.pow(n,t),s=Math.round(ER*r*(Math.random()-.5)*2);return Math.min(vR,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(t){return t===rr?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const bR={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},RR=ue.INFO,SR={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},CR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=SR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=CR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let Bd,$d;function kR(){return Bd||(Bd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,Ml=new WeakMap,C_=new WeakMap,Mc=new WeakMap,eh=new WeakMap;function NR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S_.set(n,t)}).catch(()=>{}),eh.set(e,t),e}function DR(t){if(Ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ml.set(t,e)}let Ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xR(t){Ll=t(Ll)}function MR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return C_.set(r,e.sort?e.sort():[e]),jn(r)}:OR().includes(t)?function(...e){return t.apply(Lc(this),e),jn(S_.get(this))}:function(...e){return jn(t.apply(Lc(this),e))}}function LR(t){return typeof t=="function"?MR(t):(t instanceof IDBTransaction&&DR(t),PR(t,kR())?new Proxy(t,Ll):t)}function jn(t){if(t instanceof IDBRequest)return NR(t);if(Mc.has(t))return Mc.get(t);const e=LR(t);return e!==t&&(Mc.set(t,e),eh.set(e,t)),e}const Lc=t=>eh.get(t);function P_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const VR=["get","getKey","getAll","getAllKeys","count"],FR=["put","add","delete","clear"],Vc=new Map;function jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||VR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vc.set(e,i),i}xR(t=>({...t,get:(e,n,r)=>jd(e,n)||t.get(e,n,r),has:(e,n)=>!!jd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",Hd="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Ma("@firebase/app"),$R="@firebase/app-compat",jR="@firebase/analytics-compat",HR="@firebase/analytics",qR="@firebase/app-check-compat",KR="@firebase/app-check",WR="@firebase/auth",zR="@firebase/auth-compat",GR="@firebase/database",QR="@firebase/database-compat",JR="@firebase/functions",YR="@firebase/functions-compat",XR="@firebase/installations",ZR="@firebase/installations-compat",eS="@firebase/messaging",tS="@firebase/messaging-compat",nS="@firebase/performance",rS="@firebase/performance-compat",sS="@firebase/remote-config",iS="@firebase/remote-config-compat",oS="@firebase/storage",aS="@firebase/storage-compat",cS="@firebase/firestore",lS="@firebase/firestore-compat",uS="firebase",hS="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="[DEFAULT]",fS={[Vl]:"fire-core",[$R]:"fire-core-compat",[HR]:"fire-analytics",[jR]:"fire-analytics-compat",[KR]:"fire-app-check",[qR]:"fire-app-check-compat",[WR]:"fire-auth",[zR]:"fire-auth-compat",[GR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[JR]:"fire-fn",[YR]:"fire-fn-compat",[XR]:"fire-iid",[ZR]:"fire-iid-compat",[eS]:"fire-fcm",[tS]:"fire-fcm-compat",[nS]:"fire-perf",[rS]:"fire-perf-compat",[sS]:"fire-rc",[iS]:"fire-rc-compat",[oS]:"fire-gcs",[aS]:"fire-gcs-compat",[cS]:"fire-fst",[lS]:"fire-fst-compat","fire-js":"fire-js",[uS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,dS=new Map,Ul=new Map;function qd(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Ul.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Ul.set(e,t);for(const n of Yo.values())qd(n,t);for(const n of dS.values())qd(n,t);return!0}function Or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new kr("app","Firebase",pS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=hS;function k_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=I_()),!n)throw Hn.create("no-options");const i=Yo.get(s);if(i){if(mi(n,i.options)&&mi(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new AR(s);for(const c of Ul.values())o.addComponent(c);const a=new gS(n,r,o);return Yo.set(s,a),a}function th(t=Fl){const e=Yo.get(t);if(!e&&t===Fl&&I_())return k_();if(!e)throw Hn.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let s=(r=fS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(a.join(" "));return}en(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="firebase-heartbeat-database",_S=1,_i="firebase-heartbeat-store";let Fc=null;function O_(){return Fc||(Fc=P_(mS,_S,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function yS(t){try{const n=(await O_()).transaction(_i),r=await n.objectStore(_i).get(N_(t));return await n.done,r}catch(e){if(e instanceof Ut)Er.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Kd(t,e){try{const r=(await O_()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,N_(t)),await r.done}catch(n){if(n instanceof Ut)Er.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function N_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=1024,ES=30*24*60*60*1e3;class wS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ES}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wd(),{heartbeatsToSend:r,unsentEntries:s}=TS(this._heartbeatsCache.heartbeats),i=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wd(){return new Date().toISOString().substring(0,10)}function TS(t,e=vS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zu()?R_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zd(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){en(new Vt("platform-logger",e=>new UR(e),"PRIVATE")),en(new Vt("heartbeat",e=>new wS(e),"PRIVATE")),kt(Vl,Hd,t),kt(Vl,Hd,"esm2017"),kt("fire-js","")}AS("");var bS="firebase",RS="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(bS,RS,"app");function nh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SS=D_,x_=new kr("auth","Firebase",D_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Ma("@firebase/auth");function CS(t,...e){Xo.logLevel<=ue.WARN&&Xo.warn(`Auth (${bs}): ${t}`,...e)}function Po(t,...e){Xo.logLevel<=ue.ERROR&&Xo.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw rh(t,...e)}function Jt(t,...e){return rh(t,...e)}function M_(t,e,n){const r=Object.assign(Object.assign({},SS()),{[e]:n});return new kr("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return M_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x_.create(t,...e)}function ne(t,e,...n){if(!t)throw rh(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function mn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PS(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||b_()||"connection"in navigator)?navigator.onLine:!0}function OS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=sR()||oR()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Ui(3e4,6e4);function ih(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rs(t,e,n,r,s={}){return V_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),L_.fetch()(F_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function V_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),e);try{const s=new MS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw M_(t,u,l);gn(t,u)}}catch(s){if(s instanceof Ut)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function xS(t,e,n,r,s={}){const i=await Rs(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function F_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?sh(t.config,s):`${t.config.apiScheme}://${s}`}class MS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),DS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function U_(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=vn(t),r=await n.getIdToken(e),s=oh(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(Uc(s.auth_time)),issuedAtTime:Xs(Uc(s.iat)),expirationTime:Xs(Uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=w_(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qd(t){const e=oh(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&FS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,U_(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B_(i.providerUserInfo):[],a=$S(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $l(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function BS(t){const e=vn(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $S(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,r=nh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e){const n=await V_(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=F_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",L_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HS(t,e){return Rs(t,"POST","/v2/accounts:revokeToken",ih(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Qd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new es;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new US(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return BS(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await yi(this,LS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:m,emailVerified:v,isAnonymous:I,providerData:T,stsTokenManager:N}=n;ne(m&&N,e,"internal-error");const O=es.fromJSON(this.name,N);ne(typeof m=="string",e,"internal-error"),Rn(h,e.name),Rn(f,e.name),ne(typeof v=="boolean",e,"internal-error"),ne(typeof I=="boolean",e,"internal-error"),Rn(d,e.name),Rn(_,e.name),Rn(w,e.name),Rn(A,e.name),Rn(S,e.name),Rn(y,e.name);const V=new un({uid:m,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:I,photoURL:_,phoneNumber:d,tenantId:w,stsTokenManager:O,createdAt:S,lastLoginAt:y});return T&&Array.isArray(T)&&(V.providerData=T.map(M=>Object.assign({},M))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new es;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?B_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new es;a.updateFromIdToken(r);const c=new un({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new Map;function hn(t){mn(t instanceof Function,"Expected a class definition");let e=Jd.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$_.type="NONE";const Yd=$_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(hn(Yd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||hn(Yd);const o=ko(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=un._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ts(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(z_(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j_(t=Ue()){return/firefox\//i.test(t)}function ah(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(t=Ue()){return/crios\//i.test(t)}function q_(t=Ue()){return/iemobile/i.test(t)}function K_(t=Ue()){return/android/i.test(t)}function W_(t=Ue()){return/blackberry/i.test(t)}function z_(t=Ue()){return/webos/i.test(t)}function La(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qS(t=Ue()){var e;return La(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KS(){return aR()&&document.documentMode===10}function G_(t=Ue()){return La(t)||K_(t)||z_(t)||W_(t)||/windows phone/i.test(t)||q_(t)}function WS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e=[]){let n;switch(t){case"Browser":n=Xd(Ue());break;case"Worker":n=`${Xd(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e={}){return Rs(t,"GET","/v2/passwordPolicy",ih(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=6;class JS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await U_(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(mr(this));const n=e?vn(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GS(this),n=new JS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ch(t){return vn(t)}class Zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=pR(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XS(t){lh=t}function ZS(t){return lh.loadJS(t)}function eC(){return lh.gapiScript}function tC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){const n=Or(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mi(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function rC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const r=ch(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=J_(e),{host:o,port:a}=iC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||oC()}function J_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iC(t){const e=J_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ep(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ep(o)}}}function ep(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return xS(t,"POST","/v1/accounts:signInWithIdp",ih(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="http://localhost";class wr extends Y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:aC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Bi{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Bi{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Bi{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),o=tp(r);return new ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=tp(r);return new ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function Z_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function cC(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e,n=!1){const{auth:r}=t;if(Vn(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await yi(t,Z_(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=oh(i.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e,n=!1){if(Vn(t.app))return Promise.reject(mr(t));const r="signIn",s=await Z_(t,r,e),i=await ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function hC(t,e,n,r){return vn(t).onIdTokenChanged(e,n,r)}function fC(t,e,n){return vn(t).beforeAuthStateChanged(e,n)}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){const t=Ue();return ah(t)||La(t)}const pC=1e3,gC=10;class ty extends ey{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dC()&&WS(),this.fallbackToPolling=G_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);KS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ty.type="LOCAL";const mC=ty;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny extends ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ny.type="SESSION";const ry=ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _C(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=uh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function vC(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function EC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TC(){return sy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="firebaseLocalStorageDb",IC=1,na="firebaseLocalStorage",oy="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fa(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function AC(){const t=indexedDB.deleteDatabase(iy);return new $i(t).toPromise()}function jl(){const t=indexedDB.open(iy,IC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await AC(),e(await jl()))})})}async function np(t,e,n){const r=Fa(t,!0).put({[oy]:e,value:n});return new $i(r).toPromise()}async function bC(t,e){const n=Fa(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function rp(t,e){const n=Fa(t,!0).delete(e);return new $i(n).toPromise()}const RC=800,SC=3;class ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(TC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EC(),!this.activeServiceWorker)return;this.sender=new yC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await np(e,ta,"1"),await rp(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>np(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fa(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const CC=ay;new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t,e){return e?hn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends Y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kC(t){return uC(t.auth,new hh(t),t.bypassAuthState)}function OC(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lC(n,new hh(t),t.bypassAuthState)}async function NC(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),cC(n,new hh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kC;case"linkViaPopup":case"linkViaRedirect":return NC;case"reauthViaPopup":case"reauthViaRedirect":return OC;default:gn(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new Ui(2e3,1e4);class Hr extends cy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DC.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="pendingRedirect",Oo=new Map;class MC extends cy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await LC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LC(t,e){const n=UC(e),r=FC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function VC(t,e){Oo.set(t._key(),e)}function FC(t){return hn(t._redirectPersistence)}function UC(t){return ko(xC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){if(Vn(t.app))return Promise.reject(mr(t));const r=ch(t),s=PC(r,e),o=await new MC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=10*60*1e3;class jC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$C&&this.cachedEventUids.clear(),this.cachedEventUids.has(sp(e))}saveEventToCache(e){this.cachedEventUids.add(sp(e)),this.lastProcessedEventTime=Date.now()}}function sp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WC=/^https?/;async function zC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qC(t);for(const n of e)try{if(GC(n))return}catch{}gn(t,"unauthorized-domain")}function GC(t){const e=Bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WC.test(n))return!1;if(KC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new Ui(3e4,6e4);function ip(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JC(t){return new Promise((e,n)=>{var r,s,i;function o(){ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ip(),n(Jt(t,"network-request-failed"))},timeout:QC.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=tC("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},ZS(`${eC()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw No=null,e})}let No=null;function YC(t){return No=No||JC(t),No}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new Ui(5e3,15e3),ZC="__/auth/iframe",eP="emulator/auth/iframe",tP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rP(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sh(e,eP):`https://${t.config.authDomain}/${ZC}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=nP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function sP(t){const e=await YC(t),n=Yt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:rP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},XC.get());function c(){Yt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oP=500,aP=600,cP="_blank",lP="http://localhost";class op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uP(t,e,n,r=oP,s=aP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ue().toLowerCase();n&&(a=H_(l)?cP:n),j_(l)&&(e=e||lP,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,_])=>`${f}${d}=${_},`,"");if(qS(l)&&a!=="_self")return hP(e||"",a),new op(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new op(h)}function hP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="__/auth/handler",dP="emulator/auth/handler",pP=encodeURIComponent("fac");async function ap(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof X_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Bi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${pP}=${encodeURIComponent(c)}`:"";return`${gP(t)}?${Fi(a).slice(1)}${l}`}function gP({config:t}){return t.emulator?sh(t,dP):`https://${t.authDomain}/${fP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=BC,this._overrideRedirectResult=VC}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ap(e,n,r,Bl(),s);return uP(e,o,uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ap(e,n,r,Bl(),s);return vC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sP(e),r=new jC(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bc,{type:Bc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bc];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G_()||ah()||La()}}const _P=mP;var cp="@firebase/auth",lp="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EP(t){en(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(t)},l=new YS(r,s,i,c);return rC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Vt("auth-internal",e=>{const n=ch(e.getProvider("auth").getImmediate());return(r=>new yP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(cp,lp,vP(t)),kt(cp,lp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=5*60,TP=A_("authIdTokenMaxAge")||wP;let up=null;const IP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TP)return;const s=n==null?void 0:n.token;up!==s&&(up=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AP(t=th()){const e=Or(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nC(t,{popupRedirectResolver:_P,persistence:[CC,mC,ry]}),r=A_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IP(i.toString());fC(n,o,()=>o(n.currentUser)),hC(n,a=>o(a))}}const s=T_("auth");return s&&sC(n,`http://${s}`),n}function bP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EP("Browser");var RP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,fh=fh||{},se=RP||self;function Ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SP(t){return Object.prototype.hasOwnProperty.call(t,$c)&&t[$c]||(t[$c]=++CP)}var $c="closure_uid_"+(1e9*Math.random()>>>0),CP=0;function PP(t,e,n){return t.call.apply(t.bind,arguments)}function kP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=PP:rt=kP,rt.apply(null,arguments)}function po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Yn(){this.s=this.s,this.o=this.o}var OP=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OP!=0)&&SP(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ua(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var NP=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function vi(t){return/^[\s\xa0]*$/.test(t)}function Ba(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return Ba().indexOf(t)!=-1}function ph(t){return ph[" "](t),t}ph[" "]=function(){};function DP(t,e){var n=bk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xP=Kt("Opera"),ps=Kt("Trident")||Kt("MSIE"),hy=Kt("Edge"),Hl=hy||ps,fy=Kt("Gecko")&&!(Ba().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),MP=Ba().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function dy(){var t=se.document;return t?t.documentMode:void 0}var ql;e:{var jc="",Hc=function(){var t=Ba();if(fy)return/rv:([^\);]+)(\)|;)/.exec(t);if(hy)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MP)return/WebKit\/(\S+)/.exec(t);if(xP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hc&&(jc=Hc?Hc[1]:""),ps){var qc=dy();if(qc!=null&&qc>parseFloat(jc)){ql=String(qc);break e}}ql=jc}var Kl;if(se.document&&ps){var fp=dy();Kl=fp||parseInt(ql,10)||void 0}else Kl=void 0;var LP=Kl;function Ei(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fy){e:{try{ph(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ei.$.h.call(this)}}We(Ei,st);var VP={2:"touch",3:"pen",4:"mouse"};Ei.prototype.h=function(){Ei.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),FP=0;function UP(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++FP,this.fa=this.ia=!1}function $a(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function py(t){const e={};for(const n in t)e[n]=t[n];return e}const dp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<dp.length;i++)n=dp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ja(t){this.src=t,this.g={},this.h=0}ja.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=zl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UP(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Wl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=uy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var mh="closure_lm_"+(1e6*Math.random()|0),Kc={};function my(t,e,n,r,s){if(r&&r.once)return yy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)my(t,e[i],n,r,s);return null}return n=vh(n),t&&t[Hi]?t.O(e,n,ji(r)?!!r.capture:!!r,s):_y(t,e,n,!1,r,s)}function _y(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ji(s)?!!s.capture:!!s,a=yh(t);if(a||(t[mh]=a=new ja(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=$P(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NP||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ey(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $P(){function t(n){return e.call(t.src,t.listener,n)}const e=jP;return t}function yy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)yy(t,e[i],n,r,s);return null}return n=vh(n),t&&t[Hi]?t.P(e,n,ji(r)?!!r.capture:!!r,s):_y(t,e,n,!0,r,s)}function vy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)vy(t,e[i],n,r,s);else r=ji(r)?!!r.capture:!!r,n=vh(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=zl(i,n,r,s),-1<n&&($a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zl(e,n,r,s)),(n=-1<t?e[t]:null)&&_h(n))}function _h(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Hi])Wl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ey(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yh(e))?(Wl(n,t),n.h==0&&(n.src=null,e[mh]=null)):$a(t)}}}function Ey(t){return t in Kc?Kc[t]:Kc[t]="on"+t}function jP(t,e){if(t.fa)t=!0;else{e=new Ei(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_h(t),t=n.call(r,e)}return t}function yh(t){return t=t[mh],t instanceof ja?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function vh(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function Ke(){Yn.call(this),this.i=new ja(this),this.S=this,this.J=null}We(Ke,Yn);Ke.prototype[Hi]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){vy(this,t,e,n,r)};function Je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),gy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$a(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Wl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Eh=se.JSON.stringify;class HP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qP(){var t=wh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KP{constructor(){this.h=this.g=null}add(e,n){const r=wy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wy=new HP(()=>new WP,t=>t.reset());class WP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GP(t){se.setTimeout(()=>{throw t},0)}let wi,Ti=!1,wh=new KP,Ty=()=>{const t=se.Promise.resolve(void 0);wi=()=>{t.then(QP)}};var QP=()=>{for(var t;t=qP();){try{t.h.call(t.g)}catch(n){GP(n)}var e=wy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ti=!1};function Ha(t,e){Ke.call(this),this.h=t||1,this.g=e||se,this.j=rt(this.qb,this),this.l=Date.now()}We(Ha,Ke);B=Ha.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&(Th(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Th(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){Ha.$.N.call(this),Th(this),delete this.g};function Ih(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function Iy(t){t.g=Ih(()=>{t.g=null,t.i&&(t.i=!1,Iy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JP extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iy(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(t){Yn.call(this),this.h=t,this.g={}}We(Ii,Yn);var pp=[];function Ay(t,e,n,r){Array.isArray(n)||(n&&(pp[0]=n.toString()),n=pp);for(var s=0;s<n.length;s++){var i=my(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function by(t){gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&_h(e)},t),t.g={}}Ii.prototype.N=function(){Ii.$.N.call(this),by(this)};Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qa(){this.g=!0}qa.prototype.Ea=function(){this.g=!1};function YP(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function XP(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ek(t,n)+(r?" "+r:"")})}function ZP(t,e){t.info(function(){return"TIMEOUT: "+e})}qa.prototype.info=function(){};function ek(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eh(n)}catch{return e}}var Nr={},gp=null;function Ka(){return gp=gp||new Ke}Nr.Ta="serverreachability";function Ry(t){st.call(this,Nr.Ta,t)}We(Ry,st);function Ai(t){const e=Ka();Je(e,new Ry(e))}Nr.STAT_EVENT="statevent";function Sy(t,e){st.call(this,Nr.STAT_EVENT,t),this.stat=e}We(Sy,st);function lt(t){const e=Ka();Je(e,new Sy(e,t))}Nr.Ua="timingevent";function Cy(t,e){st.call(this,Nr.Ua,t),this.size=e}We(Cy,st);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Wa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Py={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ah(){}Ah.prototype.h=null;function mp(t){return t.h||(t.h=t.i())}function ky(){}var Ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bh(){st.call(this,"d")}We(bh,st);function Rh(){st.call(this,"c")}We(Rh,st);var Gl;function za(){}We(za,Ah);za.prototype.g=function(){return new XMLHttpRequest};za.prototype.i=function(){return{}};Gl=new za;function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ii(this),this.P=tk,t=Hl?125:void 0,this.V=new Ha(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var tk=45e3,Ny={},Ql={};B=Wi.prototype;B.setTimeout=function(t){this.P=t};function Jl(t,e,n){t.L=1,t.A=Qa(_n(e)),t.u=n,t.S=!0,Dy(t,null)}function Dy(t,e){t.G=Date.now(),zi(t),t.B=_n(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),$y(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Oy,t.g=cv(t.l,n?e:null,!t.u),0<t.O&&(t.M=new JP(rt(t.Pa,t,t.g),t.O)),Ay(t.U,t.g,"readystatechange",t.nb),e=t.I?py(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ai(),YP(t.j,t.v,t.B,t.m,t.W,t.u)}B.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const u=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Hl||this.g&&(this.h.h||this.g.ja()||Ep(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ai(3):Ai(2)),Ga(this);var n=this.g.da();this.ca=n;t:if(xy(this)){var r=Ep(this.g);t="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),Zs(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,XP(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vi(a)){var l=a;break t}}l=null}if(n=l)qr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yl(this,n);else{this.i=!1,this.s=3,lt(12),ar(this),Zs(this);break e}}this.S?(My(this,u,o),Hl&&this.i&&u==3&&(Ay(this.U,this.V,"tick",this.mb),this.V.start())):(qr(this.j,this.m,o,null),Yl(this,o)),u==4&&ar(this),this.i&&!this.J&&(u==4?sv(this.l,this):(this.i=!1,zi(this)))}else Tk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),ar(this),Zs(this)}}}catch{}finally{}};function xy(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function My(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=nk(t,n),s==Ql){e==4&&(t.s=4,lt(14),r=!1),qr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ny){t.s=4,lt(15),qr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qr(t.j,t.m,s,null),Yl(t,s);xy(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nh(e),e.M=!0,lt(11))):(qr(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),Zs(t))}B.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.o<e.length&&(Ga(this),My(this,t,e),this.i&&t!=4&&zi(this))}};function nk(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ql:(n=Number(e.substring(n,r)),isNaN(n)?Ny:(r+=1,r+n>e.length?Ql:(e=e.slice(r,r+n),t.o=r+n,e)))}B.cancel=function(){this.J=!0,ar(this)};function zi(t){t.Y=Date.now()+t.P,Ly(t,t.P)}function Ly(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=qi(rt(t.lb,t),e)}function Ga(t){t.C&&(se.clearTimeout(t.C),t.C=null)}B.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ZP(this.j,this.B),this.L!=2&&(Ai(),lt(17)),ar(this),this.s=2,Zs(this)):Ly(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||sv(t.l,t)}function ar(t){Ga(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Th(t.V),by(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Yl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Xl(n.i,t))){if(!t.K&&Xl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ia(n),Za(n);else break e;Oh(n),lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(rt(n.ib,n),6e3));if(1>=qy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&ia(n),!vi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sh(i,i.h),i.h=null))}if(r.F){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Re(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=av(r,r.J?r.pa:null,r.Y),o.K){Ky(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ga(a),zi(a)),r.g=o}else nv(r);0<n.j.length&&ec(n)}else l[0]!="stop"&&l[0]!="close"||cr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cr(n,7):kh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ai(4)}catch{}}function rk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ua(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Vy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sk(t),r=rk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ik(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _r){this.h=t.h,ra(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new bi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_p(this,n),this.o=t.o}else t&&(e=String(t).match(Fy))?(this.h=!1,ra(this,e[1]||"",!0),this.s=$s(e[2]||""),this.g=$s(e[3]||"",!0),sa(this,e[4]),this.l=$s(e[5]||"",!0),_p(this,e[6]||"",!0),this.o=$s(e[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,yp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,yp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?ck:ak,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,uk)),t.join("")};function _n(t){return new _r(t)}function ra(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _p(t,e,n){e instanceof bi?(t.i=e,hk(t.i,t.h)):(n||(e=js(e,lk)),t.i=new bi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Qa(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ok),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ok(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yp=/[#\/\?@]/g,ak=/[#\?:]/g,ck=/[#\?]/g,lk=/[#\?@]/g,uk=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&ik(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=bi.prototype;B.add=function(t,e){Xn(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uy(t,e){Xn(t),e=Ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function By(t,e){return Xn(t),e=Ss(t,e),t.g.has(e)}B.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};B.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};B.Z=function(t){Xn(this);let e=[];if(typeof t=="string")By(this,t)&&(e=e.concat(this.g.get(Ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return Xn(this),this.i=null,t=Ss(this,t),By(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $y(t,e,n){Uy(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),dh(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hk(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Uy(this,r),$y(this,s,n))},t)),t.j=e}var fk=class{constructor(t,e){this.g=t,this.map=e}};function jy(t){this.l=t||dk,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dk=10;function Hy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qy(t){return t.h?1:t.g?t.g.size:0}function Xl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sh(t,e){t.g?t.g.add(e):t.h=e}function Ky(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jy.prototype.cancel=function(){if(this.i=Wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dh(t.i)}var pk=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function gk(){this.g=new pk}function mk(t,e,n){const r=n||"";try{Vy(t,function(s,i){let o=s;ji(s)&&(o=Eh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function _k(t,e){const n=new qa;if(se.Image){const r=new Image;r.onload=po(mo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=po(mo,n,r,"TestLoadImage: error",!1,e),r.onabort=po(mo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=po(mo,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ja(t){this.l=t.ec||null,this.j=t.ob||!1}We(Ja,Ah);Ja.prototype.g=function(){return new Ya(this.l,this.j)};Ja.prototype.i=function(t){return function(){return t}}({});function Ya(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Ya,Ke);var Ch=0;B=Ya.prototype;B.open=function(t,e){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ri(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=Ch};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gi(this):Ri(this),this.readyState==3&&zy(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Gi(this))};B.Ya=function(t){this.g&&(this.response=t,Gi(this))};B.ka=function(){this.g&&Gi(this)};function Gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ri(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ri(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yk=se.JSON.parse;function De(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gy,this.L=this.M=!1}We(De,Ke);var Gy="",vk=/^https?$/i,Ek=["POST","PUT"];B=De.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gl.g(),this.C=this.u?mp(this.u):mp(Gl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){vp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=uy(Ek,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yy(this),0<this.B&&((this.L=wk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Ih(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){vp(this,i)}};function wk(t){return ps&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function vp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qy(t),Xa(t)}function Qy(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Xa(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),De.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Jy(this):this.kb())};B.kb=function(){Jy(this)};function Jy(t){if(t.h&&typeof fh<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)Ih(t.La,0,t);else if(Je(t,"readystatechange"),zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Fy)[1]||null;!s&&se.self&&se.self.location&&(s=se.self.location.protocol.slice(0,-1)),r=!vk.test(s?s.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var i=2<zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qy(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){Yy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function zt(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yk(e)}};function Ep(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Tk(t){const e={};t=(t.g&&2<=zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(vi(t[r]))continue;var n=zP(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}BP(e,function(r){return r.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xy(t){let e="";return gh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ph(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zy(t){this.Ga=0,this.j=[],this.l=new qa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ls("baseRetryDelayMs",5e3,t),this.hb=Ls("retryDelaySeedMs",1e4,t),this.eb=Ls("forwardChannelMaxRetries",2,t),this.xa=Ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jy(t&&t.concurrentRequestLimit),this.Ja=new gk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=Zy.prototype;B.ra=8;B.H=1;function kh(t){if(ev(t),t.H==3){var e=t.W++,n=_n(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Qi(t,n),e=new Wi(t,t.l,e),e.L=2,e.A=Qa(_n(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=cv(e.l,null),e.g.ha(e.A)),e.G=Date.now(),zi(e)}ov(t)}function Za(t){t.g&&(Nh(t),t.g.cancel(),t.g=null)}function ev(t){Za(t),t.u&&(se.clearTimeout(t.u),t.u=null),ia(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function ec(t){if(!Hy(t.i)&&!t.m){t.m=!0;var e=t.Na;wi||Ty(),Ti||(wi(),Ti=!0),wh.add(e,t),t.C=0}}function Ik(t,e){return qy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qi(rt(t.Na,t,e),iv(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Wi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=py(i),gy(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tv(this,s,e),n=_n(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Qi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xy(i)))+"&"+e:this.o&&Ph(n,this.o,i)),Sh(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,Jl(s,n,null)):Jl(s,n,e),this.H=2}}else this.H==3&&(t?wp(this,t):this.j.length==0||Hy(this.i)||wp(this))};function wp(t,e){var n;e?n=e.m:n=t.W++;const r=_n(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),Qi(t,r),t.o&&t.s&&Ph(r,t.o,t.s),n=new Wi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sh(t.i,n),Jl(n,r,e)}function Qi(t,e){t.na&&gh(t.na,function(n,r){Re(e,r,n)}),t.h&&Vy({},function(n,r){Re(e,r,n)})}function tv(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{mk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function nv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wi||Ty(),Ti||(wi(),Ti=!0),wh.add(e,t),t.A=0}}function Oh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qi(rt(t.Ma,t),iv(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,rv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qi(rt(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),Za(this),rv(this))};function Nh(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function rv(t){t.g=new Wi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Qi(t,e),t.o&&t.s&&Ph(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qa(_n(e)),n.u=null,n.S=!0,Dy(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Za(this),Oh(this),lt(19))};function ia(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function sv(t,e){var n=null;if(t.g==e){ia(t),Nh(t),t.g=null;var r=2}else if(Xl(t.i,e))n=e.F,Ky(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ka(),Je(r,new Cy(r,n)),ec(t)}else nv(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Ik(t,e)||r==2&&Oh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function iv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||ra(n,"https"),Qa(n)),_k(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),ov(t),ev(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function ov(t){if(t.H=0,t.ma=[],t.h){const e=Wy(t.i);(e.length!=0||t.j.length!=0)&&(hp(t.ma,e),hp(t.ma,t.j),t.i.i.length=0,dh(t.j),t.j.length=0),t.h.ya()}}function av(t,e,n){var r=n instanceof _r?_n(n):new _r(n);if(r.g!="")e&&(r.g=e+"."+r.g),sa(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new _r(null);r&&ra(i,r),e&&(i.g=e),s&&sa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),Qi(t,r),r}function cv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new De(new Ja({ob:n})):new De(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function lv(){}B=lv.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function oa(){if(ps&&!(10<=Number(LP)))throw Error("Environmental error: no available transport.")}oa.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){Ke.call(this),this.g=new Zy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}We(Tt,Ke);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=av(t,null,t.Y),ec(t)};Tt.prototype.close=function(){kh(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eh(t),t=n);e.j.push(new fk(e.fb++,t)),e.H==3&&ec(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,kh(this.g),delete this.g,Tt.$.N.call(this)};function uv(t){bh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(uv,bh);function hv(){Rh.call(this),this.status=1}We(hv,Rh);function Cs(t){this.g=t}We(Cs,lv);Cs.prototype.Ba=function(){Je(this.g,"a")};Cs.prototype.Aa=function(t){Je(this.g,new uv(t))};Cs.prototype.za=function(t){Je(this.g,new hv)};Cs.prototype.ya=function(){Je(this.g,"b")};function Ak(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(Ft,Ak);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)zc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){zc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){zc(this,r),s=0;break}}this.h=s,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var bk={};function Dh(t){return-128<=t&&128>t?DP(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return rs;if(0>t)return Qe(Gt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zl;return new ve(e,0)}function fv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(fv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),r=rs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Gt(Math.pow(e,i)),r=r.R(i).add(Gt(o))):(r=r.R(n),r=r.add(Gt(o)))}return r}var Zl=4294967296,rs=Dh(0),eu=Dh(1),Tp=Dh(16777216);B=ve.prototype;B.ea=function(){if(Rt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zl+r)*e,e*=Zl}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fn(this))return"0";if(Rt(this))return"-"+Qe(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,r="";;){var s=ca(n,e).g;n=aa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,fn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Rt(t){return t.h==-1}B.X=function(t){return t=aa(this,t),Rt(t)?-1:fn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(eu)}B.abs=function(){return Rt(this)?Qe(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function aa(t,e){return t.add(Qe(e))}B.R=function(t){if(fn(this)||fn(t))return rs;if(Rt(this))return Rt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Rt(t))return Qe(this.R(Qe(t)));if(0>this.X(Tp)&&0>t.X(Tp))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,_o(n,2*r+2*s),n[2*r+2*s+1]+=i*c,_o(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_o(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_o(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function _o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vs(t,e){this.g=t,this.h=e}function ca(t,e){if(fn(e))throw Error("division by zero");if(fn(t))return new Vs(rs,rs);if(Rt(t))return e=ca(Qe(t),e),new Vs(Qe(e.g),Qe(e.h));if(Rt(e))return e=ca(t,Qe(e)),new Vs(Qe(e.g),e.h);if(30<t.g.length){if(Rt(t)||Rt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=eu,r=e;0>=r.X(t);)n=Ip(n),r=Ip(r);var s=Lr(n,1),i=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!fn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Lr(r,1),n=Lr(n,1)}return e=aa(t,s.R(e)),new Vs(s,e)}for(s=rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Gt(n),o=i.R(e);Rt(o)||0<o.X(t);)n-=r,i=Gt(n),o=i.R(e);fn(i)&&(i=eu),s=s.add(i),t=aa(t,o)}return new Vs(s,t)}B.gb=function(t){return ca(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function Ip(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function Lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(s,t.h)}oa.prototype.createWebChannel=oa.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Wa.NO_ERROR=0;Wa.TIMEOUT=8;Wa.HTTP_ERROR=6;Py.COMPLETE="complete";ky.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Gt;ve.fromString=fv;var Rk=function(){return new oa},Sk=function(){return Ka()},Gc=Wa,Ck=Py,Pk=Nr,Ap={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yo=ky,kk=De,Ok=Ft,ss=ve;const bp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Ma("@firebase/firestore");function Fs(){return Tr.logLevel}function $(t,...e){if(Tr.logLevel<=ue.DEBUG){const n=e.map(xh);Tr.debug(`Firestore (${Ps}): ${t}`,...n)}}function tn(t,...e){if(Tr.logLevel<=ue.ERROR){const n=e.map(xh);Tr.error(`Firestore (${Ps}): ${t}`,...n)}}function gs(t,...e){if(Tr.logLevel<=ue.WARN){const n=e.map(xh);Tr.warn(`Firestore (${Ps}): ${t}`,...n)}}function xh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function Fe(t,e){t||ce()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new dv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new et(e)}}class Mk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new Vk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Uk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new gt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new gt(0,0))}static max(){return new ae(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Si{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const $k=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Si{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return $k.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new J(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new J(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}function jk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new gt(n+1,0):new gt(n,r));return new Wn(s,ee.empty(),e)}function Hk(t){return new Wn(t.readTime,t.key,-1)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(ae.min(),ee.empty(),-1)}static max(){return new Wn(ae.max(),ee.empty(),-1)}}function qk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Kk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new qn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ei(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Vh(r.target.error);this.V.reject(new ei(e,s))}}static open(e,n,r,s){try{return new Lh(n,e.transaction(s,r))}catch(i){throw new ei(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Gk(n)}}class lr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,lr.S(Ue())===12.2&&tn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),ir(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Zu())return!1;if(lr.C())return!0;const e=Ue(),n=lr.S(e),r=0<n&&n<10,s=lr.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ei(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new J(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new J(F.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ei(e,o))},s.onupgradeneeded=i=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Lh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),P.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class zk{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ir(this.k.delete())}}class ei extends J{constructor(e,n){super(F.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ji(t){return t.name==="IndexedDbTransactionError"}class Gk{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ir(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),ir(this.store.add(e))}get(e){return ir(this.store.get(e)).next(n=>(n===void 0&&(n=null),$("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),ir(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),ir(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new P((r,s)=>{n.onerror=i=>{const o=Vh(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new zk(a),l=n(a.primaryKey,a.value,c);if(l instanceof P){const u=l.catch(h=>(c.done(),P.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ir(t){return new P((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Vh(r.target.error);n(s)}})}let Rp=!1;function Vh(t){const e=lr.S(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new J("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rp||(Rp=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Fh._e=-1;function tc(t){return t==null}function tu(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cp(this.data.getIterator())}getIteratorFrom(e){return new Cp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Cp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Fn([])}unionWith(e){let n=new Ye(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pv("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=Jk.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bh(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?Bh(e):e}function Ci(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:Xk(t)?9007199254740991:10:ce()}function nn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),a=zn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),a=Le(i.doubleValue);return o===a?tu(o)===tu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Sp(o)!==Sp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0}(t,e);default:return ce()}}function ki(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Pp(t.timestampValue,e.timestampValue);case 4:return Pp(Ci(t),Ci(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ir(i),c=Ir(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=_e(a[l],c[l]);if(u!==0)return u}return _e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(Le(i.latitude),Le(o.latitude));return a!==0?a:_e(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=_s(a[l],c[l]);if(u)return u}return _e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=_e(c[h],u[h]);if(f!==0)return f;const d=_s(a[c[h]],l[u[h]]);if(d!==0)return d}return _e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ce()}}function Pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=zn(t),r=zn(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function ys(t){return nu(t)}function nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nu(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function ru(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function kp(t){return!!t&&"nullValue"in t}function Op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qc(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nc(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Xk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){nc(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(ti(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ae.min(),ae.min(),ae.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,ae.min(),ae.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ae.min(),ae.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function Np(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{}class $e extends gv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new t1(e,n,r):n==="array-contains"?new s1(e,r):n==="in"?new i1(e,r):n==="not-in"?new o1(e,r):n==="array-contains-any"?new a1(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new n1(e,r):new r1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends gv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new rn(e,n)}matches(e){return mv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function mv(t){return t.op==="and"}function _v(t){return e1(t)&&mv(t)}function e1(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function su(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(_v(t))return t.filters.map(e=>su(e)).join(",");{const e=t.filters.map(n=>su(n)).join(",");return`${t.op}(${e})`}}function yv(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof rn?function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&yv(o,s.filters[a]),!0):!1}(t,e):void ce()}function vv(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(vv).join(" ,")+"}"}(t):"Filter"}class t1 extends $e{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class n1 extends $e{constructor(e,n){super(e,"in",n),this.keys=Ev("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r1 extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Ev("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ev(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class s1 extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&ki(n.arrayValue,this.value)}}class i1 extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ki(this.value.arrayValue,n)}}class o1 extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ki(this.value.arrayValue,n)}}class a1 extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ki(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function xp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new c1(t,e,n,r,s,i,o)}function jh(t){const e=ge(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>su(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ce=n}return e.ce}function Hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dp(t.startAt,e.startAt)&&Dp(t.endAt,e.endAt)}function iu(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function l1(t,e,n,r,s,i,o,a){return new rc(t,e,n,r,s,i,o,a)}function wv(t){return new rc(t)}function Mp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u1(t){return t.collectionGroup!==null}function ni(t){const e=ge(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(ct.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ua(i,r))}),n.has(ct.keyField().canonicalString())||e.le.push(new ua(ct.keyField(),r))}return e.le}function Xt(t){const e=ge(t);return e.he||(e.he=h1(e,ni(t))),e.he}function h1(t,e){if(t.limitType==="F")return xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ua(s.field,i)});const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ou(t,e,n){return new rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Hh(Xt(t),Xt(e))&&t.limitType===e.limitType}function Tv(t){return`${jh(Xt(t))}|lt:${t.limitType}`}function Ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>vv(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Np(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,a,c){const l=Np(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ni(r),s))}(t,e)}function f1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Iv(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=d1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function d1(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?_s(c,l):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nc(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new xe(ee.comparator);function Gn(){return p1}const Av=new xe(ee.comparator);function Hs(...t){let e=Av;for(const n of t)e=e.insert(n.key,n);return e}function g1(t){let e=Av;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return ri()}function bv(){return ri()}function ri(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const m1=new Ye(ee.comparator);function de(...t){let e=m1;for(const n of t)e=e.add(n);return e}const _1=new Ye(_e);function y1(){return _1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tu(e)?"-0":e}}function E1(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._=void 0}}function w1(t,e,n){return t instanceof au?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uh(i)&&(i=Bh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ha?Rv(t,e):t instanceof fa?Sv(t,e):function(s,i){const o=I1(s,i),a=Lp(o)+Lp(s.Ie);return ru(o)&&ru(s.Ie)?E1(a):v1(s.serializer,a)}(t,e)}function T1(t,e,n){return t instanceof ha?Rv(t,e):t instanceof fa?Sv(t,e):n}function I1(t,e){return t instanceof cu?function(r){return ru(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class au extends oc{}class ha extends oc{constructor(e){super(),this.elements=e}}function Rv(t,e){const n=Cv(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends oc{constructor(e){super(),this.elements=e}}function Sv(t,e){let n=Cv(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class cu extends oc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Lp(t){return Le(t.integerValue||t.doubleValue)}function Cv(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function A1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ha&&s instanceof ha||r instanceof fa&&s instanceof fa?ms(r.elements,s.elements,nn):r instanceof cu&&s instanceof cu?nn(r.Ie,s.Ie):r instanceof au&&s instanceof au}(t.transform,e.transform)}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function Pv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R1(t.key,yr.none()):new Kh(t.key,t.data,yr.none());{const n=t.data,r=Wt.empty();let s=new Ye(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ac(t.key,r,new Fn(s.toArray()),yr.none())}}function b1(t,e,n){t instanceof Kh?function(s,i,o){const a=s.value.clone(),c=Fp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ac?function(s,i,o){if(!Do(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Fp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(kv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Kh?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=i.value.clone(),u=Up(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ac?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=Up(i.fieldTransforms,c,o),u=o.data;return u.setAll(kv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Do(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Vp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>A1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kh extends qh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ac extends qh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fp(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,T1(o,a,n[s]))}return r}function Up(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,w1(i,o,e))}return r}class R1 extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&b1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Pv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Vp(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Vp(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,he;function Ov(t){if(t===void 0)return tn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Me.OK:return F.OK;case Me.CANCELLED:return F.CANCELLED;case Me.UNKNOWN:return F.UNKNOWN;case Me.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Me.INTERNAL:return F.INTERNAL;case Me.UNAVAILABLE:return F.UNAVAILABLE;case Me.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Me.NOT_FOUND:return F.NOT_FOUND;case Me.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Me.ABORTED:return F.ABORTED;case Me.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Me.DATA_LOSS:return F.DATA_LOSS;default:return ce()}}(he=Me||(Me={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new ss([4294967295,4294967295],0);function Bp(t){const e=k1().encode(t),n=new Ok;return n.update(e),new Uint8Array(n.digest())}function $p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ss([n,r],0),new ss([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ss.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(ss.fromNumber(r)));return s.compare(O1)===1&&(s=new ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Bp(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Bp(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(ae.min(),s,new xe(_e),Gn(),de())}}class Yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yi(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Nv{constructor(e,n){this.targetId=e,this.fe=n}}class Dv{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jp{constructor(){this.ge=0,this.pe=qp(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=de(),n=de(),r=de();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Yi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=qp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Fe(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class N1{constructor(e){this.Be=e,this.ke=new Map,this.qe=Gn(),this.Qe=Hp(),this.Ke=new xe(_e)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(iu(i))if(r===0){const o=new ee(i.path);this.We(n,o,tt.newNoDocument(o,ae.min()))}else Fe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ir(r).toUint8Array()}catch(c){if(c instanceof pv)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Wh(o,s,i)}catch(c){return gs(c instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&iu(a.target)){const c=new ee(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,tt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=de();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new cc(e,n,this.Ke,this.qe,r);return this.qe=Gn(),this.Qe=Hp(),this.Ke=new xe(_e),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ye(_e),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new jp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Hp(){return new xe(ee.comparator)}function qp(){return new xe(ee.comparator)}const D1={asc:"ASCENDING",desc:"DESCENDING"},x1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},M1={and:"AND",or:"OR"};class L1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lu(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function V1(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function is(t){return Fe(!!t),ae.fromTimestamp(function(n){const r=zn(n);return new gt(r.seconds,r.nanos)}(t))}function U1(t,e){return uu(t,e).canonicalString()}function uu(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xv(t){const e=Oe.fromString(t);return Fe(Uv(e)),e}function Jc(t,e){const n=xv(e);if(n.get(1)!==t.databaseId.projectId)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Lv(n))}function Mv(t,e){return U1(t.databaseId,e)}function B1(t){const e=xv(t);return e.length===4?Oe.emptyPath():Lv(e)}function Kp(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lv(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Fe(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Fe(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?F.UNKNOWN:Ov(l.code);return new J(u,l.message||"")}(o);n=new Dv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=is(r.document.updateTime),o=r.document.createTime?is(r.document.createTime):ae.min(),a=new Wt({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new xo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?is(r.readTime):ae.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new xo([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new P1(s,i),a=r.targetId;n=new Nv(a,o)}}return n}function j1(t,e){return{documents:[Mv(t,e.path)]}}function H1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mv(t,s);const i=function(l){if(l.length!==0)return Fv(rn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Br(f.field),direction:W1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=lu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function q1(t){let e=B1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Vv(h);return f instanceof rn&&_v(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new ua($r(_.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,tc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new la(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new la(d,f)}(n.endAt)),l1(e,s,o,i,a,"F",c,l)}function K1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$r(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$r(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$r(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return $e.create($r(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>Vv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function W1(t){return D1[t]}function z1(t){return x1[t]}function G1(t){return M1[t]}function Br(t){return{fieldPath:t.canonicalString()}}function $r(t){return ct.fromServerFormat(t.fieldPath)}function Fv(t){return t instanceof $e?function(n){if(n.op==="=="){if(Op(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NAN"}};if(kp(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Op(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NAN"}};if(kp(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(n.field),op:z1(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(s=>Fv(s));return r.length===1?r[0]:{compositeFilter:{op:G1(n.op),filters:r}}}(t):ce()}function Uv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.ct=e}}function J1(t){const e=q1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ou(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this._n=new X1}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Wn.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class X1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new vs(0)}static Ln(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Fn.empty(),gt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Gn();const o=ri(),a=function(){return ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ac)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),si(u.mutation,l,u.mutation.getFieldMask(),gt.now())):o.set(l.key,Fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new eO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new xe((o,a)=>o-a),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Fn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||de()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bv();u.forEach(f=>{if(!i.has(f)){const d=Pv(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(ur());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,de())).next(u=>({batchId:a,changes:g1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,c=>{const l=function(h,f){return new rc(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=Hs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&si(u.mutation,l,Fn.empty(),gt.now()),ic(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:is(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:J1(s.bundledQuery),readTime:is(s.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.overlays=new xe(ee.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ur(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return P.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new C1(n,r));let i=this.hr.get(n);i===void 0&&(i=de(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Pr=new Ye(qe.Ir),this.Tr=new Ye(qe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new qe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ee(new Oe([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ee(new Oe([])),r=new qe(n,e),s=new qe(n,e+1);let i=de();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ee.comparator(e.key,n.key)||_e(e.pr,n.pr)}static Er(e,n){return _e(e.pr,n.pr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ye(qe.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new S1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(_e);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new qe(new ee(i),0);let a=new Ye(_e);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new qe(n,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.vr=e,this.docs=function(){return new xe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,a=new ee(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qk(Hk(u),r)<=0||(s.has(u.key)||ic(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oO(this)}getSize(e){return P.resolve(this.size)}}class oO extends Z1{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.persistence=e,this.Mr=new ks(n=>jh(n),Hh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zh,this.targetCount=0,this.Lr=vs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Fh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new aO(this),this.indexManager=new Y1,this.remoteDocumentCache=function(s){return new iO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Q1(n),this.$r=new nO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new sO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new lO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class lO extends Wk{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.zr=new zh,this.jr=null}static Hr(e){return new Gh(e)}get Jr(){if(this.jr)return this.jr;throw ce()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=ee.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return cR()?8:lr.v(Ue())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uO;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Fs()<=ue.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(Fs()<=ue.DEBUG&&$("QueryEngine","Query:",Ur(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Fs()<=ue.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):P.resolve())}ji(e,n){if(Mp(n))return P.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ou(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,ou(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Mp(n)||s.isEqual(ae.min())?P.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?P.resolve(null):(Fs()<=ue.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(n)),this.es(e,o,n,jk(s,-1)).next(a=>a))})}Zi(e,n){let r=new Ye(Iv(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Fs()<=ue.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ur(n)),this.zi.getDocumentsMatchingQuery(e,n,Wn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new xe(_e),this.rs=new ks(i=>jh(i),Hh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function dO(t,e,n,r){return new fO(t,e,n,r)}async function Bv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=de();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function $v(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function pO(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ot.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(w,A,S){return w.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,d,u)&&a.push(n.Qr.updateTargetData(i,d))});let c=Gn(),l=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(gO(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(ae.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function gO(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function mO(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function hu(t,e,n){const r=ge(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Wp(t,e,n){const r=ge(t);let s=ae.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ge(c),f=h.rs.get(u);return f!==void 0?P.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,Xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:de())).next(a=>(_O(r,f1(e),a),{documents:a,hs:i})))}function _O(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class zp{constructor(){this.activeTargetIds=y1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yO{constructor(){this.no=new zp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new zp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=null;function Yc(){return wo===null?wo=function(){return 268435456+Math.round(2147483648*Math.random())}():wo++,"0x"+wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class TO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Yc(),c=this.bo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw gs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=EO[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Yc();return new Promise((o,a)=>{const c=new kk;c.setWithCredentials(!0),c.listenOnce(Ck.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Gc.NO_ERROR:const u=c.getResponseJson();$(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Gc.TIMEOUT:$(Ze,`RPC '${e}' ${i} timed out`),a(new J(F.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const h=c.getStatus();if($(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const _=function(A){const S=A.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(d.status);a(new J(_,d.message))}else a(new J(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new J(F.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{$(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(Ze,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Yc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rk(),a=Sk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(Ze,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const _=new wO({lo:A=>{d?$(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(f||($(Ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),$(Ze,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},ho:()=>h.close()}),w=(A,S,y)=>{A.listen(S,m=>{try{y(m)}catch(v){setTimeout(()=>{throw v},0)}})};return w(h,yo.EventType.OPEN,()=>{d||$(Ze,`RPC '${e}' stream ${s} transport opened.`)}),w(h,yo.EventType.CLOSE,()=>{d||(d=!0,$(Ze,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),w(h,yo.EventType.ERROR,A=>{d||(d=!0,gs(Ze,`RPC '${e}' stream ${s} transport errored:`,A),_.Vo(new J(F.UNAVAILABLE,"The operation could not be completed")))}),w(h,yo.EventType.MESSAGE,A=>{var S;if(!d){const y=A.data[0];Fe(!!y);const m=y,v=m.error||((S=m[0])===null||S===void 0?void 0:S.error);if(v){$(Ze,`RPC '${e}' stream ${s} received error:`,v);const I=v.status;let T=function(V){const M=Me[V];if(M!==void 0)return Ov(M)}(I),N=v.message;T===void 0&&(T=F.INTERNAL,N="Unknown error status: "+I+" with message "+v.message),d=!0,_.Vo(new J(T,N)),h.close()}else $(Ze,`RPC '${e}' stream ${s} received:`,y),_.mo(y)}}),w(a,Pk.STAT_EVENT,A=>{A.stat===Ap.PROXY?$(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Ap.NOPROXY&&$(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function Xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){return new L1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Hv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new J(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AO extends IO{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=$1(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?is(o.readTime):ae.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Kp(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=iu(c)?{documents:j1(i,c)}:{query:H1(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=F1(i,o.resumeToken);const l=lu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=V1(i,o.snapshotVersion.toTimestamp());const l=lu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=K1(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Kp(this.serializer),n.removeTarget=e,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,uu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(F.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,uu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(F.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(tn(n),this.g_=!1):$("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Zi(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ge(c);l.v_.add(4),await Xi(l),l.x_.set("Unknown"),l.v_.delete(4),await lc(l)}(this))})}),this.x_=new RO(r,s)}}async function lc(t){if(Zi(t))for(const e of t.F_)await e(!0)}async function Xi(t){for(const e of t.F_)await e(!1)}function qv(t,e){const n=ge(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Zh(n)?Xh(n):Os(n).Jo()&&Yh(n,e))}function Jh(t,e){const n=ge(t),r=Os(n);n.C_.delete(e),r.Jo()&&Kv(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Zi(n)&&n.x_.set("Unknown"))}function Yh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).c_(e)}function Kv(t,e){t.O_.Oe(e),Os(t).l_(e)}function Xh(t){t.O_=new N1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.x_.p_()}function Zh(t){return Zi(t)&&!Os(t).Ho()&&t.C_.size>0}function Zi(t){return ge(t).v_.size===0}function Wv(t){t.O_=void 0}async function CO(t){t.C_.forEach((e,n)=>{Yh(t,e)})}async function PO(t,e){Wv(t),Zh(t)?(t.x_.S_(e),Xh(t)):t.x_.set("Unknown")}async function kO(t,e,n){if(t.x_.set("Online"),e instanceof Dv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qp(t,r)}else if(e instanceof xo?t.O_.$e(e):e instanceof Nv?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ae.min()))try{const r=await $v(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),Kv(i,c);const h=new Un(u.target,c,l,u.sequenceNumber);Yh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Qp(t,r)}}async function Qp(t,e,n){if(!Ji(e))throw e;t.v_.add(1),await Xi(t),t.x_.set("Offline"),n||(n=()=>$v(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await lc(t)})}async function Jp(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.v_.add(3),await Xi(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await lc(n)}async function OO(t,e){const n=ge(t);e?(n.v_.delete(2),await lc(n)):e||(n.v_.add(2),await Xi(n),n.x_.set("Unknown"))}function Os(t){return t.N_||(t.N_=function(n,r,s){const i=ge(n);return i.R_(),new AO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:CO.bind(null,t),To:PO.bind(null,t),u_:kO.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Zh(t)?Xh(t):t.x_.set("Unknown")):(await t.N_.stop(),Wv(t))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ef(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zv(t,e){if(tn("AsyncQueue",`${e}: ${t}`),Ji(t))return new J(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.B_=new xe(ee.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ce():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Es(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class DO{constructor(){this.queries=new ks(e=>Tv(e),sc),this.onlineState="Unknown",this.W_=new Set}}async function xO(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new NO,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=zv(o,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&tf(n)}async function MO(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LO(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&tf(n)}function VO(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function tf(t){t.W_.forEach(e=>{e.next()})}var fu,Xp;(Xp=fu||(fu={})).j_="default",Xp.Cache="cache";class FO{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==fu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.key=e}}class Qv{constructor(e){this.key=e}}class UO{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=de(),this.mutatedKeys=de(),this.ha=Iv(e),this.Pa=new os(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Yp,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=ic(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let A=!1;f&&d?f.data.isEqual(d.data)?_!==w&&(r.track({type:3,doc:d}),A=!0):this.da(f,d)||(r.track({type:2,doc:d}),A=!0,(c&&this.ha(d,c)>0||l&&this.ha(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),A=!0):f&&!d&&(r.track({type:1,doc:f}),A=!0,(c||l)&&(a=!0)),A&&(d?(o=o.add(d),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(d,_){const w=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return w(d)-w(_)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Es(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Yp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=de(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new Qv(r))}),this.la.forEach(r=>{e.has(r)||n.push(new Gv(r))}),n}fa(e){this.ua=e.hs,this.la=de();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Es.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class BO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $O{constructor(e){this.key=e,this.pa=!1}}class jO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ks(a=>Tv(a),sc),this.Sa=new Map,this.ba=new Set,this.Da=new xe(ee.comparator),this.Ca=new Map,this.va=new zh,this.Fa={},this.Ma=new Map,this.xa=vs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function HO(t,e,n=!0){const r=eE(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Jv(r,e,n,!0),s}async function qO(t,e){const n=eE(t);await Jv(n,e,!0,!1)}async function Jv(t,e,n,r){const s=await mO(t.localStore,Xt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await KO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&qv(t.remoteStore,s),a}async function KO(t,e,n,r,s){t.Na=(h,f,d)=>async function(w,A,S,y){let m=A.view.Ta(S);m.Xi&&(m=await Wp(w.localStore,A.query,!1).then(({documents:N})=>A.view.Ta(N,m)));const v=y&&y.targetChanges.get(A.targetId),I=y&&y.targetMismatches.get(A.targetId)!=null,T=A.view.applyChanges(m,w.isPrimaryClient,v,I);return eg(w,A.targetId,T.Va),T.snapshot}(t,h,f,d);const i=await Wp(t.localStore,e,!0),o=new UO(e,i.hs),a=o.Ta(i.documents),c=Yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);eg(t,n,l.Va);const u=new BO(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function WO(t,e,n){const r=ge(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!sc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),du(r,s.targetId)}).catch(Mh)):(du(r,s.targetId),await hu(r.localStore,s.targetId,!0))}async function zO(t,e){const n=ge(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function Yv(t,e){const n=ge(t);try{const r=await pO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?Fe(o.pa):s.removedDocuments.size>0&&(Fe(o.pa),o.pa=!1))}),await Zv(n,r,e)}catch(r){await Mh(r)}}function Zp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ge(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.G_(a)&&(l=!0)}),l&&tf(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GO(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new xe(ee.comparator);o=o.insert(i,tt.newNoDocument(i,ae.min()));const a=de().add(i),c=new cc(ae.min(),new Map,new xe(_e),o,a);await Yv(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),nf(r)}else await hu(r.localStore,e,!1).then(()=>du(r,e,n)).catch(Mh)}function du(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||Xv(t,r)})}function Xv(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Jh(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),nf(t))}function eg(t,e,n){for(const r of n)r instanceof Gv?(t.va.addReference(r.key,e),QO(t,r)):r instanceof Qv?($("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||Xv(t,r.key)):ce()}function QO(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||($("SyncEngine","New document in limbo: "+n),t.ba.add(r),nf(t))}function nf(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new ee(Oe.fromString(e)),r=t.xa.next();t.Ca.set(r,new $O(n)),t.Da=t.Da.insert(n,r),qv(t.remoteStore,new Un(Xt(wv(n.path)),r,"TargetPurposeLimboResolution",Fh._e))}}async function Zv(t,e,n){const r=ge(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Qh.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=ge(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,f=>P.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>P.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Ji(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.ns.get(f),_=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(_);u.ns=u.ns.insert(f,w)}}}(r.localStore,i))}async function JO(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Bv(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new J(F.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zv(n,r.us)}}function YO(t,e){const n=ge(t),r=n.Ca.get(e);if(r&&r.pa)return de().add(r.key);{let s=de();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function eE(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GO.bind(null,e),e.ya.u_=LO.bind(null,e.eventManager),e.ya.La=VO.bind(null,e.eventManager),e}class tg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jv(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dO(this.persistence,new hO,e.initialUser,this.serializer)}createPersistence(e){return new cO(Gh.Hr,this.serializer)}createSharedClientState(e){return new yO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JO.bind(null,this.syncEngine),await OO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DO}()}createDatastore(e){const n=jv(e.databaseInfo.databaseId),r=function(i){return new TO(i)}(e.databaseInfo);return function(i,o,a,c){return new bO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Zp(this.syncEngine,n,0),function(){return Gp.D()?new Gp:new vO}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new jO(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ge(r);$("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Xi(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Bk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ng(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nN(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jp(e.remoteStore,s)),t._onlineComponents=e}function tN(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tN(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new tg)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Zc(t,new tg);return t._offlineComponents}async function rN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await ng(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await ng(t,new XO))),t._onlineComponents}async function sN(t){const e=await rN(t),n=e.eventManager;return n.onListen=HO.bind(null,e.syncEngine),n.onUnlisten=WO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zO.bind(null,e.syncEngine),n}function iN(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ZO({next:f=>{o.enqueueAndForget(()=>MO(i,h)),f.fromCache&&c.source==="server"?l.reject(new J(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new FO(a,u,{includeMetadataChanges:!0,ta:!0});return xO(i,h)}(await sN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e,n){if(!n)throw new J(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aN(t,e,n,r){if(e===!0&&r===!0)throw new J(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sg(t){if(ee.isDocumentKey(t))throw new J(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function pu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cN(t);throw new J(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nk;switch(r.type){case"firstParty":return new Lk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rg.get(n);r&&($("ComponentProvider","Removing Datastore"),rg.delete(n),r.terminate())}(this),Promise.resolve()}}function lN(t,e,n,r={}){var s;const i=(t=pu(t,rf))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=et.MOCK_USER;else{a=rR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new J(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(l)}t._authCredentials=new Dk(new dv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class Ns{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ns(this.firestore,e,this._key)}}class as extends uc{constructor(e,n,r){super(e,n,wv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ns(this.firestore,null,new ee(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function Ax(t,e,...n){if(t=vn(t),oN("collection","path",e),t instanceof rf){const r=Oe.fromString(e,...n);return sg(r),new as(t,null,r)}{if(!(t instanceof Ns||t instanceof as))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return sg(r),new as(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Hv(this,"async_queue_retry"),this.cu=()=>{const n=Xc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new qn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ji(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=ef.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&ce()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class nE extends rf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new uN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rE(this),this._firestoreClient.terminate()}}function hN(t,e){const n=typeof t=="object"?t:th(),r=typeof t=="string"?t:e||"(default)",s=Or(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tR("firestore");i&&lN(s,...i)}return s}function fN(t){return t._firestoreClient||rE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rE(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Yk(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new da(ot.fromBase64String(e))}catch(n){throw new J(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new da(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}const pN=new RegExp("[~\\*/\\[\\]]");function gN(t,e,n){if(e.search(pN)>=0)throw og(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sE(...e.split("."))._internalPath}catch{throw og(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function og(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(F.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ns(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mN extends iE{data(){return super.data()}}function oE(t,e){return typeof e=="string"?gN(t,e):e instanceof sE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yN{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return nc(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new dN(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const n=zn(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Fe(Uv(r));const s=new Pi(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vN extends iE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mo extends vN{data(e={}){return super.data(e)}}class EN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new To(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mo(this._firestore,this._userDataWriter,r.key,r,new To(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Mo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new To(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Mo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new To(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:wN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class TN extends yN{constructor(e){super(),this.firestore=e}convertBytes(e){return new da(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ns(this.firestore,null,n)}}function bx(t){t=pu(t,uc);const e=pu(t.firestore,nE),n=fN(e),r=new TN(e);return _N(t._query),iN(n,t._query).then(s=>new EN(e,r,t,s))}(function(e,n=!0){(function(s){Ps=s})(bs),en(new Vt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new nE(new xk(r.getProvider("auth-internal")),new Fk(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new J(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),kt(bp,"4.5.1",e),kt(bp,"4.5.1","esm2017")})();const aE="@firebase/installations",sf="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=1e4,lE=`w:${sf}`,uE="FIS_v2",IN="https://firebaseinstallations.googleapis.com/v1",AN=60*60*1e3,bN="installations",RN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},br=new kr(bN,RN,SN);function hE(t){return t instanceof Ut&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE({projectId:t}){return`${IN}/projects/${t}/installations`}function dE(t){return{token:t.token,requestStatus:2,expiresIn:PN(t.expiresIn),creationTime:Date.now()}}async function pE(t,e){const r=(await e.json()).error;return br.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function CN(t,{refreshToken:e}){const n=gE(t);return n.append("Authorization",kN(e)),n}async function mE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function PN(t){return Number(t.replace("s","000"))}function kN(t){return`${uE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=fE(t),s=gE(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:uE,appId:t.appId,sdkVersion:lE},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await mE(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:dE(l.authToken)}}else throw await pE("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=/^[cdef][\w-]{21}$/,gu="";function xN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=MN(t);return DN.test(n)?n:gu}catch{return gu}}function MN(t){return NN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new Map;function vE(t,e){const n=hc(t);EE(n,e),LN(n,e)}function EE(t,e){const n=yE.get(t);if(n)for(const r of n)r(e)}function LN(t,e){const n=VN();n&&n.postMessage({key:t,fid:e}),FN()}let hr=null;function VN(){return!hr&&"BroadcastChannel"in self&&(hr=new BroadcastChannel("[Firebase] FID Change"),hr.onmessage=t=>{EE(t.data.key,t.data.fid)}),hr}function FN(){yE.size===0&&hr&&(hr.close(),hr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="firebase-installations-database",BN=1,Rr="firebase-installations-store";let el=null;function of(){return el||(el=P_(UN,BN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}})),el}async function pa(t,e){const n=hc(t),s=(await of()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&vE(t,e.fid),e}async function wE(t){const e=hc(t),r=(await of()).transaction(Rr,"readwrite");await r.objectStore(Rr).delete(e),await r.done}async function fc(t,e){const n=hc(t),s=(await of()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&vE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(t){let e;const n=await fc(t.appConfig,r=>{const s=$N(r),i=jN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===gu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $N(t){const e=t||{fid:xN(),registrationStatus:0};return TE(e)}function jN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(br.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qN(t)}:{installationEntry:e}}async function HN(t,e){try{const n=await ON(t,e);return pa(t.appConfig,n)}catch(n){throw hE(n)&&n.customData.serverCode===409?await wE(t.appConfig):await pa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qN(t){let e=await ag(t.appConfig);for(;e.registrationStatus===1;)await _E(100),e=await ag(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await af(t);return r||n}return e}function ag(t){return fc(t,e=>{if(!e)throw br.create("installation-not-found");return TE(e)})}function TE(t){return KN(t)?{fid:t.fid,registrationStatus:0}:t}function KN(t){return t.registrationStatus===1&&t.registrationTime+cE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN({appConfig:t,heartbeatServiceProvider:e},n){const r=zN(t,n),s=CN(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:lE,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await mE(()=>fetch(r,a));if(c.ok){const l=await c.json();return dE(l)}else throw await pE("Generate Auth Token",c)}function zN(t,{fid:e}){return`${fE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(t,e=!1){let n;const r=await fc(t.appConfig,i=>{if(!IE(i))throw br.create("not-registered");const o=i.authToken;if(!e&&JN(o))return i;if(o.requestStatus===1)return n=GN(t,e),i;{if(!navigator.onLine)throw br.create("app-offline");const a=XN(i);return n=QN(t,a),a}});return n?await n:r.authToken}async function GN(t,e){let n=await cg(t.appConfig);for(;n.authToken.requestStatus===1;)await _E(100),n=await cg(t.appConfig);const r=n.authToken;return r.requestStatus===0?cf(t,e):r}function cg(t){return fc(t,e=>{if(!IE(e))throw br.create("not-registered");const n=e.authToken;return ZN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function QN(t,e){try{const n=await WN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await pa(t.appConfig,r),n}catch(n){if(hE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pa(t.appConfig,r)}throw n}}function IE(t){return t!==void 0&&t.registrationStatus===2}function JN(t){return t.requestStatus===2&&!YN(t)}function YN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AN}function XN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ZN(t){return t.requestStatus===1&&t.requestTime+cE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t){const e=t,{installationEntry:n,registrationPromise:r}=await af(e);return r?r.catch(console.error):cf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t,e=!1){const n=t;return await nD(n),(await cf(n,e)).token}async function nD(t){const{registrationPromise:e}=await af(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){if(!t||!t.options)throw tl("App Configuration");if(!t.name)throw tl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tl(t){return br.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="installations",sD="installations-internal",iD=t=>{const e=t.getProvider("app").getImmediate(),n=rD(e),r=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oD=t=>{const e=t.getProvider("app").getImmediate(),n=Or(e,AE).getImmediate();return{getId:()=>eD(n),getToken:s=>tD(n,s)}};function aD(){en(new Vt(AE,iD,"PUBLIC")),en(new Vt(sD,oD,"PRIVATE"))}aD();kt(aE,sf);kt(aE,sf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="analytics",cD="firebase_id",lD="origin",uD=60*1e3,hD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Ma("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new kr("analytics","Analytics",fD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){if(!t.startsWith(lf)){const e=wt.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function bE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function pD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function gD(t,e){const n=pD("firebase-js-sdk-policy",{createScriptURL:dD}),r=document.createElement("script"),s=`${lf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function mD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _D(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await bE(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){mt.error(a)}t("config",s,i)}async function yD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await bE(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){mt.error(i)}}function vD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await yD(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await _D(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){mt.error(a)}}return s}function ED(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=vD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function wD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=30,ID=1e3;class AD{constructor(e={},n=ID){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const RE=new AD;function bD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RD(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:bD(r)},i=hD.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function SD(t,e=RE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw wt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw wt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kD;return setTimeout(async()=>{a.abort()},n!==void 0?n:uD),SE({appId:r,apiKey:s,measurementId:i},o,a,e)}async function SE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=RE){var i;const{appId:o,measurementId:a}=t;try{await CD(r,e)}catch(c){if(a)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await RD(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!PD(l)){if(s.deleteThrottleMetadata(o),a)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ud(n,s.intervalMillis,TD):Ud(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),mt.debug(`Calling attemptFetch again in ${u} millis`),SE(t,h,r,s)}}function CD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function PD(t){if(!(t instanceof Ut)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class kD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function OD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(){if(Zu())try{await R_()}catch(t){return mt.warn(wt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function DD(t,e,n,r,s,i,o){var a;const c=SD(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>mt.error(d)),e.push(c);const l=ND().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([c,l]);wD(i)||gD(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[lD]="firebase",f.update=!0,h!=null&&(f[cD]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.app=e}_delete(){return delete ii[this.app.options.appId],Promise.resolve()}}let ii={},lg=[];const ug={};let nl="dataLayer",MD="gtag",hg,CE,fg=!1;function LD(){const t=[];if(b_()&&t.push("This is a browser extension environment."),lR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=wt.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function VD(t,e,n){LD();const r=t.options.appId;if(!r)throw wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(ii[r]!=null)throw wt.create("already-exists",{id:r});if(!fg){mD(nl);const{wrappedGtag:i,gtagCore:o}=ED(ii,lg,ug,nl,MD);CE=i,hg=o,fg=!0}return ii[r]=DD(t,lg,ug,e,hg,nl,n),new xD(t)}function FD(t=th()){t=vn(t);const e=Or(t,ga);return e.isInitialized()?e.getImmediate():UD(t)}function UD(t,e={}){const n=Or(t,ga);if(n.isInitialized()){const s=n.getImmediate();if(mi(e,n.getOptions()))return s;throw wt.create("already-initialized")}return n.initialize({options:e})}function BD(t,e,n,r){t=vn(t),OD(CE,ii[t.app.options.appId],e,n,r).catch(s=>mt.error(s))}const dg="@firebase/analytics",pg="0.10.2";function $D(){en(new Vt(ga,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return VD(r,s,n)},"PUBLIC")),en(new Vt("analytics-internal",t,"PRIVATE")),kt(dg,pg),kt(dg,pg,"esm2017");function t(e){try{const n=e.getProvider(ga).getImmediate();return{logEvent:(r,s,i)=>BD(n,r,s,i)}}catch(n){throw wt.create("interop-component-reg-failed",{reason:n})}}}$D();const jD=sn(t=>{const e=Pa(),n=k_({apiKey:e.public.FB_API_KEY,authDomain:e.public.FB_AUTH_DOMAIN,projectId:e.public.FB_PROJECT_ID,storageBucket:e.public.FB_STORAGE_BUCKET,messagingSenderId:e.public.FB_MESSAGING_SENDER_ID,appId:e.public.FB_APP_ID,measurementId:e.public.FB_MEASUREMENT_ID});for(let{name:r,instance:s}of[{name:"auth",instance:AP(n)},{name:"firestore",instance:hN(n)},{name:"analytics",instance:FD(n)}])t.vueApp.provide(r,s),t.provide(r,s)}),HD=[TA,AA,Vb,Fb,Ub,qb,Kb,Wb,zb,jD],qD=Jn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return gr(Vi,Di(r)),()=>Et(t.vnode,{ref:t.vnodeRef})}}),KD=Jn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=Ne(),s=Qt(),i=ut(Vi,null);let o;n({pageRef:s});const a=ut(zm,null);let c;const l=r.deferHydration();if(r.isHydrating){const u=r.hooks.hookOnce("app:error",l);on().beforeEach(u)}return t.pageKey&&Xr(()=>t.pageKey,(u,h)=>{u!==h&&r.callHook("page:loading:start")}),()=>Et(m_,{name:t.name,route:t.route,...e},{default:u=>{const h=zD(i,u.route,u.Component),f=i&&i.matched.length===u.route.matched.length;if(!u.Component){if(c&&!f)return c;l();return}if(c&&a&&!a.isCurrent(u.route))return c;if(h&&i&&(!a||a!=null&&a.isCurrent(i)))return f?c:null;const d=xl(u,t.pageKey);!r.isHydrating&&!GD(i,u.route,u.Component)&&o===d&&r.callHook("page:loading:end"),o=d;const _=!!(t.transition??u.route.meta.pageTransition??kl),w=_&&WD([t.transition,u.route.meta.pageTransition,kl,{onAfterLeave:()=>{r.callHook("page:transition:finish",u.Component)}}].filter(Boolean)),A=t.keepalive??u.route.meta.keepalive??pA;return c=__(Sa,_&&w,Pb(A,Et(Nu,{suspensible:!0,onPending:()=>r.callHook("page:start",u.Component),onResolve:()=>{As(()=>r.callHook("page:finish",u.Component).then(()=>r.callHook("page:loading:end")).finally(l))}},{default:()=>{const S=Et(qD,{key:d||void 0,vnode:u.Component,route:u.route,renderKey:d||void 0,trackRootNodes:_,vnodeRef:s});return A&&(S.type.name=u.Component.type.name||u.Component.type.__name||"RouteProvider"),S}}))).default(),c}})}});function WD(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Xu(n.onAfterLeave):void 0}));return Km(...e)}function zD(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&xl({route:e,Component:n})!==xl({route:t,Component:n})}function GD(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const QD=Jn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Ln[t.name]().then(r=>r.default||r);return()=>Et(n,t.layoutProps,e.slots)}}),JD=Jn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Ne(),r=ut(Vi),s=r===Wu()?Sb():r,i=bt(()=>{let c=Ae(t.name)??s.meta.layout??"default";return c&&!(c in Ln)&&t.fallback&&(c=Ae(t.fallback)),c}),o=Qt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);on().beforeEach(c)}return()=>{const c=i.value&&i.value in Ln,l=s.meta.layoutTransition??dA;return __(Sa,c&&l,{default:()=>Et(Nu,{suspensible:!0,onResolve:()=>{As(a)}},{default:()=>Et(YD,{layoutProps:bm(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!l},e.slots)})}).default()}}}),YD=Jn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&gr(zm,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Ln)?(s=(r=e.slots).default)==null?void 0:s.call(r):Et(QD,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),XD=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ZD={};function ex(t,e){const n=KD,r=JD;return qt(),cn(r,null,{default:Pu(()=>[Pe(n)]),_:1})}const tx=XD(ZD,[["render",ex]]),nx={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?Rf(()=>di(()=>import("./BeIvwaAI.js"),__vite__mapDeps([5,3,6,7]),import.meta.url).then(h=>h.default||h)):Rf(()=>di(()=>import("./BuKV2CPp.js"),__vite__mapDeps([8,6,9]),import.meta.url).then(h=>h.default||h));return(h,f)=>(qt(),cn(Ae(u),UE(Im({statusCode:Ae(r),statusMessage:Ae(i),description:Ae(o),stack:Ae(a)})),null,16))}},rx=nx,sx={__name:"nuxt-root",setup(t){const e=()=>null,n=Ne(),r=n.deferHydration();if(n.isHydrating){const a=n.hooks.hookOnce("app:error",r);on().beforeEach(a)}const s=!1;gr(Vi,Wu()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const i=ka();im((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),E0(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>jr(a)),!1});const o=!1;return(a,c)=>(qt(),cn(Nu,{onResolve:Ae(r)},{default:Pu(()=>[Ae(i)?(qt(),cn(Ae(rx),{key:0,error:Ae(i)},null,8,["error"])):Ae(o)?(qt(),cn(Ae(e),{key:1,context:Ae(o)},null,8,["context"])):Ae(s)?(qt(),cn(Rw(Ae(s)),{key:2})):(qt(),cn(Ae(tx),{key:3}))]),_:1},8,["onResolve"]))}},gg=sx;let mg;{let t;mg=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?ZT(gg):XT(gg),s=i0({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||Oa(c)}r.config.errorHandler=i;try{await a0(s,HD)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(gA),await s.hooks.callHook("app:mounted",r),await As()}catch(c){i(c)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=mg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Jn as A,hx as B,bx as C,Ax as D,Ne as E,pt as F,Mu as G,cn as H,fx as I,on as J,bt as K,y_ as L,Md as M,Ex as N,Et as O,cx as P,Hu as Q,Ca as R,mI as S,vx as T,Pa as U,Pr as V,_x as W,El as X,ju as Y,XD as _,Tm as a,Pe as b,dx as c,Am as d,ax as e,lx as f,Xr as g,Lu as h,yx as i,jw as j,$w as k,Sl as l,Bu as m,Qn as n,qt as o,ox as p,ux as q,Qt as r,it as s,ix as t,Ae as u,mx as v,Pu as w,va as x,gx as y,px as z};
