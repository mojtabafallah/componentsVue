<script>
export default {
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: 'green'
    },
    methods: {
      test() {
        console.log("123");
      }
    }
  }
}
</script>
<template>
  {{ size }}
  {{ color }}
  <button :class="[size, color]" @click="test">{{ size }} . {{ color }}</button>
</template>
<style scoped>
.red {
  background-color: red;
}

.orange {
  background-color: orange;
}

.gray {
  background-color: gray;
}

.green {
  background-color: green;
}

.small {
  width: 50px;
  height: 25px;
}

.medium {
  width: 70px;
  height: 30px;
}

.large {
  width: 90px;
  height: 40px;
}
</style>