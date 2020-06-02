//固定资产采购
<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">经办人:</text>
			<text class="input" placeholder="请选择申请人">{{ person }}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请部门:</text>
			<text class="input">{{ department }}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<text class="input">{{ date }}</text>
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
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">用途:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入用途" placeholder-style="lineHeight:150rpx" v-model="user" type="text" />
		</view>
		
		<view class="vText"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">部门确认:</text>
			<text class="input" v-if="bmfzrRemote == read" :auto-height="true">{{ bmfzr }}</text>
			<textarea class="input" v-if="bmfzrRemote == write" :auto-height="true" v-model="bmfzr" />
		</view>
		<view class="hourLine"></view>
		<view class="item" style="border-top: #CCCCCC 1rpx solid;">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">办公室:</text>
			<text class="input" v-if="bgsRemote == read" :auto-height="true">{{ bgsyj }}</text>
			<textarea class="input" v-if="bgsRemote == write" :auto-height="true" v-model="bgsyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">财务部:</text>
			<text class="input" v-if="cwbRemote == read" :auto-height="true">{{ cwbyj }}</text>
			<textarea class="input" v-if="cwbRemote == write" :auto-height="true" v-model="cwbyj" />
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
			person: '',
			department: '',
			date: dateJson.getDay(),
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
			bmfzr: '',
			bgsyj: '',
			cwbyj: '',
			
			bmfzr1: '',
			bgsyj1: '',
			cwbyj1: '',
			
			bmfzrRemote: '',
			bgsRemote: '',
			cwbRemote: '',
			flowAssignId: '',
			personLine: [],
			personLine1: [],
			comments: '',
			destTypeList: [],
			selectperson: [],
			visition: false
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


					that.bmfzrRemote = data.formRights[0].bmfzr;
					that.bgsRemote = data.formRights[0].bgsyj;
					that.cwbRemote = data.formRights[0].cwbyj;
					
					if (data.mainform[0].bmfzr != '') {
						that.bmfzr1 = data.mainform[0].bmfzr;
						that.bmfzr = JSON.parse(data.mainform[0].bmfzr)[0].v;
					}
					if (data.mainform[0].bgsyj != '') {
						that.bgsyj1 = data.mainform[0].bgsyj;
						that.bgsyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
					}
					if (data.mainform[0].cwbyj != '') {
						that.cwbyj1 = data.mainform[0].cwbyj;
						that.cwbyj = JSON.parse(data.mainform[0].cwbyj)[0].v;
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
				if (!this.bmfzr) {
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
			if (this.cwbRemote == dataString.write) {
				if (!this.cwbyj) {
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
				this.comments = this.bmfzr;
			} else if (this.bgsRemote == this.write) {
				this.comments = this.bgsyj;
				// this.bgsyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.bgsyj + '}]';
			} else if (this.cwbRemote == this.write) {
				this.comments = this.cwbyj;
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
			myData.append('defId', dataString.workPuechaseDefId);
			myData.append('formDefId', dataString.workPuechaseFormDefId);
			myData.append('signaName', signaName);
			myData.append('sqbmDid', uni.getStorageSync('depId'));
			myData.append('sqbm', uni.getStorageSync('depName'));
			myData.append('sgrUId', uni.getStorageSync('userId'));
			myData.append('sgr', that.person);
			myData.append('sj', that.date);
			
			myData.append('pinming1', that.name1);
			myData.append('pinming2', that.name2);
			myData.append('pinming3', that.name3);
			myData.append('pinming4', that.name4);
			myData.append('pinming5', that.name5);
			
			myData.append('danwei1', that.unit1);
			myData.append('danwei2', that.unit2);
			myData.append('danwei3', that.unit3);
			myData.append('danwei4', that.unit4);
			myData.append('danwei5', that.unit5);
			
			myData.append('shuliang1', that.num1);
			myData.append('shuliang2', that.num2);
			myData.append('shuliang3', that.num3);
			myData.append('shuliang4', that.num4);
			myData.append('shuliang5', that.num5);
			
			myData.append('nidingjine1', that.money1);
			myData.append('nidingjine2', that.money2);
			myData.append('nidingjine3', that.money3);
			myData.append('nidingjine4', that.money4);
			myData.append('nidingjine5', that.money5);
			myData.append('comments', that.comments);
			myData.append('yongtu', that.user);
			myData.append('bmfzr', that.makeData(that.bmfzr, that.bmfzr1, that.bmfzrRemote));
			myData.append('bgsyj', that.makeData(that.bgsyj, that.bgsyj1, that.bgsRemote));
			myData.append('cwbyj', that.makeData(that.cwbyj, that.cwbyj1, that.cwbRemote));
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
