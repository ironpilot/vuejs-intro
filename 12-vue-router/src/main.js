import Vue from 'vue'
import App from './App.vue'
import router from './router' // Imported router

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
    router, // Add router to main vue component
    render: h => h(App)
}).$mount('#app')
