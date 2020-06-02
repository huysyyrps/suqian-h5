<!-- 信息查询 -->
<template>
	<view class="content">
		<uni-grid class="grid-view"  :column="3" :show-border="false" :square="false" @change="inforSearchArrChange">
			 <uni-grid-item v-for="(item, index) in inforSearchArr" v-if="item.show"  :index="index" :key="index" >
				<view class="item-content-view">
					<image :src="item.imgUrl"></image>
				    <label style="font-size: 30rpx;">{{item.title}}</label>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				inforSearchArr:[
					{
						show:true,
						title:"违规信息",
						imgUrl:"/static/violationIcon.png",
						pageUrl:"../Violation_Information_Search/Violation_Information_Search"
					},
					{
						show:true,
						title:"报警信息",
						imgUrl:"/static/warnIcon.png",
						pageUrl:"../../Operational_Indicators/Vehicle_Alarm/Vehicle_Alarm"
						
					},
					{
						show:true,
						title:"里程查询",
						imgUrl:"/static/mileageIcon.png",
						pageUrl:"../Mileage_Query_Search/Mileage_Query_Search"
					},
					{
						show:true,
						title:"车次查询",
						imgUrl:"/static/busIcon.png",
						pageUrl:"../Trains_Search/Trains_Search"
					},
					{
						show:true,
						title:"配车排班",
						imgUrl:"/static/tripsIcon.png",
						pageUrl:"../ShiftArrangement_Search/ShiftArrangement_Search"
					}
				],
			}
		},
		
		methods: {
			inforSearchArrChange(e){
				let {
					index
				} = e.detail;
				let tag = this.inforSearchArr[index]["tag"];	
				let pageUrl = this.inforSearchArr[index]["pageUrl"];	
				
				uni.navigateTo({
					url:pageUrl
				})
			}
		}
	}
</script>

<style>
    
</style>


