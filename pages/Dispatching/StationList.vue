<template>
	<view>
		<view style="margin: 20rpx 20rpx; background-color: #FFFFFF; padding: 20rpx 30rpx; border-radius: 20rpx;">
			<input @input="onVuleChange" style="font-size: 30rpx;" placeholder="输入站点" />
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in listData" :index="index" :key="index" :show-arrow="false" @click="clickListItem(item)">
				<text style="font-size: 28rpx;">{{ item.stationName }}</text>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
var resquestJSOB = require('@/common/js/hy-request.js');
var urlJSOB = require('@/common/js/hy-url.js');
var stringUtil = require('@/common/js/hy-stringUtil.js');
var adminstate;
var Linem;
export default {
	data() {
		return {
			listData: [],
			allData: []
		};
	},
	components: {
		uniList,
		uniListItem
	},
	onLoad(options) {
		console.log(options.state)
		adminstate=options.state;
		Linem=options.Linecode;
		this.sendDataRequest(options.state);
	},
	methods: {
		clickListItem(data) {
			console.log(data.stationName);
			var pages = getCurrentPages();
			var currPage = pages[pages.length - 1]; //当前页面
			var prevPage = pages[pages.length - 2]; //上一个页面
			//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
			
			if(adminstate==1){
			prevPage.$vm.downstationsta = data.stationName;	
			prevPage.$vm.stationOrder1 = data.stationOrder;
			}
			if(adminstate==2){
			prevPage.$vm.downstationend = data.stationName;	
			prevPage.$vm.stationOrder2 = data.stationOrder;
			}
			if(adminstate==3){
			prevPage.$vm.stationnamedownbeg = data.stationName;	
			prevPage.$vm.stationOrder3 = data.stationOrder;
			}
			if(adminstate==4){
			prevPage.$vm.stationnamedownend = data.stationName;	
			prevPage.$vm.stationOrder4 = data.stationOrder;
			}
			
			uni.navigateBack({});
		},
		// 网络请求
		sendDataRequest(state) {
			var that = this;
			console.log('请求'+state);
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.allstation, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {
					lineCode: Linem,
				},
				successCallBack: function(data) {
					 that.listData = [];
					 that.allData = [];
					console.log(data.stationList);
					var datastation=[];
					datastation=data.stationList;
					
					that.tracesxiaData=[];
					console.log('===='+state);
					if(state==1){
						for(var i=0; i<datastation.length; i++){
							if(datastation[i].sxx==0){
									that.listData.push(datastation[i])
									that.allData.push(datastation[i])
								}
						}
						
					}else if(state==2){
						for(var i=0; i<datastation.length; i++){
							if(datastation[i].sxx==0){
									that.listData.push(datastation[i])
									that.allData.push(datastation[i])
								}
						}
					} else if(state==3){
						for(var i=0; i<datastation.length; i++){
							if(datastation[i].sxx==1){
									that.listData.push(datastation[i])
									that.allData.push(datastation[i])
								}
						}
					}else if(state==4){
						for(var i=0; i<datastation.length; i++){
							if(datastation[i].sxx==1){
									that.listData.push(datastation[i])
									that.allData.push(datastation[i])
								}
						}
					}
				},
				failCallBack: function() {}
			});
			
		},
		onVuleChange(event) {
			console.log(event);
			var keyWord = event.target.value;
			this.listData = this.fuzzyQuery(keyWord);
		},
		fuzzyQuery(keyWord) {
			var newData = new Array();
			var originalData = this.allData;
			if (keyWord === '') {
				return originalData;
			}

			for (var i = 0; i < originalData.length; i++) {
				var obj = originalData[i];
				console.log(obj.stationName + keyWord);
				console.log(obj.stationName, keyWord, stringUtil.testString(obj.stationName, keyWord));
				if (stringUtil.testString(obj.stationName, keyWord)) {
					newData.push(obj);
				}
			}
			return newData;
		}
	}
};
</script>

<style>
page {
	background-color: #e6e6e6;
}
</style>
