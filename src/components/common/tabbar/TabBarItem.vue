<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 需要动态的绑定 -->
    <!-- <div :class="{active:!isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
   props:{
    path:String,
    activeColor:{
      type:String,
      default: '#ff9800'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) === -1
    },
    //动态的决定tab栏的颜色
    activeStyle(){
      return this.isActive ? {} :{color:this.activeColor}
    }
  },

  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 4px;
}
/* .active{
  color:#FF9800;
} */
</style>
