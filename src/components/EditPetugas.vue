<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Petugas</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_petugas" v-model="id_petugas" placeholder="ID Petugas">
        </div>
        <div class="mb-3">
            <label for="Username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
        </div>
        <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
        <div class="mb-3">
            <label for="Nama Petugas" class="form-label">Nama Petugas</label>
            <input type="text" class="form-control" id="nama_petugas" v-model="nama_petugas" placeholder="Nama petugas">
        </div>
        <div class="mb-3">
                            <label for="level" class="form-label">Level</label>
                            <select class="form-control" v-model="level" placeholder="Level">
                                <option value="" disabled>-- Pilih Level --</option>
                                <option value="Petugas">Petugas</option>
                                <option value="Admin">Admin</option>
                            </select>
                    </div>
        <button type="submit" class="btn btn-primary" @click="EditPetugas()">Edit Petugas</button>
    </div>
       </div>
</template>

<script>
export default {
    name:"EditPetugas", 
    data(){
        return {
            listpetugas: [],
            username:'',
            password:'',
            nama_petugas:'',
            level:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getdetailpetugas(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            this.axios.get("http://127.0.0.1:8000/api/petugas/" + id, option)
            .then((response)=>{
                this.id_petugas     = response.data[0].id_petugas
                this.username      = response.data[0].username
                this.password      = response.data[0].password
                this.nama_petugas  = response.data[0].nama_petugas
                this.level         = response.data[0].level
            })
        },
        EditPetugas : function(){
            var datapetugas = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {
                'username' : this.username,
                'password' : this.password,
                'nama_petugas' : this.nama_petugas,
                'level' : this.level
            }

            this.axios.put("http://127.0.0.1:8000/api/petugas/" + this.id_petugas, form, 
            datapetugas).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah petugas")

                } else {
                    alert("Gagal mengubah petugas")

                }
                this.$router.push('/Petugas')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getdetailpetugas(this.$route.params.id)
    }
   
}
</script>
