(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-overFlow-overFlow"],{"0731":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("08cd")),r=a(i("be66")),o={name:"UniNavBar",components:{uniStatusBar:n.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},"08cd":function(t,e,i){"use strict";i.r(e);var a=i("3661"),n=i("5b22");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("baed");var o,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"5dd31d62",null,!1,a["a"],o);e["default"]=s.exports},"0a98":function(t,e,i){"use strict";var a=i("b864"),n=i.n(a);n.a},1545:function(t,e,i){"use strict";i.r(e);var a=i("0731"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1e39":function(t,e,i){"use strict";var a={"uni-status-bar":i("08cd").default,"uni-icons":i("be66").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},2258:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",n={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=n},2866:function(t,e,i){"use strict";var a={"uni-nav-bar":i("bc31").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-nav-bar",{attrs:{"background-color":"#007AFF",color:"#FFFFFF","left-icon":"back","right-text":"查询",title:"已办流程"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.finish.apply(void 0,arguments)},clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.getResourcesNewSX.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"displayMain",staticStyle:{"background-color":"#FFFFFF"}},[i("v-uni-view",{staticClass:"displayMain"},[i("v-uni-picker",{staticStyle:{"flex-grow":"1",position:"relative"},attrs:{mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindStartDateChange.apply(void 0,arguments)}}},[i("v-uni-input",{attrs:{placeholder:"开始时间",value:t.startDate,type:"text"}}),i("v-uni-view",{staticStyle:{left:"0rpx",top:"0rpx",width:"100%",height:"100%","background-color":"rgba(0,0,0,0)",position:"absolute"}})],1),i("v-uni-view",{staticStyle:{width:"50%",height:"1rpx","background-color":"#EBEBEB"}}),i("v-uni-picker",{staticStyle:{"flex-grow":"1",position:"relative"},attrs:{mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindEndDateChange.apply(void 0,arguments)}}},[i("v-uni-input",{staticStyle:{"text-align":"right"},attrs:{placeholder:"结束时间",value:t.endDate,type:"text"}}),i("v-uni-view",{staticStyle:{width:"100%",height:"100%","background-color":"rgba(0,0,0,0)",position:"absolute","text-align":"right"}})],1)],1)],1),i("v-uni-view",{staticClass:"v-hline"}),i("v-uni-view",{staticClass:"v-edit",staticStyle:{"background-color":"#FFFFFF"}},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("标题 :"))]),i("v-uni-view",{staticClass:"v-vline"}),i("v-uni-input",{staticClass:"in-text",attrs:{type:"text",focus:!0,focus:!0,placeholder:"请输入流程标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("v-uni-view",{staticClass:"v-hline"}),t._l(t.dataList,(function(e,a){return i("v-uni-view",{key:a,staticStyle:{"background-color":"#FFFFFF"}},[i("v-uni-view",{staticClass:"list-item",attrs:{showArrow:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.listClient(e)}}},[i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("创建人 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.creator))])],1),i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("任务名称 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.processName))])],1),i("v-uni-view",{staticClass:"list-item-view"},[i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s("创建时间 :"))]),i("v-uni-text",{staticClass:"tv-name"},[t._v(t._s(e.createtime))])],1)],1)],1)}))],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},3661:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},5041:function(t,e,i){function a(t,e){var i=new RegExp(e),a=i.test(t);return a}i("4d63"),i("ac1f"),i("25f0");var n="2",r="1",o="20701",l="10142",s="20638",c="10145",u="20671",d="10146",f="20637",v="10141",b="20679",w="10147",g="20635",p="10148",h="20633",x="10149",m="20628",_="10143",k="20684",y="10150",D="20632",I="10151",C="20634",F="10144";t.exports={write:n,read:r,userCarDefId:o,userCarFormDefId:l,maintainCarDefId:s,maintainCarFormDefId:c,receptionDefId:u,receptionFormDefId:d,receptionDiningDefId:f,receptionDiningFormDefId:v,assetPurchaseDefId:b,assetPurchaseFormDefId:w,assetDisposalDefId:g,assetDisposalFormDefId:p,contractDigningDefId:h,contractDigningFormDefId:x,mettingHomeDefId:m,mettingHomeFormDefId:_,mettingLeaveDefId:k,mettingLeaveFormDefId:y,signatureDefId:D,signatureFormDefId:I,workPuechaseDefId:C,workPuechaseFormDefId:F,testString:a}},"5b22":function(t,e,i){"use strict";i.r(e);var a=i("2258"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},6202:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".displayMain[data-v-a65d3084]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.v-edit[data-v-a65d3084]{height:%?80?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tv-name[data-v-a65d3084]{height:%?70?%;width:auto;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;margin-left:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.in-text[data-v-a65d3084]{height:%?70?%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-wrap:1;flex-wrap:1;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;margin-left:%?15?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-hline[data-v-a65d3084]{height:%?2?%;width:100%;background-color:#aaa}.v-vline[data-v-a65d3084]{height:%?25?%;width:%?1?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ccc}.list-item[data-v-a65d3084]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border:silver %?1?% solid;border-radius:%?15?%;margin:%?5?%}.list-item-view[data-v-a65d3084]{height:%?50?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?10?%}",""]),t.exports=e},"79c9":function(t,e,i){"use strict";i.r(e);var a=i("2866"),n=i("b495");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0a98");var o,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"a65d3084",null,!1,a["a"],o);e["default"]=s.exports},"893a":function(t,e,i){var a=i("e634");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2f2558bc",a,!0,{sourceMap:!1,shadowMode:!1})},"940a":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("bc31")),r=0,o=20,l=i("9d92"),s=i("8e21"),c=i("5041"),u={components:{uniNavBar:n.default},data:function(){return{title:"",startDate:"",endDate:"",dataList:[],dataListNew:[]}},onLoad:function(t){t.type,this.getResourcesSX()},onReachBottom:function(){r+=20,this.getResourcesMoreSX()},methods:{bindStartDateChange:function(t){this.startDate=t.target.value},bindEndDateChange:function(t){this.endDate=t.target.value},getResourcesSX:function(t){var e=this;l.sendGetRequestJson({url:s.overflow,data:{start:r,limit:o,"Q_vo.createtime_D_GE":e.startDate,"Q_vo.createtime_D_LE":e.endDate,Q_subject_S_LK:e.title},successCallBack:function(t){console.log(t),e.dataList=[];for(var i=0;i<t.result.length;i++)e.dataList.push(t.result[i])},failCallBack:function(t){print(t)}})},getResourcesMoreSX:function(t){var e=this;l.sendGetRequestJson({url:s.overflow,data:{start:r,limit:o,"Q_vo.createtime_D_GE":e.startDate,"Q_vo.createtime_D_LE":e.endDate,Q_subject_S_LK:e.title},successCallBack:function(t){for(var i=0;i<t.result.length;i++)e.dataList.push(t.result[i])},failCallBack:function(t){print(t)}})},finish:function(t){uni.redirectTo({url:"../flowIndex/flowIndex"})},listClient:function(t){console.log(t.formDefId),console.log(c.userCarFormDefId),t.formDefId==c.userCarFormDefId&&uni.navigateTo({url:"../flowitem/overflow/userCarFlow/userCarFlowDetail?runId="+t.runId}),t.formDefId==c.maintainCarFormDefId&&uni.navigateTo({url:"../flowitem/overflow/maintainCar/maintainCarDetail?runId="+t.runId}),t.formDefId==c.receptionFormDefId&&uni.navigateTo({url:"../flowitem/overflow/reception/receptionDetail?runId="+t.runId}),t.formDefId==c.receptionDiningFormDefId&&uni.navigateTo({url:"../flowitem/overflow/receptionDining/receptionDiningDetail?runId="+t.runId}),t.formDefId==c.assetPurchaseFormDefId&&uni.navigateTo({url:"../flowitem/overflow/assetPurchase/assetPurchaseDetail?runId="+t.runId}),t.formDefId==c.assetDisposalFormDefId&&uni.navigateTo({url:"../flowitem/overflow/assetDisposal/assetDisposalDetail?runId="+t.runId}),t.formDefId==c.contractDigningFormDefId&&uni.navigateTo({url:"../flowitem/overflow/contractSigning/contractSigningDetail?runId="+t.runId}),t.formDefId==c.mettingHomeFormDefId&&uni.navigateTo({url:"../flowitem/overflow/mettingHome/mettingHomeDetail?runId="+t.runId}),t.formDefId==c.mettingLeaveFormDefId&&uni.navigateTo({url:"../flowitem/overflow/mettingLeaver/mettingLeaverDetail?runId="+t.runId}),t.formDefId==c.signatureFormDefId&&uni.navigateTo({url:"../flowitem/overflow/signature/signatureDetail?runId="+t.runId}),t.formDefId==c.workPuechaseFormDefId&&uni.navigateTo({url:"../flowitem/overflow/workPuechase/workPuechaseDetail?runId="+t.runId})},getResourcesNewSX:function(t){var e=this;r=0,o=20,l.sendGetRequestJson({url:s.overflow,data:{start:r,limit:o,"Q_vo.createtime_D_GE":e.startDate,"Q_vo.createtime_D_LE":e.endDate,Q_subject_S_LK:e.title},successCallBack:function(t){console.log(t),e.dataList=[];for(var i=0;i<t.result.length;i++)e.dataList.push(t.result[i])},failCallBack:function(t){print(t)}})}}};e.default=u},b495:function(t,e,i){"use strict";i.r(e);var a=i("940a"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},b864:function(t,e,i){var a=i("6202");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0fb98e3a",a,!0,{sourceMap:!1,shadowMode:!1})},baed:function(t,e,i){"use strict";var a=i("893a"),n=i.n(a);n.a},bc31:function(t,e,i){"use strict";i.r(e);var a=i("1e39"),n=i("1545");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("f9c9");var o,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"64a9a51a",null,!1,a["a"],o);e["default"]=s.exports},d3f9:function(t,e,i){var a=i("f35a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6b9f7ec2",a,!0,{sourceMap:!1,shadowMode:!1})},e634:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-status-bar[data-v-5dd31d62]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},f35a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-nav-bar-text[data-v-64a9a51a]{\n\n\nfont-size:%?32?%\n}.uni-nav-bar-right-text[data-v-64a9a51a]{font-size:%?28?%}.uni-navbar__content[data-v-64a9a51a]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-64a9a51a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-64a9a51a]{height:44px}.uni-navbar--fixed[data-v-64a9a51a]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-64a9a51a]{\n-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-64a9a51a]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},f9c9:function(t,e,i){"use strict";var a=i("d3f9"),n=i.n(a);n.a}}]);