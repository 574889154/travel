import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/',
      redirect: {name: 'Home'}
    }
  ]
})
