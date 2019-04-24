<template>
    <div id="AddBlog">
        <v-container fluid fill-height>
            <v-layout flex align-center justify-center>
                <v-flex>
                    <v-card color="grey lighten-4">
                        <v-card-text class='pt-4'>
                            <div>
                                <v-form ref="form"> 
                                    <v-text-field
                                    label="Enter the Title"
                                    v-model="title"
                                    required></v-text-field>
                                    <v-textarea
                                    box
                                    label="Enter your text here"
                                    v-model="content">
                                    </v-textarea>
                                    <v-btn @click="upload">
                                        Upload
                                    <v-icon>launch</v-icon>
                                    </v-btn>
                                </v-form>
                            </div>
                        </v-card-text>                 
                    </v-card>
                </v-flex>
            </v-layout>        
        </v-container>
    </div>
</template>

<script>
import db from '@/firebaseInit'
export default {
    name:'addnewblog',
    data(){
        return{
            title:'',
            content:''
        }
    },
    methods:{
        upload(){
            db
            .collection('blogs')
            .add({
                title:this.title,
                content:this.content
            })
            .then(docRef=> this.$router.push('/blogs'))
            .catch(error => console.log(err))
        }
    }   
}

</script>

