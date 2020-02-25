import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ChildA',
    component: () => import('../views/ChildA.vue')
  },
  {
    path: '/b',
    name: 'ChildB',
    component: () => import('../views/ChildB.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
