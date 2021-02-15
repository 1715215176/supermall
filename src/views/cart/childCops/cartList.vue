<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-item-list v-for="(item,index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartItemList from './CartItemList.vue'
export default {
  components: { Scroll, CartItemList },
  name : 'cartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
