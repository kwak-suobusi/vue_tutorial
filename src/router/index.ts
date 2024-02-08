import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import APP from "@/App.vue";
import ClassFirst from "@/views/ClassFirst.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: APP
  },
  {
    path: '/class-first',
    name: 'classFirst',
    component: ClassFirst,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
