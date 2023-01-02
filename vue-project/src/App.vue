<script>
import PostsList from './components/PostsList.vue';



export default{
    data() {
        return {
          posts : [
            {
              id:"1",
              title: "posts1",
              des:"description",
              user:{
                name:"ali",
                family : "alavi"
              }
            },
            {
              id:"1",
              title: "posts1",
              des:"description",
              user:{
                name:"ali",
                family : "alavi"
              }
            },
            {
              id:"1",
              title: "posts1",
              des:"description",
              user:{
                name:"ali",
                family : "alavi"
              }
            }
          ]
        };
    },
    components: { PostsList }
}
</script>
<template>
<posts-list :list="posts"></posts-list>
</template>