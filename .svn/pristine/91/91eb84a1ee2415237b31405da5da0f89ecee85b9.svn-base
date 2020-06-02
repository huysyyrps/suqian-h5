<template>
	<view>
		<view style="margin: 20rpx 20rpx; background-color: #FFFFFF; padding: 20rpx 30rpx; border-radius: 20rpx;">
			<input @input="onVuleChange" style="font-size: 30rpx;" placeholder="输入关键字" />
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in listData" :index="index" :key="index" :show-arrow="false" @click="clickListItem(item)">
				<text style="font-size: 28rpx;">{{ item.fullname }}</text>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';

var resquestJSOB = require('../../../common/js/hy-request.js');
var urlJSOB = require('../../../common/js/hy-url.js');
var stringUtil = require('../../../common/js/hy-stringUtil.js');
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
	onLoad() {
		this.sendDataRequest();
	},
	methods: {
		clickListItem(data) {
			console.log(JSON.stringify(data));
			var pages = getCurrentPages();
			var currPage = pages[pages.length - 1]; //当前页面
			var prevPage = pages[pages.length - 2]; //上一个页面
			//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
			prevPage.$vm.driver = data.fullname;
			prevPage.$vm.ecard = data.eCard;
			prevPage.$vm.userCode = data.userCode;
			prevPage.$vm.isRelodData = true;
			uni.navigateBack({});
		},
		// 网络请求
		sendDataRequest() {
			//
			var that = this;
			try {
				var data = uni.getStorageSync('driver');

				if (data != '') {
					that.listData = data;
					that.allData = data;
					console.log(data);
					return;
				}
			} catch (e) {
				//TODO handle the exception
			}
			console.log('请求');
			resquestJSOB.sendGetRequestJson({
				url: urlJSOB.person, //urlJSOB.base+"repair/getMeasureCountMeasureBus.do",//
				data: {},
				successCallBack: function(data) {
					that.listData = data.data;
					that.allData = data.data;
					console.log(data);
					try {
						uni.setStorageSync('driver', data.data);
					} catch (e) {
						//TODO handle the exception
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
				if (stringUtil.testString(obj.fullname, keyWord)) {
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
