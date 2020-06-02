//合同审批表
<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">申请人:</text>
			<input class="input" placeholder="请选择申请人" v-model="person" type="button" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请部门:</text>
			<input class="input" placeholder="请选择申请部门" v-model="department" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<input class="input" placeholder="请选择申请时间" v-model="date" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">合同名称*:</text>
			<input class="input" placeholder="请输入合同名称" v-model="contractName" type="idcard"/>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">选定方式*:</text>
			<input class="input" placeholder="请选择选定方式" v-model="found" type="text"/>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">合同类别*:</text>
			<input class="input" placeholder="请输入合同类别" v-model="contraType" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">用章单位*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入合同用章单位" v-model="yzDepartment" type="text" />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">合同金额*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入合同金额(大写)" v-model="money" type="text" />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">合同内容*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入合同主要内容" v-model="contraContent" type="text" />
		</view>
		<view class="vText"></view>
		<view class="item">
			<text class="itemName" >承办部门:</text>
			<input class="input" :auto-height="true" v-model="sgbm" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >分管领导:</text>
			<input class="input" :auto-height="true" v-model="fgld"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >财务部:</text>
			<input class="input" :auto-height="true" v-model="cwzj"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >总经理:</text>
			<input class="input" :auto-height="true" v-model="zjl"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >董事长:</text>
			<input class="input" :auto-height="true" v-model="dsz"  />
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
			contractName: '',
			found:'',
			contraType: '',
			yzDepartment: '',
			money: '',
			contraContent: '',
			sgbm:'',
			fgld: '',
			cwzj:'',
			zjl:'',
			dsz: '',
			visition:false
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
					that.person = data.mainform[0].sbbmfzr;
					that.department = data.mainform[0].sbbm;
					that.date = data.mainform[0].sbrq;
					that.contractName = data.mainform[0].sshtmc;
					that.found = data.mainform[0].xdfs;
					that.contraType = data.mainform[0].htlb;
					that.yzDepartment = data.mainform[0].htyzdw;
					that.money = data.mainform[0].htje;
					that.contraContent = data.mainform[0].hzzynr;
					
					
					if(data.mainform[0].sqbmyj!=""){
						that.sgbm = JSON.parse(data.mainform[0].sqbmyj)[0].v;
					}
					if(data.mainform[0].fgldyj!=""){
						that.fgld = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					if(data.mainform[0].cwbyj!=""){
						that.cwzj = JSON.parse(data.mainform[0].cwbyj)[0].v;
					}
					if(data.mainform[0].zjlyj!=""){
						that.zjl = JSON.parse(data.mainform[0].zjlyj)[0].v;
					}
					if(data.mainform[0].dszyj!=""){
						that.dsz = JSON.parse(data.mainform[0].dszyj)[0].v;
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
