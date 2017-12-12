import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Users from '@/pages/Users'
import Edit from '@/pages/Edit'
import Add from '@/pages/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
