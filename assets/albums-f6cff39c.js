import{g as i,o as s,c as m,w as r,b as u,k as e,t as p,f as h,i as _,F as y,j as v,u as x,A,U as k,a7 as L,a8 as Y,R as $,a6 as w,e as c,h as B}from"./app-deede6ee.js";import{o as C}from"./index-8f8e9689.js";import{_ as P}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-b055688e.js";const F=["title"],E=["src","alt","on-error"],I=i({__name:"YunAlbum",props:{album:null},setup(t){return(l,n)=>{const o=h;return s(),m(o,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[u("figure",{title:t.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":e(C)},null,40,E),u("figcaption",null," 「"+p(t.album.caption)+"」 ",1)],8,F)]),_:1},8,["to"])}}}),N={class:"yun-album-list"},S=i({__name:"YunAlbumList",props:{albums:null},setup(t){return(l,n)=>{const o=I;return s(),_("div",N,[(s(!0),_(y,null,v(t.albums,a=>(s(),m(o,{key:a.url,album:a},null,8,["album"]))),128))])}}});const V={text:"center",class:"yun-text-light",p:"2"},R=i({__name:"albums",setup(t){const{t:l}=x(),n=A(),o=k(n);L([Y({"@type":"CollectionPage"})]);const a=$(()=>n.value.albums||[]);return(j,z)=>{const b=P,d=S,f=B("router-view"),g=w;return s(),m(g,null,{"main-header":r(()=>[c(b,{title:e(o)||e(l)("title.album"),icon:e(n).icon||"i-ri-gallery-line",color:e(n).color},null,8,["title","icon","color"])]),"main-content":r(()=>[u("div",V,p(e(l)("counter.albums",e(a).length)),1),c(d,{albums:e(a)},null,8,["albums"]),c(f)]),_:1})}}});export{R as default};
