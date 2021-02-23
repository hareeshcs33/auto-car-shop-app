import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import Login from '@/components/login'
import SignUp from '@/components/signUp'
import Admin from '../pages/admin/admin.vue';
import EditItem from '../pages/admin/edit-item.vue';
import ItemList from '../pages/admin/item-list.vue';


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
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
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/admin',
          component: ItemList
        },
        {
          path: '/admin/:id',
          component: EditItem,
          props: (route) => ({
              ...route.params
          })
        },
      ]
    }
  ]
})
