import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      redirect: "/index",
      meta: {
        index: 0,
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () => import ('@/pages/index.vue'),
      meta: {
        index: 0,
        title: '首页'
      }
    },
  ],
})

export default router
