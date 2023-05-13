<script setup>
import MyName from './components/MyName.vue';
</script>

<template>
  <select 
    name="status" 
    @change= "onSelectChange">
    <option
    v-if="!status"
    value="unselected"
    selected
    >
      Unselected
    </option>
  <option 
    v-for="item in ['Ready', 'Start', 'Stop']"
    :key ="item"
    :value="item"
    :selected="item ==="
   >
   {{ item }}

    
  </option>
  
</select>

  <MyName 
  :status="status"
  @reset="onStatusReset"
  />
  
</template>

<script>
export default {
  data: () => ({
    status: 'Loading'
  }),
  mathods: {
    onSelectChange(event) {
      console.log('> App -> onSelectChange:', event.target.value);
      this.status = event.target.value;

    },
    onStatusReset() {
      console.log('>App -> onStatusReset');
      this.status = null;
    }
  }
};
</script>

<style scoped>


</style>
