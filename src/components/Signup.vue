<template>
  <div>
    <b-navbar type="is-dark" fixed-top>
      <template slot="start">
        <b-navbar-item>
            <router-link to="/" style="color:white">Home</router-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="signup">
      <h1>Create your Eco-Pal account</h1>
      <b-field label="Name">
          <b-input placeholder="name" maxlength="30"></b-input>
      </b-field>
      <b-field label="Email">
          <b-input type="email" v-model="email" maxlength="30" placeholder="email">
          </b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" v-model="password" placeholder="password" password-reveal>
          </b-input>
      </b-field>
      <div class="error">{{ error }}</div>
      <div class="checkbox" id="checkbox">
        <div class="field">
            <b-checkbox v-model="agree" :value="true">I agree to the Eco-Pal Tearms of Service and Privacy Policy</b-checkbox>
        </div>
      </div>
      <div class="submitButton">
        <b-button @click="pressed" type="is-primary is-light">Get Started</b-button>
      </div>
      <div class="text">
        <p>Already have an account? <router-link to="/login">Log in to Eco-Pal</router-link></p>
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
      if(this.agree){
        try{
          const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          console.log(user)
          this.$router.replace({name: "home"})
        }catch(err){
          this.error = err.message
          // console.log(err)
        }
      }
      else{
        document.getElementById("checkbox").style.color = "red";
        alert("Please check the box below")
      }
    }
  },
  data() {
    return{
      email: "",
      password: "",
      error: "",
      agree: false,
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

  .error{
    padding-bottom: 10px;
    color: red;
    font-size: 15px;
  }
</style>
