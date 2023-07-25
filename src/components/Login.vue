<template>
    <div class="Login" >
        <h1>{{ msg }}</h1>
        <p  style=" color: red">{{ error }}</p>
    <fieldset class="Email">
      <label for="">Email<br></label>
              <input type="email"  v-model=formLogin.email>        
      </fieldset>
      <fieldset class="password">
      <label for="">Password <br></label>
              <input type="password" v-model=formLogin.password>        
      </fieldset>
      <router-link to="/todos">
      <button class="Login" @click="Valid(formLogin)" >Login</button>
      </router-link>
      <router-link to="/signup" >
      <button class="Register" v-show="validCredential">Register</button>
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
        validCredential: false,
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
        else if(obj.email !=='' && obj.password !==''){
            this.validCredential = true
            this.error.push("Enter values")
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
