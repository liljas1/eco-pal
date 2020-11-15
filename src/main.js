import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import EcoPal from './components/EcoPal.vue';
import Home from './components/Home.vue';

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOYoM5jiObmEOT3qVepAUxqeP6r3-YeWU',
  }
})

Vue.use(VueRouter);
Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: EcoPal },
  { path: '/helloworld', component: HelloWorld },
  { path: '/home', component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
