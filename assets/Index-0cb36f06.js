import{u as e}from"./useSwitchPage-702c5f1e.js";import{d as t,a3 as n,r as o,w as a,a as r,c as i,K as l,e as s,aF as u,P as p,L as c,ac as d,ad as m,aG as v,_ as f,ai as g,C as b,F as y,E as $,aH as h,a8 as w,H as C,an as O,A as _,ah as x,aI as S,M as k,ar as P,aw as I,aJ as R,az as A,aA as L,aB as D,a7 as M,aE as N,ax as j,ay as E,aK as T,aL as z,aC as B,as as F,aM as K,aN as H,au as X,aO as U}from"./index-b7657dfd.js";import{g as V}from"./util-a4a90075.js";import{T as W,g as Y,r as G,s as J,a as q,b as Q,c as Z,i as ee,E as te,u as ne,d as oe,M as ae,_ as re,e as ie}from"./index-89b87540.js";import{K as le,t as se,r as ue,u as pe}from"./collapseMotion-968da4b1.js";import{o as ce}from"./omit-12cf0f49.js";const de=new le("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),me=new le("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),ve=new le("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),fe=new le("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ge=new le("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),be=new le("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ye={"move-up":{inKeyframes:new le("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),outKeyframes:new le("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}})},"move-down":{inKeyframes:de,outKeyframes:me},"move-left":{inKeyframes:ve,outKeyframes:fe},"move-right":{inKeyframes:ge,outKeyframes:be}},$e=(e,t)=>{const{antCls:n}=e,o=`${n}-${t}`,{inKeyframes:a,outKeyframes:r}=ye[t];return[se(o,a,r,e.motionDurationMid),{[`\n        ${o}-enter,\n        ${o}-appear\n      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},he={adjustX:1,adjustY:1},we=[0,0],Ce={topLeft:{points:["bl","tl"],overflow:he,offset:[0,-4],targetOffset:we},topCenter:{points:["bc","tc"],overflow:he,offset:[0,-4],targetOffset:we},topRight:{points:["br","tr"],overflow:he,offset:[0,-4],targetOffset:we},bottomLeft:{points:["tl","bl"],overflow:he,offset:[0,4],targetOffset:we},bottomCenter:{points:["tc","bc"],overflow:he,offset:[0,4],targetOffset:we},bottomRight:{points:["tr","br"],overflow:he,offset:[0,4],targetOffset:we}};var Oe=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const _e=t({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:n.string.def("rc-dropdown"),transitionName:String,overlayClassName:n.string.def(""),openClassName:String,animation:n.any,align:n.object,overlayStyle:{type:Object,default:void 0},placement:n.string.def("bottomLeft"),overlay:n.any,trigger:n.oneOfType([n.string,n.arrayOf(n.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:n.array,hideAction:n.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:n.number.def(.15),mouseLeaveDelay:n.number.def(.1)},emits:["visibleChange","overlayClick"],setup(e,t){let{slots:n,emit:c,expose:d}=t;const m=o(!!e.visible);a((()=>e.visible),(e=>{void 0!==e&&(m.value=e)}));const v=o();d({triggerRef:v});const f=t=>{void 0===e.visible&&(m.value=!1),c("overlayClick",t)},g=t=>{void 0===e.visible&&(m.value=t),c("visibleChange",t)},b=()=>{var t;const o=null===(t=n.overlay)||void 0===t?void 0:t.call(n),a={prefixCls:`${e.prefixCls}-menu`,onClick:f};return i(p,{key:u},[e.arrow&&i("div",{class:`${e.prefixCls}-arrow`},null),ue(o,a,!1)])},y=r((()=>{const{minOverlayWidthMatchTrigger:t=!e.alignPoint}=e;return t})),$=()=>{var t;const o=null===(t=n.default)||void 0===t?void 0:t.call(n);return m.value&&o?ue(o[0],{class:e.openClassName||`${e.prefixCls}-open`},!1):o},h=r((()=>e.hideAction||-1===e.trigger.indexOf("contextmenu")?e.hideAction:["click"]));return()=>{const{prefixCls:t,arrow:n,showAction:o,overlayStyle:a,trigger:r,placement:u,align:p,getPopupContainer:c,transitionName:d,animation:f,overlayClassName:w}=e,C=Oe(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return i(W,l(l({},C),{},{prefixCls:t,ref:v,popupClassName:s(w,{[`${t}-show-arrow`]:n}),popupStyle:a,builtinPlacements:Ce,action:r,showAction:o,hideAction:h.value||[],popupPlacement:u,popupAlign:p,popupTransitionName:d,popupAnimation:f,popupVisible:m.value,stretch:y.value?"minWidth":"",onPopupVisibleChange:g,getPopupContainer:c}),{popup:b,default:$})}}}),xe=()=>({arrow:c([Boolean,Object]),trigger:{type:[Array,String]},menu:d(),overlay:n.any,visible:m(),open:m(),disabled:m(),danger:m(),autofocus:m(),align:d(),getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:d(),forceRender:m(),mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:m(),destroyPopupOnHide:m(),onVisibleChange:{type:Function},"onUpdate:visible":{type:Function},onOpenChange:{type:Function},"onUpdate:open":{type:Function}}),Se=v(),ke=e=>{const{componentCls:t,antCls:n,paddingXS:o,opacityLoading:a}=e;return{[`${t}-button`]:{whiteSpace:"nowrap",[`&${n}-btn-group > ${n}-btn`]:{[`&-loading, &-loading + ${n}-btn`]:{cursor:"default",pointerEvents:"none",opacity:a},[`&:last-child:not(:first-child):not(${n}-btn-icon-only)`]:{paddingInline:o}}}}},Pe=e=>{const{componentCls:t,menuCls:n,colorError:o,colorTextLightSolid:a}=e,r=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${r}`]:{[`&${r}-danger:not(${r}-disabled)`]:{color:o,"&:hover":{color:a,backgroundColor:o}}}}}},Ie=e=>{const{componentCls:t,menuCls:n,zIndexPopup:o,dropdownArrowDistance:a,dropdownArrowOffset:r,sizePopupArrow:i,antCls:l,iconCls:s,motionDurationMid:u,dropdownPaddingVertical:p,fontSize:c,dropdownEdgeChildPadding:d,colorTextDisabled:m,fontSizeIcon:v,controlPaddingHorizontal:g,colorBgElevated:b,boxShadowPopoverArrow:y}=e;return[{[t]:f(f({},$(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:o,display:"block","&::before":{position:"absolute",insetBlock:i/2-a,zIndex:-9999,opacity:1e-4,content:'""'},[`${t}-wrap`]:{position:"relative",[`${l}-btn > ${s}-down`]:{fontSize:v},[`${s}-down::before`]:{transition:`transform ${u}`}},[`${t}-wrap-open`]:{[`${s}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`\n        &-show-arrow${t}-placement-topLeft,\n        &-show-arrow${t}-placement-top,\n        &-show-arrow${t}-placement-topRight\n      `]:{paddingBottom:a},[`\n        &-show-arrow${t}-placement-bottomLeft,\n        &-show-arrow${t}-placement-bottom,\n        &-show-arrow${t}-placement-bottomRight\n      `]:{paddingTop:a},[`${t}-arrow`]:f({position:"absolute",zIndex:1,display:"block"},G(i,e.borderRadiusXS,e.borderRadiusOuter,b,y)),[`\n        &-placement-top > ${t}-arrow,\n        &-placement-topLeft > ${t}-arrow,\n        &-placement-topRight > ${t}-arrow\n      `]:{bottom:a,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:r}},[`&-placement-topRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:r}},[`\n          &-placement-bottom > ${t}-arrow,\n          &-placement-bottomLeft > ${t}-arrow,\n          &-placement-bottomRight > ${t}-arrow\n        `]:{top:a,transform:"translateY(-100%)"},[`&-placement-bottom > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateY(-100%) translateX(-50%)"},[`&-placement-bottomLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:r}},[`&-placement-bottomRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:r}},[`&${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomLeft,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomLeft,\n          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottom,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottom,\n          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomRight,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:J},[`&${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topLeft,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topLeft,\n          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-top,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-top,\n          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topRight,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topRight`]:{animationName:q},[`&${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomLeft,\n          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottom,\n          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:Q},[`&${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topLeft,\n          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-top,\n          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topRight`]:{animationName:Z}})},{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:o,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul,li":{listStyle:"none"},ul:{marginInline:"0.3em"}},[`${t}, ${t}-menu-submenu`]:{[n]:f(f({padding:d,listStyleType:"none",backgroundColor:b,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},h(e)),{[`${n}-item-group-title`]:{padding:`${p}px ${g}px`,color:e.colorTextDescription,transition:`all ${u}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center",borderRadius:e.borderRadiusSM},[`${n}-item-icon`]:{minWidth:c,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${u}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:f(f({clear:"both",margin:0,padding:`${p}px ${g}px`,color:e.colorText,fontWeight:"normal",fontSize:c,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${u}`,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},h(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:m,cursor:"not-allowed","&:hover":{color:m,backgroundColor:b,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:g+e.fontSizeSM},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:m,backgroundColor:b,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[ee(e,"slide-up"),ee(e,"slide-down"),$e(e,"move-up"),$e(e,"move-down"),pe(e,"zoom-big")]]},Re=b("Dropdown",((e,t)=>{let{rootPrefixCls:n}=t;const{marginXXS:o,sizePopupArrow:a,controlHeight:r,fontSize:i,lineHeight:l,paddingXXS:s,componentCls:u,borderRadiusOuter:p,borderRadiusLG:c}=e,d=(r-i*l)/2,{dropdownArrowOffset:m}=Y({sizePopupArrow:a,contentRadius:c,borderRadiusOuter:p}),v=y(e,{menuCls:`${u}-menu`,rootPrefixCls:n,dropdownArrowDistance:a/2+o,dropdownArrowOffset:m,dropdownPaddingVertical:d,dropdownEdgeChildPadding:s});return[Ie(v),ke(v),Pe(v)]}),(e=>({zIndexPopup:e.zIndexPopupBase+50})));var Ae=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const Le=O.Group,De=t({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:w(f(f({},xe()),{type:Se.type,size:String,htmlType:Se.htmlType,href:String,disabled:m(),prefixCls:String,icon:n.any,title:String,loading:Se.loading,onClick:g()}),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:Object,setup(e,t){let{slots:n,attrs:o,emit:a}=t;const u=e=>{a("update:visible",e),a("visibleChange",e),a("update:open",e),a("openChange",e)},{prefixCls:p,direction:c,getPopupContainer:d}=C("dropdown",e),m=r((()=>`${p.value}-button`)),[v,g]=Re(p);return()=>{var t,a;const r=f(f({},e),o),{type:p="default",disabled:b,danger:y,loading:$,htmlType:h,class:w="",overlay:C=(null===(t=n.overlay)||void 0===t?void 0:t.call(n)),trigger:_,align:x,open:S,visible:k,onVisibleChange:P,placement:I=("rtl"===c.value?"bottomLeft":"bottomRight"),href:R,title:A,icon:L=(null===(a=n.icon)||void 0===a?void 0:a.call(n))||i(te,null,null),mouseEnterDelay:D,mouseLeaveDelay:M,overlayClassName:N,overlayStyle:j,destroyPopupOnHide:E,onClick:T,"onUpdate:open":z}=r,B=Ae(r,["type","disabled","danger","loading","htmlType","class","overlay","trigger","align","open","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:open"]),F={align:x,disabled:b,trigger:b?[]:_,placement:I,getPopupContainer:null==d?void 0:d.value,onOpenChange:u,mouseEnterDelay:D,mouseLeaveDelay:M,open:null!=S?S:k,overlayClassName:N,overlayStyle:j,destroyPopupOnHide:E},K=i(O,{danger:y,type:p,disabled:b,loading:$,onClick:T,htmlType:h,href:R,title:A},{default:n.default}),H=i(O,{danger:y,type:p,icon:L},null);return v(i(Le,l(l({},B),{},{class:s(m.value,w,g.value)}),{default:()=>[n.leftButton?n.leftButton({button:K}):K,i(Be,F,{default:()=>[n.rightButton?n.rightButton({button:H}):H],overlay:()=>C})]}))}}});const Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){je(e,t,n[t])}))}return e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=function(e,t){var n=Ne({},e,t.attrs);return i(_,Ne({},n,{icon:Me}),null)};Ee.displayName="RightOutlined",Ee.inheritAttrs=!1;const Te=Ee,ze=t({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:w(xe(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:Object,setup(e,t){let{slots:n,attrs:o,emit:a}=t;const{prefixCls:l,rootPrefixCls:u,direction:p,getPopupContainer:c}=C("dropdown",e),[d,m]=Re(l),v=r((()=>{const{placement:t="",transitionName:n}=e;return void 0!==n?n:t.includes("top")?`${u.value}-slide-down`:`${u.value}-slide-up`}));ne({prefixCls:r((()=>`${l.value}-menu`)),expandIcon:r((()=>i("span",{class:`${l.value}-menu-submenu-arrow`},[i(Te,{class:`${l.value}-menu-submenu-arrow-icon`},null)]))),mode:r((()=>"vertical")),selectable:r((()=>!1)),onClick:()=>{},validator:e=>{x()}});const g=()=>{var t,o,a;const r=e.overlay||(null===(t=n.overlay)||void 0===t?void 0:t.call(n)),s=Array.isArray(r)?r[0]:r;if(!s)return null;const u=s.props||{};S(!u.mode||"vertical"===u.mode,"Dropdown",`mode="${u.mode}" is not supported for Dropdown's Menu.`);const{selectable:p=!1,expandIcon:c=(null===(a=null===(o=s.children)||void 0===o?void 0:o.expandIcon)||void 0===a?void 0:a.call(o))}=u,d=void 0!==c&&k(c)?c:i("span",{class:`${l.value}-menu-submenu-arrow`},[i(Te,{class:`${l.value}-menu-submenu-arrow-icon`},null)]);return k(s)?ue(s,{mode:"vertical",selectable:p,expandIcon:()=>d}):s},b=r((()=>{const t=e.placement;if(!t)return"rtl"===p.value?"bottomRight":"bottomLeft";if(t.includes("Center")){const e=t.slice(0,t.indexOf("Center"));return S(!t.includes("Center"),"Dropdown",`You are using '${t}' placement in Dropdown, which is deprecated. Try to use '${e}' instead.`),e}return t})),y=r((()=>"boolean"==typeof e.visible?e.visible:e.open)),$=e=>{a("update:visible",e),a("visibleChange",e),a("update:open",e),a("openChange",e)};return()=>{var t,a;const{arrow:r,trigger:u,disabled:h,overlayClassName:w}=e,C=null===(t=n.default)||void 0===t?void 0:t.call(n)[0],O=ue(C,f({class:s(null===(a=null==C?void 0:C.props)||void 0===a?void 0:a.class,{[`${l.value}-rtl`]:"rtl"===p.value},`${l.value}-trigger`)},h?{disabled:h}:{})),_=s(w,m.value,{[`${l.value}-rtl`]:"rtl"===p.value}),x=h?[]:u;let S;x&&x.includes("contextmenu")&&(S=!0);const k=oe({arrowPointAtCenter:"object"==typeof r&&r.pointAtCenter,autoAdjustOverflow:!0}),P=ce(f(f(f({},e),o),{visible:y.value,builtinPlacements:k,overlayClassName:_,arrow:!!r,alignPoint:S,prefixCls:l.value,getPopupContainer:null==c?void 0:c.value,transitionName:v.value,trigger:x,onVisibleChange:$,placement:b.value}),["overlay","onUpdate:visible"]);return d(i(_e,P,{default:()=>[O],overlay:g}))}}});ze.Button=De;const Be=ze;Be.Button=De,Be.install=function(e){return e.component(Be.name,Be),e.component(De.name,De),e};const Fe=""+new URL("../logo.svg",import.meta.url).href,Ke=N(t({__name:"SystemLogo",setup(t){const n=o("app-logo"),a=e(),{$t:r}=P();function i(){a({name:"DataManage"})}return(e,t)=>(I(),R("section",{class:L(n.value)},[A("div",{class:L(`${n.value}__click-area`),onClick:i},[A("img",{class:L(`${n.value}__logo`),src:Fe,alt:"system_logo"},null,2),A("div",{class:L(`${n.value}__title`)},[A("span",null,D(M(r)("fields.title")),1)],2)],2)],2))}}),[["__scopeId","data-v-b3dc1c8a"]]),He=["src"],Xe=["title"],Ue=N(t({__name:"UserInfo",setup(t){const n=o("header-user-info"),a=e(),r=o({username:"admin"});const l=[{action:()=>{a({name:"PersonalCenter"})},title:"个人中心",icon:""},{action:()=>async function(){a({name:"Login"})}(),title:"退出登录",icon:""}];function s({key:e}){l[e].action()}return(e,t)=>{const o=re,a=ae,u=Be;return I(),R("div",{class:L(`${n.value}`)},[r.value.username?(I(),j(u,{key:0,placement:"bottomRight","overlay-class-name":`${n.value}__dropdown`},{overlay:E((()=>[i(a,{onClick:s},{default:E((()=>[(I(),R(p,null,T(l,((e,t)=>i(o,{key:t,class:L(`${n.value}__li`)},{default:E((()=>[B(D(e.title),1)])),_:2},1032,["class"]))),64))])),_:1})])),default:E((()=>[A("div",{class:L(`${n.value}__click-area`)},[A("img",{src:M(V)("avatar.svg"),alt:""},null,8,He),A("span",{title:r.value.username,class:L([`${n.value}__username`])},D(r.value.username),11,Xe)],2)])),_:1},8,["overlay-class-name"])):z("",!0)],2)}}}),[["__scopeId","data-v-fff762c0"]]);const Ve=N(t({name:"ItemContent",props:{item:{type:Object,default:null}},setup:e=>({prefixCls:o("menu-item-content"),icon:r((()=>{var t;return null==(t=e.item)?void 0:t.icon})),title:r((()=>{var t;return null==(t=e.item)?void 0:t.title}))})}),[["render",function(e,t,n,o,a,r){return I(),R("span",{class:L(`${e.prefixCls}`)},D(e.$t(e.title)),3)}],["__scopeId","data-v-8283e12e"]]),We=N(t({__name:"NavMenu",setup(t){const n=o("menu"),a=e(),{reload:l}=H(),s=F(),u=K.getRoutes(),c=/^\/\w+(?=\/)/,d=u.filter((e=>!c.test(e.path)&&e.meta.isMenu)),m=r({get:()=>{if("Error"===K.currentRoute.value.name)return[];const e=c.exec(K.currentRoute.value.path);if(!e)return[];const t=d.find((t=>t.path===e[0]));return t?t.meta.hideChildrenInMenu?[t.name]:K.currentRoute.value.meta.isMenu?[K.currentRoute.value.name]:[K.currentRoute.value.matched[0].name]:[K.currentRoute.value.name]},set:()=>{}});async function v(e){const t=s.matched.find((t=>t.name===e.key));t&&[t.redirect,t.path].includes(s.path)&&l(),a({name:e.key})}return(e,t)=>{const o=re,a=ie,r=ae;return I(),R("section",{class:L(n.value)},[i(r,{selectedKeys:m.value,"onUpdate:selectedKeys":t[0]||(t[0]=e=>m.value=e),mode:"horizontal",onClick:v},{default:E((()=>[(I(!0),R(p,null,T(M(d),(e=>(I(),R(p,null,[e.meta.hideChildrenInMenu?(I(),j(o,{key:e.name},{default:E((()=>[i(Ve,{item:e.meta},null,8,["item"])])),_:2},1024)):(I(),j(a,{key:e.name},{title:E((()=>[i(Ve,{item:e.meta},null,8,["item"])])),default:E((()=>[(I(!0),R(p,null,T(e.children,(e=>{var t;return I(),R(p,null,[(null==(t=e.meta)?void 0:t.isMenu)?(I(),j(o,{key:e.name},{default:E((()=>[i(Ve,{item:e.meta},null,8,["item"])])),_:2},1024)):z("",!0)],64)})),256))])),_:2},1024))],64)))),256))])),_:1},8,["selectedKeys"])],2)}}}),[["__scopeId","data-v-be724aa6"]]);const Ye=N(t({name:"CompContent",setup(){const e=o("basic-layout"),t=F();return{prefixCls:e,isFullContainer:r((()=>{var e;return null==(e=t.meta)?void 0:e.isFullContainer})),isFullContent:r((()=>{var e;return null==(e=t.meta)?void 0:e.isFullContent}))}}}),[["render",function(e,t,n,o,a,r){const l=X("router-view");return I(),R("main",{class:L([`${e.prefixCls}__container`,e.isFullContainer&&`${e.prefixCls}__container-full`])},[A("div",{class:L([`${e.prefixCls}__content`,e.isFullContent&&`${e.prefixCls}__content-full`])},[i(l,null,{default:E((({Component:e})=>[(I(),j(U(e)))])),_:1})],2)],2)}],["__scopeId","data-v-452d4f79"]]),Ge=N(t({__name:"Index",setup(e){const t=o("basic-layout");return(e,n)=>{const o=X("comp-scrollbar");return I(),R("div",{class:L(t.value)},[A("header",{class:L(`${t.value}__header`)},[i(Ke),i(We),i(Ue)],2),i(o,null,{default:E((()=>[i(Ye)])),_:1})],2)}}}),[["__scopeId","data-v-16aca067"]]);export{Ge as default};