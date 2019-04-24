<template>
    
    <div id="blogs"> 
    <v-layout align-center>
    <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
      <v-item v-for="n in blogs" :key="n">
        <div slot-scope="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle" >
            <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-flex>
      <v-window v-model="window" class="elevation-1" vertical>
        <v-window-item v-for="n in blogs" :key="n.blog_id">
          <v-card flat>
            <v-card-text>
              <v-layout align-center mb-3>
                <strong class="title">Title: {{ n.blog_title }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>person</v-icon>
                </v-btn>
              </v-layout>
            <p>{{n.blog_content}}</p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-flex>
  </v-layout>
    </div>

</template>

<script>
import db from '@/firebaseInit'
export default {
    name:'blogs',
    data(){
        return{
            blogs:[],
            blog_id:'',
            blog_content:'',
            blog_title:'',
            length: 3,
            window: 0
 
            
        }
    },  
    created(){
    db.collection('blogs').get().then(
      querySnapshot=>{querySnapshot.forEach(doc => {
        const data = {
          'id' : doc.id,
          'blog_id':doc.data().blog_id,
          'blog_title':doc.data().title,
          'blog_content':doc.data().content

        }
        this.blogs.push(data)
      })})
  }  
}
</script>