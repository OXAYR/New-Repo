<template>
    <div class="Login">
        <h1>{{ msg }}</h1>
        <p v-if="error.length" style=" color: red">{{ error }}</p>
    <fieldset class="Email">
      <label for="">Email<br></label>
              <input type="email"  v-model=email>        
      </fieldset>
      <fieldset class="password">
      <label for="">Password <br></label>
              <input type="password" v-model=password>        
      </fieldset>
      <router-link to="/home">
      <button class="Login">Login {{ Valid(formLogin) }}</button>
      </router-link>
      <router-link to="/signup">
      <button class="Register">Register</button>
     </router-link>
    </div>
</template>
<script>
    export default {
  name: 'Login',
  props: {
      msg: String,
    },
  data() {
    return {
        formLogin :{
        email: "",
        password: ''    
        },
        error:[]
    }
},
methods:{
    Valid: function(obj) {
        this.error = [];
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (obj.password !== "" && !passwordPattern.test(obj.password)) {
            this.error.push("Invalid Password");
        } 
        else if (obj.email !== "" && !emailPattern.test(obj.email)) {
            this.error.push("Invalid Email");
        }
    
    }
    }
    }

</script>

<style scoped>
fieldset{
  margin-bottom: 2rem;
}
.Button{

  margin-top: 2rem;
}
</style>
