<template>
  <div class="about">
    <h1>Shopping Cart</h1>
    <table class="table table-striped table-borderless">
      <thead class="thead-dark">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cart.items">
        <td>{{ getProductName(item.id) }}</td>
        <td>{{ item.quantity }}</td>
        <td>${{ getProductPrice(item.id) }}</td>
        <td><button class="btn btn-danger btn-sm" @click="removeFromCart(item)">Remove</button></td>
      </tr>
      <tr>
        <td colspan="2">&nbsp;</td>
        <td><strong>Total:</strong> ${{ cartTotal }}</td>
        <td>&nbsp;</td>
      </tr>
      </tbody>
    </table>
    <div class="float-right">

    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: 'Cart',
    computed: {
      ...mapState(['cart', 'products']),
      ...mapGetters(['cartTotal'])
    },
    methods: {
      getProductName(id) {
        return this.products.find((el) => el.id === id).name;
      },
      getProductPrice(id) {
        return this.products.find((el) => el.id === id).price;
      },
      ...mapActions(['removeFromCart'])
    }
  }
</script>