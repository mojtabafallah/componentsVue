<script>
export default {
    emits: ['show'],
    props:['title'],
    methods: {
        showLoading() {
            this.textLoading = "Loading"
            this.$emit('show', true)
        }
    }
}
</script>
<template>
    <button @click="showLoading">{{ title }}</button>
</template>