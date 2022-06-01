<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Spp</h1> 
                <router-link class="btn btn-primary" :to="{path:'/spp/tambahspp'}">Tambah Spp</router-link>
            </div>
           
        </div>
    
    
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID Spp</th>
            <th scope="col">Angkatan</th>
            <th scope="col">Tahun</th>
            <th scope="col">Nominal</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(spp, index) in dataspp" :key="spp.id">
                <td>{{index+1}}</td>
                <td>{{spp.id_spp}}</td>
                <td>{{spp.angkatan}}</td>
                <td>{{spp.tahun}}</td>
                <td>{{spp.nominal}}</td>
                <!-- <td><router-link class="btn btn-success" :to="{path:'Pelanggan/EditPelanggan/'+pelanggan.id_pelanggan}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                     <router-link class="btn btn-success" :to="{path:'/spp/'+spp.id_spp}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapusspp(spp.id_spp)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>

    </table>
    </div>
</template>

<script>
    export default {
        name:"spp_ok",
        data(){
            return {
                dataspp:[],
            }
        },
        methods:{
            getspp : function(){
                var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
                this.axios.get("http://127.0.0.1:8000/api/spp", token)
                .then((result)=>{
                    console.log(result)
                    this.dataspp=result.data
                })
            },
            // find_data:function(){
            //     this.axios.get("http://127.0.0.1:8000/api/pelanggan/"+this.search).then((result)=>{
            //         console.log(result)
            //         this.pelanggan=result.data
            //     })
            // },
            hapusspp(id){
                var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/spp/' + id, option)
                    .then(()=>{
                        this.getspp()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getspp()
        }
    }
</script>