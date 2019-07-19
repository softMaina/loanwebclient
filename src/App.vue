<template>
  <div id="app">

      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to='/'>Home <span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="/members">Members</router-link>
            <router-link class="nav-item nav-link" to="/loans">Loan Applications</router-link>
            <!-- <router-link class="nav-item nav-link disabled" href="#">Disabled</router-link> -->
          </div>
        </div>
      </nav>

    <router-view/>

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
</style>
