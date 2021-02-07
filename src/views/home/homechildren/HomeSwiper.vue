<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    },
    data() {
      return {
        isload : false
      }
    },
  },
  methods: {
    // 只需要发送一次就可以了 一张图片就可以决定轮播图的高度 没必要使用的bounce
    imageload () {
      if(!this.isload){
      this.$emit('imageSwiperLoad')
      this.isload = true
      console.log('------');
      }
    }
  },
}
</script>

<style>
</style>
