<!-- 运营指标监控 -->
<template>
	<view class="content">
		<uni-grid class="grid-view"  :column="3" :show-border="false" :square="false" @change="opeIndicatorsArrChange">
			 <uni-grid-item v-for="(item, index) in opeIndicatorsArr" v-if="item.show"  :index="index" :key="index" >
				<view class="item-content-view">
					<image :src="item.imgUrl"></image>
				    <label class="title-font">{{item.title}}</label>
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
				opeIndicatorsArr:[
					{
						show:true,
						title:"车辆违规",
						imgUrl:"/static/violationIcon.png",
						pageUrl:"../../Information_Search/Violation_Information_Search/Violation_Information_Search"
					},
					{
						show:true,
						title:"车辆报警",
						imgUrl:"/static/warnIcon.png",
						pageUrl:"../Vehicle_Alarm/Vehicle_Alarm"
						
					},
					{
						show:true,
						title:"完成、准点率",
						imgUrl:"/static/comOrPunRateIcon.png",
						pageUrl:"../CompletionOrPunctuality_Rate/CompletionOrPunctuality_Rate"
					}
				],
			}
		},
		
		methods: {
			opeIndicatorsArrChange(e){
				let {
					index
				} = e.detail;
				let tag = this.opeIndicatorsArr[index]["tag"];	
				let pageUrl = this.opeIndicatorsArr[index]["pageUrl"];	
				
				uni.navigateTo({
					url:pageUrl
				})
			}
		}
	}
</script>

<style>
    
</style>

