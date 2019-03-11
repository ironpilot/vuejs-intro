<template>
  <footer class="container">
    <div class="row">
      <div class="col-12 col-md">
        Puppy Shop
        <small class=" mb-3 text-muted">&copy; 2017-{{copyEndYear}}</small>
      </div>
      <div class="col-6 col-md">
        <ul class="list-unstyled text-small">
          <li><router-link to="/" class="text-muted" href="#">Home</router-link></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <ul class="list-unstyled text-small">
          <li><router-link to="/treats" class="text-muted" href="#">Treats</router-link></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <ul class="list-unstyled text-small">
          <li><router-link to="/bones" class="text-muted" href="#">Bones</router-link></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <ul class="list-unstyled text-small">
          <li><router-link to="/cart" class="text-muted" href="#">Cart</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "NavFooter",
    computed: {
      copyEndYear() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style scoped>
  .container {
    border-top: 3px solid #cccccc;
    margin-top: 40px;
  }
</style>