<template>
	<text class="c-badge" v-if="text" :class="inverted ? 'c-badge-' + type + ' c-badge--' + size + ' c-badge-inverted' : 'c-badge-' + type + ' c-badge--' + size" @click="onClick()">{{text}}</text>
</template>

<script>
	export default {
		name: 'c-badge',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: ''
			},
			size: { //small.normal
				type: String,
				default: 'normal'
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.c-badge {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		box-sizing: border-box;
		font-size: 12px;
		line-height: 1;
		display: inline-block;
		padding: 3px 6px;
		color: #333;
		border-radius: 100px;
		background-color: #f1f1f1
	}

	.c-badge.c-badge-inverted {
		padding: 0 5px 0 0;
		color: #999;
		background-color: transparent
	}

	.c-badge-primary {
		color: #fff;
		background-color: #007aff
	}

	.c-badge-primary.c-badge-inverted {
		color: #007aff;
		background-color: transparent
	}

	.c-badge-success {
		color: #fff;
		background-color: #4cd964
	}

	.c-badge-success.c-badge-inverted {
		color: #4cd964;
		background-color: transparent
	}

	.c-badge-warning {
		color: #fff;
		background-color: #f0ad4e
	}

	.c-badge-warning.c-badge-inverted {
		color: #f0ad4e;
		background-color: transparent
	}

	.c-badge-error {
		color: #fff;
		background-color: #dd524d
	}

	.c-badge-error.c-badge-inverted {
		color: #dd524d;
		background-color: transparent
	}

	.c-badge--small {
		transform: scale(.8);
		transform-origin: center center
	}
</style>