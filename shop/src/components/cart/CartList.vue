<template>
<div>
     <h3 class="text-uppercase">Warenkorb</h3>

        <table class="table table-borderless">
          <thead>
            <tr>
              <th>
                <div class="p-2 px-3 text-uppercase">Produkt</div>
              </th>
              <th>
                <div class="py-2 text-uppercase">Preis</div>
              </th>
              <th>
                <div class="py-2 text-uppercase">Anzahl</div>
              </th>
              <th>
                <div class="py-2 px-3"></div>
              </th>
            </tr>
          </thead>
          <tbody>

            
          </tbody>
            <cartListItem v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem" />
        </table>

        <hr>
        
        <div class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold">
          Bestellübersicht
        </div>
        <div class="p-4">
          <ul class="list-unstyled mb-4">
            <li class="d-flex justify-content-between pb-3">
              <strong class="text-muted">Zwischensumme </strong><strong>390,00 €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">MwSt.</strong><strong>74,10 €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">Versandkosten</strong><strong>0,00 €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">Gesamtkosten</strong>
              <h5 class="font-weight-bold">464,10 €</h5>
            </li>
          </ul>
          <button
            class="btn bg-vue rounded-pill py-2 btn-block"
          >Zur Kasse</button>
        </div>
      </div>
    
</template>

<script>
import cartListItem from './cartListItem'; 


export default {
    name: "CartList",
    components: {
        cartListItem,
    },
    computed: {
        cartItems() {
            return this.$store.getters.cartListItems;
        }
        
    },

    created() {
        this.$store.dispatch('getCartItems');
    }
}
</script>

<style scoped>

</style>