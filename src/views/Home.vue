<template>

<div id="home">
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/aboutme.png')" height="100vh" />
      </v-flex>

      <v-flex xs12 md6 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)"/>

        <v-layout align-center justify-center >
          <v-flex
            xs10
            md6
          >
            
      </v-flex>
    </v-layout>
  </section>

</div>

</template>

<script>
export default {
    name:'home',
    data(){
        return{

        }
    }
}
</script>
