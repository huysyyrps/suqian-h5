<!-- 违规信息列表 -->
<template>
	<view class="padding_2">
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
			<view class="flex align-center justify-between padding_2" 
			      style="background-color: #FFFFFF; border-radius: 20rpx;"
			      v-for="(item,index) in detailList" :key="index"
				  @click="listItemClick(item)">
				<view class="flex flex-col">
					<view class="flex align-center ">
						<view class="widthV lgFont">车牌号：</view>
						<view class="lgFont">{{item.carNo}}</view>
					</view>
					<view class="flex align-center grayColor">
						<view class="widthV">驾驶员：</view>
						<view>{{item.driverName}}</view>
					</view>
					<view class="flex align-center grayColor">
						<view class="widthV">线路：</view>
						<view>{{item.lineCode}}</view>
					</view>
				</view>
				<view class="redColor lgFont">{{item.projectUsingName}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	
	var resquestJSOB = require('../../../common/js/hy-request.js');
	var urlJSOB = require('../../../common/js/hy-url.js');
	var stringUtil = require('../../../common/js/hy-stringUtil.js');
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				titleList:[ ],
				detailList:[ ],
				vioInforDict: { }
			}
		},
		onLoad(data) {
		    this.vioInforDict = JSON.parse(data.vioInforDict);
			this.sendViolationInformationDataRequest();
		},
		methods: {
			listItemClick(item){
				uni.navigateTo({
					url: "./Violation_Information_Search_List_Detail?listItem=" + JSON.stringify(item)
				})
			},
			// 网络请求
			sendViolationInformationDataRequest() { //
				var that = this;
				console.log('请求')
				
				// myData = 
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getViolationInforURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: that.vioInforDict,
					successCallBack: function(res) {
						console.log(res)
						that.detailList = res.result  
				    },
					failCallBack: function() {
			            uni.showToast({
			            	title:"请求失败，请稍后再试"
			            })
					}
				});
			}
		}
	}
</script>

<style>
	.widthV{
		width: 140rpx;
	}
	.lgFont{
		font-size: 33rpx;
	}
	.grayColor{
		color: #8F8F94;
		font-size: 25rpx;
	}
	.redColor{
		color: #BD2130;
	}
</style>

