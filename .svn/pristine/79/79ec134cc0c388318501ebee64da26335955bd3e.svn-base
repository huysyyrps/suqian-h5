<!-- 公交站点 -->
<template>
	<view>
		<uni-list>
			<uni-list-item v-for="(item,index) in lineList" 
			               :index="index" :key="index" :show-arrow="true"
						   @click="clickLineStationListItem(item)">
				<text style="font-size: 32rpx;">{{item.lineName}}</text>
				<text style="font-size: 27rpx;color: #808080;">{{item.beginStation}} - {{item.endStation}}</text>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var resquestJSOB = require('@/common/js/hy-request.js');
	var urlJSOB = require('@/common/js/hy-url.js');
	var stringUtil = require('@/common/js/hy-stringUtil.js');
	export default {
		data() {
			return {
				linecode:"",
				lineList:[],
				stationList:[],
			}
		},
		components: {
			uniList,
			uniListItem
		},
		onLoad(data) {
			this.linecode = data.selectLine
			this.sendDataRequest()
		},
		methods: {
			clickLineStationListItem(item){
				
				var upstreamStaArr = new Array()//上行
				var downstreamStaArr = new Array()//下行
				var stationList = this.stationList
				
				for (var i = 0; i < stationList.length; i++) {
					var sxx = stationList[i].sxx
					if (sxx === '0') {//下行
						downstreamStaArr.push(stationList[i])
					}else{//上行
						upstreamStaArr.push(stationList[i])
					}
				}
				var streamStaArr = new Array()
				
				if (item.sxx === '0'){
					streamStaArr = downstreamStaArr
				}else{
					streamStaArr = upstreamStaArr
				}
				
				let data = {
					stationList:streamStaArr
				}
				console.log(data)
				

				uni.navigateTo({ url: '../../logisticsTrack/index?data=' + JSON.stringify(data)+'&Linecode='+this.linecode});

				
				// if(app!=null){
				// 	app.getLineStationItem(data)
				// } 
				
				
				//先暂时隐藏
				// try {
				//     window.webkit.messageHandlers.pushToLineMap.postMessage(data);
				// }catch(err){        
				// }
				
				
			},
			
			// pushToLineMap(data){
				
			// },
			
			// 网络请求
			sendDataRequest() { //
				var that = this;
				// try{
				// 	var lineList = uni.getStorageSync("lineList")
				// 	var stationList = uni.getStorageSync("stationList")
				// 	if(lineList != "" && stationList != ""){
				// 		// console.log("数" + data)
				// 		that.lineList = lineList
				// 		that.stationList = stationList
				// 		return
				// 	}
					
				// }catch(e){
				// 	//TODO handle the exception
				// }
				
				resquestJSOB.sendGetRequestJson({
					
					url: urlJSOB.getLineStationURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					//url : "http://221.6.253.254:8070/sdhyschedule/PhoneQueryAction!getLineStation.shtml",
					data: {
						lineCode: this.linecode
					},
					successCallBack: function(res) {
						that.lineList = res.lineList
						that.stationList = res.stationList
						console.log("2站点" + that.lineList)
						console.log( that.lineList)
						// try{
						// 	uni.setStorageSync("lineList", res.lineList)
						// 	uni.setStorageSync("stationList", res.stationList)
						// }catch(e){
						// 	//TODO handle the exception
						// }
						
				    },
					failCallBack: function() {
			
					}
				});
			},
		    
		}
	}
</script>

<style>
	page{
		 background-color: #E6E6E6;
	}
</style>

