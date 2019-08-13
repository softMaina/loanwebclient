<template>
    <div class="container">
        <!-- list all of the granted loans
        and computer basic total of the loans -->
        <div class="jumbotron">
            <h3 class="text-center text-info">Loan Report</h3>
        </div>
        <div class="row">
             <div class="col-md-6" v-for="loan in this.$store.getters.LOANS" :key="loan" style="width: 30rem;">
            <div class="card mb-2 shadow"  >
            <div class="card-header">
                <p class="card-text">{{ loan.users[0].firstname }} {{ loan.users[0].firstname }}</p>
            </div>
            <div class="card-body">
                <p class="card-text mb-2">{{ loan.users[0].email }}</p>
                <h6 class="card-text mb-2 text-muted">Date {{ loan.date | moment }}</h6>
                <p class="card-text" style="color:red;">Kshs: {{ loan.amount }}</p>
                <button @click="viewUserPayment(loan.users[0]._id)" class="btn btn-info btn-sm">Payments made</button>
                 <!-- <a href="#" class="btn btn-danger btn-sm">more</a> -->
            </div>

        </div>
        </div>
        </div>
      
    </div>
</template>
<script>
import moment from "moment"
export default {
    name:'loans',
    mounted(){
        this.$store.dispatch('GET_LOANS')
    },
    methods:{
        viewUserPayment(id){
            this.$router.push({
            name:'user_payments',
            params:{id:id}
        });
        }
    },
    filters:{
    moment: function(date){
        return moment(date).format('YYYY-DD-MM,  h:mm:ss a');
    }
    },
}
</script>
<style>
.center{
    margin:auto;
}
</style>
