import axios from 'axios';
//import { get } from 'core-js/fn/dict';

const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }

}

const actions = {
    getProductItems({commit}) {
        axios.get('api/products')
            .then((Response) => {
                commit('UPDATE_PRODUCT_ITEMS', Response.data);
            })
    }
    
}

const getters = {
    productItems: state => state.productItems,
    productItemById: state => id => state.productItems.find(productItem => productItem.id === id ),
    
}

const productModule = {
    state, 
    mutations,
    actions,
    getters
}

export default productModule;