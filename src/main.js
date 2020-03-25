import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyA8UoGz4BGNYIB0hQlZP3GtLMO39IGX9X8",
  authDomain: "auth-df504.firebaseapp.com",
  databaseURL: "https://auth-df504.firebaseio.com",
  projectId: "auth-df504",
  storageBucket: "auth-df504.appspot.com",
  messagingSenderId: "862292127831",
  appId: "1:862292127831:web:08adf77f5e5d65f611b312",
  measurementId: "G-877Y9N5Q98"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
