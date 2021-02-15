<template>
  <div class="topback" @click="topBack">
    <i class="iconfont icon-fanhuidingbu"></i>
  </div>
</template>

<script>
export default {
  name:"BackTop",
  methods: {
    topBack(){
      this.$emit('topBack')
    }
  },
}
</script>

<style scoped>
.topback{
  width: 100px;
  height: 100px;
  /* background: #000; */
  position: fixed;
  top: 84%;
  left: 84%;
}
.topback i {
  font-size: 40px;
  color: #FF4081;
}
</style>
