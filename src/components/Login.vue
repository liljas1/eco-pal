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
          <b-input type="email" value="john@" maxlength="30" v-model="email">
          </b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" value="password123" v-model="password" password-reveal>
          </b-input>
      </b-field>
      <div class="submitButton">
        <b-button @click="login" type="is-primary is-light" native-type="submit">Log In</b-button>
      </div>
      <div class="text">
        <p>Dont have an account? <router-link to="/signup">Sign up to Eco-Pal</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login: function(){
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);
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
