<template>
    <div>
      <h2 class="float-left">{{stationId}}</h2>
      <div class="float-right">
        <button class="btn btn-success btn-sm" @click="getStationWeather">Refresh</button>&nbsp;&nbsp;
        <button class="btn btn-danger btn-sm" @click="removeStation">Remove</button>
      </div>
      <br class="clear-fix">
      <br>
      <table v-if="requestComplete && !error" class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th>Time</th>
          <th>Temperature</th>
          <th>Wind Dir/Speed</th>
          <th>Pressure</th>
        </tr>
        </thead>
        <tbody>
          <weather-report
            v-for="report in weatherReports"
            :station-id="report.station_id"
            :time="report.observation_time"
            :temperature="parseInt(report.temp_c)"
            :wind-speed="parseInt(report.wind_speed_kt)"
            :wind-direction="parseInt(report.wind_dir_degrees)"
            :pressure="parseFloat(report.altim_in_hg)">
          </weather-report>
        </tbody>
      </table>
      <div v-else>
        <p class="bg-light" v-if="!requestComplete">Loading...</p>
        <p class="bg-warning" v-else>
          <span v-if="!error">No results returned or an error has occurred.</span>
          <span v-else>{{error}}</span>
        </p>
      </div>
      <hr>
    </div>
</template>

<script>
  import axios from 'axios';
  import WeatherReport from "./WeatherReport";

  export default {
    name: "Station",
    components: {WeatherReport},
    props: {
      stationId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        requestComplete: false,
        error: null,
        weatherReports: []
      }
    },
    methods: {
      getStationWeather() {
        this.requestComplete = false;
        this.error = null;
        this.weatherReports = [];
        axios.get('http://aviationweather.autopilotstudios.com/metar/recent/' + this.stationId)
          .then((response)=>{
            if(response.data.METAR) {
              this.weatherReports.push(...response.data.METAR);   //ES6 spread operator (...) expands the array.
            } else {
              this.error = 'No results found.';
            }
            this.requestComplete = true;
          })
          .catch((e) => {
            this.error = e;
          });
      },
      removeStation() {
        this.$emit('remove-station', this.stationId);
      }
    },
    created() {
      this.getStationWeather();
    }
  }
</script>

<style scoped>

</style>