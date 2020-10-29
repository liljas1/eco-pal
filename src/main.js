import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOYoM5jiObmEOT3qVepAUxqeP6r3-YeWU',
  }
})

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
