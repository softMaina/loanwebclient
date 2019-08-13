<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Staff</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item" v-for="(staff,index) in Staff" :key="index">
                         <div class="card">
                            <div class="card-body">
                                <p class="card-text">Name: {{staff.firstname}} {{staff.lastname}}</p>
                                <p class="card-text">Email: {{staff.email}}</p>
                                <p class="card-text">Tel: {{staff.contact}}</p>
                                <button  class="card-link btn btn-primary btn-sm" @click="approveMember(staff._id)">Edit</button>
                                <button  class="card-link btn btn-danger btn-sm" @click="rejectMember(staff._id)">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>
         <div class="col-md-2">
             <div class="mt-5"></div>
                <router-link class="btn btn-sm btn-info" to="/addmembers">Add Staff</router-link>
        </div>
        </div>
    </div>
</template>
<script>
export default {
   name:'staff',
   methods:{
       membersForm(){
           console.log('Learn it')
       }
   },
    mounted(){
        this.$store.dispatch('GET_STAFF')
    },
    computed:{
      Staff(){
          return this.$store.getters.STAFF;
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

