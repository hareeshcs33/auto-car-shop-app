import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/signUp'
import LogIn from '@/components/LogIn'
import Admin from '../pages/admin/admin.vue';
import EditItem from '../pages/admin/edit-item.vue';
import ItemList from '../pages/admin/item-list.vue';
import Cart from '../pages/home-landing/cart.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      // children: [
      //   {
      //     path: '/cart',
      //     component: Cart
      //   },
      // ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/',
      name: 'signUp',
      component: Login
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
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
