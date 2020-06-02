<!-- 车次详情 -->
<template>
	<view>
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
			<!-- <template v-if="detailList.length > 0"> -->
				<t-table style="width: 200%; " border="1" border-color="#f5F5F5">
					<t-tr font-size="16" color="#00000">
						<t-th v-for="item in titleList" 
				     		 :key="item.index" style="width: 50%;" >{{item}}</t-th>
					</t-tr>
					<t-tr font-size="15" color="#000000" 
			     		 v-for="item in detailList" :key="item.index">
						<t-td>{{item.lineCode}}</t-td>
						<t-td>{{item.busCode}}</t-td>
						<t-td>{{item.driverName}}</t-td>
						<t-td>{{item.planBusTimes}}</t-td>
						<t-td>{{item.earlyBusTimes}}</t-td>
						<t-td>{{item.lateBusTimes}}</t-td>
						<t-td>{{item.preciseBusTimes}}</t-td>
						<t-td>{{item.otd}}</t-td>
					</t-tr>
				</t-table>
			<!-- </template>  -->
			<!-- 无数据 -->
			<!-- <template v-else>
				<no-content></no-content>
			</template> -->
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
					"计划车次",
					"早点",
					"晚点",
					"准点",
					"完成率"
				],
				detailList:[ ],
				trainsDic:{ }
			}
		},
		onLoad(data) {
		    this.trainsDic = JSON.parse(data.trainsDic)
			this.sendMileageDataRequest()
		},
		methods: {
			// 网络请求
			sendMileageDataRequest() { //
				var that = this;
				console.log('请求')
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getTrainsSearchURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: that.trainsDic,
					successCallBack: function(res) {
						console.log(res)
						that.detailList = res.data  
				    },
					failCallBack: function() {
			        
					}
				});
			}
		    
		}
	}
</script>

<style>
</style>

