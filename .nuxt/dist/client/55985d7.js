(window.webpackJsonp=window.webpackJsonp||[]).push([[48,50,51],{1545:function(t,e,n){var content=n(1556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("000ab7c4",content,!0,{sourceMap:!1})},1546:function(t,e,n){var content=n(1558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4377f036",content,!0,{sourceMap:!1})},1555:function(t,e,n){"use strict";n(1545)},1556:function(t,e,n){var r=n(41)(!1);r.push([t.i,".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}",""]),t.exports=r},1557:function(t,e,n){"use strict";n(1546)},1558:function(t,e,n){var r=n(41)(!1);r.push([t.i,".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}",""]),t.exports=r},1562:function(t,e,n){"use strict";n.r(e);n(68);var r={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},e=this.$echarts.init(document.getElementById(this.id));e.setOption(t,!0),window.addEventListener("resize",(function(){e.resize()}))},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","dailyMin","dailyMax","dailyAvg","dailyHour","xAxis","axisMin","axisMax","index"]},o=(n(1555),n(121)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,dailyMin:t.dailyMin,dailyMax:t.dailyMax,dailyAvg:t.dailyAvg,dailyHour:t.dailyHour,xAxis:t.xAxis}})])}),[],!1,null,"6f99e610",null);e.default=component.exports},1563:function(t,e,n){"use strict";n.r(e);n(68),n(139);var r={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t=this,e={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var n=t.$echarts.init(document.getElementById(t.id));n.setOption(e,!0),window.addEventListener("resize",(function(){n.resize()}))}),500)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","data","dailyHour","xAxis","axisMin","axisMax","index"]},o=(n(1557),n(121)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis}})])}),[],!1,null,"185f5285",null);e.default=component.exports},1634:function(t,e,n){var content=n(1687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5f618976",content,!0,{sourceMap:!1})},1686:function(t,e,n){"use strict";n(1634)},1687:function(t,e,n){var r=n(41)(!1);r.push([t.i,".center[data-v-3720697b]{justify-content:center;background:#11270b!important;color:#fff!important;border-top-left-radius:8px;border-top-right-radius:8px}.padding[data-v-3720697b]{padding:0 1em}.active[data-v-3720697b]{background:#58be3c!important}.card[data-v-3720697b],.card-color[data-v-3720697b]{border-radius:8px}.flex-column[data-v-3720697b]{display:flex;flex-direction:column}.button[data-v-3720697b]{margin:15px}.card-detail[data-v-3720697b]{background-color:#f1f1f1!important;border-radius:8px}.flex-btn[data-v-3720697b]{display:flex;justify-content:space-around;flex-wrap:wrap}",""]),t.exports=r},1729:function(t,e,n){"use strict";n.r(e);n(31),n(30),n(29),n(38),n(32),n(39);var r=n(17),o=n(1562),l=n(1563),c=n(91);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={data:function(){return{index:"0",index2:"0",station:"Block 1",sensorsID:["SoilPH","SoilEC","SoilMS"],sensors:["Soil pH","Soil EC","Soil MS"],theme:"blue-theme"}},methods:{console:function(t){this.station=this.items[t].title,this.index=t;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++)if(i!=t)document.getElementById(i).classList.remove("active")},console2:function(t,e){this.index2=e;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++){var n=this.sensorsID[i];if(n!=t)document.getElementById(n).classList.remove("active")}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({trends:function(t){return t.trendsIpah2},arrayTime:function(t){return t.arrayTimeIpah2}})),props:["items"],components:{LineChart:o.default,LineChartSingleData:l.default},mounted:function(){document.getElementById(0).classList.add("active"),document.getElementById("SoilPH").classList.add("active")}},f=(n(1686),n(121)),y=n(154),m=n.n(y),v=n(489),h=n(465),S=n(122),M=n(1810),z=n(1811),component=Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pb-3"},t._l(t.items,(function(e,r){return n("v-col",{key:e.title,attrs:{cols:e.cols,sm:"4"}},[n("v-card",{staticClass:"card card-color  elevation-12 ",attrs:{id:r},on:{click:function(e){return t.console(r)}}},[n("v-card-title",[t._v(t._s(e.block))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.description))])],1)],1)})),1),t._v(" "),n("v-card",{staticClass:"card-color elevation-12"},[n("v-card-title",{staticClass:"color"},[t._v("DETAILS")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"flex-btn"},t._l(t.sensorsID,(function(e,r){return n("v-btn",{key:e,staticClass:"button card card-color elevation-12",staticStyle:{width:"200px"},attrs:{id:e},on:{click:function(n){return t.console2(e,r)}}},[t._v(t._s(t.sensors[r]))])})),1)],1),t._v(" "),n("v-row",{staticClass:"padding"},[n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Current")]),t._v(" "),n("LineChartSingleData",{attrs:{id:"current",data:t.trends[t.index].current[t.index2],dailyHour:t.arrayTime[t.index],"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Hourly")]),t._v(" "),n("LineChart",{attrs:{id:"houry",dailyMax:t.trends[t.index].hourly[t.index2].max,dailyMin:t.trends[t.index].hourly[t.index2].min,dailyAvg:t.trends[t.index].hourly[t.index2].avg,dailyHour:t.trends[t.index].hourly[t.index2].hour,"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"right",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Daily")]),t._v(" "),n("LineChart",{attrs:{id:"weekly",dailyMax:t.trends[t.index].daily[t.index2].max,dailyMin:t.trends[t.index].daily[t.index2].min,dailyAvg:t.trends[t.index].daily[t.index2].avg,dailyHour:t.trends[t.index].daily[t.index2].day,"x-axis":"Day",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Monthly")]),t._v(" "),n("LineChart",{attrs:{id:"monthly",dailyMax:t.trends[t.index].monthly[t.index2].max,dailyMin:t.trends[t.index].monthly[t.index2].min,dailyAvg:t.trends[t.index].monthly[t.index2].avg,dailyHour:t.trends[t.index].monthly[t.index2].monthName,"x-axis":"Month",index:t.index2}})],1)],1)],1)],1)}),[],!1,null,"3720697b",null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VCardSubtitle:S.a,VCardTitle:S.b,VCol:M.a,VRow:z.a})}}]);