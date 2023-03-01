<template>
  <div>
    <h1>Log in</h1>
    <div>
      <form @submit.stop.prevent>
        <p :style="{color: 'red', display: isCorrect? 'none' : 'inline-block'}">Username or password is incorrect</p>
        <label for="">
          <h2>Username</h2>
          <input type="text" placeholder="Username" v-model="username" />
        </label>
        <br />
        <label for="">
          <h2>Password</h2>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            v-model="password"
          />
        </label> <br>
        <button @click="handleLogin" :disabled="!username || !password">Log in</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const username = ref("");
const password = ref("");
const isCorrect = ref('true')
const dummyData = {
    username:'steph',
    password: 'password'
}
const handleLogin = () => {
    if(username.value === dummyData.username && password.value === dummyData.password){
        localStorage.setItem('token', Date.now())
        router.push('/posts')
    } else{
        localStorage.clear()
        isCorrect.value = false
    }
}
</script>

<style lang="scss" scoped></style>
