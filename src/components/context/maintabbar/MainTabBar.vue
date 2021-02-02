<template>
    <tab-bar>
      <tab-bar-item path='/home'>
        <i slot="item-icon" class="iconfont icon-shouye" ></i>
        <i slot="item-icon-active" class="iconfont icon-shouye1" style="color:#FF9800"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i slot="item-icon" class="iconfont icon-leimupinleifenleileibie2"></i>
        <i slot="item-icon-active" class="iconfont icon-fenlei" style="color:#FF9800"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <i slot="item-icon" class="iconfont icon-gouwuche"></i>
        <i slot="item-icon-active" class="iconfont icon-gouwuche" style="color:#FF9800"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i slot="item-icon" class="iconfont icon-weibiaoti2fuzhi12"></i>
        <i slot="item-icon-active" class="iconfont icon-wode" style="color:#FF9800"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>
