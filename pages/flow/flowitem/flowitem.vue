<template>
	<view>
		<uni-list v-for="(item, index) in funcModules" v-if="item.show" :index="index" :key="index">
			<uni-list-item :title="item.title" :thumb="item.imgUrl" :showArrow="false" @click="onClient(item)" />
			<view class="hourLine"></view>
		</uni-list>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { uniList, uniListItem, uniNavBar },
	data() {
		return {
			funcModules: [
				//功能模块
				{
					show: true,
					title: '公务用车申请表',
					imgUrl: '/static/flow/flow_item1.png',
					pageUrl: 'overflow/userCarFlow/userCarFlow',
					badge: '0',
					showBadge: false,
					type: 'primary',
					tag: 100001
				},
				{
					show: true,
					title: '车辆维修审批单（小车）',
					imgUrl: '/static/flow/flow_item2.png',
					pageUrl: 'overflow/maintainCar/maintainCar',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100002
				},
				{
					show: true,
					title: '公务接待申请表',
					imgUrl: '/static/flow/flow_item4.png',
					pageUrl: 'overflow/reception/reception',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100004
				},
				{
					show: true,
					title: '公务用餐申请表',
					imgUrl: '/static/flow/flow_item5.png',
					pageUrl: 'overflow/receptionDining/receptionDining',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100005 //统计分析
				},
				{
					show: true,
					title: '固定资产采购申请表',
					imgUrl: '/static/flow/flow_item6.png',
					pageUrl: 'overflow/assetPurchase/assetPurchase',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100006 //综合查询
				},
				{
					show: true,
					title: '固定资产处置审批表',
					imgUrl: '/static/flow/flow_item7.png',
					pageUrl: 'overflow/assetDisposal/assetDisposal',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100007 //维修管理
				},
				{
					show: true,
					title: '合同审批表',
					imgUrl: '/static/flow/flow_item8.png',
					pageUrl: 'overflow/contractSigning/contractSigning',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100008
				},
				{
					show: true,
					title: '会议室使用申请单',
					imgUrl: '/static/flow/flow_item9.png',
					pageUrl: 'overflow/mettingHome/mettingHome',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100009
				},
				{
					show: true,
					title: '会议（活动）请假报备单',
					imgUrl: '/static/flow/flow_item10.png',
					pageUrl: 'overflow/mettingLeaver/mettingLeaver',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100010
				},
				{
					show: true,
					title: '签呈单',
					imgUrl: '/static/flow/flow_item11.png',
					pageUrl: 'overflow/signature/signature',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100011
				},
				{
					show: true,
					title: '办公用品申购单',
					imgUrl: '/static/flow/flow_item12.png',
					pageUrl: 'overflow/workPuechase/workPuechase',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100012
				},
				{
					show: true,
					title: '职工请假单',
					imgUrl: '/static/flow/flow_item13.png',
					pageUrl: 'overflow/workLeaveFlow/workLeaveFlow',
					badge: '99',
					showBadge: false,
					type: 'primary',
					tag: 100013
				}
			]
		};
	},
	methods: {
		onClient: function(e) {
			console.log(e.tag);
			switch (e.tag) {
				case 100001:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100002:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100003:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100004:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100005:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100006:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100007:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100008:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100009:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100010:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100011:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100012:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
				case 100013:
					uni.navigateTo({
						url: e.pageUrl
					});
					break;
			}
		},
		finish: function(e) {
			uni.redirectTo({
				url: '../../index/index'
			});
		}
	}
};
</script>

<style>
.hourLine {
	height: 1rpx;
	width: 100%;
	background-color: #808080;
	margin-left: 10rpx;
	margin-right: 10rpx;
}
</style>
