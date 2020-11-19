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

          <template slot="start">
                <b-navbar-item href=#>
                    Home
                </b-navbar-item>
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="#">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
            
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button tag="router-link" to="/signup" class="is-primary" type="is-link">Sign up</b-button>
                        <b-button tag="router-link" to="/login" class="is-light" type="is-link">Login</b-button>
                    </div>
                </b-navbar-item>
            </template>
      </b-navbar>

      <section>
        <div class="aboveMain">
          <div>
            <h1>Help making your streets cleaner and eco frendly with Eco-Pal</h1>
            <div class="buttons" style="padding: 30px 0 100px">
              <b-button tag="router-link" to="/login" type="is-link">Get Started</b-button>
            </div>  
          </div>
        </div>

        <div class="main">
          <div class="section">
            <div class="sectionText">
              <h2>This is the first div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
            <div class="sectionText">
              <h2>This is the second div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
            <div class="sectionText">
              <h2>This is the third div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
          </div>

          <div class="section">
            <div class="sectionText">
              <h2>This is the first div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
            <div class="sectionText">
              <h2>This is the second div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
            <div class="sectionText">
              <h2>This is the third div</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  section{
    max-width: 100%;
    padding-top: 100px;
    background-color: blueviolet;
  }
  .aboveMain{
    margin: 0 auto;
    width: 50%;
  }

  .aboveMain div{
    width: 50%;
  }
  
  .aboveMain div h1{
    text-align: left;
    font-size: 35px;
    font-weight: bold;
  }

  .main{
    margin: 0 auto;
    max-width: 50%;
    background-color: aquamarine;
  }

  .section{
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 80%;
    display: flex;
    padding: 25px;
    background-color: bisque;
    border-radius: 25px;
    border: 2px solid bisque;
  }

  .sectionText{
    flex: 1;
    padding: 20px;
    text-align: left;
  }

  .sectionText h2{
    font-size: 20px;
    font-weight: bold;
  }
</style>