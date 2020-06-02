<!-- 配班详情 -->
<template>
	<view>
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
		<template v-if="detailList.length > 0">
		    <t-table style="width: 300%; " border="1" border-color="#f5F5F5">
		    	<t-tr font-size="16" color="#00000">
		    		<t-th v-for="item in titleList" 
		    		      :key="item.index" style="width: 50%;" >{{item}}</t-th>
		    	</t-tr>
		    	<t-tr font-size="15" color="#000000" 
		    	      v-for="item in detailList" :key="item.index">
		    		<t-td>{{item.lineCode}}</t-td>
		    		<t-td>{{item.date}}</t-td>  
		    		<t-td>{{item.planBusCode}}</t-td>
		    		<t-td>{{item.busCode}}</t-td>
		    		<t-td>{{item.planDriverName}}</t-td>
		    		<t-td>{{item.driverName}}</t-td>
		    		<t-td>{{item.planLeaveTime}}</t-td>
		    		<t-td>{{item.realLeaveTime}}</t-td>
		    		<t-td>{{item.planReachTime}}</t-td>
		    		<t-td>{{item.realReachTime}}</t-td>
		    		<t-td>{{item.upDownName}}</t-td>
		    	</t-tr>
		    </t-table>
		    <uni-load-more :status="status" :content-text="contentText"></uni-load-more>
		</template>
		<!-- 无数据 -->
		<template v-else>
			<no-content></no-content>
		</template>
		</scroll-view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	var resquestJSOB = require('../../../common/js/hy-request.js');
	var urlJSOB = require('../../../common/js/hy-url.js');
	var stringUtil = require('../../../common/js/hy-stringUtil.js');
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd,
			uniLoadMore
		},
		data() {
			return {
				titleList:[
					"线路",
					"日期",
					"计划车辆",
					"实际车辆",
					"计划驾驶员",
					"实际驾驶员",
					"计划发车",
					"实际发车",
					"计划到达",
					"实际到达",
					"上下行"
				],
				detailList:[ ],
				shiftDic:{ },
				page: 0,
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前'
				}, {
					value: 'loading',
					text: '加载中'
				}, {
					value: 'noMore',
					text: '没有更多'
				}],
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		onLoad(data) {
		    this.shiftDic = JSON.parse(data.shiftDic)
			this.getShiftArrangementData()
			// 
		},
		onShow() {
			if(this.isRelodData === true){
				this.isRelodData = false
				this.getShiftArrangementData()
			}
		},
		onReachBottom() { //上拉刷新
			if (this.status === 'noMore') {
				return
			}
			this.status = 'loading'
			this.pullUpRefresh()
		},
		methods: {
			endRefresh() { //
				this.status = 'more'
			},
			noMoreData() {
				this.status = 'noMore'
			},
			pullUpRefresh() {
				this.page++;
				this.sendShiftArrangementDataRequest()
			},
			getShiftArrangementData() {
				this.page = 0;
				this.listData = new Array()
				this.sendShiftArrangementDataRequest()
			},
			// 网络请求
			sendShiftArrangementDataRequest() { //
				var that = this;
				var limit = 20;
				var start = that.page*limit;
				that.shiftDic.limit = limit;
				that.shiftDic.start = start;
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getShiftArrangementURL, 
					data: that.shiftDic,
					successCallBack: function(res) {
						console.log(res.list)
						that.detailList = that.detailList.concat(res.list) 
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
</style>

