<template>
    <div class="col-md-10 shadow center members">
        <div class="row">
        <div class="col-md-8">
            <h4 class="text-center">Registered Members</h4>
            <hr>
            <div>
                <ul class="list-group">
                   
                    <li class="list-group-item">
                         <span style="float:left">
                        <router-link class="btn btn-sm btn-info" to="/member">View</router-link>
                        </span>
                         Allan Maina
                        <span style="float:right">
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Delete</button></span></li>
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
export default {
   name:'members',
   methods:{
       membersForm(){
           console.log('Learn it')
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

