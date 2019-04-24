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
                :key="project.project_title"
                xs12
                md6
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project.project_img}.jpeg`)"
                    max-height="300"
                  />
                </a>
                
              </v-flex>
              <v-btn fab color="blue"> <v-icon color="white">add</v-icon></v-btn>
              <h2>Click to add project</h2>           
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
import db from '@/firebaseInit'
export default {
    name:'editprojects',
    data(){
        return{
            projects: [],
            project_title:'',
            project_description:'',
            project_img:''
        }
    },
    created(){
      db.collection('projects').get().then(
        querySnapshot =>{ querySnapshot.forEach(doc=>{
          const data= {
            'project_title': doc.data().project_title,
            'project_description': doc.data().project_description,
            'project_img': doc.data().project_img
          }
          this.projects.push(data)
        })}
      )
  }
}
</script>