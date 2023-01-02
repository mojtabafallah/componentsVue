<script>
import Post from './Post.vue';

export default {
    props: ["list"],
    data() {
        return {};
    },
    components: { Post }
}
</script>
<template>
 <div class="container" v-for="item in list">
     <post :post="item"></post>
    <hr>
 </div>

</template>