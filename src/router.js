import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Bills from './pages/Bills'
import Operations from './pages/Operations'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/bills',
      component: Bills
    },
    {
      path: '/operations',
      component: Operations
    }
  ]
})