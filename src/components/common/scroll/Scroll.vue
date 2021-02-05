<template>
  <div class="wrapper1" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  updated() {

    this.scroll = new Bscroll(this.$refs.wrapper, {
      // 0，1 不监听滚动事件
      // 2 不监听惯性的滚动
      // 3 监听惯性的滚动
      probeType: 3,
      // 上啦加载更多
      pullUpLoad: true,
      click : true 
    });
    // 时时监听滚动
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    // 上啦加载更多
    this.scroll.on("pullingUp", () => {
      console.log("上啦加载更多");
    });
  },
};
</script>

<style>
</style>
