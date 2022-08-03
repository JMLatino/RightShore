<template>
  <main class="shadow p-3 mb-5 bg-body rounded bg-custom d-flex flex-column align-items-center">
    <div class="rec-brown" />
    <div class="rec-gray" />
    <div class="bg-custom-gray d-flex align-items-center flex-column">
      <Questions />
    </div>
    <div class="rec-gray-bottom d-flex flex-column align-items-center">
      <div class="rec-dark-gray" />
    <div class="d-flex pl-2">
      <div class="rec-light-gray me-3" />
      <div class="rec-light-gray ms-3" />
    </div>
    </div>
  </main>
</template>
<script setup>

import Questions from './components/Questions.vue';
// import { categories } from './constants';
</script>
<style scoped>
.bg-custom {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #01706c, #006A77);
}
.rec-brown {
  background-color: #3D2518;
  height: 70px;
  width: 70vw;
}
.rec-gray {
  background-color: #828282;
  height: 70px;
  width: 80vw;
}
.rec-gray-bottom {
  background-color: #828282;
  height: 500px;
  width: 75vw;
}
.rec-dark-gray {
  background-color: #333333;
  height: 80px;
  width: 200px;
}
.rec-light-gray {
  background-color: #BDBDBD;
  height: 30px;
  width: 40px;
}
.bg-custom-gray {
  background-color: #BDBDBD;
  height: 850px;
  width: 80vw;
}
</style>
