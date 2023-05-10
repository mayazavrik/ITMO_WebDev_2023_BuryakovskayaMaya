<template>
    <h1>Enter your name</h1>
    <div>{{ firstName }}
     <span style="color: red;">
      {{ lastName }}</span>
      </div>
</template>

<script>
export default {
    name: "MyName",
    data: () => ({
        firstName: 'Maya',
        lastName: 'Zavrik'
    })
};
</script>
<style scoped>
</style><a href="tel:"></a>