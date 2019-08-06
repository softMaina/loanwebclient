<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Land And Properties</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item" v-for="(land,index) in Lands" :key="index">
                         <span style="float:left">
                        <router-link class="btn btn-sm btn-info" to="/member">View</router-link>
                        </span>
                        
                         <div class="card">
                             <div class="card-body">
                                 <div class="card-img land">
                                     {{ url = 'https://loanserver.herokuapp.com/'+land.image }}
                                     <img :src="url" alt="img">
                                 </div>
                                 <div class="card-text">Location: {{land.location}}</div>
                                 <div class="card-text text-info">Description: {{land.description}}</div>
                                 <div class="card-text text-danger">Cost: {{land.cost}} ksh</div>

                             </div>
                         </div>
                        <span style="float:right">
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger" @click="deleteLand(land._id)">Delete</button></span>
                    </li>
                </ul>
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
           base_url : "https://loanserver.herokuapp.com/"
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

