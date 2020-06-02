###使用说明

属   性   名    |   类  型  |   说    明   
-------------  | -------- | -------------
bannerList     | Array    | 主数据(保证至少有三项)
previousMargin | String   | 上一项的外边距，同swiper组件(默认'58rpx')
nextMargin     | String   | 下一项的外边距，同swiper组件(默认'58rpx')
swiperConfig   | Object   | swiper配置数据，同swiper组件
scaleX         | String   | X轴缩放，即当前项与常规项的宽度比例(默认：(634 / 550).toFixed(4)，1.1527)
scaleY         | String   | Y轴缩放，即当前项与常规项的高度比例(默认：(378 / 328).toFixed(4)，1.1524)

```
<special-banner :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
```
```
data() {
	return {
		bannerList: [{
			picture: 'http://image.mishi.cn/r/yry_h5_test/detail/teacher’s day_1536564920021.png',
			title: '教师节福利 | 感谢你，我学会无限进化的能力',
			description: '节日福利节日福利节日福利节日福利节日福利',
			path: ''
		}, {
			picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
			title: '七夕将至：时光足够久，韧性也能炖出味',
			description: '一万年太久，就现在，给你爱',
			path: ''
		}, {
			picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
			title: '新菜上架：无边海洋，找到顺眼的那尾鱼',
			description: '花中樱，鱼乃鲷花中樱，鱼乃鲷',
			path: ''
		}, {
			picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
			title: '在湘西的烟火气里，发现苗族少女的神明',
			description: '取材自湘西苗族传统的烟熏文化',
			path: ''
		}, {
			picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
			title: '福利降临，陪伴独自行走的丰盛旅程',
			description: '在自己的小世界里，日日好日，夜夜好清宵',
			path: ''
		}],
		swiperConfig: {
			indicatorDots: true,
			indicatorColor: 'rgba(255, 255, 255, .4)',
			indicatorActiveColor: 'rgba(255, 255, 255, 1)',
			autoplay: false,
			interval: 3000,
			duration: 300,
			circular: true
		}
	}
}
```

###tips
如果需要修改样式，可以在组件内部修改其style值，具体说明已经在组件内部标记出来