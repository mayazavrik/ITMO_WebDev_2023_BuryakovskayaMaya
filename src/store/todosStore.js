import {defineStore} from 'pinia';

export const useTodosStore = defineStore('todos', {
    state: () => ({ todos: [], }),
    getters: {
        getTodoByIndex: (state) => {
            return (index) => state.todos[index];
        },
        getTodosCount: (state) => state.todos.length,
    },
    actions: {
        createTodo(todoText) {
            console.log('> useTodosStore -> createTodo: ', { todoText });
            this.todos.push(todoText);
        },
        deleteTodoByIndex(index) {
            console.log('> useTodosStore -> deleteTodoByIndex: ', { index });
            this.todos.splice(index, 1);
        },
        editTodoTextByIndex(index, text) {
            console.log('> useTodosStore -> editTodoTextByIndex: ', { index, text });
            this.todos[index] = text;
        },
    },
    persist: true
});
