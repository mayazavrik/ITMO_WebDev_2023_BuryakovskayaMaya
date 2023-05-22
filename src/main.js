import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import './style.css';

import AppComposition from './AppComposition.vue';

import TodosPage from './components/TodosPage.vue';
import IndexPage from './components/IndexPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: 
    [
        {
            path: '/',
            component: IndexPage
        },
        {
            path: '/todos',
            component: TodosPage
        }
    ],
});

createApp(AppComposition)
.use(router)
.mount('#app');

