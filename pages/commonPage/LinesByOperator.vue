<!-- 线路 -->
<template>
	<view>
		<view style="margin: 20rpx 20rpx; background-color: #FFFFFF; padding: 20rpx 30rpx; border-radius: 20rpx;">
			<input @input="onVuleChange" style="font-size: 30rpx;"  placeholder="输入关键字" />
		</view>
		<!-- <template v-if="lineCodes.length > 0"> -->
		<uni-list>
			<uni-list-item v-for="(item,index) in lineCodes" :index="index" :key="index" :show-arrow="false" @click="clickListItem(item)">
				<text style="font-size: 28rpx;">{{item.lineCode}}</text>
			</uni-list-item>
		</uni-list>
		<!-- </template> -->
		<!-- 无数据 -->
		<!-- <template v-else>
			<no-content></no-content>
		</template> -->
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var resquestJSOB = require('../../common/js/hy-request.js');
	var urlJSOB = require('../../common/js/hy-url.js');
	var stringUtil = require('../../common/js/hy-stringUtil.js');
	export default {
		data() {
			return {
				lineCodes:[],
				allLineCodes:[],
				operator:""
			}
		},
		components: {
			uniList,
			uniListItem
		},
		onLoad() {
			this.operator = uni.getStorageSync("userCode")
			this.sendLineCodeDataRequest()
		},
		methods: {
			clickListItem(data){
				console.log(JSON.stringify(data))
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				prevPage.$vm.lineCode = data.lineCode
				prevPage.$vm.isRelodData = true
				uni.navigateBack({
					
				})
				
			},
			// 网络请求
			sendLineCodeDataRequest() { //
				var that = this;
				
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getLinesByOperatorURL, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
					data: { 
						operator: this.operator
					},
					successCallBack: function(res) {
						that.lineCodes = res.lineList
						that.allLineCodes = res.lineList
						
				    },
					failCallBack: function() {
			
					}
				});
			},
		    onVuleChange(event) {
			    var keyWord= event.target.value
				this.lineCodes = this.fuzzyQuery(keyWord)
			},
			fuzzyQuery(keyWord){
				var newData = new Array()
				var originalData = this.allBusList
				if(keyWord===""){
					return originalData
				}
				
				for (var i = 0; i < originalData.length; i++) {
					var obj = originalData[i]
					if(stringUtil.testString(obj.lineCode,keyWord)){
						newData.push(obj)
					}
				}
				return newData
			},
			
		}
	}
</script>

<style>
	page{
		 background-color: #E6E6E6;
	}
</style>



