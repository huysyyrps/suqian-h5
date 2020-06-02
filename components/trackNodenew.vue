<template>
  <div class="total-wrap" :style="{marginTop:'16rpx'}">
    <div class="node-container">
		
		<div class="node-container-left" :style="{width:'126rpx'}">
			
		  <div class="node-container-right" v-for="(item, index) in nodeData.car" :key="index" >
		    <view class="uni-flex uni-row" >
				<text class="vertical-text">{{item.busCode}}</text>
				<image  :src="cardUrl" class="card"/>
			</view>
		  </div>
				
		</div>
		
		
      <div class="node-container-left">
        <div class="tag-container">
          <image  :src="nodeIconUrl" class="static"/>
          <!-- <div v-else class="node-tag-container">
            <div class="node-tag"></div>
          </div> -->
        </div>
		
        <div class="line-container" >
          <div  v-if="nodeData.islast" :style="{height: '0rpx'}"></div>
		  <div class="line" v-else  :style="{height: '120rpx'}"></div>
        </div>
		
      </div>
      <div class="node-container-right">
        <div  class="node-title" >{{nodeData.stationName}}</div>
        
      </div>
	  
	  
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isNewest: {
      type: Boolean,
      default: false
    },
    isFirst: {
      type: Boolean,
      default: false
    },
    isMainNode: {
      type: Boolean,
      default: false
    },
	// isstart: {
	//   type: Boolean,
	//   default: false
	// },
    nodeData: {
      type: Object,
      default () {
        return {
          status: '',
          statusName: '',
          createTime: '2019-01-01 00:00:00',
          acceptStation: 'xxxxxx',
		  isstart:false,
		  
		  lastcou: '',
		  car:[]
        }
      }
    }
  },
  computed: {
    nodeIconUrl () {
      // if (this.nodeData.status === 'WATTING_PAY') { // 待付款
      //   return this.isNewest ? '/static/images/ic-order-commit.png' : '/static/images/ic-order-commit-G.png'
      // } else if (this.nodeData.status === 'PAYED') { // 待发货
      //   return this.isNewest ? '/static/images/ic-paied.png' : '/static/images/ic-paied-G.png'
      // } else if (this.nodeData.status === 'WATTING_DELIVER') { // 已揽件
      //   return this.isNewest ? '/static/images/ic-pacakaging.png' : '/static/images/ic-pacakaging-G.png'
      // } else if (this.nodeData.status === 'DELIVERING') { // 运输中
      //   return this.isNewest ? '/static/images/ic-sending.png' : '/static/images/ic-sending-G.png'
      // } else if (this.nodeData.status === 'COMPLETE') { // 已完成
      //   return this.isNewest ? '/static/images/ic-delivering.png' : '/static/images/ic-delivering-G.png'
      // }
	  if(this.nodeData.stationOrder==1){
		 return '/static/images/zhongdian.png' 
	  }else if (this.nodeData.islast==true){
		  return '/static/images/qidian.png'
	  }else{
		  return '/static/images/zhandian.png'
	  }
	  
	  // return this.nodeData.isstart ? '/static/images/qidian.png' : '/static/images/zhandian.png'
    },
	cardUrl() {
	   return '/static/images/car2new.png'
    },
    acceptStationFixed () {
      if (!this.nodeData.acceptStation) return ''
      return this.nodeData.acceptStation.replace(/(\d{3})\d{4}(\d{4})/, '')
    }
  }
}
</script>
<style lang="scss" scoped>
	.static{
	  
	  width: 54rpx;
	  height: 54rpx;
	  line-height: 34rpx;
	  color: #999;
	  font-size: 24rpx;
			
	}
.total-wrap {
  margin-top: 22rpx;
  width: 100%;
  .node-container {
    width: 100%;
    height: auto;
    display: flex;
    &-left {
      width: 54rpx;
      height: auto;
      .tag-container {
        width: 54rpx;
        height: 54rpx;
        img {
          width: 54rpx;
          height: 54rpx;
        }
        .node-tag-container {
          width: 54rpx;
          height: 54rpx;
          display: flex;
		 
          justify-content: center;
          align-items: center;
          .node-tag {
            width: 18rpx;
            height: 18rpx;
            background-color: #dcdcdc;
            border-radius: 50%;
          }
        }
      }
      .line-container {
        box-sizing: border-box;
        width: 54rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        .line {
          width: 10rpx;
          background-color: #dcdcdc;
        }
      }
    }
    &-right {
      flex: 1;
      box-sizing: border-box;
      padding: 0 10rpx 0 24rpx;
      .node-title {
        width: 100%;
        height: 40rpx;
        line-height: 44rpx;
        color: #222;
        font-size: 28rpx;
        font-family: 'PingFangSC-Medium';
      }
      .node-desc {
        margin-top: 16rpx;
        width: 100%;
        min-height: 30rpx;
        line-height: 30rpx;
        color: #222;
        font-size: 24rpx;
        font-family: 'PingFangSC-Regular';
        word-wrap: break-word;
        word-break: normal;
      }
      .node-phone {
        margin-top: 8rpx;
        width: 100%;
        height: 26rpx;
        line-height: 26rpx;
        color: #FE4E2C;
        font-size: 26rpx;
        font-family: 'Avenir-Medium';
      }
      .node-time {
        margin-top: 12rpx;
        width: 100%;
        height: 34rpx;
        line-height: 34rpx;
        color: #999;
        font-size: 24rpx;
        font-family: 'Avenir-Book';
      }
	  .card {
	    margin-top: 12rpx;
	    width: 64rpx;
	    height: 44rpx;
	    line-height: 34rpx;
	    color: #999;
	    font-size: 24rpx;
		
	  }
	  .vertical-text{
	     -webkit-writing-mode: vertical-rl;
	     writing-mode: vertical-rl;
		 font-size: 20rpx;
	               }
	  
    }
  }
}
</style>