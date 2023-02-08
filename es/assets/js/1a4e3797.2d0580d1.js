"use strict";(self.webpackChunkflexdoc=self.webpackChunkflexdoc||[]).push([[920],{2027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(7294),l=n(2263),r=n(8765),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902);const i=["zero","one","two","few","many","other"];function h(e){return i.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function g(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}var f=n(143),E=n(6775),y=n(412);const S=function(){const e=(0,E.k6)(),t=(0,E.TH)(),{siteConfig:{baseUrl:n}}=(0,l.Z)();return{searchValue:y.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var w=n(22),I=n(8202),b=n(2539),F=n(726),P=n(1073),R=n(311),v=n(3926),k=n(1029);const C="searchQueryInput_CFBF",x="searchResultItem_U687",_="searchResultItemPath_uIbk",q="searchResultItemSummary_oZHr";function T(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),t=(0,f.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)((null==t?void 0:t.pluginId)??k.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(v){if(k.l9&&!(v instanceof m.i6))throw v}const{selectMessage:r}=g(),{searchValue:c,updateSearchPath:i}=S(),[h,p]=(0,a.useState)(c),[d,E]=(0,a.useState)(),[y,b]=(0,a.useState)(),F=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{i(h),d&&(h?d(h,(e=>{b(e)})):b(void 0))}),[h,d]);const P=(0,a.useCallback)((e=>{p(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==h&&p(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,w.w)(n);E((()=>(0,I.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,F)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,F),a.createElement("input",{type:"search",name:"q",className:C,"aria-label":"Search",onChange:P,value:h,autoComplete:"off",autoFocus:!0}),!d&&h&&a.createElement("div",null,a.createElement(R.Z,null)),y&&(y.length>0?a.createElement("p",null,r(y.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:y.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,y&&y.map((e=>a.createElement(Z,{key:e.document.i,searchResult:e}))))))}function Z(e){let{searchResult:{document:t,type:n,page:l,tokens:r,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:l.b).slice(),i=u?t.s:t.t;return o||m.push(l.t),a.createElement("article",{className:x},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,b.C)(i,r):(0,F.o)(i,(0,P.m)(s,"t"),r,100)}})),m.length>0&&a.createElement("p",{className:_},(0,v.e)(m)),u&&a.createElement("p",{className:q,dangerouslySetInnerHTML:{__html:(0,F.o)(t.t,(0,P.m)(s,"t"),r,100)}}))}const $=function(){return a.createElement(r.Z,null,a.createElement(T,null))}}}]);