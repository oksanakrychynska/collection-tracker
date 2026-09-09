import{F as j}from "./chunk-PQCSBKY5.js";import{$a as C,Ab as i,Cb as s,Db as T,Hb as A,Ib as k,La as m,Na as p,Rb as E,V as h,X as y,a as f,ab as x,b as v,bb as M,cb as n,cc as F,db as r,eb as D,fb as w,gb as I,kb as _,ma as b,nb as g,ob as l,yb as S,za as o}from "./chunk-NLJA2PXP.js";var H=["*"];var B=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],L=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],G=new h("MAT_CARD_CONFIG"),z=(()=>{class t{appearance;constructor(){let e=y(G,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=m({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,d){a&2&&S("mat-mdc-card-outlined",d.appearance==="outlined")("mdc-card--outlined",d.appearance==="outlined")("mat-mdc-card-filled",d.appearance==="filled")("mdc-card--filled",d.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:H,decls:1,vars:0,template:function(a,d){a&1&&(g(),l(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),P=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=p({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var U=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=p({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var O=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=m({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:L,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,d){a&1&&(g(B),l(0),w(1,"div",0),l(2,1),I(),l(3,2))},encapsulation:2,changeDetection:0})}return t})();var u=class t{user;user2=E();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-trainings-child"]],inputs:{user:"user",user2:[1,"user2"]},decls:11,vars:2,consts:[["appearance","outlined",1,"example-card"]],template:function(e,a){if(e&1&&(n(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),i(3,"This is child component"),r()(),n(4,"mat-card-content")(5,"p"),i(6," Here we can test OnPush strategy + other cool stuff "),r(),n(7,"p"),i(8),r(),n(9,"p"),i(10),r()()()),e&2){let d;o(8),s(" here is the user we gonna test: ",a.user.name," "),o(2),s(" here is the user we gonna test signal : ",(d=a.user2())==null?null:d.name," ")}},dependencies:[z,U,P,O],encapsulation:2,changeDetection:0})};var V=(t,c)=>c.key;function X(t,c){if(t&1&&(n(0,"div",5),i(1),r()),t&2){let e=c.$implicit;o(),T(" Arr number: ",e.key," | Frequency: ",e.value," ")}}function W(t,c){t&1&&(n(0,"p"),i(1,"No map entries found."),r())}var q=class t{user={name:"Oksana"};user2=b({name:"Dmytro"});frequencies=new Map;ngOnInit(){setTimeout(()=>{this.user.name="Anna",this.user2().name="ihor"},1e3),this.frequencyCounter()}ngDoCheck(){console.log("ON CHANGES")}updateUser(){this.user=v(f({},this.user),{name:"Helga 2"}),console.log("UPDATE USER, just click")}frequencyCounter(){return[1,2,3,1,5,3,1,9,2].forEach(e=>{this.frequencies.set(e,(this.frequencies.get(e)||0)+1)}),console.log(this.frequencies),this.frequencies}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-trainings"]],decls:17,vars:7,consts:[[1,"flex-row","align-center","justify-center","width-100","gap-2"],[1,"width-50","margin"],["mat-flat-button","",3,"click"],[3,"user","user2"],[1,"margin"],[1,"map-item"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"div",1)(2,"p"),i(3,"this is parent component"),r(),n(4,"p"),i(5),r(),n(6,"p"),i(7),r(),n(8,"button",2),_("click",function(){return a.updateUser()}),i(9,"Update user"),r()(),n(10,"div",1),D(11,"app-trainings-child",3),r()(),n(12,"div",4),C(13,X,2,2,"div",5,V,!1,W,2,0,"p"),A(16,"keyvalue"),r()),e&2&&(o(5),s("Parent: ",a.user.name),o(2),s("Parent signal: ",a.user2().name),o(4),M("user",a.user)("user2",a.user2()),o(2),x(k(16,5,a.frequencies)))},dependencies:[u,j,F],styles:["[_nghost-%COMP%]   .margin[_ngcontent-%COMP%]{margin:12px}"],changeDetection:0})};export{q as Trainings};
