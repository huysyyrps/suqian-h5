//会议请假
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
			<picker class="itemValue" mode="date" @change="bindDateChange"><input class="input" placeholder="请选择申请时间" v-model="date" type="text" /></picker>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">职务*:</text>
			<input class="input" placeholder="请输入职务" v-model="work" type="idcard"/>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">会议名称*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入会议名称" v-model="mettingName" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">请假事由*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入请假事由" v-model="reason" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">负责同事*:</text>
			<input class="input" placeholder="请选择待开同事" v-model="driver" type="idcard" @click="bindPersonChange"/>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">职务*:</text>
			<input class="input" placeholder="请输入职务" v-model="dkWork" type="idcard"/>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">联系方式:</text>
			<input class="input" placeholder="请输入联系方式" v-model="phone" type="idcard"/>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">备注:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入备注" v-model="memo" type="text" />
		</view>
		<view class="hourLine"></view>	
		
		<view class="item">
			<text class="itemName">请假签字*:</text>
			<input class="input" placeholder="请签字" v-model="leaverName" type="idcard"/>
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
			tag:'',
			person: '',
			department: '',
			date: dateJSOB.getDay(),
			work: '',
			mettingName:'',
			reason:'',
			phone:'',
			memo:'',
			dkts: '',
			dkWork: '',
			leaverName: '',
			flowAssignId:'',
			ecard: '',
			userCode: '',
			driver: '',
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
		setData: function(e) {
			this.person = uni.getStorageSync('userName');
			this.department = uni.getStorageSync('depName');
		},
		bindPersonChange: function(e) {
			uni.navigateTo({
				url: '../../../../constant/personnel/personnel'
			});
		},
		//获取路径
		getFlowLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowline,
				data: {
					defId: dataString.mettingLeaveDefId
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
					defId: dataString.mettingLeaveDefId,
					activityName: destination
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
			if (!this.work || !this.mettingName || !this.reason || !this.driver || !this.dkWork || !this.driver || !this.leaverName) {
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
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destination);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('flowAssignId', this.flowAssignId);
			myData.append('defId', dataString.mettingLeaveDefId);
			myData.append('formDefId', dataString.mettingLeaveFormDefId);
			myData.append('tbbmDid', uni.getStorageSync('depId'));
			myData.append('tbbm', uni.getStorageSync('depName'));
			myData.append('xmUId', uni.getStorageSync('userId'));
			myData.append('xm', this.person);
			myData.append('sqsj', this.date);
			myData.append('hymc', this.mettingName);
			myData.append('zw', this.work);
			myData.append('qingjiashiyou', this.reason);
			myData.append('dwchryUId', this.userCode);
			myData.append('dwchry', this.driver);
			myData.append('zw2', this.dkWork);
			myData.append('lxfs', this.phone);
			myData.append('bz', this.memo);
			myData.append('qjr', this.leaverName);
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
