(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-flowitem-overflow-maintainCar-maintainCarDetail"],{"02f9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},1278:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("db11")),o=n(i("e6e1")),r=n(i("afac")),l="",c=i("1a7b"),s=i("8a5b"),d=i("60aa"),b=(i("586b"),{components:{uniSection:a.default,uniPopup:o.default,uniIcons:r.default},data:function(){return{index:0,type:"",carNo:"",date:c.getDay(),person:"",mile:"",money:"",address:"",project:"",memo:"",bgsyj:"",zjlyj:"",visition:!1}},onLoad:function(e){l=e.runId,this.getmaintainCarDetail()},methods:{getmaintainCarDetail:function(e){var t=this;s.sendGetRequestJson({url:d.overflowdetail,data:{runId:l},successCallBack:function(e){console.log(e),t.carNo=e.mainform[0].ch,t.date=e.mainform[0].wxsj,t.person=e.mainform[0].sqr,t.mile=e.mainform[0].xslc,t.money=e.mainform[0].ysje,t.address=e.mainform[0].wxdd,t.project=e.mainform[0].wxxm,t.memo=e.mainform[0].beizhu,""!=e.mainform[0].bgsyj&&(t.bgsyj=JSON.parse(e.mainform[0].bgsyj)[0].v),""!=e.mainform[0].zjlyj&&(t.zjlyj=JSON.parse(e.mainform[0].zjlyj)[0].v)},failCallBack:function(e){print(e),console.log(e)}})}}});t.default=b},1778:function(e,t,i){"use strict";i.r(t);var n=i("1278"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"2db8":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#EFEFF4"}},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("公务车号*:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入公务车号",type:"idcard"},model:{value:e.carNo,callback:function(t){e.carNo=t},expression:"carNo"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("申请时间:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请选择申请时间",type:"text"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("申请人:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请选择申请人",type:"button"},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("行驶里程*:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入行驶里程",type:"digit"},model:{value:e.mile,callback:function(t){e.mile=t},expression:"mile"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("预算金额*:")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入预算金额",type:"digit"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("维修地点*:")]),i("v-uni-input",{staticClass:"input",attrs:{"auto-height":!0,placeholder:"请输入维修地点","placeholder-style":"lineHeight:150rpx",type:"text"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("维修项目*:")]),i("v-uni-input",{staticClass:"input",attrs:{"auto-height":!0,placeholder:"请输入维修项目","placeholder-style":"lineHeight:150rpx",type:"text"},model:{value:e.project,callback:function(t){e.project=t},expression:"project"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemNamearea",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e._v("项目备注*:")]),i("v-uni-input",{staticClass:"input",attrs:{"auto-height":!0,placeholder:"请输入项目备注","placeholder-style":"lineHeight:150rpx",type:"text"},model:{value:e.memo,callback:function(t){e.memo=t},expression:"memo"}})],1),i("v-uni-view",{staticClass:"vText"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("办公室:")]),i("v-uni-input",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.bgsyj,callback:function(t){e.bgsyj=t},expression:"bgsyj"}})],1),i("v-uni-view",{staticClass:"hourLine"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"itemName"},[e._v("总经理:")]),i("v-uni-input",{staticClass:"input",attrs:{"auto-height":!0},model:{value:e.zjlyj,callback:function(t){e.zjlyj=t},expression:"zjlyj"}})],1),i("v-uni-view",{staticClass:"hourLine"})],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},5785:function(e,t,i){"use strict";var n=i("b022"),a=i.n(n);a.a},"619b":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-bae7e054]{min-height:100%;height:auto}.item[data-v-bae7e054]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;min-height:%?100?%}.hourLine[data-v-bae7e054]{height:%?1?%;width:100%;background-color:grey;margin-left:%?10?%;margin-right:%?10?%}.itemName[data-v-bae7e054]{height:%?100?%;min-width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;margin-left:%?10?%;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?150?%}.itemNamearea[data-v-bae7e054]{height:%?150?%;width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:auto;margin-left:%?10?%;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?150?%}.inputarea[data-v-bae7e054]{display:block;width:auto;height:-webkit-max-content;height:max-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;auto-height:true;min-height:%?55?%}.itemValue[data-v-bae7e054]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;position:relative}.input[data-v-bae7e054]{font-size:%?30?%;display:inline-block;text-align:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;margin-left:%?15?%}.t-header[data-v-bae7e054]{height:%?120?%;border-bottom:grey %?0.5?% solid;border-right:grey %?0.5?% solid;border-top:grey %?0.5?% solid;background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?120?%;font-size:%?30?%}.text[data-v-bae7e054]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;color:#dc3545;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;border-bottom:#000 solid %?1?%}.text1[data-v-bae7e054]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left;border-bottom:#000 solid %?1?%}.vText[data-v-bae7e054]{height:%?45?%;width:100%;background-color:#d0dee5}.v-group[data-v-bae7e054]{min-height:%?100?%;display:inline-block}.radiogroup[data-v-bae7e054]{min-height:%?100?%;display:inline-block;font-size:%?30?%;display:inline-block;text-align:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:%?15?%;line-height:%?100?%}.btn[data-v-bae7e054]{margin:%?50?%;background-color:#007aff;color:#fff}.lineP[data-v-bae7e054]{width:%?0?%;height:%?0?%}\r\n\r\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-bae7e054]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-bae7e054]{font-size:14px;line-height:inherit}.example[data-v-bae7e054]{padding:0 15px 15px}.example-info[data-v-bae7e054]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-bae7e054]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-bae7e054]{padding:0 15px}.example-info[data-v-bae7e054]{\r\ndisplay:block;\r\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-bae7e054]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-bae7e054]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-bae7e054]{font-size:18px;color:#fff}.word-btn[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-bae7e054]{background-color:#4ca2ff}.example-body[data-v-bae7e054]{\r\ndisplay:block;\r\npadding:5px 15px}.button[data-v-bae7e054]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:10px 0}.popup-content[data-v-bae7e054]{\r\ndisplay:block;\r\nbackground-color:#fff;padding:15px;font-size:14px}\r\n\r\n/* 提示窗口 */.uni-tip[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\npadding:15px;width:300px;background-color:#fff;border-radius:10px}.uni-tip-title[data-v-bae7e054]{margin-bottom:10px;text-align:center;font-weight:700;font-size:16px;color:#333}.uni-tip-content[data-v-bae7e054]{\r\n\t/* padding: 15px;\r\n  */font-size:14px;color:#666}.uni-tip-group-button[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-bae7e054]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:14px;color:#3b4144}\r\n\r\n/* 插屏广告 */.uni-image[data-v-bae7e054]{position:relative}.image[data-v-bae7e054]{width:200px;height:200px}.uni-image-close[data-v-bae7e054]{margin-top:20px;text-align:center}\r\n\r\n/* 底部分享 */.uni-share[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\nbackground-color:#fff}.uni-share-title[data-v-bae7e054]{line-height:%?60?%;font-size:%?24?%;padding:%?15?% 0;text-align:center}.uni-share-content[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:15px}.uni-share-content-box[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%}.uni-share-content-image[data-v-bae7e054]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?60?%;height:%?60?%;overflow:hidden;border-radius:%?10?%}.content-image[data-v-bae7e054]{width:%?60?%;height:%?60?%}.uni-share-content-text[data-v-bae7e054]{font-size:%?26?%;color:#333;padding-top:5px;padding-bottom:10px}.uni-share-btn[data-v-bae7e054]{height:%?90?%;line-height:%?90?%;font-size:14px;border-top-color:#f5f5f5;border-top-width:1px;border-top-style:solid;text-align:center;color:#666}body.?%PAGE?%[data-v-bae7e054]{background-color:#efeff4}",""]),e.exports=t},"61b1":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-section[data-v-202c18ed]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-202c18ed]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-202c18ed]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-202c18ed]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-202c18ed]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-202c18ed]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-202c18ed]{font-size:%?34?%;color:#333}.distraction[data-v-202c18ed]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-202c18ed]{font-size:%?24?%;color:#999}',""]),e.exports=t},"6d40":function(e,t,i){"use strict";var n=i("e8e6"),a=i.n(n);a.a},"6fc3":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section"},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},b022:function(e,t,i){var n=i("619b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("16720f49",n,!0,{sourceMap:!1,shadowMode:!1})},caa0:function(e,t,i){"use strict";i.r(t);var n=i("02f9"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},db11:function(e,t,i){"use strict";i.r(t);var n=i("6fc3"),a=i("caa0");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("6d40");var r,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"202c18ed",null,!1,n["a"],r);t["default"]=c.exports},e8e6:function(e,t,i){var n=i("61b1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("49d84534",n,!0,{sourceMap:!1,shadowMode:!1})},edd5:function(e,t,i){"use strict";i.r(t);var n=i("2db8"),a=i("1778");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("5785");var r,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"bae7e054",null,!1,n["a"],r);t["default"]=c.exports}}]);