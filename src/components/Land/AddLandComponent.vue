<template>

    <div class="container">
        <div>
            <p>Create a land property</p>
        </div>
        <div class="col-md-8 shadow">
            <form @submit.prevent="addLand">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="title" v-model="land.title">
                </div>
                 <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="description" v-model="land.description">

                    </textarea>
                </div>
                 <div class="form-group">
                    <input type="text" class="form-control" placeholder="location" v-model="land.location">
                </div>
                 <div class="form-group">
                    <input type="text" class="form-control" placeholder="cost" v-model="land.cost">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="size in acres" v-model="land.size">
                </div>
                <div class="form-group">
                      <div class="" id="preview">
                            <img v-if="url" :src="url" alt="image">
                        </div>
                        <div class="row">
                            <input type="file" name="file" ref="myFileRef" @change="onFileChange">
                        </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-info btn-sm">Add</button>
                </div>
            </form>
        </div>
    </div>
    
</template>
<script>
import uploads from '../../shared/uploadComponent'
import axios from 'axios'
export default {
    name:'addLand',
    components:{
        uploads
    },
    data(){
        return{
            land : {
            title:'',
            descriptions:'',
            location:'',
            cost:'',
            size:''
            },
            file:'',
            url:null
        }
        
    },
    methods:{
        addLand(){
            this.file = this.$refs.myFileRef.files[0];

            if(!this.file){
                console.error("no file selected")
                return;
            }

            let formData = new FormData()

            formData.append('file',this.file)
            formData.append('body',JSON.stringify(this.land))
            return axios.post(
                this.hostname + '/api/v1/land/save',
                formData,
                {
                    headers: {
                        'Content-Type':'multipart/form-data'
                    }
                }
            ).then(response =>{
                console.info(response)
            })
            .catch(error =>{req.file
                console.error("file upload faild",error)
            });
           
        },
        onFileChange(e){
            const file = e.target.files[0];
            let formData = new FormData()
            this.url = URL.createObjectURL(file);
        }
    }
}
</script>
<style scoped>

</style>
