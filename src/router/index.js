import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserInfo from '@/components/PersonInfo'
import Main from '@/components/loginView'
import frontView from "../components/front"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userinfo/:info',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
  ]
})
