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
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})