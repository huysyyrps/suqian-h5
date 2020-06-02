###使用说明
属   性   名    |   类  型  |   说    明   
-------------  | -------- | -------------
isNewest       | Boolean  | 是否是最新（时间）节点
isFirst        | Boolean  | 是否是第一项（第一项不展示竖线）
isMainNode     | Boolean  | 是否是每种状态下的主节点（主节点显示图标，非主节点显示圆点）
nodeData       | Object   | 每项数据
####
以上数据格式是理想状态下最方便的数据格式，一般快递方提供的数据，需要自己多处理一层！或者变通一下，将数据根据状态分组，那么每组最早的一项即是主节点


###重要提示
所使用小图标皆在images文件夹里，可以自行替换，注意命名，或者也可以修改代码

###使用代码案例
```
<block v-for="(item, index) in tracesData" :key="index">
	<trackNode :is-first="index===tracesData.length-1" :is-newest="index===0" :is-main-node="item.isMainNode" :node-data="item"></trackNode>
</block>
```
```
data() {
	return {
		tracesData: [
		  {
		    acceptStation: '包裹已被吴亦发同学签收', // 节点描述
		    createTime: '2019-10-24 15: 27: 16',
		    status: 'COMPLETE', // 节点状态
		    phone: '', // 电话
		    statusName: '已签收', // 节点标题
		    isMainNode: true // 是否主节点，主节点前方展示icon
		  },
		  {
		    acceptStation: '由派送员蔡小坤同志配送，电话：',
		    createTime: '2019-10-24 15: 26: 41',
		    status: 'DELIVERING',
		    phone: '16677778888',
		    statusName: '运输中',
		    isMainNode: true
		  },
		  {
		    acceptStation: '已到XXX小区快递点',
		    createTime: '2019-10-24 15: 26: 41',
		    status: 'DELIVERING',
		    phone: '',
		    statusName: '运输中',
		    isMainNode: false
		  },
		  {
		    acceptStation: '已到海宁集散中心',
		    createTime: '2019-10-24 15: 26: 18',
		    status: 'DELIVERING',
		    phone: '',
		    statusName: '运输中',
		    isMainNode: false
		  },
		  {
		    acceptStation: '已到杭州集散中心',
		    createTime: '2019-10-24 15: 26: 07',
		    status: 'DELIVERING',
		    phone: '',
		    statusName: '运输中',
		    isMainNode: false
		  },
		  {
		    acceptStation: '包裹已到达余杭区集散中心',
		    createTime: '2019-10-24 15: 25: 54',
		    status: 'DELIVERING',
		    phone: '',
		    statusName: '运输中',
		    isMainNode: false
		  },
		  {
		    acceptStation: '快递员已上门取件',
		    createTime: '2019-10-24 15: 25: 17',
		    status: 'DELIVERING',
		    phone: '',
		    statusName: '已揽收',
		    isMainNode: false
		  },
		  {
		    acceptStation: '等待快递员上门揽件',
		    createTime: '2019-10-24 15: 25: 00',
		    status: 'WATTING_DELIVER',
		    phone: '',
		    statusName: '已发货',
		    isMainNode: true
		  },
		  {
		    acceptStation: '您的包裹正在打包',
		    createTime: '2019-10-24 15: 24: 00',
		    status: 'WATTING_DELIVER',
		    phone: '',
		    statusName: '待发货',
		    isMainNode: false
		  },
		  {
		    acceptStation: '订单支付成功，等待商家发货',
		    createTime: '2019-10-24 15: 22: 30',
		    status: 'PAYED',
		    statusName: '已支付',
		    isMainNode: true
		  },
		  {
		    acceptStation: '订单提交成功',
		    createTime: '2019-10-24 15: 22: 00',
		    status: 'WATTING_PAY',
		    statusName: '已下单',
		    isMainNode: true
		  }
		]
	}
}
```

###tips
如果需要修改样式，可以在组件内部修改其style值