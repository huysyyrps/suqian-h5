<template>
	<view class="line-wapper" :class="[{suspensionFix:isFix},indexed]" :style="'top:'+sumHeight+'px'">
		<view class="suspension-line">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	let selectorQuery = null;
	var position = 0
	export default {
		props: {
			preClass: {
				type: String,
				default: ''
			},
			disHeight:Number
		},
		data() {
			return {
				barHeight: 0,
				isFix: true,
				index: 'suspension-'
			};
		},
		computed: {
			indexed() {
				return this.index + (position++);
			},
			sumHeight(){
				return this.disHeight+this.barHeight;
			}
		},
		mounted() {
			console.log("mounted");
			this.barHeight = uni.getSystemInfoSync().windowTop || uni.getSystemInfoSync().statusBarHeight;
			selectorQuery = uni.createSelectorQuery();
		},
		onLoad() {
			console.log("onLoad");
		},
		onReady() {
			console.log("onReady components");
		},
		methods: {
			pageScroll() {
				let pre = null;
				// #ifdef H5
				pre = document.getElementsByClassName(this.indexed)[0].previousSibling.className;
				// #endif
				// #ifndef H5
				pre = this.preClass;
				// #endif
				var self = this;
				selectorQuery.selectAll('.' + pre).boundingClientRect((nodeInfo) => {
					if (nodeInfo.length > 0) {
						let node = nodeInfo[nodeInfo.length - 1];
						if (node.bottom - self.sumHeight <= 0 && !self.isFix) {
							self.isFix = true;
						} else if (node.bottom - self.sumHeight > 0 && self.isFix) {
							self.isFix = false;
						}
					}

				}).exec();
			}
		}
	}
</script>

<style>
	.suspensionFix {
		position: fixed;
		top: 0upx;
	}

	.line-wapper {
		width: 100%;
	}

	.suspension-line {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0upx 20upx;
	}
</style>
