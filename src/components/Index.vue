<template>
  <div class="container">

      <div class="row">
        
        <div class="col-md-4">
          <h5 class="text-success text-monospace">Loan Applications</h5>
          <ApplicantsList/>
        </div>

        <div class="col-md-8 card shadow data">
          <div class="row">

          <div class="col-md-6 vertical-line">
            <Applicant/>
          </div>

          
          <!-- individual guarantors for selected users -->
          <div class="col-md-6">
            <Guarantors/>
          </div>
      

          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import Applicant from '../components/Loans/ApplicantComponent';
import ApplicantsList from '../components/Loans/ApplicantsListComponent';
import Guarantors from '../components/Guarantors/GuarantorsComponent';

export default {
  name: 'index',
  props: {
    msg: String
  },
  components:{
    Applicant,
    ApplicantsList,
    Guarantors   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.data{
  min-height:400px;
}
.vertical-line{
  border-right: 1px solid rgba(0,0,0,0.1);
}
</style>
