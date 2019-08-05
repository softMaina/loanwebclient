<template>
    <div>
          <ul class="list-group shadow-sm">
            <li class="list-group-item" v-for="(loan,index) in Applicants" :key="index" @click="userData(loan)">{{loan.users[0].firstname }} <span style="float:right;" class="text-warning">Loan Type:{{loan.type}}</span></li>
          </ul>
    </div>
</template>

<script>


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

