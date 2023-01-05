<script>
import ButtonItem from './components/ButtonItem.vue';
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
              id:"2",
              title: "posts2",
              des:"description",
              user:{
                name:"reza",
                family : "rezaee"
              }
            },
            {
              id:"3",
              title: "posts3",
              des:"description",
              user:{
                name:"hasan",
                family : "hasani"
              }
            }
          ]
        };
    },
    components: { PostsList, ButtonItem }
}
</script>
<template>
<posts-list :list="posts"></posts-list>
<ButtonItem :color="'red'" :size="'large'"></ButtonItem>
<ButtonItem></ButtonItem>
</template>