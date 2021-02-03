<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>

    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
    <p>我是来添数的</p>
  </div>
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper";
import RecommendView from "./homechildren/RecommendView";
import FeatureView from "./homechildren/FeatureView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/context//tabControl/TabControl";

import { getHomeMultidata, getHomeDate } from "../../network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
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
    };
  },
  created() {
    this.mgetHomeMultidata();
    this.mgetHomeDate('pop');
    this.mgetHomeDate('new');
    this.mgetHomeDate('sell');
  },
  methods: {
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
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
};
</script>

<style>
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
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
