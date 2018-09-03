import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login'
import home from '../page/home'
import manage from '../page/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name:'manage',
      component: manage,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})
