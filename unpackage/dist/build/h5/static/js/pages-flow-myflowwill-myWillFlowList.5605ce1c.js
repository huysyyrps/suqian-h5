(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-myflowwill-myWillFlowList"],{"45e0":function(t,e,i){"use strict";i.r(e);var a=i("834b"),n=i("652c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ecf8");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"37af7c1e",null,!1,a["a"],r);e["default"]=s.exports},"46b8":function(t,e,i){"use strict";var a=i("d726"),n=i.n(a);n.a},"586b":function(t,e,i){function a(t,e){var i=new RegExp(e),a=i.test(t);return a}i("4d63"),i("ac1f"),i("25f0");var n="2",o="1",r="20623",l="10142",s="20638",c="10145",u="20671",d="10146",f="20637",v="10141",b="20679",w="10147",p="20635",g="10148",m="20633",x="10149",h="20628",k="10143",I="20684",_="10150",y="20632",D="10151",F="20634",C="10144";t.exports={write:n,read:o,userCarDefId:r,userCarFormDefId:l,maintainCarDefId:s,maintainCarFormDefId:c,receptionDefId:u,receptionFormDefId:d,receptionDiningDefId:f,receptionDiningFormDefId:v,assetPurchaseDefId:b,assetPurchaseFormDefId:w,assetDisposalDefId:p,assetDisposalFormDefId:g,contractDigningDefId:m,contractDigningFormDefId:x,mettingHomeDefId:h,mettingHomeFormDefId:k,mettingLeaveDefId:I,mettingLeaveFormDefId:_,signatureDefId:y,signatureFormDefId:D,workPuechaseDefId:F,workPuechaseFormDefId:C,testString:a}},"60b3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".v-edit[data-v-37af7c1e]{height:%?60?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?10?%}.tv-name[data-v-37af7c1e]{height:%?70?%;width:auto;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?22?%;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;margin-left:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.in-text[data-v-37af7c1e]{height:%?70?%;width:%?200?%;-webkit-flex-wrap:1;flex-wrap:1;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?22?%;margin-left:%?15?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-hline[data-v-37af7c1e]{height:%?2?%;width:100%;background-color:#aaa}.v-vline[data-v-37af7c1e]{height:%?25?%;width:%?1?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ccc}.list-item[data-v-37af7c1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border:silver %?1?% solid;-webkit-border-radius:%?15?%;border-radius:%?15?%;margin:%?5?%}.list-item-view[data-v-37af7c1e]{height:%?50?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?10?%}",""]),t.exports=e},"652c":function(t,e,i){"use strict";i.r(e);var a=i("a7d9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},6906:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-status-bar[data-v-9ed8e8da]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},"834b":function(t,e,i){"use strict";var a={uniNavBar:i("a69e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-nav-bar",{attrs:{"background-color":"#007AFF",color:"#FFFFFF","right-text":"查询",title:"待办流程"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.finish.apply(void 0,arguments)},clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.getResourcesNewSX.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"v-edit",staticStyle:{"background-color":"#FFFFFF"}},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("姓名 :"))]),i("v-uni-view",{staticClass:"v-vline"}),i("v-uni-input",{staticClass:"in-text",attrs:{type:"text",focus:!0,focus:!0,placeholder:"请输入流程标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("v-uni-view",{staticClass:"v-hline"}),t._l(t.dataList,(function(e,a){return i("v-uni-view",{key:a,staticStyle:{"background-color":"#FFFFFF"}},[i("v-uni-view",{staticClass:"list-item",attrs:{showArrow:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.listClient(e)}}},[i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("创建人 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.creator))])],1),i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("任务名称 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.taskName))])],1),i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("创建时间 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.createTime))])],1)],1)],1)}))],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"945a":function(t,e,i){"use strict";var a={uniStatusBar:i("f977").default,uniIcons:i("afac").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},a0c9:function(t,e,i){"use strict";var a=i("f45a"),n=i.n(a);n.a},a69e:function(t,e,i){"use strict";i.r(e);var a=i("945a"),n=i("ef56");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("46b8");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"4b994f89",null,!1,a["a"],r);e["default"]=s.exports},a7d9:function(t,e,i){"use strict";(function(t){var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2a07")),o=a(i("b952")),r=0,l=20,s="",c=i("8a5b"),u=i("60aa"),d=i("586b"),f={components:{uniList:n.default,uniListItem:o.default},data:function(){return{title:"",dataList:[],dataListNew:[]}},onLoad:function(t){s=t.type,this.getResourcesSX()},onReachBottom:function(){r+=20,this.getResourcesMoreSX()},methods:{getResourcesSX:function(e){var i=this;c.sendGetRequestJson({url:u.willdolist,data:{proTypeId:s,Q_subject_S_LK:i.title,start:r,limit:l},successCallBack:function(e){t("log",e," at pages/flow/myflowwill/myWillFlowList.vue:71"),i.dataList=[];for(var a=0;a<e.result.length;a++)i.dataList.push(e.result[a])},failCallBack:function(t){print(t)}})},getResourcesMoreSX:function(t){var e=this;c.sendGetRequestJson({url:u.willdolist,data:{proTypeId:this.profileId,start:r,limit:l},successCallBack:function(t){for(var i=0;i<t.result.length;i++)e.dataList.push(t.result[i])},failCallBack:function(t){print(t)}})},listClient:function(e){t("log",e.formDefId," at pages/flow/myflowwill/myWillFlowList.vue:102"),t("log",d.userCarFormDefId," at pages/flow/myflowwill/myWillFlowList.vue:103"),e.formDefId==d.userCarFormDefId&&uni.navigateTo({url:"../flowitem/overflow/userCarFlow/userCarFlowWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.maintainCarFormDefId&&uni.navigateTo({url:"../flowitem/overflow/maintainCar/maintainCarWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.receptionFormDefId&&uni.navigateTo({url:"../flowitem/overflow/reception/receptionWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.receptionDiningFormDefId&&uni.navigateTo({url:"../flowitem/overflow/receptionDining/receptionDiningWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.assetPurchaseFormDefId&&uni.navigateTo({url:"../flowitem/overflow/assetPurchase/assetPurchaseWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.assetDisposalFormDefId&&uni.navigateTo({url:"../flowitem/overflow/assetDisposal/assetDisposalWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.contractDigningFormDefId&&uni.navigateTo({url:"../flowitem/overflow/contractSigning/contractSigningWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.mettingHomeFormDefId&&uni.navigateTo({url:"../flowitem/overflow/mettingHome/mettingHomeWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.mettingLeaveFormDefId&&uni.navigateTo({url:"../flowitem/overflow/mettingLeaver/mettingLeaverWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId}),e.formDefId==d.mettingLeaveFormDefId&&uni.navigateTo({url:"../flowitem/overflow/signature/signatureWillDetail?activityName="+e.activityName+"&taskId="+e.taskId+"&piId="+e.piId+"&executionId="+e.executionId})},finish:function(t){uni.navigateTo({url:"../flowIndex/flowIndex"})},getResourcesNewSX:function(e){var i=this;r=0,l=20,c.sendGetRequestJson({url:u.willdolist,data:{proTypeId:s,Q_subject_S_LK:i.title,start:r,limit:l},successCallBack:function(e){t("log",e," at pages/flow/myflowwill/myWillFlowList.vue:182"),i.dataList=[];for(var a=0;a<e.result.length;a++)i.dataList.push(e.result[a])},failCallBack:function(t){print(t)}})}}};e.default=f}).call(this,i("0de9")["log"])},b089:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-nav-bar-text[data-v-4b994f89]{\n\n\nfont-size:%?32?%\n}.uni-nav-bar-right-text[data-v-4b994f89]{font-size:%?28?%}.uni-navbar__content[data-v-4b994f89]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-4b994f89]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-4b994f89]{height:44px}.uni-navbar--fixed[data-v-4b994f89]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-4b994f89]{\n-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-4b994f89]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},c8d4:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},d726:function(t,e,i){var a=i("b089");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7d33a4b4",a,!0,{sourceMap:!1,shadowMode:!1})},dbee:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f977")),o=a(i("afac")),r={name:"UniNavBar",components:{uniStatusBar:n.default,uniIcons:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=r},e279:function(t,e,i){"use strict";i.r(e);var a=i("e40f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},e40f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",n={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=n},ecf8:function(t,e,i){"use strict";var a=i("ff1c"),n=i.n(a);n.a},ef56:function(t,e,i){"use strict";i.r(e);var a=i("dbee"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f45a:function(t,e,i){var a=i("6906");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5d219870",a,!0,{sourceMap:!1,shadowMode:!1})},f977:function(t,e,i){"use strict";i.r(e);var a=i("c8d4"),n=i("e279");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a0c9");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"9ed8e8da",null,!1,a["a"],r);e["default"]=s.exports},ff1c:function(t,e,i){var a=i("60b3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("eb9de466",a,!0,{sourceMap:!1,shadowMode:!1})}}]);