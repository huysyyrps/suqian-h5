//签呈单
<template style="background-color: #EFEFF4;">
	<view>
		<!-- <view class="item">
			<text class="itemName">申请部门:</text>
			<input class="input" placeholder="请选择申请部门" v-model="department" type="text" />
		</view>
		<view class="hourLine"></view>
 -->
		<view class="item">
			<text class="itemName">申请时间:</text>
			<picker class="itemValue" mode="date" @change="bindDateChange"><input class="input" placeholder="请选择申请时间" v-model="date" type="text" /></picker>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">证明*:</text>
			<input class="input" placeholder="请输入证明" v-model="prove" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">经办*:</text>
			<input class="input" placeholder="请选输入经办" v-model="jb" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">内容*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入内容" v-model="Scontent" type="text" />
		</view>
		<view class="vText"></view>
		<view class="item">
			<text class="itemName">主要领导:</text>
			<input class="input" :auto-height="true" v-model="zjlyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">分管领导:</text>
			<input class="input" :auto-height="true" v-model="fgldyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">财务总监:</text>
			<input class="input" :auto-height="true" v-model="cwzjyj" />
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
			department: '',
			date: dateJSOB.getDay(),
			prove: '',
			jb: '',
			Scontent: '',
			flowAssignId: '',
			ecard: '',
			userCode: '',
			driver: '',
			bmfzryj: '',
			zjlyj: '',
			fgldyj: '',
			cwzjyj: ''
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
					runId: runID
				},
				successCallBack: function(data) {
					console.log(data);
					that.department = data.mainform[0].tbbm;
					that.date = data.mainform[0].sj;
					that.prove = data.mainform[0].zm;
					that.jb = data.mainform[0].jb;
					that.Scontent = data.mainform[0].neirong;

					if(data.mainform[0].zjlyj!=""){
						that.zjlyj = JSON.parse(data.mainform[0].zjlyj)[0].v;
					}
					if(data.mainform[0].fgldyj!=""){
						that.fgldyj = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					if(data.mainform[0].cwzjyj!=""){
						that.cwzjyj = JSON.parse(data.mainform[0].cwzjyj)[0].v;
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
