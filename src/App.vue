<template>
  <main class="min-vh-100 d-flex justify-content-center align-items-center">
    <div class="interface bg-dark p-3 rounded d-flex flex-column align-items-center mx-auto">
      <!-- <div class="rec-brown"></div> -->
      <!-- <div class="rec-gray"></div> -->
      <div class="d-flex align-items-center flex-column justify-content-between">
        <Questions />
        <BrewCoffee />
      </div>
      <div class="interface">
        <div>
          <div>
            <div class="d-flex justify-content-evenly">
              <div class="rec-light-gray me-3">test</div>
              <div class="rec-light-gray ms-3">test</div>
            </div>
          </div>
          <Coffee />
        </div>
        <!-- <div class="rec-custom-gray" /> -->
      </div>
      <!-- <div class="rec-light-brown" /> -->
    </div>
  </main>
</template>
<script setup>

import Questions from './components/Questions.vue';
import BrewCoffee from './components/BrewCoffee.vue';
import Coffee from './components/Coffee.vue';
</script>

<style>
:root {
  --black: #333333;
}
p, label, .btn{
  color: white;
}
.interface {
  height: 40vh;
  width: 50vw;
  /* background: red!important; */
}

.bg-custom {
  background-image: linear-gradient(to right, #01706c, #006A77);
}

.rec-brown {
  background-color: #3D2518;
  height: 60px;
  width: 55vw;
}

.rec-gray {
  background-color: #828282;
  height: 60px;
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
  height: 600px;
  width: 60vw;
}
</style>
