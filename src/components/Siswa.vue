<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Siswa</h1> 
                <router-link class="btn btn-primary" :to="{path:'/siswa/tambahsiswa'}">Tambah Siswa</router-link>
            </div>
           
        </div>
    
    
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">NISN</th>
            <th scope="col">NIS</th>
            <th scope="col">Nama</th>
            <th scope="col">ID Kelas</th>
            <th scope="col">Alamat</th>
            <th scope="col">No Tlp</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(siswa, index) in datasiswa" :key="siswa.nisn">
                <td>{{index+1}}</td>
                <td>{{siswa.nisn}}</td>
                <td>{{siswa.nis}}</td>
                <td>{{siswa.nama}}</td>
                <td>{{siswa.id_kelas}}</td>
                <td>{{siswa.alamat}}</td>
                <td>{{siswa.no_tlp}}</td>
                <!-- <td><router-link class="btn btn-success" :to="{path:'Pelanggan/EditPelanggan/'+pelanggan.id_pelanggan}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                     <router-link class="btn btn-success" :to="{path:'/siswa/'+siswa.nisn}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapussiswa(siswa.nisn)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>

    </table>
    </div>
</template>

<script>
    export default {
        name:"siswa_ok",
        data(){
            return {
                datasiswa:[],
            }
        },
        methods:{
            getsiswa : function(){
                var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
                this.axios.get("http://127.0.0.1:8000/api/siswa", token)
                .then((result)=>{
                    console.log(result)
                    this.datasiswa=result.data
                })
            },
            // find_data:function(){
            //     this.axios.get("http://127.0.0.1:8000/api/pelanggan/"+this.search).then((result)=>{
            //         console.log(result)
            //         this.pelanggan=result.data
            //     })
            // },
            hapussiswa(id){
                var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/siswa/' + id, option)
                    .then(()=>{
                        this.getsiswa()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getsiswa()
        }
    }
</script>