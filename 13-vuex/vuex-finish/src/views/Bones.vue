<template>
  <div class="about">
    <h1>Bones</h1>
    <div class="card-deck">
      <product-card v-for="product in boneProducts"
                    :id="product.id"
                    :name="product.name"
                    :description="product.description">
      </product-card>
    </div>
  </div>
</template>

<script>
  import ProductCard from "../components/ProductCard";
  import {mapGetters} from 'vuex';

  export default {
    components: {ProductCard},
    name: 'Bones',
    computed: {
      ...mapGetters([
        'boneProducts'
      ])
    }
  }
</script>