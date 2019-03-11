<template>
  <div id="app" class="container">
    <h1>Axios Example</h1>
    <!-- 1. Create a search box that will allow a user to enter a weather station to query. -->
    <!-- 2. Create a GET call to http://aviationweather.autopilotstudios.com/metar/recent/[weatherStationId] to get the weather info. -->
    <!--    Some example weather stations identifiers: KTWF, KBOI, KDEN, KSEA -->
    <!-- 3. Display as much of the weather information to the user as you like from the resulting response. -->
    <!-- 4. EXTRA: Use a custom event to remove entries in the list. -->
    <!-- 5. EXTRA: Make it possible to refresh the weather for a specific station. -->
    <form class="form-inline">
      <div class="form-group">
        <label for="stationId">Enter a weather station identifier to search:</label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="stationId" class="form-control" placeholder="KTWF" v-model="stationIdSearch">
      </div>
      <div class="form-group">
        &nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary" @click.prevent="searchForWeather">Search Weather</button>
      </div>
    </form>
    <station v-for="station in stations"
             :key="station"
             :station-id="station"
              @remove-station="removeStation($event)">
    </station>
  </div>
</template>

<script>
import Station from './components/Station.vue';

export default {
  name: 'app',
  components: {
    Station
  },
  data() {
    return {
      stationIdSearch: '',
      stations: []
    };
  },
  methods: {
    searchForWeather() {
      //Check that the station doesn't already exist in the array
      const station = this.stations.find((el) => el === this.stationIdSearch);

      if(!station) {
        this.stations.push(this.stationIdSearch);
      }
    },
    removeStation(stationId) {
      const stationIndex = this.stations.findIndex((el) => el === stationId);

      if(stationIndex !== -1) {
        this.stations.splice(stationIndex, 1);
      }
    }
  }
}
</script>

<style>

</style>
