(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Dispatching-StartCar"],{1362:function(t,e,i){"use strict";i.r(e);var n=i("9866"),a=i("7c9a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("27db");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"3e4de073",null,!1,n["a"],s);e["default"]=r.exports},"27db":function(t,e,i){"use strict";var n=i("e935"),a=i.n(n);a.a},"586b":function(t,e,i){function n(t,e){var i=new RegExp(e),n=i.test(t);return n}i("4d63"),i("ac1f"),i("25f0");var a="2",o="1",s="20623",l="10142",r="20638",c="10145",d="20671",u="10146",f="20637",m="10141",g="20679",h="10147",p="20635",v="10148",b="20633",x="10149",w="20628",k="10143",C="20684",D="10150",y="20632",T="10151",L="20634",I="10144";t.exports={write:a,read:o,userCarDefId:s,userCarFormDefId:l,maintainCarDefId:r,maintainCarFormDefId:c,receptionDefId:d,receptionFormDefId:u,receptionDiningDefId:f,receptionDiningFormDefId:m,assetPurchaseDefId:g,assetPurchaseFormDefId:h,assetDisposalDefId:p,assetDisposalFormDefId:v,contractDigningDefId:b,contractDigningFormDefId:x,mettingHomeDefId:w,mettingHomeFormDefId:k,mettingLeaveDefId:C,mettingLeaveFormDefId:D,signatureDefId:y,signatureFormDefId:T,workPuechaseDefId:L,workPuechaseFormDefId:I,testString:n}},"7c9a":function(t,e,i){"use strict";i.r(e);var n=i("e4a4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9866:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bg-white"},[i("cLabel",{attrs:{title:"1路",rightIcon:"cuIcon-people"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}}),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[t._v("驾驶员:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择驾驶员",value:t.driver,type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPersonChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("cLabel",{attrs:{title:"车辆自编号 : ",mode:"idcard",dataText:t.form.carno,rightIcon:"cuIcon-vipcard text-red"},model:{value:t.form.carno,callback:function(e){t.$set(t.form,"carno",e)},expression:"form.carno"}}),i("cLabel",{attrs:{title:"班次序号 : ",mode:"idcard",dataText:t.form.classno,rightIcon:"cuIcon-vipcard text-red"},model:{value:t.form.classno,callback:function(e){t.$set(t.form,"classno",e)},expression:"form.classno"}}),i("cLabel",{attrs:{title:"主站计划发车时间 : ",dataText:t.form.timebeg,mode:"time"},model:{value:t.form.timebeg,callback:function(e){t.$set(t.form,"timebeg",e)},expression:"form.timebeg"}}),i("cLabel",{attrs:{title:"主站计划到达时间 : ",dataText:t.form.timeend,mode:"time"},model:{value:t.form.timeend,callback:function(e){t.$set(t.form,"timeend",e)},expression:"form.timeend"}}),i("cLabel",{attrs:{title:"副站计划发车时间 : ",dataText:t.form.timeadd,mode:"time"},model:{value:t.form.timeadd,callback:function(e){t.$set(t.form,"timeadd",e)},expression:"form.timeadd"}}),i("cLabel",{attrs:{title:"副站计划到达时间 : ",dataText:t.form.timefz,mode:"time"},model:{value:t.form.timefz,callback:function(e){t.$set(t.form,"timefz",e)},expression:"form.timefz"}}),i("cLabel",{attrs:{title:"发车方向 : ",dataText:t.form.fangxiang,selectList:t.selectList,mode:"selector"},model:{value:t.form.fangxiang,callback:function(e){t.$set(t.form,"fangxiang",e)},expression:"form.fangxiang"}}),i("cLabel",{attrs:{title:"调度令类别 : ",dataText:t.form.leixing,selectList:t.selectListtype,mode:"selector"},model:{value:t.form.leixing,callback:function(e){t.$set(t.form,"leixing",e)},expression:"form.leixing"}}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[t._v("下行开始站点 :")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:t.downstationsta,type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.begstationdown.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[t._v("下行结束站点 :")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:t.downstationend,type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.endstationdown.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[t._v("上行开始站点 :")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:t.stationnamedownbeg,type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.begstationup.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[t._v("上行结束站点 :")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"点击选择站点",value:t.stationnamedownend,type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.endstationup.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-button",{staticClass:"bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handSubmit.apply(void 0,arguments)}}},[t._v("确定")])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},d6d0:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".bg-blue[data-v-3e4de073]{background-color:#007aff;width:70%;margin-top:%?100?%;color:#fff}.item[data-v-3e4de073]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;min-height:%?100?%}.hourLine[data-v-3e4de073]{height:%?1?%;width:90%;background-color:#dcdcdc;margin-left:%?20?%;margin-right:%?10?%}.itemName[data-v-3e4de073]{height:%?100?%;width:%?280?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%;line-height:%?150?%;color:#000}.inputarea[data-v-3e4de073]{display:block;width:auto;height:-webkit-max-content;height:max-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;auto-height:true;color:#000;font-size:%?28?%}",""]),t.exports=e},e4a4:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("4d63"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o,s=n(i("fc11")),l=n(i("1ad1")),r=n(i("c5e9")),c=(i("8131"),i("8a5b")),d=i("60aa"),u=(i("586b"),{components:{cLabel:l.default,cUpload:r.default},data:function(){return{passState:"cuIcon-attentionforbidfill text-gray",selectList:[{label:"全部",value:0},{label:"主厂",value:1},{label:"副厂",value:2}],jiabantype:[{label:"否",value:0},{label:"是",value:1}],selectListtype:[{label:"取消",value:0},{label:"主站到主站",value:1},{label:"主站到副站",value:2},{label:"副站到主站",value:3},{label:"主区间到主站",value:4},{label:"主区间到副站",value:5},{label:"副区间到主站",value:6},{label:"副站到副站",value:7},{label:"副站到副区",value:8}],driver:"",userCode:"",downstationsta:"",downstationend:"",stationnamedownbeg:"",stationnamedownend:"",stationOrder1:"",stationOrder2:"",stationOrder3:"",stationOrder4:"",form:{yearMonthbeg:"",yearMonthend:"",timeadd:"",carno:"",fangxiang:"",timebeg:"",timeend:"",jiaban:"",timefz:"",classno:""},rules:{text:[{checkType:"phone",errorMsg:"请正确输入手机号码"},{checkType:"maxMin",max:11,min:7,errorMsg:"长度介于 7-11 个字符"}],idcard:[{checkType:"noempty",errorMsg:"不能为空"},{checkType:"card",errorMsg:"请正确输入身份证号码"}]}}},methods:{handSubmit:function(){""==this.driver?uni.showToast({title:"驾驶员不能为空",icon:"none"}):""==this.form.timebeg?uni.showToast({title:"主站计划发车时间不能为空",icon:"none"}):""==this.form.timeend?uni.showToast({title:"主站计划到达时间不能为空",icon:"none"}):""==this.form.timefz?uni.showToast({title:"副站计划到达时间不能为空",icon:"none"}):""==this.form.timeadd?uni.showToast({title:"副站计划发车时间不能为空",icon:"none"}):""==this.form.carno?uni.showToast({title:"车辆自编号不能为空",icon:"none"}):""==this.form.fangxiang?uni.showToast({title:"发车方向不能为空",icon:"none"}):""==this.form.leixing?uni.showToast({title:"调度令类别不能为空",icon:"none"}):""==this.form.classno?uni.showToast({title:"班次序号不能为空",icon:"none"}):""==this.downstationsta?uni.showToast({title:"下行开始站点不能为空",icon:"none"}):""==this.downstationend?uni.showToast({title:"下行结束站点不能为空",icon:"none"}):""==this.stationnamedownbeg?uni.showToast({title:"上行开始站点不能为空",icon:"none"}):""==this.stationnamedownend?uni.showToast({title:"上行结束站点不能为空",icon:"none"}):("全部"==this.form.fangxiang?o=0:"主厂"==this.form.fangxiang?o=1:"副厂"==this.form.fangxiang&&(o=2),"取消"==this.form.leixing?a=0:"主站到主站"==this.form.leixing?a=1:"主站到副站"==this.form.leixing?a=2:"副站到主站"==this.form.leixing?a=3:"主区间到主站"==this.form.leixing?a=4:"主区间到副站"==this.form.leixing?a=5:"副区间到主站"==this.form.leixing?a=6:"副站到副站"==this.form.leixing?a=7:"副站到副区"==this.form.leixing&&(a=8),this.sendaddcar())},sendaddcar:function(){var e,i=this.form.timeadd.replace(new RegExp(/(:)/g),"");t("log",i.substring(0,i.length-2)," at pages/Dispatching/StartCar.vue:280");var n=this.form.timebeg.replace(new RegExp(/(:)/g),""),l=this.form.timeend.replace(new RegExp(/(:)/g),""),r=this.form.timefz.replace(new RegExp(/(:)/g),"");c.sendGetRequestJson({url:d.sendDDL,data:(e={cmd:a,lineCode:11,busCode:this.form.carno,scheId:100001,downUpfcfx:o,zfc:n.substring(0,n.length-2),zdd:l.substring(0,l.length-2),ffc:i.substring(0,i.length-2),fdd:r.substring(0,r.length-2)},(0,s.default)(e,"downUpfcfx",o),(0,s.default)(e,"downBegin",this.stationOrder1),(0,s.default)(e,"downEnd",this.stationOrder2),(0,s.default)(e,"upBegin",this.stationOrder3),(0,s.default)(e,"upEnd",this.stationOrder4),(0,s.default)(e,"classOrd",this.form.classno),e),successCallBack:function(e){t("log",e," at pages/Dispatching/StartCar.vue:306"),1==e.success?uni.showToast({title:"新增成功"}):1==e.success&&uni.showToast({title:"加车失败"+e.msg,icon:"none"}),t("log",e," at pages/Dispatching/StartCar.vue:318")},failCallBack:function(e){t("log",e," at pages/Dispatching/StartCar.vue:321")}})},bindPersonChange:function(t){uni.navigateTo({url:"../../../../constant/personnel/personnel"})},begstationdown:function(t){uni.navigateTo({url:"../../../../Dispatching/StationList?state=1"})},endstationdown:function(t){uni.navigateTo({url:"../../../../Dispatching/StationList?state=2"})},begstationup:function(t){uni.navigateTo({url:"../../../../Dispatching/StationList?state=3"})},endstationup:function(t){uni.navigateTo({url:"../../../../Dispatching/StationList?state=4"})}},onLoad:function(){}});e.default=u}).call(this,i("0de9")["log"])},e935:function(t,e,i){var n=i("d6d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0e5f2882",n,!0,{sourceMap:!1,shadowMode:!1})}}]);