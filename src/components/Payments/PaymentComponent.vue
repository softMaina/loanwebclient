<template>
    <div class="container">
        <h3 class="text-center text-info">Payments Report</h3>
        <div class="col-md-12">
            <!-- <div class="col-md-6">
                <h4>Upcoming Payments</h4>
            </div>
            <div class="col-md-6">
                <h4>Late Payments</h4>
            </div> -->
            <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
       
            <tr>
                <td>Timothy Mooney</td>
                <td>3290</td>
                <td>Today</td>
                <td>37</td>
            </tr>
 
            <tr>
                <td>Donna Snider</td>
                <td>6775</td>
                <td>2 Weeks Ago</td>
                <td>27</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Balance</th>
            </tr>
        </tfoot>
    </table>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'payment'
}
</script>
<style scoped>
@import '../../assets/dataTables.bootstrap4.min.css';
</style>
