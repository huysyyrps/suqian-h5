<template>
	<view>
		<uni-nav-bar background-color="#007AFF" left-icon="back" color="#FFFFFF"  right-text="查询" title="待办流程" @clickLeft="finish" @clickRight="getResourcesNewSX"></uni-nav-bar>
		<view class="v-edit"style="background-color: #FFFFFF;">
			<text class="tv-name">{{ '姓名 :' }}</text>
			<view class="v-vline"></view>
			<input v-model="title" type="text" focus class="in-text" focus placeholder="请输入流程标题" />
		</view>
		<view class="v-hline"></view>

		<view v-for="(item, dataindex) in dataList" :key="dataindex" style="background-color: #FFFFFF;">
			<view class="list-item" :showArrow="false" @click="listClient(item)">
				<view class="list-item-view">
					<text class="tv-name">{{ '创建人 :' }}</text>
					<text class="tv-name">{{ item.creator }}</text>
				</view>
				<view class="list-item-view">
					<text class="tv-name">{{ '任务名称 :' }}</text>
					<text class="tv-name">{{ item.taskName }}</text>
				</view>
				<view class="list-item-view">
					<text class="tv-name">{{ '创建时间 :' }}</text>
					<text class="tv-name">{{ item.createTime }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var start = 0,
	limit = 20,
	tagType = '';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
var resquestJSOB = require('../../../common/js/hy-request.js');
var urlJSOB = require('../../../common/js/hy-url.js');
var dataString = require('../../../common/js/hy-stringUtil.js');
export default {
	components: {
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '',
			dataList: [],
			dataListNew: []
		};
	},
	onLoad(options) {
		tagType = options.type;
		this.getResourcesSX();
	},
	onReachBottom: function() {
		start += 20;
		this.getResourcesMoreSX();
	},
	methods: {
		getResourcesSX: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.willdolist, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					proTypeId: tagType,
					Q_subject_S_LK: that.title,
					start: 0,
					limit: 20
				},
				successCallBack: function(data) {
					console.log(data);
					that.dataList = [];
					for (var i = 0; i < data.result.length; i++) {
						that.dataList.push(data.result[i]);
					}
				},
				failCallBack: function(e) {
					print(e);
				}
			});
		},
		getResourcesMoreSX: function(e) {
			var that = this;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.willdolist, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					proTypeId:tagType,
					start: start,
					limit: limit
				},
				successCallBack: function(data) {
					for (var i = 0; i < data.result.length; i++) {
						that.dataList.push(data.result[i]);
					}
				},
				failCallBack: function(e) {
					print(e);
				}
			});
		},
		listClient: function(e) {
			console.log(e.formDefId);
			console.log(dataString.userCarFormDefId);
			if (e.formDefId == dataString.userCarFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/userCarFlow/userCarFlowWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.maintainCarFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/maintainCar/maintainCarWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.receptionFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/reception/receptionWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.receptionDiningFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/receptionDining/receptionDiningWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.assetPurchaseFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/assetPurchase/assetPurchaseWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.assetDisposalFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/assetDisposal/assetDisposalWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.contractDigningFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/contractSigning/contractSigningWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.mettingHomeFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/mettingHome/mettingHomeWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.mettingLeaveFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/mettingLeaver/mettingLeaverWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.signatureFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/signature/signatureWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.workPuechaseFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/workPuechase/workPuechaseWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
			
			if (e.formDefId == dataString.workLeaverFormDefId) {
				uni.navigateTo({
					url: '../flowitem/overflow/workLeaveFlow/workLeaverFlowWillDetail?activityName='+e.activityName+'&taskId='+e.taskId+'&piId='+e.piId+'&executionId='+e.executionId
				});
			}
		},
		finish: function(e) {
			// uni.redirectTo({
			//     url: '../flowIndex/flowIndex'
			// });
			uni.switchTab({
			    url: '../flowIndex/flowIndex'
			});
		},
		getResourcesNewSX:function(e){
			var that = this;
			start = 0;
			limit = 20;
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.willdolist, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					proTypeId: tagType,
					Q_subject_S_LK: that.title,
					start: start,
					limit: limit
				},
				successCallBack: function(data) {
					console.log(data);
					that.dataList = [];
					for (var i = 0; i < data.result.length; i++) {
						that.dataList.push(data.result[i]);
					}
				},
				failCallBack: function(e) {
					print(e);
				}
			});
		}
	}
};
</script>

<style>
.v-edit {
	height: 60rpx;
	width: 100%;
	display: flex;
	align-items: center;
	margin-left: 10rpx;
}

.tv-name {
	height: 70rpx;
	width: auto;
	color: #333333;
	display: flex;
	font-size: 22rpx;
	justify-content: left;
	margin-left: 20rpx;
	align-items: center;
}

.in-text {
	height: 70rpx;
	width: 200rpx;
	flex-wrap: 1;
	color: #333333;
	display: flex;
	font-size: 22rpx;
	margin-left: 15rpx;
	align-items: center;
}

.v-hline {
	height: 2rpx;
	width: 100%;
	background-color: #aaaaaa;
}

.v-vline {
	height: 25rpx;
	width: 1rpx;
	display: flex;
	align-items: center;
	background-color: #cccccc;
}

.list-item {
	display: flex;
	flex-direction: column;
	border: #c0c0c0 1rpx solid;
	border-radius: 15rpx;
	margin: 5rpx;
}

.list-item-view {
	height: 50rpx;
	width: 100%;
	display: flex;
	align-items: center;
	margin-left: 10rpx;
}
</style>
