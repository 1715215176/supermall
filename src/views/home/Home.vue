<template>
<div id="home">
  <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"
export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>
