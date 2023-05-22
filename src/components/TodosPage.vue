<script setup>
import {computed, ref, watch} from "vue";
import TodoItem from "./TodoItem.vue";
import {parseLocalStorage, saveToLocalStorage} from '../utils/storageUtils.js';

const LOCAL_KEY_TODOS = 'todos';
const LOCAL_KEY_INPUT_TEXT = 'input_text';


const inputText = ref(parseLocalStorage(LOCAL_KEY_INPUT_TEXT, ''));
const todos = ref(parseLocalStorage(LOCAL_KEY_TODOS, []));

const canAddItemToTodoList = computed(() => true);
const getTodoCount = computed(() => todos.value?.length);
const getTodoText = computed(() => inputText.value?.trim());


const onInputEnterKeyUp = () =>  {
      console.log('> App -> onInputEnterKeyUp', getTodoText.value);
      todos.value.push(getTodoText.value);
      inputText.value = '';
    };

    const onDeleteTodo = (index) => {
      console.log('> App -> onDeleteTodo:', index);
      todos.value.splice(index, 1);
    };



watch(inputText, (value) => 
  saveToLocalStorage(LOCAL_KEY_INPUT_TEXT, value));
 

 watch(todos, (value) => 
  saveToLocalStorage(LOCAL_KEY_TODOS, value));
 
</script>
<template>
    <input
		ref="domInput"
		v-model="inputText"
		@keyup.enter="canAddItemToTodoList && onInputEnterKeyUp()" 
        >
    <div>
      List: 
        <span v-if="todos.length">
          {{ getTodoCount }}
        </span>
        <span v-else>empty</span>
        <template
         v-for="(item, index) in todos"
         : key="item">
       
          <TodoItem 
          :index="index + 1"
          :text="item"
          @delete="onDeleteTodo(index)"
       />

</template>
</div>
</template>
<script> 
export default
</script>