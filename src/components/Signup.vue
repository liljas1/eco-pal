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

    <div class="signup">
      <h1>Create your Eco-Pal account</h1>
      <b-field label="Username">
          <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>
      <b-field label="Email">
          <b-input type="email" value="john@" maxlength="30">
          </b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" value="password123" password-reveal>
          </b-input>
      </b-field>
      <div class="checkbox">
        <div class="field">
            <b-checkbox>I agree to the Eco-Pal Tearms of Service and Privacy Policy</b-checkbox>
        </div>
      </div>
      <div class="submitButton">
        <b-button type="is-primary is-light">Get Started</b-button>
      </div>
      <div class="text">
        <p>Already have an account? <router-link to="/helloworld">Log in to Eco-Pal</router-link></p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
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
    padding: 50px 0px;
  }
  .signup{
    margin: 0 auto;
    max-width: 500px; 
  }
  .checkbox{
    width: 100%;
    float: left;
    font-size: 13px;
    padding-top: 5px;
  }
  .submitButton{
    float: left;
    padding: 15px 0px;
  }
</style>
