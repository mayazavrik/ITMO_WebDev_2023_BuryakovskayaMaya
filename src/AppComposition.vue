<script setup>
import {onMounted, ref} from 'vue';
import AppHeader from './components/AppHeader.vue';
import {storeToRefs} from 'pinia';
import {useUserStore} from './store/userStore.js';

const { user, hasUser } = storeToRefs(useUserStore());
const header = ref(null);

onMounted(() => {
  console.log('> App -> onMounted: header =', header);
});
</script>
<template>
  <AppHeader ref="header">
    Todo App
    <template #sub-header>
      <span v-if="hasUser">created by {{ user.name }}</span>
      <span v-else>noname</span>
    </template>
  </AppHeader>
  <div style="margin: 2rem 0;">
    <router-link to="/">
      Index
    </router-link>
    <router-link
      v-if="hasUser"
      to="/todos"
    >
      Todos
    </router-link>
  </div>
  <router-view />
</template>