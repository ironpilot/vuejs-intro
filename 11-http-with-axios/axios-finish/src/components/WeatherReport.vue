<template>
    <tr>
      <td>{{formattedTime}}</td>
      <td>{{temperatureInF}}&deg; F</td>
      <td>{{windDirection}}&deg; @ {{windSpeed}} kts</td>
      <td>{{Math.round(pressure*100)/100}}</td>
    </tr>
</template>

<script>
  export default {
    name: "WeatherReport",
    props: {
      rawText: {
        type: String
      },
      stationId: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      temperature: {
        type: Number,
        required: true
      },
      windSpeed: {
        type: Number,
        required: true
      },
      windDirection: {
        type: Number,
        required: true
      },
      pressure: {
        type: Number
      }
    },
    computed: {
      temperatureInF() {
        return Math.round(this.temperature * (9/5) + 32);
      },
      formattedTime() {
        const date = new Date(this.time);
        return date.toLocaleDateString() +' '+ date.toLocaleTimeString();
      }
    }
  }
</script>

<style scoped>

</style>