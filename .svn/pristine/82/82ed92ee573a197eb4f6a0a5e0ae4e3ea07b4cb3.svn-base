<template>
	<view class="bg-white">
		
		<!-- <cLabel v-for="(e,i) in " title='text' v-model='form.text' :clear='true' @handRight='handTextRight' :flex='false' :dataText='form.text' mode='text'  rightIcon='cuIcon-close'   /> -->
		<cLabel :title="lineCode"  v-model='form.text' rightIcon='cuIcon-people'   />
		<view class="hourLine"></view>
		<view class="item">
			<cLabel title='开始时间 : ' :dataText='form.carPlanBegTime' v-model='form.carPlanBegTime' mode='time' />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<cLabel title='结束时间 : ' :dataText='form.carPlanEndTime' v-model='form.carPlanEndTime' mode='time' />
		</view>
		<view class="hourLine"></view>
		
		<view class="hourLine"></view>
		<view class="item">
		    <cLabel title='发车方向 : ' :dataText='form.downUpfcfx' :selectList="selectList" v-model='form.downUpfcfx' mode='selector' />
		</view>
		<view class="item">
			<text class="itemName">间隔开始时间 :</text>
			<input class="input" placeholder="点击选择时间" :value="form.begTimeStr" type="text" @click="begtimedown" />
		</view>
		
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">间隔结束时间 :</text>
			<input class="input" placeholder="点击选择时间" :value="form.endTimeStr" type="text" @click="endtimedown" />
		</view>
		
		<view class="hourLine"></view>
		<!-- <view class="item">
			<text class="itemName">下行结束站点 :</text>
			<input class="input" placeholder="点击选择站点" :value="downstationend" type="text" @click="endstationdown" />
		</view>
		<view class="hourLine"></view>
		<view class="item">
			<text class="itemName">上行开始站点 :</text>
			<input class="input" placeholder="点击选择站点" :value="stationnamedownbeg" type="text" @click="begstationup" />
		</view>
		<view class="hourLine"></view> -->
		
		
		<cLabel title='间隔' v-model='form.yxsc'  mode='number' :dataText='form.yxsc'  rightIcon='cuIcon-vipcard text-red'  />
		
		
		
		<!-- <cLabel title='text' v-model='form.text' @handRight='handTextRight' :flex='false' :dataText='form.text' mode='text'  rightIcon=''   />
		<cLabel title='number' v-model='form.number'  mode='number' :dataText='form.number' rightText='元' rightIcon='text-orange'  />
		<cLabel title='idcard' v-model='form.idcard'  mode='idcard' :dataText='form.idcard'  rightIcon='cuIcon-vipcard text-red'  />
		<cLabel title='password' v-model='form.password'  :mode='isPass' :dataText='form.password' @handRight='handRight(passState)' :rightIcon='passState'   />
		<cLabel title='switch' @hand='handSwitch' :dataText='form.switch'  align='right'  mode='switch' rightIcon=''   />
		
		<cLabel title='textarea' v-model='form.textarea' @handRight='handTextareaRight' :dataText='form.textarea' mode='textarea' rightIcon='cuIcon-close'    />
		<cLabel title='img'  @hand='handImg' mode='img' :flex='false'   />
		<cLabel title='selector' :dataText='form.selector'  :selectList="selectList"  v-model='form.selector' mode='selector'    />
		<cLabel title='half' :dataText='form.half'  :disabled='true'  v-model='form.half' mode='half'    /> 
		<cLabel title='date' :dataText='form.date' v-model='form.date'   mode='date'    /> 
		<cLabel title='yearMonth' :dataText='form.yearMonth' v-model='form.yearMonth' mode='yearMonth'    />
		<cLabel title='dateTime' :dataText='form.dateTime'  v-model='form.dateTime' mode='dateTime' rightIcon='cuIcon-remind text-mauve'   /> 
		<cLabel title='range' :dataText='form.range'  v-model='form.range' mode='range'    /> 
		<cLabel title='time' :dataText='form.time'  v-model='form.time' mode='time'    />
		<cLabel title='region' :dataText='form.region'  v-model='form.region' mode='region' rightIcon='cuIcon-locationfill text-blue'    />
		<cLabel title='limit' :dataText='form.limit'  v-model='form.limit' mode='limit'    />
		<cLabel title='limitHour' :dataText='form.limitHour'  v-model='form.limitHour' mode='limitHour'    /> -->
		
		
			<button class="bg-blue" @tap="handSubmit">确定</button>
		
		
		
		
		<!-- <cLabel v-for="(e,i) in columns" :key='i' :mode='e.mode' :flex="e.flex" :title='e.title' v-model='e.dataText' :dataText='ndata.dataText'  :rightIcon='e.rightIcon'   /> -->
	</view>
</template>

<script>
	var check = require('@/common/checker.js')
	import cLabel from "@/components/c-label/c-label.vue"
	import cUpload from "@/components/c-upload/c-upload.vue"
	
	var resquestJSOB = require('@/common/js/hy-request.js');
	var urlJSOB = require('@/common/js/hy-url.js');
	var dateTool = require('@/common/js/hy-date.js');
	export default {
		components:{
			cLabel,
			cUpload
		},
		data() {
			return {
				
				// columns:[
				// 	{title:'text',mode:'text',dataText:'',rightIcon:'cuIcon-people',flex:false},
				// 	{title:'number',mode:'number',dataText:'',rightIcon:'cuIcon-recharge text-orange',},
				// 	{title:'idcard',mode:'number',dataText:'',rightIcon:'cuIcon-vipcard text-red',},
				// ],
				// ndata:{
					
				// },
				lineCode:"52",
				sltTime:"",
				isSelectBg:true,
				// isRelodData:false,
				isPass:'password',
				passState:'cuIcon-attentionforbidfill text-gray',
				selectList:[
					{label:"全部",value:1},
					{label:"主站",value:2},
					{label:"副站",value:-9},
				],
				// form:{
				// 	text:"",
				// 	number:'',
				// 	idcard:'',
				// 	password:'',
				// 	switch:true,
				// 	textarea:'',
				// 	img:[],
				// 	selector:'',
				// 	half:'',
				// 	date:'',
				// 	yearMonth:'',
				// 	dateTime:'',
				// 	range:'',
				// 	time:'',
				// 	region:'',
				// 	limit:'',
				// 	limitHour:'',
				// },
				
				form:{
					carPlanBegTime:'',
					carPlanEndTime:'',
					lineCode:"",
					begDate:'',
					endDate:'',
					begTime:'',
					endTime:'',
					begTimeStr:'',
					endTimeStr:'',
					
					downUpfcfx:'',
					cmd:10,
					yxsc:''
				},
				rules:{
					text:[
						{checkType:'phone',errorMsg:'请正确输入手机号码'},
						{checkType:'maxMin',max:11,min:7,errorMsg:'长度介于 7-11 个字符'},
					],
					idcard:[
						{checkType:'noempty',errorMsg:'不能为空'},
						{checkType:'card',errorMsg:'请正确输入身份证号码'},
					]
				}
			}
		},
		onLoad(options) {
			this.lineCode = options.Linecode
			console.log("this.lineCode"+this.lineCode)
			var dateStr = dateTool.getDate().replace(/-/g,"")
			this.form.begDate = dateStr
			this.form.endDate = dateStr	
		},
		onShow() {
			console.log("onShow"+this.sltTime)
			if(this.sltTime != ""){
				if(this.isSelectBg){
					this.form.begTime = this.sltTime
					this.form.begTimeStr = this.sltTime.slice(0,2) + ":" + this.sltTime.slice(2)
				}else{
					this.form.endTime = this.sltTime
					this.form.endTimeStr = this.sltTime.slice(0,2) + ":" + this.sltTime.slice(2)
				}
			}
		},
		methods: {
			begtimedown: function(e) {
				if(this.form.carPlanBegTime===''){
					uni.showToast({
						icon:"none",
						title:"请选择开始时间"
					})
					return
				}
				
				if(this.form.carPlanEndTime===''){
					uni.showToast({
						icon:"none",
						title:"请选择结束时间"
					})
					return
				}
				
				if(this.form.downUpfcfx===''){
					uni.showToast({
						icon:"none",
						title:"请选择发车方向"
					})
					return
				}
					this.isSelectBg = true
					
					var begTime = this.form.carPlanBegTime.replace(":","").substr(0,4)
					var endTime = this.form.carPlanEndTime.replace(":","").substr(0,4)
					var downUpfcfx = this.form.downUpfcfx
					var cmdType = 0
					
					if(downUpfcfx == "主站"){
						cmdType = 2
					}else if(downUpfcfx == "副站"){
						cmdType = 3
						}
					
					
				uni.navigateTo({
					url: '../../../../Dispatching/Timeinterval?lineCode=' + this.lineCode + '&begTime=' + begTime  + '&endTime=' + endTime + '&cmdType=' + cmdType
				});
			},
			endtimedown: function(e) {
				if(this.form.carPlanBegTime===''){
					uni.showToast({
						icon:"none",
						title:"请选择开始时间"
					})
					return
				}
				
				if(this.form.carPlanEndTime===''){
					uni.showToast({
						icon:"none",
						title:"请选择结束时间"
					})
					return
				}
				
				if(this.form.downUpfcfx===''){
					uni.showToast({
						icon:"none",
						title:"请选择发车方向"
					})
					return
				}
				this.isSelectBg = false
				var begTime = this.form.carPlanBegTime.replace(":","").substr(0,4)
				var endTime = this.form.carPlanEndTime.replace(":","").substr(0,4)
				var downUpfcfx = this.form.downUpfcfx
				var cmdType = 0
				
				if(downUpfcfx == "主站"){
					cmdType = 2
				}else if(downUpfcfx == "副站"){
					cmdType = 3
					}
				// console.log(this.form.timebeg,form.fangxiang,form.timeend)
				uni.navigateTo({
					url: '../../../../Dispatching/Timeinterval?lineCode=' + this.lineCode + '&begTime=' + begTime  + '&endTime=' + endTime + '&cmdType=' + cmdType
				});
			},
			
			handSubmit(){
				// let state = check.check(this.form, this.rules);
				// console.log(state)
				// if(!state){
				// 	uni.showToast({ title:check.error, icon:'none', duration:2000 })
				// 	return
				// }else{
				// 	uni.showToast({ title:'表单验证成功', duration:2000 })
				// }
				var downUpfcfx = 0
				 if (this.form.downUpfcfx=="主站"){
					 downUpfcfx = 1
				}else if (this.form.downUpfcfx=="副站"){
					 downUpfcfx = 1
				}
				
				if(this.form.begTime>this.form.endTime){
						uni.showToast({ title:"间隔开始时间不得大于结束时间", icon:'none', duration:2000 })
						return
				}
				var param = {
					lineCode: this.lineCode,
					begDate:this.form.begDate,
					endDate:this.form.endDate,
					begTime:this.form.begTime,
					endTime:this.form.endTime,
					downUpfcfx:downUpfcfx,
					cmd:10,
					yxsc:this.form.yxsc
				}
				console.log(JSON.stringify(param))
				
				resquestJSOB.sendGetRequestJson({
					url: urlJSOB.adjustInterval, //sdhyscheduleSQ/PhoneQueryAction!getLineRealTime.shtml",//
					//url : "http://221.6.253.254:8070/sdhyschedule/PhoneQueryAction!getLineStation.shtml",
					data: param,
					successCallBack: function(res) {
						console.log(res)
							if(res){
								uni.showToast({
									title:"调整成功",
									icon:"none"
								})
								
								uni.navigateBack({
									
								})
							}
							
					},
					failCallBack: function() {
							
					}
				});
			}
		}
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