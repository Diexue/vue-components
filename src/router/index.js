import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: resolve => require(['@/pages/marketing'], resolve)
    }
  ]
})
