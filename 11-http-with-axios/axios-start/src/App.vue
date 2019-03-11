<template>
  <div id="app" class="container">
    <h1>Axios Example</h1>
    <!-- 1. Create a search box that will allow a user to enter a weather station to query. -->
    <!-- 2. Create a GET call to http://aviationweather.autopilotstudios.com/metar/recent/[weatherStationId] to get the weather info. -->
    <!--    Some example weather stations identifiers: KTWF, KBOI, KDEN, KSEA -->
    <!-- 3. Display as much of the weather information to the user as you like from the resulting response. -->
    <!-- 4. EXTRA: Use a custom event to remove entries in the list. -->
    <!-- 5. EXTRA: Make it possible to refresh the weather for a specific station. -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
