<template>
    <div v-for="joke in data.results" :key="joke.joke" class="jokes-div">
        <p>{{ joke.joke }}</p>

    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'DogJokes',
        data(){
            return {
                data:''
            }
        },
        mounted(){
            axios.get("https://icanhazdadjoke.com/search?term=dog", {
                headers:{
                    Accept: "application/json"
                }
            })
            .then((res) => res.data)
            .then((data) => (this.data = data))
        }
    }
</script>

<style>
.jokes-div{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height: 200px;
    width: 500px;
    display: flex;
    margin-inline: 30%;
    margin-top: 20px;
    transition: 0.3s;
    padding: 2px 16px;
}

</style>