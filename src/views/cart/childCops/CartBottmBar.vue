<template>
  <div class="bar">
    <!-- 左边全选的部分 -->
    <div class="choose">
      <check-button :is-checked="checkLength" @click.native="checkClick"/>
      <span class="choose-all">全选</span>
    </div>
    <!-- 中间价格部分 -->
    <div class="price">
      合计: <span class="allPrice">{{allPrice}}</span>元
    </div>
    <!-- 右边去计算部分 -->
    <div class="calculate">
      提交订单({{allCount}})
    </div>
  </div>
</template>
<script>
import CheckButton from "../../../components/context/checkButton/CheckButton.vue";
import {mapGetters} from 'vuex'
export default {
  components: { CheckButton },
  computed:{
    ...mapGetters(['cartList']),
    // 计算总价钱
    allPrice(){
      return this.$store.state.cartList.filter(item=> {
        return item.checked
      }).reduce((preValue , item ) =>{
        // reducec汇总函数
        return preValue + item.price *item.count
      },0).toFixed(2)
    },
    // 购买的总数
    allCount(){
      return this.$store.state.cartList.filter( item =>{
         return item.checked}).length
    },
    // 是否全选
    checkLength(){
      // return !(this.cartList.filter(item =>{return !item.checked}).length)
      // find方法 返回值是使返回值为ture的子项 并且find返回的值也是true 一但为true就停止辨遍历
      // 如果没有找到返回undefined 取发就是true
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item =>{return !item.checked})
    }
  },
  methods: {
    checkClick(){
      if(this.checkLength){
        this.cartList.forEach(element => {
          element.checked = false
        });
      }else{
        this.cartList.forEach(element => {
          element.checked = true
        })
      }
    }
  },
};
</script>

<style scoped>
  .bar {
    height: 40px;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    line-height: 40px;
  }
  .bar-btn {
    display: inline-block;
    position: absolute;
    top: 10px;
    color: #fff;
    line-height: 20px;
  }
  .choose-all {
    position: absolute;
    left: 30px;
    bottom: 0;
  }
  .choose {
    width: 80px;
    padding: 0 8px;
  }
  .price {
   flex: 1;
  }
  .allPrice {
    color: var(--color-tint);
    margin: 0 3px;
  }
  .calculate {
    width: 100px;
    text-align: center;
    background-image: linear-gradient(90deg,#ff6034,#ee0a24);
    color: #fff;
  }
</style>
