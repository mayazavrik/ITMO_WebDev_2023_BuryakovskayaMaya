import './style.css';
import { createApp } from 'vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import router from './router.js';
import AppComposition from './AppComposition.vue';

createApp(AppComposition)
    .use(createPinia().use(piniaPluginPersistedState))
    .use(router)
    .mount('#app');