<template>
    <div class="container">
        <!-- list all of the granted loans
        and computer basic total of the loans -->
        <div class="col-md-6 center">
            <div class="card mb-2 shadow" v-for="loan in this.$store.getters.LOANS" :key="loan" style="width: 30rem;" >
            <div class="card-header">
                <p class="card-title">{{ loan.users[0].username }}</p>
            </div>
            <div class="card-body">
                <h3 class="card-text mb-2">{{ loan.users[0].email }}</h3>
                <h6 class="card-text mb-2 text-muted">Date {{ loan.date }}</h6>
                <p class="card-text">{{ loan.amount }}</p>
                <a href="#" class="btn btn-info btn-sm">Payments made</a>
                 <a href="#" class="btn btn-danger btn-sm">more</a>
            </div>

        </div>
        </div>
      
    </div>
</template>
<script>
export default {
    name:'loans',
    mounted(){
        this.$store.dispatch('GET_LOANS')
    }
}
</script>
<style>
.center{
    margin:auto;
}
</style>
