<template>
    <div class="col-md-12">
        <div class="col-md-4 loginform">

             <div class="card shadow">
            <div class="card-body">
                <div class="form">
                    <form action="" @submit="submitForm">
                        <div class="form-group">
                            <input type="text" v-model="auth.email" class="form-control" placeholder="email">
                            <span class="text-danger">{{errors.email}}</span>
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="auth.password" class="form-control" placeholder="password">
                            <span class="text-danger">{{errors.password}}</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary full btn-lg" @click="login" name="login" value="login">Login</button>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            auth:{
                email:'',
                password:''
            },
            errors:{
                email:undefined,
                password:undefined,
            }
        }
    },
    computed:{

    },
    methods:{
        login(evt){
            const button = evt.target;

            console.log(`login was clicked ${button.name}: ${button.value}`);
        },
        submitForm(evt){
            evt.preventDefault();

            this.errors = this.validateForm(this.auth);
            if(Object.keys(this.errors).length) return;
            //send data to my api server
            this.$store.dispatch('LOGIN',this.auth).then(()=>{
                this.$router.push('/');
            })
            .catch(err => console.log(err))
        },
        validateForm(auth){
            const errors = {};
            if(!auth.email) errors.email = "Email is required";
            if(!auth.password) errors.password="Password is required";

            if(auth.email && !this.isEmail(auth.email)){
                errors.email = "Invalid Email"
            }

            return errors;
        },
        isEmail(email){
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }
}
</script>
<style scoped>
    .loginform{
        margin:auto;
        margin-top:10%;
    }
</style>


