<template>
	<view class="content">
		<view class="example-block">
			<view class="table">
				<z-table  :titleTextAlign="selectContent[0].titleTextAlign" :tableData="nowData"
				 :columns="nowColumn"  :stickSide="selectContent[0].stickSide" :showBottomSum="selectContent[0].showBottomSum"
				 :showLoading="false" :emptyText='selectContent[0].emptyText' :tableHeight='selectContent[0].tableHeight' @onClick="rowClick"
				 :singleSelect="singleSelect" :showSelect="selectContent[0].showSelect" @onSelect="tableSelect"></z-table>
			</view>
			
			<button v-if="selectContent[0].showSelect" class="select-btn" type="primary" >{{'确定'}}</button>
		</view>
	</view>
</template>
<script>
	import zTable from "../../components/z-table/z-table.vue";
	var resquestJSOB = require('@/common/js/hy-request.js');
	var urlJSOB = require('@/common/js/hy-url.js');
	var stringUtil = require('@/common/js/hy-stringUtil.js');
	export default {
		data() {
			return {
				cmdType:"0",
				lineCode:"",
				begTime:"",
				endTime:"",
				searchCmdType:"0",
				showUpData: false,
				nowType: 0,
				nowData: false,
				nowColumn: false,
				nowHtml: '',
				myDebounce: this.debounce(this.setTable),
				selectContent: [{
					id: '',
					textAlign: '', // 内容对齐方式
					titleTextAlign: '', // 表头对齐方式
					tableData: 'selectData', // 表格数据
					columns: 'selectColumns', // 表格列内容
					stickSide: false, // 左侧固定
					showBottomSum: false, // 底部显示统计
					emptyText: false, // 表格内容为空时显示的内容
					tableHeight: false, // 表格高度
					showSelect: true, // 开启选择功能
					html: 'selectHtml'
				} ],
				singleSelect: true,
				selectData: [],
				selectColumns: [
					{
						title: "车号",
						key: 'busCode',
						width: 400
					}
					,
					{
						title: "发车时间",
						key: "planeTime",
						width: 300
					},
					{
						title: "发车类型",

						key: "cmdTypeName",

						width: 300
					}
					// ,
					// {
					// 	title: "驾驶员",
					// 	key: "driverCode",
					// 	width: 300
					// }
					// ,
					// {
					// 	title: "间隔",
					// 	key: "busCode",
					// 	width: 300
					// }
				],
				selectHtml: "<z-table showSelect :singleSelect='singleSelect' :tableData='selectData' :columns='selectColumns' @onSelect='tableSelect'></z-table>",
				
				
				
				
			}
		},
		components: {
			zTable
		},
		watch: {
			nowType: {
				handler() {
					this.nowData = false
					this.nowColumn = false
					this.myDebounce()
				},
				immediate: true
			}
		},
		onLoad(options) {
			this.lineCode = options.lineCode
			this.begTime = options.begTime
			this.endTime = options.endTime
			this.cmdType =  options.cmdType
			// console.log(options)
		},
		onShow() {
			
			this.sendDataRequest();
		},
		methods: {
			
			setTable() {
				this.nowData = this.$data[this.selectContent[this.nowType].tableData]
				this.nowColumn = this.$data[this.selectContent[this.nowType].columns]
				this.nowHtml = this.$data[this.selectContent[this.nowType].html]
				console.log(this.nowHtml)
			},
			debounce(fn, time = 1000) {
				let timer = null
				return function() {
					if (timer) clearTimeout(timer)
					timer = setTimeout(fn, time)
				}
			},
			
			
			tableSelect(selectList) {
			
				var index = selectList.join(',')
				var data = this.selectData[index]
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				console.log(pages.length)
				console.log(pages)
				console.log(prevPage.$vm.sltTime)
				prevPage.$vm.sltTime = data.planBegin
				
				console.log(data.planBegin)
				// prevPage.$vm.isRelodData = true
				uni.navigateBack({
					
				})
			},
			sendDataRequest() {
				var that = this;
				console.log("开始请求")
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.getLineRealTime, //sdhyscheduleSQ/PhoneQueryAction!getLineRealTime.shtml",//
					//url : "http://221.6.253.254:8070/sdhyschedule/PhoneQueryAction!getLineStation.shtml",
					data: {

						lineCode:this.lineCode


					},
					successCallBack: function(res) {
						// that.selectData =res
						console.log("res")
						console.log(res)
						// alert("s")
						var newData = new Array();
						// that.selectData = res;
						for (var i = 0; i < res.length; i++) {
							var map = res[i];
								
							if(that.cmdType!=0&&that.cmdType!=map.cmdType){
								continue
								
							}
							 
							if((map.cmdType == 2|| map.cmdType == 3)&&map.planBegin > that.begTime&& map.planBegin < that.endTime){
								if(map.cmdType == 2){
									map.cmdTypeName = "主站到副站"
									
								}else if(map.cmdType == 3){
									map.cmdTypeName = "副站到主站"
								}
								var planeTime = map.planBegin
								console.log("planeTime",planeTime)
								map.planeTime = planeTime.slice(0,2) + ":" + planeTime.slice(0,2)
								
								console.log("map.planeTime",map.planeTime)
								newData.push(map)
							}
							
						}
						
						that.selectData =newData// newData;
			
			
			
					},
					failCallBack: function() {
			
					}
				});
			},
			
		}
	};
</script>

<style >
	.content {
		padding: 20rpx;
		font-size: 24rpx;
		background: #fffff;
	}

	.logo {
		display: block;
		height: 144rpx;
		width: 144rpx;
		margin: 0 auto;
		margin-top: 50rpx;
	}

	.version {
		text-align: center;
		color: #fff;
	}

	.table {
		text-align: center;
	}

	.title {
		margin-bottom: 20rpx;
		font-size: 24rpx;
		color: #fff;
	}

	.block-title {
		position: sticky;
		top: var(--window-top);
		padding: 40rpx 0 !important;
		text-align: center;
		background: #f7f9ff;
		z-index: 99;
	}

	.example-block {
		padding: 20rpx;
		margin: 20rpx -20rpx;
		background: #f7f9ff;
	}

	.example-title {
		font-size: 30rpx;
		font-weight: bold;
		margin: 30rpx 0 10rpx;
	}

	.example-explain {
		font-size: 24rpx;
	}

	.explain-title {
		margin-top: 30rpx;
		padding-bottom: 10rpx;
		font-size: 28rpx;
		border-bottom: solid 2rpx #ccc;
	}

	.explain-context {
		margin-top: 10rpx;
		color: #8f8f94;
	}

	.explain {
		display: flex;
	}

	.explain-text {
		flex: 1;
		margin-left: 20rpx;
	}

	.codes {
		padding: 20rpx;
		background: #333;
		color: #fff;
		box-sizing: border-box;
	}

	.codes text {
		white-space: nowrap;
	}

	.toggle-btn {
		margin: 10rpx 0;
		padding: 10rex;
		color: #1c1;
	}

	.select-btn {
		display: inline-block;
		width: 200rpx;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.type-select-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20rpx;
		margin: 0 -20rpx;
		background: #f7f9ff;
	}

	.type-select-box-title {
		width: 100%;
		margin-bottom: 20rpx;
		font-size: 36rpx;
	}

	.type-select-item {
		flex: 1;
		padding: 20rpx;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
		white-space: nowrap;
		border: solid 2rpx #066;
		border-radius: 4rpx;
		font-size: 28rpx;
		background: #fff;
		color: #006666;
		text-align: center;

		
	}
</style>
