<template>
    <h3><slot /></h3>
    <div>
      <small>
        <slot name="sub-header" />
      </small>
    </div>
  </template>
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>