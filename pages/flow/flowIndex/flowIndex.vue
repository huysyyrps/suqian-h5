<template>
	<view class="content">
		<view class="backgroundImage">宿迁公交欢迎您</view>
		<!-- <text v-if="positionStatus!=0" style="display: flex; justify-content: center; align-items: center; font-size: 40rpx; margin-top: 120rpx;">暂无权限</text> -->
		<uni-grid class="grid-view" :column="3" :show-border="false" :square="false" @change="funcModulesChange">
			<uni-grid-item v-for="(item, index) in funcModules" v-if="item.show" :index="index" :key="index">
				<view class="item-content-view">
					<image :src="item.imgUrl"></image>
					<label class="title-font">{{ item.title }}</label>
				</view>
			</uni-grid-item>
		</uni-grid>
		
	</view>
</template>

<script>
var positionStatus = '';
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
export default {
	components: {
		uniGrid,
		uniGridItem
	},
	data() {
		return {
			funcModules: [
				//功能模块
				{
					show: true,
					title: '发起申请',
					imgUrl: '/static/operationalIcon.png',
					pageUrl: '../flowitem/flowitem',
					type: 'primary',
					tag: 1001 //协同办公
				},
				{
					show: true,
					title: '我的待办',
					imgUrl: '/static/inforSearchIcon.png',
					pageUrl: '../myflowwill/myflowwill',
					type: 'primary',
					tag: 1002 //人力资源
				},
				{
					show: true,
					title: '已办流程',
					imgUrl: '/static/attendanceIcon.png',
					pageUrl: '../overFlow/overFlow',
					type: 'primary',
					tag: 1003 //营销管理
				},
				{
					show: true,
					title: '驾驶员请假',
					imgUrl: '/static/flow/flow_item13.png',
					pageUrl: '../flowitem/overflow/driverLeaveFlow/driverLeaveFlow',
					tag: '10014',
					type: 'primary',
					tag: 1004 
				}
			]
		};
	},
	onLoad(options) {
		positionStatus = uni.getStorageSync('positionStatus');
		if (positionStatus == 2) {
			for (var i = 0; i < this.funcModules.length; i++) {
				this.funcModules[i].show = false;
			}
			uni.showToast({
				title: '暂无权限',
				icon: 'none',
				duration: 800,
				position: 'bottom'
			});
		}
		if (positionStatus == 1) {
			for (var i = 0; i < this.funcModules.length; i++) {
				if(this.funcModules[i].tag!=1004){
					this.funcModules[i].show = false;
				}
			}
		}
		if (positionStatus == 0) {
			for (var i = 0; i < this.funcModules.length; i++) {
				if(this.funcModules[i].tag==1004){
					this.funcModules[i].show = false;
				}
			}
		}
	},
	methods: {
		funcModulesChange(e) {
			let { index } = e.detail;
			let tag = this.funcModules[index]['tag'];
			let pageUrl = this.funcModules[index]['pageUrl'];

			uni.navigateTo({
				url: pageUrl
			});
		},
		clickAccidentReporting() {
			try {
				window.webkit.messageHandlers.pushToAccidentReportingVC.postMessage();
			} catch (err) {}
		}
	}
};
</script>

<style>
.backgroundImage {
	background-image: url(../../../static/me_background.png);
	width: 100%;
	height: 250rpx;
	color: #ffffff;
	font-size: 50rpx;
	text-align: center;
	padding: 60rpx;
}
</style>
