<template>
    
    <div id="projects">
    <v-layout>
      <v-flex
        xs12
        md6
        color="white darken-4"
        text-xs-center
        pa-5
        white--text
      >
        <!-- <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        /> -->
        <h2 style="color:black;">
          Recent Projects
        </h2>

        <p style="color:black;" class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipi<br>
          scin elit. Etiam vulputate augue vel felis gravida<br>
          porta. Lorem ipsum dolor sit amet.
        </p>

        <v-card color="white darken-2">
          <v-container
            grid-list-md
            pa-2
          >
            <v-layout wrap>
              <v-flex
                v-for="project in projects"
                :key="project"
                xs12
                md6
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.jpeg`)"
                    max-height="300"
                  />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/recentprojects.png')"
          height="100%"
        />
      </v-flex>
    </v-layout>
    </div>

</template>

<script>
export default {
    name:'projects',
    data(){
        return{
            projects: [
                'project1',
                'project2',
                'project3',
                'project4'
                ]
        }
    }
}
</script>