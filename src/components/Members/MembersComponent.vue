<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Registered Members</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item" v-for="(member,index) in Members" :key="index" v-bind:style="[member.approved ? {backgroundColor:'#FFF'}: {background:'#FFB4A3'}]">
                    
                              <span style="float:left">
                        <router-link class="btn btn-sm btn-info" to="/member">View</router-link>
                        </span>
                         {{member.firstname}}
                        <span style="float:right">
                            <button class="btn btn-sm btn-warning" @click="approveMember(member._id)" v-if="!member.approved">Approve</button>
                            <button class="btn btn-sm btn-danger">Reject</button></span>
                        
                    </li>
                </ul>
            </div>
           
        </div>
         <div class="col-md-2">
             <div class="mt-5"></div>
                <router-link class="btn btn-sm btn-info" to="/addmembers">Add Members</router-link>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
   name:'members',
   methods:{
       membersForm(){
           console.log('Learn it')
       },
       approveMember(id){
           axios.put(this.hostname + '/api/v1/user/update/'+id).then((response)=>{
               console.log(response)
               console.log('user updated')
           })
       }
   },
    mounted(){
        this.$store.dispatch('GET_MEMBERS')
    },
    computed:{
      Members(){
          return this.$store.getters.MEMBERS;
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
</style>

