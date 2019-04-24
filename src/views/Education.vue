<template>
    
<div id="education">
    <v-btn  @click="edit" fab fixed  color="blue" class="right " style=" margin-left: 1130px ; " > <v-icon color="white">edit</v-icon> </v-btn>
    <EditEducation v-if="!edited" class="mt-1" />
    <v-timeline  v-if="edited" align-top class="mt-1">
    <v-timeline-item
      v-for="item in items"
      :key="item.name"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      
    >
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
</div>

</template>

<script>
import db from '@/firebaseInit'
import EditEducation from '@/edit/EditEducation'
import { WSAEPROVIDERFAILEDINIT } from 'constants';
export default {
    name:'education',
    components:{
      EditEducation
    },
    data(){
        return{
            items: [],
            edited:true
        }
    },
    methods:{
      edit(){
        if (this.edited==true)
        {
          this.edited=false
        }
        else
        {
          this.edited=true
        }
      }
    }
    ,
   created(){
    db.collection('education').get().then(
      querySnapshot=>{querySnapshot.forEach(doc => {
        const data = {
            'color': doc.data().color,
            'school': doc.data().school,
            'description': doc.data().description,
            'edu_id':doc.data().edu_id
        }
        this.items.push(data)
      })}) 
  }
}
</script>