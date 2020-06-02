<template>
	<view style="padding: 80px; display: flex; flex-direction: column; align-items: center;  " >
	<!-- 	<text style="font-size: 60rpx;">{{fullName}}</text> -->
		<text style="font-size: 60rpx;">{{time}}</text>
		<view @click="clockInClick"  style="width: 200rpx; height: 200rpx; border-radius: 200rpx; border: none; background-color: #e64709; text-align: center; color: #FFFFFF; line-height: 200rpx; font-size: 40rpx; margin-top: 60rpx;">打卡</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fullName:"",
				time:"",
				timer:null
			}
		},
		methods: {
			 clockInClick(){
				 uni.showToast({
				 	title:"打卡成功",
					icon:"none"
				 })
				 uni.navigateBack({
				 	
				 })
			 }
		},
		onLoad() {
			// this.timer = setInterval(() => {
						
							 /*时 分 秒*/
							 var date = new Date();
							var  hour = "00" + date.getHours() ;
							hour = hour.substr(hour.length-2,2);
							var  minute ="00" + date.getMinutes();
							minute = minute.substr(minute.length-2,2)
							var  second = "00" + date.getSeconds() ;
							second = second.substr(minute.length-2,2)
							this.time= hour + ':' + minute;//+':' //+ second;
                              
						// }, 1000);
          uni.setStorageSync('userName',"李伟");
         this.fullName=uni.getSystemSync('userName')
			//uni.setStorageSync('userName',options.userName);
		}
	}
</script>
    
<style>
page{
	background-color: #FFFFFF;
}
</style>
