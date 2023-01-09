<script>
import ButtonItem from './components/ButtonItem.vue';
import ChildComponent from './components/ChildComponent.vue';
import LoadingHandeler from './components/LoadingHandeler.vue';
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
          ],
          parentCount:0,
          show:false,
          titleLoading: 'Show loading'
        };
    },
    components: { PostsList, ButtonItem, ChildComponent, LoadingHandeler },
    methods:{
      onAdd(value){
        this.parentCount += value;
      },
      showLoading(value){        
        this.show = value
        this.titleLoading = "Loading.."
        setTimeout(()=>{
          this.show =false;
          this.titleLoading =  "show loading";
        },3000)        
      }
    }
}
</script>
<template>
<posts-list :list="posts"></posts-list>
<ButtonItem :color="'red'" :size="'large'"></ButtonItem>
<ButtonItem color="green" size="small"></ButtonItem>
<ButtonItem></ButtonItem>
<hr />
<p>parent count: {{ parentCount }}</p>
<ChildComponent @add="onAdd"></ChildComponent>
<hr />
<p v-if="this.show">loading</p>
<LoadingHandeler @show="showLoading" :title="titleLoading"></LoadingHandeler>
</template>