/*! For license information please see 617.2a22bb75.js.LICENSE.txt */
(self.webpackChunkflexdoc=self.webpackChunkflexdoc||[]).push([[617],{7617:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n=r(7294),i=r(2263),s=r(2164),o=r(5742),a=r(9960),u=r(5999),l=r(373),c=r(902);const h=["zero","one","two","few","many","other"];function d(e){return h.filter((t=>e.includes(t)))}const f={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function p(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:d(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),f}}),[e])}function m(){const e=p();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);const i=r.select(t),s=r.pluralForms.indexOf(i);return n[Math.min(s,n.length-1)]}(r,t,e)}}var g=r(143),y=r(6775),x=r(412);const v=function(){const e=(0,y.k6)(),t=(0,y.TH)(),{siteConfig:{baseUrl:r}}=(0,i.Z)();return{searchValue:x.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:r=>{const n=new URLSearchParams(t.search);r?n.set("q",r):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>r+"search?q="+encodeURIComponent(e)}};var w=r(1336),Q=r.n(w),k=r(895);function E(e){return S(e).concat(S(e.filter((e=>{const t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function S(e,t){return e.map((e=>({tokens:e.map((e=>e.value)),term:e.map((e=>({value:e.value,presence:Q().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?Q().Query.wildcard.TRAILING:Q().Query.wildcard.NONE})))})))}function b(e,t,r){return function(n,i){const s=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return Q()[t[0]].tokenizer(e).map((e=>e.toString()));let r=/[^-\s]+/g;return t.includes("zh")&&(r=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(r)||[]}(n,k.dK);if(0===s.length)return void i([]);const o=function(e,t){const r=function(e,t){const r=[];return function e(n,i){if(0===n.length)return void r.push(i);const s=n[0];if(/\p{Unified_Ideograph}/u.test(s)){const r=function(e,t){const r=[];return function e(n,i){let s=0,o=!1;for(const a of t)if(n.substr(0,a.length)===a){const t={missed:i.missed,term:i.term.concat({value:a})};n.length>a.length?e(n.substr(a.length),t):r.push(t),o=!0}else for(let t=a.length-1;t>s;t-=1){const u=a.substr(0,t);if(n.substr(0,t)===u){s=t;const a={missed:i.missed,term:i.term.concat({value:u,trailing:!0})};n.length>t?e(n.substr(t),a):r.push(a),o=!0;break}}o||(n.length>0?e(n.substr(1),{missed:i.missed+1,term:i.term}):i.term.length>0&&r.push(i))}(e,{missed:0,term:[]}),r.sort(((e,t)=>{const r=e.missed>0?1:0,n=t.missed>0?1:0;return r!==n?r-n:e.term.length-t.term.length})).map((e=>e.term))}(s,t);for(const t of r){const r=i.concat(...t);e(n.slice(1),r)}}else{const t=i.concat({value:s});e(n.slice(1),t)}}(e,[]),r}(e,t);if(0===r.length)return[{tokens:e,term:e.map((e=>({value:e,presence:Q().Query.presence.REQUIRED,wildcard:Q().Query.wildcard.LEADING|Q().Query.wildcard.TRAILING})))}];for(const o of r)o[o.length-1].maybeTyping=!0;const n=[];for(const o of k.dK)if("en"===o)k._k||n.unshift(Q().stopWordFilter);else{const e=Q()[o];e.stopWordFilter&&n.unshift(e.stopWordFilter)}let i;if(n.length>0){const e=e=>n.reduce(((e,t)=>e.filter((e=>t(e.value)))),e);i=[];const t=[];for(const n of r){const r=e(n);i.push(r),r.length<n.length&&r.length>0&&t.push(r)}r.push(...t)}else i=r.slice();const s=[];for(const o of i)if(o.length>2)for(let e=o.length-1;e>=0;e-=1)s.push(o.slice(0,e).concat(o.slice(e+1)));return E(r).concat(E(s))}(s,t),a=[];e:for(const{term:t,tokens:u}of o)for(const{documents:n,index:i,type:s}of e)if(a.push(...i.query((e=>{for(const r of t)e.term(r.value,{wildcard:r.wildcard,presence:r.presence})})).slice(0,r).filter((e=>!a.some((t=>t.document.i.toString()===e.ref)))).slice(0,r-a.length).map((t=>{const r=n.find((e=>e.i.toString()===t.ref));return{document:r,type:s,page:0!==s&&e[0].documents.find((e=>e.i===r.p)),metadata:t.matchData.metadata,tokens:u,score:t.score}}))),a.length>=r)break e;!function(e){e.forEach(((e,t)=>{e.index=t})),e.sort(((t,r)=>{let n=t.type>0&&t.page?e.findIndex((e=>e.document===t.page)):t.index,i=r.type>0&&r.page?e.findIndex((e=>e.document===r.page)):r.index;return-1===n&&(n=t.index),-1===i&&(i=r.index),n===i?0===t.type?-1:0===r.type?1:t.index-r.index:n-i}))}(a),function(e){e.forEach(((t,r)=>{r>0&&t.page&&e.some((e=>e.document===t.page))&&(r<e.length-1&&e[r+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(a),i(a)}}function L(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function I(e,t,r){const n=[];for(const i of t){const r=e.toLowerCase().indexOf(i);if(r>=0){r>0&&n.push(I(e.substr(0,r),t)),n.push("<mark>"+L(e.substr(r,i.length))+"</mark>");const s=r+i.length;s<e.length&&n.push(I(e.substr(s),t));break}}return 0===n.length?r?"<mark>"+L(e)+"</mark>":L(e):n.join("")}const P=/\w+|\p{Unified_Ideograph}/u;function T(e){const t=[];let r=0,n=e;for(;n.length>0;){const i=n.match(P);if(!i){t.push(n);break}i.index>0&&t.push(n.substring(0,i.index)),t.push(i[0]),r+=i.index+i[0].length,n=e.substring(r)}return t}function R(e,t,r,n){void 0===n&&(n=k.Hk);const{chunkIndex:i,chunks:s}=function(e,t,r){const n=[];let i=0,s=0,o=-1;for(;i<t.length;){const[a,u]=t[i];if(i+=1,!(a<s)){if(a>s){const t=T(e.substring(s,a)).map((e=>({html:L(e),textLength:e.length})));for(const e of t)n.push(e)}-1===o&&(o=n.length),s=a+u,n.push({html:I(e.substring(a,s),r,!0),textLength:u})}}if(s<e.length){const t=T(e.substring(s)).map((e=>({html:L(e),textLength:e.length})));for(const e of t)n.push(e)}return{chunkIndex:o,chunks:n}}(e,t,r),o=s.slice(0,i),a=s[i],u=[a.html],l=s.slice(i+1);let c=a.textLength,h=0,d=0,f=!1,p=!1;for(;c<n;)if((h<=d||0===l.length)&&o.length>0){const e=o.pop();c+e.textLength<=n?(u.unshift(e.html),h+=e.textLength,c+=e.textLength):(f=!0,o.length=0)}else{if(!(l.length>0))break;{const e=l.shift();c+e.textLength<=n?(u.push(e.html),d+=e.textLength,c+=e.textLength):(p=!0,l.length=0)}}return(f||o.length>0)&&u.unshift("\u2026"),(p||l.length>0)&&u.push("\u2026"),u.join("")}function O(e,t){const r=[];for(const n of Object.values(e))n[t]&&r.push(...n[t].position);return r.sort(((e,t)=>e[0]-t[0]||t[1]-e[1]))}var F=r(6010);const C="loadingRing_RJI3";function N(e){let{className:t}=e;return n.createElement("div",{className:(0,F.Z)(C,t)},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))}const _="searchQueryInput_CFBF",j="searchResultItem_U687",D="searchResultItemPath_uIbk",A="searchResultItemSummary_oZHr";function z(){const{siteConfig:{baseUrl:e}}=(0,i.Z)(),t=(0,g.gA)();let r=e;try{var s;const{preferredVersion:e}=(0,l.J)(null!=(s=null==t?void 0:t.pluginId)?s:k.gQ);e&&!e.isLast&&(r=e.path+"/")}catch(I){if(k.l9&&!(I instanceof c.i6))throw I}const{selectMessage:a}=m(),{searchValue:h,updateSearchPath:d}=v(),[f,p]=(0,n.useState)(h),[y,x]=(0,n.useState)(),[w,E]=(0,n.useState)(),S=(0,n.useMemo)((()=>f?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,n.useEffect)((()=>{d(f),y&&(f?y(f,(e=>{E(e)})):E(void 0))}),[f,y]);const L=(0,n.useCallback)((e=>{p(e.target.value)}),[]);return(0,n.useEffect)((()=>{h&&h!==f&&p(h)}),[h]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await async function(e){{const t=await(await fetch(""+e+k.J)).json(),r=t.map(((e,t)=>{let{documents:r,index:n}=e;return{type:t,documents:r,index:Q().Index.load(n)}})),n=t.reduce(((e,t)=>{for(const r of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(r[0][0])&&e.add(r[0]);return e}),new Set);return{wrappedIndexes:r,zhDictionary:Array.from(n)}}}(r);x((()=>b(e,t,100)))}()}),[r]),n.createElement(n.Fragment,null,n.createElement(o.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,S)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,S),n.createElement("input",{type:"search",name:"q",className:_,"aria-label":"Search",onChange:L,value:f,autoComplete:"off",autoFocus:!0}),!y&&f&&n.createElement("div",null,n.createElement(N,null)),w&&(w.length>0?n.createElement("p",null,a(w.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):n.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),n.createElement("section",null,w&&w.map((e=>n.createElement(B,{key:e.document.i,searchResult:e}))))))}function B(e){let{searchResult:{document:t,type:r,page:i,tokens:s,metadata:o}}=e;const u=0===r,l=2===r,c=(u?t.b:i.b).slice(),h=l?t.s:t.t;return u||c.push(i.t),n.createElement("article",{className:j},n.createElement("h2",null,n.createElement(a.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:l?I(h,s):R(h,O(o,"t"),s,100)}})),c.length>0&&n.createElement("p",{className:D},function(e){return e.join(" \u203a ")}(c)),l&&n.createElement("p",{className:A,dangerouslySetInnerHTML:{__html:R(t.t,O(o,"t"),s,100)}}))}const V=function(){return n.createElement(s.Z,null,n.createElement(z,null))}},1336:(e,t,r)=>{var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,m,g,y,x,v,w,Q,k,E,S,b,L,I,P,T,R,O=function(e){var t=new O.Builder;return t.pipeline.add(O.trimmer,O.stopWordFilter,O.stemmer),t.searchPipeline.add(O.stemmer),e.call(t,t),t.build()};O.version="2.3.9",O.utils={},O.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),O.utils.asString=function(e){return null==e?"":e.toString()},O.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},O.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},O.FieldRef.joiner="/",O.FieldRef.fromString=function(e){var t=e.indexOf(O.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new O.FieldRef(n,r,e)},O.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+O.FieldRef.joiner+this.docRef),this._stringValue},O.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},O.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},O.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},O.Set.prototype.contains=function(e){return!!this.elements[e]},O.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===O.Set.complete)return this;if(e===O.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new O.Set(i)},O.Set.prototype.union=function(e){return e===O.Set.complete?O.Set.complete:e===O.Set.empty?this:new O.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},O.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},O.Token=function(e,t){this.str=e||"",this.metadata=t||{}},O.Token.prototype.toString=function(){return this.str},O.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},O.Token.prototype.clone=function(e){return e=e||function(e){return e},new O.Token(e(this.str,this.metadata),this.metadata)},O.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new O.Token(O.utils.asString(e).toLowerCase(),O.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(O.tokenizer.separator)||s==n){if(a>0){var u=O.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new O.Token(r.slice(o,s),u))}o=s+1}}return i},O.tokenizer.separator=/[\s\-]+/,O.Pipeline=function(){this._stack=[]},O.Pipeline.registeredFunctions=Object.create(null),O.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&O.utils.warn("Overwriting existing registered function: "+t),e.label=t,O.Pipeline.registeredFunctions[e.label]=e},O.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||O.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},O.Pipeline.load=function(e){var t=new O.Pipeline;return e.forEach((function(e){var r=O.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},O.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){O.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},O.Pipeline.prototype.after=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},O.Pipeline.prototype.before=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},O.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},O.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},O.Pipeline.prototype.runString=function(e,t){var r=new O.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},O.Pipeline.prototype.reset=function(){this._stack=[]},O.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return O.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},O.Vector=function(e){this._magnitude=0,this.elements=e||[]},O.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},O.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},O.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},O.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},O.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},O.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},O.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},O.Vector.prototype.toJSON=function(){return this.elements},O.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",l="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,g=/^(.+?)eed$/,y=/^(.+?)(ed|ing)$/,x=/.$/,v=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),Q=new RegExp("^"+l+u+"[^aeiouwxy]$"),k=/^(.+?[^aeiou])y$/,E=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,S=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,b=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,L=/^(.+?)(s|t)(ion)$/,I=/^(.+?)e$/,P=/ll$/,T=new RegExp("^"+l+u+"[^aeiouwxy]$"),R=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=m,(i=p).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=y,(i=g).test(e)){var R=i.exec(e);(i=c).test(R[1])&&(i=x,e=e.replace(i,""))}else s.test(e)&&(t=(R=s.exec(e))[1],(s=f).test(t)&&(u=w,l=Q,(s=v).test(e=t)?e+="e":u.test(e)?(i=x,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=k).test(e)&&(e=(t=(R=i.exec(e))[1])+"i"),(i=E).test(e)&&(t=(R=i.exec(e))[1],r=R[2],(i=c).test(t)&&(e=t+o[r])),(i=S).test(e)&&(t=(R=i.exec(e))[1],r=R[2],(i=c).test(t)&&(e=t+a[r])),s=L,(i=b).test(e)?(t=(R=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(R=s.exec(e))[1]+R[2],(s=h).test(t)&&(e=t)),(i=I).test(e)&&(t=(R=i.exec(e))[1],s=d,u=T,((i=h).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=h,(i=P).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(R)}),O.Pipeline.registerFunction(O.stemmer,"stemmer"),O.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},O.stopWordFilter=O.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),O.Pipeline.registerFunction(O.stopWordFilter,"stopWordFilter"),O.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},O.Pipeline.registerFunction(O.trimmer,"trimmer"),O.TokenSet=function(){this.final=!1,this.edges={},this.id=O.TokenSet._nextId,O.TokenSet._nextId+=1},O.TokenSet._nextId=1,O.TokenSet.fromArray=function(e){for(var t=new O.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},O.TokenSet.fromClause=function(e){return"editDistance"in e?O.TokenSet.fromFuzzyString(e.term,e.editDistance):O.TokenSet.fromString(e.term)},O.TokenSet.fromFuzzyString=function(e,t){for(var r=new O.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new O.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else{a=new O.TokenSet;i.node.edges["*"]=a}if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else{u=new O.TokenSet;i.node.edges["*"]=u}1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new O.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},O.TokenSet.fromString=function(e){for(var t=new O.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new O.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},O.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},O.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},O.TokenSet.prototype.intersect=function(e){for(var t=new O.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,m=void 0;h in r.output.edges?(m=r.output.edges[h]).final=m.final||p:((m=new O.TokenSet).final=p,r.output.edges[h]=m),n.push({qNode:f,output:m,node:d})}}}return t},O.TokenSet.Builder=function(){this.previousWord="",this.root=new O.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},O.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(n=r;n<e.length;n++){var i=new O.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},O.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},O.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},O.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},O.Index.prototype.search=function(e){return this.query((function(t){new O.QueryParser(e,t).parse()}))},O.Index.prototype.query=function(e){for(var t=new O.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new O.Vector;e.call(t,t);for(a=0;a<t.clauses.length;a++){var u=t.clauses[a],l=null,c=O.Set.empty;l=u.usePipeline?this.pipeline.runString(u.term,{fields:u.fields}):[u.term];for(var h=0;h<l.length;h++){var d=l[h];u.term=d;var f=O.TokenSet.fromClause(u),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&u.presence===O.Query.presence.REQUIRED){for(var m=0;m<u.fields.length;m++){s[F=u.fields[m]]=O.Set.empty}break}for(var g=0;g<p.length;g++){var y=p[g],x=this.invertedIndex[y],v=x._index;for(m=0;m<u.fields.length;m++){var w=x[F=u.fields[m]],Q=Object.keys(w),k=y+"/"+F,E=new O.Set(Q);if(u.presence==O.Query.presence.REQUIRED&&(c=c.union(E),void 0===s[F]&&(s[F]=O.Set.complete)),u.presence!=O.Query.presence.PROHIBITED){if(n[F].upsert(v,u.boost,(function(e,t){return e+t})),!i[k]){for(var S=0;S<Q.length;S++){var b,L=Q[S],I=new O.FieldRef(L,F),P=w[L];void 0===(b=r[I])?r[I]=new O.MatchData(y,F,P):b.add(y,F,P)}i[k]=!0}}else void 0===o[F]&&(o[F]=O.Set.empty),o[F]=o[F].union(E)}}}if(u.presence===O.Query.presence.REQUIRED)for(m=0;m<u.fields.length;m++){s[F=u.fields[m]]=s[F].intersect(c)}}var T=O.Set.complete,R=O.Set.empty;for(a=0;a<this.fields.length;a++){var F;s[F=this.fields[a]]&&(T=T.intersect(s[F])),o[F]&&(R=R.union(o[F]))}var C=Object.keys(r),N=[],_=Object.create(null);if(t.isNegated()){C=Object.keys(this.fieldVectors);for(a=0;a<C.length;a++){I=C[a];var j=O.FieldRef.fromString(I);r[I]=new O.MatchData}}for(a=0;a<C.length;a++){var D=(j=O.FieldRef.fromString(C[a])).docRef;if(T.contains(D)&&!R.contains(D)){var A,z=this.fieldVectors[j],B=n[j.fieldName].similarity(z);if(void 0!==(A=_[D]))A.score+=B,A.matchData.combine(r[j]);else{var V={ref:D,score:B,matchData:r[j]};_[D]=V,N.push(V)}}}return N.sort((function(e,t){return t.score-e.score}))},O.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:O.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},O.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new O.TokenSet.Builder,a=O.Pipeline.load(e.pipeline);e.version!=O.version&&O.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+O.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new O.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new O.Index(t)},O.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=O.tokenizer,this.pipeline=new O.Pipeline,this.searchPipeline=new O.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},O.Builder.prototype.ref=function(e){this._ref=e},O.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},O.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},O.Builder.prototype.k1=function(e){this._k1=e},O.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new O.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var m=0;m<n.length;m++)p[n[m]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var g=0;g<this.metadataWhitelist.length;g++){var y=this.metadataWhitelist[g],x=f.metadata[y];null==this.invertedIndex[f][s][r][y]&&(this.invertedIndex[f][s][r][y]=[]),this.invertedIndex[f][s][r][y].push(x)}}}},O.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=O.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},O.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=O.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new O.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var m,g,y,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(m=O.idf(this.invertedIndex[x],this.documentCount),n[x]=m):m=n[x],g=m*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),g*=d,g*=f,y=Math.round(1e3*g)/1e3,u.insert(w,y)}e[s]=u}this.fieldVectors=e},O.Builder.prototype.createTokenSet=function(){this.tokenSet=O.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},O.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new O.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},O.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},O.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},O.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},O.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},O.Query=function(e){this.clauses=[],this.allFields=e},O.Query.wildcard=new String("*"),O.Query.wildcard.NONE=0,O.Query.wildcard.LEADING=1,O.Query.wildcard.TRAILING=2,O.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},O.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=O.Query.wildcard.NONE),e.wildcard&O.Query.wildcard.LEADING&&e.term.charAt(0)!=O.Query.wildcard&&(e.term="*"+e.term),e.wildcard&O.Query.wildcard.TRAILING&&e.term.slice(-1)!=O.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=O.Query.presence.OPTIONAL),this.clauses.push(e),this},O.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=O.Query.presence.PROHIBITED)return!1;return!0},O.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,O.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},O.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},O.QueryParseError.prototype=new Error,O.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},O.QueryLexer.prototype.run=function(){for(var e=O.QueryLexer.lexText;e;)e=e(this)},O.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},O.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},O.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},O.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return O.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},O.QueryLexer.prototype.width=function(){return this.pos-this.start},O.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},O.QueryLexer.prototype.backup=function(){this.pos-=1},O.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=O.QueryLexer.EOS&&this.backup()},O.QueryLexer.prototype.more=function(){return this.pos<this.length},O.QueryLexer.EOS="EOS",O.QueryLexer.FIELD="FIELD",O.QueryLexer.TERM="TERM",O.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",O.QueryLexer.BOOST="BOOST",O.QueryLexer.PRESENCE="PRESENCE",O.QueryLexer.lexField=function(e){return e.backup(),e.emit(O.QueryLexer.FIELD),e.ignore(),O.QueryLexer.lexText},O.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(O.QueryLexer.TERM)),e.ignore(),e.more())return O.QueryLexer.lexText},O.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.EDIT_DISTANCE),O.QueryLexer.lexText},O.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.BOOST),O.QueryLexer.lexText},O.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(O.QueryLexer.TERM)},O.QueryLexer.termSeparator=O.tokenizer.separator,O.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==O.QueryLexer.EOS)return O.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return O.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(O.QueryLexer.PRESENCE),O.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(O.QueryLexer.PRESENCE),O.QueryLexer.lexText;if(t.match(O.QueryLexer.termSeparator))return O.QueryLexer.lexTerm}else e.escapeCharacter()}},O.QueryParser=function(e,t){this.lexer=new O.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},O.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=O.QueryParser.parseClause;e;)e=e(this);return this.query},O.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},O.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},O.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},O.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case O.QueryLexer.PRESENCE:return O.QueryParser.parsePresence;case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new O.QueryParseError(r,t.start,t.end)}},O.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=O.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=O.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new O.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n){r="expecting term or field, found nothing";throw new O.QueryParseError(r,t.start,t.end)}switch(n.type){case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:r="expecting term or field, found '"+n.type+"'";throw new O.QueryParseError(r,n.start,n.end)}}},O.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i){n="expecting term, found nothing";throw new O.QueryParseError(n,t.start,t.end)}if(i.type===O.QueryLexer.TERM)return O.QueryParser.parseTerm;n="expecting term, found '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}},O.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new O.QueryParseError(n,r.start,r.end)}else e.nextClause()}},O.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}else e.nextClause()}},O.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return O})?n.call(t,r,t,e):n)||(e.exports=i)}()}}]);