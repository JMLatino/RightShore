<template>
  <main class="shadow p-3 mb-5 bg-body rounded bg-custom d-flex flex-column align-items-center">
    <div class="rec-brown"/>
    <div class="rec-gray"/>
    <div class="bg-custom-gray d-flex align-items-center flex-column">
      <Questions />
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
.bg-custom-gray {
  background-color: #BDBDBD;
  height: 850px;
  width: 80vw;
}
</style>
