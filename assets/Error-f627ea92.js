import{u as a}from"./useSwitchPage-ce4d25d5.js";import{a as s,r as e,_ as n,f as t,o as r,m as l,i,n as o,k as m,w as c,l as d,z as u,A as g}from"./index-d8ad0e00.js";import{g as x}from"./util-a4a90075.js";const f=s({name:"ErrorPage",setup(){const s=e("error"),n=a();function t(a,s){return parseInt(`${Math.random()*(s-a+1)+a}`,10)}const r=e(t(0,10));return{prefixCls:s,getImageUrl:x,backHome:()=>{n({name:"DataManage"})},imgIndex:r,setImgIndex:function(){r.value=t(0,10)}}}}),p=a=>(u("data-v-8b9f50e9"),a=a(),g(),a),I=["src","data-img-index"],k=p((()=>i("span",null,"抱歉，您访问的页面不存在！",-1))),_=p((()=>i("br",null,null,-1))),b=p((()=>i("span",null,"访问链接可能错误，或者该页面已被删除。",-1)));const v=n(f,[["render",function(a,s,e,n,u,g){const x=t("a-button");return r(),l("section",{class:o([a.prefixCls])},[i("div",null,[i("img",{src:a.getImageUrl(`404/404_${a.imgIndex}.svg`),"data-img-index":a.imgIndex,alt:"404",onClick:s[0]||(s[0]=(...s)=>a.setImgIndex&&a.setImgIndex(...s))},null,8,I),i("div",{class:o(`${a.prefixCls}__msg`)},[k,_,b,m(x,{type:"link",onClick:a.backHome},{default:c((()=>[d("前往xx模块")])),_:1},8,["onClick"])],2)])],2)}],["__scopeId","data-v-8b9f50e9"]]);export{v as default};
