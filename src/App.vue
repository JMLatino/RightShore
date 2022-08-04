<template>
  <main class="shadow p-3 bg-body rounded bg-custom d-flex flex-column align-items-center">
    <div class="rec-brown" />
    <div class="rec-gray" />
    <div class="bg-custom-gray d-flex align-items-center flex-column">
      <Questions />
      <BrewCoffee />
    </div>
    <div class="rec-gray-bottom d-flex flex-column align-items-center justify-content-between">
      <div>
        <div class="rec-dark-gray" />
        <div class="d-flex pl-2">
          <div class="rec-light-gray me-3" />
          <div class="rec-light-gray ms-3" />
        </div>
      </div>
      <Coffee />
    </div>
    <div class="rec-custom-gray" />
    <div class="rec-light-brown" />
  </main>
</template>
<script setup>

import Questions from './components/Questions.vue';
import BrewCoffee from './components/BrewCoffee.vue';
import Coffee from './components/Coffee.vue';
</script>
<style scoped>
.bg-custom {
  background-image: linear-gradient(to right, #01706c, #006A77);
}
.rec-brown {
  background-color: #3D2518;
  height: 70px;
  width: 55vw;
}
.rec-gray {
  background-color: #828282;
  height: 70px;
  width: 60vw;
}
.rec-gray-bottom {
  background-color: #828282;
  height: 500px;
  width: 55vw;
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
.rec-custom-gray {
  background-color: #BDBDBD;
  height: 60px;
  width: 60vw;
}
.rec-light-brown {
  background-color: #724C1F;
  height: 60px;
  width: 100%;
}
.bg-custom-gray {
  background-color: #BDBDBD;
  width: 60vw;
}
</style>
