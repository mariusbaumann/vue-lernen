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
            <cartListItem v-for="cartItem in cartListItems" :key="cartItem.id" :cartItem="cartItem" />
        </table>

        <hr>
        
        <div class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold">
          Bestellübersicht
        </div>
        <div class="p-4">
          <ul class="list-unstyled mb-4">
            <li class="d-flex justify-content-between pb-3">
              <strong class="text-muted">Zwischensumme </strong><strong>{{ cartTotalWithoutTaxes }} €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">MwSt.</strong><strong>{{ cartTaxes }} €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">Versandkosten</strong><strong>{{ cartShipping }} €</strong>
            </li>
            <li class="d-flex justify-content-between py-3">
              <strong class="text-muted">Gesamtkosten</strong>
              <h5 class="font-weight-bold">{{cartTotalWithShipping }} €</h5>
            </li>
          </ul>
          <button
            class="btn bg-vue rounded-pill py-2 btn-block"
          >Zur Kasse</button>
        </div>
      </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import cartListItem from './cartListItem'; 



export default {
    name: "CartList",
    components: {
        cartListItem,
    },
    computed: {
        ...mapGetters([
            'cartListItems',
            'cartTotal'
        ]),
        cartTotalWithoutTaxes() {
            return parseFloat(this.cartTotal - this.cartTaxes).toFixed(2);
        },
        cartTaxes() {
            return (this.cartTotal * 0.19).toFixed(2);
        },
        cartShipping() {
            return 9.99;
        },
        cartTotalWithShipping() {
            return (parseFloat(this.cartTotal) + parseFloat(this.cartShipping)).toFixed(2);
        }
    },

    created() {
        this.$store.dispatch('getCartItems');
    }
}
</script>

<style scoped>

</style>