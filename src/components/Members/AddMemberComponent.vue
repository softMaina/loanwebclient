<template>
    <div class="col-md-6 shadow center">
            <div class="col-md-6">
                <h6 class="text-center">Add new member</h6>
            </div>
         <div class="form">
                    <div class="form-group">
                        <input type="text" v-model="member.firstname" class="form-control" placeholder="firstname">
                    </div>
                      <div class="form-group">
                        <input type="text" v-model="member.lastname" class="form-control" placeholder="lastname">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="member.email" class="form-control" placeholder="email">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="member.contact" class="form-control" placeholder="contact">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary full btn-sm mb-4" @click="addMember">Add</button>
                    </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'addmembers',
    data(){
        return{
            member:{
                firstname:'',
                lastname:'',
                email:'',
                contact:''
            }
        }
    },
    methods:{
        addMember(){
            console.log(this.member)
        }
    }
}
</script>
<style>
.center{
    margin:auto;
}
</style>

