(window.webpackJsonp=window.webpackJsonp||[]).push([[60,42],{1535:function(t,e,r){var content=r(1541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("1aad47fc",content,!0,{sourceMap:!1})},1536:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},o=(r(1540),r(121)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1540:function(t,e,r){"use strict";r(1535)},1541:function(t,e,r){var n=r(41)(!1);n.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1704:function(t,e,r){var content=r(1762);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("4ecaa200",content,!0,{sourceMap:!1})},1761:function(t,e,r){"use strict";r(1704)},1762:function(t,e,r){var n=r(41)(!1);n.push([t.i,".overlay[data-v-19041f35]{position:relative}.overlay2[data-v-19041f35]{position:absolute;top:0;left:0}.filter-green[data-v-19041f35]{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%);-webkit-animation:blinkGreen-data-v-19041f35 1s infinite;animation:blinkGreen-data-v-19041f35 1s infinite}.filter-red[data-v-19041f35]{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%);-webkit-animation:blinkRed-data-v-19041f35 1s infinite;animation:blinkRed-data-v-19041f35 1s infinite}@-webkit-keyframes blinkRed-data-v-19041f35{0%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@keyframes blinkRed-data-v-19041f35{0%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@-webkit-keyframes blinkGreen-data-v-19041f35{0%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}@keyframes blinkGreen-data-v-19041f35{0%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}.switch[data-v-19041f35]{display:flex;align-items:center}.v-card__text[data-v-19041f35],.v-card__title[data-v-19041f35]{word-break:normal}.logout[data-v-19041f35]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;width:300px}.hr[data-v-19041f35]{margin:0 20px;border-top:1px solid #bdc7c7}.btn-div[data-v-19041f35]{display:flex;justify-content:flex-end}.logout-btn[data-v-19041f35]{width:100px;margin-right:10px;margin-bottom:10px}.layer2[data-v-19041f35]{position:absolute;width:100%;height:100%;background:#000;opacity:.6;top:0;left:0}@media (max-width:1264px){.switch[data-v-19041f35]{align-items:center}}",""]),t.exports=n},1818:function(t,e,r){"use strict";r.r(e);var n,o=r(35),l=(r(123),r(1536)),c=r(1802),d={middleware:["isIpah"],layout:"status",methods:{trigger:function(t,e,r){this.state2=!1,this.layerDrawer=!0,this.activeDevice=t,this.activeSwitch=r,this.stateDevice=1==e?"turn off":"turn on",console.log(this.activeDevice),console.log(this.activeSwitch)},yes:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.layerDrawer=!1,this[e]=!this[e];case 2:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)}),cancel:function(){this.layerDrawer=!1},track:function(){var t=this;window.onclick=function(e){var r=document.getElementById("layerDrawer");e.target==r&&(t.layerDrawer=!1)}}},components:{PageTitle:l.default,Ipah1Status:c.default},data:function(){return{activeDevice:"",stateDevice:"",activeSwitch:"",layerDrawer:!1,state2:!0,rightDrawer:!1,switchPump:!1,switchDosingPump:!1,switchSV1:!1,switchSV2:!1,switchSV3:!1,switchSV4:!1,switchSV5:!1,switchSV6:!1,substance:"(substance)",itemsSubstance:["water","fertilizer"],block:"(SPH)",itemsBlock:["SPH 1","SPH 2","All SPH"]}}},v=(r(1761),r(121)),f=r(154),h=r.n(f),m=r(489),w=r(465),x=r(122),y=r(1810),_=r(1811),S=r(141),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("PageTitle",{attrs:{title:"STATUS"}}),t._v(" "),r("v-card",{staticClass:"elevation-10"},[r("v-card-title",[t._v("\n      OPERATION\n    ")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"col-md-9 pb-0",attrs:{col:"12"}},[r("Ipah1Status",{attrs:{sv1:"red",sv2:"green",classSV1:"filter-green",classSV2:"filter-red",classSV3:"filter-red",classSV4:"filter-green",classSV5:"filter-red",classSV6:"filter-red",classPump:"filter-green",classDosingPump:"filter-red",ph:"7",waterLvl:"30",EC:"2"}})],1),t._v(" "),r("v-col",{staticClass:"col-md-3 pr-md-10 pt-0",staticStyle:{display:"flex","justify-contents":"center","align-items":"center"},attrs:{cols:"12"}},[r("v-card",{staticClass:"elevation-18 rounded-lg px-5 "},[r("v-card-title",{staticStyle:{"font-size":"1.3rem"}},[t._v("\n            MANUAL FERTIGATION CONTROL\n          ")]),t._v(" "),r("v-row",[r("v-col",[r("v-card-title",[t._v("\n                Nutrient Preparation\n              ")]),t._v(" "),r("div",[r("h4",[t._v("\n                  Nutrient preparation is done twice a day. It is done on\n                  7.00am and 1.00pm on a daily basis. Please click button\n                  below to start nutrient preparation manually.\n                ")])]),t._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("v-btn",{staticClass:"mt-4 mb-4"},[t._v("Start Preparation")])],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"mt-5"})],1)],1)],1)],1),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("div",{staticClass:"layer2",attrs:{id:"layerDrawer"}}):t._e()]),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("v-card",{staticClass:"logout elevation-12"},[r("v-card-title",[t._v("\n        Action\n      ")]),t._v(" "),r("hr",{staticClass:"hr"}),t._v(" "),r("v-card-subtitle",[t._v("\n        Are you sure you want to "+t._s(t.stateDevice)+" the "+t._s(t.activeDevice)+"?\n      ")]),t._v(" "),r("div",{staticClass:"btn-div"},[r("v-btn",{staticClass:"success logout-btn",on:{click:function(e){return t.yes(t.activeSwitch)}}},[t._v("Yes")]),t._v(" "),r("v-btn",{staticClass:"error logout-btn",on:{click:t.cancel}},[t._v("Cancel")])],1)],1):t._e()],1)],1)}),[],!1,null,"19041f35",null);e.default=component.exports;h()(component,{PageTitle:r(1536).default}),h()(component,{VBtn:m.a,VCard:w.a,VCardSubtitle:x.a,VCardTitle:x.b,VCol:y.a,VRow:_.a,VScrollYTransition:S.e})}}]);