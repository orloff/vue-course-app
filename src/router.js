import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Users from '@/pages/users.vue'
import Edit from '@/pages/edit.vue'
import Add from '@/pages/add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
