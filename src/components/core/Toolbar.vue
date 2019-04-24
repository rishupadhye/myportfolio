<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#F5F5F5'"
    app
    flat
  >
  <v-layout align-center>
  <v-toolbar-title  class=" text-center text-uppercase  black--text darken-4">
          <span v-if="isLoggedIn" class="font-weight-light">Welcome,</span>
          <span class="font-weight-light">Rishabh Upadhye</span>
          <span v-if="!isLoggedIn" class="font-weight-thin">|PORTFOLIO</span>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <!-- <router-link tag="button" to="/login">
  <v-btn flat>Login</v-btn>
  </router-link> -->
  <router-link tag="button" to="/addnewblog">
    <v-btn flat >Add Blog</v-btn>
  </router-link>
  <v-btn flat v-if="isLoggedIn" @click="logout">Logout <v-icon>keyboard_tab</v-icon></v-btn>

  </v-layout> 
 <template v-slot:extension>
        <v-tabs
          class="align-with-title"
          centered
          v-scroll="onScroll"
          :color="isTransparent ? 'transparent' : '#F5F5F5'"
          slider-color="black"
        >
          <v-tab
            v-for="link in links"
            :key="link.text"
            :href="`#tab-${link}`"
            router :to="link.route"
          >
             {{ link.text }}
          </v-tab>
        </v-tabs>
      </template> 
  </v-toolbar>
</template>

<script>
import firebase from 'firebase'
export default {
  components: {
  },

  data: () => ({
    isTransparent: true,
    links:[
                {icon:'dashboard', text:'Home', route:'/'},
                {icon:'folder', text:'My Projects', route:'/projects'},
                {icon:'person', text:'Education', route:'/education'},
                {icon:'person', text:'Blogs', route:'/blogs'},
                {icon:'person', text:'About', route:'/about'}
    ],
    isLoggedIn: false,
    currentuser: false
  }),
  created()
  {
    if(firebase.auth().currentuser)
    {
      this.isLoggedIn= true;
      this.currentuser= firebase.auth().currentuser.email;
    }
  },
  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 100
    }
  },
  logout: function(){
    firebase
    .auth()
    .signOut()
    .then(()=>{
      this.$router.go({path: this.$router.path});
    });
  }
}
</script>
