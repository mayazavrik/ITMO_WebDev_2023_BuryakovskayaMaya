import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({ user: { name: 'Vladimir' }, }),
    getters: {
        hasUser: (state) => !!state.user.name,
        // getTodosCount: (state) => state.todos.length,
    },
    actions: {
        // createTodo(todoText) {
        //     console.log('> useTodosStore -> createTodo: ', { todoText });
        //     this.todos.push(todoText);
        // },
    },
    persist: true
});
