<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <img src="https://picsum.photos/400" alt="">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title mb4 align-middle">
                                   title
                                
                                    <button 
                                        class="fload-righ btn bg-vue2 px-4"
                                        @click="addToCart(productItem)">

                                        <i class="fas fa-cart-plus mr-3"></i> price
                                    </button>
                                    <button
                                        class="float-right btn btn-light"
                                        @click="$router.go(-1)">
                                        <i class="fas fa-arrow-left"></i> Zurück
                                    </button>
                                </h5>
                                <p class="card-text">
                                    desc
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['id'],
    computed: {
        productItems() {
            return this.$store.getters.productItems;
        }
    }
    
}
</script>

<style scoped>

</style>