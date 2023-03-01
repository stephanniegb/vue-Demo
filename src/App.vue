<template>
  <!-- <h1>Hey! Welcome to my class.</h1>
  <div>{{ msg }}</div>
  <br />
  <WelcomeMsg :changeMsg="changeMsg"/>  
  <WelcomeMsg @updateMsg="showEmit($event)" />
  <WelcomeBox
    ><h3>This text shows how slot works in vue3, cool right?</h3></WelcomeBox
  >
  <WelcomeBox>
    <template v-slot:[slotName]>
      <h3>The title</h3>
    </template>
  </WelcomeBox>
  <button @click="changeSlotName('secondSlot')">
    change slot name
  </button>
  <NameList> -->
    <!-- the slot prop can be obtained only on a slot template -->
    <!-- <template v-slot:default="slotProps"> -->
      <!-- slot props represnts an object the represnts all the props sent from the child -->
      <!-- {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>
  <NameList> -->
    <!-- this a copy of NameList component and display with the way you want with the parent -->
    <!-- <template v-slot:default="slotProps">
      {{ slotProps.firstName }}
    </template>
  </NameList> -->
  <RouterView></RouterView>
  <!-- <JokesLover/> -->
  <!-- <DogJokes/> -->
</template>
<!-- this shows how to pass props particularly how to modify the parent from the child -->
<!-- secondly it is showing how to use emit, emit allows us pass data from child to parent!  -->
<script>
// import WelcomeMsg from "./components/WelcomeMsg.vue";
// import WelcomeBox from "./components/WelcomeBox.vue";
// import NameList from "./components/NameList.vue";
// import JokesLover from "./components/JokesLover.vue";
// import DogJokes from './components/DogJokes.vue'


export default {
  name: "App",
  // components: {  JokesLover, DogJokes },
  data() {
    return {
      msg: "Hope you are doing great!.",
      slotName: "firstSlot",
    };
  },
  methods: {
    changeMsg(msgValue) {
      this.msg = msgValue;
    },
    showEmit(event) {
      console.log("an event was triggered from WelcomeMsg.", event);
      this.changeMsg(event); // so i called the fuction inside here and used the value from the child component
      // event parameter there is to gain access to the value of tge custom event from the child
    },
    changeSlotName(val) {
        this.slotName = val
    },
  },
};
</script>

<style></style>
