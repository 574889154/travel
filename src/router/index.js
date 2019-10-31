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
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }, {
      path: '/topic',
      name: 'Topic',
      component: () => import('@/pages/topic/Topic')
    }, {
      path: '/',
      redirect: {name: 'Home'}
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
