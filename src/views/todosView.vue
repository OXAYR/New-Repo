<template>
    <div class="Todo">
      <Todos />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
 import Todos from '../components/Todos.vue'
  
  export default {
    name: 'TodoView',
    components: {
      Todos
    }
  }
  </script>