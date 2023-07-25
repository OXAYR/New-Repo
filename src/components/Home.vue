<template>
  <div>
    <h1 class="home">
      {{ msg }}
    </h1>
    <router-link to="/"> Back to the login page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  
  // data() {
  //   return {
  //   msg
  // },
  computed: {
    reversedMessage() {
    return this.message.split('').reverse().join('');
  }
  },
  methods: {
    // showMessage() {
    //   console.log(this.message);
    // },
    // addToArr(item) {
    //   this.arr1.push(item);
    // },
    // clearObj() {
    //   this.obj = {};
    // },
    // // Add more methods as needed

    getForm(obj){
      console.log(obj);
    }

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
