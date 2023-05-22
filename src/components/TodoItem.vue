<script setup>
defineProps( {
    index: {
            type: Number,
            default: 0
        },
        text: {
            type: String,
            default: '-'
        } 
});
defineEmits(['delete']);
 </script>
<template>
<div>
    {{ index }}) {{ item }}
    <button @click="$emit('delete')">
      x
    </button>
</div>
</template>

