<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageload">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect"><i class="iconfont icon-xianxingtubiaozhizuomoban-30"></i>{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageload(){
      this.$bus.$emit('itemimageload')
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsitem.iid)
      // query的方法
      // this.$router.push({
      //   path:'',
      //   query:{

      //   }
      // })
    }
  },
  computed:{
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 47%;
  }
  .goods-item img {
    width:100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
</style>
