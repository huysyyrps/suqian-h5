<template>
	<view :class="disabled ? 'c-list-item--disabled' : ''" :hover-class="disabled || showSwitch ? '' : 'c-list-item--hover'" class="c-list-item" @click="onClick">
		<view class="c-list-item__container">
			<view v-if="thumb" class="c-list-item__icon">
				<image :src="thumb" class="c-list-item__icon-img" />
			</view>
			<view v-else-if="showExtraIcon" class="c-list-item__icon">
				<!-- <uni-icon class="uni-icon-wrapper" :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" /> -->
				<text :class="extraIcon.type" :style="{'color':extraIcon.color,'font-size':extraIcon.size,}"></text>
			</view>
			<view class="c-list-item__content">
				<view class="c-list-item__content-title">{{ title }}</view>
				<view v-if="note" class="c-list-item__content-note">{{ note }}</view>
			</view>
			<view v-if="showBadge || showArrow || showSwitch || showImg || showText" class="c-list-item__extra">
				<view v-if="showImg" :class="['thisImg',imgMode]">
					<image v-if="!imgText" class="icon" :src="img" mode="aspectFill"></image>
					<view v-else class="imgText">{{imgText}}</view>
				</view>
				<view class="thisText" v-if="showText" @tap="clickRight">
					{{text}}
				</view>
				<c-badge v-if="showBadge" :type="badgeType" :text="badgeText" />
				<switch v-if="showSwitch" :disabled="disabled" :checked="switchChecked" @change="onSwitchChange" />
				<view class="cuIcon-right"></view>
				<c-icon class="uni-icon-wrapper" v-if="showArrow" :size="20" color="#bbb" type="arrowright" />
				
			</view>
		</view>
	</view>
</template>

<script>
	import cIcon from '../c-icon/c-icon.vue'
	import cBadge from '../c-badge/c-badge.vue'
	export default {
		name: 'CListItem',
		components: {
			cIcon,
			cBadge
		},
		props: {
			title: {
				type: String,
				default: ''
			}, // 列表标题
			note: {
				type: String,
				default: ''
			}, // 列表描述
			disabled: { // 是否禁用
				type: Boolean,
				default: false
			},
			showArrow: { // 是否显示箭头
				type: Boolean,
				default: true
			},
			imgMode:{
				type: String,
				default: 'circular'
			},
			showBadge: { // 是否显示数字角标
				type: Boolean,
				default: false
			},
			showSwitch: { // 是否显示Switch
				type: Boolean,
				default: false
			},
			switchChecked: { // Switch是否被选中
				type: Boolean,
				default: false
			},
			badgeText: {
				type: [String, Number],
				default: ''
			}, // badge内容
			badgeType: { // badge类型
				type: String,
				default: 'success'
			},
			thumb: {
				type: String,
				default: ''
			}, // 缩略图
			showExtraIcon: { // 是否显示扩展图标
				type: Boolean,
				default: false
			},
			showImg: { // 是否显示img
				type: Boolean,
				default: false
			},
			imgU: { 
				type: String,
				default: ''
			},
			imgText:{
				type: String,
				default: ''
			},
			showText:{
				type: Boolean,
				default: false
			},
			text:{
				type: String,
				default: ''
			},
			
			extraIcon: {
				type: Object,
				default () {
					return {
						type: 'contact',
						color: '#000000',
						size: 20
					}
				}
			}
		},
		data() {
			return {
				img:this.imgU,
			}
		},
		watch:{
			imgU(val){
				this.img = val;
			}
		},
		methods: {
			clickRight(){
				this.$emit('rightTextClick')
			},
			onClick() {
				this.$emit('click')
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail)
			}
		}
	}
</script>

<style lang="scss">
	@charset "UTF-8";

	.c-list-item {
		font-size: $uni-font-size-lg;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center
	}

	.c-list-item--disabled {
		opacity: .3
	}

	.c-list-item--hover {
		background-color: #f1f1f1
	}

	.c-list-item__container {
		padding: 12px 15px;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center
	}

	.c-list-item__container:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.c-list-item__content {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}

	.c-list-item__content-title {
		font-size: $uni-font-size-lg;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden
	}

	.c-list-item__content-note {
		color: #999;
		font-size: 14px;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden
	}

	.c-list-item__extra {
		width: 25%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center
	}

	.c-list-item__icon {
		margin-right: 9px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center
	}

	.c-list-item__icon-img {
		height: 26px;
		width: 26px
	}

	.uni-list>.c-list-item:last-child .c-list-item-container:after {
		height: 0
	}
	
	.thisImg{width: 40px;height: 40px;overflow: hidden;background-color: rgb(0, 130, 230);}
	.circular{border-radius: 6px;}
	.square{border-radius: 50%}
	.thisImg .icon{width: 100%;height:100%;}
	
	.thisText{font-size: $uni-font-size-base;}
	.imgText{font-size: 12px;text-align: center;color: #fff;line-height: 40px;}
</style>