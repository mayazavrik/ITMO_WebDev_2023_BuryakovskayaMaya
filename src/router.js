import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/IndexPage.vue'),
        },
        {
            path: '/todos',
            component: () => import('./components/TodosPage.vue')
        },
        {
            path: '/todos/:id',
            component: () => import('./components/TodoEditPage.vue')
        }
    ],
});

export default router;