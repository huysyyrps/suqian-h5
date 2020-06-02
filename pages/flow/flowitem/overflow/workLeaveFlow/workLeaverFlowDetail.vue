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
		<view class="item">
			<text class="itemName" >办公室意见:</text>
			<input class="input" :auto-height="true" v-model="bgsyj" />
			<!-- <textarea class="input" v-if="bmfzrRemote == write" :auto-height="true" v-model="bmfzryj" style="padding-top: 30rpx; padding-left: 25rpx;" /> -->
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >人力资源:</text>
			<input class="input" :auto-height="true" v-model="rlzybyj" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >分管领导:</text>
			<input class="input" :auto-height="true" v-model="fgldyj"  />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName" >总经理:</text>
			<input class="input" :auto-height="true" v-model="zjlyj"  />
		</view>
		<view class="hourLine"></view>
	</view>
</template>

<script>
var runID = '';
var resquestJSOB = require('../../../../../common/js/hy-request.js');
var urlJSOB = require('../../../../../common/js/hy-url.js');
var dataString = require('../../../../../common/js/hy-stringUtil.js');
export default {
	data() {
		return {
			write: dataString.write,
			read: dataString.read,
			
			person: '',
			date: '',
			leaverType: '',
			startDate: '',
			startTime: '',
			endDate: '',
			endTime :'',
			leaverDays :'',
			reason :'',
			bgsyj:'',
			rlzybyj:'',
			fgldyj:'',
			zjlyj:'',
			
			flowAssignId:'',
			nametemp: [],
			allnametemp:[],
			codetemp:[],
			allcodetemp:[],
			bigNametemp: [],
			bigCodetemp:[],
			destTypeList: [],
			namelist:[],
			selectperson: [],
			selectindex: [],
			test: [],
		};
	},
	onLoad(options) {
			// const item = JSON.parse(decodeURIComponent(options.data));
			runID = options.runId;
			console.log(runID);
			this.getworkLeaverFlowDetail();
		},
		methods: {
			getworkLeaverFlowDetail: function(e) {
				var that = this;
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.overflowdetail, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: {
						runId: runID,
					},
					successCallBack: function(data) {
						console.log(data);
						runID = data.mainform[0].runId;
						that.person = data.mainform[0].fullname;
						that.date = data.mainform[0].TianDanRiQi;
						that.leaverType = data.mainform[0].vocationType;
						that.startDate = data.mainform[0].beginDate;
						that.startTime = data.mainform[0].ksdayType;
						that.endDate = data.mainform[0].endDate;
						that.endTime = data.mainform[0].jsdayType;
						that.leaverDays = data.mainform[0].vocationDays;
						that.reason = data.mainform[0].shiyou;
						
						if(data.mainform[0].bgsyj!=""){
							that.bgsyj = JSON.parse(data.mainform[0].bgsyj)[0].v;
						}
						if(data.mainform[0].rlzybyj!=""){
							that.rlzybyj = JSON.parse(data.mainform[0].rlzybyj)[0].v;
						}
						if(data.mainform[0].fgldyj!=""){
							that.fgldyj = JSON.parse(data.mainform[0].fgldyj)[0].v;
						}
						if(data.mainform[0].zjlyj!=""){
							that.zjlyj = JSON.parse(data.mainform[0].zjlyj)[0].v;
						}
					},
					failCallBack: function(e) {
						print(e);
						console.log(e);
					}
				});
			},
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
	