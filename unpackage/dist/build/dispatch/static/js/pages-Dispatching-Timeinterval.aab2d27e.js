(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Dispatching-Timeinterval"],{"195e":function(t,e,n){"use strict";n.r(e);var i=n("be0f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"1b8e":function(t,e,n){"use strict";n.r(e);var i=n("ca21"),a=n("195e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("280a");var r,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"3879fa5b",null,!1,i["a"],r);e["default"]=s.exports},"280a":function(t,e,n){"use strict";var i=n("7e26"),a=n.n(i);a.a},5738:function(t,e,n){"use strict";var i=n("ee27");n("a15b"),n("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("1b8e")),o=n("8a5b"),r=n("60aa"),l=(n("586b"),{data:function(){return{cmdType:"0",lineCode:"",begTime:"",endTime:"",searchCmdType:"0",showUpData:!1,nowType:0,nowData:!1,nowColumn:!1,nowHtml:"",myDebounce:this.debounce(this.setTable),selectContent:[{id:"",textAlign:"",titleTextAlign:"",tableData:"selectData",columns:"selectColumns",stickSide:!1,showBottomSum:!1,emptyText:!1,tableHeight:!1,showSelect:!0,html:"selectHtml"}],singleSelect:!0,selectData:[],selectColumns:[{title:"车号",key:"busCode",width:400},{title:"发车时间",key:"planeTime",width:300},{title:"发车类型",key:"cmdTypeName",width:300}],selectHtml:"<z-table showSelect :singleSelect='singleSelect' :tableData='selectData' :columns='selectColumns' @onSelect='tableSelect'></z-table>"}},components:{zTable:a.default},watch:{nowType:{handler:function(){this.nowData=!1,this.nowColumn=!1,this.myDebounce()},immediate:!0}},onLoad:function(t){this.lineCode=t.lineCode,this.begTime=t.begTime,this.endTime=t.endTime,this.cmdType=t.cmdType},onShow:function(){this.sendDataRequest()},methods:{setTable:function(){this.nowData=this.$data[this.selectContent[this.nowType].tableData],this.nowColumn=this.$data[this.selectContent[this.nowType].columns],this.nowHtml=this.$data[this.selectContent[this.nowType].html],console.log(this.nowHtml)},debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=null;return function(){n&&clearTimeout(n),n=setTimeout(t,e)}},tableSelect:function(t){var e=t.join(","),n=this.selectData[e],i=getCurrentPages(),a=(i[i.length-1],i[i.length-2]);console.log(i.length),console.log(i),console.log(a.$vm.sltTime),a.$vm.sltTime=n.planBegin,console.log(n.planBegin),uni.navigateBack({})},sendDataRequest:function(){var t=this;console.log("开始请求"),o.sendGetRequestJson({url:r.getLineRealTime,data:{lineCode:this.lineCode},successCallBack:function(e){console.log("res"),console.log(e);for(var n=new Array,i=0;i<e.length;i++){var a=e[i];if((0==t.cmdType||t.cmdType==a.cmdType)&&((2==a.cmdType||3==a.cmdType)&&a.planBegin>t.begTime&&a.planBegin<t.endTime)){2==a.cmdType?a.cmdTypeName="主站到副站":3==a.cmdType&&(a.cmdTypeName="副站到主站");var o=a.planBegin;console.log("planeTime",o),a.planeTime=o.slice(0,2)+":"+o.slice(0,2),console.log("map.planeTime",a.planeTime),n.push(a)}}t.selectData=n},failCallBack:function(){}})}}});e.default=l},"586b":function(t,e,n){function i(t,e){var n=new RegExp(e),i=n.test(t);return i}n("4d63"),n("ac1f"),n("25f0");var a="2",o="1",r="20623",l="10142",s="20638",c="10145",d="20671",f="10146",u="20637",b="10141",h="20679",p="10147",v="20635",g="10148",m="20633",w="10149",y="20628",x="10143",k="20684",z="10150",T="20632",S="10151",C="20634",D="10144";t.exports={write:a,read:o,userCarDefId:r,userCarFormDefId:l,maintainCarDefId:s,maintainCarFormDefId:c,receptionDefId:d,receptionFormDefId:f,receptionDiningDefId:u,receptionDiningFormDefId:b,assetPurchaseDefId:h,assetPurchaseFormDefId:p,assetDisposalDefId:v,assetDisposalFormDefId:g,contractDigningDefId:m,contractDigningFormDefId:w,mettingHomeDefId:y,mettingHomeFormDefId:x,mettingLeaveDefId:k,mettingLeaveFormDefId:z,signatureDefId:T,signatureFormDefId:S,workPuechaseDefId:C,workPuechaseFormDefId:D,testString:i}},"5efd":function(t,e,n){"use strict";n.r(e);var i=n("5738"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},6062:function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),o=n("e2cc"),r=n("0366"),l=n("19aa"),s=n("2266"),c=n("7dd0"),d=n("2626"),f=n("83ab"),u=n("f183").fastKey,b=n("69f3"),h=b.set,p=b.getterFor;t.exports={getConstructor:function(t,e,n,c){var d=t((function(t,i){l(t,d,e),h(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=i&&s(i,t[c],t,n)})),b=p(e),v=function(t,e,n){var i,a,o=b(t),r=g(t,e);return r?r.value=n:(o.last=r={index:a=u(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=r),i&&(i.next=r),f?o.size++:t.size++,"F"!==a&&(o.index[a]=r)),t},g=function(t,e){var n,i=b(t),a=u(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(d.prototype,{clear:function(){var t=this,e=b(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=b(e),i=g(e,t);if(i){var a=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==i&&(n.first=a),n.last==i&&(n.last=o),f?n.size--:e.size--}return!!i},forEach:function(t){var e,n=b(this),i=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),o(d.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),f&&i(d.prototype,"size",{get:function(){return b(this).size}}),d},setStrong:function(t,e,n){var i=e+" Iterator",a=p(e),o=p(i);c(t,e,(function(t,e){h(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(e)}}},"6fc0":function(t,e,n){"use strict";n.r(e);var i=n("f525"),a=n("5efd");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("802dd");var r,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"2cbcc1fe",null,!1,i["a"],r);e["default"]=s.exports},"7e26":function(t,e,n){var i=n("fe8c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6e2bd632",i,!0,{sourceMap:!1,shadowMode:!1})},"802dd":function(t,e,n){"use strict";var i=n("f976"),a=n.n(i);a.a},"8dc6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-2cbcc1fe]{padding:%?20?%;font-size:%?24?%;background:#fffff}.logo[data-v-2cbcc1fe]{display:block;height:%?144?%;width:%?144?%;margin:0 auto;margin-top:%?50?%}.version[data-v-2cbcc1fe]{text-align:center;color:#fff}.table[data-v-2cbcc1fe]{text-align:center}.title[data-v-2cbcc1fe]{margin-bottom:%?20?%;font-size:%?24?%;color:#fff}.block-title[data-v-2cbcc1fe]{position:-webkit-sticky;position:sticky;top:var(--window-top);padding:%?40?% 0!important;text-align:center;background:#f7f9ff;z-index:99}.example-block[data-v-2cbcc1fe]{padding:%?20?%;margin:%?20?% %?-20?%;background:#f7f9ff}.example-title[data-v-2cbcc1fe]{font-size:%?30?%;font-weight:700;margin:%?30?% 0 %?10?%}.example-explain[data-v-2cbcc1fe]{font-size:%?24?%}.explain-title[data-v-2cbcc1fe]{margin-top:%?30?%;padding-bottom:%?10?%;font-size:%?28?%;border-bottom:solid %?2?% #ccc}.explain-context[data-v-2cbcc1fe]{margin-top:%?10?%;color:#8f8f94}.explain[data-v-2cbcc1fe]{display:-webkit-box;display:-webkit-flex;display:flex}.explain-text[data-v-2cbcc1fe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%}.codes[data-v-2cbcc1fe]{padding:%?20?%;background:#333;color:#fff;box-sizing:border-box}.codes uni-text[data-v-2cbcc1fe]{white-space:nowrap}.toggle-btn[data-v-2cbcc1fe]{margin:%?10?% 0;padding:10rex;color:#1c1}.select-btn[data-v-2cbcc1fe]{display:inline-block;width:%?200?%;margin-top:%?20?%;font-size:%?24?%}.type-select-box[data-v-2cbcc1fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?%;margin:0 %?-20?%;background:#f7f9ff}.type-select-box-title[data-v-2cbcc1fe]{width:100%;margin-bottom:%?20?%;font-size:%?36?%}.type-select-item[data-v-2cbcc1fe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?20?%;margin-right:%?10?%;margin-bottom:%?10?%;white-space:nowrap;border:solid %?2?% #066;border-radius:%?4?%;font-size:%?28?%;background:#fff;color:#066;text-align:center}",""]),t.exports=e},9129:function(t,e,n){var i=n("23e7");i({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,a=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"===typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{d=e.regeneratorRuntime=c?t.exports:{},d.wrap=y;var f="suspendedStart",u="suspendedYield",b="executing",h="completed",p={},v={};v[r]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==i&&a.call(m,r)&&(v=m);var w=T.prototype=k.prototype=Object.create(v);z.prototype=w.constructor=T,T.constructor=z,T[s]=z.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===z||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},d.awrap=function(t){return{__await:t}},S(C.prototype),C.prototype[l]=function(){return this},d.AsyncIterator=C,d.async=function(t,e,n,i){var a=new C(y(t,e,n,i));return d.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),w[s]="Generator",w[r]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},d.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return l.type="throw",l.arg=t,e.next=i,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],l=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:j(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),p}}}function y(t,e,n,i){var a=e&&e.prototype instanceof k?e:k,o=Object.create(a.prototype),r=new A(i||[]);return o._invoke=D(t,n,r),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function z(){}function T(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(n,i,o,r){var l=x(t[n],t,i);if("throw"!==l.type){var s=l.arg,c=s.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,r)}),(function(t){e("throw",t,o,r)})):Promise.resolve(c).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,r)}))}r(l.arg)}var n;function i(t,i){function a(){return new Promise((function(n,a){e(t,i,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=i}function D(t,e,n){var i=f;return function(a,o){if(i===b)throw new Error("Generator is already running");if(i===h){if("throw"===a)throw o;return P()}n.method=a,n.arg=o;while(1){var r=n.delegate;if(r){var l=L(r,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=b;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?h:u,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=h,n.method="throw",n.arg=s.arg)}}}function L(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=x(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(a.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a623:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").every,o=n("a640"),r=n("ae40"),l=o("every"),s=r("every");i({target:"Array",proto:!0,forced:!l||!s},{every:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},be0f:function(t,e,n){"use strict";var i=n("ee27");n("99af"),n("a623"),n("4160"),n("a630"),n("caad"),n("c975"),n("d81d"),n("4e82"),n("a9e3"),n("9129"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),o=(i(n("e143")),{data:function(){return{version:"1.1.0",nowSortKey:"",sortType:"desc",longTable:!0,lineHeight:uni.upx2px(64),tableLoaded:!1,tableShow:!0,selectAll:!1,selectArr:[]}},computed:{compluteHeight:function(){return this.tableHeight?"height: "+uni.upx2px(this.tableHeight)+"px":""}},props:{tableData:{type:[Array,Boolean],default:function(){return!1}},columns:{type:[Array,Boolean],required:!0},stickSide:{type:Boolean,default:!1},showBottomSum:{type:Boolean,default:!1},showLoading:{type:Boolean,default:!0},emptyText:{type:String,default:"暂无数据"},tableHeight:{type:[Number,Boolean],default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!1},textAlign:{type:String,default:"left"},titleTextAlign:{type:String,default:"left"}},mounted:function(){this.init()},watch:{columns:function(){this.init()},tableData:function(){this.init()}},methods:{init:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.selectAll=!1,t.selectArr=[],t.tableLoaded=!1,t.tableShow=!0,n=t,e.next=7,n.getPageSize(".z-table-container");case 7:return i=e.sent,e.next=10,n.getPageSize(".z-table-pack");case 10:a=e.sent,n.timer&&clearTimeout(n.timer),i&&a?(n.$nextTick((function(){n.tableData&&n.tableData.length&&(n.tableShow=!1,n.timer=setTimeout((function(){n.tableLoaded=!0}),300))})),i.height!=a.height?n.longTable=!0:n.longTable=!1):(n.tableLoaded=!1,n.$nextTick((function(){n.tableShow=!0})));case 13:case"end":return e.stop()}}),e)})))()},getPageSize:function(t){var e=uni.createSelectorQuery().in(this);return new Promise((function(n,i){e.select(t).boundingClientRect((function(t){n(t)})).exec()}))},dosum:function(t){var e="-";return this.tableData&&this.tableData.every((function(e){return!Number.isNaN(e[t]-0)}))&&(e=0,this.tableData.map((function(n,i){if(t||0==i){var a=n[t]-0;Number.isNaN(a)?e+=0:e+=a}else e="-"}))),this.numTransform(e)},getRowContent:function(t,e){var n="",i=t[e.key];if([null,""].includes(i)&&(i="-"),i||0===i)n=i;else if(e.format){var a=e.format.template;e.format.names.map((function(e){var n=new RegExp("#".concat(e,"#"),"mg");a=a.replace(n,t[e])})),n=a}else if(!e.render){var o=new Error("数据的key或format值至少一个不为空");throw o}return n.toString()},sort:function(t,e){t&&this.columns[e].sort&&(t!=this.nowSortKey?(this.nowSortKey=t,this.sortType="desc"):this.toggleSort(),this.$emit("onSort",{key:this.nowSortKey,type:this.sortType}))},toggleSort:function(){this.sortType="asc"==this.sortType?"desc":"asc"},numTransform:function(t){return t.toString()},resetSort:function(){this.nowSortKey="",this.sortType="desc"},setUrl:function(t,e){if(e.isLink){var n={},i=e.isLink,a=i.url,o=i.params,r=void 0===o?[]:o;return r.forEach((function(e){if(~e.indexOf("|")){var i=e.split("|");n[i[0]]=t[i[1]]}else n[e]=t[e]})),a=this.setUrlParams(a,n),a}},setUrlParams:function(t,e){var n=t,i=Object.keys(e);return i.forEach((function(t){n+="&".concat(t,"=").concat(e[t])})),n=n.replace(/\&/,"?"),n},itemClick:function(t,e){e.listenerClick&&this.$emit("onClick",t)},doSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=new Set;if(t){if(!this.selectAll)for(var i=0;i<this.tableData.length;i++)n.add(i)}else this.selectArr.forEach((function(t){n.add(t)})),n.has(e)?n.delete(e):(this.singleSelect&&n.clear(),n.add(e));this.selectArr=Array.from(n),this.selectArr.length==this.tableData.length?this.selectAll=!0:this.selectAll=!1,this.$emit("onSelect",this.selectArr)},getTitleText:function(t){var e=t;return e.toString()}}});e.default=o},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("d3b7"),n("e6cf");function i(t,e,n,i,a,o,r){try{var l=t[o](r),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(i,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function l(t){i(r,a,o,l,s,"next",t)}function s(t){i(r,a,o,l,s,"throw",t)}l(void 0)}))}}},ca21:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"z-table"},[n("v-uni-view",{staticClass:"z-table-main",style:t.compluteHeight},[t.tableLoaded||t.tableData&&t.columns?t._e():n("v-uni-view",{class:["z-loading",{ztableLoading:t.tableShow}]},[n("v-uni-view",{staticClass:"z-loading-animate"})],1),n("v-uni-view",{staticClass:"z-table-container"},[n("v-uni-view",{staticClass:"z-table-pack"},[n("v-uni-view",{staticClass:"z-table-title"},t._l(t.columns,(function(e,i){return n("v-uni-view",{key:i,staticClass:"z-table-title-item",class:{"z-table-stick-side":t.stickSide&&0==i},style:{width:e.width?e.width+"rpx":"200rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sort(e.key,i)}}},[t.showSelect&&!t.singleSelect&&0===i?n("v-uni-view",{staticClass:"select-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doSelect(!0)}}},[n("v-uni-view",{class:["select-tip",{selected:t.selectAll}]})],1):t._e(),n("v-uni-view",{class:["z-table-col-text",{"text-left":"left"===t.titleTextAlign,"text-center":"center"===t.titleTextAlign,"text-right":"right"===t.titleTextAlign}]},[n("v-uni-view",{domProps:{innerHTML:t._s(t.getTitleText(e.title))}}),e.hasOwnProperty("key")&&e.hasOwnProperty("sort")&&t.tableData.length?n("v-uni-view",{staticClass:"sort"},[n("v-uni-view",{staticClass:"up-arrow",class:{action:t.nowSortKey==e.key&&"asc"==t.sortType}}),n("v-uni-view",{staticClass:"down-arrow",class:{action:t.nowSortKey==e.key&&"desc"==t.sortType}})],1):t._e()],1)],1)})),1),t.tableData.length?n("v-uni-view",{class:["table-container-box",{"short-table":!t.longTable&&t.showBottomSum}]},t._l(t.tableData,(function(e,i){return n("v-uni-view",{key:i,staticClass:"z-table-container-row",class:{"z-table-has-bottom":t.showBottomSum}},t._l(t.columns,(function(a,o){return n("v-uni-view",{key:o,class:["z-table-container-col",{"z-table-stick-side":t.stickSide&&0==o}],style:{width:a.width?a.width+"rpx":"200rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemClick(e,a)}}},[t.showSelect&&0===o?n("v-uni-view",{staticClass:"select-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doSelect(!1,i)}}},[n("v-uni-view",{class:["select-tip",{selected:t.selectArr.includes(i)}]})],1):t._e(),n("v-uni-view",{class:["z-table-col-text",{"text-left":"left"===t.textAlign,"text-center":"center"===t.textAlign,"text-right":"right"===t.textAlign}]},[a.isLink?0!=t.setUrl(e,a).indexOf("http")?n("router-link",{attrs:{to:t.setUrl(e,a)},domProps:{innerHTML:t._s(t.getRowContent(e,a))}}):a.isLink?n("a",{attrs:{href:t.setUrl(e,a)},domProps:{innerHTML:t._s(t.getRowContent(e,a))}}):t._e():n("v-uni-view",{domProps:{innerHTML:t._s(t.getRowContent(e,a))}})],1)],1)})),1)})),1):t._e(),t.showBottomSum&&t.tableData.length?n("v-uni-view",{class:["z-table-bottom",{"long-table":t.longTable}]},t._l(t.columns,(function(e,i){return n("v-uni-view",{key:i,staticClass:"z-table-bottom-col",class:{"z-table-stick-side":t.stickSide&&0==i},style:{width:e.width?e.width+"rpx":"200rpx"}},[n("v-uni-view",{staticClass:"z-table-bottom-text"},[n("v-uni-text",{class:{sum:0==i}},[t._v(t._s(0==i?"总计":t.dosum(e.key)))])],1)],1)})),1):t._e()],1)],1),t.tableData&&0==t.tableData.length&&!t.tableLoaded?n("v-uni-view",{staticClass:"table-empty"},[n("v-uni-view",{domProps:{innerHTML:t._s(t.showLoading?"":t.emptyText)}})],1):t._e()],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},f525:function(t,e,n){"use strict";var i={zTable:n("1b8e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"example-block"},[n("v-uni-view",{staticClass:"table"},[n("z-table",{attrs:{titleTextAlign:t.selectContent[0].titleTextAlign,tableData:t.nowData,columns:t.nowColumn,stickSide:t.selectContent[0].stickSide,showBottomSum:t.selectContent[0].showBottomSum,showLoading:!1,emptyText:t.selectContent[0].emptyText,tableHeight:t.selectContent[0].tableHeight,singleSelect:t.singleSelect,showSelect:t.selectContent[0].showSelect},on:{onClick:function(e){arguments[0]=e=t.$handleEvent(e),t.rowClick.apply(void 0,arguments)},onSelect:function(e){arguments[0]=e=t.$handleEvent(e),t.tableSelect.apply(void 0,arguments)}}})],1),t.selectContent[0].showSelect?n("v-uni-button",{staticClass:"select-btn",attrs:{type:"primary"}},[t._v(t._s("确定"))]):t._e()],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},f976:function(t,e,n){var i=n("8dc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("44d5a4a8",i,!0,{sourceMap:!1,shadowMode:!1})},fe8c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 行为相关颜色 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */.navigator-hover[data-v-3879fa5b]{background:transparent;opacity:1}.z-table .sort .up-arrow[data-v-3879fa5b], .z-table .sort .up-arrow.action[data-v-3879fa5b], .z-table .sort .down-arrow[data-v-3879fa5b], .z-table .sort .down-arrow.action[data-v-3879fa5b]{content:"";height:0;width:0;overflow:hidden}a[data-v-3879fa5b]{text-decoration:none}.z-table[data-v-3879fa5b]{position:relative;display:inline-block;height:100%;min-height:%?130?%;width:100%;background:#fff;border:solid %?2?% #ccc;font-size:%?24?%;box-sizing:border-box;-webkit-transform:translateZ(0);transform:translateZ(0)}.z-table .z-table-main[data-v-3879fa5b]{height:100%;box-sizing:border-box}.z-table .z-table-container[data-v-3879fa5b]{height:100%;overflow:scroll;box-sizing:border-box}.z-table .z-table-pack[data-v-3879fa5b]{position:relative;min-height:100%;width:-webkit-fit-content;width:fit-content}.z-table .z-table-title[data-v-3879fa5b]{position:-webkit-sticky;position:sticky;top:0;height:%?64?%;z-index:1}.z-table .z-table-title .z-table-title-item[data-v-3879fa5b]{border-bottom:solid %?1?% #dbdbdb;background:#f8f8f8}.z-table .z-table-title .z-table-stick-side[data-v-3879fa5b]{position:-webkit-sticky;position:sticky;top:0;left:0;border-right:solid %?1?% #dbdbdb;box-sizing:border-box}.z-table .table-container-box.short-table[data-v-3879fa5b]{padding-bottom:%?48?%}.z-table .z-table-title[data-v-3879fa5b],\r\n.z-table .z-table-container-row[data-v-3879fa5b]{display:-webkit-box;display:-webkit-flex;display:flex;width:-webkit-fit-content;width:fit-content;white-space:nowrap;box-sizing:border-box}.z-table .z-table-title .z-table-title-item[data-v-3879fa5b],\r\n.z-table .z-table-title .z-table-container-col[data-v-3879fa5b],\r\n.z-table .z-table-container-row .z-table-title-item[data-v-3879fa5b],\r\n.z-table .z-table-container-row .z-table-container-col[data-v-3879fa5b]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;padding:0 %?16?%;height:%?64?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?64?%;box-sizing:border-box}.z-table .z-table-container-row[data-v-3879fa5b]{z-index:0;border-bottom:solid %?1?% #f4f4f4;box-sizing:border-box}.z-table .z-table-stick-side[data-v-3879fa5b]{position:-webkit-sticky;position:sticky;left:0;background:#f7f9ff;border-right:solid %?1?% #dbdbdb;box-sizing:border-box}.z-table .z-table-bottom[data-v-3879fa5b]{position:absolute;bottom:0;z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;justify-items:center;width:-webkit-fit-content;width:fit-content;background:#4298f7!important;color:#fff!important;white-space:nowrap;box-sizing:border-box}.z-table .z-table-bottom.long-table[data-v-3879fa5b]{position:-webkit-sticky;position:sticky}.z-table .z-table-bottom .z-table-stick-side[data-v-3879fa5b]{background:#4298f7!important;box-sizing:border-box}.z-table .z-table-bottom .z-table-bottom-col[data-v-3879fa5b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;padding:%?16?%;box-sizing:border-box}.z-table .z-table-bottom .z-table-bottom-text[data-v-3879fa5b]{line-height:100%;box-sizing:border-box}.z-table .z-table-bottom .z-table-bottom-text-title[data-v-3879fa5b]{margin-bottom:%?10?%;font-size:%?22?%;color:#aad0ff;box-sizing:border-box}.z-table .z-table-bottom .sum[data-v-3879fa5b]{margin-left:%?14?%;font-size:%?28?%;box-sizing:border-box}.z-table .table-empty[data-v-3879fa5b]{position:absolute;top:%?64?%;height:%?64?%;line-height:%?64?%;width:100%;text-align:center}.z-table .sort[data-v-3879fa5b]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?5?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.z-table .sort .up-arrow[data-v-3879fa5b]{border-bottom:%?10?% solid #ccc;border-left:%?10?% dashed transparent;border-right:%?10?% dashed transparent;border-top:0;display:block;margin-bottom:%?5?%}.z-table .sort .up-arrow.action[data-v-3879fa5b]{border-bottom:%?10?% solid #4298f7;border-left:%?10?% dashed transparent;border-right:%?10?% dashed transparent;border-top:0}.z-table .sort .down-arrow[data-v-3879fa5b]{border-top:%?10?% solid #ccc;border-left:%?10?% dashed transparent;border-right:%?10?% dashed transparent;border-bottom:0;display:block}.z-table .sort .down-arrow.action[data-v-3879fa5b]{border-top:%?10?% solid #4298f7;border-left:%?10?% dashed transparent;border-right:%?10?% dashed transparent;border-bottom:0}.z-table .z-loading[data-v-3879fa5b]{position:absolute;top:0;left:0;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;width:100%;background:#fff;opacity:0;-webkit-transition:all .3s;transition:all .3s}.z-table .z-loading.ztableLoading[data-v-3879fa5b]{opacity:1}.z-table .z-loading .z-loading-animate[data-v-3879fa5b]{position:relative;display:inline-block;width:%?30?%;height:%?30?%;margin-right:%?20?%;border-radius:100%;border:solid %?6?% #ccc;vertical-align:middle;-webkit-animation:rotate-data-v-3879fa5b 1s ease-in-out infinite;animation:rotate-data-v-3879fa5b 1s ease-in-out infinite}.z-table .z-loading .z-loading-animate[data-v-3879fa5b]::after{content:"";display:block;position:absolute;top:%?-10?%;z-index:1;background:#fff;width:%?20?%;height:%?20?%;border-radius:%?10?%}@-webkit-keyframes rotate-data-v-3879fa5b{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-3879fa5b{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.z-table .select-box[data-v-3879fa5b]{display:inline-block;width:%?26?%;height:%?26?%;line-height:%?14?%;margin-right:%?15?%;border:solid %?2?% #4298f7;border-radius:%?4?%;background:#fff;text-align:center}.z-table .select-tip[data-v-3879fa5b]{display:inline-block;opacity:0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s;transition:all .3s}.z-table .select-tip.selected[data-v-3879fa5b]{position:relative;top:%?4?%;left:%?-4?%;height:%?4?%;background:#4298f7;width:%?10?%;opacity:1;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.z-table .select-tip.selected[data-v-3879fa5b]:before, .z-table .select-tip.selected[data-v-3879fa5b]:after{content:"";position:absolute;display:block;height:%?4?%;background:#4298f7}.z-table .select-tip.selected[data-v-3879fa5b]:before{bottom:%?-2?%;left:%?-4?%;width:%?8?%;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.z-table .select-tip.selected[data-v-3879fa5b]:after{bottom:%?16?%;right:%?-16?%;width:%?34?%;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.z-table .z-table-col-text[data-v-3879fa5b]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-content:center;align-content:center}.z-table .z-table-col-text.text-center[data-v-3879fa5b]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.z-table .z-table-col-text.text-right[data-v-3879fa5b]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}',""]),t.exports=e}}]);