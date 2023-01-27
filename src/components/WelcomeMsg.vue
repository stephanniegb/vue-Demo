<template>
    <!-- <button @click="changeMsg('Come Again!', 'Say hello!')">change message</button> -->
    <button @click="$emit('UpdateMsg', 'I changed this message with an emit')">Change message</button>
</template>

<script>
export default{
    props: {
        changeMsg: Function,
    }, //you can use the obj style if you want to specify what exactly you are expecting as props
    // or you could use array style too
    name: 'WelcomeMsg',
    
}

</script>
<style>
 div{
    text-align: center;
 }
</style>
