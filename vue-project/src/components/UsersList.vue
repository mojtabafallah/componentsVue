<script>
export default{
    props:['items'],
    data(){
        return{

        }
    }
}
</script>
<template>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>