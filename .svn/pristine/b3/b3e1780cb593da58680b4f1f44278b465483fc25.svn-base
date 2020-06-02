<template>
	<!-- <view class="mine">
		<view class="mine-top"></view>
		<view class="info" @tap="usetSet">
			<view class="l">
				<cAvatar shape='circle' class='text-cut' :text="userInfo.name" :size="60" />
			</view>
			<view class="r">
				<view class="name">{{userInfo.name}}</view>
				<view class="user">{{userInfo.role_name}}</view>
			</view>
		</view>
	</view> -->

	<view>

		<view class="flex justify-between">
			<view class="p-2" style="width: 100%;">
				<!-- flex布局，垂直方向居中 -->
				<view class="flex align-center">
					<cAvatar shape='circle' class='text-cut' :text="userInfo.name" :size="50" />
					<view style="margin-left: 20rpx;">
						<view class="font" style="line-height: 1.5;">车号：123122</view>
						<text class="font" style=" color: #FF3030;line-height: 1.5;">待处理</text>
					</view>
				</view>
				
				<view style="width: 90%; height: 1rpx; background-color: #EBEBEB; margin-left: 5%;margin-top: 10rpx;"></view>
				<view class="mt-2">
					<view class="mt-2">
						<text class="mr-2" style="color: #9D9589;">计划ID：</text>
						<text>13423378</text>
					</view>
					<view class="mt-2">
						<text class="mr-2" style="color: #9D9589;">驾驶员：</text>
						<text>沙宝亮</text>
					</view>
					<view class="mt-2">
						<text class="mr-2" style="color: #9D9589;">发车时间：</text>
						<text>0600</text>
					</view>
					<view class="mt-2">
						<text class="mr-2" style="color: #9D9589;">类别：</text>
						<text>甩站</text>
					</view>
					<view class="mt-2">
						<text class="mr-2" style="color: #9D9589;">明细：</text>
						<text>10607车 甩站 时间 06:38:05 站点25河冰公园甩站</text>
					</view>
					
				</view>
			
			
			</view>
			
		</view>
		
		<view style="width: 90%; height: 10rpx; background-color: #EBEBEB; margin-left: 5%;margin-top: 10rpx;"></view>
		<cLabel title='违章处理' v-model='form.textarea' @handRight='handTextareaRight' :dataText='form.textarea' mode='textarea' rightIcon='cuIcon-close'    />
		<view class="ffoot">
			<button class="bg-blue" @tap="handSubmit">处理</button>
		</view>

	</view>
</template>

<script>
	import cAvatar from '@/components/c-avatar/c-avatar.vue'
	var check = require('@/common/checker.js')
	import cLabel from "@/components/c-label/c-label.vue"
	import cUpload from "@/components/c-upload/c-upload.vue"
	
	export default {
		components: {
			cAvatar,
			cLabel,
			cUpload
		},
		data() {
			return {
				userInfo: {
					name: '车号',
					role_name: '123456'
				},
				
				form:{
					text:"",
					number:'',
					idcard:'',
					password:'',
					switch:true,
					textarea:'',
					img:[],
					selector:'',
					half:'',
					date:'',
					yearMonth:'',
					dateTime:'',
					range:'',
					time:'',
					region:'',
					limit:'',
					limitHour:'',
				},
			}
		},
		onNavigationBarButtonTap(e) {
			// uni.navigateTo({url: '/pages/mine/setting/setting'});
		},
		methods: {
			usetSet() {

			}
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
		width: 70%;
		margin-top: 100rpx;
		color: #ffffff;
	}
</style>
