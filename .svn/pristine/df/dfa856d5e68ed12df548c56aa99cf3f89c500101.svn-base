<template>
	<view class="setting c-padding-wrap">
		<view class="c-card" v-for="(list,index) in lists" :key="index">
			<view class="c-list">
				<view class="c-list-cell uni-collapse">
					<view class="c-list-cell-navigate uni-navigate-right" hover-class="c-list-cell-hover" @click="goDetailPage(list.url)">
						<view>{{list.name}}</view>
						<view class="right">{{list.rightText}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="padding-sm flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg" @tap="logout">退出登录</button>
		</view>	
	</view>
</template>

<script>
	import {formatFileSize} from "@/common/util.js"
    import {mapState,mapMutations} from 'vuex'
	import cList from '@/components/c-list/c-list.vue'
	import cListItem from '@/components/c-list-item/c-list-item.vue'
	
	export default {
		components: {cList,cListItem},
		data() {
			return {
				lists: [
					{
						name: "清理本地缓存",
						url: "clear",
						rightText:formatFileSize(13556),
					},
					{
						name: "版本更新",
						url: "version",
						rightText:this.$store.state.version,
					},
					{
						name: "关于",
						url: "",
						rightText:"",
					},
					
				]
			}
		},
        computed: mapState(['userInfo']),
		methods: {
			
			logout(){
				uni.clearStorageSync();
			},
			goDetailPage(path) {
				
				if(path == 'version'){
					uni.showToast({icon:"none",title:"以是最新版本"})
				}else if(path == 'clear'){
					uni.showModal({
						title:"清除缓存",
						content:"清除缓存将会清除本地数据并重新登录，您确定吗？",
						success:res=>{
							if(res.confirm){
								uni.clearStorageSync();
							}
						}
					})
				}else if(path){
					uni.navigateTo({
						url: '/pages/mine/settings/' + path + '/' + path
					});
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.uni-card {box-shadow: none;}
	.c-list:after {height: 0;}
	.c-list:before {height: 0;}
	.uni-hello-text {word-break: break-all;}
	.right{margin-right: 30upx;}
</style>
