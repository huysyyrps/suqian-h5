(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-flowitem-overflow-contractSigning-contractSigningWillDetail"],{"02f9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},"197a":function(e,t,i){"use strict";i.r(t);var n=i("6044"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},6044:function(e,t,i){"use strict";var n=i("ee27");i("4de4"),i("c975"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("db11")),o=n(i("e6e1")),s=n(i("afac")),r="",c="",l="",d="",u="",p="",f="",b="",m="",h="",w="",x="",v=i("1a7b"),g=i("1a7b"),k=i("8a5b"),y=i("60aa"),C=i("586b"),z={components:{uniSection:a.default,uniPopup:o.default,uniIcons:s.default},data:function(){return{write:C.write,read:C.read,index:0,type:"",person:"",department:"",date:g.getDay(),contractName:"",found:"",contraType:"",yzDepartment:"",money:"",contraContent:"",cbbm:"",fgld:"",cwbm:"",zjl:"",dsz:"",cbbm1:"",fgld1:"",cwbm1:"",zjl1:"",dsz1:"",cbbmRemote:"",fgldRemote:"",cwbmRemote:"",zjlRemote:"",dszRemote:"",flowAssignId:"",personLine:[],personLine1:[],comments:"",destTypeList:[],selectperson:[],visition:!1}},onLoad:function(e){r=e.activityName,c=e.taskId,l=e.piId,e.executionId,this.getUserCarFlowDetail()},methods:{getUserCarFlowDetail:function(e){var t=this;k.sendGetRequestJson({url:y.willdodetail,data:{activityName:r,taskId:c,piId:l},successCallBack:function(e){console.log(e),e.mainform[0].runId,w=e.mainform[0].mainId,t.person=e.mainform[0].sbbmfzr,t.department=e.mainform[0].sbbm,t.date=e.mainform[0].sbrq,t.contractName=e.mainform[0].sshtmc,t.found=e.mainform[0].xdfs,t.contraType=e.mainform[0].htlb,t.yzDepartment=e.mainform[0].htyzdw,t.money=e.mainform[0].htje,t.contraContent=e.mainform[0].hzzynr,t.cbbmRemote=e.formRights[0].sqbmyj,t.fgldRemote=e.formRights[0].flgwyj,t.cwbmRemote=e.formRights[0].cwbyj,t.zjlRemote=e.formRights[0].zjlyj,t.dszRemote=e.formRights[0].dszyj,""!=e.mainform[0].sqbmyj&&(t.cbbm1=e.mainform[0].sqbmyj,t.cbbm=JSON.parse(e.mainform[0].sqbmyj)[0].v),""!=e.mainform[0].flgwyj&&(t.fgld1=e.mainform[0].flgwyj,t.fgld=JSON.parse(e.mainform[0].flgwyj)[0].v),""!=e.mainform[0].cwbyj&&(t.cwbm1=e.mainform[0].cwbyj,t.cwbm=JSON.parse(e.mainform[0].cwbyj)[0].v),""!=e.mainform[0].zjlyj&&(t.zjl1=e.mainform[0].zjlyj,t.zjl=JSON.parse(e.mainform[0].zjlyj)[0].v),""!=e.mainform[0].zjlyj&&(t.dsz1=e.mainform[0].dszyj,t.dsz=JSON.parse(e.mainform[0].dszyj)[0].v);for(var i=0;i<e.trans.length;i++)t.destTypeList.push(e.trans[i])},failCallBack:function(e){print(e),console.log(e)}})},getFlowLine:function(e){if(1==this.destTypeList.length)p=this.destTypeList[0].destType,f=this.destTypeList[0].destination,this.selectperson=[],-1!=p.indexOf("decision")||-1!=p.indexOf("fork")||-1!=p.indexOf("join")?this.getOnLine():-1==p.indexOf("end")?this.getNoEndLine():this.getNoHandlerLine(),b=this.destTypeList[0].name;else{for(var t=0;t<this.destTypeList.length;t++)this.namelist.push(this.destTypeList[t].name);uni.showActionSheet({itemList:this.namelist,success:function(e){p=e.destType,f=e.destination,this.selectperson=[],-1!=p.indexOf("decision")||-1!=p.indexOf("fork")||-1!=p.indexOf("join")?this.getOnLine():-1==p.indexOf("end")?this.getNoEndLine():this.getNoHandlerLine(),b=this.destTypeList[0].name},fail:function(e){print(e.errMsg)}})}},getOnLine:function(e){var t=this;k.sendGetRequestJson({url:y.online,data:{taskId:c,activityName:f,isParentFlow:!1},successCallBack:function(e){t.personLine=[],t.personLine1=[];for(var i=0;i<e.data.length;i++)t.personLine1.push(e.data[i]);for(i=0;i<t.personLine1.length;i++)for(var n=t.personLine1[i].userNames.split(","),a=t.personLine1[i].userCodes.split(","),o=0;o<n.length;o++){var s={checked:t.personLine1[i].checked,role:t.personLine1[i].role,route:t.personLine1[i].route,type:t.personLine1[i].type,userCodes:a[o],userNames:n[o]};t.personLine.push(s)}t.togglePopup("center","tip")},failCallBack:function(e){print(e)}})},getNoEndLine:function(e){var t=this;k.sendGetRequestJson({url:y.noendline,data:{taskId:c,activityName:f,isParentFlow:!1},successCallBack:function(e){t.personLine=[],t.personLine1=[];for(var i=0;i<e.data.length;i++)t.personLine1.push(e.data[i]);for(i=0;i<t.personLine1.length;i++)for(var n=t.personLine1[i].userNames.split(","),a=t.personLine1[i].userCodes.split(","),o=0;o<n.length;o++){var s={checked:t.personLine1[i].checked,role:t.personLine1[i].role,route:t.personLine1[i].route,type:t.personLine1[i].type,userCodes:a[o],userNames:n[o]};t.personLine.push(s)}t.togglePopup("center","tip")},failCallBack:function(e){print(e)}})},getNoHandlerLine:function(e){var t=this;k.sendGetRequestJson({url:y.nohandlerline,data:{taskId:c},successCallBack:function(e){t.UpData()},failCallBack:function(e){print(e)}})},togglePopup:function(e,t){var i=this;switch(e){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=e,this.$nextTick((function(){i.$refs["show"+t].open()}))},cancel:function(e){this.$refs["show"+e].close()},change:function(e){0==this.selectperson.length?print("请选择审批人"):this.UpData()},listClient:function(e,t){0==this.selectperson.length?(e.checked=!0,this.selectperson.push(e)):-1!=this.selectperson.indexOf(e)?(e.checked=!1,this.selectperson.push(e),this.selectperson=this.selectperson.filter((function(t){return t!=e}))):(e.checked=!0,this.selectperson.push(e))},UpData:function(e){if(this.cbbmRemote!=C.write||this.cbbm)if(this.fgldRemote!=C.write||this.fgld)if(this.cwbmRemote!=C.write||this.cwbm)if(this.zjlRemote!=C.write||this.zjl)if(this.dszRemote!=C.write||this.dsz)if(0!=this.selectperson.length||0==this.personLine.length){if(this.cbbmRemote==this.write?this.comments=this.cbbm:this.fgldRemote==this.write?this.comments=this.fgld:this.cwbmRemote==this.write?this.comments=this.cwbm:this.zjlRemote==this.write?this.comments=this.zjl:this.dszRemote==this.write&&(this.comments=this.dsz),1==this.selectperson.length&&(d=this.selectperson[0].userCodes,this.flowAssignId=this.selectperson[0].role+"|"+this.selectperson[0].userCodes),this.selectperson.length>1){for(var t=0;t<this.selectperson.length;t++)""!=d?-1!=u.indexOf(this.selectperson[t].role)?d=d+","+this.selectperson[t].userCodes:(u=u+":"+this.selectperson[t].role,d=d+":"+this.selectperson[t].userCodes):(u=this.selectperson[t].role,d=this.selectperson[t].userCodes);this.flowAssignId=u+"|"+d}var i=this,n=new FormData;n.append("useTemplate",!1),n.append("startFlow",!0),n.append("destName",f),n.append("sendMsg",!0),n.append("sendMail",!0),n.append("mainId",w),n.append("taskId",c),n.append("flowAssignId",i.flowAssignId),n.append("defId",C.contractDigningDefId),n.append("formDefId",C.contractDigningFormDefId),n.append("signaName",b),n.append("sbbmDid",uni.getStorageSync("depId")),n.append("sbbm",uni.getStorageSync("depName")),n.append("sbbmfzrUId",uni.getStorageSync("userId")),n.append("sbbmfzr",i.person),n.append("sbrq",i.date),n.append("sshtmc",i.contractName),n.append("xdfs",i.found),n.append("htlb",i.contraType),n.append("htyzdw",i.yzDepartment),n.append("htje",i.money),n.append("hzzynr",i.contraContent),n.append("comments",i.comments),n.append("sqbmyj",i.makeData(i.cbbm,i.cbbm1,i.cbbmRemote)),n.append("fgldyj",i.makeData(i.fgld,i.fgld1,i.fgldRemote)),n.append("cwbyj",i.makeData(i.cwbm,i.cwbm1,i.cwbmRemote)),n.append("zjlyj",i.makeData(i.zjl,i.zjl1,i.zjlRemote)),n.append("dszyj",i.makeData(i.dsz,i.dsz1,i.dszRemote)),console.log(n),k.sendPost1RequestJson({url:y.willflowup,data:{myData:n},successCallBack:function(e){(e.success="true")&&uni.navigateBack({delta:1}),uni.navigateBack({delta:1})},failCallBack:function(e){print(e)}})}else uni.showToast({title:"请选择审批人",icon:"none",duration:800,position:"bottom"});else uni.showToast({title:"请签字",icon:"none",duration:800,position:"bottom"});else uni.showToast({title:"请签字",icon:"none",duration:800,position:"bottom"});else uni.showToast({title:"请签字",icon:"none",duration:800,position:"bottom"});else uni.showToast({title:"请签字",icon:"none",duration:800,position:"bottom"});else uni.showToast({title:"请签字",icon:"none",duration:800,position:"bottom"})},makeData:function(e,t,i){if(i==C.write){h=uni.getStorageSync("userId"),m=uni.getStorageSync("userName"),x=v.getTime();var n={ui:h,un:m,c:x,v:e};console.log(n);var a=JSON.stringify(n);return console.log(a),"["+a+"]"}return t}}};t.default=z},"61b1":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-section[data-v-202c18ed]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-202c18ed]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-202c18ed]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-202c18ed]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-202c18ed]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-202c18ed]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-202c18ed]{font-size:%?34?%;color:#333}.distraction[data-v-202c18ed]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-202c18ed]{font-size:%?24?%;color:#999}',""]),e.exports=t},"6d40":function(e,t,i){"use strict";var n=i("e8e6"),a=i.n(n);a.a},"6fc3":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section"},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},7587:function(e,t,i){"use strict";i.r(t);var n=i("f219"),a=i("197a");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9e95");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"03793eec",null,!1,n["a"],s);t["default"]=c.exports},"951e":function(e,t,i){var n=i("c22a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("49355831",n,!0,{sourceMap:!1,shadowMode:!1})},"9e95":function(e,t,i){"use strict";var n=i("951e"),a=i.n(n);a.a},c22a:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-03793eec]{min-height:100%;height:auto}.item[data-v-03793eec]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;min-height:%?100?%}.hourLine[data-v-03793eec]{height:%?1?%;width:100%;background-color:grey;margin-left:%?10?%;margin-right:%?10?%}.itemName[data-v-03793eec]{height:%?100?%;min-width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;margin-left:%?10?%;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?150?%}.itemNamearea[data-v-03793eec]{height:%?150?%;width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;margin-left:%?10?%;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?150?%}.inputarea[data-v-03793eec]{display:block;width:auto;height:-webkit-max-content;height:max-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;auto-height:true;min-height:%?55?%}.itemValue[data-v-03793eec]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;position:relative}.input[data-v-03793eec]{font-size:%?30?%;display:inline-block;text-align:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;margin-left:%?15?%}.t-header[data-v-03793eec]{height:%?120?%;border-bottom:grey %?0.5?% solid;border-right:grey %?0.5?% solid;border-top:grey %?0.5?% solid;background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?120?%;font-size:%?30?%}.text[data-v-03793eec]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;color:#dc3545;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;border-bottom:#000 solid %?1?%}.text1[data-v-03793eec]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;border-bottom:#000 solid %?1?%}.vText[data-v-03793eec]{height:%?45?%;width:100%;background-color:#d0dee5}.v-group[data-v-03793eec]{min-height:%?100?%;display:inline-block}.radiogroup[data-v-03793eec]{min-height:%?100?%;display:inline-block;font-size:%?30?%;display:inline-block;text-align:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:%?15?%;line-height:%?100?%}.btn[data-v-03793eec]{margin:%?50?%;background-color:#007aff;color:#fff}\r\n\r\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-03793eec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-03793eec]{font-size:14px;line-height:inherit}.example[data-v-03793eec]{padding:0 15px 15px}.example-info[data-v-03793eec]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-03793eec]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-03793eec]{padding:0 15px}.example-info[data-v-03793eec]{\r\ndisplay:block;\r\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-03793eec]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-03793eec]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-03793eec]{font-size:18px;color:#fff}.word-btn[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-03793eec]{background-color:#4ca2ff}.example-body[data-v-03793eec]{\r\ndisplay:block;\r\npadding:5px 15px}.button[data-v-03793eec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:10px 0}.popup-content[data-v-03793eec]{\r\ndisplay:block;\r\nbackground-color:#fff;padding:15px;font-size:14px}\r\n\r\n/* 提示窗口 */.uni-tip[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\npadding:15px;width:300px;background-color:#fff;border-radius:10px}.uni-tip-title[data-v-03793eec]{margin-bottom:10px;text-align:center;font-weight:700;font-size:16px;color:#333}.uni-tip-content[data-v-03793eec]{\r\n\t/* padding: 15px;\r\n  */font-size:14px;color:#666}.uni-tip-group-button[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-03793eec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:14px;color:#3b4144}\r\n\r\n/* 插屏广告 */.uni-image[data-v-03793eec]{position:relative}.image[data-v-03793eec]{width:200px;height:200px}.uni-image-close[data-v-03793eec]{margin-top:20px;text-align:center}\r\n\r\n/* 底部分享 */.uni-share[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\nbackground-color:#fff}.uni-share-title[data-v-03793eec]{line-height:%?60?%;font-size:%?24?%;padding:%?15?% 0;text-align:center}.uni-share-content[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:15px}.uni-share-content-box[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%}.uni-share-content-image[data-v-03793eec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?60?%;height:%?60?%;overflow:hidden;border-radius:%?10?%}.content-image[data-v-03793eec]{width:%?60?%;height:%?60?%}.uni-share-content-text[data-v-03793eec]{font-size:%?26?%;color:#333;padding-top:5px;padding-bottom:10px}.uni-share-btn[data-v-03793eec]{height:%?90?%;line-height:%?90?%;font-size:14px;border-top-color:#f5f5f5;border-top-width:1px;border-top-style:solid;text-align:center;color:#666}body.?%PAGE?%[data-v-03793eec]{background-color:#efeff4}",""]),e.exports=t},caa0:function(e,t,i){"use strict";i.r(t);var n=i("02f9"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},db11:function(e,t,i){"use strict";i.r(t);var n=i("6fc3"),a=i("caa0");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("6d40");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"202c18ed",null,!1,n["a"],s);t["default"]=c.exports},e8e6:function(e,t,i){var n=i("61b1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("49d84534",n,!0,{sourceMap:!1,shadowMode:!1})},f219:function(e,t,i){"use strict";var n={uniPopup:i("e6e1").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#EFEFF4"}},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("申请人:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.person))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("申请部门:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.department))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("申请时间:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.date))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("合同名称*:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.contractName))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("选定方式*:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.found))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("合同类别*:")]),i("v-uni-text",{staticClass:"input"},[e._v(e._s(e.contraType))])],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("用章单位*:")]),i("v-uni-textarea",{staticClass:"inputarea",attrs:{"auto-height":!0,placeholder:"请输入合同用章单位",type:"text"},model:{value:e.yzDepartment,callback:function(t){e.yzDepartment=t},expression:"yzDepartment"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("合同金额*:")]),i("v-uni-textarea",{staticClass:"inputarea",attrs:{"auto-height":!0,placeholder:"请输入合同金额(大写)",type:"text"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("合同内容*:")]),i("v-uni-textarea",{staticClass:"inputarea",attrs:{"auto-height":!0,placeholder:"请输入合同主要内容",type:"text"},model:{value:e.contraContent,callback:function(t){e.contraContent=t},expression:"contraContent"}})],1),i("v-uni-view",{staticClass:"vText"}),i("v-uni-view",{staticClass:"item",staticStyle:{"border-top":"#CCCCCC 1rpx solid"}},[i("v-uni-text",{staticClass:"itemName",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("承办部门:")]),e.cbbmRemote==e.read?i("v-uni-text",{staticClass:"input",attrs:{"auto-height":!0}},[e._v(e._s(e.cbbm))]):e._e(),e.cbbmRemote==e.write?i("v-uni-textarea",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.cbbm,callback:function(t){e.cbbm=t},expression:"cbbm"}}):e._e()],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("分管领导:")]),e.fgldRemote==e.read?i("v-uni-text",{staticClass:"input",attrs:{"auto-height":!0}},[e._v(e._s(e.fgld))]):e._e(),e.fgldRemote==e.write?i("v-uni-textarea",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.fgld,callback:function(t){e.fgld=t},expression:"fgld"}}):e._e()],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("财务部门:")]),e.cwbmRemote==e.read?i("v-uni-text",{staticClass:"input",attrs:{"auto-height":!0}},[e._v(e._s(e.cwbm))]):e._e(),e.cwbmRemote==e.write?i("v-uni-textarea",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.cwbm,callback:function(t){e.cwbm=t},expression:"cwbm"}}):e._e()],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("总经理:")]),e.zjlRemote==e.read?i("v-uni-text",{staticClass:"input",attrs:{"auto-height":!0}},[e._v(e._s(e.zjl))]):e._e(),e.zjlRemote==e.write?i("v-uni-textarea",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.zjl,callback:function(t){e.zjl=t},expression:"zjl"}}):e._e()],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("董事长:")]),e.dszRemote==e.read?i("v-uni-text",{staticClass:"input",attrs:{"auto-height":!0}},[e._v(e._s(e.dsz))]):e._e(),e.dszRemote==e.write?i("v-uni-textarea",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.dsz,callback:function(t){e.dsz=t},expression:"dsz"}}):e._e()],1),i("v-uni-view",{staticClass:"hourLine"}),i("uni-popup",{ref:"showtip",attrs:{type:e.type,"mask-click":!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-tip"},[e._l(e.personLine,(function(t,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"list-item",attrs:{showArrow:!1},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.listClient(t,n)}}},[i("v-uni-label",[t.checked?i("v-uni-text",{staticClass:"text"},[e._v(e._s(t.userNames+"("+t.role+")"))]):i("v-uni-text",{staticClass:"text1"},[e._v(e._s(t.userNames+"("+t.role+")"))])],1)],1)],1)})),i("v-uni-view",{staticClass:"uni-tip-group-button"},[i("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel("tip")}}},[e._v("取消")]),i("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel("tip")}}},[e._v("确定")])],1)],2)],1),i("v-uni-button",{staticClass:"btn",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getFlowLine.apply(void 0,arguments)}}},[e._v(e._s("提交"))])],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))}}]);