<script>
export default{
    data(){
        return{

        }
    }
}
</script>
<template>
    <ul>
        <li>
            <router-link :to="{name: 'posts'}">posts</router-link>
        </li>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="users">Users</router-link>
        </li>
    </ul>
</template>