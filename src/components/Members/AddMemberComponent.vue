<template>
    <div class="col-md-6 shadow center">
            <div class="col-md-6">
                <h6 class="text-center">Add new member/staff</h6>
            </div>
         <div class="form">
                    <div class="form-group">
                         <flash-message></flash-message>
                    </div>
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
                        <label for="role" class="label-control">Role</label>
                        <select name="role" id="" class="form-control" v-model="member.role">
                            <option value="staff">Staff</option>
                            <option value="member">Member</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary full btn-sm mb-4" @click="addMember">Add</button>
                        <span style="float:right">
                            <button class="btn btn-danger btn-sm mb-4">Close</button>
                        </span>
                    </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
const base_url = "https://loanserver.herokuapp.com";
export default {
    name:'addmembers',
    data(){
        return{
            member:{
                firstname:'',
                lastname:'',
                email:'',
                contact:'',
                role:''
            }
        }
    },
    methods:{
        async addMember(){
            await axios.post( base_url + '/api/v1/register',this.member).then((response)=>{
                 this.flashSuccess('User registered successfully');
              
            })
            .catch(error => console.log(error))
        }
    }
}
</script>
<style>
.center{
    margin:auto;
}
</style>

