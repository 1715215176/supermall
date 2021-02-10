import Vue from "vue"
import vueRouter from "vue-router"
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import ('../views/detail/Detail.vue')
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(vueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    // 动态路由
    path: '/detail/:id',
    component: Detail
  }
]
const router = new vueRouter({
  routes,
  mode: 'history'
})

export default router
