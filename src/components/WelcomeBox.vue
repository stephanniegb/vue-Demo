<template>
    <div>
        <h1>The welcome box</h1>
        <p>The welcome box welcomes you to the vue3 side of things!</p>
        <p><slot/></p>
        <p><slot>You can give slot a default placeholder, when you do not pass a value
        as a child in the render component, this content shows up  </slot></p>
        <div>
            <slot name="firstSlot">
                this sha uses a function to dynamicaly alter the slot name
            </slot>
            <slot name="secondSlot">
                This is the connent of the second slot!
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WelcomeBox',
        
    }
</script>

<style>

</style>