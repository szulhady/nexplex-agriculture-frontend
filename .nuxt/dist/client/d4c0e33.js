(window.webpackJsonp=window.webpackJsonp||[]).push([[67,41,43,45],{1535:function(t,e,r){var content=r(1541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("1aad47fc",content,!0,{sourceMap:!1})},1536:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},l=(r(1540),r(121)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1540:function(t,e,r){"use strict";r(1535)},1541:function(t,e,r){var n=r(41)(!1);n.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1585:function(t,e,r){"use strict";r.r(e);var n=r(35),l=r(284),o=(r(123),r(32),r(59),r(7)),m=r.n(o),c={data:function(){return{today:m()().format("YYYY-MM-DD"),availableDates:[],disabled:[],days:[],selectedDate:[],date:new Date,timezone:"",range:{start:new Date(2020,8,19),end:new Date(2020,8,20)},start:"",end:""}},computed:{},methods:{getScheduleIpah1:function(){var t=this;this.$axios.$get("http://localhost:5000/api/schedule/ipah1").then((function(e){e.forEach((function(i){return t.disabled.push(m()(i).format("YYYY-MM-DD"))}))})).catch((function(t){console.log(t)}))},getDatesBetweenDates:function(t,e){var r=[],n=new Date(t);for(console.log(e);n<e;)r=[].concat(Object(l.a)(r),[m()(new Date(n)).format("YYYY-MM-DD")]),n.setDate(n.getDate()+1);return r=[].concat(Object(l.a)(r),[m()(e).format("YYYY-MM-DD")])}},watch:{range:function(t){this.start=m()(this.range.start).format("YYYY-MM-DD"),this.end=m()(this.range.end).format("YYYY-MM-DD");var e=this.getDatesBetweenDates(this.range.start,this.range.end);console.log(e),console.log(this.start,this.end)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getScheduleIpah1();case 1:case"end":return e.stop()}}),e)})))()}},d=r(121),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("vc-date-picker",{attrs:{"min-date":t.today,"disabled-dates":t.disabled,"is-range":""},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)}),[],!1,null,null,null);e.default=component.exports},1586:function(t,e,r){"use strict";r.r(e);var n=r(1559),l=r.n(n),o=(r(1560),{components:{VueTimepicker:l.a},data:function(){return{time:[],time1:"",yourStringTimeValue1:"",yourStringTimeValue2:"",yourStringTimeValue3:"",yourStringTimeValue4:"",yourStringTimeValue5:"",yourStringTimeValue6:"",yourStringTimeValue7:"",yourStringTimeValue8:"",yourStringTimeValue9:"",yourStringTimeValue10:""}},methods:{},watch:{yourStringTimeValue1:function(t){console.log(t)}}}),m=r(121),c=r(154),d=r.n(c),h=r(1810),v=r(1811),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue1,callback:function(e){t.yourStringTimeValue1=e},expression:"yourStringTimeValue1"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue2,callback:function(e){t.yourStringTimeValue2=e},expression:"yourStringTimeValue2"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue3,callback:function(e){t.yourStringTimeValue3=e},expression:"yourStringTimeValue3"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue4,callback:function(e){t.yourStringTimeValue4=e},expression:"yourStringTimeValue4"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue5,callback:function(e){t.yourStringTimeValue5=e},expression:"yourStringTimeValue5"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue6,callback:function(e){t.yourStringTimeValue6=e},expression:"yourStringTimeValue6"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue7,callback:function(e){t.yourStringTimeValue7=e},expression:"yourStringTimeValue7"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue8,callback:function(e){t.yourStringTimeValue8=e},expression:"yourStringTimeValue8"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue9,callback:function(e){t.yourStringTimeValue9=e},expression:"yourStringTimeValue9"}}),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.yourStringTimeValue10,callback:function(e){t.yourStringTimeValue10=e},expression:"yourStringTimeValue10"}})],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:h.a,VRow:v.a})},1713:function(t,e,r){var content=r(1791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("6335603a",content,!0,{sourceMap:!1})},1790:function(t,e,r){"use strict";r(1713)},1791:function(t,e,r){var n=r(41)(!1);n.push([t.i,".userInput{display:flex;align-items:center;justify-content:center;height:60px}.v-messages__message{font-size:.5rem!important}.v-select .v-select__selections{width:300px!important}.short{width:80px}",""]),t.exports=n},1825:function(t,e,r){"use strict";r.r(e);var n=r(35),l=r(284),o=(r(123),r(32),r(59),r(102),r(125),r(1559)),m=r.n(o),c=(r(1560),r(1536)),d=r(1585),h=r(1586),v=r(7),f=r.n(v),y={middleware:["isKongPo"],layout:"status",components:{PageTitle:c.default,Calendar:d.default,Time:h.default,VueTimepicker:m.a},data:function(){return{rules:[function(t){return!!t||""}],duration1:"",duration2:"",duration3:"",duration4:"",duration5:"",duration6:"",duration7:"",duration8:"",duration9:"",duration10:"",today:f()().format("YYYY-MM-DD"),availableDates:[],disabled:[],days:[],selectedDate:[],date:new Date,timezone:"",range:{start:new Date(2020,8,19),end:new Date(2020,8,20)},start:"",end:"",time:[],time1:"",yourStringTimeValue1:"",yourStringTimeValue2:"",yourStringTimeValue3:"",yourStringTimeValue4:"",yourStringTimeValue5:"",yourStringTimeValue6:"",yourStringTimeValue7:"",yourStringTimeValue8:"",yourStringTimeValue9:"",yourStringTimeValue10:"",allTime:[],allBlock:[],allDuration:[]}},methods:{getScheduleIpah1:function(){var t=this;this.$axios.$get("http://139.59.109.48/api/schedule/kongPo").then((function(e){console.log(e),e.forEach((function(i){return t.disabled.push(f()(i).format("YYYY-MM-DD"))}))})).catch((function(t){console.log(t)}))},sendScheduleIpah1:function(t,time,e){this.$axios.$post("http://139.59.109.48/api/setSchedule/kongPo",{date:t,time:time,duration:e}).then((function(t){console.log(t),window.location.reload()})).catch((function(t){console.log(t)}))},getDatesBetweenDates:function(t,e){for(var r=[],n=new Date(t);n<e;)r=[].concat(Object(l.a)(r),[f()(new Date(n)).format("YYYY-MM-DD")]),n.setDate(n.getDate()+1);return r=[].concat(Object(l.a)(r),[f()(e).format("YYYY-MM-DD")])},sendSchedule:function(){var t=this;this.selectedDate.length<1?alert("Please select valid date"):this.yourStringTimeValue1.includes("mm")||this.yourStringTimeValue1.includes("hh")||!this.yourStringTimeValue1?alert("Please select valid time"):(this.yourStringTimeValue1&&this.allTime.push(this.yourStringTimeValue1),this.yourStringTimeValue2&&this.allTime.push(this.yourStringTimeValue2),this.yourStringTimeValue3&&this.allTime.push(this.yourStringTimeValue3),this.yourStringTimeValue4&&this.allTime.push(this.yourStringTimeValue4),this.yourStringTimeValue5&&this.allTime.push(this.yourStringTimeValue5),this.yourStringTimeValue6&&this.allTime.push(this.yourStringTimeValue6),this.yourStringTimeValue7&&this.allTime.push(this.yourStringTimeValue7),this.yourStringTimeValue8&&this.allTime.push(this.yourStringTimeValue8),this.yourStringTimeValue9&&this.allTime.push(this.yourStringTimeValue9),this.yourStringTimeValue10&&this.allTime.push(this.yourStringTimeValue10),this.duration1&&this.allDuration.push(this.duration1),this.duration2&&this.allDuration.push(this.duration2),this.duration3&&this.allDuration.push(this.duration3),this.duration4&&this.allDuration.push(this.duration4),this.duration5&&this.allDuration.push(this.duration5),this.duration6&&this.allDuration.push(this.duration6),this.duration7&&this.allDuration.push(this.duration7),this.duration8&&this.allDuration.push(this.duration8),this.duration9&&this.allDuration.push(this.duration9),this.duration10&&this.allDuration.push(this.duration10),this.selectedDate.forEach((function(e){t.sendScheduleIpah1(e,t.allTime,t.allDuration)})))}},watch:{range:function(t){this.start=f()(this.range.start).format("YYYY-MM-DD"),this.end=f()(this.range.end).format("YYYY-MM-DD");var e=this.getDatesBetweenDates(this.range.start,this.range.end);this.selectedDate=e}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getScheduleIpah1();case 1:case"end":return e.stop()}}),e)})))()}},T=(r(1790),r(121)),S=r(154),V=r.n(S),x=r(489),D=r(465),_=r(122),k=r(1810),Y=r(1811),w=r(1806),component=Object(T.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("PageTitle",{attrs:{title:"SCHEDULE"}}),t._v(" "),r("v-card",[r("v-card-title",[t._v("\n      Set schedule for fertigation\n    ")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"pl-8 col-lg-3",staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[r("div",[r("h4",[t._v("Select Date")]),t._v(" "),r("h5",[t._v("Can be a day or range of days")]),t._v(" "),r("span",[r("vc-date-picker",{attrs:{"min-date":t.today,"disabled-dates":t.disabled,"is-range":""},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)]),t._v(" "),r("div",[r("v-btn",{staticClass:"mt-5",on:{click:t.sendSchedule}},[t._v("\n            SET SCHEDULE\n          ")])],1)]),t._v(" "),r("v-col",{staticClass:"mx-auto col-lg-9",attrs:{cols:"12"}},[r("v-row",[r("v-col",{staticClass:"ml-10 ml-lg-0"},[r("h4",[t._v("\n              Please fill first option first, then fill other options if\n              needed. Options for 7am and 1pm are not available due to\n              nutrient preparation process ongoing.\n            ")])])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("1)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue1,callback:function(e){t.yourStringTimeValue1=e},expression:"yourStringTimeValue1"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration1,callback:function(e){t.duration1=e},expression:"duration1"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("2)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue2,callback:function(e){t.yourStringTimeValue2=e},expression:"yourStringTimeValue2"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration2,callback:function(e){t.duration2=e},expression:"duration2"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("3)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue3,callback:function(e){t.yourStringTimeValue3=e},expression:"yourStringTimeValue3"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration3,callback:function(e){t.duration3=e},expression:"duration3"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("4)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue4,callback:function(e){t.yourStringTimeValue4=e},expression:"yourStringTimeValue4"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration4,callback:function(e){t.duration4=e},expression:"duration4"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("5)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue5,callback:function(e){t.yourStringTimeValue5=e},expression:"yourStringTimeValue5"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration5,callback:function(e){t.duration5=e},expression:"duration5"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("6)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue6,callback:function(e){t.yourStringTimeValue6=e},expression:"yourStringTimeValue6"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration6,callback:function(e){t.duration6=e},expression:"duration6"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("7)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue7,callback:function(e){t.yourStringTimeValue7=e},expression:"yourStringTimeValue7"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration7,callback:function(e){t.duration7=e},expression:"duration7"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("8)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue8,callback:function(e){t.yourStringTimeValue8=e},expression:"yourStringTimeValue8"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration8,callback:function(e){t.duration8=e},expression:"duration8"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("9)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue9,callback:function(e){t.yourStringTimeValue9=e},expression:"yourStringTimeValue9"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration9,callback:function(e){t.duration9=e},expression:"duration9"}})],1)]),t._v(" "),r("v-col",{staticClass:"userInput col-sm-6",attrs:{cols:"12"}},[r("div",{staticClass:"mr-8"},[r("label",[t._v("10)")]),t._v(" "),r("vue-timepicker",{attrs:{format:"HH:mm","hour-range":[[0,6],[8,12],[14,23]],"hide-disabled-hours":""},model:{value:t.yourStringTimeValue10,callback:function(e){t.yourStringTimeValue10=e},expression:"yourStringTimeValue10"}})],1),t._v(" "),r("div",{},[r("v-text-field",{staticClass:"short",attrs:{label:"Duration (min)",rules:t.rules,type:"number"},model:{value:t.duration10,callback:function(e){t.duration10=e},expression:"duration10"}})],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;V()(component,{PageTitle:r(1536).default}),V()(component,{VBtn:x.a,VCard:D.a,VCardTitle:_.b,VCol:k.a,VRow:Y.a,VTextField:w.a})}}]);