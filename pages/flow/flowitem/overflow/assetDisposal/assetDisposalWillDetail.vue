//固定资产处置审批表
<template>
	<view style="background-color: #EFEFF4;">
	<!-- 	<view class="item">
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
			<input class="input" placeholder="请选择申请时间" v-model="date" type="text" />
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
					<text class="uni-tip-button" @click="cancel('tip')">确定</text>
				</view>
			</view>
		</uni-popup>
		<view class="item" style="border-top: #CCCCCC 1rpx solid;">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">申购部门:</text>
			<text class="input" v-if="sqbmyjRemote == read" :auto-height="true">{{ sqbmyj }}</text>
			<textarea class="input" v-if="sqbmyjRemote == write" :auto-height="true" v-model="sqbmyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">管理部门:</text>
			<text class="input" v-if="jbbmyjRemote == read" :auto-height="true">{{ jbbmyj }}</text>
			<textarea class="input" v-if="jbbmyjRemote == write" :auto-height="true" v-model="jbbmyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">财务部门:</text>
			<text class="input" v-if="cwbyjRemote == read" :auto-height="true">{{ cwbyj }}</text>
			<textarea class="input" v-if="cwbyjRemote == write" :auto-height="true" v-model="cwbyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">分管领导:</text>
			<text class="input" v-if="fgldyjRemote == read" :auto-height="true">{{ fgldyj }}</text>
			<textarea class="input" v-if="fgldyjRemote == write" :auto-height="true" v-model="fgldyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">主要领导:</text>
			<text class="input" v-if="zyldyjRemote == read" :auto-height="true">{{ zyldyj }}</text>
			<textarea class="input" v-if="zyldyjRemote == write" :auto-height="true" v-model="zyldyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" style="display: flex;justify-content: center;align-items: center;">主管部门:</text>
			<text class="input" v-if="bgsyjRemote == read" :auto-height="true">{{ bgsyj }}</text>
			<textarea class="input" v-if="bgsyjRemote == write" :auto-height="true" v-model="bgsyj" />
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
			sqbmyj:'',
			jbbmyj: '',
			cwbyj: '',
			fgldyj: '',
			zyldyj: '',
			bgsyj: '',
			sqbmyj1:'',
			jbbmyj1: '',
			cwbyj1: '',
			fgldyj1: '',
			zyldyj1: '',
			bgsyj1: '',
			sqbmyjRemote:'',
			jbbmyjRemote: '',
			cwbyjRemote: '',
			fgldyjRemote: '',
			zyldyjRemote: '',
			bgsyjRemote: '',
			flowAssignId: '',
			personLine: [],
			personLine1: [],
			comments: '',
			destTypeList: [],
			selectperson: [],
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
					that.date = data.mainform[0].gzrq;
					that.person = data.mainform[0].sgr;
					that.department = data.mainform[0].bm;
					that.xh1 = data.mainform[0].zcbm1;
					that.xh2 = data.mainform[0].zcbm2;
					that.xh3 = data.mainform[0].zcbm3;
					that.xh4 = data.mainform[0].zcbm4;
					that.xh5 = data.mainform[0].zcbm5;
					that.name1 = data.mainform[0].zcmc1;
					that.name2 = data.mainform[0].zcmc2;
					that.name3 = data.mainform[0].zcmc3;
					that.name4 = data.mainform[0].zcmc4;
					that.name5 = data.mainform[0].zcmc5;
					that.type1 = data.mainform[0].ggxh1;
					that.type2 = data.mainform[0].ggxh2;
					that.type3 = data.mainform[0].ggxh3;
					that.type4 = data.mainform[0].ggxh4;
					that.type5 = data.mainform[0].ggxh5;
					that.unit1 = data.mainform[0].dw1;
					that.unit2 = data.mainform[0].dw2;
					that.unit3 = data.mainform[0].dw3;
					that.unit4 = data.mainform[0].dw4;
					that.unit5 = data.mainform[0].dw5;
					that.num1 = data.mainform[0].sl1;
					that.num2 = data.mainform[0].sl2;
					that.num3 = data.mainform[0].sl3;
					that.num4 = data.mainform[0].sl4;
					that.num5 = data.mainform[0].sl5;
					that.money1 = data.mainform[0].dj1;
					that.money2 = data.mainform[0].dj2;
					that.money3 = data.mainform[0].dj3;
					that.money4 = data.mainform[0].dj4;
					that.money5 = data.mainform[0].dj5;
					that.allmoney1 = data.mainform[0].je1;
					that.allmoney2 = data.mainform[0].je2;
					that.allmoney3 = data.mainform[0].je3;
					that.allmoney4 = data.mainform[0].je4;
					that.allmoney5 = data.mainform[0].je5;
					that.date1 = data.mainform[0].gzrq;
					that.date2 = data.mainform[0].gzrq2;
					that.date3 = data.mainform[0].gzrq3;
					that.date4 = data.mainform[0].gzrq4;
					that.date5 = data.mainform[0].gzrq5;
					that.address1 = data.mainform[0].cfdd2;
					that.address2 = data.mainform[0].cfdd3;
					that.address3 = data.mainform[0].cfdd4;
					that.address4 = data.mainform[0].cfdd5;
					that.address5 = data.mainform[0].cfdd6;
					that.ytzj1 = data.mainform[0].ytzj1;
					that.ytzj2 = data.mainform[0].ytzj2;
					that.ytzj3 = data.mainform[0].ytzj3;
					that.ytzj4 = data.mainform[0].ytzj4;
					that.ytzj5 = data.mainform[0].ytzj5;
					that.zcjz1 = data.mainform[0].zcjz;
					that.zcjz2 = data.mainform[0].zcjz2;
					that.zcjz3 = data.mainform[0].zcjz3;
					that.zcjz4 = data.mainform[0].zcjz4;
					that.zcjz5 = data.mainform[0].zcjz5;
					that.reason1 = data.mainform[0].czyy1;
					that.reason2 = data.mainform[0].czyy2;
					that.reason3 = data.mainform[0].czyy3;
					that.reason4 = data.mainform[0].czyy4;
					that.reason5 = data.mainform[0].czyy5;
					that.memo1 = data.mainform[0].bz1;
					that.memo2 = data.mainform[0].bz2;
					that.memo3 = data.mainform[0].bz3;
					that.memo4 = data.mainform[0].bz4;
					that.memo5 = data.mainform[0].bz5;
					
					that.sqbmyjRemote = data.formRights[0].sqbmyj;
					that.jbbmyjRemote = data.formRights[0].jbbmyj;
					that.cwbyjRemote = data.formRights[0].cwbyj;
					that.fgldyjRemote = data.formRights[0].fgldyj;
					that.zyldyjRemote = data.formRights[0].zyldyj;
					that.bgsyjRemote = data.formRights[0].bgsyj;
					
					if (data.mainform[0].sqbmyj != '') {
						that.sqbmyj1 = data.mainform[0].sqbmyj;
						that.sqbmyj = JSON.parse(data.mainform[0].sqbmyj)[0].v;
					}
					
					if (data.mainform[0].jbbmyj != '') {
						that.jbbmyj1 = data.mainform[0].jbbmyj;
						that.jbbmyj = JSON.parse(data.mainform[0].jbbmyj)[0].v;
					}
					if (data.mainform[0].cwbyj != '') {
						that.cwbyj1 = data.mainform[0].cwbyj;
						that.cwbyj = JSON.parse(data.mainform[0].cwbyj)[0].v;
					}
					
					if (data.mainform[0].fgldyj != '') {
						that.fgld1 = data.mainform[0].fgldyj;
						that.fgld = JSON.parse(data.mainform[0].fgldyj)[0].v;
					}
					
					if (data.mainform[0].zyldyj != '') {
						that.zyldyj1 = data.mainform[0].zyldyj;
						that.zyldyj = JSON.parse(data.mainform[0].zyldyj)[0].v;
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
			if (this.sqbmyjRemote == dataString.write) {
				if (!this.sqbmyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.jbbmyjRemote == dataString.write) {
				if (!this.jbbmyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.cwbyjRemote == dataString.write) {
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
			if (this.fgldyjRemote == dataString.write) {
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
			if (this.zyldyjRemote == dataString.write) {
				if (!this.zyldyj) {
					uni.showToast({
						title: '请签字',
						icon: 'none',
						duration: 800,
						position: 'bottom'
					});
					return;
				}
			}
			if (this.bgsyjRemote == dataString.write) {
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
			myData.append('defId', dataString.assetDisposalDefId);
			myData.append('formDefId', dataString.assetDisposalFormDefId);
			myData.append('bmDid', uni.getStorageSync('depId'));
			myData.append('bm', that.department);
			myData.append('sqsj', that.date);
			myData.append('zcbm1', that.xh1);
			myData.append('zcbm2', that.xh2);
			myData.append('zcbm3', that.xh3);
			myData.append('zcbm4', that.xh4);
			myData.append('zcbm5', that.xh5);
			myData.append('zcmc1', that.name1);
			myData.append('zcmc2', that.name2);
			myData.append('zcmc3', that.name3);
			myData.append('zcmc4', that.name4);
			myData.append('zcmc5', that.name5);
			myData.append('ggxh1', that.type1);
			myData.append('ggxh2', that.type2);
			myData.append('ggxh3', that.type3);
			myData.append('ggxh4', that.type4);
			myData.append('ggxh5', that.type5);
			myData.append('sl1', that.num1);
			myData.append('sl2', that.num2);
			myData.append('sl3', that.num3);
			myData.append('sl4', that.num4);
			myData.append('sl5', that.num5);
			myData.append('dw1', that.unit1);
			myData.append('dw2', that.unit2);
			myData.append('dw3', that.unit3);
			myData.append('dw4', that.unit4);
			myData.append('dw5', that.unit5);
			myData.append('dj1', that.money1);
			myData.append('dj2', that.money2);
			myData.append('dj3', that.money3);
			myData.append('dj4', that.money4);
			myData.append('dj5', that.money5);
			myData.append('je1', that.allmoney1);
			myData.append('je2', that.allmoney2);
			myData.append('je3', that.allmoney3);
			myData.append('je4', that.allmoney4);
			myData.append('je5', that.allmoney5);
			
			myData.append('gzrq', that.date1);
			myData.append('gzrq2', that.date2);
			myData.append('gzrq3', that.date3);
			myData.append('gzrq4', that.date4);
			myData.append('gzrq5', that.date5);
			
			myData.append('cfdd2', that.address1);
			myData.append('cfdd3', that.address2);
			myData.append('cfdd4', that.address3);
			myData.append('cfdd5', that.address4);
			myData.append('cfdd6', that.address5);
			
			myData.append('ytzj1', that.ytzj1);
			myData.append('ytzj2', that.ytzj2);
			myData.append('ytzj3', that.ytzj3);
			myData.append('ytzj4', that.ytzj4);
			myData.append('ytzj5', that.ytzj5);
			myData.append('zcjz', that.zcjz1);
			myData.append('zcjz2', that.zcjz2);
			myData.append('zcjz3', that.zcjz3);
			myData.append('zcjz4', that.zcjz4);
			myData.append('zcjz5', that.zcjz5);
			myData.append('czyy1', that.reason1);
			myData.append('czyy2', that.reason2);
			myData.append('czyy3', that.reason3);
			myData.append('czyy4', that.reason4);
			myData.append('czyy5', that.reason5);
			myData.append('bz1', that.memo1);
			myData.append('bz2', that.memo2);
			myData.append('bz3', that.memo3);
			myData.append('bz4', that.memo4);
			myData.append('bz5', that.memo5);
			myData.append('comments', that.comments);
			myData.append('sqbmyj', that.makeData(that.sqbmyj, that.sqbmyj1, that.sqbmyjRemote));
			myData.append('jbbmyj', that.makeData(that.jbbmyj, that.jbbmyj1, that.jbbmyjRemote));
			myData.append('cwbyj', that.makeData(that.cwbyj, that.cwbyj1, that.cwbyjRemote));
			myData.append('fgldyj', that.makeData(that.fgldyj, that.fgldyj1, that.fgldyjRemote));
			myData.append('zyldyj', that.makeData(that.zyldyj, that.zyldyj1, that.zyldyjRemote));
			myData.append('bgsyj', that.makeData(that.bgsyj, that.bgsyj1, that.bgsyjRemote));
			
			
			
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
				uni.showToast({
					title: currentTime,
					icon: 'none',
					duration: 800,
					position: 'bottom'
				});
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
