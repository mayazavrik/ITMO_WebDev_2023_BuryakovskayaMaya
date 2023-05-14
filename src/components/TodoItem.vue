<template>
<div>
    {{ index }}) {{ item }}
    <button @click="$emit('delete')">
      x
    </button>
</div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        index: {
            type: Number,
            default: 0
        },
        text: {
            type: String,
            default: '-'
        }
    },
    emits: ['delete'],
    unmonted() {
        console.log('> TodoItem -> ')
    }
    
};
</script>

<style scoped>
</style>