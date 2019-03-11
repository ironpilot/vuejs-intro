<template>
  <div id="app" class="container-fluid">
    <nav-header></nav-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavHeader from '@/views/NavHeader.vue'
  import NavFooter from '@/views/NavFooter.vue'

  export default {
    name: 'home',
    components: {
      NavHeader,
      NavFooter
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
