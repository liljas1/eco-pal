<template class="html">
  <div class="body">
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
        <div class="header">
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

        <div class="footer">
          <div class="footerContent">
            <div class="footer_section about">
              <h1>Eco-Pal</h1>
              <br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce non velit vel turpis hendrerit congue.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              </p>
              <div class="contact">
                <span>Phone: 123-456-789</span>
                <span>Email: liljas@tvz.hr</span>
              </div>
            </div>

            <div class="footer_section links">
              <h1>Quick links</h1>
              <br>
              <ul>
                <a href="#"><li>Events</li></a>
                <a href="#"><li>Team</li></a>
                <a href="#"><li>Terms and conditions</li></a>
                <a href="#"><li>Privacy Policy</li></a>
              </ul>
            </div>

            <div class="footer_section contact">
              <h1>Contact us</h1>
              <br>
              <b-input type="email" maxlength="30" placeholder="Enter your email..."></b-input>
              <b-input maxlength="200" type="textarea" placeholder="Enter your message here..."></b-input>
              <b-button type="is-primary is-light" native-type="submit">Submit</b-button>
            </div>
          </div>

          <div class="footerBottom">
            &copy; sample-webpage.com | Designed by Lovro
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
    /*background-color: mediumseagreen;*/
  }
  .header{
    margin: 0 auto;
    max-width: 50%;
  }

  .header div{
    width: 50%;
  }
  
  .header div h1{
    text-align: left;
    font-size: 35px;
    font-weight: bold;
  }

  .main{
    margin: 0 auto;
    max-width: 50%;
    min-height: 100%;
  }

  .section{
    margin: 0 auto;
    margin-bottom: 50px;
    /*max-width: 80%;*/
    display: flex;
    padding: 25px;
    background-color: rgba(245, 245, 245, 0.945);
    border-radius: 25px;
    border: 2px solid rgba(245, 245, 245, 0.945);
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

  .footer{
    position: relative;
    height: 450px;
    background-color: slategray;
    color: rgba(245, 245, 245, 0.945);
  }

  .footerContent{
    height: 350px;
    display: flex;
  }

  .footer_section{
    flex: 1;
    padding: 25px;
    text-align: left;
  }

  .footer_section h1{
    font-size: 20px;
    font-weight: bold;
  }

  .footer_section span{
    display: block;
    padding-top: 10px;
  }

  .links{
    border: 1px solid white;
    border-style: none solid;
  }

  .links ul a{
    display: block;
    padding-bottom: 15px;
    color:  rgba(245, 245, 245, 0.945);
    transition: all .3s;
  }
  .links ul a:hover{
    color:  white;
    margin-left: 15px;
    transition: all .3s;
  }

  .footerBottom{
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-top: 20px;
    background-color: darkslategray;
    color: rgba(245, 245, 245, 0.774);
  }

  @media screen and (max-width: 1400px) {
      .header{
        max-width: 85%;
      }

      .main{
        max-width: 85%;
      }
      
      .header div{
        width: 100%;
      }

      .section{
        display: block;
      }
    }

  @media screen and (max-width: 1000px) {
      .header{
        max-width: 100%;
      }
      
      .main{
        max-width: 100%;
      }

      .section{
        padding: 0px;
      }

      .footer{
        height: 900px;
      }

      .footerContent{
        display: block;
      }

      .footer_section{
        padding: 5px 0;
      }

      .links{
        border: 1px solid white;
        border-style: solid none;
      }
    }
</style>