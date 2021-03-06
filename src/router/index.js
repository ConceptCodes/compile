import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
  },
  // {
  //   path: '/paraphrase',
  //   name: 'Paraphrase',
  //   component: () => import(/* webpackChunkName: "paraphrase" */ '../views/Paraphrase.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
