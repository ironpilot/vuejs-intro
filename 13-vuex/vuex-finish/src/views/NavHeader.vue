<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <router-link to="/" active-class="active" class="navbar-brand" href="#">Puppy Shop</router-link>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" exact active-class="active" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/treats" active-class="active" class="nav-link">Treats</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bones" active-class="active" class="nav-link">Bones</router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/cart" tag="button" active-class="active" class="nav-link btn btn-secondary">Cart <span class="badge badge-light">{{ cart.count }}</span></router-link>
        </li>
      </ul>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'nav-header',
    computed: {
      ...mapState(['cart'])
    }
  }
</script>