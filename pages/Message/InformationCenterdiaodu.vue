<template>
	<view class="setting c-padding-wrap">
		<view class="c-card" v-for="(list,index) in lists" :key="index">
			<view class="c-list">
				<view class="c-list-cell uni-collapse">
					<view class="c-list-cell-navigate uni-navigate-right" hover-class="c-list-cell-hover" @click="goDetailPage(list)">
						<view style="width: 75%;">{{list.name}}</view>
						<cAvatar shape='circle' class='text-cut' :text="list.rightText" :size="17" />
						<text></text>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="padding-sm flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg" @tap="logout">退出登录</button>
		</view>	 -->
	</view>
</template>

<script>
	import cList from '@/components/c-list/c-list.vue'
	import cListItem from '@/components/c-list-item/c-list-item.vue'
	import cAvatar from '@/components/c-avatar/c-avatar.vue'
	import UniSocket from "@i5920/uni-socket";
	var urlJSOB = require('@/common/js/hy-url.js');
	var sss;
	export default {
		components: {
			cList,
			cListItem,
			cAvatar
		},
		data() {
			return {
				lists: [{
						name: "加油请求信息",
						url: "fuelupRequest",
						rightText: "",
						type: "105"
					},
					{
						name: "包车请求信息",
						url: "fuelupRequest",
						rightText: "",
						type: "107"
					},
					{
						name: "维修请求信息",
						url: "fuelupRequest",
						rightText: "",
						type: "103"
					}
					// {
					// 	name: "违规信息",
					// 	url: "GetgasList",
					// 	rightText: "",
					// },
					// {
					// 	name: "中心信息",
					// 	url: "CentralInformation",
					// 	rightText: "",
					// },
					// {
					// 	name: "运营异常信息",
					// 	url: "GetgasList",
					// 	rightText: "",
					// }
				],
				allmessage: []
			}
		},
		onShow() {
			// sss = new UniSocket({
			// 	url: urlJSOB.getmessagesocket,
			// 	timeout: 1 * 60 * 1000, // 心跳时间间隔
			// 	isSendHeart: false, // 是否发送心跳
			// 	isReconnection: true, // 是否断线重连
			// 	reConnectTime: 3000, // 断线重连检测时间间隔
			// 	params: { // 发送消息时如果时json则自动加上组合里面参数
			// 		// token: this.$store.state.user.TOKEN
			// 	},
			// 	debug: process.env.NODE_ENV === "development", // debug
			// 	onSocketOpen: header => {
			// 		console.log("打开了")
			// 	},
			// 	onSocketMessage: data => {
			// 		console.log("22222222222")
			// 		console.log(data)
					
			// 		if(data.type=="BusRequestROG"){
			// 			var message;
			// 			message=data.data;
			// 			if(message[0].requestType=='105'){
			// 				this.lists.
			// 				uni.showModal({
			// 				    title: '提示',
			// 				    content: '收到一条加油请求信息',
			// 				    success: function (res) {
			// 				        if (res.confirm) {
			// 				            console.log('用户点击确定');
			// 				        } else if (res.cancel) {
			// 				            console.log('用户点击取消');
			// 				        }
			// 				    }
			// 				});
			// 			}else if(message[0].requestType=='107'){
			// 			uni.showModal({
			// 			    title: '提示',
			// 			    content: '收到一条包车请求信息',
			// 			    success: function (res) {
			// 			        if (res.confirm) {
			// 			            console.log('用户点击确定');
			// 			        } else if (res.cancel) {
			// 			            console.log('用户点击取消');
			// 			        }
			// 			    }
			// 			});
			// 		}else if(message[0].requestType=='103'){
			// 			uni.showModal({
			// 			    title: '提示',
			// 			    content: '收到一条维修请求信息',
			// 			    success: function (res) {
			// 			        if (res.confirm) {
			// 			            console.log('用户点击确定');
			// 			        } else if (res.cancel) {
			// 			            console.log('用户点击取消');
			// 			        }
			// 			    }
			// 			});
			// 		}
						
			// 		}
					
					
			// 	},
			// 	onSocketError: res => {
			// 		console.log("33333333333")
			// 		console.log(res)
			// 	},
			// 	onSocketClose: res => {
			// 		console.log("444444444")
			// 		console.log(res)
			// 	}
			// });
			// console.log("打开了");
			// sss.initSocket();
		},
		methods: {

			goDetailPage(item) {
				if (item.url == 'version') {
					uni.showToast({
						icon: "none",
						title: "以是最新版本"
					})
				} else if (item.url == 'clear') {
					uni.showModal({
						title: "清除缓存",
						content: "清除缓存将会清除本地数据并重新登录，您确定吗？",
						success: res => {
							if (res.confirm) {
								uni.clearStorageSync();
							}
						}
					})
				} else if (item.url) {
					console.log("url ==== " + item.url)
					if (item.url == "fuelupRequest") {
						uni.navigateTo({
							url: '/pages/Message/' + item.url + '?type=' + item.type
						});
					} else {
						uni.navigateTo({
							url: '/pages/Message/' + item.url
						});
					}

				}

			}
		}


	}
</script>

<style lang="scss">
	.uni-card {
		box-shadow: none;
	}

	.c-list:after {
		height: 0;
	}

	.c-list:before {
		height: 0;
	}

	.uni-hello-text {
		word-break: break-all;
	}

	.right {
		margin-right: 30upx;
	}
</style>
