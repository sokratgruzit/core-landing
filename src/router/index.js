import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tokenomics from '../views/Tokenomics.vue'
import Terms from '../views/Terms.vue'
import Technology from '../views/Technology.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { scrollToTop: true }
  },
  {
    path: '/tokenomics',
    name: 'Tokenomics',
    component: Tokenomics,
    meta: { scrollToTop: true }
  },
  {
    path: '/termsofuse',
    name: 'Termsofuse',
    component: Terms,
    meta: { scrollToTop: true }
  },
  {
    path: '/Technology',
    name: 'Technology',
    component: Technology,
    meta: { scrollToTop: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
