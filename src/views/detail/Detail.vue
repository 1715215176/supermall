<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-baseinfo :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="itemParams " ref="params" />
      <detail-comment-info :commemtInfo="commentInfo" ref="comment" />
      <goods-list :goods="getCommends" ref="recommend" />
    </scroll>
    <detailbutton-bar @addCart="addCart" />
    <!-- <toast :massage="massage" :isShow="isShow" /> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, Goods, Shop, getRecommend } from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseinfo from "./childComps/DetailBaseinfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/context/goods/GoodsList.vue";
import { itemImgListenerMixin } from "../../common/mixin";
import { debounce } from "../../common/utils";
import DetailbuttonBar from "./childComps/DetailbuttonBar.vue";
import { mapActions } from "vuex";
// import Toast from "../../components/common/toast/Toast.vue";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailbuttonBar,
    // Toast,
  },
  mixins: [itemImgListenerMixin],
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      getCommends: [],
      scrollTop: [],
      getThemeTopY: null,
      currentIndex: null,
      // massage: "",
      // isShow: false,
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.id;
    // 请求详情数据
    getDetail(this.iid).then((res) => {
      // 获取顶部的轮播图
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      // 获取展示的信息
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.itemParams = data.itemParams;
      // 获取评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 这里错误是因为$el都不存在
      // this.scrollTop.push(0)
      //   this.scrollTop.push(this.$refs.params.$el.offsetTop)
      //   this.scrollTop.push(this.$refs.comment.$el.offsetTop)
      //   this.scrollTop.push(this.$refs.recommend.$el.offsetTop)
      // 虽然此时的$el已经存在了 但是图片仍未加载完毕 此时的高度也就没有加载完成
      // OFFSET值不对都是因为图片没有加载完毕
      // this.$nextTick(()=>{
      //   this.scrollTop = []
      //   this.scrollTop.push(0)
      //   this.scrollTop.push(this.$refs.params.$el.offsetTop)
      //   this.scrollTop.push(this.$refs.comment.$el.offsetTop)
      //   this.scrollTop.push(this.$refs.recommend.$el.offsetTop)
      // })
      this.getThemeTopY = debounce(() => {
        this.scrollTop = [];
        this.scrollTop.push(0);
        this.scrollTop.push(this.$refs.params.$el.offsetTop - 44);
        this.scrollTop.push(this.$refs.comment.$el.offsetTop - 44);
        this.scrollTop.push(this.$refs.recommend.$el.offsetTop - 44);
        this.scrollTop.push(Number.MAX_VALUE);
      }, 100);
    });
    getRecommend().then((res) => {
      this.getCommends = res.data.list;
    });
  },
  mounted() {},
  methods: {
    // 图片加载完刷新一次
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    // title的点击
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollTop[index], 100);
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.scrollTop.length;
      for (let i = 0; i < length - 1; i++) {
        // if(this.currentIndex !== i &&(i < length - 1 && positionY >= this.scrollTop[i] && positionY < this.scrollTop[i+1] )
        //  ||( i === length-1 && positionY>= this.scrollTop[i])){
        //    this.currentIndex = i
        //    this.$refs.nav.currentIndex= this.currentIndex
        // }
        // 简单方法hack
        if (
          positionY >= this.scrollTop[i] &&
          positionY < this.scrollTop[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      // 获取展示的消息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 向vuex mutation中发送数据
      // this.$store.commit('addCart',product)
      // 向mutation中的action发送数据
      this.$store.dispatch("addCart", product).then(
        // (res) => {
        //   this.isShow = true;
        //   this.massage = res;
        //   setTimeout(() => {
        //     this.isShow = false;
        //   }, 500);
        // },
        // (err) => {
        //   this.isShow = true;
        //   this.massage = err;
        //   setTimeout(() => {
        //     this.isShow = false;
        //   }, 500);
        // }
        res =>{
          this.$toast.show(res,2000)
        },err =>{
          this.$toast.show(err,2000)
        }
      );
      // 使用mapAction
      // this.addCart(product).then(res => {console.log(res)},err =>{console.log(err);})
    },
  },
  destroyed() {
    this.$bus.$off("itemimageload", this.itemImgListener);
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #d7ddd7;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: white;
}
</style>
