<template>
  <div class="card" style="width: 18rem;">
    <img v-if="image" class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <router-link :to="'/product/'+id" class="btn btn-primary">Details</router-link>
      &nbsp;&nbsp;
      <button class="btn btn-success" @click="addToCart({id,quantity: 1})">Add To Cart</button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "ProductCard",
    props: {
      id: {
        type:Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
      },
      image: {
        type: String
      }
    },
    computed: {
      shortDescription() {
        return this.description.substring(0, (this.description.length < 250) ? 0 : 250);
      }
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>

</style>