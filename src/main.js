import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';

import Kelas from './components/Kelas.vue';
import TambahKelas from './components/TambahKelas.vue';
import EditKelas from './components/EditKelas.vue';

import Siswa from './components/Siswa.vue';
import TambahSiswa from './components/TambahSiswa.vue';
import EditSiswa from './components/EditSiswa.vue';

import Petugas from './components/Petugas.vue';
import TambahPetugas from './components/TambahPetugas.vue';
import EditPetugas from './components/EditPetugas.vue';

import Spp from './components/Spp.vue';
import TambahSpp from './components/TambahSpp.vue';
import EditSpp from './components/EditSpp.vue';

import Login from './components/Login.vue';

const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {path: '/', name: "Home", component: Home},
        {path: '/profile', name: "Profile", component: Profile},
        
        {path: '/kelas', name: "Kelas", component: Kelas},
        {path: '/kelas/tambahkelas', name: "TambahKelas", component: TambahKelas},
        {path: '/kelas/:id', name: "EditKelas", component : EditKelas},

        {path: '/siswa', name: "Siswa", component: Siswa},
        {path: '/siswa/tambahsiswa', name: "TambahSiswa", component: TambahSiswa},
        {path: '/siswa/:id', name: "EditSiswa", component : EditSiswa},

        {path: '/petugas', name: "Petugas", component: Petugas},
        {path: '/petugas/tambahpetugas', name: "TambahPetugas", component: TambahPetugas},
        {path: '/petugas/:id', name: "EditPetugas", component : EditPetugas},

        {path: '/spp', name: "Spp", component: Spp},
        {path: '/spp/tambahspp', name: "TambahSpp", component: TambahSpp},
        {path: '/spp/:id', name: "EditSpp", component : EditSpp},

        {path: '/login', name: "Login", component: Login},
    ],
    base : "/"
});

var app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
