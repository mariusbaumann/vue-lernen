<template>
    <nav class="navbar navbar-expand-lg bg-vue">
        <div class="container">
            <router-link class="navbar-brand" to="/">Der Shop</router-link>
            
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Shop</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link"><i class="fas fa-sign-in-alt mr-2"></i> Login</a>
                </li>
                <li class="nav-item bg-vue2 ml-4 rounded"></li>
                    <router-link class="nav-link" to="/cart">
                        <i class="fas fa-cart-arrow-down"></i> {{ cartQuantity }} Artikel ({{cartTotal}}CHF)
                    </router-link>
            </ul>
        </div>


    </nav>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters([
            'cartQuantity',
            'cartTotal'
        ])
    }
}
</script>

<style scoped>

a {
    color: white;


}



a:hover {
    opacity: .3;
    transition: all .3s ease 0s ;
}



</style>