<template>
  <div class="about">
    <img v-if="product.image" :src="product.image">
    <h1>{{ product.name }} ({{productId}})</h1>
    <p>{{ product.description }}</p>
    <button class="btn btn-success" @click="addToCart">Add to Cart</button>
    <br><br>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Product',
    computed: {
      ...mapState([
        'products'
      ]),
      productId() {
        return parseInt(this.$route.params.id);
      },
      product() {
        return this.products.find((el) => (el.id === this.productId));
      }
    },
    methods: {
      addToCart() {
        this.$store.dispatch('addToCart', {
          id: this.productId,
          quantity: 1
        })
      }
    }
  }
</script>
