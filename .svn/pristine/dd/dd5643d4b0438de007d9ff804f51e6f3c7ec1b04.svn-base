//固定资产处置审批表
<template>
	<view style="background-color: #EFEFF4;">
		<!-- <view class="item">
			<text class="itemName">经办人:</text>
			<input class="input" placeholder="请选择经办人" v-model="person" type="button" />
		</view>
		<view class="hourLine"></view> -->

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
				<input class="t-header" v-model="xh" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" v-model="name" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="type" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" v-model="unit" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" v-model="num" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" v-model="money" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" v-model="allmoney" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" v-model="dateHeader" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="address" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="ytzj" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="zcjz" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="reason" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" v-model="memo" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit1" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num1" type="number" @input="nAllMoney1" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money1" type="number" @input="mAllMoney1" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney1" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason1" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo1" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit2" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num2" type="number" @input="nAllMoney2" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money2" type="number" @input="mAllMoney2" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney2" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason2" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo2" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit3" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num3" @input="nAllMoney3" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money3" @input="mAllMoney3" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney3" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason3" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo3" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit4" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num4" @input="nAllMoney4" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money4" @input="mAllMoney4" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney4" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason4" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo4" style="width: 400rpx;display:inline-block;"/>
			</view>
			<view class="v-header" style="white-space: nowrap; display: inline-block;">
				<input class="t-header" :maxlength="13" v-model="xh5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="name5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="type5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="unit5" style="width: 100rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="num5" @input="nAllMoney5" style="width: 150rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="money5" @input="mAllMoney5" style="width: 200rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="allmoney5" style="width: 300rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="date5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="address5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="ytzj5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="zcjz5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="reason5" style="width: 400rpx;display:inline-block;"/>
				<input class="t-header" :maxlength="13" v-model="memo5" style="width: 400rpx;display:inline-block;"/>
			</view>
		</scroll-view>

		<!-- <view class="item">
			<text class="itemName">预算总价*:</text>
			<input class="input" placeholder="请输入预算总价" v-model="allMoney" type="digit" />
		</view>
		<view class="hourLine"></view>

		<view class="item">
			<text class="itemNamearea" style="display: flex;justify-content: center;align-items: center;">申请事由*:</text>
			<textarea class="inputarea" :auto-height="true" placeholder="请输入申请事由" placeholder-style="lineHeight:150rpx" v-model="reason" type="text" />
		</view>
		<view class="hourLine"></view> -->

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
var dateJson = require('../../../../../common/js/hy-date.js');
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
export default {
	components: { uniSection, uniPopup, uniIcons },
	data() {
		return {
			index: 0,
			type: '',
			department: '',
			date: dateJson.getDay(),
			allMoney: '',
			reason: '',
			xh:'资产编码',
			name:'资产名称',
			type:'规格型号',
			unit:'单位',
			num:'申购数量',
			money:'预算单价',
			allmoney:'合计',
			dateHeader:'购置日期',
			address:'存放地点',
			ytzj:'已提折旧',
			zcjz:'资产净值',
			reason:'处置原因',
			memo:'备注',
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
			date1:'',
			date2:'',
			date3:'',
			date4:'',
			date5:'',
			address1:'',
			address2:'',
			address3:'',
			address4:'',
			address5:'',
			ytzj1:'',
			ytzj2:'',
			ytzj3:'',
			ytzj4:'',
			ytzj5:'',
			zcjz1:'',
			zcjz2:'',
			zcjz3:'',
			zcjz4:'',
			zcjz5:'',
			reason1:'',
			reason2:'',
			reason3:'',
			reason4:'',
			reason5:'',
			memo1:'',
			memo2:'',
			memo3:'',
			memo4:'',
			memo5:'',
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
		setData: function(e) {
			this.department = uni.getStorageSync('depName');
		},
		//获取路径
		getFlowLine: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.upflowline,
				data: {
					defId: dataString.assetDisposalDefId
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
					defId: dataString.assetDisposalDefId,
					activityName: destination
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
		nAllMoney1:function(e){
			console.log(e.detail)
			this.num1 = e.detail.value;
			console.log(this.num1);
			this.allmoney1 = this.num1*this.money1;
		},
		mAllMoney1:function(e){
			console.log(e.detail)
			this.money1 = e.detail.value;
			console.log(this.money1);
			console.log(this.num1);
			this.allmoney1 = this.num1*this.money1;
			console.log(this.allmoney1);
		},
		nAllMoney2:function(e){
			console.log(e.detail)
			this.num2 = e.detail.value;
			console.log(this.num2);
			this.allmoney2 = this.num2*this.money2;
		},
		mAllMoney2:function(e){
			console.log(e.detail)
			this.money2 = e.detail.value;
			console.log(this.money2);
			console.log(this.num2);
			this.allmoney2 = this.num2*this.money2;
			console.log(this.allmoney2);
		},
		nAllMoney3:function(e){
			this.num3 = e.detail.value;
			this.allmoney3 = this.num3*this.money3;
		},
		mAllMoney3:function(e){
			this.money3 = e.detail.value;
			this.allmoney3 = this.num3*this.money3;
		},
		nAllMoney4:function(e){
			this.num4 = e.detail.value;
			this.allmoney4 = this.num4*this.money4;
		},
		mAllMoney4:function(e){
			this.money4 = e.detail.value;
			this.allmoney4 = this.num4*this.money4;
		},
		nAllMoney5:function(e){
			this.num5 = e.detail.value;
			this.allmoney5 = this.num5*this.money5;
		},
		mAllMoney5:function(e){
			this.money5 = e.detail.value;
			this.allmoney5 = this.num5*this.money5;
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
			if (!this.department || !this.date) {
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
			var myData = new FormData();
			myData.append('useTemplate', false);
			myData.append('startFlow', true);
			myData.append('destName', destination);
			myData.append('sendMsg', true);
			myData.append('sendMail', true);
			myData.append('flowAssignId', this.flowAssignId);
			myData.append('defId', dataString.assetDisposalDefId);
			myData.append('formDefId', dataString.assetDisposalFormDefId);
			myData.append('bmDid', uni.getStorageSync('depId'));
			myData.append('bm', uni.getStorageSync('depName'));
			myData.append('gzrq', this.date);
			myData.append('zcbm1', this.xh1);
			myData.append('zcbm2', this.xh2);
			myData.append('zcbm3', this.xh3);
			myData.append('zcbm4', this.xh4);
			myData.append('zcbm5', this.xh5);
			myData.append('zcmc1', this.name1);
			myData.append('zcmc2', this.name2);
			myData.append('zcmc3', this.name3);
			myData.append('zcmc4', this.name4);
			myData.append('zcmc5', this.name5);
			myData.append('ggxh1', this.type1);
			myData.append('ggxh2', this.type2);
			myData.append('ggxh3', this.type3);
			myData.append('ggxh4', this.type4);
			myData.append('ggxh5', this.type5);
			myData.append('sl1', this.num1);
			myData.append('sl2', this.num2);
			myData.append('sl3', this.num3);
			myData.append('sl4', this.num4);
			myData.append('sl5', this.num5);
			myData.append('dw1', this.unit1);
			myData.append('dw2', this.unit2);
			myData.append('dw3', this.unit3);
			myData.append('dw4', this.unit4);
			myData.append('dw5', this.unit5);
			myData.append('dj1', this.money1);
			myData.append('dj2', this.money2);
			myData.append('dj3', this.money3);
			myData.append('dj4', this.money4);
			myData.append('dj5', this.money5);
			myData.append('je1', this.allmoney1);
			myData.append('je2', this.allmoney2);
			myData.append('je3', this.allmoney3);
			myData.append('je4', this.allmoney4);
			myData.append('je5', this.allmoney5);
			myData.append('gzrq', this.date1);
			myData.append('gzrq2', this.date2);
			myData.append('gzrq3', this.date3);
			myData.append('gzrq4', this.date4);
			myData.append('gzrq5', this.date5);
			myData.append('cfdd2', this.address1);
			myData.append('cfdd3', this.address2);
			myData.append('cfdd4', this.address3);
			myData.append('cfdd5', this.address4);
			myData.append('cfdd6', this.address5);
			myData.append('ytzj1', this.ytzj1);
			myData.append('ytzj2', this.ytzj2);
			myData.append('ytzj3', this.ytzj3);
			myData.append('ytzj4', this.ytzj4);
			myData.append('ytzj5', this.ytzj5);
			myData.append('zcjz', this.zcjz1);
			myData.append('zcjz2', this.zcjz2);
			myData.append('zcjz3', this.zcjz3);
			myData.append('zcjz4', this.zcjz4);
			myData.append('zcjz5', this.zcjz5);
			myData.append('czyy1', this.reason1);
			myData.append('czyy2', this.reason2);
			myData.append('czyy3', this.reason3);
			myData.append('czyy4', this.reason4);
			myData.append('czyy5', this.reason5);
			myData.append('bz1', this.memo1);
			myData.append('bz2', this.memo2);
			myData.append('bz3', this.memo3);
			myData.append('bz4', this.memo4);
			myData.append('bz5', this.memo5);
			
			myData.append('sqbmyj', '');
			myData.append('jbbmyj', '');
			myData.append('cwbyj', '');
			myData.append('fgldyj', '');
			myData.append('bgsyj', '');
			myData.append('zjlyj', '');
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
