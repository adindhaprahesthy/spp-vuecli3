<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Spp</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_spp" v-model="id_spp" placeholder="ID Spp">
        </div>
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
        <button type="submit" class="btn btn-primary" @click="EditSpp()">Edit Spp</button>
    </div>
       </div>
</template>

<script>
export default {
    name:"EditSpp", 
    data(){
        return {
            listspp: [],
            angkatan:'',
            tahun:'',
            nominal:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getdetailspp(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            this.axios.get("http://127.0.0.1:8000/api/spp/" + id, option)
            .then((response)=>{
                this.id_spp     = response.data[0].id_spp
                this.angkatan   = response.data[0].angkatan
                this.tahun      = response.data[0].tahun
                this.nominal    = response.data[0].nominal
            })
        },
        EditSpp : function(){
            var dataspp = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {
                'angkatan' : this.angkatan,
                'tahun' : this.tahun,
                'nominal' : this.nominal
            }

            this.axios.put("http://127.0.0.1:8000/api/spp/" + this.id_spp, form, 
            dataspp).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah spp")

                } else {
                    alert("Gagal mengubah spp")

                }
                this.$router.push('/Spp')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getdetailspp(this.$route.params.id)
    }
   
}
</script>
