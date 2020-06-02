<template>
	<view class="bg-white">

		<!-- <cLabel v-for="(e,i) in " title='text' v-model='form.text' :clear='true' @handRight='handTextRight' :flex='false' :dataText='form.text' mode='text'  rightIcon='cuIcon-close'   /> -->
		<cLabel :dataText='Linec' v-model='form.text' rightIcon='cuIcon-people' />
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">新驾驶员:</text>
			<input class="input" placeholder="点击选择驾驶员" :value="driver" type="text" @click="bindPersonChange" />
		</view>
		<view class="hourLine"></view>
		<cLabel title='旧车号 : ' v-model='form.carno'  mode='idcard' :dataText='form.carno'  rightIcon='cuIcon-vipcard text-red'  />
		<view class="hourLine"></view>
		<cLabel title='新车号 : ' v-model='form.carnonew'  mode='idcard' :dataText='form.carnonew'  rightIcon='cuIcon-vipcard text-red'  />
		<view class="hourLine"></view>
		<button class="bg-blue" @tap="handSubmit">确定</button>
	</view>
</template>

<script>
	var check = require('@/common/checker.js')
	import cLabel from "@/components/c-label/c-label.vue"
	import cUpload from "@/components/c-upload/c-upload.vue"
	var resquestJSOB = require('@/common/js/hy-request.js');
	var urlJSOB = require('@/common/js/hy-url.js');
	var stringUtil = require('@/common/js/hy-stringUtil.js');
	var type;
	var zufufang;
	var gowork;
	var Linem;
	export default {
		components: {
			cLabel,
			cUpload
		},
		data() {
			return {

				passState: 'cuIcon-attentionforbidfill text-gray',
				selectList: [{
						label: "全部",
						value: 0
					},
					{
						label: "主厂",
						value: 1
					},
					{
						label: "副厂",
						value: 2
					},
				],
				jiabantype: [
						
					{
						label: "否",
						value: 0
					},
					{
						label: "是",
						value: 1
					},
				],
				selectListtype: [{
						label: "主站到主站",
						value: 1
					},
					{
						label: "主站到副站",
						value: 2
					},
					{
						label: "副站到主站",
						value: 3
					},{
						label: "主区间到主站",
						value: 4
					},
					{
						label: "主区间到副站",
						value: 5
					},
					{
						label: "副区间到主站",
						value: 6
					},
				],
				driver: '',
				userCode: '',
				downstationsta: '',
				downstationend: '',
				stationnamedownbeg: '',
				stationnamedownend: '',
				stationOrder1: '',
				stationOrder2: '',
				stationOrder3: '',
				stationOrder4: '',
				Linec: '',
				form: {
					yearMonthbeg: "",
					yearMonthend: '',
					timeadd: '',
					carno: '',
					carnonew: '',
					fangxiang: '',
					timebeg: '',
					timeend: '',
					jiaban: ''
				},
				rules: {
					text: [{
							checkType: 'phone',
							errorMsg: '请正确输入手机号码'
						},
						{
							checkType: 'maxMin',
							max: 11,
							min: 7,
							errorMsg: '长度介于 7-11 个字符'
						},
					],
					idcard: [{
							checkType: 'noempty',
							errorMsg: '不能为空'
						},
						{
							checkType: 'card',
							errorMsg: '请正确输入身份证号码'
						},
					]
				}
			}
		},
		methods: {
			handSubmit() {
				
				if(this.driver==''){
					uni.showToast({
						title:'驾驶员不能为空',
						icon:"none"
					})
				}else if(this.form.carno==''){
					uni.showToast({
						title:'旧车号不能为空',
						icon:"none"
					})
				}else if(this.form.carnonew==''){		
					uni.showToast({
						title:'新车号不能为空',
						icon:"none"
					})
				}else{
					this.sendaddcar();
				}
				
				
			},
			
			sendaddcar(){
				
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.updatecar, 
					data: {
						lineCode: Linem,
						CurrPlanID: this.form.carno,
						busCode: this.form.carnonew,
						scheId: uni.getStorageSync("userCode"),//调度员号码
						newJSY: this.userCode,//驾驶员
						
					},
					successCallBack: function(res) {
						if(res.success==true){
							uni.showToast({
								title:'修改成功',
								
							})
						}else if(res.success==true){
							uni.showToast({
								title:'修改失败'+res.msg,
								icon:"none"
							})
						}
						console.log(res)
					},
					failCallBack: function(res) {
						console.log(res)
					}
				});
			},
			bindPersonChange: function(e) {
				uni.navigateTo({
					url: '../../../../constant/personnel/personnel'
				});
			},
			begstationdown: function(e) {
				uni.navigateTo({
					url: '../../../../Dispatching/StationList?state=1'
				});
			},

			endstationdown: function(e) {
				uni.navigateTo({
					url: '../../../../Dispatching/StationList?state=2'
				});
			},
			begstationup: function(e) {
				uni.navigateTo({
					url: '../../../../Dispatching/StationList?state=3'
				});
			},
			endstationup: function(e) {
				uni.navigateTo({
					url: '../../../../Dispatching/StationList?state=4'
				});
			}

		},
		onLoad(options) {
			Linem=options.Linecode;
			this.Linec=options.Linecode;
		},
	}
</script>
<style>
	.bg-blue {
		background-color: #007AFF;
		width: 70%;
		margin-top: 100rpx;
		color: #ffffff;
	}

	.item {
		display: flex;
		width: 100%;
		align-items: center;
		background-color: #FFFFFF;
		min-height: 100rpx;
	}

	.hourLine {
		height: 1rpx;
		width: 90%;
		background-color: #DCDCDC;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}

	.itemName {
		height: 100rpx;
		width: 280rpx;
		display: flex;
		line-height: auto;
		font-size: 28rpx;
		align-items: center;
		margin-left: 20rpx;
		line-height: 150rpx;
		color: #000000;
	}

	.inputarea {
		display: block;
		width: auto;
		height: max-content;
		display: flex;
		flex-grow: 1;
		auto-height: true;
		color: #000000;
		font-size: 28rpx;
	}
</style>
