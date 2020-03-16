import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/List',
    name: 'list',
    component: List
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
