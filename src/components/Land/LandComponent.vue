<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Land And Properties</h4>
            <hr>
            <div class="row">
                   
                    <div class="col-md-6" v-for="(land,index) in Lands" :key="index">   
                         <div class="card">
                             <p class="badge badge-info">{{ land.sold ? "Not Available" : "Available" }}</p>
                             <div class="card-body">
                                 <div class="card-img land">
                                    <p class="" style="display:none;"> {{ url = "https://loanserver.herokuapp.com/"+land.image }}</p>
                                     <img :src="url" alt="img">
                                 </div>
                                 <div class="card-text">Location: {{land.location}}</div>
                                 <div class="card-text text-info">Description: {{land.description}}</div>
                                 <div class="card-text text-danger">Cost: {{land.cost}} ksh</div>

                             </div>
                            <span style="float:right">
                                <button class="card-link btn btn-sm btn-warning">Edit</button>
                                <button class="card-link btn btn-sm btn-danger" @click="deleteLand(land._id)">Delete</button>
                            </span>
                         </div>
                       
                    </div>
             </div> 
        </div>
           
           
         <div class="col-md-2">
             <div class="mt-5"></div>
                <router-link class="btn btn-sm btn-info" to="/addLand">Add Property</router-link>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'land',
   data(){
       return {
        //    base_url : "https://loanserver.herokuapp.com/"
        base_url:"http:localhost:3000/"
       }
   },
   methods:{
       membersForm(){
           console.log('Learn it')
       },
       deleteLand(id){
           axios.delete(this.hostname + '/api/v1/land/delete/' + id).then((response)=>{
               console.log(response)
           })
       }
   },
    mounted(){
        this.$store.dispatch('GET_LANDS')
    },
    computed:{
      Lands(){
          return this.$store.getters.LAND;
      }
    },
}
</script>
<style>
.center{
    margin:auto;
}
.members{
    min-height: 200px;
}
.land img{
    height:200px;
    width:200px;
}
</style>

