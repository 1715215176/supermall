<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" :probeType="3"
     @scroll="scrollcontent"
     ref="scroll"
     :pullUpLoad='true'
     @pullingUp='MoreLoad'>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top v-show="BackTopShow"/>
  </div>
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper";
import RecommendView from "./homechildren/RecommendView";
import FeatureView from "./homechildren/FeatureView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/context//tabControl/TabControl";
import GoodsList from "../../components/context/goods/GoodsList"
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/common/backtop/BackTop.vue';

import { getHomeMultidata, getHomeDate } from "../../network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell':{ page: 0, list: [] },
      },
      currentType:'pop',
      BackTopShow : false
    };
  },
  created() {
    this.mgetHomeMultidata();
    this.mgetHomeDate('pop');
    this.mgetHomeDate('new');
    this.mgetHomeDate('sell');
  },
  mounted() {
    // 监听图片的加载
    const refresh = this.debounce(this.$refs.scroll.refresh,300)
    this.$bus.$on('itemimageload',()=>{
      refresh()
    })
  },
  methods: {
    /**
   * 网络请求相关的数据
   */
    mgetHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    mgetHomeDate(type){
      let page = this.goods[type].page + 1
      getHomeDate(type, page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    /**
     * 操作有关的methods
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2 :
          this.currentType='sell'
          break;
      }
    },
    scrollcontent(position){
      this.BackTopShow = (-position.y) > 1000
    },
    MoreLoad(){
      this.mgetHomeDate(this.currentType)
    },
    debounce(func , delay){
      let timer =  null;
      return function (...args) {
        if(timer) clearInterval(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    }


  },
  computed:{
      showGoods () {
        return this.goods[this.currentType].list
      }
    }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home {
  height: 100vh;
  position: relative;
}
.tab-control {
  position: sticky;
  top: 43px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
