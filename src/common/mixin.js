import {debounce} from './utils'
export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener : null
    }
  },
  // 混入解决组件之间有共同的代码
  mounted() {
    // 监听图片的加载
    const refresh = debounce(this.$refs.scroll.refresh, 1000);
    this.itemImgListener = () => refresh()
    this.$bus.$on("itemimageload", this.itemImgListener);
  },
}
