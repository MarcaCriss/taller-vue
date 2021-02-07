<template>
  <div>
    <h1 class="font-bold text-blue-600 text-5xl mb-4 text-center">This is a private</h1>
    <button class="p-3 px-4 font-bold text-white rounder-lg bg-green-400" @click="logout">Logout</button>
  </div>
</template>

<script>

import firebase from 'firebase'

  export default {
    name: 'private',
    methods: {
      logout(){
        firebase.auth().signOut().then(
          () => {
            this.$router.replace('/')
          }
        )
      }
    }
  }
</script>

