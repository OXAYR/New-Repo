<template>
    <div class="Login" >
        <h1>{{ msg }}</h1>
        <p  style=" color: red">{{ error }}</p>
    <fieldset class="Email">
      <label for="">Email<br></label>
              <input type="email"  v-model="formLogin.email">        
      </fieldset>
      <fieldset class="password">
      <label for="">Password <br></label>
              <input type="password" v-model="formLogin.password">        
      </fieldset>
      
      <button class="Login" @click="toValidate(formLogin)" >Login {{ Valid(formLogin) }}</button>
      <router-link to="/signup" >
      <button class="Register" >Register</button>
     </router-link>
    </div>
</template>
<script>
import router from '@/router';
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
        error:[],
    }
},
methods:{
  
    toValidate(obj){
      
          if(localStorage.getItem("Email") == obj.email){
           
            if(localStorage.getItem("Password") == obj.password){
            
              router.push('/todos')
            }
          }
      },
    Valid: function(obj) {
        this.error = [];
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        
      if (!emailPattern.test(obj.email)) {
        this.error.push("Invalid Email");
      } 
      if (!passwordPattern.test(obj.password)) {
          this.error.push("Invalid Password");
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
