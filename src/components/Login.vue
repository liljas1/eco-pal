<template>
  <div>
    <b-navbar type="is-dark" fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
    </b-navbar>

    <div class="login">
      <h1>Log in to your Eco-Pal account</h1>
      <b-field label="Email">
          <b-input type="email" placeholder="email" maxlength="30" v-model="email">
          </b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" placeholder="password" v-model="password" password-reveal>
          </b-input>
      </b-field>
      <div class="submitButton">
        <b-button @click="pressed" type="is-primary is-light" native-type="submit">Log In</b-button>
      </div>
      <div class="text">
        <p>Dont have an account? <router-link to="/signup">Sign up to Eco-Pal</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    async pressed(){
      try{
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.$router.replace({name: "home"})
      }catch(err){
        console.log(err)
      }
    }
  },
  data(){
    return {
      email: "",
      password: "",
    }
  }
}
</script>

<style scoped>
  h1{
    font-size: 35px;
    font-weight: 500;
    padding: 50px 0px 20px;
  }
  .text{
    width: 100%;
    display: flex;
    padding: 25px 0px;
  }
  .login{
    margin: 0 auto;
    max-width: 500px; 
  }
  .submitButton{
    float: left;
  }
</style>
