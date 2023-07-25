<template>
  <div>
    <h1 class="Todos">
      Todos
    </h1>
    <h4>
        <label for="">Enter your Todos </label>   
        <input type="text"  v-model="input"> 
        <button type="submit" @click="getTodo()" style="background-color: rgb(36, 178, 255); color: rgb(0, 46, 71); background-color: rgb(36, 178, 255); ;"> Add </button>       
    <child :todos=todos></child>
    </h4>

  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'Todos',
  components: {
      child
  },
  
  data() {
    return {
      input:'',
      todos :[]
      }
  },
  computed: {
    reversedMessage() {
    return this.message.split('').reverse().join('');
  }
  },
  methods: {
      getTodo(){
          this.todos.push(this.input)
      }

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
