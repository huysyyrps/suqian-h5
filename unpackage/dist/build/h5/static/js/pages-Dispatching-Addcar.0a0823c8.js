(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Dispatching-Addcar"],{"096f":function(e,t,n){"use strict";(function(e){var i=n("ee27");n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,s,r,l=i(n("1ad1")),c=i(n("c5e9")),d=(n("8131"),n("8a5b")),u=n("60aa"),f=(n("586b"),{components:{cLabel:l.default,cUpload:c.default},data:function(){return{passState:"cuIcon-attentionforbidfill text-gray",selectList:[{label:"全部",value:0},{label:"主厂",value:1},{label:"副厂",value:2}],jiabantype:[{label:"否",value:0},{label:"是",value:1}],selectListtype:[{label:"主站到主站",value:1},{label:"主站到副站",value:2},{label:"副站到主站",value:3},{label:"主区间到主站",value:4},{label:"主区间到副站",value:5},{label:"副区间到主站",value:6}],driver:"",userCode:"",downstationsta:"",downstationend:"",stationnamedownbeg:"",stationnamedownend:"",stationOrder1:"",stationOrder2:"",stationOrder3:"",stationOrder4:"",Linec:"",form:{yearMonthbeg:"",yearMonthend:"",timeadd:"",carno:"",fangxiang:"",timebeg:"",timeend:"",jiaban:""},rules:{text:[{checkType:"phone",errorMsg:"请正确输入手机号码"},{checkType:"maxMin",max:11,min:7,errorMsg:"长度介于 7-11 个字符"}],idcard:[{checkType:"noempty",errorMsg:"不能为空"},{checkType:"card",errorMsg:"请正确输入身份证号码"}]}}},methods:{handSubmit:function(){"否"==this.from.jiaban?s=0:"是"==this.from.jiaban&&(s=1),""==this.driver?uni.showToast({title:"驾驶员不能为空",icon:"none"}):""==this.form.yearMonthbeg?uni.showToast({title:"开始日期不能为空",icon:"none"}):""==this.form.yearMonthend?uni.showToast({title:"结束日期不能为空",icon:"none"}):""==this.form.timeadd?uni.showToast({title:"加车时间不能为空",icon:"none"}):""==this.form.carno?uni.showToast({title:"车辆自编号不能为空",icon:"none"}):""==this.form.fangxiang?uni.showToast({title:"发车方向不能为空",icon:"none"}):""==this.form.leixing?uni.showToast({title:"发车类型不能为空",icon:"none"}):("全部"==this.form.fangxiang?o=0:"主厂"==this.form.fangxiang?o=1:"副厂"==this.form.fangxiang&&(o=2),"主站到主站"==this.form.leixing?(a=1,this.sendaddcar()):"主站到副站"==this.form.leixing?(a=2,this.sendaddcar()):"副站到主站"==this.form.leixing?(a=3,this.sendaddcar()):"主区间到主站"==this.form.leixing?(a=4,""==this.downstationsta?uni.showToast({title:"下行开始站点不能为空",icon:"none"}):""==this.downstationend?uni.showToast({title:"下行结束站点不能为空",icon:"none"}):""==this.stationnamedownbeg?uni.showToast({title:"上行开始站点不能为空",icon:"none"}):""==this.stationnamedownend?uni.showToast({title:"上行结束站点不能为空",icon:"none"}):this.sendaddcar()):"主区间到副站"==this.form.leixing?(a=5,""==this.downstationsta?uni.showToast({title:"下行开始站点不能为空",icon:"none"}):""==this.downstationend?uni.showToast({title:"下行结束站点不能为空",icon:"none"}):this.sendaddcar()):"副区间到主站"==this.form.leixing&&(a=6,""==this.stationnamedownbeg?uni.showToast({title:"上行开始站点不能为空",icon:"none"}):""==this.stationnamedownend?uni.showToast({title:"上行结束站点不能为空",icon:"none"}):this.sendaddcar()))},sendaddcar:function(){var t=this.form.timeadd.replace(new RegExp(/(:)/g),"");e("log",t.substring(0,t.length-2)," at pages/Dispatching/Addcar.vue:290");var n=this.form.timebeg.replace(new RegExp(/(:)/g),""),i=this.form.timeend.replace(new RegExp(/(:)/g),"");d.sendGetRequestJson({url:u.getaddcar,data:{cmd:2,lineCode:r,busCode:this.form.carno,scheId:uni.getStorageSync("userCode"),begDate:this.form.yearMonthbeg.replace(new RegExp(/(-)/g),""),endDate:this.form.yearMonthend.replace(new RegExp(/(-)/g),""),begTime:n.substring(0,n.length-2),endTime:i.substring(0,i.length-2),downUpfcfx:o,fclx:a,jcsj:t.substring(0,t.length-2),newJSY:this.userCode,downBegin:this.stationOrder1,downEnd:this.stationOrder2,upBegin:this.stationOrder3,upEnd:this.stationOrder4,sfjb:s},successCallBack:function(t){1==t.success?uni.showToast({title:"新增成功"}):1==t.success&&uni.showToast({title:"加车失败"+t.msg,icon:"none"}),e("log",t," at pages/Dispatching/Addcar.vue:327")},failCallBack:function(t){e("log",t," at pages/Dispatching/Addcar.vue:330")}})},bindPersonChange:function(e){uni.navigateTo({url:"../../../../constant/personnel/personnel"})},begstationdown:function(e){uni.navigateTo({url:"../../../../Dispatching/StationList?state=1"})},endstationdown:function(e){uni.navigateTo({url:"../../../../Dispatching/StationList?state=2"})},begstationup:function(e){uni.navigateTo({url:"../../../../Dispatching/StationList?state=3"})},endstationup:function(e){uni.navigateTo({url:"../../../../Dispatching/StationList?state=4"})}},onLoad:function(e){r=e.Linecode,this.Linec=e.Linecode}});t.default=f}).call(this,n("0de9")["log"])},"586b":function(e,t,n){function i(e,t){var n=new RegExp(t),i=n.test(e);return i}n("4d63"),n("ac1f"),n("25f0");var a="2",o="1",s="20623",r="10142",l="20638",c="10145",d="20671",u="10146",f="20637",m="10141",h="20679",g="10147",p="20635",v="10148",b="20633",w="10149",x="20628",y="10143",k="20684",D="10150",T="20632",L="10151",C="20634",I="10144";e.exports={write:a,read:o,userCarDefId:s,userCarFormDefId:r,maintainCarDefId:l,maintainCarFormDefId:c,receptionDefId:d,receptionFormDefId:u,receptionDiningDefId:f,receptionDiningFormDefId:m,assetPurchaseDefId:h,assetPurchaseFormDefId:g,assetDisposalDefId:p,assetDisposalFormDefId:v,contractDigningDefId:b,contractDigningFormDefId:w,mettingHomeDefId:x,mettingHomeFormDefId:y,mettingLeaveDefId:k,mettingLeaveFormDefId:D,signatureDefId:T,signatureFormDefId:L,workPuechaseDefId:C,workPuechaseFormDefId:I,testString:i}},"6ea7":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"bg-white"},[n("cLabel",{attrs:{dataText:e.Linec,rightIcon:"cuIcon-people"},model:{value:e.form.text,callback:function(t){e.$set(e.form,"text",t)},expression:"form.text"}}),n("v-uni-view",{staticClass:"hourLine"}),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"itemName"},[e._v("驾驶员:")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择驾驶员",value:e.driver,type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPersonChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"hourLine"}),n("cLabel",{attrs:{title:"开始日期",dataText:e.form.yearMonthbeg,mode:"date"},model:{value:e.form.yearMonthbeg,callback:function(t){e.$set(e.form,"yearMonthbeg",t)},expression:"form.yearMonthbeg"}}),n("cLabel",{attrs:{title:"结束日期",dataText:e.form.yearMonthend,mode:"date"},model:{value:e.form.yearMonthend,callback:function(t){e.$set(e.form,"yearMonthend",t)},expression:"form.yearMonthend"}}),n("cLabel",{attrs:{title:"开始时间 : ",dataText:e.form.timebeg,mode:"time"},model:{value:e.form.timebeg,callback:function(t){e.$set(e.form,"timebeg",t)},expression:"form.timebeg"}}),n("cLabel",{attrs:{title:"结束时间 : ",dataText:e.form.timeend,mode:"time"},model:{value:e.form.timeend,callback:function(t){e.$set(e.form,"timeend",t)},expression:"form.timeend"}}),n("cLabel",{attrs:{title:"加车时间 : ",dataText:e.form.timeadd,mode:"time"},model:{value:e.form.timeadd,callback:function(t){e.$set(e.form,"timeadd",t)},expression:"form.timeadd"}}),n("cLabel",{attrs:{title:"车辆自编号 : ",mode:"idcard",dataText:e.form.carno,rightIcon:"cuIcon-vipcard text-red"},model:{value:e.form.carno,callback:function(t){e.$set(e.form,"carno",t)},expression:"form.carno"}}),n("cLabel",{attrs:{title:"发车方向 : ",dataText:e.form.fangxiang,selectList:e.selectList,mode:"selector"},model:{value:e.form.fangxiang,callback:function(t){e.$set(e.form,"fangxiang",t)},expression:"form.fangxiang"}}),n("cLabel",{attrs:{title:"发车类型 : ",dataText:e.form.leixing,selectList:e.selectListtype,mode:"selector"},model:{value:e.form.leixing,callback:function(t){e.$set(e.form,"leixing",t)},expression:"form.leixing"}}),n("cLabel",{attrs:{title:"是否加班 : ",dataText:e.form.jiaban,selectList:e.jiabantype,mode:"selector"},model:{value:e.form.jiaban,callback:function(t){e.$set(e.form,"jiaban",t)},expression:"form.jiaban"}}),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"itemName"},[e._v("下行开始站点 :")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:e.downstationsta,type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.begstationdown.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"hourLine"}),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"itemName"},[e._v("下行结束站点 :")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:e.downstationend,type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.endstationdown.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"hourLine"}),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"itemName"},[e._v("上行开始站点 :")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:e.stationnamedownbeg,type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.begstationup.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"hourLine"}),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"itemName"},[e._v("上行结束站点 :")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:e.stationnamedownend,type:"text"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.endstationup.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"hourLine"}),n("v-uni-button",{staticClass:"bg-blue",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handSubmit.apply(void 0,arguments)}}},[e._v("确定")])],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"71f0":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".bg-blue[data-v-58ad0613]{background-color:#007aff;width:70%;margin-top:%?100?%;color:#fff}.item[data-v-58ad0613]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;min-height:%?100?%}.hourLine[data-v-58ad0613]{height:%?1?%;width:90%;background-color:#dcdcdc;margin-left:%?20?%;margin-right:%?10?%}.itemName[data-v-58ad0613]{height:%?100?%;width:%?280?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%;line-height:%?150?%;color:#000}.inputarea[data-v-58ad0613]{display:block;width:auto;height:-webkit-max-content;height:max-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;auto-height:true;color:#000;font-size:%?28?%}",""]),e.exports=t},c748:function(e,t,n){"use strict";n.r(t);var i=n("096f"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},d8d3:function(e,t,n){"use strict";n.r(t);var i=n("6ea7"),a=n("c748");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f5f5");var s,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"58ad0613",null,!1,i["a"],s);t["default"]=l.exports},e7e7:function(e,t,n){var i=n("71f0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a6b78f02",i,!0,{sourceMap:!1,shadowMode:!1})},f5f5:function(e,t,n){"use strict";var i=n("e7e7"),a=n.n(i);a.a}}]);