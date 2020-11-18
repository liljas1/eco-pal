import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router';
import EcoPal from './components/EcoPal.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

Vue.use(VueRouter);
Vue.use(Buefy)
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOYoM5jiObmEOT3qVepAUxqeP6r3-YeWU',
  }
})

Vue.config.productionTip = false

const routes = [
  { path: '/', component: EcoPal },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
