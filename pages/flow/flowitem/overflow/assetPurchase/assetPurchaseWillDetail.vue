//固定资产采购申请单
<template>
	<view style="background-color: #EFEFF4;">
		<view class="item">
			<text class="itemName">经办人:</text>
			<text class="input">{{person}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请部门:</text>
			<text class="input">{{department}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemName">申请时间:</text>
			<text class="input">{{date}}</text>
		</view>
			
		<scroll-view :scroll-x="true" >
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="name" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit" style="width: 100rpx;display:inline-block;"/>
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
			<text class="input">{{user}}</text>
		</view>
		<view class="hourLine"></view>

		<view class="vText"></view>
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
					<text class="uni-tip-button" @click="change('tip')">确定</text>
				</view>
			</view>
		</uni-popup>
		
		<view class="item" style="border-top: #CCCCCC 1rpx solid;">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">申购部门:</text>
			<text class="input" v-if="sgbmRemote == read" :auto-height="true">{{ sgbm }}</text>
			<textarea class="input" v-if="sgbmRemote == write" :auto-height="true" v-model="sgbm" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">资产管理:</text>
			<text class="input" v-if="zcglRemote == read" :auto-height="true">{{ zcgl }}</text>
			<textarea class="input" v-if="zcglRemote == write" :auto-height="true" v-model="zcgl" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">财务总监:</text>
			<text class="input" v-if="cwzjRemote == read" :auto-height="true">{{ cwzj }}</text>
			<textarea class="input" v-if="cwzjRemote == write" :auto-height="true" v-model="cwzj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">分管领导:</text>
			<text class="input" v-if="fgldRemote == read" :auto-height="true">{{ fgld }}</text>
			<textarea class="input" v-if="fgldRemote == write" :auto-height="true" v-model="fgld" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">主要领导:</text>
			<text class="input" v-if="zyldRemote == read" :auto-height="true">{{ zyld }}</text>
			<textarea class="input" v-if="zyldRemote == write" :auto-height="true" v-model="zyld" />
		</view>
		<view class="hourLine"></view>
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
var dateJSOB = require('../../../../../common/js/hy-date.js');
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
			person: '',
			department: '',
			date: dateJSOB.getDay(),
			allMoney: '',
			user: '',
			name:'品名',
			unit:'单位',
			num:'数量',
			money:'拟定金额',
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
			sgbm:'',
			zcgl: '',
			cwzj:'',
			fgld: '',
			zyld: '',
			sgbm1:'',
			zcgl1: '',
			cwzj1:'',
			fgld1: '',
			zyld1: '',
			sgbmRemote:'',
			zcglRemote: '',
			cwzjRemote:'',
			fgldRemote: '',
			zyldRemote: '',
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
					that.person = data.mainform[0].sgr;
					that.department = data.mainform[0].bm;
					that.name1 = data.mainform[0].pinming;
					that.name2 = data.mainform[0].pinming2;
					that.name3 = data.mainform[0].pinming3;
					that.name4 = data.mainform[0].pinming4;
					that.name5 = data.mainform[0].pinming5;
					that.unit1 = data.mainform[0].danwei2;
					that.unit2 = data.mainform[0].danwei3;
					that.unit3 = data.mainform[0].danwei4;
					that.unit4 = data.mainform[0].danwei5;
					that.unit5 = data.mainform[0].danwei6;
					that.num1 = data.mainform[0].shuliang2;
					that.num2 = data.mainform[0].shuliang3;
					that.num3 = data.mainform[0].shuliang4;
					that.num4 = data.mainform[0].shuliang5;
					that.num5 = data.mainform[0].shuliang6;
					that.money1 = data.mainform[0].nidingjine2;
					that.money2 = data.mainform[0].nidingjine3;
					that.money3 = data.mainform[0].nidingjine4;
					that.money4 = data.mainform[0].nidingjine5;
					that.money5 = data.mainform[0].nidingjine6;
					that.user = data.mainform[0].yongtu;
					
					that.sgbmRemote = data.formRights[0].sqbmyj;
					that.zcglRemote = data.formRights[0].zcgkbmyj;
					that.cwzjRemote = data.formRights[0].cwzjyj;
					that.fgldRemote = data.formRights[0].fgldyj;
					that.zyldRemote = data.formRights[0].zjlyj;
					
					if (data.mainform[0].sqbmyj != '') {
						that.sgbm1 = data.mainform[0].sqbmyj;
						that.sgbm = JSON.parse(data.mainform[0].sqbmyj)[0].v;
					}
					
					if (data.mainform[0].zcgkbmyj != '') {
						that.zcgl1 = data.mainform[0].zcgkbmyj;
						that.zcgl = JSON.parse(data.mainform[0].zcgkbmyj)[0].v;
					}
					if (data.mainform[0].cwzjyj != '') {
						that.cwzj1 = data.mainform[0].cwzjyj;
						that.cwzj = JSON.parse(data.mainform[0].cwzjyj)[0].v;
					}
					
					if (data.mainform[0].fgldyj != '') {
						that.fgld1 = data.mainform[0].fgldyj;
						that.fgld = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					
					if (data.mainform[0].zjlyj != '') {
						that.zyld1 = data.mainform[0].zjlyj;
						that.zyld = JSON.parse(data.mainform[0].zjlyj)[0].v;
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
			print("XXX");
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
			if (this.sgbmRemote == dataString.write) {
				if (!this.sgbm) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.zcglRemote == dataString.write) {
				if (!this.zcgl) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.cwzjRemote == dataString.write) {
				if (!this.cwzj) {
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
				if (!this.fgld) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.zyldRemote == dataString.write) {
				if (!this.zyld) {
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
		
			if (this.sgbmRemote == this.write) {
				this.comments = this.sgbm;
			} else if (this.zcglRemote == this.write) {
				this.comments = this.zcgl;
				// this.bgsyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.bgsyj + '}]';
			} else if (this.cwzjRemote == this.write) {
				this.comments = this.cwzj;
				// this.fgldyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.fgldyj + '}]';
			}else if (this.fgldRemote == this.write) {
				this.comments = this.fgld;
				// this.fgldyj = '[{ui:' + userCode + 'un:' + userName + 'c:' + currentTime + 'v:' + this.fgldyj + '}]';
			}else if (this.zyldRemote == this.write) {
				this.comments = this.zyld;
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
			myData.append('defId', dataString.assetPurchaseDefId);
			myData.append('formDefId', dataString.assetPurchaseFormDefId);
			myData.append('signaName', signaName);
			myData.append('bmDid', uni.getStorageSync('depId'));
			myData.append('bm', that.department);
			myData.append('sqrUId', uni.getStorageSync('userId'));
			myData.append('sqr', that.person);
			myData.append('sj', that.date);
			myData.append('pinming', that.name1);
			myData.append('pinming2', that.name2);
			myData.append('pinming3', that.name3);
			myData.append('pinming4', that.name4);
			myData.append('pinming5', that.name5);
			myData.append('danwei2', that.unit1);
			myData.append('danwei3', that.unit2);
			myData.append('danwei4', that.unit3);
			myData.append('danwei5', that.unit4);
			myData.append('danwei6', that.unit5);
			myData.append('shuliang2', that.num1);
			myData.append('shuliang3', that.num2);
			myData.append('shuliang4', that.num3);
			myData.append('shuliang5', that.num4);
			myData.append('shuliang6', that.num5);
			myData.append('nidingjine2', that.money1);
			myData.append('nidingjine3', that.money2);
			myData.append('nidingjine4', that.money3);
			myData.append('nidingjine5', that.money4);
			myData.append('nidingjine6', that.money5);
			myData.append('yongtu', that.user);
			myData.append('comments', that.comments);
			myData.append('sqbmyj', that.makeData(that.sgbm, that.sgbm1, that.sgbmRemote));
			myData.append('zcgkbmyj', that.makeData(that.zcgl, that.zcgl1, that.zcglRemote));
			myData.append('cwzjyj', that.makeData(that.cwzj, that.cwzj1, that.cwzjRemote));
			myData.append('fgldyj', that.makeData(that.fgld, that.fgld1, that.fgldRemote));
			myData.append('zjlyj', that.makeData(that.zyld, that.zyld1, that.zyldRemote));
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
