<!-- 请求加油处理 -->
<template>
	<view class="padding_2">
		<view class="flex align-center justify-between padding_2"
		      style="background-color: #FFFFFF; border-radius: 16rpx;">
			<view class="flex flex-col">
				<view class="flex align-center ">
					<view class="widthV lgFont">车号：</view>
					<view class="lgFont">{{listItem.busCode}}</view>
				</view>
				<view class="flex align-center">
					<view class="widthV lgFont">线路：</view>
					<view class="lgFont">{{listItem.lineCode}}</view>
				</view>
				<view class="flex align-center">
					<view class="widthV lgFont">请求时间：</view>
					<view class="lgFont">{{listItem.questTime}}</view>
				</view>
			</view>
		</view>
		
		<!-- <view style="width: 90%; height: 10rpx; background-color: #EBEBEB; margin-left: 5%;margin-top: 10rpx;"></view> -->
		
		<view class="flex align-center">
			<view class="agreeOrNo title-font" style="background-color: #EBEBEB; color: #6D6D72;" @click="disagreeClick">不同意</view>
			<view class="agreeOrNo title-font" style="background-color: #007AFF; " @click="agreeClick">同意</view>
		</view>
		
	</view>
</template>

<script>
	import cAvatar from '@/components/c-avatar/c-avatar.vue'
	var check = require('@/common/checker.js')
	import cLabel from "@/components/c-label/c-label.vue"
	import cUpload from "@/components/c-upload/c-upload.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var resquestJSOB = require('../../common/js/hy-request.js');
	var urlJSOB = require('../../common/js/hy-url.js');
	export default {
		components: {
			cAvatar,
			cLabel,
			cUpload,
			uniList,
			uniListItem
		},
		data() {
			return {
				listItem:{},
				agree:"",
				type: ""
			}
		},
		
		onLoad(data) {
		    this.listItem = JSON.parse(data.pendingItem),
			this.type = data.type
		},
		methods: {
			disagreeClick(){
				this.agree = "0"
				this.sendGetRequest()
			},
			agreeClick(){
				this.agree = "1"
				this.sendGetRequest()
			},
			
			// 网络请求
			sendGetRequest() { //OA信息数量
				var that = this;
				
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getRequestDealURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: {
						lineCode:this.listItem.lineCode,
						busCode:this.listItem.busCode,
						sfty:this.agree,
						scheId: "100001",//uni.getStorageSync("userCode"),
						cmd: that.type
					},
					successCallBack: function(data) {
						uni.showToast({
							title:"处理完成"
						})
						uni.navigateBack({})
					},
					failCallBack: function() {
						uni.showToast({
							title:"处理失败"
						})
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	

	.apply_agree {
		width: 170rpx;
		height: 170rpx;
	}

	.iconSize_agree {
		width: 90rpx;
		height: 90rpx;
	}
	.bg-blue{
		background-color: #007AFF;
		width: 30%;
		margin-top: 100rpx;
		color: #ffffff;
	}
	.ffoot{
		display: flex;
		flex-direction:row;
	}
	.agreeOrNo{
		height: 80rpx;
		margin-top: 150rpx; 
		color: #FFFFFF; 
		text-align: center;
		padding-top: 15rpx;
		width: 80%;
	}
</style>

