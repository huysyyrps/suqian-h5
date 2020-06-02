<!-- 公交线路 -->
<template>
	<view>
		<view style="margin: 20rpx 20rpx; background-color: #FFFFFF; padding: 20rpx 30rpx; border-radius: 20rpx;">
			<input @input="onVuleChange" style="font-size: 30rpx;"  placeholder="输入公交线路" />
		</view>
		<uni-list>
			<uni-list-item v-for="(item,index) in listData" 
			               :index="index" :key="index" :show-arrow="true"
						   @click="clickListItem(item)">
				<text style="font-size: 28rpx;">{{item.lineCode}}</text>
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
				listData:[],
				allData:[],
				operator:"100001"
			}
		},
		components: {
			uniList,
			uniListItem
		},
		onLoad() {
			this.sendDataRequest()
		},
		methods: {
			clickListItem(data){
				console.log(data.lineCode)
				uni.navigateTo({
					url: "./BusLineStation?selectLine=" + data.lineCode
				})
			},
			// 网络请求
			sendDataRequest() { //
				var that = this;
				
				console.log('请求')
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getLinesByOperatorURL,
					data: {
						operator: this.operator,
					},
					successCallBack: function(res) {
						that.listData = res.lineList
						that.allLineCodes = res.lineList
						console.log(JSON.stringify(that.listData))
				    },
					failCallBack: function() {
			
					}
				});
			},
		    onVuleChange(event) {
			    var keyWord= event.target.value
				this.listData = this.fuzzyQuery(keyWord)
			},
			fuzzyQuery(keyWord){
				var newData = new Array()
				var originalData = this.allData
				if(keyWord===""){
					return originalData
				}
				
				for (var i = 0; i < originalData.length; i++) {
					var obj = originalData[i]
					console.log(obj.fullname+keyWord)
					console.log(obj.fullname,keyWord,stringUtil.testString(obj.fullname,keyWord))
					if(stringUtil.testString(obj.fullname,keyWord)){
						newData.push(obj)
					}
				}
				return newData
			}
		}
	}
</script>

<style>
	page{
		 background-color: #E6E6E6;
	}
</style>

