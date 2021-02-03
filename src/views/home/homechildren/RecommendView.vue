<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 0 20px;
    border-bottom: 8px solid rgb(214, 212, 212);

  }
  .recommend img{
    flex: 1;
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }
</style>
