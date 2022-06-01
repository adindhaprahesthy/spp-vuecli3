<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Kelas</h1> 
                <router-link class="btn btn-primary" :to="{path:'/kelas/tambahkelas'}">Tambah Kelas</router-link>
            </div>
           
        </div>
    
    
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID Kelas</th>
            <th scope="col">Nama Kelas</th>
            <th scope="col">Jurusan</th>
            <th scope="col">Angkatan</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(kelas, index) in datakelas" :key="kelas.id">
                <td>{{index+1}}</td>
                <td>{{kelas.id_kelas}}</td>
                <td>{{kelas.nama_kelas}}</td>
                <td>{{kelas.jurusan}}</td>
                <td>{{kelas.angkatan}}</td>
                <!-- <td><router-link class="btn btn-success" :to="{path:'Pelanggan/EditPelanggan/'+pelanggan.id_pelanggan}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                     <router-link class="btn btn-success" :to="{path:'/kelas/'+kelas.id_kelas}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapuskelas(kelas.id_kelas)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>

    </table>
    </div>
</template>

<script>
    export default {
        name:"kelas_ok",
        data(){
            return {
                datakelas:[],
            }
        },
        methods:{
            getkelas : function(){
                var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
                this.axios.get("http://127.0.0.1:8000/api/kelas", token)
                .then((result)=>{
                    console.log(result)
                    this.datakelas=result.data
                })
            },
            // find_data:function(){
            //     this.axios.get("http://127.0.0.1:8000/api/pelanggan/"+this.search).then((result)=>{
            //         console.log(result)
            //         this.pelanggan=result.data
            //     })
            // },
            hapuskelas(id){
                var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/kelas/' + id, option)
                    .then(()=>{
                        this.getkelas()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getkelas()
        }
    }
</script>