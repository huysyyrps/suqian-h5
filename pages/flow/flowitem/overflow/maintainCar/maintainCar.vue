<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">公务车号*:</text>
			<input class="input" placeholder="请输入公务车号" :value="carNo" type="idcard" @click="bindCarNoChange" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<picker class="itemValue" mode="date" @change="bindDateChange"><input class="input" placeholder="请选择申请时间" :value="date" type="text" /></picker>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请人:</text>
			<input class="input" placeholder="请选择申请人" :value="person" type="button" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">行驶里程*:</text>
			<input class="input" placeholder="请输入行驶里程" v-model="mile" type="digit" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">预算金额*:</text>
			<input class="input" placeholder="请输入预算金额" v-model="money" type="digit" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">维修地点*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入维修地点" placeholder-style="lineHeight:150rpx" v-model="address" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">维修项目*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入维修项目" placeholder-style="lineHeight:150rpx" v-model="project" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">项目备注*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入项目备注" placeholder-style="lineHeight:150rpx" v-model="memo" type="text" />
		</view>

		<view class="vText"></view>
		<uni-grid class="grid-view" :column="2" :show-border="false" :square="false">
			<uni-grid-item v-if="tag" v-for="(item, dataindex) in personLine" :key="dataindex">
				<view class="item-content-view" @click="listClient(item, dataindex)">
					<text class="text" v-if="item.checked">{{ item.userNames + '(' + item.role + ')' }}</text>
					<text class="text1" v-else="item.checked">{{ item.userNames + '(' + item.role + ')' }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>

		<button class="btn" type="default" @click="UpData">{{ '提交' }}</button>
	</view>
</template>

<script>
var destination = '';
var userCode = '';
var userName = '';
var uId = ';';
var userDepart = '';
var depName = ';';
var depId = '';
var userName = ';';
var userCode = '';
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
			tag:'',
			carNo: '',
			flag:true,
			date: dateJSOB.getDay(),
			person: '',
			mile: '',
			money: '',
			address: '',
			project: '',
			memo: '',
			flowAssignId: '',
			flowLine: [],
			personLine: [],
			selectperson: [],
			visition: false
		};
	},
	onLoad() {
		this.setData();
		this.getFlowLine();
	},
	methods: {
		bindDateChange: function(e) {
			this.date = e.target.value;
		},
		bindCarNoChange: function(e) {
			uni.navigateTo({
				url: '../../../../constant/carno/carno'
			});
		},
		bindPersonChange: function(e) {
			uni.navigateTo({
				url: '../../../../constant/personnel/personnel'
			});
		},
		setData: function(e) {
			this.person = uni.getStorageSync('userName');
		},
		//获取路径
		getFlowLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowline,
				data: {
					defId: dataString.maintainCarDefId
				},
				successCallBack: function(data) {
					console.log(data);
					that.flowLine = [];
					for (var i = 0; i < data.data.length; i++) {
						that.flowLine.push(data.data[i].destination);
					}
					if (that.flowLine.length == 1) {
						destination = that.flowLine[0];
						that.getFlowPerson();
					} else {
						uni.showActionSheet({
							itemList: that.flowLine,
							success: function(res) {
								destination = that.flowLine[res.tapIndex];
								that.getFlowPerson();
							},
							fail: function(res) {
								print(res.errMsg);
							}
						});
					}
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		//获取审批人
		getFlowPerson: function(e) {
			var that = this;
			var myData = new FormData();
			myData.append('defId', dataString.maintainCarDefId);
			myData.append('activityName', destination);
			resquestJSOB.sendPost1RequestJson({
				url: urlJSOB.upflowperson,
				data: {
					myData
				},
				successCallBack: function(data) {
					that.personLine = [];
					for (var i = 0; i < data.data.length; i++) {
						that.personLine.push(data.data[i]);
					}
					if (that.personLine.length == 1) {
						that.selectperson.push(that.personLine[0]);
						// that.UpData();
					}else{
						that.tag = true;
					}
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		listClient: function(e, index) {
			if (this.selectperson.length == 0) {
				e.checked = true
				this.selectperson.push(e);
			} else {
				if (this.selectperson.indexOf(e) != -1) {
					e.checked = false
					this.selectperson.push(e);
					this.selectperson = this.selectperson.filter(function(item) {
						return item != e;
					});
				} else {
					e.checked = true
					this.selectperson.push(e);
				}
			}
			console.log(this.selectperson);
		},
		//上传数据
		UpData: function(e) {
			if (!this.carNo || !this.date || !this.person || !this.mile || !this.money || !this.address || !this.project) {
				uni.showToast({
					title: '*号为必填内容',
					icon: 'none',
					duration: 800,
					position: 'bottom'
				});
				return;
			}
			if (this.selectperson.length == 1) {
				uId = this.selectperson[0].userCodes;
				this.flowAssignId = this.selectperson[0].role + '|' + this.selectperson[0].userCodes;
			}
			if (this.selectperson.length > 1) {
				for (var i = 1; i < this.selectperson.length; i++) {
					if (i < this.selectperson.length - 1) {
						uId = uId + this.selectperson[i].userCodes + ':';
					} else {
						uId = uId + this.selectperson[i].userCodes;
					}
				}
				for (var i = 1; i < this.selectperson.length; i++) {
					if (i < this.selectperson.length - 1) {
						role = role + this.selectperson[i].role + ':';
					} else {
						role = role + this.selectperson[i].role;
					}
				}
				uId = this.selectperson[0].userCodes + ':' + uId;
				role = this.selectperson[0].role + ':' + role;
				this.flowAssignId = role + '|' + uId;
			}
			console.log(uId);
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destination);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('flowAssignId', this.flowAssignId);
			myData.append('defId', dataString.maintainCarDefId);
			myData.append('formDefId', dataString.maintainCarFormDefId);
			myData.append('sqbmDid', uni.getStorageSync('depId'));
			myData.append('sqbm', uni.getStorageSync('depName'));
			myData.append('sqrUId', uni.getStorageSync('userId'));
			myData.append('sqr', this.person);
			myData.append('wxsj', this.date);
			myData.append('ch', this.carNo);
			myData.append('xslc', this.mile);
			myData.append('ysje', this.money);
			myData.append('wxdd', this.address);
			myData.append('beizhu', this.memo);
			myData.append('wxxm', this.project);
			myData.append('bmfzryj', '');
			resquestJSOB.sendPost1RequestJson({
				url: urlJSOB.upflowdata,
				data: {
					myData
				},
				successCallBack: function(data) {
					console.log(data);
					if (data.success) {
						uni.navigateBack({
							delta: 1
						});
					}
				},
				failCallBack: function(error) {
					print(error);
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
