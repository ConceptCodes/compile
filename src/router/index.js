import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
  },
  {
    path: '/paraphrase',
    name: 'Paraphrase',
    component: () => import(/* webpackChunkName: "paraphase" */ '../views/Paraphrase.vue')
  },
  {
    path: '/qa',
    name: 'QA',
    component: () => import(/* webpackChunkName: "qa" */ '../views/QA.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
