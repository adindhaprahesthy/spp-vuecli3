<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Spp</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <label for="Angkatan" class="form-label">Angkatan</label>
            <input type="number" class="form-control" id="angkatan" v-model="angkatan" placeholder="Angkatan">
        </div>
        <div class="mb-3">
            <label for="Tahun" class="form-label">Tahun</label>
            <input type="number" class="form-control" id="tahun" v-model="tahun" placeholder="Tahun">
        </div>
        <div class="mb-3">
            <label for="Nominal" class="form-label">Nominal</label>
            <input type="number" class="form-control" id="nominal" v-model="nominal" placeholder="Nominal">
        </div>
      
        <button type="submit" class="btn btn-primary" @click="simpanSpp()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"TambahSpp", 
    data(){
        return {
            angkatan:'',
            tahun:'',
            nominal:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        simpanSpp : function(){
               var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            var dataspp =
            {
                angkatan : this.angkatan,
                tahun : this.tahun, 
                nominal : this.nominal, 
            }
            this.axios.post("http://127.0.0.1:8000/api/spp",
            dataspp, token).then((response)=>{
                if(response.data.status==1){
                      alert("Sukses menambahkan spp")

                } else {
                    alert("Gagal menambahkan spp")

                }
                this.$router.push('/Spp')
                console.log(response)
            })
        }
    }
   
}
</script>
