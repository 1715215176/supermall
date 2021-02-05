<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
    :class="{active:counter===index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      counter:0
    }
  },
  methods: {
    itemClick(index){
      this.counter=index;
      this.$emit('tabClick',index)
    }
  },
}
</script>

<style>
  .tab-control {
    display: flex;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color:#a6cbdd;
    color: white;
    font-size: 15px;
  }
  .tab-control-item {
    flex:1;
  }
  .active {
    color: #FF4081;
  }
  .active span {
    border-bottom: 3px solid #FF4081;
    padding: 3px;
  }
</style>
