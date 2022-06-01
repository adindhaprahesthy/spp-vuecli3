<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Petugas</h1>
            </div>
        </div>
    
    <div class="modal-body" >
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
                            <select class="form-control" v-model="level">
                                <option value="" disabled>-- Pilih Level --</option>
                                <option value="Petugas">Petugas</option>
                                <option value="Admin">Admin</option>
                            </select>
                    </div>
      
        <button type="submit" class="btn btn-primary" @click="simpanPetugas()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"TambahPetugas", 
    data(){
        return {
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
        simpanPetugas : function(){
               var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            var datapetugas =
            {
                username : this.username,
                password : this.password, 
                nama_petugas : this.nama_petugas, 
                level : this.level, 
            }
            this.axios.post("http://127.0.0.1:8000/api/petugas",
            datapetugas, token).then((response)=>{
                if(response.data.status==1){
                      alert("Sukses menambahkan petugas")

                } else {
                    alert("Gagal menambahkan petugas")

                }
                this.$router.push('/Petugas')
                console.log(response)
            })
        }
    }
   
}
</script>
