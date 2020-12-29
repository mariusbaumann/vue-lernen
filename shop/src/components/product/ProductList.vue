<template>
<div>
 <div class="container">
            <div class="row">
                <div class="col-12">
                   
                
                <div class="row">
                <div class="col-3"
                    v-for="productItem in productItems"
                    :key="productItem.id"
                >
                    
                <productListItem :productItem="productItem" />
                </div>
                </div>
            </div>
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
    
    computed: {
        productItems() {
            return this.$store.getters.productItems;
        }
    }
    
}
</script>

<style scoped>

</style>