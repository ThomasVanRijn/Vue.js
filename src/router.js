import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gereserveerde-kamers',
      name: 'gereserveerde-kamers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "gereserveerde-kamers" */ './views/gereserveerde-kamers/gereserveerde-kamers.page.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/contact/contact.page.vue')
    }
  ]
})
