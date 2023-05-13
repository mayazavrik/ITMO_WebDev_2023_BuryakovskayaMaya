<template>
    <h1>Enter your name</h1>
    <div>{{ firstName }}
     <span style="color: red;">
      {{ lastName }}</span>
      </div>
      <small>
        <span>
            Status:
        </span>
        <span :class="{
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
        firstName: 'Maya',
        lastName: 'Zavrik'
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
.selectes {
    color: green;
}
.unselected {
    color: red;
}
</style>