<!-- 车辆报警 -->
<template>
	<view class="padding_2">
		<uni-list style="border-radius: 16rpx;">
			<uni-list-item :show-arrow="false" class="flex">
				<view class="displayMain">
					<view class="title-font" style="color: #000000; margin-right: 20rpx;width: 230rpx">查询日期：</view>
					<picker mode="date"
					        @change="bindStartDateChange_alarm" 
							style="flex-grow: 1; position:relative; width: 100%" >
						<view class="title-font">{{startDate_alarm}}</view>
					</picker>
				</view>
			</uni-list-item>
		</uni-list>
		<uni-list style="border-radius: 16rpx; margin-top: 20rpx;">
			<!-- <uni-list-item :show-arrow="false">
				<view class="flex align-center">
					<text style="width: 160rpx;">线路:</text>
					<view style="flex-grow: 1;position:relative;">
						<input placeholder="请选择线路" :value="lineCode" type="text" />
						<view @click="selectLineCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
					</view>
				</view>
			</uni-list-item> -->
			<uni-list-item :show-arrow="false">
				<view class="flex align-center title-font">
					<text style="width: 160rpx;">车号:</text>
					<view style="flex-grow: 1;position:relative;">
						<input placeholder="请选择车号" :value="busCode" type="text" />
						<view @click="selectBusCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
					</view>
			
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="flex align-center title-font">
					<text style="width: 160rpx;">驾驶员:</text>
					<view style="flex-grow: 1;position:relative;">
						<input placeholder="请选择驾驶员" :value="driverName" type="text" />
						<view @click="selectDriverName" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
		<view class="searchBtn title-font" @click="searchClick">查询</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import hyDate from '@/common/js/hy-date.js'
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniList,
			uniListItem,
			hyDate,
		},
		data() {
			const currentDate = hyDate.getDate({
				format: true
			})
			return {
				startDate_alarm: currentDate,
				
				driverName: "",
				driverCode: "",
				// lineCode: "",
				busCode: ""
				
			}
		},
		
		methods: {
			bindStartDateChange_alarm: function(e) {
				this.startDate_alarm = e.target.value
			},
			
			// 选择线路
			// selectLineCode() {
			// 	uni.navigateTo({
			// 		url:"../../commonPage/LinesByOperator"
			// 	})
			// },
			// 选择驾驶员
			selectDriverName() {
				uni.navigateTo({
					url:"../../commonPage/AllDriveName"
				})
			},
			// 选择车号
			selectBusCode() {
				uni.navigateTo({
					url:"../../commonPage/AllBusCode"
				})
			},
			// 查询按钮点击
			searchClick(e) {
				var subStr = new RegExp('-','ig');
				var startDate = this.startDate_alarm.replace(subStr,"");
				
				if (this.busCode.length <= 0 && this.driverName.length <= 0 ){
					uni.showToast({
						title:"请选择查询方式"
					})
				}else{
					var alarmDic = {
						queryDate : startDate,
						// lineCode: this.lineCode,
						driverName: this.driverCode,
						busCode: this.busCode
					}
					uni.navigateTo({
						url: "./Vehicle_Alarm_Detail?alarmDic=" + JSON.stringify(alarmDic) 
						
					})
				}
			},
		}
	}
</script>

<style>
	
	.displayMain{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.date_alarm{
		width:100%;
		height: 100%;  
		background-color:#FFFFFF; 
		position: absolute;
	}
	
	.content_view {
		/* width: 80%; */
		height: 50%;
		text-align: center; 
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		margin: 10%;
		
	}
	
</style>

