(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Operational_Indicators-Vehicle_Violation-Vehicle_Violation_Detail"],{"0d22":function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("09f3")),a=r(n("31c3")),l=r(n("4aaa")),u=r(n("1b66")),o={components:{tTable:i.default,tTh:a.default,tTr:l.default,tTd:u.default},data:function(){return{titleList:["线路","车号","驾驶员","时间","违规信息"],detailList:[{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"},{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"},{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"},{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"},{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"},{line:"91",number:"1010",dirver:"张三",time:"6:00",content:"超速行驶啦啊阿拉啦阿拉啦了阿拉啦阿拉"}]}}};e.default=o},"1dae":function(t,e,n){"use strict";n.r(e);var r=n("0d22"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"4c33":function(t,e,n){"use strict";n.r(e);var r=n("f7a8"),i=n("1dae");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var l,u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"f0b19280",null,!1,r["a"],l);e["default"]=o.exports},f7a8:function(t,e,n){"use strict";var r={tTable:n("09f3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-y":"true","show-scrollbar":"false"}},[n("t-table",{staticStyle:{width:"170%"},attrs:{border:"1","border-color":"#f5F5F5"}},[n("t-tr",{attrs:{"font-size":"16",color:"#00000"}},t._l(t.titleList,(function(e){return n("t-th",{key:e.index,staticStyle:{width:"50%"}},[t._v(t._s(e))])})),1),t._l(t.detailList,(function(e){return n("t-tr",{key:e.index,attrs:{"font-size":"15",color:"#000000"}},[n("t-td",[t._v(t._s(e.line))]),n("t-td",[t._v(t._s(e.number))]),n("t-td",[t._v(t._s(e.dirver))]),n("t-td",[t._v(t._s(e.time))]),n("t-td",[t._v(t._s(e.content))])],1)}))],2)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))}}]);