(function(e){function t(t){for(var n,l,o=t[0],a=t[1],b=t[2],i=0,s=[];i<o.length;i++)l=o[i],Object.prototype.hasOwnProperty.call(u,l)&&u[l]&&s.push(u[l][0]),u[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(s.length)s.shift()();return r.push.apply(r,b||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var o=c[l];0!==u[o]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},l={app:0},u={app:0},r=[];function o(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae8eb":"365ee58c","chunk-2d0d3ae4":"8fa22a14","chunk-689874b0":"b757bba0","chunk-6d179559":"a9b94f4f"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.e=function(e){var t=[],c={"chunk-689874b0":1,"chunk-6d179559":1};l[e]?t.push(l[e]):0!==l[e]&&c[e]&&t.push(l[e]=new Promise((function(t,c){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0ae8eb":"31d6cfe0","chunk-2d0d3ae4":"31d6cfe0","chunk-689874b0":"d88c6fc2","chunk-6d179559":"eff035e3"}[e]+".css",u=a.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var b=r[o],i=b.getAttribute("data-href")||b.getAttribute("href");if("stylesheet"===b.rel&&(i===n||i===u))return t()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){b=s[o],i=b.getAttribute("data-href");if(i===n||i===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete l[e],d.parentNode.removeChild(d),c(r)},d.href=u;var O=document.getElementsByTagName("head")[0];O.appendChild(d)})).then((function(){l[e]=0})));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,c){n=u[e]=[t,c]}));t.push(n[2]=r);var b,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=o(e);var s=new Error;b=function(t){i.onerror=i.onload=null,clearTimeout(d);var c=u[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",s.name="ChunkLoadError",s.type=n,s.request=l,c[1](s)}u[e]=void 0}};var d=setTimeout((function(){b({type:"timeout",target:i})}),12e4);i.onerror=i.onload=b,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var b=window["webpackJsonp"]=window["webpackJsonp"]||[],i=b.push.bind(b);b.push=t,b=b.slice();for(var s=0;s<b.length;s++)t(b[s]);var d=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"1bc3":function(e,t,c){},"1c22":function(e,t,c){"use strict";c("4701")},4701:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),l={class:"main_app"},u={class:"nav_contents"},r=Object(n["e"])("h2",null,"メニュー",-1),o=Object(n["f"])("見積もり"),a=Object(n["f"])(" | "),b=Object(n["f"])("履歴検索"),i=Object(n["f"])(" | "),s=Object(n["f"])("修理料金検索"),d=Object(n["f"])(" | "),O=Object(n["f"])("希少修理計算"),j=Object(n["f"])(" | "),p=Object(n["f"])("引き継ぎ作成"),f={class:"contents"};function h(e,t,c,h,v,m){var _=Object(n["v"])("router-link"),y=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])("div",l,[Object(n["e"])("button",{class:"menu_button",onClick:t[0]||(t[0]=function(){return h.push_menu_button&&h.push_menu_button.apply(h,arguments)})},"="),Object(n["e"])("div",{id:"nav",class:"nav",style:Object(n["m"])({display:h.nav_display})},[Object(n["e"])("div",u,[r,Object(n["g"])(_,{to:"/"},{default:Object(n["C"])((function(){return[o]})),_:1}),a,Object(n["g"])(_,{to:"/sr"},{default:Object(n["C"])((function(){return[b]})),_:1}),i,Object(n["g"])(_,{to:"/sp"},{default:Object(n["C"])((function(){return[s]})),_:1}),d,Object(n["g"])(_,{to:"/price_cur"},{default:Object(n["C"])((function(){return[O]})),_:1}),j,Object(n["g"])(_,{to:"/take_over"},{default:Object(n["C"])((function(){return[p]})),_:1})])],4),Object(n["e"])("div",f,[Object(n["g"])(y)])])}var v={setup:function(){var e=Object(n["t"])("none"),t=function(){"none"==e.value?(e.value="block",console.log(e.value)):(e.value="none",console.log(e.value))};return{nav_display:e,push_menu_button:t}}},m=(c("1c22"),c("6b0d")),_=c.n(m);const y=_()(v,[["render",h]]);var g=y,k=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),x=(c("a9e3"),c("b0c0"),{class:"app"}),w={class:"edit_main"},C={class:"edit_contents"},q=Object(n["e"])("h2",{class:"base_title"},"基礎情報 >>",-1),P=Object(n["f"])("店舗： "),N=Object(n["f"])("機種名："),S=Object(n["e"])("h2",{class:"individual_title"},"個別情報",-1),A={class:"type_form"},D=Object(n["f"])("種別： "),E={class:"product_form"},U=Object(n["f"])("名称： "),T={class:"price_form"},V=Object(n["f"])("金額(税抜)： "),L={class:"other_form"},M=Object(n["e"])("h3",null,"↓備考↓",-1),z={class:"edit_sub"},B={class:"edit_sub_contents"},H=Object(n["e"])("h2",null,"↓追加済みのアイテム↓",-1),J=Object(n["e"])("tr",null,[Object(n["e"])("th",null,"No."),Object(n["e"])("th",null,"種別"),Object(n["e"])("th",null,"名称"),Object(n["e"])("th",null,"金額（税抜）"),Object(n["e"])("th",null,"消費税"),Object(n["e"])("th",null,"備考")],-1),F=["onUpdate:modelValue"],I=["onClick"],K=Object(n["e"])("div",{class:"title"},[Object(n["e"])("h1",null,"お見積り")],-1),R={class:"header"},$={class:"shop_name"},G={class:"preview_table",border:"1"},Q=Object(n["e"])("tr",null,[Object(n["e"])("th",{class:"th_No"},"No."),Object(n["e"])("th",{class:"th_type"},"サービスタイプ"),Object(n["e"])("th",{class:"th_name"},"名称"),Object(n["e"])("th",{class:"th_price"},"料金"),Object(n["e"])("th",{class:"th_tax"},"消費税"),Object(n["e"])("th",{class:"th_other"},"備考")],-1),W={class:"total_product"},X={class:"total_price"};function Y(e,t,c,l,u,r){return Object(n["q"])(),Object(n["d"])("div",x,[Object(n["e"])("div",{class:"edit",style:Object(n["m"])({display:l.edit_style})},[Object(n["e"])("div",w,[Object(n["e"])("button",{class:"edit_close_button",onClick:t[0]||(t[0]=function(){return l.edit_close&&l.edit_close.apply(l,arguments)})},"×"),Object(n["e"])("div",C,[q,Object(n["e"])("h3",null,[P,Object(n["D"])(Object(n["e"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.shop=e})},[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.shop_list,(function(e){return Object(n["q"])(),Object(n["d"])("option",{key:e.id},Object(n["x"])(e.label),1)})),128))],512),[[n["z"],l.shop]])]),Object(n["e"])("h3",null,[N,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.model_name=e})},null,512),[[n["A"],l.model_name]])]),S,Object(n["e"])("div",A,[Object(n["e"])("h3",null,[D,Object(n["D"])(Object(n["e"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.product_type=e})},[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.type_list,(function(e){return Object(n["q"])(),Object(n["d"])("option",{key:e.id},Object(n["x"])(e.label),1)})),128))],512),[[n["z"],l.product_type]])])]),Object(n["e"])("div",E,[Object(n["e"])("h3",null,[U,Object(n["D"])(Object(n["e"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.product_name=e})},[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.product_list,(function(e){return Object(n["q"])(),Object(n["d"])("option",{key:e.id},Object(n["x"])(e.label),1)})),128))],512),[[n["z"],l.product_name]])])]),Object(n["e"])("div",T,[Object(n["e"])("h3",null,[V,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.price=e})},null,512),[[n["A"],l.price]])]),Object(n["e"])("h3",null,"消費税："+Object(n["x"])(Number(l.price)/10),1)]),Object(n["e"])("div",L,[M,Object(n["D"])(Object(n["e"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.other=e}),name:"product_other",id:"product_other",cols:"30",rows:"10"},null,512),[[n["A"],l.other]])]),Object(n["e"])("button",{onClick:t[7]||(t[7]=function(){return l.push&&l.push.apply(l,arguments)})},"追加"),Object(n["e"])("button",{onClick:t[8]||(t[8]=function(){return l.create&&l.create.apply(l,arguments)})},"見積書作成")])]),Object(n["e"])("div",z,[Object(n["e"])("div",B,[H,Object(n["e"])("table",null,[J,(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.item_lists,(function(e,t){return Object(n["q"])(),Object(n["d"])("tr",{key:e.id},[Object(n["e"])("td",null,Object(n["x"])(e.number),1),Object(n["e"])("td",null,Object(n["x"])(e.type),1),Object(n["e"])("td",null,Object(n["x"])(e.name),1),Object(n["e"])("td",null,Object(n["x"])(e.price)+"円",1),Object(n["e"])("td",null,Object(n["x"])(e.tax)+"円",1),Object(n["e"])("td",null,[Object(n["D"])(Object(n["e"])("textarea",{"onUpdate:modelValue":function(t){return e.other=t}},null,8,F),[[n["A"],e.other]])]),Object(n["e"])("td",null,[Object(n["e"])("button",{onClick:function(e){return l.delete_list(t)}},"削除",8,I)])])})),128))])])])],4),Object(n["e"])("div",{class:"preview",style:Object(n["m"])({display:l.preview_style})},[K,Object(n["e"])("div",R,[Object(n["e"])("h3",$,Object(n["x"])(l.shop),1)]),Object(n["e"])("h2",null,"機種名："+Object(n["x"])(l.model_name),1),Object(n["e"])("table",G,[Q,(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.item_lists,(function(e){return Object(n["q"])(),Object(n["d"])("tr",{key:e.id},[Object(n["e"])("td",null,Object(n["x"])(e.number),1),Object(n["e"])("td",null,Object(n["x"])(e.type),1),Object(n["e"])("td",null,Object(n["x"])(e.name),1),Object(n["e"])("td",null,Object(n["x"])(e.price)+"円",1),Object(n["e"])("td",null,Object(n["x"])(e.tax)+"円",1),Object(n["e"])("td",null,Object(n["x"])(e.other),1)])})),128))]),Object(n["e"])("h4",W,"点数："+Object(n["x"])(l.item_lists.length),1),Object(n["e"])("h4",X,"総額："+Object(n["x"])(l.total_amount)+"円",1)],4)])}c("a434");var Z={name:"Home",setup:function(){var e=this,t=Object(n["t"])(1),c=Object(n["t"])(),l=Object(n["t"])(),u=Object(n["t"])(),r=Object(n["t"])(),o=Object(n["t"])(),a=Object(n["t"])(),b=Object(n["t"])(),i=Object(n["t"])([]),s=Object(n["t"])(),d=Object(n["t"])(),O=Object(n["t"])(),j=Object(n["t"])(0),p=Object(n["t"])("block"),f=Object(n["t"])("none"),h=Object(n["t"])([{type:"repair",label:"修理"},{type:"accessory",label:"アクセサリー"},{type:"other",label:"その他サービス"},{type:"discount",label:"値引き"}]),v=Object(n["t"])([{product:"front",label:"画面交換"},{product:"battery",label:"バッテリー交換"},{product:"backPanel",label:"バックパネル交換"},{product:"chargePort",label:"充電コネクター交換"},{product:"other_repair",label:"その他修理"}]),m=Object(n["t"])([{shop:"sma_kichi",label:"スマホステーション吉祥寺店"},{shop:"sma_sancha",label:"スマホステーション三軒茶屋店"}]),_=Object(n["t"])([]),y=Object(n["t"])([]),g=function(){for(var e=0;e<i.value.length;e++)j.value=Number(j.value)+Number(i.value[e].price)+Number(i.value[e].tax)},k=function(){console.log(d.value),l.value=t.value,u.value=s.value,r.value=d.value,a.value=Number(o.value)/10,i.value.push({number:l.value,type:u.value,name:r.value,price:o.value,tax:a.value,other:b.value}),console.log(i.value),u.value="",r.value="",t.value++,console.log(i.value[0].price)},x=function(){g()},w=function(){"none"==p.value?(p.value="block",f.value="none"):(p.value="none",f.value="block")},C=function(e){i.value.splice(e,1),q(e),console.log(i.value),console.log(i.value)},q=function(t){for(var c=0;c<i.value.length;c++)e.$delete(i.value[t],l),i.value[t].number=c+1};return{shop:O,model_name:c,number:l,type:u,product:r,price:o,tax:a,other:b,item_lists:i,product_type:s,product_name:d,type_list:h,product_list:v,shop_list:m,service_list:_,accessory_list:y,total_amount:j,edit_style:p,preview_style:f,edit_close:w,delete_list:C,reset_number:q,sum_price:g,push:k,create:x}}};c("c988");const ee=_()(Z,[["render",Y]]);var te=ee,ce=[{path:"/",name:"Home",component:te},{path:"/sr",name:"SR",component:function(){return c.e("chunk-689874b0").then(c.bind(null,"a324"))}},{path:"/sp",name:"SP",component:function(){return c.e("chunk-2d0d3ae4").then(c.bind(null,"5e97"))}},{path:"/price_cur",name:"PC",component:function(){return c.e("chunk-2d0ae8eb").then(c.bind(null,"0b25"))}},{path:"/take_over",name:"Take_over",component:function(){return c.e("chunk-6d179559").then(c.bind(null,"8aa9"))}}],ne=Object(k["a"])({history:Object(k["b"])(),routes:ce}),le=ne;Object(n["c"])(g).use(le).mount("#app")},c988:function(e,t,c){"use strict";c("1bc3")}});
//# sourceMappingURL=app.f9bb5e90.js.map