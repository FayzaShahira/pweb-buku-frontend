<script setup>


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
          <a class="nav-link" href="#"><router-link to="/Buku">Buku</router-link></a>
          <a class="nav-link" href="#"><router-link to="/Kategori">Kategori</router-link></a>
          <a class="nav-link" href="#"><router-link to="/Anggota">Anggota</router-link></a>
        </div>
      </div>
    </div>
  </nav>
  <Buku/>
  <RouterView/>
</template>
