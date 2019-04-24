<template>
    
<div id="education">
    <v-timeline  align-top>
    <v-timeline-item
      v-for="item in d1"
      :key="item.name"
      :color="item.color"
      fill-dot
      
    > 
    <template v-slot:opposite >
        <v-btn :color="item.color" class="white--text"  @click="setid(item.edu_id)" >Edit Field</v-btn>
     </template>
      
      <v-card
        :color="item.color"
        dark 
      >
        <v-card-title class="title">{{item.school}}</v-card-title>
        <v-card-text class="white text--primary">
         <p>{{item.description}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
   
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fixed fab bottom right class="right" color="blue" v-on="on" >
        <v-icon color="white" >add</v-icon> </v-btn>
      </template>
    <v-form ref="form">
        <v-card>
            <v-card-title>
            <span class="headline">Enter Details</span>
            </v-card-title>
            <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field  required label="Enter School Name" v-model="school"  ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-textarea required box label="Enter Description here" v-model="description" ></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                        <div class="text-xs-center">
                            <v-menu>
                                <template #activator="{ on: menu }">
                                    <v-tooltip bottom>
                                        <template #activator="{ on: tooltip }">
                                            <v-btn color="primary" dark v-on="{...tooltip,...menu }">Select Color</v-btn>
                                        </template>
                                        <span>Change the background color</span>
                                    </v-tooltip>
                                </template>
                                <v-list>
                                    <v-flex  >
                                    <v-btn flat v-for="(color, index) in colors" :key="index"  @click="savecolor(index)">
                                        <v-list-tile-title>{{ color.title }}</v-list-tile-title>
                                    </v-btn>
                                    </v-flex>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="check">Save</v-btn>
            </v-card-actions>   
        </v-card>
    </v-form>
    </v-dialog>
  </v-layout>

        
</div>

</template>

<script>
import db from '@/firebaseInit' 

export default {
    name:'editeducation',
    data(){
        return{
            d1: [],
            dialog:false,
            colors:[ {title:'red'},{title:'blue'},{ title:'green'},{ title:'yellow'},{ title:'purple'},{ title:'indigo'}],      
            currentcolor:'success',
            school:'',
            description:'',
            edu_id: 1,
            temp_id: '',
            bool:true
        }
    },
    methods:{
        savecolor(i){
                     this.currentcolor= this.colors[i].title;
                     console.log(this.currentcolor);   
        },
        addfield(){
            this.edu_id= this.edu_id + 1
            db
            .collection('education')
            .add({
                'school':this.school,
                'description':this.description,
                'color':this.currentcolor,
                'edu_id':this.edu_id
            })
            .then(docRef=> this.$router.push('/education'))
            .catch(error => console.log(err))
            
        },
        setid (id) {
            this.temp_id=id;
            console.log(this.temp_id)
            this.fetchData()
        },
        fetchData () {
        console.log('entered fetch data')
        db.collection('education').where('edu_id', '==',this.temp_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.edu_id = doc.data().edu_id,
            this.school = doc.data().school,
            this.description = doc.data().description,
            this.color = doc.data().color
          })
        })
        this.dialog="true"
        this.bool=false
        console.log(this.bool)
      },
      update(){
          console.log('entered update')
        console.log(123)
        db.collection('education')
        .where('edu_id', '==', this.temp_id)
        .get()
        .then(
            (querySnapshot) => 
            {
                querySnapshot.forEach((doc) => {
                doc.ref.update({
                    school: this.school,
                    description: this.description,
                    color:this.currentcolor
            })
        .then(() => {
                this.$router.push('/education')
            })
          })
        })
        this.bool=true
        console.log('Exit Update', this.bool)
      },
      check(){
          if(this.bool== true){
              this.addfield()
          }
          else
          {
              this.update()
          }
      }
    },
    created(){
    db.collection('education').get().then(
      querySnapshot=>{querySnapshot.forEach(doc => {
        const data = {
            'color': doc.data().color,
            'school': doc.data().school,
            'description': doc.data().description,
            'edu_id':doc.data().edu_id
        }
        this.d1.push(data)
      })})
  }  
   

}
</script>