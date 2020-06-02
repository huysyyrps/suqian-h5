<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">请假人:</text>
			<text class="input" placeholder="请选择申请人">{{ person }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">申请时间:</text>
			<text class="input" placeholder="请选择申请人">{{ date }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">请假类型*:</text>
			<text class="input" placeholder="请选择申请人">{{ leaverType }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">开始日期:</text>
			<text class="input" placeholder="请选择申请人">{{ startDate }}</text>
		</view>
		
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">开始时间:</text>
			<text class="input" placeholder="请选择申请人">{{ startTime }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">结束日期:</text>
			<text class="input" placeholder="请选择申请人">{{ endDate }}</text>
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">结束时间:</text>
			<text class="input" placeholder="请选择申请人">{{ endTime }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemName">请假天数*:</text>
			<text class="input" placeholder="请选择申请人">{{ leaverDays }}</text>
		</view>
		<view class="hourLine"></view>
		
		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">事由*:</text>
			<text class="input" placeholder="请选择申请人">{{ reason }}</text>
		</view>
		
		<view class="vText"></view>
		<view class="item" style="border-top: #CCCCCC 1rpx solid;">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">办公室意见:</text>
			<text class="input" v-if="bgsRemote == read" :auto-height="true">{{ bgsyj }}</text>
			<textarea class="input" v-if="bgsRemote == write" :auto-height="true" v-model="bgsyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">人力资源:</text>
			<text class="input" v-if="rlzybRemote == read" :auto-height="true">{{ rlzybyj }}</text>
			<textarea class="input" v-if="rlzybRemote == write" :auto-height="true" v-model="rlzybyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">分管领导:</text>
			<text class="input" v-if="fgldRemote == read" :auto-height="true">{{ fgldyj }}</text>
			<textarea class="input" v-if="fgldRemote == write" :auto-height="true" v-model="fgldyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">总经理:</text>
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
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
var dateJson = require('../../../../../common/js/hy-date.js');
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
export default {
	components: { uniGrid, uniGridItem },
	data() {
		return {
			write: dataString.write,
			read: dataString.read,
			bgsyj: '',
			rlzybyj: '',
			fgldyj	: '',
			zjlyj: '',
			
			bgsyj1: '',
			rlzybyj1: '',
			fgldyj1	: '',
			zjlyj1: '',
			
			bgsRemote:'',
			rlzybRemote:'',
			fgldRemote:'',
			zjlRemote:'',
			fullnameUId:'',
			person: '',
			date: '',
			leaverType: '',
			startDate: '',
			startTime: '',
			endDate: '',
			endTime :'',
			leaverDays :'',
			reason :'',
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
					runID = data.mainform[0].runId;
					mainId = data.mainform[0].mainId;
					that.person = data.mainform[0].fullname;
					that.date = data.mainform[0].TianDanRiQi;
					that.leaverType = data.mainform[0].vocationType;
					that.startDate = data.mainform[0].beginDate;
					that.startTime = data.mainform[0].ksdayType;
					that.endDate = data.mainform[0].endDate;
					that.endTime = data.mainform[0].jsdayType;
					that.leaverDays = data.mainform[0].vocationDays;
					that.reason = data.mainform[0].shiyou;
					that.fullnameUId = data.mainform[0].fullnameUId;
					that.bgsRemote = data.formRights[0].bgsyj;
					that.rlzybRemote = data.formRights[0].rlzybyj;
					that.fgldRemote = data.formRights[0].fgldyj;
					that.zjlRemote = data.formRights[0].zjlyj;
					
					if (data.mainform[0].bgsyj != '') {
						that.bgsyj1 = data.mainform[0].bgsyj;
						that.bgsyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
					if (data.mainform[0].rlzybyj != '') {
						that.rlzybyj1 = data.mainform[0].rlzybyj;
						that.rlzybyj = JSON.parse(data.mainform[0].rlzybyj)[0].v;
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
					print(e.msg);
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
			if (this.rlzybRemote == dataString.write) {
				if (!this.rlzybyj) {
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
			if (this.selectperson.length == 0&&this.personLine.length != 0) {
				uni.showToast({
					title: '请选择审批人',
					icon: 'none',
					duration: 800,
					position: 'bottom'
				});
				return;
			}

			if (this.bgsRemote == this.write) {
				this.comments = this.bgsyj;
			} else if (this.rlzybRemote == this.write) {
				this.comments = this.rlzybyj;
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
			myData.append('defId', dataString.driverLeaverDefId);
			myData.append('formDefId', dataString.driverLeaverFormDefId);
			myData.append('signaName', signaName);
			myData.append('fullnameUId', this.fullnameUId);
			myData.append('fullname', this.person);
			
			myData.append('TianDanRiQi', this.date);
			myData.append('vocationType', this.leaverType);
			myData.append('vocationDays', this.leaverDays);
			myData.append('beginDate', this.startDate);
			myData.append('ksdayType', this.startTime);
			myData.append('endDate', this.endDate);
			myData.append('jsdayType', this.endTime);
			myData.append('shiyou', this.reason);
			myData.append('comments', that.comments);
			myData.append('bgsyj', that.makeData(that.bgsyj, that.bgsyj, that.bgsRemote));
			myData.append('rlzybyj', that.makeData(that.rlzybyj, that.rlzybyj1, that.rlzybRemote));
			myData.append('fgldyj', that.makeData(that.fgldyj, that.fgldyj1, that.fgldRemote));
			myData.append('zjlyj', that.makeData(that.zjlyj, that.zjlyj1, that.zjlRemote));
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
.input {
	font-size: 30rpx;
	line-height: 90rpx;
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
</style>
