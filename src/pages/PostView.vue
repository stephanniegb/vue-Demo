<template>
    <div>
        <h1>{{ $route.params }}</h1>
        <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRoute() // this is the same as this.$route from vue 2  but it is  for setup script
const post = ref({})
const fetchPost = async () => {
    const {id} = route.params
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(endpoint)
    const responseData = await response.json()
    post.value = responseData

}
    
onMounted(() => {
    fetchPost()
})

</script>

<style scoped>
h1{
    color: #1e5631;
}
</style>