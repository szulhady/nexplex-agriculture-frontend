(window.webpackJsonp=window.webpackJsonp||[]).push([[71,41,48,50,51],{1535:function(t,e,n){var content=n(1541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1aad47fc",content,!0,{sourceMap:!1})},1536:function(t,e,n){"use strict";n.r(e);var o={props:["title"]},r=(n(1540),n(121)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1540:function(t,e,n){"use strict";n(1535)},1541:function(t,e,n){var o=n(41)(!1);o.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=o},1545:function(t,e,n){var content=n(1556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("000ab7c4",content,!0,{sourceMap:!1})},1546:function(t,e,n){var content=n(1558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4377f036",content,!0,{sourceMap:!1})},1555:function(t,e,n){"use strict";n(1545)},1556:function(t,e,n){var o=n(41)(!1);o.push([t.i,".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}",""]),t.exports=o},1557:function(t,e,n){"use strict";n(1546)},1558:function(t,e,n){var o=n(41)(!1);o.push([t.i,".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}",""]),t.exports=o},1562:function(t,e,n){"use strict";n.r(e);n(68);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},e=this.$echarts.init(document.getElementById(this.id));e.setOption(t,!0),window.addEventListener("resize",(function(){e.resize()}))},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","dailyMin","dailyMax","dailyAvg","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1555),n(121)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,dailyMin:t.dailyMin,dailyMax:t.dailyMax,dailyAvg:t.dailyAvg,dailyHour:t.dailyHour,xAxis:t.xAxis}})])}),[],!1,null,"6f99e610",null);e.default=component.exports},1563:function(t,e,n){"use strict";n.r(e);n(68),n(139);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t=this,e={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var n=t.$echarts.init(document.getElementById(t.id));n.setOption(e,!0),window.addEventListener("resize",(function(){n.resize()}))}),500)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","data","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1557),n(121)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis}})])}),[],!1,null,"185f5285",null);e.default=component.exports},1634:function(t,e,n){var content=n(1687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5f618976",content,!0,{sourceMap:!1})},1686:function(t,e,n){"use strict";n(1634)},1687:function(t,e,n){var o=n(41)(!1);o.push([t.i,".center[data-v-3720697b]{justify-content:center;background:#11270b!important;color:#fff!important;border-top-left-radius:8px;border-top-right-radius:8px}.padding[data-v-3720697b]{padding:0 1em}.active[data-v-3720697b]{background:#58be3c!important}.card[data-v-3720697b],.card-color[data-v-3720697b]{border-radius:8px}.flex-column[data-v-3720697b]{display:flex;flex-direction:column}.button[data-v-3720697b]{margin:15px}.card-detail[data-v-3720697b]{background-color:#f1f1f1!important;border-radius:8px}.flex-btn[data-v-3720697b]{display:flex;justify-content:space-around;flex-wrap:wrap}",""]),t.exports=o},1729:function(t,e,n){"use strict";n.r(e);n(31),n(30),n(29),n(38),n(32),n(39);var o=n(17),r=n(1562),l=n(1563),c=n(91);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{index:"0",index2:"0",station:"Block 1",sensorsID:["SoilPH","SoilEC","SoilMS"],sensors:["Soil pH","Soil EC","Soil MS"],theme:"blue-theme"}},methods:{console:function(t){this.station=this.items[t].title,this.index=t;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++)if(i!=t)document.getElementById(i).classList.remove("active")},console2:function(t,e){this.index2=e;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++){var n=this.sensorsID[i];if(n!=t)document.getElementById(n).classList.remove("active")}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({trends:function(t){return t.trendsIpah2},arrayTime:function(t){return t.arrayTimeIpah2}})),props:["items"],components:{LineChart:r.default,LineChartSingleData:l.default},mounted:function(){document.getElementById(0).classList.add("active"),document.getElementById("SoilPH").classList.add("active")}},x=(n(1686),n(121)),m=n(154),y=n.n(m),h=n(489),v=n(465),S=n(122),M=n(1810),_=n(1811),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pb-3"},t._l(t.items,(function(e,o){return n("v-col",{key:e.title,attrs:{cols:e.cols,sm:"4"}},[n("v-card",{staticClass:"card card-color  elevation-12 ",attrs:{id:o},on:{click:function(e){return t.console(o)}}},[n("v-card-title",[t._v(t._s(e.block))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.description))])],1)],1)})),1),t._v(" "),n("v-card",{staticClass:"card-color elevation-12"},[n("v-card-title",{staticClass:"color"},[t._v("DETAILS")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"flex-btn"},t._l(t.sensorsID,(function(e,o){return n("v-btn",{key:e,staticClass:"button card card-color elevation-12",staticStyle:{width:"200px"},attrs:{id:e},on:{click:function(n){return t.console2(e,o)}}},[t._v(t._s(t.sensors[o]))])})),1)],1),t._v(" "),n("v-row",{staticClass:"padding"},[n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Current")]),t._v(" "),n("LineChartSingleData",{attrs:{id:"current",data:t.trends[t.index].current[t.index2],dailyHour:t.arrayTime[t.index],"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Hourly")]),t._v(" "),n("LineChart",{attrs:{id:"houry",dailyMax:t.trends[t.index].hourly[t.index2].max,dailyMin:t.trends[t.index].hourly[t.index2].min,dailyAvg:t.trends[t.index].hourly[t.index2].avg,dailyHour:t.trends[t.index].hourly[t.index2].hour,"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"right",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Daily")]),t._v(" "),n("LineChart",{attrs:{id:"weekly",dailyMax:t.trends[t.index].daily[t.index2].max,dailyMin:t.trends[t.index].daily[t.index2].min,dailyAvg:t.trends[t.index].daily[t.index2].avg,dailyHour:t.trends[t.index].daily[t.index2].day,"x-axis":"Day",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Monthly")]),t._v(" "),n("LineChart",{attrs:{id:"monthly",dailyMax:t.trends[t.index].monthly[t.index2].max,dailyMin:t.trends[t.index].monthly[t.index2].min,dailyAvg:t.trends[t.index].monthly[t.index2].avg,dailyHour:t.trends[t.index].monthly[t.index2].monthName,"x-axis":"Month",index:t.index2}})],1)],1)],1)],1)}),[],!1,null,"3720697b",null);e.default=component.exports;y()(component,{VBtn:h.a,VCard:v.a,VCardSubtitle:S.a,VCardTitle:S.b,VCol:M.a,VRow:_.a})},1829:function(t,e,n){"use strict";n.r(e);n(31),n(30),n(29),n(38),n(39);var o=n(35),r=n(17),l=(n(123),n(32),n(1536)),c=n(1729),d=n(91);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:["isTkpmIpah"],computed:x({},Object(d.d)({items:function(t){return t.stations[1].sensorSoil}})),components:{PageTitle:l.default,CardStationTrend:c.default},methods:x(x({},Object(d.c)({getHourlyIpah2:"getHourlyIpah2",getDailyIpah2:"getDailyIpah2",getMonthlyIpah2:"getMonthlyIpah2"})),{},{getDataHourly:function(table,t,e,n,o){var r=this;this.$axios.$get("http://139.59.109.48/api/hourly/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){l.push(t.max),d.push(t.avg),c.push(t.min),f.push(t.hour)})),data={station:t,indexStation:n,indexSensor:o,min:c,max:l,avg:d,hour:f},r.getHourlyIpah2(data)})).catch((function(t){console.log(t)}))},getDataDaily:function(table,t,e,n,o){var r=this;this.$axios.$get("http://139.59.109.48/api/daily/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){c.push(t.max),d.push(t.avg),l.push(t.min),f.push(t.day)})),data={station:t,indexStation:n,indexSensor:o,min:l,max:c,avg:d,day:f},r.getDailyIpah2(data)})).catch((function(t){console.log(t)}))},getDataMonthly:function(table,t,e,n,o){var r=this;this.$axios.$get("http://139.59.109.48/api/monthly/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){c.push(t.max),d.push(t.avg),l.push(t.min),f.push(t.monthname)})),data={station:t,indexStation:n,indexSensor:o,min:l,max:c,avg:d,monthName:f},r.getMonthlyIpah2(data)})).catch((function(t){console.log(t)}))}}),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=["312","322","332"],o=["soilPH_val","soilEC_val","soilMS_val"],i=0;i<n.length;i++)for(r=0;r<o.length;r++)t.getDataHourly("tkmpipah_data",n[i],o[r],i,r),t.getDataDaily("tkmpipah_data",n[i],o[r],i,r),t.getDataMonthly("tkpmipah_data",n[i],o[r],i,r);case 3:case"end":return e.stop()}}),e)})))()}},y=n(121),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("PageTitle",{attrs:{title:"TRENDS"}}),t._v(" "),n("CardStationTrend",{staticClass:"pb-7",attrs:{items:t.items}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTitle:n(1536).default})}}]);