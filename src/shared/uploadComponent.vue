<template>
<div class="container">
    <div class="col-md-2">
        <div class="" id="preview">
            <img v-if="url" :src="url" alt="image">
        </div>
        <div>
        <div class="row">
            <input type="file" name="file" ref="myFileRef" @change="onFileChange">
        </div>
        
        <!-- <button class="btn btn-default btn-small shadow" type="button" @click="uploadFile()">Upload</button> -->
        </div>
    </div> 
</div>

</template>
<script>
import axios from 'axios';
export default {
    name:'uploads',
    data(){
        return {
          file:'',
          url:null
        }
    },
    props:{
        image:{type:Object}
    },
    methods:{
        uploadFile: function(){
            this.file = this.$refs.myFileRef.files[0];

            if(!this.file){
                console.error("no file selected")
                return;
            }

            let formData = new FormData()

            formData.append('file',this.file)

            return axios.post(
                'http://localhost:3000/uploads',
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
            formData.append('file',this.file)
            this.url = URL.createObjectURL(file);
            let imageURL = URL.createObjectURL(file)
            this.$emit('input',{imageURL})
        }
        
    }
    
}
</script>
<style>
 #preview{
     display:flex;
     justify-content:center;
     align-items:center;
 }
 #preview img{
     max-width:200px;
     max-height:300px;
 }
 #upload{
     height:400px;
     width:500px;
 }
</style>
