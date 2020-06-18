import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/users',
      component: () => import('@/pages/users.vue')
    },
    {
      path: '/edit/:id',
      component: () => import('@/pages/edit.vue')
    },
    {
      path: '/add',
      component: () => import('@/pages/add.vue')
    },
    {
      path: '/question6',
      component: () => import('@/components/question6/question6.vue')
    }
  ]
})
