<template>
  <div class="bg-white max-w-md rounded mt-4 m-auto p-4 overflow-hidden shadow-lg">
    <h1 class="font-bold text-blue-600 text-5xl mb-4 text-center">Sign Up</h1>
    <input  class="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" v-model="email" type="email" placeholder="Email">
    <input  class="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" v-model="password" type="password" placeholder="Password">
    <button  class="p-3 px-4 font-bold text-white rounder-lg bg-green-400" @click="singUp">Sing in</button>
  </div>
</template>

<script>
import firebase from 'firebase';

  export default {
    name: 'SignUp',
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      singUp(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('dashboard')
        })
        .catch((error) => {
          aleet('Oops algo sali malo' + error.message)
        })
      }
    }
  }
</script>
