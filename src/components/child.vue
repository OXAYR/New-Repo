<template>
  <div>
    <button type="button" @click="toExpand()"
     class="Button"> \/ </button>
    <button type="button" @click="toLess()" 
    class="Button"> /\ </button>
  </div>
  <div>
    <ul v-if="expand">
      <li class="todo" v-for="todo in todos" :key="todo" style="list-style:none" 
      @click.right="toRemove" @click.left="toAdd()" :class="{removed: isRemove}">
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
        expand: false,
        isRemove: false
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
      },
      toRemove(){
        this.isRemove = true
      },
      toAdd(){
        this.isRemove = false
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
  
  .removed{
    text-decoration: line-through;
  }
  .Button{
    margin-top: 2rem; 
    margin-right: 1rem;
    background-color:#2caadc;
    color: #ffffff;
    border-radius: 1.8rem;
    padding: 0.2rem 0.4rem;
    overflow: hidden;  /* Hide any content that overflows the max-height */
    transition: max-height 0.3s ease, height 0.3s ease;
    cursor: pointer;
  }
  .Button:hover{
    background-color: #a7e3fb;;
    color: #00394f;
  }
  </style>