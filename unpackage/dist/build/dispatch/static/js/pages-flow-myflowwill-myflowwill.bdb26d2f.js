(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-myflowwill-myflowwill"],{"11cb":function(t,e,n){"use strict";var a={uniList:n("2a07").default,uniListItem:n("b952").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.funcModules,(function(e,a){return e.show?n("uni-list",{key:a,attrs:{index:a}},[n("uni-list-item",{attrs:{title:e.title,"show-badge":!0,"badge-text":e.badge},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClient(e)}}}),n("v-uni-view",{staticClass:"hourLine"})],1):t._e()})),1)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},"1df9":function(t,e,n){"use strict";(function(t){var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2a07")),r=a(n("b952")),o=a(n("a69e")),l=n("8a5b"),u=n("60aa"),s={components:{uniList:i.default,uniListItem:r.default,uniNavBar:o.default},data:function(){return{funcModules:[{show:!0,title:"公文管理",imgUrl:"/static/flow/flow_item1.png",pageUrl:"myWillFlowList",badge:"",showBadge:!1,type:"primary",tag:100001,proTypeId:4829},{show:!0,title:"行政管理",imgUrl:"/static/flow/flow_item2.png",pageUrl:"myWillFlowList",badge:"",showBadge:!1,type:"primary",tag:100002,proTypeId:4830},{show:!0,title:"人资管理",imgUrl:"/static/flow/flow_item3.png",pageUrl:"myWillFlowList",badge:"",showBadge:!1,type:"primary",tag:100003,proTypeId:4831},{show:!0,title:"财务管理",imgUrl:"/static/flow/flow_item4.png",pageUrl:"myWillFlowList",badge:"",showBadge:!1,type:"primary",tag:100004,proTypeId:4832},{show:!0,title:"采购管理",imgUrl:"/static/flow/flow_item5.png",pageUrl:"myWillFlowList",badge:"",showBadge:!1,type:"primary",tag:100005,proTypeId:4833}]}},onLoad:function(){},onShow:function(){this.getWillDoNum()},methods:{onClient:function(t){switch(t.tag){case 100001:uni.navigateTo({url:t.pageUrl+"?type=4829"});break;case 100002:uni.navigateTo({url:t.pageUrl+"?type=4830"});break;case 100003:uni.navigateTo({url:t.pageUrl+"?type=4831"});break;case 100004:uni.navigateTo({url:t.pageUrl+"?type=4832"});break;case 100005:uni.navigateTo({url:t.pageUrl+"?type=4833"});break}},getWillDoNum:function(e){var n=this;l.sendGetRequestJson({url:u.willdolistnum,data:{},successCallBack:function(e){t("log",e.result," at pages/flow/myflowwill/myflowwill.vue:120"),t("log",n.funcModules," at pages/flow/myflowwill/myflowwill.vue:121");for(var a=0;a<n.funcModules.length;a++)n.funcModules[a].badge="";for(var i=0;i<e.result.length;i++)for(a=0;a<n.funcModules.length;a++)n.funcModules[a].proTypeId==e.result[i].proTypeId&&(t("log",n.funcModules[a].proTypeId," at pages/flow/myflowwill/myflowwill.vue:129"),t("log",e.result[i].proTypeId," at pages/flow/myflowwill/myflowwill.vue:130"),n.funcModules[a].badge=e.result[i].quantity);t("log",n.funcModules," at pages/flow/myflowwill/myflowwill.vue:135")},failCallBack:function(t){print(t)}})},finish:function(t){uni.redirectTo({url:"../../index/index"})}}};e.default=s}).call(this,n("0de9")["log"])},"3c65":function(t,e,n){var a=n("41aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("427fb00a",a,!0,{sourceMap:!1,shadowMode:!1})},"41aa":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".hourLine[data-v-5a81869f]{height:%?1?%;width:100%;background-color:grey;margin-left:%?10?%;margin-right:%?10?%}",""]),t.exports=e},"46b8":function(t,e,n){"use strict";var a=n("d726"),i=n.n(a);i.a},6906:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-status-bar[data-v-9ed8e8da]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},"6bd2":function(t,e,n){"use strict";n.r(e);var a=n("11cb"),i=n("c5ea");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("74c3");var o,l=n("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"5a81869f",null,!1,a["a"],o);e["default"]=u.exports},"74c3":function(t,e,n){"use strict";var a=n("3c65"),i=n.n(a);i.a},"945a":function(t,e,n){"use strict";var a={uniStatusBar:n("f977").default,uniIcons:n("afac").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},a0c9:function(t,e,n){"use strict";var a=n("f45a"),i=n.n(a);i.a},a69e:function(t,e,n){"use strict";n.r(e);var a=n("945a"),i=n("ef56");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("46b8");var o,l=n("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"4b994f89",null,!1,a["a"],o);e["default"]=u.exports},b089:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-nav-bar-text[data-v-4b994f89]{\n\n\nfont-size:%?32?%\n}.uni-nav-bar-right-text[data-v-4b994f89]{font-size:%?28?%}.uni-navbar__content[data-v-4b994f89]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-4b994f89]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-4b994f89]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-4b994f89]{height:44px}.uni-navbar--fixed[data-v-4b994f89]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-4b994f89]{\n-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-4b994f89]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},c5ea:function(t,e,n){"use strict";n.r(e);var a=n("1df9"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c8d4:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},d726:function(t,e,n){var a=n("b089");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7d33a4b4",a,!0,{sourceMap:!1,shadowMode:!1})},dbee:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f977")),r=a(n("afac")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},e279:function(t,e,n){"use strict";n.r(e);var a=n("e40f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},e40f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=i},ef56:function(t,e,n){"use strict";n.r(e);var a=n("dbee"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},f45a:function(t,e,n){var a=n("6906");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5d219870",a,!0,{sourceMap:!1,shadowMode:!1})},f977:function(t,e,n){"use strict";n.r(e);var a=n("c8d4"),i=n("e279");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a0c9");var o,l=n("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"9ed8e8da",null,!1,a["a"],o);e["default"]=u.exports}}]);