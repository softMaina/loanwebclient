<template>
    <div class="container">
        <div class="row col-md-12">
            <div class="col-md-12">
            <h4 class="text-center">Under Delopment</h4>
            <p class="text-center">example@gmail.com</p>
            <p class="text-center">56</p>
            </div>
            
            <div class="shadow col-md-6">
                <h3 class="text-center">Loan History</h3>
            </div>
            <div class="shadow col-md-6">
                <h3 class="text-center">Guarantors</h3>
            </div>
        </div>
      
    </div>    
</template>
<script>
import axios from "axios"
export default {
    name:'member',
    data(){
        return {
            user:{}
        }
    },
    mounted(){
        // var id;
        axios.get("http://localhost:3000/api/v1/users/report/" + this.$route.params.id).then(response=>{
            console.log(response)
        })
    }
}
</script>
<style>

</style>
