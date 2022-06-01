<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Petugas</h1> 
                <router-link class="btn btn-primary" :to="{path:'/petugas/tambahpetugas'}">Tambah Petugas</router-link>
            </div>
           
        </div>
    
    
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID Petugas</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Nama Petugas</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(petugas, index) in datapetugas" :key="petugas.id">
                <td>{{index+1}}</td>
                <td>{{petugas.id_petugas}}</td>
                <td>{{petugas.username}}</td>
                <td>{{petugas.password}}</td>
                <td>{{petugas.nama_petugas}}</td>
                <!-- <td><router-link class="btn btn-success" :to="{path:'Pelanggan/EditPelanggan/'+pelanggan.id_pelanggan}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                     <router-link class="btn btn-success" :to="{path:'/petugas/'+petugas.id_petugas}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapuspetugas(petugas.id_petugas)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>

    </table>
    </div>
</template>

<script>
    export default {
        name:"petugas_ok",
        data(){
            return {
                datapetugas:[],
            }
        },
        methods:{
            getpetugas : function(){
                var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
                this.axios.get("http://127.0.0.1:8000/api/petugas", token)
                .then((result)=>{
                    console.log(result)
                    this.datapetugas=result.data
                })
            },
            // find_data:function(){
            //     this.axios.get("http://127.0.0.1:8000/api/pelanggan/"+this.search).then((result)=>{
            //         console.log(result)
            //         this.pelanggan=result.data
            //     })
            // },
            hapuspetugas(id){
                var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/petugas/' + id, option)
                    .then(()=>{
                        this.getpetugas()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getpetugas()
        }
    }
</script>