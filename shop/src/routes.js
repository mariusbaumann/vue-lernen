import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import ProductItem from './components/product/ProductItem'
import ProductList from './components/product/ProductList'
import CartList from './components/cart/CartList'



const routes = [
    
    {
        path: '/',
        component: ProductList
    },
    {
        path: '/cart',
        component: CartList
    },
    {
        path: '/products/:id',
        component: ProductItem,
        props: true
    },
    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// Globaler Route Guard


export default router;