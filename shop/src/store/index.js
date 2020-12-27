import Vue from 'vue'
import Vuex from 'vuex'

//Module import
import cart from "./modules/cart";
import product from "./modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    product
  }
})
