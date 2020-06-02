<!-- 完成、准点率详情 -->
<template>
	<view>
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
		<t-table style="width: 280%;" border="1" border-color="#f5F5F5">
			<t-tr font-size="16" color="#00000">
				<t-th v-for="item in titleList" 
				      :key="item.index" style="width: 50%;" >{{item}}</t-th>
			</t-tr>
			<t-tr font-size="15" color="#000000" 
			      v-for="rateItem in detailList" :key="rateItem.index">
				<t-td>{{rateItem.lineCode}}</t-td>
				<t-td>{{rateItem.busCode}}</t-td>
				<t-td>{{rateItem.driverName}}</t-td>
				<t-td>{{rateItem.ptcr}}</t-td>
				<t-td>{{rateItem.tcr}}</t-td>
				<t-td>{{rateItem.protn}}</t-td>
				<t-td>{{rateItem.otrofals}}</t-td>
				<t-td>{{rateItem.mcr}}</t-td>
			</t-tr>
		</t-table>
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
				titleList:[
					"线路",
					"车号",
					"驾驶员",
					"高峰车次完成率",
					"车次完成率",
					"车次准点率",
					"首末班准点率",
					"里程完成率"
				],
				detailList:[ ],
				comOrPunRateDic:{}
			}
		},
		onLoad(data) {
		    this.comOrPunRateDic = JSON.parse(data.comOrPunRateDic)
			this.sendComOrPunRateDataRequest()
		},
		methods: {
			// 网络请求
			sendComOrPunRateDataRequest() { //
				var that = this;
				console.log('请求')
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getCompletionOrPunctualityRateURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: that.comOrPunRateDic,
					successCallBack: function(res) {
						console.log(res)
						that.detailList = res.data  
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



