<script setup>
import MyName from './components/MyName.vue';
</script>

<template>
  <h3>Todo List</h3>
  <input 
  v-model="inputText" 
  @keyup.enter="canAddItemToTodoList && onInputEnterKeyUp()">
  
  <div>
    List:
    <div 
    v-for="(item, index) in todos"
    :key="item"
    >{{index + 1}}) {{ item }}
  </div>
  </div>
  
</template>

<script>
export default {
  data: () => ({
    inputText: '',
    todos: []
  }),
  computed: {
    canAddItemToTodoList() {
      return this.todoText?.length  > 0;
    }
    todoText() {
      return this.inputText?.trim();
    }
  },
  methods: {
    onInputEnterKeyUp() {
      console.log('> App -> onInputEnterKeyUp', this.todoText);
      this.todos.push(this.todoText);
      this.inputText = '';
    }
    
  }
};
</script>

<style scoped>


</style>
