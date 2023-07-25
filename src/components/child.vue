<template>
  <div>
    <button type="button" @click="toExpand()" style="margin-top: 2rem; margin-right: 1rem; background-color:#e07a5f; color: #f4f1de;"> \/ </button>
    <button type="button" @click="toLess()" style="margin-top: 2rem; margin-right: 1rem; background-color: #e07a5f; color: #f4f1de;"> /\ </button>
  </div>
  <div>
    <ul v-if="expand">
      <li v-for="todo in todos" :key="todo" style="list-style:none">
        {{ todo }}
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Todos',
    props: {
      todos: [],
    },
    
    data() {
      return {
        expand: false
      }
    },
    computed: {
      reversedMessage() {
      return this.message.split('').reverse().join('');
    }
    },
    methods: {
      toExpand(){
        this.expand = true
      },
      toLess(){
        this.expand = false
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
  

  .Button{
  
    margin-top: 2rem;
    margin-right: 1rem;
  }
  </style>