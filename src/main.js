import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import "./assets/font/iconfont.css"
import toast from './components/common/toast'
import Fastclick from 'fastclick'
import lazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
// 事件总线 用于两相隔比较远的组件之间进行通信
Vue.prototype.$bus= new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端的300ms延迟
Fastclick.attach(document.body)
// 图片的懒加载
Vue.use(lazyLoad,{
  // loading : require()
  // 图片未加载出来的时候可以显示一张自定义的图片
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
