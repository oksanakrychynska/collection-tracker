import{b as p,f as q}from"./chunk-PQCSBKY5.js";import{B as L,E as D,I as U,La as w,Na as P,O as b,Pb as B,S as z,V as x,Vb as W,W as _,X as a,Xa as k,d as T,ea as u,fc as $,ja as S,jc as V,l as f,m as R,nb as E,ob as v,p as d,pb as O,ra as C,rb as j,sb as H,u as N,xa as g,y as A,yb as y,zb as F}from"./chunk-NLJA2PXP.js";function Q(i){return Error(`Unable to find icon with the name "${i}"`)}function tt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Y(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function J(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var l=class{url;svgText;options;svgElement=null;constructor(c,t,e){this.url=c,this.svgText=t,this.options=e}},X=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,o,n){this._httpClient=t,this._sanitizer=e,this._errorHandler=n,this._document=o}addSvgIcon(t,e,o){return this.addSvgIconInNamespace("",t,e,o)}addSvgIconLiteral(t,e,o){return this.addSvgIconLiteralInNamespace("",t,e,o)}addSvgIconInNamespace(t,e,o,n){return this._addSvgIconConfig(t,e,new l(o,null,n))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,o,n){let r=this._sanitizer.sanitize(g.HTML,o);if(!r)throw J(o);let s=p(r);return this._addSvgIconConfig(t,e,new l("",s,n))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,o){return this._addSvgIconSetConfig(t,new l(e,null,o))}addSvgIconSetLiteralInNamespace(t,e,o){let n=this._sanitizer.sanitize(g.HTML,e);if(!n)throw J(e);let r=p(n);return this._addSvgIconSetConfig(t,new l("",r,o))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(g.RESOURCE_URL,t);if(!e)throw Y(t);let o=this._cachedIconsByUrl.get(e);return o?f(M(o)):this._loadSvgIconFromConfig(new l(t,null)).pipe(b(n=>this._cachedIconsByUrl.set(e,n)),d(n=>M(n)))}getNamedSvgIcon(t,e=""){let o=K(e,t),n=this._svgIconConfigs.get(o);if(n)return this._getSvgFromConfig(n);if(n=this._getIconConfigFromResolvers(e,t),n)return this._svgIconConfigs.set(o,n),this._getSvgFromConfig(n);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):R(Q(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?f(M(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>M(e)))}_getSvgFromIconSetConfigs(t,e){let o=this._extractIconWithNameFromAnySet(t,e);if(o)return f(o);let n=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(A(s=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(g.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(h)),f(null)})));return N(n).pipe(d(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw Q(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let o=e.length-1;o>=0;o--){let n=e[o];if(n.svgText&&n.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(n),s=this._extractSvgIconFromSet(r,t,n.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(b(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?f(null):this._fetchIcon(t).pipe(b(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,o){let n=t.querySelector(`[id="${e}"]`);if(!n)return null;let r=n.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,o);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),o);let s=this._svgElementFromString(p("<svg></svg>"));return s.appendChild(r),this._setSvgAttributes(s,o)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let o=e.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let e=this._svgElementFromString(p("<svg></svg>")),o=t.attributes;for(let n=0;n<o.length;n++){let{name:r,value:s}=o[n];r!=="id"&&e.setAttribute(r,s)}for(let n=0;n<t.childNodes.length;n++)t.childNodes[n].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[n].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:o}=t,n=o?.withCredentials??!1;if(!this._httpClient)throw tt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(g.RESOURCE_URL,e);if(!r)throw Y(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let m=this._httpClient.get(r,{responseType:"text",withCredentials:n}).pipe(d(h=>p(h)),D(()=>this._inProgressUrlFetches.delete(r)),U());return this._inProgressUrlFetches.set(r,m),m}_addSvgIconConfig(t,e,o){return this._svgIconConfigs.set(K(t,e),o),this}_addSvgIconSetConfig(t,e){let o=this._iconSetConfigs.get(t);return o?o.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){let n=this._resolvers[o](e,t);if(n)return et(n)?new l(n.url,null,n.options):new l(n,null)}}static \u0275fac=function(e){return new(e||i)(_($,8),_(V),_(u,8),_(S))};static \u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function M(i){return i.cloneNode(!0)}function K(i,c){return i+":"+c}function et(i){return!!(i.url&&i.options)}var rt=["*"],it=new x("MAT_ICON_DEFAULT_OPTIONS"),st=new x("mat-icon-location",{providedIn:"root",factory:()=>{let i=a(u),c=i?i.location:null;return{getPathname:()=>c?c.pathname+c.search:""}}}),Z=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],at=Z.map(i=>`[${i}]`).join(", "),lt=/^url\(['"]?#(.*?)['"]?\)$/,Nt=(()=>{class i{_elementRef=a(C);_iconRegistry=a(X);_location=a(st);_errorHandler=a(S);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=T.EMPTY;constructor(){let t=a(new B("aria-hidden"),{optional:!0}),e=a(it,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let o=t.childNodes[e];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),e.forEach(o=>t.classList.add(o)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((o,n)=>{o.forEach(r=>{n.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(at),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let n=0;n<e.length;n++)Z.forEach(r=>{let s=e[n],m=s.getAttribute(r),h=m?m.match(lt):null;if(h){let I=o.get(s);I||(I=[],o.set(s,I)),I.push({name:r,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,o]=this._splitIconName(t);e&&(this._svgNamespace=e),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,e).pipe(L(1)).subscribe(n=>this._setSvgElement(n),n=>{let r=`Error retrieving icon ${e}:${o}! ${n.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,o){e&2&&(k("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),F(o.color?"mat-"+o.color:""),y("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",W],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:rt,decls:1,vars:0,template:function(e,o){e&1&&(E(),v(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})();var ct=["*",[["mat-toolbar-row"]]],mt=["*","mat-toolbar-row"],ht=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Bt=(()=>{class i{_elementRef=a(C);_platform=a(q);_document=a(u);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,o,n){if(e&1&&O(n,ht,5),e&2){let r;j(r=H())&&(o._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(F(o.color?"mat-"+o.color:""),y("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:mt,decls:2,vars:0,template:function(e,o){e&1&&(E(ct),v(0),v(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();export{it as a,Nt as b,ht as c,Bt as d};
