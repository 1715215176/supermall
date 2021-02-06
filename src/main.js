import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/iconfont.css"
Vue.config.productionTip = false
// 事件总线 用于两相隔比较远的组件之间进行通信
Vue.prototype.$bus= new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
