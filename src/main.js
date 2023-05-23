import './style.css';
import { createApp } from 'vue';
import {createPinia} from 'pinia';

import router from './router.js';
import AppComposition from './AppComposition.vue';

createApp(AppComposition)
    .use(createPinia())
    .use(router)
    .mount('#app');