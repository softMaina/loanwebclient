<template>
    <div>
      <flash-message></flash-message>
          <h4 class="text-center text-info text-monospace">Applicant Details</h4>
                <hr/>

                <div class="card-body">
                  <ul class="list-group" v-if="$store.getters.CUSTOMER != ''">
                    <li class="list-group-item">Name: {{ $store.getters.CUSTOMER.users[0].username }}</li>
                    <li class="list-group-item">Loan: {{ $store.getters.CUSTOMER.amount }}</li>
                    <li class="list-group-item">Date: {{ $store.getters.CUSTOMER.date }}</li>
                    <li class="list-group-item">Status: {{ $store.getters.CUSTOMER.status }} </li>
                    <li class="list-group-item"><button class="btn btn-success" @click="acceptApplication()">Accept</button>
                                                <button class="btn btn-danger " @click="rejectApplication()">Reject</button>
                                                </li>
                  </ul>
            </div>
            <div class="card-body" v-if="$store.getters.CUSTOMER == ''">
              Please select a loan request from the left panel to view details
            </div>
    </div>
</template>

<script>
export default {
    name:'applicant',
    created(){
      this.$store.watch(
       () => {
         return this.$store.getters.CUSTOMER
       },
       //dispatch to get guarantors
      ()=>{
           console.log('dispatched') 
            this.$store.dispatch('GET_GUARANTORS')
        }
      )
    },
    methods:{
      acceptApplication(){

        //update the applicants state   context.commit('SET_LOANAPPLICATIONS',payload)
        this.$store.getters.CUSTOMER.status = 'accepted'
        this.$store.dispatch('UPDATE_LOANAPPLICATION',this.$store.getters.CUSTOMER).then(() => {
          this.flashSuccess('Loan Approved and disbursed');
        }).catch((err) => {
          console.log(err)
        });

      },
      rejectApplication(){

        this.$store.getters.CUSTOMER.status = 'rejected'

          this.$store.dispatch('UPDATE_LOANAPPLICATION',this.$store.getters.CUSTOMER).then(() => {
          this.flashWarning('Loan Application Rejected');
        }).catch((err) => {
          console.log(err)
        });

      }
    }
}
</script>

