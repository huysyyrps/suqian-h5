<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">填单时间:</text>
			<text class="input">{{tddate}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">接待日期:</text>
			<text class="input">{{jddate}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">申请部门:</text>
			<text class="input">{{department}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">主宾概况*:</text>
			<text class="input">{{guest}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">主宾职务*:</text>
			<text class="input">{{guestwork}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">来宾单位*:</text>
			<text class="input">{{lbdepartment}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">随行人员*:</text>
			<textarea class="input" :auto-height="true" placeholder="请输入随行人员" v-model="sxry" type="text"  />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">来宿事由*:</text>
			<textarea class="input" :auto-height="true" placeholder="请输入来宿事由" v-model="reason" type="text"  />
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">陪客人员*:</text>
			<textarea class="input" :auto-height="true" placeholder="请输入陪客人员" v-model="pkry" type="text"/>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">就餐地点*:</text>
			<text class="input">{{eatAddress}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">住宿地点*:</text>
			<text class="input">{{sleepAddress}}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">接待标准*:</text>
			<text class="input">{{jdbz}}</text>
		</view>
		<view class="vText"></view>
		
		<view class="item">
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
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">分管领导:</text>
			<text class="input" v-if="fgldRemote == read" :auto-height="true">{{ fgldyj }}</text>
			<textarea class="input" v-if="fgldRemote == write" :auto-height="true" v-model="fgldyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">主要领导:</text>
			<text class="input" v-if="zjlRemote == read" :auto-height="true">{{ zjlyj }}</text>
			<textarea class="input" v-if="zjlRemote == write" :auto-height="true" v-model="zjlyj" />
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
var dateJSOB = require('../../../../../common/js/hy-date.js');
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
var dateJson = require('../../../../../common/js/hy-date.js');
export default {
	components: { uniSection, uniPopup, uniIcons },
	data() {
		return {
			write: dataString.write,
			read: dataString.read,
			index: 0,
			type: '',
			bmfzryj: '',
			bmfzryj1: '',
			bmfzrRemote: 1,
			bgsyj: '',
			bgsyj1: '',
			bgsRemote: 1,
			fgldyj: '',
			fgldyj1: '',
			fgldRemote: 1,
			zjlyj: '',
			zjlyj1: '',
			zjlRemote: 1,
			tddate: dateJson.getDay(),
			jddate: dateJson.getDay(),
			department: '',
			guest: '',
			guestwork: '',
			lbdepartment:'',
			sxry: '',
			reason: '',
			pkry: '',
			eatAddress: '',
			sleepAddress: '',
			jdbz: '',
			flowAssignId: '',
			personLine: [],
			personLine1: [],
			comments: '',
			destTypeList: [],
			selectperson: [],
			visition:false
		};
	},
	onLoad(options) {
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
					that.tddate = data.mainform[0].tbrq;
					that.jddate = data.mainform[0].jdsj;
					that.department = data.mainform[0].jdbm;
					that.guest = data.mainform[0].xm;
					that.guestwork = data.mainform[0].zw;
					that.lbdepartment = data.mainform[0].lbdw;
					that.sxry = data.mainform[0].sxry;
					that.reason = data.mainform[0].lssy;
					that.pkry = data.mainform[0].pkry;
					that.eatAddress = data.mainform[0].jcdd;
					that.sleepAddress = data.mainform[0].zsdd;
					that.jdbz = data.mainform[0].jdbz;
					
					that.bmfzrRemote = data.formRights[0].bmfzryj;
					that.bgsRemote = data.formRights[0].bgsyj;
					that.fgldRemote = data.formRights[0].fgldyj;
					that.zjlRemote = data.formRights[0].zjlyj;
					if (data.mainform[0].bmfzryj != '') {
						that.bmfzryj1 = data.mainform[0].bmfzryj;
						that.bmfzryj = JSON.parse(data.mainform[0].bmfzryj)[0].v;
					}
					console.log(that.bmfzryj);
					if (data.mainform[0].bgsyj != '') {
						that.bgsyj1 = data.mainform[0].bgsyj;
						that.bgsyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
					if (data.mainform[0].fgldyj != '') {
						that.fgldyj1 = data.mainform[0].fgldyj;
						that.fgldyj = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					if (data.mainform[0].zjlyj != '') {
						that.zjlyj1 = data.mainform[0].zjlyj;
						that.zjlyj = JSON.parse(data.mainform[0].zjlyj)[0].v;
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
			if (this.fgldRemote == dataString.write) {
				if (!this.fgldyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.zjlRemote == dataString.write) {
				if (!this.zjlyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
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
			if (this.bmfzrRemote == this.write) {
				this.comments = this.bmfzryj;
			} else if (this.bgsRemote == this.write) {
				this.comments = this.bgsyj;
				// this.bgsyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.bgsyj + '}]';
			} else if (this.fgldRemote == this.write) {
				this.comments = this.fgldyj;
				// this.fgldyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.fgldyj + '}]';
			}else if (this.zjlRemote == this.write) {
				this.comments = this.zjlyj;
				// this.fgldyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.fgldyj + '}]';
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
			myData.append('flowAssignId', that.flowAssignId);
			myData.append('defId', dataString.receptionDefId);
			myData.append('formDefId', dataString.receptionFormDefId);
			myData.append('signaName', signaName);
			myData.append('jdbmDid', uni.getStorageSync('depId'));
			myData.append('jdbm', that.department);
			myData.append('tbrq', that.tddate);
			myData.append('jdsj', that.jddate);
			myData.append('lbdw', that.lbdepartment);
			
			myData.append('lssy', that.reason);
			myData.append('xm', that.guest);
			myData.append('zw', that.guestwork);
			
			myData.append('sxry', that.sxry);
			myData.append('pkry', that.pkry);
			myData.append('jcdd', that.eatAddress);
			myData.append('zsdd', that.sleepAddress);
			myData.append('jdbz', that.jdbz);
			myData.append('comments', that.comments);
			myData.append('bmfzryj', that.makeData(that.bmfzryj,that.bmfzryj1, that.bmfzrRemote));
			myData.append('bgsyj', that.makeData(that.bgsyj,that.bgsyj1, that.bgsRemote));
			myData.append('fgldyj', that.makeData(that.fgldyj,that.fgldyj1, that.fgldRemote));
			myData.append('zjlyj', that.makeData(that.zjlyj,that.zjlyj1, that.zjlRemote));
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
		makeData: function(e,e1, _index) {
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
.input {
	font-size: 30rpx;
	line-height: 90rpx;
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
