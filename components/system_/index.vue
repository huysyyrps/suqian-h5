<template>
	<view class="components_all">
		<loading class="_"></loading>
		<action_sheet class="_"></action_sheet>
		<modal class="_"></modal>
		<msg_tips class="_"></msg_tips>
	</view>
</template>

<script>
	import Vue from 'vue'
	const requireComponent = require.context('./components/',true,/\w+\.vue$/)
	requireComponent.keys().forEach(fileName => {
		// 获取组件配置
		const componentConfig = requireComponent(fileName)
		// 获取组件的命名
		const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
		// 全局注册组件
		Vue.component(
			componentName,componentConfig.default || componentConfig
		)
	})

	import init_components from './init_.js'
	
	import store from '../../store/index.js'
	init_components(Vue,store)

	export default {
		components: {},
		data() {
			return {
				
			};
		},
		created() {

		}
	};
</script>

<style>
</style>
