(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Message-weixiu"],{"023c":function(t,n,e){"use strict";e.r(n);var r=e("bde7"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"0b2d":function(t,n,e){"use strict";var r=e("bf62"),a=e.n(r);a.a},"14d7":function(t,n,e){"use strict";var r=e("3b99"),a=e.n(r);a.a},"1d31":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:["c-avatar","circle"===t.shape?"circle":"square"===t.shape?"square":""],style:{width:t.size+"px",height:t.size+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}}},[""==t.text?e("v-uni-image",{staticClass:"img",attrs:{src:t.src,mode:"aspectFill"}}):e("v-uni-view",{staticClass:"text",style:{"line-height":t.size+"px"}},[t._v(t._s(t.text))])],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},"36ed":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */.c-avatar[data-v-61375f94]{overflow:hidden}.c-avatar .img[data-v-61375f94]{width:100%;height:100%}.c-avatar .text[data-v-61375f94]{width:100%;height:100%;text-align:center;background-color:#0082e6;color:#fff;font-size:16px}.circle[data-v-61375f94]{-webkit-border-radius:50%;border-radius:50%}.square[data-v-61375f94]{-webkit-border-radius:6px;border-radius:6px}',""]),t.exports=n},"3b99":function(t,n,e){var r=e("36ed");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("07d1114b",r,!0,{sourceMap:!1,shadowMode:!1})},"758b":function(t,n,e){"use strict";e.r(n);var r=e("d60a"),a=e("023c");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("0b2d");var s,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"608347be",null,!1,r["a"],s);n["default"]=o.exports},"9cbf":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"c-avatar",props:{src:{type:String,default:"/static/logo.png"},shape:{type:String,default:"circle"},text:{type:String,default:""},size:{type:Number,default:40}},data:function(){return{}},methods:{handleClick:function(){this.$emit("handleClick")}}};n.default=r},b3dd:function(t,n,e){"use strict";e.r(n);var r=e("9cbf"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},bde7:function(t,n,e){"use strict";var r=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("fb6e")),i=r(e("1ad1")),s=r(e("c5e9")),c=(e("8131"),{components:{cAvatar:a.default,cLabel:i.default,cUpload:s.default},data:function(){return{userInfo:{name:"车号",role_name:"123456"},form:{text:"",number:"",idcard:"",password:"",switch:!0,textarea:"",img:[],selector:"",half:"",date:"",yearMonth:"",dateTime:"",range:"",time:"",region:"",limit:"",limitHour:""}}},onNavigationBarButtonTap:function(t){},methods:{usetSet:function(){}}});n.default=c},bf62:function(t,n,e){var r=e("c967");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("6697858a",r,!0,{sourceMap:!1,shadowMode:!1})},c967:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */.apply_agree[data-v-608347be]{width:%?170?%;height:%?170?%}.iconSize_agree[data-v-608347be]{width:%?90?%;height:%?90?%}.bg-blue[data-v-608347be]{background-color:#007aff;width:30%;margin-top:%?100?%;color:#fff}.ffoot[data-v-608347be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}',""]),t.exports=n},d60a:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"flex justify-between"},[e("v-uni-view",{staticClass:"p-2",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"flex align-center"},[e("cAvatar",{staticClass:"text-cut",attrs:{shape:"circle",text:t.userInfo.name,size:50}}),e("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[e("v-uni-view",{staticClass:"font",staticStyle:{"line-height":"1.5"}},[t._v("车号：123122")]),e("v-uni-text",{staticClass:"font",staticStyle:{color:"#FF3030","line-height":"1.5"}},[t._v("待处理")])],1)],1),e("v-uni-view",{staticStyle:{width:"90%",height:"1rpx","background-color":"#EBEBEB","margin-left":"5%","margin-top":"10rpx"}}),e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-text",{staticClass:"mr-2",staticStyle:{color:"#9D9589"}},[t._v("计划ID：")]),e("v-uni-text",[t._v("13423378")])],1),e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-text",{staticClass:"mr-2",staticStyle:{color:"#9D9589"}},[t._v("驾驶员：")]),e("v-uni-text",[t._v("沙宝亮")])],1),e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-text",{staticClass:"mr-2",staticStyle:{color:"#9D9589"}},[t._v("时间：")]),e("v-uni-text",[t._v("0600")])],1),e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-text",{staticClass:"mr-2",staticStyle:{color:"#9D9589"}},[t._v("站点：")]),e("v-uni-text",[t._v("高等师范学校")])],1),e("v-uni-view",{staticClass:"mt-2"},[e("v-uni-text",{staticClass:"mr-2",staticStyle:{color:"#9D9589"}},[t._v("类型：")]),e("v-uni-text",[t._v("请求维修")])],1)],1)],1)],1),e("v-uni-view",{staticStyle:{width:"90%",height:"10rpx","background-color":"#EBEBEB","margin-left":"5%","margin-top":"10rpx"}}),e("cLabel",{attrs:{title:"意见",dataText:t.form.textarea,mode:"textarea",rightIcon:"cuIcon-close"},on:{handRight:function(n){arguments[0]=n=t.$handleEvent(n),t.handTextareaRight.apply(void 0,arguments)}},model:{value:t.form.textarea,callback:function(n){t.$set(t.form,"textarea",n)},expression:"form.textarea"}}),e("v-uni-view",{staticClass:"ffoot"},[e("v-uni-button",{staticClass:"bg-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handSubmit.apply(void 0,arguments)}}},[t._v("同意")]),e("v-uni-button",{staticClass:"bg-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handSubmit.apply(void 0,arguments)}}},[t._v("不同意")])],1)],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},fb6e:function(t,n,e){"use strict";e.r(n);var r=e("1d31"),a=e("b3dd");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("14d7");var s,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"61375f94",null,!1,r["a"],s);n["default"]=o.exports}}]);