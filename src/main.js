import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyDENg_s2FUaagDGapAymwCML4F6nqyN1Dg",
    authDomain: "vue-calendar-1b613.firebaseapp.com",
    databaseURL: "https://vue-calendar-1b613.firebaseio.com",
    projectId: "vue-calendar-1b613",
    storageBucket: "vue-calendar-1b613.appspot.com",
    messagingSenderId: "155046535018",
    appId: "1:155046535018:web:f752033ee3c28d244d8f13",
    measurementId: "G-6JQ9TZ4ZYB"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
