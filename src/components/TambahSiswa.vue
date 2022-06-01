<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Siswa</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <label for="NIS" class="form-label">NIS</label>
            <input type="text" class="form-control" id="nis" v-model="nis" placeholder="NIS">
        </div>
        <div class="mb-3">
            <label for="Nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Nama">
        </div>
        <div class="mb-3">
            <label for="ID Kelas" class="form-label">ID Kelas</label>
            <input type="number" class="form-control" id="id_kelas" v-model="id_kelas" placeholder="ID Kelas">
        </div>
        <div class="mb-3">
            <label for="Alamat" class="form-label">Alamat</label>
            <textarea class="form-control" id="alamat" v-model="alamat" rows="3" placeholder="Alamat"></textarea>
        </div>
        <div class="mb-3">
            <label for="No Telp" class="form-label">No Tlp</label>
            <input type="text" class="form-control" id="no_tlp" v-model="no_tlp" placeholder="No tlp">
        </div>
      
        <button type="submit" class="btn btn-primary" @click="simpanSiswa()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"TambahSiswa", 
    data(){
        return {
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
        simpanSiswa : function(){
               var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            var datasiswa =
            {
                nis : this.nis,
                nama : this.nama, 
                id_kelas : this.id_kelas, 
                alamat : this.alamat, 
                no_tlp : this.no_tlp, 
            }
            this.axios.post("http://127.0.0.1:8000/api/siswa",
            datasiswa, token).then((response)=>{
                if(response.data.status==1){
                      alert("Sukses menambahkan siswa")

                } else {
                    alert("Gagal menambahkan siswa")

                }
                this.$router.push('/Siswa')
                console.log(response)
            })
        }
    }
   
}
</script>
