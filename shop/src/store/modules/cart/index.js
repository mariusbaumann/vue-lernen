import axios from "axios";

const state = {
    cartItems: []

}

const mutations = {
    UPDATE_CART_ITEMS (state, payload){
        state.cartItems = payload;
    }
}

const actions = {
    getCartItems({commit}){
        axios.get('/api/cart')
            .then((response) => {
                commit('UPDATE_CART_ITEMS', response.data);
            });
    } 
}

const getters = {
    cartListItems: state => state.cartItems,
}

const cartModule = {
    state, 
    mutations,
    actions,
    getters
}

export default cartModule;