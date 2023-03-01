<template>
    <h1>This is the post page!</h1>
    <div v-for="post in posts" :key="post.id">
        {{post.title}}
        <button @click="$router.push(`/posts/${post.id}`)">View</button>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
const posts = ref([])
const fetchposts = async () =>{
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'
    const respose = await fetch(endpoint)
    const data = await respose.json()
    posts.value = data
}
 onMounted(() => {
    fetchposts()
 })

</script>

<style lang="scss" scoped>

</style>