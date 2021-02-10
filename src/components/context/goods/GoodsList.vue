<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods"  :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components:
  { GoodsListItem },
  name:"GoodListItem",
  props:{
    goods : {
      type : Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 4px;
  }
</style>
