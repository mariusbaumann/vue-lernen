<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Navbar />
        <router-view></router-view>
      </div>
    </div>
   
    
  </div>
</template>

<script>
import Navbar from "./components/navbar";


  export default {
    name: 'App',
    components: {
      Navbar,
 
      },
      created() {
        this.$store.dispatch('getCartItems');
        this.$store.dispatch('getProductItems');
      }
  }
</script>

<style>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: white;
  }
  .bg-vue2 {
    background-color: rgb(65, 184, 131);
    color: white;
  }
  .color-vue {
    color: rgb(52, 73, 94);
  }
  .color-vue2 {
    color: rgb(65, 184, 131);
  }
  
</style>