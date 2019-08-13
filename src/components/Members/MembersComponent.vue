<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Registered Members</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item" v-for="(member,index) in Members" :key="index" >
                    
                              <!-- <span style="float:left">
                        <router-link class="btn btn-sm btn-info" to="/member">View</router-link>
                        </span>
                         {{member.firstname}}
                        <span style="float:right">
                            <button class="btn btn-sm btn-warning" @click="approveMember(member._id)" v-if="!member.approved">Approve</button>
                            <button class="btn btn-sm btn-danger">Reject</button></span> -->
                            <div class="card" v-bind:style="[member.approved ? {backgroundColor:'#FFF'}: {background:'#FFB4A3'}]">
                            <div class="card-body">
                                <p class="card-text">Name: {{member.firstname}} {{member.lastname}}</p>
                                <p class="card-text">Email: {{member.email}}</p>
                                <p class="card-text">Tel: {{member.contact}}</p>
                                <button  class="card-link btn btn-primary btn-sm" @click="approveMember(member._id)" v-if="!member.approved">Approve</button>
                                <button  class="card-link btn btn-danger btn-sm" @click="rejectMember(member._id)">Reject</button>
                                <span style="float:right;"><button  class="card-link btn btn-default btn-sm shadow" @click="viewUser(member)">View Profile</button></span>
                            </div>
                            </div>
                        
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
       },
       rejectMember(id){
           axios.put(this.hostname + '/api/v1/user/reject/'+id).then((response)=>{
               console.log(response)
               console.log('user updated')
           })
       },
        viewUser(user){
        this.$router.push({
            name:'member',
            params:{id:user._id}
        });
        }
   },
    mounted(){
        this.$store.dispatch('GET_MEMBERS')
    },
    computed:{
      Members(){
          return this.$store.getters.MEMBERS;
      }
    }
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

