<script>
export default {
  data() {
    return {

    }
  },
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    color:{
      type: String,
      default: 'green'
    }
  }
}
</script>
<template>
  {{ size }}
  {{ color }}
  <button :class="[size, color]">{{ size }}</button>
</template>
<style>
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