<script>
import axios from "axios";
import {ref} from "vue";

const readData='http://localhost/buku/readbuku.php';
export default {
  data() {
    return {
      listbuku: ref([]),
    }
  },
  mounted() {
    this.readData()
  },
  methods: {
    readData() {
      axios.get(readData).then((resp) => {
        console.log(resp);
        this.listbuku = resp.data;
      })
          .catch((err) => {
            console.log(err);
          })
    }
  }
}
</script>

<template>
  <li v-for="data in listbuku" style="list-style: none">
    <p> Id Buku: {{data.id_buku}}</p>
    <p>Kode Buku: {{data.kode_buku}}</p>
    <p>Judul Buku: {{data.judul_buku}}</p>
    <p>Pengarang: {{data.pengarang}}</p>
    <p>Penerbit: {{data.penerbit}}</p>
    <p>Tahun Terbit: {{data.tahun}}</p>
    <p>Tanggal Input: {{data.tanggal_input}}</p>
    <p>Harga Buku: {{data.harga}}</p>
    <p> Kode Kategori: {{data.kode_kategori}}</p>
    <hr>
    <br>
  </li>
</template>


<style>
li{
  margin-left: 20px;
}
</style>

