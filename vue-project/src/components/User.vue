<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    created() {
        this.userId = this.$route.params.id
    },
    'name': 'User'
}
</script>
<template>   
{{ userId }}
<router-link :to="{name: 'userProfile'}">show profile</router-link>
<router-view></router-view>
</template>
<style scoped>

.active{
    color: red;
}

</style>