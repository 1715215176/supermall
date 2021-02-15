<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // massage: {
    //   type: String,
    //   default: "",
    // },
    // isShow: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='添加成功~',duration=200){
      this.isShow = true;
      this.message = message
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    }
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(46, 43, 43);
  transform: translate(-50%, -50%);
  padding: 3px 8px;
  z-index: 999;
}
</style>
