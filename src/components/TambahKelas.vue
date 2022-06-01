<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Kelas</h1>
            </div>
        </div>
    
    <div class="modal-body" >
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
      
        <button type="submit" class="btn btn-primary" @click="simpanKelas()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"TambahKelas", 
    data(){
        return {
            nama_kelas:'',
            jurusan:'',
            angkatan:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        simpanKelas : function(){
               var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            var datakelas =
            {
                nama_kelas : this.nama_kelas,
                jurusan : this.jurusan, 
                angkatan : this.angkatan, 
            }
            this.axios.post("http://127.0.0.1:8000/api/kelas",
            datakelas, token).then((response)=>{
                if(response.data.status==1){
                      alert("Sukses menambahkan kelas")

                } else {
                    alert("Gagal menambahkan kelas")

                }
                this.$router.push('/Kelas')
                console.log(response)
            })
        }
    }
   
}
</script>
