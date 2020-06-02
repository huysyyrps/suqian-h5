<!-- 我的考勤 -->
<template>
	<view class="padding_2">
		<view class="flex align-center padding_2" style="background-color: #FFFFFF;">
			<view class="title-font" style="width: 200rpx;">查询日期：</view>
			<picker mode="date" fields="month"
				    @change="bindDateChange" 
				    style="flex-grow: 1; position:relative; width: 100%">
				<view class="title-font">{{queryDate}}</view>
			</picker>
		</view>
		<template v-if="length > 0">
		    <view class="padding_2" style="background-color: #FFFFFF; margin-top: 20rpx;  border-radius: 15rpx;">
				<view class="backgroundImage" style="width: 100%;height: 130rpx;">
					<view class="flex align_center justify_between">
						<view class="flex flex-col padding_2">
							<view class="font-lb">{{username}}</view>
							<view style="font-size: 26rpx; color: #808080;">{{department}}</view>
						</view>
						<view class="flex align_center">
							<view class="flex flex-col">
								<view class="font-lb">{{attendanceDetailArray["planDays"]}}</view>
								<view style="font-size: 24rpx; color: #808080;">应出勤</view>
							</view>
							<view class="flex flex-col padding_2">
								<view class="font-lb">{{attendanceDetailArray["realDays"]}}</view>
								<view style="font-size: 24rpx; color: #808080;">实际出勤</view>
							</view>
						</view>
					</view>
				</view>
				<view style="width: 100%; height: 2rpx; background-color: #F5F5F5;"></view>
				<uni-grid class="grid-view" :column="3" :show-border="false" :square="false">
					 <uni-grid-item v-for="(item, index) in attendanceTitleArr" v-if="item" :index="index" :key="index">
						<view class=" flex align_center" >
							<image style="width: 30rpx; height: 30rpx;" :src="item.icon"></image>
						    <label style="font-size: 24rpx;">{{item.title}}</label>
							<label style="font-size: 24rpx;padding-left: 15rpx;">{{item.days}}</label>
						</view>
					</uni-grid-item>
				</uni-grid>
				<view style="height: 200rpx;"></view>
			</view>
		</template>
		<!-- 无数据 -->
		<template v-else-if="length === 0">
			<no-content></no-content>
		</template>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import noContent from '@/common/uni-common/no_content.vue'
	var resquestJSOB = require('../../../common/js/hy-request.js');
	var urlJSOB = require('../../../common/js/hy-url.js');
	export default {
		components:{ //注册一下
			uniList,
			uniListItem,
			noContent
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				queryDate: currentDate,
				username: "",
				department: "",
				departmentCode: "",
				userCode: "",
				attendanceTitleArr: [
					{
						title: "休班",
						icon: "/static/normal.png",
						days: ""
					},{
						title: "迟到(次)",
						icon: "/static/abnormalIcon.png",
						days: ""
					},{
						title: "早退(次)",
						icon: "/static/abnormalIcon.png",
						days: ""
					},{
						title: "旷工",
						icon: "/static/abnormalIcon.png",
						days: ""
					},{
						title: "事假",
						icon: "/static/leaveIcon.png",
						days: ""
					},{
						title: "产假",
						icon: "/static/goodIcon.png",
						days: ""
					},{
						title: "年休假",
						icon: "/static/normal.png",
						days: ""
					},{
						title: "婚假",
						icon: "/static/goodIcon.png",
						days: ""
					},{
						title: "丧假",
						icon: "/static/notGoodIcon.png",
						days: ""
					},{
						title: "探亲假",
						icon: "/static/leaveIcon.png",
						days: ""
					},{
						title: "工伤",
						icon: "/static/notGoodIcon.png",
						days: ""
					},{
						title: "陪产假",
						icon: "/static/goodIcon.png",
						days: ""
					}
				],
				attendanceDetailArray:[],
				success: false,
				length: -1
			}
		},
		onLoad(e) {
			this.getPersonalData()
		},
		
		methods: {
			getPersonalData(){
				this.username = uni.getStorageSync("userName");
				this.userCode = uni.getStorageSync("userId");
				this.department = uni.getStorageSync("depName");
				this.departmentCode = uni.getStorageSync("depId");
				
				console.log("username" + this.username)
			},
			
			
			// 网络请求
			sendGetListDataRequest() { //
				var that = this;
				var subStr = new RegExp('-','ig');
				var queryDate = this.queryDate.replace(subStr,"");
				
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getAttendanceDetailsURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: {
						Q_dateTime_S_GE: queryDate,
						Q_dateTime_S_LE: queryDate,
						Q_departCode_S_EQ: that.departmentCode,
						Q_userCode_S_EQ: that.userCode
					},
					successCallBack: function(data) {
						var result = data.result;
						that.success = data.success;
						var detailArray = new Array();
						if (result.length > 0){
							that.length = result.length
							console.log("进来")
							detailArray = result[0]
						}else{
							that.length = 0
						}
						that.attendanceDetailArray = detailArray
						if (result.length > 0){
							
							that.attendanceTitleArr[0].days = detailArray["holiDays"]
							that.attendanceTitleArr[1].days = detailArray["chiDao"]
							that.attendanceTitleArr[2].days = detailArray["zaoTui"]
							that.attendanceTitleArr[3].days = detailArray["kuangGong"]
							that.attendanceTitleArr[4].days = detailArray["shij"]
							that.attendanceTitleArr[5].days = detailArray["cj"]
							that.attendanceTitleArr[6].days = detailArray["nxj"]
							that.attendanceTitleArr[7].days = detailArray["hj"]
							that.attendanceTitleArr[8].days = detailArray["sangj"]
							that.attendanceTitleArr[9].days = detailArray["tqj"]
							that.attendanceTitleArr[10].days = detailArray["gs"]
							that.attendanceTitleArr[11].days = detailArray["pcj"]
						}
						
					},
					failCallBack: function() {
						
					}
				});
			},
			
			bindDateChange: function(e) {
				this.queryDate = e.target.value
				if(this.queryDate!=""){
					this.sendGetListDataRequest()
				}
			},
			
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			
			    if (type === 'start') {
			        year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;
			    return `${year}-${month}`;
			}
		}
	}
</script>

<style>
	page{
		 background-color: #F5F5F5;
	}
	.displayMain{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.viewSet{
		text-align: center;
		color: #FFFFFF;
		font-size: 25rpx;
		padding-top: 7rpx;
		width: 100rpx;
		height: 40rpx;
		border-radius: 25rpx;
	}
	.margin{
		margin: 30rpx;
	}
	
	.flexAndPadding{
		display: flex;
		padding: 10rpx 0rpx;
	}
	
	.backgroundImage{
		/* background-image: url(../../../static/attendanceBG.png); */
	}
	
	.flexNo{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 250rpx;
	}
	.font{
		font-size: 35rpx;
		color: #999999;
	}
</style>

