<template>
  <div>
    <b-navbar type="is-dark" fixed-top>
      <template slot="start">
        <b-navbar-item>
            <router-link to="/" style="color:white">Home</router-link>
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
      <div class="error">{{ error }}</div>
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
        if(err.code == "auth/invalid-email") {
          this.error = err.message
        }
        else{
          this.error = "There is no user record corresponding to this identifier."
        }
      }
    }
  },
  data(){
    return {
      email: "",
      password: "",
      error: "",
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

  .error{
    padding-bottom: 10px;
    color: red;
    font-size: 15px;
  }
</style>
