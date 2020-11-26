import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router';
import { rtdbPlugin } from 'vuefire';
import './firebase.js';
import firebase from "firebase/app";
import "firebase/auth";
import Main from './components/Main.vue';
import EcoPal from './components/EcoPal.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';


Vue.use(VueRouter);
Vue.use(rtdbPlugin);
Vue.use(Buefy)
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOYoM5jiObmEOT3qVepAUxqeP6r3-YeWU',
  }
})

Vue.config.productionTip = false

const routes = [
  { path: '/', name:"main", component: Main},
  { path: '/home', name:"home", meta: {requiresAuth: true}, component: EcoPal },
  { path: '/login', name:"login", component: Login },
  { path: '/signup', name:"signup", component: Signup },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");
  }else{
    next();
  }
});

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(!app){
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})

