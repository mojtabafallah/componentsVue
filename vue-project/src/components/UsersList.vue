<script>
export default {
  // props:['items'],
  data() {
    return {
      items: [
        {
          id: 1,
          name: "mojtaba",
          family: "fallah"
        },
        {
          id: 2,
          name: "ali",
          family: "alavi"
        },
        {
          id: 3,
          name: "reza",
          family: "rezaee"
        }, {
          id: 4,
          name: "morteza",
          family: "ghasabi"
        }, {
          id: 1,
          name: "akbar",
          family: "akbari"
        },
      ]

    }
  }
}
</script>
<template>
  <ul>
    <li v-for="user in items">
      <router-link :to="{ name: 'showUser', params: {id: user.id} }">{{ user.name }}</router-link>
    </li>

  </ul>
</template>