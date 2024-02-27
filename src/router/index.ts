import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import APP from "@/App.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: APP
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
