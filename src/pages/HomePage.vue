<template>
    <div>
        <h2>Home</h2>
        <p>This is the home page</p>
        <RouterLink to="/about">About</RouterLink> <br>
        <RouterLink to="/posts">Posts</RouterLink>
        <p>{{ name }}</p>
        <p>{{ students.school }}</p>
        <p>{{ students.age }}</p>
        <button @click="changeName">Change name</button>
    </div>
    <div>
        <h2>Div showing composables</h2>
        <h3>{{ count }}</h3>
        <button @click="increament">increament</button>
    </div>

    <div v-if="num === 0" >
        <h2>the number is zero</h2>
    </div>
    <div  v-else-if="num < 0">
        <h2>the number is less than zero</h2>
    </div>
    <!-- the v else has be be immediayely after the v if or else it won't work -->
    <div v-else>
        <h2>the number is greater than zero</h2>
    </div>
    <div>
        <h2>Using v-for on array</h2>
        <h3 v-for="(item , index) in random" :key="item">{{ index }} {{ item }}</h3>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useCounter from "../composables/useCounter";

const name = ref('Stephanie Egbuonu Ezinne')
const students = reactive({
    name: 'Stephanie',
    school: 'Udemy',
    age: 20,
})
const random  = ref(['cat', 'monkey', 'toe', 'happy', 'cup', 'cap', 'mirror', 'internship'])
const changeName = () => {
    name.value = "Emmanuel Egbuonu"
}
const num = ref(-5)
const { count, increament } = useCounter(200, 4)
    
</script>

<style>
div{
    border: 1px solid   ;
    padding: 10px;
    margin: 10px;
}

</style>