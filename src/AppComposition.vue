<script setup>
import {onMounted, ref} from 'vue';
import AppHeader from './components/AppHeader.vue';

const user = ref({ name: 'Vladimir' });
const header = ref(null);

onMounted(() => {
  console.log('> App -> onMounted: header =', header);
});
</script>
<template>
  <AppHeader ref="header">
    Todo App
    <template #sub-header>
      <span v-if="user">created by {{ user.name }}</span>
      <span v-else>noname</span>
    </template>
  </AppHeader>
  <div>
    <router-link to="/">
      Index
    </router-link>
    <router-link to="/todos">
      Todos
    </router-link>
  </div>
  <router-view />
</template>