<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-baseinfo :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad='imageLoad'/>
      <detail-param-info :paramInfo="itemParams "/>
      <detail-comment-info :commemtInfo="commentInfo"/>
      <goods-list :goods="getCommends"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, Goods, Shop ,getRecommend } from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseinfo from "./childComps/DetailBaseinfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import GoodsList from '../../components/context/goods/GoodsList.vue';
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
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo : {},
      itemParams: {},
      commentInfo : {},
      getCommends:[]
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.id;
    // 请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
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
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.itemParams = data.itemParams
      // 获取评论
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    });
    getRecommend().then(res =>{
      this.getCommends = res.data.list
    })
  },

  methods: {
    // 图片加载完刷新一次
    imageLoad(){
      this.$refs.scroll.refresh()
    }
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
.content{
  height: calc(100% - 44px);
}
.detail-nav-bar{
  position: relative;
  z-index: 9;
  background-color: white;
}
</style>
