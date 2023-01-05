<script>
export default{
    emits:['add'],
    methods:{
        adder(){
            this.countChild ++;
            this.$emit('add',3)
            console.log("tetssss");
        }
    },
    data(){
      return {
        countChild: 0
      }
    } 
}
</script>
<template>
    <p>count child:{{ countChild }}</p>
    <button @click="adder">click</button>
</template>