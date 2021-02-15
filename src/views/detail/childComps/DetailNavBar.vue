<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index"
        :class="{active:currentIndex===index}"
        @click="itemClick(index)" >
        {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name : "DetailNavBar",
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex : 0
    }
  },
  methods: {
    itemClick(index){
       this.currentIndex = index
       this.$emit('titleClick',index)
    },
    back(){
      this.$router.back()
    }
  },


}
</script>

<style scoped>
  .nav-bar {
    background-color: rgb(245, 233, 233);
  }
  .title {
    display: flex;
    justify-content: space-around;
  }
  .active {
    color: var(--color-high-text);
  }
</style>
