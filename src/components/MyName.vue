<template>
    <h1>Enter you name</h1>
    <div>
      {{ firstName }}
      <span style="color: red;">
        {{ lastName }}
      </span>
    </div>
    <small>
      <span
        class="flex flex-col"
        :class="{
          'selected': !!status,
          'unselected': !status
        }"
      >
        Status:
      </span>
      <span>{{ status }}</span>
      <div>
        <button
          :style="{
            visibility: status ? 'visible' : 'hidden'
          }"
          @click="onResetClick"
        >Reset</button>
      </div>
    </small>
  </template>
  
  <script>
  export default {
    name: 'MyName',
    props: { 
      status: {
        type: String,
        default: '-'
      },
    },
    emits: ['reset'],
    data: () => ({
      firstName: 'Vladimir',
      lastName: 'Minkin'
    }),
    methods: {
      onResetClick() {
        console.log('> MyName -> onResetClick');
        this.$emit('reset');
      }
    }
  };
  </script>
  <style scoped>
  .selected {
    color: green;
  }
  .unselected {
    color: red;
  }
  </style>