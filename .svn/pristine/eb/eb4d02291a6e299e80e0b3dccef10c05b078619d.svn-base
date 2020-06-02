<template>
    <view class="warp">
        <view class="box">
            <view class="title">表格模式</view>
			<scroll-view scroll-x="true" class="bookshelf-content">
            <t-table @change="change">
                <t-tr>
                    <t-th>班次</t-th>
                    <t-th>车号</t-th>
                    <t-th>方向</t-th>
                    <t-th>计划/实际发车</t-th>
					<t-th>计划/实际到达</t-th>
					<t-th>驾驶员</t-th>
					<t-th>状态</t-th>
					<t-th>间隔</t-th>
					<t-th>时长</t-th>
					<t-th></t-th>
                </t-tr>
                <t-tr v-for="item in tableList" :key="item.id">
                    <t-td>{{ item.id + 1 }}</t-td>
                    <t-td>{{ item.name }}</t-td>
                    <t-td>{{ item.age }}</t-td>
                    <t-td>{{ item.hobby }}</t-td>
					<t-td>{{ item.jhsj }}</t-td>
					<t-td>{{ item.jsy }}</t-td>
					<t-td>{{ item.status }}</t-td>
					<t-td>{{ item.jg}}</t-td>
					<t-td>{{ item.sc}}</t-td>
					<t-td align="left"><button @click="edit(item)">编辑</button></t-td>
					
                </t-tr>
            </t-table>
			</scroll-view>
        </view>
       <!-- <view class="box">
            <view class="title">自定义样式</view>
            <t-table border="2" border-color="#95b99e" :is-check="true" @change="change">
                <t-tr font-size="14" color="#95b99e" align="left">
                    <t-th align="left">姓名</t-th>
                    <t-th align="left">年龄</t-th>
                    <t-th align="left">爱好</t-th>
                    <t-th align="center">操作</t-th>
                </t-tr>
                <t-tr font-size="12" color="#5d6f61" align="right" v-for="item in tableList" :key="item.id">
                    <t-td align="left">{{ item.name }}</t-td>
                    <t-td align="left">{{ item.age }}</t-td>
                    <t-td align="left">{{ item.hobby }}</t-td>
                    <t-td align="left"><button @click="edit(item)">编辑</button></t-td>
                </t-tr>
            </t-table>
        </view> -->
    </view>
</template>

<script>
	    import tTable from '@/components/t-table/t-table.vue';
	    import tTh from '@/components/t-table/t-th.vue';
	    import tTr from '@/components/t-table/t-tr.vue';
	    import tTd from '@/components/t-table/t-td.vue';
	    export default {
	        components: {
	            tTable,
	            tTh,
	            tTr,
	            tTd
	        },
	        data() {
	            return {
	                tableList: [{
	                        id: 0,
	                        name: '001',
	                        age: '19',
	                        hobby: '16：00/16：00',
							jhsj: '16：00/16：00',
							jsy: '张三',
							status: '已发出',
							jg: '20',
							sc: '120',
	                    },
	                    {
	                        id: 1,
	                        name: '002',
	                        age: '21',
	                        hobby: '16：00/16：00',
							jhsj: '16：00/16：00',
							jsy: '张三',
							status: '已发出',
							jg: '20',
							sc: '120',
	                    },
	                    {
	                        id: 2,
	                        name: '123',
	                        age: '29',
	                        hobby: '16：00/16：00',
							jhsj: '16：00/16：00',
							jsy: '张三',
							status: '已发出',
							jg: '20',
							sc: '120',
	                    },
						
	                    {
	                        id: 3,
	                        name: '125',
	                        age: '20',
						   hobby: '16：00/16：00',
						   jhsj: '16：00/16：00',
						   jsy: '张三',
						   status: '已发出',
						   jg: '20',
						   sc: '120',
	                    }
	                ]
	            };
	        },
	        methods: {
	            change(e) {
	                console.log(e.detail);
	            },
	            edit(item) {
	                uni.showToast({
	                    title: item.name,
	                    icon: 'none'
	                });
	            }
	        }
	    };
</script>

<style>
</style>
