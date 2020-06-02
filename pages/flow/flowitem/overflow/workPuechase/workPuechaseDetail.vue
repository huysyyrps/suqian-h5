//固定资产采购
<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">经办人:</text>
			<input class="input" placeholder="请选择经办人" v-model="person" type="button" />
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

		<scroll-view :scroll-x="true">
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<text class="t-header" style="width: 400rpx;display:inline-block;">品名:</text>
				<text class="t-header" style="width: 100rpx;display:inline-block;">单位:</text>
				<text class="t-header" style="width: 150rpx;display:inline-block;">数量:</text>
				<text class="t-header" style="width: 200rpx;display:inline-block;">拟定金额:</text>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name1" style="width: 400rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="unit1" style="width: 100rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="num1" style="width: 150rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="money1" style="width: 200rpx;display:inline-block;" />
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name2" style="width: 400rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="unit2" style="width: 100rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="num2" style="width: 150rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="money2" style="width: 200rpx;display:inline-block;" />
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name3" style="width: 400rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="unit3" style="width: 100rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="num3" style="width: 150rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="money3" style="width: 200rpx;display:inline-block;" />
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name4" style="width: 400rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="unit4" style="width: 100rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="num4" style="width: 150rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="money4" style="width: 200rpx;display:inline-block;" />
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name5" style="width: 400rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="unit5" style="width: 100rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="num5" style="width: 150rpx;display:inline-block;" />
				<input class="t-header" :maxlength="13" v-model="money5" style="width: 200rpx;display:inline-block;" />
			</view>
		</scroll-view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">用途*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入用途" placeholder-style="lineHeight:150rpx" v-model="user" type="text" />
		</view>
		<view class="vText"></view>

		<view class="item">
			<text class="itemName">办公室:</text>
			<input class="input" :auto-height="true" v-model="bgsyj" />
			<!-- <textarea class="input" v-if="bmfzrRemote == write" :auto-height="true" v-model="bmfzryj" style="padding-top: 30rpx; padding-left: 25rpx;" /> -->
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">财务部:</text>
			<input class="input" :auto-height="true" v-model="cwbyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">领导审批:</text>
			<input class="input" :auto-height="true" v-model="zjlyj" />
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
			name1: '',
			name2: '',
			name3: '',
			name4: '',
			name5: '',
			unit1: '',
			unit2: '',
			unit3: '',
			unit4: '',
			unit5: '',
			num1: '',
			num2: '',
			num3: '',
			num4: '',
			num5: '',
			money1: '',
			money2: '',
			money3: '',
			money4: '',
			money5: '',
			user: '',
			bgsyj: '',
			cwbyj: '',
			zjlyj: '',
			visition: false
		};
	},
	onLoad(options) {
		// const item = JSON.parse(decodeURIComponent(options.data));
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
					that.person = data.mainform[0].sgr;
					that.department = data.mainform[0].bm;
					that.date = data.mainform[0].sj;
					that.name1 = data.mainform[0].pinming1;
					that.name2 = data.mainform[0].pinming2;
					that.name3 = data.mainform[0].pinming3;
					that.name4 = data.mainform[0].pinming4;
					that.name5 = data.mainform[0].pinming5;
					that.unit1 = data.mainform[0].danwei1;
					that.unit2 = data.mainform[0].danwei2;
					that.unit3 = data.mainform[0].danwei3;
					that.unit4 = data.mainform[0].danwei4;
					that.unit5 = data.mainform[0].danwei5;
					that.num1 = data.mainform[0].shuliang1;
					that.num2 = data.mainform[0].shuliang2;
					that.num3 = data.mainform[0].shuliang3;
					that.num4 = data.mainform[0].shuliang4;
					that.num5 = data.mainform[0].shuliang5;
					that.money1 = data.mainform[0].nidingjine1;
					that.money2 = data.mainform[0].nidingjine2;
					that.money3 = data.mainform[0].nidingjine3;
					that.money4 = data.mainform[0].nidingjine4;
					that.money5 = data.mainform[0].nidingjine5;
					that.user = data.mainform[0].yongtu;

					if (data.mainform[0].bgsyj != '') {
						that.bgsyj = JSON.parse(data.mainform[0].bmfzr)[0].v;
					}
					if (data.mainform[0].cwbyj != '') {
						that.cwbyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
					if (data.mainform[0].cwbyj != '') {
						that.zjlyj = JSON.parse(data.mainform[0].cwbyj)[0].v;
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
.v-header {
	display: flex;
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
