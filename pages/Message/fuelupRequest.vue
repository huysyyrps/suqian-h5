<!-- 请求加油 -->
<template>
	<view class="content">
		<view class="flex align-center title-font padding_2" style="background-color: #FFFFFF;">
			<text style="width: 200rpx;">请选择线路:</text>
			<view style="flex-grow: 1;position:relative;">
				<input placeholder="请选择线路" :value="lineCode" type="text" />
				<view @click="selectLineCode" style="left: 0rpx; top: 0rpx; width:100%; height: 100%;  background-color:rgba(0,0,0,0); position: absolute;"></view>
			</view>
		</view>
		<view style="margin-top: 20upx;">
			<zzx-tabs :items="items" :current="current" @clickItem="onClickItem" ref="mytabs">
			</zzx-tabs>
		</view>
		<view style="color:#999999;font-size: 24upx;height: 260upx;">
			<view v-show="current === 0">
				<view class="cover-container">
					<view class="list-box">
						<view style="margin-top: 4upx;"></view>
						<view class="container_of_slide" v-for="(item,index) in list" :key="index">
							<view class="slide_list" :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
								<view class="list-right-info" @click="getAllDetail(item)">
									<view class="now-message-info" >
										<view class="list-right">
											<cAvatar shape='circle' class='text-cut' :text="userInfo.name" :size="50" />
										</view>
										<view class="list-right2">
											<view class="mt-2">
												<text class="mr-2" style="color: #000000;">车号：</text>
												<text style="color: #000000;">{{item.busCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >线路：</text>
												<text >{{item.lineCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >请求时间：</text>
												<text >{{item.questTime}}</text>
											</view>
										</view>
										<view class="list-right3">
											<text v-if="item.flag === '0'" style="color:#FF0000; width: 140rpx;">未处理</text>
											<text v-if="item.flag === '1'" style="color:#888888; width: 140rpx;">已处理</text>
										</view>
									<!-- 	<view class="list-right-1">
											{{item.dateTime}}
										</view> -->
									</view>
									<view style="clear:both"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="cover-container">
					<view class="list-box">
						<view style="margin-top: 4upx;"></view>
						<view class="container_of_slide" v-for="(item,index) in PendingArr" :key="index">
							<view class="slide_list"  :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
								<view class="list-right-info" @click="getDetail(item)">
									<view class="now-message-info" >
										<view class="list-right">
											<cAvatar shape='circle' class='text-cut' :text="userInfo.name" :size="50" />
										</view>
										<view class="list-right2">
											<view class="mt-2">
												<text class="mr-2" style="color: #000000;">车号：</text>
												<text style="color: #000000;">{{item.busCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >线路：</text>
												<text >{{item.lineCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >请求时间：</text>
												<text >{{item.questTime}}</text>
											</view>
										</view>
										<view class="list-right3">
											<text style="color:#FF0000; width: 140rpx;">未处理</text>
										</view>
									<!-- 	<view class="list-right-1">
											{{item.dateTime}}
										</view> -->
									</view>
									<view style="clear:both"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<view class="cover-container">
					<view class="list-box">
						<view style="margin-top: 4upx;"></view>
						<view class="container_of_slide" v-for="(item,index) in ProcessedArr" :key="index">
							<view class="slide_list"  :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
								<view class="list-right-info" @click="getProcessedDetail(item)">
									<view class="now-message-info" >
										<view class="list-right">
											<cAvatar shape='circle' class='text-cut' :text="userInfo.name" :size="50" />
										</view>
										<view class="list-right2">
											<view class="mt-2">
												<text class="mr-2" style="color: #000000;">车号：</text>
												<text style="color: #000000;">{{item.busCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >线路：</text>
												<text >{{item.lineCode}}</text>
											</view>
											<view class="mt-2">
												<text class="mr-2" >请求时间：</text>
												<text >{{item.questTime}}</text>
											</view>
										</view>
										<view class="list-right3">
											<text style="color:#888888; width: 140rpx;">已处理</text>
										</view>
									<!-- 	<view class="list-right-1">
											{{item.dateTime}}
										</view> -->
									</view>
									<view style="clear:both"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
        
	</view>

</template>

<script>
	
	import zzxTabs from "@/components/zzx-tabs/zzx-tabs.vue"
	import cAvatar from '@/components/c-avatar/c-avatar.vue'
	var resquestJSOB = require('../../common/js/hy-request.js');
	var urlJSOB = require('../../common/js/hy-url.js');

	export default {
		components: {
			zzxTabs,
			cAvatar,
		},
		data() {
			return {
				userInfo: {
					name: '车号',
					role_name: '123456'
				},
				items: ['全部', '待处理','已处理'],
				current: 0,
				type: "",
				visible: false,
				start_slide_x: 0,
				btnWidth: 0,
				startX: 0,
				LastX: 0,
				startTime: 0,
				screenName: '',
				isshow: false,
				btuBottom: '0',
				secondHeight: '',
				list : [],//全部
				ProcessedArr:[],//已处理
				PendingArr:[],//待处理,
				lineCode:""
			}
		},
		onLoad(options) {
			this.type = options.type
		},
		onShow() {
			this.sendGetListInforDataRequest()
		},
			
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			getAllDetail(res){
				if (res.flag === "0"){
					uni.navigateTo({
						url: '../Message/fuelupRequestDeal?pendingItem=' + JSON.stringify(res) + '&type=' + this.type
					});
				}else{
					uni.showToast({
						title:"该消息已处理"
					})
				}
			},
			getDetail(res){
				uni.navigateTo({
					url: '../Message/fuelupRequestDeal?pendingItem=' + JSON.stringify(res) + JSON.stringify(res) + '&type=' + this.type,
				});
			},
			
			getProcessedDetail(res){//已处理
				uni.showToast({
					title:"该消息已处理"
				})
			
			},
			
			// 网络请求
			sendGetListInforDataRequest() { //
				var that = this;
				that.list = new Array()
				that.PendingArr = new Array()
				that.ProcessedArr = new Array()
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getRequestListURL,
					data: {
						type: this.type,
					},
					successCallBack: function(data) {
						that.list = data.list
						var array = that.list
						for (let i in array) {
							if (array[i].flag ===  "0"){
								that.PendingArr.push(array[i])//待处理
							}else {
								that.ProcessedArr.push(array[i])//已处理
							}
						}
						console.log("待处理：" + that.PendingArr)
						console.log("已处理：" + that.ProcessedArr)
						
					},
					failCallBack: function() {
						
					}
				});
			},
			
			// 选择线路
			selectLineCode() {
				uni.navigateTo({
					url:"../commonPage/LinesByOperator"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		height: 100%;
		background: #f5f5f5;
	}
	.user-section{
		padding:10upx 30upx 0;
		position:relative;
		background: #f5f5f5;
		
	
	}
	
	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 16upx 16upx;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		margin-top: 10upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		
	}
	
	
	.index{
		background: #F8F8F8;
	}
	.list-box{
		padding: 10upx 0;
	}
	.container_of_slide {
		width: 100%;
		overflow: hidden;
	}
	
	.slide_list {
		transition: all 100ms;
		transition-timing-function: ease-out;
		min-width: 200%;
		height: auto;
	}
	
	.now-message-info {
		box-sizing:border-box;
		display: flex;
		// align-items: center;
		// justify-content: space-between;
		font-size: 16px;
		clear:both;
		height: auto;
		margin-top: 20upx;
		padding: 0 00upx;
		margin-bottom: 20upx;
		background: #FFFFFF;
		float: left;
	}
	.list-right-info {
		/* justify-content: space-between; */
		font-size: 16px;
		clear:both;
		height: auto;
		padding: 0 30upx;
		margin-bottom: 20upx;
		background: #FFFFFF;
	}
	.list-right{
		float: left;
		/* margin-left: 25upx; */
		width: 15%;
	}
	.list-right2{
		float: left;
		 margin-left: 35upx; 
		width: 70%;
	}
	.list-right3{
		float: left;
		 margin-left: 85upx;
		width: 155upx;
		margin-top: 20upx;
	}
	
	.list-right-1{
		float: right;
		color: #A9A9A9;
	}
	.uni-list-cell-hover {
		background-color: #eeeeee;
	}
	
	.list-title{
		width: 240upx;
		line-height:1.5;
		overflow:hidden;
		margin-bottom: 10upx;
		color:#A9A9A9;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		overflow:hidden;
	}
	
	
	
	
	
	.navName{
			width: 95%;
			margin: 10px auto;
			background: #FFFFFF;
		}
		.choiceNav{
			width: 95%;
			margin: 0 auto;
			height: 40px;
			display: flex;
			font-size: 14px;
			line-height: 40px;
			justify-content: space-between;
		}
		.drawer {
		  width:100%;
		  display:flex;
		  display:-webkit-flex;
		  flex-direction:column; 
		  .setbox{
		      position:fixed;
		      z-index:1000;
		      left:0px;
		      right:0px;
		      width:100%;
		      height:100%;
		      background:rgba(51,51,51,0.4);
		      border-left: 1px solid #CFD8DC!important;
		      box-shadow:0px 3px 12px rgba(0,0,0,0.12);
		      -webkit-transition: all 0.3s ease;
		      transition: all 0.3s ease;
		      bottom:-100%;
		  }
		  .show {
		   bottom: 0;
		  }
		}
		
		.header{
			width: 100%;
			background: #FFFFFF;
			line-height: 40px;
			position: absolute;
			bottom: 0;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			border-bottom: 10px solid #FFFFFF;
		}
		
		.drawer-list-item{
			width: 100%;
			height: auto;
			border-bottom: 1px solid #EEEEEE;
		}
		
		.drawer-item{
			width: 95%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #333333;
			
	}
</style>

