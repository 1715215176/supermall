<template>
  <div class="check-butto">
    <i class='iconfont icon-xuanzhong' :class="{check:isChecked}"></i>
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check {
    background-color: rgb(223, 26, 118);
    border-radius: 50%;
  }
</style>
