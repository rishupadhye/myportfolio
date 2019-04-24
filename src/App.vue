<template>
  <v-app class="grey lighten-4">
      <CoreToolbar />   
      <v-content class="mx-4 mt-2 mb-3">
          <router-view></router-view>
      </v-content>  
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
   
  }
}
</script>
