<template>
  <div id="app">

      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to='/'>Home</router-link>
            <router-link class="nav-item nav-link" to="/members">Members</router-link>
            <router-link class="nav-item nav-link" to="/staff">Staff</router-link>
            <!-- <router-link class="nav-item nav-link" to="/loans">Loan Applications</router-link> -->
            <router-link class="nav-item nav-link" to="/land">Land</router-link>
            <!-- <router-link class="nav-item nav-link disabled" href="#">Disabled</router-link> -->
          </div>
        </div>
      </nav>
    <transition name="custom" enter-active-class="animated flipInX" leave-active-class="animated flipOutY">
       <router-view/>
    </transition>
   

  </div>
</template>

<script>
// eslint-disable-next-line
import $ from 'jquery'
// eslint-disable-next-line
var bootstrap = require('bootstrap');
export default {
  
  name: 'app',
}
</script>

<style>
@import './assets/bootstrap.css';
@import './assets/animate.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar{
  background-color: #fff;
  color:#fff;
  margin-bottom: 50px;
}
.nav-item{
  color:#fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
