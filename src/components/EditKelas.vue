<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Kelas</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_kelas" v-model="id_kelas" placeholder="ID Kelas">
        </div>
        <div class="mb-3">
            <label for="Nama Kelas" class="form-label">Nama Kelas</label>
            <input type="text" class="form-control" id="nama_kelas" v-model="nama_kelas" placeholder="Nama Kelas">
        </div>
        <div class="mb-3">
            <label for="Jurusan" class="form-label">Jurusan</label>
            <input type="text" class="form-control" id="jurusan" v-model="jurusan" placeholder="Jurusan">
        </div>
        <div class="mb-3">
            <label for="Angkatan" class="form-label">Angkatan</label>
            <input type="text" class="form-control" id="angkatan" v-model="angkatan" placeholder="Angkatan">
        </div>
        <button type="submit" class="btn btn-primary" @click="EditKelas()">Edit Kelas</button>
    </div>
       </div>
</template>

<script>
export default {
    name:"EditKelas", 
    data(){
        return {
            listkelas: [],
            nama_kelas:'',
            jurusan:'',
            angkatan:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getdetailkelas(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            this.axios.get("http://127.0.0.1:8000/api/kelas/" + id, option)
            .then((response)=>{
                this.id_kelas      = response.data[0].id_kelas
                this.nama_kelas    = response.data[0].nama_kelas
                this.jurusan       = response.data[0].jurusan
                this.angkatan      = response.data[0].angkatan
            })
        },
        EditKelas : function(){
            var datakelas = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {
                'nama_kelas' : this.nama_kelas,
                'jurusan' : this.jurusan,
                'angkatan' : this.angkatan
            }

            this.axios.put("http://127.0.0.1:8000/api/kelas/" + this.id_kelas, form, 
            datakelas).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah kelas")

                } else {
                    alert("Gagal mengubah kelas")

                }
                this.$router.push('/Kelas')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getdetailkelas(this.$route.params.id)
    }
   
}
</script>
