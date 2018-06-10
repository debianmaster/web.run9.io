import React from 'react'
import { section } from 'reactbulma'
import Keycloak from "keycloak-js";


const kc = Keycloak('/keycloak.json');
const token = localStorage.getItem('kc_token');
const refreshToken = localStorage.getItem('kc_refreshToken');
kc.init().then(function(authenticated) {
  alert(authenticated ? 'authenticated' : 'not authenticated');
  if (authenticated) {
    updateLocalStorage();
  }
  else{
    kc.login();
  }

}).catch(function(ex) {
   console.log(ex);
});


const updateLocalStorage = () => {
  //localStorage.setItem('kc_token', kc.token);
  //localStorage.setItem('kc_refreshToken', kc.refreshToken);
}; 
updateLocalStorage();

class Intro extends React.Component {

  state = {
    isActive: false,
  }


  handleLogin = (e) => {
   
    kc.login();

  };

 

  render() {
    return (
<section class="hero is-fullheight is-default is-bold is-slanted" id="home">
  <div class="navbar-wrapper navbar-sticky">
  <div class="hero-head">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-start">
          <a class="navbar-item" href="#home">
            <img class="brand" src="img/logos/fresh.svg" alt="Main navbar logo"/>
          </a>
          <a id="panel-trigger" href="#left-panel" class="navbar-item navbar-inner hamburger-btn" href="javascript:void(0);">
            <span class="menu-toggle">
              <span class="icon-box-toggle">
                <span class="rotate">
                  <i class="icon-line-top"></i>
                  <i class="icon-line-center"></i>
                  <i class="icon-line-bottom"></i>
                </span>
              </span>
            </span>
          </a>
        </div>
        <span class="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="navbar-end navbar-menu">
          <a class="navbar-item is-tab navbar-inner" href="/">
            Features
          </a>
          <a class="navbar-item is-tab navbar-inner" href="#plans">
            Pricing
          </a>
          <div class="navbar-item is-drop">
            <a class="navbar-item is-tab navbar-inner-xs">
              About
            </a>
            <span class="drop-caret"><i class="fa fa-angle-down"></i></span>
            <div class="dropContain">
              <div class="dropOut">
                <div class="triangle"></div>
                <ul><li>Careers</li><li>Contact US</li></ul>
              </div>
            </div>
          </div>
          <a class="navbar-item is-tab navbar-inner" onClick={this.handleLogin}>
            Login
          </a>          
          <span class="navbar-item">
            <a class="button cta is-large rounded secondary-btn raised">
              Sign up
            </a>
          </span>
        </div>
      </nav>
    </div>
  </div>
</div>


  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-vcentered" >
        <div class="column is-4 is-offset-1 has-text-left">
          <h1 class="big-title">
            Cloud Native Development
          </h1><h2 class="subtitle is-5">
            Develop cloud native applications with Docker, Kuberntes and istio.
          </h2><br/><p class="has-text-left">
            <a class="button cta is-large rounded primary-btn raised">
              Get started free
            </a>
          </p></div>
        <div class="column is-5 is-offset-2">
          <figure class="image is-4by3">
            <img src="img/illustrations/worker.svg" alt="Description"/>
          </figure>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-foot mb-20">
    <div class="container">
      <div class="tabs is-centered">
        <ul>
          <li>
            <a>
              <img class="partner-logo" src="img/logos/clients/systek.svg"/>
            </a>
          </li>
          <li>
            <a>
              <img class="partner-logo" src="img/logos/clients/tribe.svg"/>
            </a>
          </li></ul>
      </div>
    </div>
  </div>
</section>
    )
  }
}

export default Intro