<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Staff</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item" v-for="(staff,index) in Staff" :key="index">
                         {{staff.firstname}}
                        <span style="float:right">
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Delete</button></span>
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

