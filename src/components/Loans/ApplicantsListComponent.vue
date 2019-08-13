<template>
    <div>
          <ul class="list-group shadow-sm">
            <li class="list-group-item" v-for="(loan,index) in Applicants" :key="index" @click="userData(loan)">
                <!-- {{loan.users[0].firstname }} {{loan.users[0].lastname}} -->
                <div class="card" v-if="loan.type === 'cash' ">
                        <span style="float:right;" class="badge badge-info">Status: {{loan.status}}</span>
                    <div class="card-body">
                        <span style="float:right;" class="text-warning">Loan Type:{{loan.type}}</span>
                        <p class="card-text">{{loan.users[0].firstname }} {{loan.users[0].lastname}}</p>
                        <p class="card-text">Amount:  {{loan.amount}}</p>
                        <p class="card-text">Date:  {{ loan.data | moment }}</p>

                    </div>
                </div>
                  <div class="card" v-if="loan.type === 'land' ">
                        <span style="float:right;" class="badge badge-info">Status: {{loan.status}}</span>
                    <div class="card-body">
                        <span style="float:right;" class="text-warning">Loan Type:{{loan.type}}</span>
                        <p class="card-text">{{loan.users[0].firstname }} {{loan.users[0].lastname}}</p>
                        <p class="card-text">Cost:  {{loan.cost}}</p>
                        <p class="card-text">size:  {{loan.size}}</p>
                        <p class="card-text">Date:  {{ loan.date | moment }}</p>

                    </div>
                </div>
            </li>
          </ul>
    </div>
</template>

<script>

import moment from "moment"
export default {
    name:'applicantslist',
    
    data(){
        return{
         
        }
    },
    methods:{
        // loadUserData and guarantors
        userData(loan){
            this.$store.commit('SET_CUSTOMERINFO',loan)
        }
    },
    filters:{
        moment: function(date){
            return moment(date).format('YYYY-DD-MM,  h:mm:ss a');
        }
    },
    
    computed:{
      Applicants(){
          return this.$store.getters.APPLICATIONS;
      }
    },
    mounted(){
        this.$store.dispatch('GET_LOANAPPLICATIONS')
    }
}
    

</script>

