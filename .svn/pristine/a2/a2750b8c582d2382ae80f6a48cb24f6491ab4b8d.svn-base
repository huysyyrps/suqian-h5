<template>
	<view class="padding_2">
		<view class="flex align-center justify-between padding_2"
		      style="background-color: #FFFFFF; border-radius: 16rpx;">
			<view class="flex flex-col">
				<view class="flex align-center ">
					<view class="widthV lgFont">车牌号：</view>
					<view class="lgFont">{{listItem.carNo}}</view>
				</view>
				<view class="flex align-center">
					<view class="widthV lgFont">驾驶员：</view>
					<view class="lgFont">{{listItem.driverName}}</view>
				</view>
				<view class="flex align-center">
					<view class="widthV lgFont">线路：</view>
					<view class="lgFont">{{listItem.lineCode}}</view>
				</view>
			</view>
		</view>
		<template v-if="listDetailData.length > 0">
		    <uni-list style="margin-top: 20rpx;  border-radius: 16rpx;">
		    	<uni-list-item v-for="(item, index) in listDetailData" :index="index" :key="index" :show-arrow="false">
		    		<view class="flex align-center justify-between">
		    			<text class="title-text">{{item.projectName}}</text>
		    			<!-- <text class="content-text">{{item.state === "1" ? "合格" : "不合格"}}</text> -->
						<text v-if="item.state === '1'" style="color: #333333;">合格</text>
						<text v-else-if="item.state === '0'" style="color: #DC3545;">不合格</text>
		    		</view>
		    	</uni-list-item>
		    </uni-list>
		</template>
		<view style="width: 90%; height: 10rpx; background-color: #EBEBEB; margin-left: 5%;margin-top: 10rpx;"></view>
		<cLabel style="background-color: #FFFFFF;" title='意见' v-model='form.textarea' @handRight='handTextareaRight' :dataText='form.textarea' mode='textarea' rightIcon='cuIcon-close'/>
		
		<view class="searchBtn title-font" @click="searchClick">处理</view>
		
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
				listDetailData: [],
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
		
		onLoad(data) {
		    this.listItem = JSON.parse(data.pendingItem),
		    this.sendGetListDetailDataRequest()
		},
		methods: {
			// 网络请求
			sendGetListDetailDataRequest() { //OA信息数量
				var that = this;
				var myData = new FormData();
				myData.append("id", that.listItem.id);
				
				resquestJSOB.sendPost1RequestJson({
					url: urlJSOB.getViolationInforListDetailURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: {
						myData
					},
					successCallBack: function(data) {
						var result = data.result;
						that.listDetailData = result
						console.log(that.listDetailData)
					},
					failCallBack: function() {
						
					}
				});
			},
			searchClick(){
				console.log(this.form.textarea)
				
				var that = this;
				var myData = new FormData();
				myData.append("ids", that.listItem.id);
				myData.append("advice", that.form.textarea);
				resquestJSOB.sendPost1RequestJson({
					url: urlJSOB.getOpinionsURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: {
						myData
					},
					successCallBack: function(data) {
						uni.showToast({
							title:"处理完成"
						})
						uni.navigateBack({})
					},
					failCallBack: function() {
						
					}
				});
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
		width: 30%;
		margin-top: 100rpx;
		color: #ffffff;
	}
	.ffoot{
		display: flex;
		flex-direction:row;
	}
</style>
