<script>
export default {
    props: ["post"],
    data() {
        return {}
    }
}
</script>
<template>
    <div>
    <p>id:{{ post.id }}</p>
    <p>title:{{ post.title }}</p>
    <p>des:{{ post.des }}</p>
    <p>name:{{ post.user.name }}</p>
    <p>family:{{ post.user.family }}</p>
    </div>
</template>