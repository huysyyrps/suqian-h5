(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-flowitem-flowitem"],{"0731":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("08cd")),r=n(a("be66")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},"08cd":function(t,e,a){"use strict";a.r(e);var n=a("3661"),i=a("5b22");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("baed");var o,l=a("f0c5"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"5dd31d62",null,!1,n["a"],o);e["default"]=s.exports},1545:function(t,e,a){"use strict";a.r(e);var n=a("0731"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"1e39":function(t,e,a){"use strict";var n={"uni-status-bar":a("08cd").default,"uni-icons":a("be66").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-navbar"},[a("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?a("uni-status-bar"):t._e(),a("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[a("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?a("v-uni-view",{staticClass:"uni-navbar__content_view"},[a("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?a("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[a("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),a("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?a("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[a("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),a("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?a("v-uni-view",{staticClass:"uni-navbar__content_view"},[a("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?a("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[a("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?a("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?a("uni-status-bar"):t._e(),a("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},2258:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=i},"2eb5":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("87ad")),r=n(a("9881")),o=n(a("bc31")),l={components:{uniList:i.default,uniListItem:r.default,uniNavBar:o.default},data:function(){return{funcModules:[{show:!0,title:"公务用车申请表",imgUrl:"/static/flow/flow_item1.png",pageUrl:"overflow/userCarFlow/userCarFlow",badge:"0",showBadge:!1,type:"primary",tag:100001},{show:!0,title:"车辆维修审批单（小车）",imgUrl:"/static/flow/flow_item2.png",pageUrl:"overflow/maintainCar/maintainCar",badge:"99",showBadge:!1,type:"primary",tag:100002},{show:!0,title:"公务接待申请表",imgUrl:"/static/flow/flow_item4.png",pageUrl:"overflow/reception/reception",badge:"99",showBadge:!1,type:"primary",tag:100004},{show:!0,title:"公务用餐申请表",imgUrl:"/static/flow/flow_item5.png",pageUrl:"overflow/receptionDining/receptionDining",badge:"99",showBadge:!1,type:"primary",tag:100005},{show:!0,title:"固定资产采购申请表",imgUrl:"/static/flow/flow_item6.png",pageUrl:"overflow/assetPurchase/assetPurchase",badge:"99",showBadge:!1,type:"primary",tag:100006},{show:!0,title:"固定资产处置审批表",imgUrl:"/static/flow/flow_item7.png",pageUrl:"overflow/assetDisposal/assetDisposal",badge:"99",showBadge:!1,type:"primary",tag:100007},{show:!0,title:"合同审批表",imgUrl:"/static/flow/flow_item8.png",pageUrl:"overflow/contractSigning/contractSigning",badge:"99",showBadge:!1,type:"primary",tag:100008},{show:!0,title:"会议室使用申请单",imgUrl:"/static/flow/flow_item9.png",pageUrl:"overflow/mettingHome/mettingHome",badge:"99",showBadge:!1,type:"primary",tag:100009},{show:!0,title:"会议（活动）请假报备单",imgUrl:"/static/flow/flow_item10.png",pageUrl:"overflow/mettingLeaver/mettingLeaver",badge:"99",showBadge:!1,type:"primary",tag:100010},{show:!0,title:"签呈单",imgUrl:"/static/flow/flow_item11.png",pageUrl:"overflow/signature/signature",badge:"99",showBadge:!1,type:"primary",tag:100011},{show:!0,title:"办公用品申购单",imgUrl:"/static/flow/flow_item12.png",pageUrl:"overflow/workPuechase/workPuechase",badge:"99",showBadge:!1,type:"primary",tag:100012}]}},methods:{onClient:function(t){switch(console.log(t.tag),t.tag){case 100001:uni.navigateTo({url:t.pageUrl});break;case 100002:uni.navigateTo({url:t.pageUrl});break;case 100003:uni.navigateTo({url:t.pageUrl});break;case 100004:uni.navigateTo({url:t.pageUrl});break;case 100005:uni.navigateTo({url:t.pageUrl});break;case 100006:uni.navigateTo({url:t.pageUrl});break;case 100007:uni.navigateTo({url:t.pageUrl});break;case 100008:uni.navigateTo({url:t.pageUrl});break;case 100009:uni.navigateTo({url:t.pageUrl});break;case 100010:uni.navigateTo({url:t.pageUrl});break;case 100011:uni.navigateTo({url:t.pageUrl});break;case 100012:uni.navigateTo({url:t.pageUrl});break}},finish:function(t){uni.redirectTo({url:"../../index/index"})}}};e.default=l},3661:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},"4fa6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".hourLine[data-v-3420554a]{height:%?1?%;width:100%;background-color:grey;margin-left:%?10?%;margin-right:%?10?%}",""]),t.exports=e},"5b22":function(t,e,a){"use strict";a.r(e);var n=a("2258"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"893a":function(t,e,a){var n=a("e634");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2f2558bc",n,!0,{sourceMap:!1,shadowMode:!1})},baed:function(t,e,a){"use strict";var n=a("893a"),i=a.n(n);i.a},bc31:function(t,e,a){"use strict";a.r(e);var n=a("1e39"),i=a("1545");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f9c9");var o,l=a("f0c5"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"64a9a51a",null,!1,n["a"],o);e["default"]=s.exports},d3f9:function(t,e,a){var n=a("f35a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6b9f7ec2",n,!0,{sourceMap:!1,shadowMode:!1})},d59a:function(t,e,a){var n=a("4fa6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4d312253",n,!0,{sourceMap:!1,shadowMode:!1})},dba7:function(t,e,a){"use strict";var n={"uni-list":a("87ad").default,"uni-list-item":a("9881").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",t._l(t.funcModules,(function(e,n){return e.show?a("uni-list",{key:n,attrs:{index:n}},[a("uni-list-item",{attrs:{title:e.title,thumb:e.imgUrl,showArrow:!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClient(e)}}}),a("v-uni-view",{staticClass:"hourLine"})],1):t._e()})),1)},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},e365:function(t,e,a){"use strict";var n=a("d59a"),i=a.n(n);i.a},e634:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-status-bar[data-v-5dd31d62]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},e92c:function(t,e,a){"use strict";a.r(e);var n=a("dba7"),i=a("ff74");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("e365");var o,l=a("f0c5"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"3420554a",null,!1,n["a"],o);e["default"]=s.exports},f35a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-nav-bar-text[data-v-64a9a51a]{\n\n\nfont-size:%?32?%\n}.uni-nav-bar-right-text[data-v-64a9a51a]{font-size:%?28?%}.uni-navbar__content[data-v-64a9a51a]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-64a9a51a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-64a9a51a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-64a9a51a]{height:44px}.uni-navbar--fixed[data-v-64a9a51a]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-64a9a51a]{\n-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-64a9a51a]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},f9c9:function(t,e,a){"use strict";var n=a("d3f9"),i=a.n(n);i.a},ff74:function(t,e,a){"use strict";a.r(e);var n=a("2eb5"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);