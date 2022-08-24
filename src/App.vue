<template>
  <main class="min-vh-100 min-vw-100">
    <div class="container rightshore">
      <div class="coffee-maker mx-auto">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="lid col-11"></div>
          <div class="beans col-11"></div>
          <div class="edge"></div>
          <div class="top-machine p-5">
            <div class="logos">
              <img src="@/assets/abnamro-icon.svg" alt="ABN AMRO">
              <img src="@/assets/capgemini-icon.svg" alt="Capgemini">
            </div>
            <div class="interface mx-auto rounded p-3">
              <div class="col-12 d-flex align-items-center flex-column justify-content-between">
                <Questions />
              </div>
            </div>
          </div>
          <div class="middle-machine col-11"></div>
          <div class="base-machine"></div>
        </div>
      </div>
      <div class="table"></div>
    </div>
  </main>
</template>
<script setup>
import Questions from './components/Questions.vue';

</script>

<style>
:root {
  --black: #333333;
}

main {
  background: linear-gradient(293.55deg, #17ABDA 20.47%, #0173B0 92.37%, #0070AD 98.71%)
}

.coffee-maker {
  max-width: 1000px;
}

.lid {
  height: 20px;
  background: linear-gradient(180deg, #242424 0%, #2E2E2E 100%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.beans {
  height: 60px;
  background: url('assets/beans-bg.png');
}

.edge {
  height: 80px;
  background: linear-gradient(180deg, #818181 0%, #AEAEAE 100%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.top-machine {
  background: linear-gradient(180deg, #CCCCCC 0%, #A8A8A8 100%);
  height: 700px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow-y: hidden !important;
}

.middle-machine {
  background: linear-gradient(180deg, #6B6B6B 0%, #828282 100%);
  height: 300px;
}

.base-machine {
  background: #BDBDBD;
  height: 125px;

}

.table {
  height: 100px;
  background: #724C1F;
}

.interface {
  width: 85% !important;
  overflow-y: hidden;
}

p,
label,
.btn {
  color: white;
}

.interface {
  background: var(--black);
  width: 1000px;
  z-index: 1;
}
</style>
