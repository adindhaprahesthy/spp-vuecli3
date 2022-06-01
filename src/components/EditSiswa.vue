<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Siswa</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="nisn" v-model="nisn" placeholder="Nisn">
        </div>
        <div class="mb-3">
            <label for="Nis" class="form-label">Nis</label>
            <input type="text" class="form-control" id="nis" v-model="nis" placeholder="Nis">
        </div>
        <div class="mb-3">
            <label for="Nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Nama">
        </div>
        <div class="mb-3">
            <label for="Id Kelas" class="form-label">Id Kelas</label>
            <input type="number" class="form-control" id="id_kelas" v-model="id_kelas" placeholder="Id Kelas">
        </div>
        <div class="mb-3">
            <label for="Alamat" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="alamat" v-model="nis" placeholder="Alamat">
        </div>
        <div class="mb-3">
            <label for="No Tlp" class="form-label">No Tlp</label>
            <input type="text" class="form-control" id="no_tlp" v-model="no_tlp" placeholder="No tlp">
        </div>
        <button type="submit" class="btn btn-primary" @click="EditSiswa()">Edit Siswa</button>
    </div>
       </div>
</template>

<script>
export default {
    name:"EditSiswa", 
    data(){
        return {
            listsiswa: [],
            nis:'',
            nama:'',
            id_kelas:'',
            alamat:'',
            no_tlp:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getdetailsiswa(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            this.axios.get("http://127.0.0.1:8000/api/siswa/" + id, option)
            .then((response)=>{
                this.nisn      = response.data[0].nisn
                this.nis       = response.data[0].nis
                this.nama      = response.data[0].nama
                this.id_kelas  = response.data[0].id_kelas
                this.alamat    = response.data[0].alamat
                this.no_tlp    = response.data[0].no_tlp
            })
        },
        EditSiswa : function(){
            var datasiswa = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {
                'nis' : this.nis,
                'nama' : this.nama,
                'id_kelas' : this.id_kelas,
                'alamat' : this.alamat,
                'no_tlp' : this.no_tlp
            }

            this.axios.put("http://127.0.0.1:8000/api/siswa/" + this.nisn, form, 
            datasiswa).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah siswa")

                } else {
                    alert("Gagal mengubah siswa")

                }
                this.$router.push('/Siswa')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getdetailsiswa(this.$route.params.id)
    }
   
}
</script>
