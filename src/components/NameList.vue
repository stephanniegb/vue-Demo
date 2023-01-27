<template>
    <h3 v-for="name in names" :key="name.firstName"><slot :firstName="name.firstName" :lastName="name.lastName"></slot></h3>
    <!-- let us use slot to render this, so that the parent componet controlls what happens in the child -->
    <!-- you can send this data from the child to parent using slot prop -->
</template>

<script>
    export default {
        name: 'NameList',
        data(){
            return{
                names: [
                    {
                        firstName: 'Stephanie',
                        lastName: 'Egbuonu'
                    },
                    {
                        firstName: 'Udo',
                        lastName: 'Egbuonu'
                    },
                    {
                        firstName: 'Chidiebere',
                        lastName: 'Egbuonu'
                    },
                    {
                        firstName: 'Ekene',
                        lastName: 'Egbuonu'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>