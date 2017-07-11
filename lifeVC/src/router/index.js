import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header/header.vue'
import allProducts from '../components/allProducts/allProducts.vue'
import cart from '../components/cart/cart.vue'
import lookAbout from '../components/lookAbout/lookAbout.vue'
import user from '../components/user/user.vue'

import news from '../components/news/news.vue'
import first from '../components/first/first.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: header,
      children: [
        {path: '/',component: first}
      ]

    },
    {
      path: '/header',
      component: header,
      children: [
        {path: '/new',component: news}
      ]
    },
    {
      path: '/allProducts',
      component: allProducts
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/lookAbout',
      component: lookAbout
    },
    {
      path: '/user',
      component: user
    },

  ]
})
