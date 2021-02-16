import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import Login from '@/components/login'
import SignUp from '@/components/signUp'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    }
  ]
})
