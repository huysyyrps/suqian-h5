//固定资产处置审批表
<template>
	<view style="background-color: #EFEFF4;">
	<!-- 	<view class="item">
			<text class="itemName">经办人:</text>
			<input class="input" placeholder="请选择经办人" v-model="person" type="button" />
		</view>
		<view class="hourLine"></view> -->

		<view class="item">
			<text class="itemName">申请部门:</text>
			<input class="input" placeholder="请选择申请部门" v-model="department" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<input class="input" placeholder="请选择申请时间" v-model="date" type="text" />
		</view>
			
		<scroll-view :scroll-x="true" >
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<text class="t-header" style="width: 200rpx;display:inline-block;">资产编码:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">资产名称:</text>
				<text class="t-header" style="width: 200rpx;display:inline-block;">规格型号:</text>
				<text class="t-header" style="width: 100rpx;display:inline-block;">单位:</text>
				<text class="t-header" style="width: 150rpx;display:inline-block;">申购数量:</text>
				<text class="t-header" style="width: 200rpx;display:inline-block;">预算单价:</text>
				<text class="t-header" style="width: 300rpx;display:inline-block;">合计:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">购置日期:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">存放地点:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">已提折旧:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">资产净值:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">处置原因:</text>
				<text class="t-header" style="width: 400rpx;display:inline-block;">备注:</text>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit1" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num1" type="number" @input="nAllMoney1" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money1" type="number" @input="mAllMoney1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney1" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo1" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit2" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num2" type="number" @input="nAllMoney2" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money2" type="number" @input="mAllMoney2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney2" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo2" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit3" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num3" @input="nAllMoney3" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money3" @input="mAllMoney3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney3" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo3" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit4" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num4" @input="nAllMoney4" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money4" @input="mAllMoney4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney4" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo4" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit5" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num5" @input="nAllMoney5" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money5" @input="mAllMoney5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney5" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo5" style="width: 400rpx;display:inline-block;"/>
			</view>
		</scroll-view>

		<view class="vText"></view>
		<view class="item">
			<text class="itemName" >申请部门:</text>
			<input class="input" :auto-height="true" v-model="sgbm" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >财务部:</text>
			<input class="input" :auto-height="true" v-model="cwbyj"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >分管领导:</text>
			<input class="input" :auto-height="true" v-model="fgld"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >主要领导:</text>
			<input class="input" :auto-height="true" v-model="zyld"  />
		</view>
		<view class="hourLine"></view>
	</view>
</template>

<script>
var runID = '';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
var dateJSOB = require('../../../../../common/js/hy-date.js');
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
export default {
	components: { uniSection, uniPopup, uniIcons },
	data() {
		return {
			index: 0,
			type: '',
			person: '',
			department: '',
			date: dateJSOB.getDay(),
			allMoney: '',
			reason: '',
			xh1:'',
			xh2:'',
			xh3:'',
			xh4:'',
			xh5:'',
			name1:'',
			name2:'',
			name3:'',
			name4:'',
			name5:'',
			type1:'',
			type2:'',
			type3:'',
			type4:'',
			type5:'',
			unit1:'',
			unit2:'',
			unit3:'',
			unit4:'',
			unit5:'',
			num1:'',
			num2:'',
			num3:'',
			num4:'',
			num5:'',
			money1:'',
			money2:'',
			money3:'',
			money4:'',
			money5:'',
			allmoney1:'',
			allmoney2:'',
			allmoney3:'',
			allmoney4:'',
			allmoney5:'',
			date1:'',
			date2:'',
			date3:'',
			date4:'',
			date5:'',
			address1:'',
			address2:'',
			address3:'',
			address4:'',
			address5:'',
			ytzj1:'',
			ytzj2:'',
			ytzj3:'',
			ytzj4:'',
			ytzj5:'',
			zcjz1:'',
			zcjz2:'',
			zcjz3:'',
			zcjz4:'',
			zcjz5:'',
			reason1:'',
			reason2:'',
			reason3:'',
			reason4:'',
			reason5:'',
			memo1:'',
			memo2:'',
			memo3:'',
			memo4:'',
			memo5:'',
			sgbm:'',
			cwbyj: '',
			fgld: '',
			zyld: '',
		};
	},
	onLoad(options) {
		runID = options.runId;
		console.log(runID);
		this.getUserCarFlowDetail();
	},
	methods: {
		getUserCarFlowDetail: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.overflowdetail, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					runId: runID,
				},
				successCallBack: function(data) {
					console.log(data);
					that.date = data.mainform[0].sqsj;
					that.person = data.mainform[0].sgr;
					that.department = data.mainform[0].bm;
					that.xh1 = data.mainform[0].zcbm1;
					that.xh2 = data.mainform[0].zcbm2;
					that.xh3 = data.mainform[0].zcbm3;
					that.xh4 = data.mainform[0].zcbm4;
					that.xh5 = data.mainform[0].zcbm5;
					that.name1 = data.mainform[0].zcmc1;
					that.name2 = data.mainform[0].zcmc2;
					that.name3 = data.mainform[0].zcmc3;
					that.name4 = data.mainform[0].zcmc4;
					that.name5 = data.mainform[0].zcmc5;
					that.type1 = data.mainform[0].ggxh1;
					that.type2 = data.mainform[0].ggxh2;
					that.type3 = data.mainform[0].ggxh3;
					that.type4 = data.mainform[0].ggxh4;
					that.type5 = data.mainform[0].ggxh5;
					that.unit1 = data.mainform[0].dw1;
					that.unit2 = data.mainform[0].dw2;
					that.unit3 = data.mainform[0].dw3;
					that.unit4 = data.mainform[0].dw4;
					that.unit5 = data.mainform[0].dw5;
					that.num1 = data.mainform[0].sl1;
					that.num2 = data.mainform[0].sl2;
					that.num3 = data.mainform[0].sl3;
					that.num4 = data.mainform[0].sl4;
					that.num5 = data.mainform[0].sl5;
					that.money1 = data.mainform[0].dj1;
					that.money2 = data.mainform[0].dj2;
					that.money3 = data.mainform[0].dj3;
					that.money4 = data.mainform[0].dj4;
					that.money5 = data.mainform[0].dj5;
					that.allmoney1 = data.mainform[0].je1;
					that.allmoney2 = data.mainform[0].je2;
					that.allmoney3 = data.mainform[0].je3;
					that.allmoney4 = data.mainform[0].je4;
					that.allmoney5 = data.mainform[0].je5;
					that.date1 = data.mainform[0].gzrq;
					that.date2 = data.mainform[0].gzrq2;
					that.date3 = data.mainform[0].gzrq3;
					that.date4 = data.mainform[0].gzrq4;
					that.date5 = data.mainform[0].gzrq5;
					that.address1 = data.mainform[0].cfdd1;
					that.address2 = data.mainform[0].cfdd2;
					that.address3 = data.mainform[0].cfdd3;
					that.address4 = data.mainform[0].cfdd4;
					that.address5 = data.mainform[0].cfdd5;
					that.ytzj1 = data.mainform[0].ytzj1;
					that.ytzj2 = data.mainform[0].ytzj2;
					that.ytzj3 = data.mainform[0].ytzj3;
					that.ytzj4 = data.mainform[0].ytzj4;
					that.ytzj5 = data.mainform[0].ytzj5;
					that.zcjz1 = data.mainform[0].zcjz;
					that.zcjz2 = data.mainform[0].zcjz2;
					that.zcjz3 = data.mainform[0].zcjz3;
					that.zcjz4 = data.mainform[0].zcjz4;
					that.zcjz5 = data.mainform[0].zcjz5;
					that.reason1 = data.mainform[0].czyy1;
					that.reason2 = data.mainform[0].czyy2;
					that.reason3 = data.mainform[0].czyy3;
					that.reason4 = data.mainform[0].czyy4;
					that.reason5 = data.mainform[0].czyy5;
					that.memo1 = data.mainform[0].bz1;
					that.memo2 = data.mainform[0].bz2;
					that.memo3 = data.mainform[0].bz3;
					that.memo4 = data.mainform[0].bz4;
					that.memo5 = data.mainform[0].bz5;
					if(data.mainform[0].sqbmyj!=""){
						that.sgbm = JSON.parse(data.mainform[0].sqbmyj)[0].v;
					}
					if(data.mainform[0].cwbyj!=""){
						that.cwbyj = JSON.parse(data.mainform[0].cwbyj)[0].v;
					}
					if(data.mainform[0].cwzjyj!=""){
						that.fgld = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					if(data.mainform[0].bgsyj!=""){
						that.zyld = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
				},
				failCallBack: function(e) {
					print(e);
					console.log(e);
				}
			});
		}
	}
};
</script>

<style>
@import '../../../../../common/css/itemName.css';
.btn {
	margin: 50rpx;
	background-color: #007aff;
	color: #ffffff;
}
.lineP {
	width: 0rpx;
	height: 0rpx;
}
.v-header{
	display: flex;
}
/* 头条小程序组件内不能引入字体 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('~@/static/uni.ttf') format('truetype');
}

/* #endif */

/* #ifndef APP-NVUE */
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}

view {
	font-size: 14px;
	line-height: inherit;
}

.example {
	padding: 0 15px 15px;
}

.example-info {
	padding: 15px;
	color: #3b4144;
	background: #ffffff;
}

.example-body {
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	font-size: 14px;
	background-color: #ffffff;
}

/* #endif */
.example {
	padding: 0 15px;
}

.example-info {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	padding: 15px;
	color: #3b4144;
	background-color: #ffffff;
	font-size: 14px;
	line-height: 20px;
}

.example-info-text {
	font-size: 14px;
	line-height: 20px;
	color: #3b4144;
}

.example-body {
	flex-direction: column;
	padding: 15px;
	background-color: #ffffff;
}

.word-btn-white {
	font-size: 18px;
	color: #ffffff;
}

.word-btn {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	height: 48px;
	margin: 15px;
	background-color: #007aff;
}

.word-btn--hover {
	background-color: #4ca2ff;
}

.example-body {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	padding: 5px 15px;
}

.button {
	flex: 1;
	margin: 10px 0;
}

.popup-content {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	background-color: #fff;
	padding: 15px;
	font-size: 14px;
}

/* 提示窗口 */
.uni-tip {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	padding: 15px;
	width: 300px;
	background-color: #fff;
	border-radius: 10px;
}

.uni-tip-title {
	margin-bottom: 10px;
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	color: #333;
}

.uni-tip-content {
	/* padding: 15px;
  */
	font-size: 14px;
	color: #666;
}

.uni-tip-group-button {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	margin-top: 20px;
}

.uni-tip-button {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #3b4144;
}

/* 插屏广告 */
.uni-image {
	position: relative;
}

.image {
	width: 200px;
	height: 200px;
}

.uni-image-close {
	margin-top: 20px;
	text-align: center;
}

/* 底部分享 */
.uni-share {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	background-color: #fff;
}

.uni-share-title {
	line-height: 60rpx;
	font-size: 24rpx;
	padding: 15rpx 0;
	text-align: center;
}

.uni-share-content {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px;
}

.uni-share-content-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	align-items: center;
	width: 200rpx;
}

.uni-share-content-image {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 60rpx;
	height: 60rpx;
	overflow: hidden;
	border-radius: 10rpx;
}

.content-image {
	width: 60rpx;
	height: 60rpx;
}

.uni-share-content-text {
	font-size: 26rpx;
	color: #333;
	padding-top: 5px;
	padding-bottom: 10px;
}

.uni-share-btn {
	height: 90rpx;
	line-height: 90rpx;
	font-size: 14px;
	border-top-color: #f5f5f5;
	border-top-width: 1px;
	border-top-style: solid;
	text-align: center;
	color: #666;
}
</style>
