//固定资产采购申请单
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
			<picker class="itemValue" mode="date" @change="bindDateChange"><input class="input" placeholder="请选择申请时间" v-model="date" type="text" /></picker>
		</view>
			
		<scroll-view :scroll-x="true" >
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="nuit" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money" style="width: 200rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit1" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num1" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money1" style="width: 200rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit2" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num2" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money2" style="width: 200rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit3" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num3" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money3" style="width: 200rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit4" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num4" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money4" style="width: 200rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit5" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num5" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money5" style="width: 200rpx;display:inline-block;"/>
			</view>
		</scroll-view>

		<!-- <view class="item">
			<text class="itemName">预算总价*:</text>
			<input class="input" placeholder="请输入预算总价" v-model="allMoney" type="digit" />
		</view>
		<view class="hourLine"></view> -->

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">用途*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入用途" placeholder-style="lineHeight:150rpx" v-model="user" type="text" />
		</view>
		<view class="hourLine"></view>
		
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
var uId = '';
var role = '';
var userDepart = '';
var depName = '';
var depId = '';
var userName = '';
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
			person: '',
			department: '',
			date: dateJSOB.getDay(),
			allMoney: '',
			user: '',
			name:'品名',
			nuit:'单位',
			num:'数量',
			money:'拟定金额',
			tag:false,
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
			flowAssignId:'',
			flowLine: [],
			personLine: [],
			selectperson: [],
			visition:false
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
			this.department = uni.getStorageSync('depName');
		},
		//获取路径
		getFlowLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowline,
				data: {
					defId: dataString.assetPurchaseDefId
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
			print("zzz");
			var that = this;
			var myData = new FormData();
			myData.append('defId', dataString.assetPurchaseDefId);
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
					}else{
						that.tag = true;
					}
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		listClient: function(e,index) {
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
		UpData:function(e){
			if (!this.user) {
				uni.showToast({
					title: '*号为必填内容',
					icon: 'none',
					duration: 800,
					position: 'bottom'
				});
				return;
			}
			print("1");
			if (this.selectperson.length == 1) {
			    uId = this.selectperson[0].userCodes;
				this.flowAssignId = this.selectperson[0].role+"|"+this.selectperson[0].userCodes;
			}
			if (this.selectperson.length > 1) {
			    for (var i = 1; i < this.selectperson.length; i++) {
			        if (i < this.selectperson.length - 1) {
			            uId = uId + this.selectperson[i].userCodes + ":";
			        } else {
			            uId = uId + this.selectperson[i].userCodes;
			        }
			    }
				for (var i = 1; i < this.selectperson.length; i++) {
				    if (i < this.selectperson.length - 1) {
				        role = role + this.selectperson[i].role + ":";
				    } else {
				        role = role + this.selectperson[i].role;
				    }
				}
			    uId = this.selectperson[0].userCodes + ":" + uId;
				role = this.selectperson[0].role + ":" + role;
				this.flowAssignId = role+"|"+uId;
			}
			console.log(uId);
			print(uId);
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destination);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('flowAssignId', this.flowAssignId);
			myData.append('defId', dataString.assetPurchaseDefId);
			myData.append('formDefId', dataString.assetPurchaseFormDefId);
			myData.append('bmDid', uni.getStorageSync('depId'));
			myData.append('bm', uni.getStorageSync('depName'));
			myData.append('sqrUId', uni.getStorageSync('userId'));
			myData.append('sgr', this.person);
			myData.append('sj', this.date);
			myData.append('pinming', this.name1);
			myData.append('pinming2', this.name2);
			myData.append('pinming3', this.name3);
			myData.append('pinming4', this.name4);
			myData.append('pinming5', this.name5);
			myData.append('danwei2', this.unit1);
			myData.append('danwei3', this.unit2);
			myData.append('danwei4', this.unit3);
			myData.append('danwei5', this.unit4);
			myData.append('danwei6', this.unit5);
			myData.append('shuliang2', this.num1);
			myData.append('shuliang3', this.num2);
			myData.append('shuliang4', this.num3);
			myData.append('shuliang5', this.num4);
			myData.append('shuliang6', this.num5);
			myData.append('nidingjine2', this.money1);
			myData.append('nidingjine3', this.money2);
			myData.append('nidingjine4', this.money3);
			myData.append('nidingjine5', this.money4);
			myData.append('nidingjine6', this.money5);
			myData.append('yongtu', this.user);
			myData.append('bmfzryj', '');
			myData.append('cwbyj', '');
			myData.append('fgldyj', '');
			resquestJSOB.sendPost1RequestJson({
				url: urlJSOB.upflowdata,
				data: {
					myData
				},
				successCallBack: function(data) {
					console.log(data);
					// console.log(data.success);
					if(data.success){
						uni.navigateBack({
							delta: 1
						})
					}
				},
				failCallBack: function(error) {
					print(error);
					console.log(error);
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
