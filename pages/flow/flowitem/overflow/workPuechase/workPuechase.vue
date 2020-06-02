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

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">用途*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入用途" placeholder-style="lineHeight:150rpx" v-model="user" type="text" />
		</view>
		<view class="hourLine"></view>

		<uni-popup ref="showtip" :type="type" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view v-for="(item, dataindex) in personLine" :key="dataindex">
					<view class="list-item" :showArrow="false" @click="listClient(item, dataindex)">
						<label>
							<text class="text" v-if="item.checked">{{ item.userNames }}</text>
							<text class="text1" v-else ="item.checked" >{{ item.userNames }}</text>	
						</label>
					</view>
				</view>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('tip')">取消</text>
					<text class="uni-tip-button" @click="cancel('tip')">确定</text>
				</view>
			</view>
		</uni-popup>

		<button class="btn" type="default" @click="getFlowLine">{{ '提交' }}</button>
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
			name:'物品采购',
			nuit:'单位',
			num:'申购数量',
			money:'拟定金额',
			name1:'',
			name2:'',
			name3:'',
			name4:'',
			name5:'',
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
			user:'',
			flowAssignId:'',
			flowLine: [],
			personLine: [],
			selectperson: [],
			visition:false
		};
	},
	onLoad() {
		this.setData();
	},
	methods: {
		bindDateChange: function(e) {
			this.date = e.target.value;
		},
		setData: function(e) {
			this.person = uni.getStorageSync('userName');
			this.department = uni.getStorageSync('depName');
		},
		//获取路径
		getFlowLine: function(e) {
			// if (!this.carNo || !this.driver || !this.reason) {
			// 	uni.showToast({
			// 		title: '*号为必填内容',
			// 		icon: 'none',
			// 		duration: 800,
			// 		position: 'bottom'
			// 	});
			// 	return;
			// }
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowline,
				data: {
					defId: dataString.workPuechaseDefId
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
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowperson,
				data: {
					defId: dataString.workPuechaseDefId,
					activityName: destination
				},
				successCallBack: function(data) {
					that.personLine = [];
					for (var i = 0; i < data.data.length; i++) {
						that.personLine.push(data.data[i]);
					}
					if (that.personLine.length == 1) {
						that.selectperson.push(that.personLine[0]);
						that.UpData();
					}else if(that.personLine.length > 1){
						that.togglePopup('center', 'tip');
					}
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		//显示弹出框
		togglePopup(type, open) {
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup';
					break;

				case 'bottom':
					this.content = '底部弹出 popup';
					break;
				case 'center':
					this.content = '居中弹出 popup';
					break;
			}
			this.type = type;
			this.$nextTick(() => {
				this.$refs['show' + open].open();
			});
		},
		cancel(type) {
			this.$refs['show' + type].close();
		},
		change(e) {
			console.log('是否打开:' + e.show);
			if(this.selectperson.length==0){
				print("请选择审批人");
				console.log('请选择审批人:');
			}else{
				this.UpData();
			}
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
			console.log(uId);
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destination);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('flowAssignId', this.flowAssignId);
			myData.append('defId', dataString.workPuechaseDefId);
			myData.append('formDefId', dataString.workPuechaseFormDefId);
			myData.append('bmDid', uni.getStorageSync('depId'));
			myData.append('bm', uni.getStorageSync('depName'));
			myData.append('sgrUId', uni.getStorageSync('userId'));
			myData.append('sgr', this.person);
			myData.append('sj', this.date);
			
			myData.append('pinming1', this.name1);
			myData.append('pinming2', this.name2);
			myData.append('pinming3', this.name3);
			myData.append('pinming4', this.name4);
			myData.append('pinming5', this.name5);
			
			myData.append('danwei1', this.unit1);
			myData.append('danwei2', this.unit2);
			myData.append('danwei3', this.unit3);
			myData.append('danwei4', this.unit4);
			myData.append('danwei5', this.unit5);
			
			myData.append('shuliang1', this.num1);
			myData.append('shuliang2', this.num2);
			myData.append('shuliang3', this.num3);
			myData.append('shuliang4', this.num4);
			myData.append('shuliang5', this.num5);
			
			myData.append('nidingjine1', this.money1);
			myData.append('nidingjine2', this.money2);
			myData.append('nidingjine3', this.money3);
			myData.append('nidingjine4', this.money4);
			myData.append('nidingjine5', this.money5);
			
			myData.append('yongtu', this.user);
			myData.append('bmfzryj', '');
			myData.append('bgsyj', '');
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
