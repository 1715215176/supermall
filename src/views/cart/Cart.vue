<template>
 <div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottm-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childCops/cartList.vue'
import CartBottmBar from './childCops/CartBottmBar.vue'
export default {
  components: { NavBar, CartList, CartBottmBar },
  name:'Cart',
  computed: {
    // ...mapGetters(['cartLnegth'])
    ...mapGetters({length:'cartLength'})
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav{
    background: var(--color-tint);
    color:white
  }
</style>
