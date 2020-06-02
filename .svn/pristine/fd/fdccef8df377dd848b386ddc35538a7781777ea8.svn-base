<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">申请部门:</text>
			<text class="input">{{department}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<text class="input">{{appleDate}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">使用时间:</text>
			<text class="input">{{userDate}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">会议室地点*:</text>
			<text class="input">{{homeAddress}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">会议名称*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入会议名称" v-model="mettingName" type="text" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">参会人数*:</text>
			<text class="input">{{number}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">主席台*:</text>
			<text class="input">{{zxtNumber}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">会场要求*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入会场要求(茶水)" v-model="mettingRequest" type="text" />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">会标*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入会标" v-model="HB" type="text" />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">席卡*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入席卡" v-model="XK" type="text" />
		</view>
		<view class="hourLine"></view>
		
		<view class="vText"></view>
		<view class="item" style="border-top: #CCCCCC 1rpx solid;">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">部门负责人:</text>
			<text class="input" v-if="bmfzrRemote == read" :auto-height="true">{{ bmfzryj }}</text>
			<textarea class="input" v-if="bmfzrRemote == write" :auto-height="true" v-model="bmfzryj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">办公室意见:</text>
			<text class="input" v-if="bgsRemote == read" :auto-height="true">{{ bgsyj }}</text>
			<textarea class="input" v-if="bgsRemote == write" :auto-height="true" v-model="bgsyj" />
		</view>
		
		<view class="hourLine"></view>
		
		<uni-popup ref="showtip" :type="type" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view v-for="(item, dataindex) in personLine" :key="dataindex">
					<view class="list-item" :showArrow="false" @click="listClient(item, dataindex)">
						<label>
							<text class="text" v-if="item.checked">{{ item.userNames + '(' + item.role + ')' }}</text>
							<text class="text1" v-else="item.checked">{{ item.userNames + '(' + item.role + ')' }}</text>
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
var activityName = '';
var taskId = '';
var piId = '';
var runID = '';
var uId = '';
var role = '';
var executionId = '';
var destType = '';
var destName = '';
var signaName = '';
var userName = '';
var userCode = '';
var mainId = '';
var currentTime = '';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
var dateJson = require('../../../../../common/js/hy-date.js');
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
export default {
	components: { uniSection, uniPopup, uniIcons },
	data() {
		return {
			write: dataString.write,
			read: dataString.read,
			index: 0,
			type: '',
			department: '',
			appleDate: '',
			userDate: '',
			mettingName:'',
			homeAddress: '',
			number:'',
			zxtNumber: '',
			mettingRequest: '',
			HB: '',
			XK: '',
			bmfzryj:'',
			bgsyj:'',
			bmfzryj1:'',
			bgsyj1:'',
			bmfzrRemote:'1',
			bgsRemote:'1',
			
			flowAssignId: '',
			personLine: [],
			personLine1: [],
			comments: '',
			destTypeList: [],
			selectperson: []
			
		};
	},
	onLoad(options) {
		// const item = JSON.parse(decodeURIComponent(options.data));
		activityName = options.activityName;
		taskId = options.taskId;
		piId = options.piId;
		executionId = options.executionId;
		this.getUserCarFlowDetail();
	},
	methods: {
		getUserCarFlowDetail: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.willdodetail, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					activityName: activityName,
					taskId: taskId,
					piId: piId
				},
				successCallBack: function(data) {
					console.log(data);
					runID = data.mainform[0].runId;
					mainId = data.mainform[0].mainId;
					that.appleDate = data.mainform[0].sysj;
					that.userDate = data.mainform[0].sqsj;
					that.department = data.mainform[0].sqbm;
					that.mettingName = data.mainform[0].hymc;
					that.homeAddress = data.mainform[0].hysdd;
					that.number = data.mainform[0].chrs;
					that.zxtNumber = data.mainform[0].zxtrs;
					that.mettingRequest = data.mainform[0].cs;
					that.HB = data.mainform[0].hb;
					that.XK = data.mainform[0].xk;
					
					that.bmfzrRemote = data.formRights[0].bmfzryj;
					that.bgsRemote = data.formRights[0].bgsyj;
					
					if (data.mainform[0].bmfzryj != '') {
						that.bmfzryj1 = data.mainform[0].bmfzryj;
						that.bmfzryj = JSON.parse(data.mainform[0].bmfzryj)[0].v;
					}
					if (data.mainform[0].bgsyj != '') {
						that.bgsyj1 = data.mainform[0].bgsyj;
						that.bgsyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
					for (var i = 0; i < data.trans.length; i++) {
						that.destTypeList.push(data.trans[i]);
					}
				},
				failCallBack: function(e) {
					print(e);
					console.log(e);
				}
			});
		},
		//获取路径
		getFlowLine: function(e) {
			if (this.destTypeList.length == 1) {
				destType = this.destTypeList[0].destType;
				destName = this.destTypeList[0].destination;
				this.selectperson = [];
				if (destType.indexOf('decision') != -1 || destType.indexOf('fork') != -1 || destType.indexOf('join') != -1) {
					this.getOnLine();
				} else if (destType.indexOf('end') == -1) {
					this.getNoEndLine();
				} else {
					this.getNoHandlerLine();
				}
				signaName = this.destTypeList[0].name;
			} else {
				for (var i = 0; i < this.destTypeList.length; i++) {
					this.namelist.push(this.destTypeList[i].name);
				}
				uni.showActionSheet({
					itemList: this.namelist,
					success: function(res) {
						destType = res.destType;
						destName = res.destination;
						this.selectperson = [];
						if (destType.indexOf('decision') != -1 || destType.indexOf('fork') != -1 || destType.indexOf('join') != -1) {
							this.getOnLine();
						} else if (destType.indexOf('end') == -1) {
							this.getNoEndLine();
						} else {
							this.getNoHandlerLine();
						}
						signaName = this.destTypeList[0].name;
					},
					fail: function(res) {
						print(res.errMsg);
					}
				});
			}
		},
		getOnLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.online,
				data: {
					taskId: taskId,
					activityName: destName,
					isParentFlow: false
				},
				successCallBack: function(data) {
					that.personLine = [];
					that.personLine1 = [];
					for (var i = 0; i < data.data.length; i++) {
						that.personLine1.push(data.data[i]);
					}
					for (var i = 0; i < that.personLine1.length; i++) {
						let nametemp = that.personLine1[i].userNames.split(',');
						let codetemp = that.personLine1[i].userCodes.split(',');
						for (var k = 0; k < nametemp.length; k++) {
							var a = {
								checked: that.personLine1[i].checked,
								role: that.personLine1[i].role,
								route: that.personLine1[i].route,
								type: that.personLine1[i].type,
								userCodes: codetemp[k],
								userNames: nametemp[k]
							};
							that.personLine.push(a);
						}
					}
							
					that.togglePopup('center', 'tip');
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		getNoEndLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.noendline,
				data: {
					taskId: taskId,
					activityName: destName,
					isParentFlow: false
				},
				successCallBack: function(data) {
					that.personLine = [];
					that.personLine1 = [];
					for (var i = 0; i < data.data.length; i++) {
						that.personLine1.push(data.data[i]);
					}
					for (var i = 0; i < that.personLine1.length; i++) {
						let nametemp = that.personLine1[i].userNames.split(',');
						let codetemp = that.personLine1[i].userCodes.split(',');
						for (var k = 0; k < nametemp.length; k++) {
							var a = {
								checked: that.personLine1[i].checked,
								role: that.personLine1[i].role,
								route: that.personLine1[i].route,
								type: that.personLine1[i].type,
								userCodes: codetemp[k],
								userNames: nametemp[k]
							};
							that.personLine.push(a);
						}
					}
							
					that.togglePopup('center', 'tip');
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		getNoHandlerLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.nohandlerline,
				data: {
					taskId: taskId
				},
				successCallBack: function(data) {
					that.UpData();
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
			if (this.selectperson.length == 0) {
				print('请选择审批人');
			} else {
				this.UpData();
			}
		},
		listClient: function(e, index) {
			if (this.selectperson.length == 0) {
				e.checked = true;
				this.selectperson.push(e);
			} else {
				if (this.selectperson.indexOf(e) != -1) {
					e.checked = false;
					this.selectperson.push(e);
					this.selectperson = this.selectperson.filter(function(item) {
						return item != e;
					});
				} else {
					e.checked = true;
					this.selectperson.push(e);
				}
			}
		},
		//上传数据
		UpData: function(e) {
			if (this.bmfzrRemote == dataString.write) {
				if (!this.bmfzryj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.bgsRemote == dataString.write) {
				if (!this.bgsyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.selectperson.length == 0&&this.personLine.length != 0) {
				uni.showToast({
					title: '请选择审批人',
					icon: 'none',
					duration: 800,
					position: 'bottom'
				});
				return;
			}
		
			if (this.bmfzrRemote == this.write) {
				this.comments = this.bmfzryj;
			} else if (this.bgsRemote == this.write) {
				this.comments = this.bgsyj;
				// this.bgsyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.bgsyj + '}]';
			}
		
			if (this.selectperson.length == 1) {
				uId = this.selectperson[0].userCodes;
				this.flowAssignId = this.selectperson[0].role + '|' + this.selectperson[0].userCodes;
			}
			if (this.selectperson.length > 1) {
				for (var i = 0; i < this.selectperson.length; i++) {
					if (uId != '') {
						if (role.indexOf(this.selectperson[i].role) != -1) {
							uId = uId + ',' + this.selectperson[i].userCodes;
						} else {
							role = role + ':' + this.selectperson[i].role;
							uId = uId + ':' + this.selectperson[i].userCodes;
						}
					} else {
						role = this.selectperson[i].role;
						uId = this.selectperson[i].userCodes;
					}
				}
		
				this.flowAssignId = role + '|' + uId;
			}
			var that = this;
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destName);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('mainId', mainId);
			myData.append('taskId', taskId);
			myData.append('signaName', signaName);
			myData.append('flowAssignId', that.flowAssignId);
			myData.append('defId', dataString.mettingHomeDefId);
			myData.append('formDefId', dataString.mettingHomeFormDefId);
			myData.append('sqbmDid', uni.getStorageSync('depId'));
			myData.append('sqbm', uni.getStorageSync('depName'));
			myData.append('sqsj', that.appleDate);
			myData.append('hysdd', that.homeAddress);
			myData.append('sysj', that.userDate);
			myData.append('hymc', that.mettingName);
			myData.append('chrs', that.number);
			myData.append('zxtrs', that.zxtNumber);
			myData.append('cs', that.mettingRequest);
			myData.append('hb', that.HB);
			myData.append('xk', that.XK);
			myData.append('bmfzryj', '');
			myData.append('bgsyj', '');
			myData.append('comments', that.comments);
			myData.append('bmfzryj', that.makeData(that.bmfzryj, that.bmfzryj1, that.bmfzrRemote));
			myData.append('bgsyj', that.makeData(that.bgsyj, that.bgsyj1, that.bgsRemote));
			console.log(myData);
			resquestJSOB.sendPost1RequestJson({
				url: urlJSOB.willflowup,
				data: {
					myData
				},
				successCallBack: function(data) {
					if ((data.success = 'true')) {
						uni.navigateBack({
							delta: 1
						});
					}
					uni.navigateBack({
						delta: 1
					});
				},
				failCallBack: function(error) {
					print(error);
				}
			});
		},
		makeData: function(e, e1, _index) {
			if (_index == dataString.write) {
				userCode = uni.getStorageSync('userId');
				userName = uni.getStorageSync('userName');
				currentTime = dateJson.getTime();
				var a = {
					ui: userCode,
					un: userName,
					c: currentTime,
					v: e
				};
				console.log(a);
				var dataSingle = JSON.stringify(a);
				console.log(dataSingle);
				return '[' + dataSingle + ']';
				//'"ui":"' + userCode + '","un":"' + userName + '","c":"' + currentTime + '","v":"' + e+'"'
			} else {
				return e1;
			}
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
