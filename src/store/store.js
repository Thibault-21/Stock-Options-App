import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    options: {
      alphabet: {
        price: 1460, 
        quantity: '' 
      },
      amazon: {
        price: 1860, 
        quantity: 'quantity'
      },
      alibaba: {
        price: 212,
        quantity: ''
      },
      tesla: {
        price: 580,
        quantity: ''
      },
    },
      funds: 10000
    }, 
  getters: {
    funds: state => {
      return state.funds;
    },
    // PRICE GETTERS
    alphabetPrice: state => {
      return state.options.alphabet.price;
    },
    amazonPrice: state => {
      return state.options.amazon.price;
    },
    alibabaPrice: state => {
      return state.options.alibaba.price;
    },
    teslaPrice: state => {
      return state.options.tesla.price;
    },
    // QUANTITY GETTERS 
    teslaQuantity: state => {
      return state.quantity;
    } 
  }, 
  mutations: {
    buyAlphabet: (state, sum) => {
      state.quantity = sum;
    }
    // buy: ({commit}) => {
    //   commit('buy');
    // }
  }, actions: {
    teslaQuantity({commit}, sum) {
      commit('teslaQuantity', sum);
    }
  }
})
