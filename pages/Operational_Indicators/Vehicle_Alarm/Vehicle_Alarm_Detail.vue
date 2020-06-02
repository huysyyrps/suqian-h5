<!-- 报警信息详情 -->
<template>
	<view>
		<scroll-view scroll-x="true" scroll-y="true" show-scrollbar="false">
		<t-table style="width: 140%; " border="1" border-color="#f5F5F5">
			<t-tr font-size="16" color="#00000">
				<t-th v-for="item in titleList" 
				      :key="item.index" style="width: 50%;" >{{item}}</t-th>
			</t-tr>
			<t-tr font-size="15" color="#000000" 
			      v-for="item in alarmDetailList" :key="item.index">
				<t-td>{{item.busCode}}</t-td>
				<t-td>{{item.driverName}}</t-td>
				<t-td>{{item.realBegin}}</t-td>
				<t-td>{{item.warnInfo}}</t-td>
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
					"车号",
					"驾驶员",
					"时间",
					"报警信息"
				],
				alarmDetailList:[],
			    alarmDic:{}
			}
		},
		onLoad(data) {
		    this.alarmDic = JSON.parse(data.alarmDic)
			this.sendAlarmDataRequest()
		},
		methods: {
			// 网络请求
			sendAlarmDataRequest() { //
				var that = this;
				console.log('请求')
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getWarnListURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: that.alarmDic,
					successCallBack: function(res) {
						console.log(res)
						that.alarmDetailList = res  
				    },
					failCallBack: function() {
				        console.log("失败")
					}
				});
			}
		}
	}
</script>

<style>
</style>
