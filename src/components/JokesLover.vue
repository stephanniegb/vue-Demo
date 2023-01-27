<template>
    <div>
        <p>{{ data.joke }}</p>

    </div>
</template>

<script>
    export default {
        name: "JokesLover",
        data(){
            return {
                data:''
            }
        },
        mounted(){
            fetch("https://icanhazdadjoke.com", {
                headers:{
                    Accept: "application/json"
                }
            })
            .then((res) => res.json())
            .then((data) => (this.data = data))
        }
        
    }
</script>

<style>

</style>