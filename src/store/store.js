import Vue from 'vue';
import Vuex from 'vuex';
import { colors } from '../pages/admin/colors';
import { items } from '../pages/admin/items';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myName: "Hareesh",
    colors: colors,
    items: items,
    counter: 0,
    cartItems: [],
  },
  getters: {
    filterItems(state) {
      console.log(state.items);
    },
    getCartCount(state) {
      // let count = 0
      // state.items.forEach(item => {
      //   if (item.cart == true) {
      //     count++;
      //   }
      //   console.log(count)
      // })
      return state.cartItems.length;
    },
    getCartItems(state, payload) {
      // state.items.filter(item => {
      //   if (item.cart == true) {
      //     state.cartItems.push(item);
      //   }
      // });
      return state.cartItems;
    }
  },
  mutations: {
    increaseCount(state) {
      return state.counter++;
    },
    editDone(state, payload) {
      console.log('payload', payload);
      console.log('state.items', state.items);
      state.items = state.items.filter(item => item.id !== payload.id);
      console.log('filtered items', state.items);
      state.items.push(payload);
      console.log('edit item added to state item', state.items);
    },
    addToCart(state, payload) {
      state.cartItems.push(payload);
      // state.getCartItems(payload);
      console.log(state.getCartCount);
    },
    removeFromCart(state, payload) {
      // state.cartItems.filter(item => item.id == payload.id)
    }
  },
  actions: {

  }
})