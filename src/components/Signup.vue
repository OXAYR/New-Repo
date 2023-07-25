<template>
    <div class="SignUp">
      <h2>Sign Up</h2>
      <p v-if="error.length" style="color: red">{{ error }}</p>
      <fieldset class="username">
      <label for="">Username<br></label>
              <input type="text"  v-model=form.username>        
      </fieldset>
      <fieldset class="Email">
      <label for="">Email<br></label>
              <input type="email"  v-model=form.email>        
      </fieldset>
      <fieldset class="password">
      <label for="">Password <br></label>
              <input type="password" v-model=form.password>        
      </fieldset>
      <fieldset class="pasword">
      <label for="">Confirm Password <br></label>
              <input type="password" v-model=form.confrimPassword>        
      </fieldset>
      <router-link to="/">
      <button  class="Button" >Submit {{ getForm(form) }}{{ Validate(form) }}</button>
      </router-link>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    props: {
      msg: String,
    },
    
    data() {
      return {
        form : { 
        username: '',
        email: '',
        password: '',
        confrimPassword:'',
        },
        error:[]
        
      }
    },
    computed: {
      
    },
    methods: {
  getForm: function(obj) {
    console.log(obj);
  },
  Validate: function(obj) {
        this.error = [];
        const usernamePattern = /^(?=.*[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"'])\S+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (obj.username !== "" && !usernamePattern.test(obj.username)) {
        this.error.push("Invalid Name");
        } 
        else if (obj.password !== "" && !passwordPattern.test(obj.password)) {
        this.error.push("Invalid Password");
        } 
        else if(obj.password !== obj.confrimPassword){
                    this.error.push("Password Does not match")
        }
        else if (obj.email !== "" && !emailPattern.test(obj.email)) {
        this.error.push("Invalid Email");
        }
        // } else {
        //   alert("Your credentials have been added successfully!");
        // }
    },

    
    created() {
      // Initialization code javascript load
      console.log('Created');
  
    },
    mounted(){
      // Code that runs when the component is inserted into the DOM html loaded
      console.log('mounted');
    },
    updated() {
      // Code that runs when the component's data or props change
      console.log('updated');
      
    },
    unmounted() {
      // Code that runs when the component is about to be destroyed
      console.log('unmounted');
    },
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  } */
  
  fieldset{
    margin-bottom: 2rem;
  }
  .Button{
  
    margin-top: 2rem;
  }
  </style>
  