<template>
  <div class="detail-bottom-tab">
    <div class="left">
      <div class="left-tab">
        <i class="iconfont icon-kefu"></i>
        <div>客服</div>
      </div>
      <div class="left-tab">
        <i class="iconfont icon-4"></i>
        <div>店铺</div>
      </div>
      <div class="left-tab">
        <i class="iconfont icon-shoucang"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <div @click="addToCart">
        <span class="btn1" >加入购物车</span>
      </div>
      <div>
        <span class="btn2">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomTab',
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
}
</script>

<style scoped>
  .detail-bottom-tab {
    height: 49px;
    /* line-height: 49px; */
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 102;
    font-size: 12px;
    text-align: center;
    border-top: 1px solid #999;
  }
  .left {
    display: flex;
    width: 40%;
  }
  .left-tab{
    flex: 1;
    padding: 9px 0;
  }
  .right {
    width: 60%;
    display: flex;
  }
  .right > div {
    flex: 1;
    position: relative;
  }
  .btn1,.btn2 {
    position: absolute;
    top: 4px;
    left: 0px;
    width: 100%;
    height: 40px;
    background-color: pink;
    line-height: 40px;
    color: #ffffff;
  }
  .btn1 {
    border-radius: 20px 0 0 20px;   /*其值为高度的一半*/
    background: linear-gradient(90deg,#ffd01e,#ff8917)
  }
  .btn2 {
    border-radius: 0 20px 20px 0;
    background: linear-gradient(90deg,#ff6034,#ee0a24)
  }
</style>
