<!-- 配班查询 -->
<template>
	<view class="padding_2">
		<uni-list style="border-radius: 16rpx;">
			<uni-list-item :show-arrow="false" class="flex">
				<view class="displayMain">
					<picker mode="date"
					        @change="bindStartDateChange" 
							style="flex-grow: 1; position:relative; width: 100%" >
						<view class="title-font">{{startDate}}</view>
					</picker>
					<view style="width: 50%; height: 1rpx; background-color: #EBEBEB;"></view>
					<picker mode="date" 
					        @change="bindEndDateChange" 
							style="flex-grow: 1; position:relative; width: 100%">
						<view class="title-font" style=" text-align: right;">{{endDate}}</view>
					</picker>
				</view>
			</uni-list-item>
		</uni-list>
		<uni-list style="border-radius: 16rpx; margin-top: 20rpx;">
			<!-- <uni-list-item :show-arrow="false">
				<view class="flex align-center title-font">
					<text style="width: 160rpx;">线路:</text>
					<view style="flex-grow: 1;position:relative;">
						<input placeholder="请选择线路" :value="lineCode" type="text" />
						<view @click="selectLineCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="flex align-center title-font">
					<text style="width: 160rpx;">车号:</text>
					<view style="flex-grow: 1;position:relative;">
						<input placeholder="请选择车号" :value="busCode" type="text" />
						<view @click="selectBusCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
					</view>
				</view>
			</uni-list-item> -->
			
			<template v-if="positionStatus != '1'">
				<uni-list-item :show-arrow="false">
					<view class="flex align-center">
						<text style="width: 160rpx;">线路:</text>
						<view style="flex-grow: 1;position:relative;">
							<input placeholder="请选择线路" :value="lineCode" type="text" />
							<view @click="selectLineCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
						</view>
					</view>
				</uni-list-item>
				<uni-list-item :show-arrow="false">
					<view class="flex align-center">
						<text style="width: 160rpx;">车号:</text>
						<view style="flex-grow: 1;position:relative;">
							<input placeholder="请选择车号" :value="busCode" type="text" />
							<view @click="selectBusCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
						</view>
					</view>
				</uni-list-item>
				<uni-list-item :show-arrow="false">
					<view class="flex align-center">
						<text style="width: 160rpx;">驾驶员:</text>
						<view style="flex-grow: 1;position:relative;">
							<input placeholder="请选择驾驶员" :value="driverName" type="text" />
							<view @click="selectDriverName" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
						</view>
					</view>
				</uni-list-item>
			</template>
			<template v-else>
				<uni-list-item :show-arrow="false">
					<view class="flex align-center">
						<text style="width: 160rpx;">驾驶员:</text>
						<view style="flex-grow: 1;position:relative;">
							<input placeholder="请选择驾驶员" :value="driverName" type="text" />
							<view @click="selectDriverName" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
						</view>
					</view>
				</uni-list-item>
			</template>
			
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
				startDate: currentDate,
				endDate: currentDate,
				selectMethods: "请选择查询方式",
				selectText: "",
				selectMethodArr:[
					{
						show:true,
						title:"线路",
						selected:false,
					}
					// ,{
					// 	show:true,
					// 	title:"司机",
					// 	selected:false
					// }
					,{
						show:true,
						title:"车号",
						selected:false
				    }
				],
				selectMethodDic:{ },
				lineCode: "",
				driverName: "",
				busCode: "",
			    positionStatus: ""
			}
		},
		onLoad() {
			this.positionStatus = uni.getStorageSync("positionStatus")
		},
		
		methods: {
			bindStartDateChange: function(e) {
				this.startDate = e.target.value
			},
			bindEndDateChange: function(e) {
				this.endDate = e.target.value
			},
			// 选择线路
			selectLineCode() {
				uni.navigateTo({
					url:"../../commonPage/LinesByOperator"
				})
			},
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
				if (this.lineCode.length <= 0 || this.driverName.length <= 0){
					uni.showToast({
						title:"请选择查询方式"
					})
				}else{
					var index = this.driverName.lastIndexOf("-");
					var driverName = this.driverName.substring(index+1,this.driverName.length);
					
				    var shiftDic = {
				    	startDate : this.startDate,
				    	endDate : this.endDate,
				    	lineCode: this.lineCode,
				    	busCode: this.busCode,
						driverCode: driverName
				    }
				    uni.navigateTo({
				    	url: "./ShiftArrangement_Search_Detail?shiftDic=" + JSON.stringify(shiftDic) 
				    })
				}
			}
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



