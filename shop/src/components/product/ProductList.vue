<template>
<div>

        <h3 class="text-uppercase">Shop</h3>
        
        <div class="row">
          <div class="col-3"
            v-for="productItem in productItems"
            :key="productItem.id"
          >
            
          <productListItem :productItem="productItem" />
          </div>
        </div>
    

</div>
    
</template>

<script>
import productListItem from "./ProductListItem.vue"

export default {
    name: "ProductList",
    components: {
        productListItem,
    },
    created() {
        this.$store.dispatch('getProductItems')
    },
    computed: {
        productItems() {
            return this.$store.getters.productItems;
        }
    }
    
}
</script>

<style scoped>

</style>