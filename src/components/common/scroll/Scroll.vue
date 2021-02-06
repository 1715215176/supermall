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
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      },
    },
    pullUpLoad:{
      type : Boolean,
      default:false
    }
  },
  updated() {
    let self =this;
    self.scroll = new Bscroll(self.$refs.wrapper, {

      // 0，1 不监听滚动事件
      // 2 不监听惯性的滚动
      // 3 监听惯性的滚动
      // 解决返回顶部的问题
      scrollY: true,
      scrollX: false,
      startY: self.satrY, //调用上次加载后底部y轴的位置    ---**重点** starY在data里面初始值设置为0
      bounce: {
        top: true,
        bottom: true,
      },
      pullUpLoad: {
        threshold: -30,
      },
      probeType: this.probeType,
      // 上啦加载更多
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 时时监听滚动
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    // 上啦加载更多
    this.scroll.on("pullingUp", () => {
      self.satrY = self.scroll.startY;
      // self.scroll.finishPullUp();
      this.$emit('pullingUp')
    });
  },
  methods: {
    refresh(){
      console.log('------');
    this.$refs.scroll &&  this.scroll.refresh()
    }
  },
};
</script>

<style>
</style>
