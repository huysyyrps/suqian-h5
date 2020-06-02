<!-- 停车信息查询 -->
<template>
	<view>
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
		<t-table style="width: 140%;" border="1" border-color="#f5F5F5">
			<t-tr font-size="16" color="#00000">
				<t-th v-for="parkingItem in titleList" 
				      :key="parkingItem.index" style="width: 50%;" >{{parkingItem}}</t-th>
			</t-tr>
			<t-tr font-size="15" color="#000000" 
			      v-for="parkingDetailItem in detailList" :key="parkingDetailItem.index">
				<t-td>{{parkingDetailItem.lineCode}}</t-td>
				<t-td>{{parkingDetailItem.busCode}}</t-td>
				<t-td>{{parkingDetailItem.driverName}}</t-td>
				<t-td>{{parkingDetailItem.parkingLotName}}</t-td>
				<t-td>{{parkingDetailItem.date}}</t-td>
				<t-td>{{parkingDetailItem.time}}</t-td>
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
					"停车地点",
					"日期",
					"停车时间"
				],
				detailList:[
					
				],
				parkingDic:{}
			}
		},
		onLoad(data) {
		    this.parkingDic = JSON.parse(data.parkingDic)
			this.sendParkingInformationDataRequest()
		},
		methods: {
			// 网络请求
			sendParkingInformationDataRequest() { //
				var that = this;
				console.log('请求')
				resquestJSOB.sendGetRequestJson({
					// url: urlJSOB.getDriverDetailMileURL, 
					url: urlJSOB.getParkingInformationQueryURL,
					data: that.parkingDic,
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



