import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './firebaseInit'
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = 
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
});