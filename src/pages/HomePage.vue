<template>
    <div>
        <h2>Home</h2>
        <p>This is the home page</p>
        <RouterLink to="/about">About</RouterLink>
        <p>{{ name }}</p>
        <p>{{ students.school }}</p>
        <p>{{ students.age }}</p>
        <button @click="changeName">Change name</button>


    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const name = ref('Stephanie Egbuonu Ezinne')
const students = reactive({
    name: 'Stephanie',
    school: 'Udemy',
    age: 20,
})
const changeName = () => {
    name.value = "Emmanuel Egbuonu"
}
    
</script>

<style lang="scss" scoped>

</style>