<template>
    <div class="Login">
        <Login msg="Login to continue"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Login from '../components/Login.vue'
  
  export default {
    name: 'LoginView',
    components: {
      Login
    }
  }
  </script>