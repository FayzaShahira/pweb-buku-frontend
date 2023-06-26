import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Anggota.vue'
import Buku from "@/views/Buku.vue";
import Anggota from "@/views/Anggota.vue";
import Kategori from "@/views/Kategori.vue";
import Home from "@/views/Home.vue";

const routes =[
  {
    path: "/Buku",
    name: "Buku",
    component: Buku,
  },
  // {
  //   path: "/Anggota",
  //   name: "Anggota",
  //   component: Anggota,
  // },
  // {
  //   path: "/Kategori",
  //   name: "Kategori",
  //   component: Kategori,
  // },
  // {
  //   path: "/Home",
  //   name: "Home",
  //   component: Home,
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('../views/Kategori.vue')
    }
  ]
})

export default router
