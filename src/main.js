import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDL5PV7nLCQC1eeHFppOfYiKw9_3DP_AM",
  authDomain: "vuefire-auth-f19a7.firebaseapp.com",
  projectId: "vuefire-auth-f19a7",
  storageBucket: "vuefire-auth-f19a7.appspot.com",
  messagingSenderId: "972158496105",
  appId: "1:972158496105:web:45480148936c8bea1d61f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
