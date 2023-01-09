<script>
import Post from './Post.vue';

export default {
    props: ["list"],
    data() {
        return {
            items:[
                {
                    "id": 1,
                    "title": "test1",
                    "des" : "description",
                    "user": {
                        "name" : "ali",
                        "family": "alavi"
                    }
                }
            ]
        };
    },
    components: { Post }
}
</script>
<template>
    <h2>Test</h2>
 <div class="container" v-for="item in items">
     <post :post="item"></post>
    <hr>
 </div>

</template>