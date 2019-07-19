<template>
    <div>
        
            <h4 class="text-center text-info text-monospace">Guarantors</h4>
                <hr/>
            <div v-if="$store.getters.GUARANTORS != ''">
            <div class="card" v-for="guarantor in $store.getters.GUARANTORS" :key="guarantor">
              <div class="card-header">
                <p class="card-title">{{ guarantor.firstname }}  {{ guarantor.lastname }}</p>
              </div>
              <div class="card-body">
                <p class="card-text">{{ guarantor.email }}</p>
                <p class="card-text">{{ guarantor.contact }}</p>
              </div>      
            </div>
            </div>

            <div v-if="$store.getters.GUARANTORS == ''">
              <div class="card">
                <div class="card-body">
                  This user doesn't have any guarantors
                </div>
              </div>
            </div>

         
    </div>
    
</template>

<script>
export default {
    name:'guarantors',

}
</script>
