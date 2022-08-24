<template>
  <main class="min-vh-100 min-vw-100">
    <div class="container rightshore pt-3">
      <div class="coffee-maker mx-auto">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="lid col-11"></div>
          <div class="beans col-11"><span></span></div>
          <div class="edge"></div>
          <div class="top-machine px-5 py-0  d-flex align-items-center">
            <div class="top-machine-inner row mx-auto h-100">
              <div class="logos d-flex justify-content-end py-3 px-0">
                <img src="@/assets/capgemini-icon.svg" alt="Capgemini" class="me-3">
                <img src="@/assets/abnamro-icon.svg" alt="ABN AMRO" class="me-3">
              </div>
              <div class="interface col-12 rounded p-3">
                <div class="col-12 d-flex align-items-center flex-column justify-content-between">
                  <Questions />
                </div>
              </div>
              <div class="brew-coffee d-flex justify-content-center align-items-center ">
                <BrewCoffee />
              </div>
            </div>
          </div>
          <div class="middle-machine col-11 position-relative">
            <div class="outlets col-3 mx-auto position-relative">
              <div class="col-6 position-absolute top-100 start-50 translate-middle">
                <div class="col-4 position-absolute"></div>
                <div class="col-4 position-absolute"></div>
              </div>
            </div>
            <svg id="coffee" class="position-absolute" width="259" height="180" viewBox="0 0 259 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M259 0H53L55.8218 23.0874C24.0777 28.8271 0 56.6017 0 90C0 127.555 30.4446 158 68 158C69.4425 158 70.8746 157.955 72.2948 157.867L75 180H238L259 0ZM57.7548 38.9028L70.4677 142.918C69.4854 142.972 68.496 143 67.5 143C38.5051 143 15 119.495 15 90.5C15 64.835 33.4162 43.4713 57.7548 38.9028Z"
                fill="white" fill-opacity="0.7" />
              <path d="M70 49H244L232.139 156H82.2489L70 49Z" fill="#3D2518" />
              <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="70" y="48" width="174"
                height="108">
                <path d="M70.4828 48.812H244L232.171 156H82.6977L70.4828 48.812Z" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect x="44.4818" y="30.7705" width="214.376" height="36.0831" fill="#BB7A2F" />
              </g>
            </svg>            
          </div>
          <div class="base-machine">
          </div>
        </div>
      </div>
      <div class="table"></div>
    </div>
  </main>
</template>
<script setup>
import Questions from './components/Questions.vue';
import BrewCoffee from './components/BrewCoffee.vue';

</script>

<style>
:root {
  --black: #333333;
}

* {
  /* outline: solid 1px; */
}


/* html, body {overflow: hidden}; */

main {
  background: linear-gradient(293.55deg, #17ABDA 20.47%, #0173B0 92.37%, #0070AD 98.71%)
}

.coffee-maker {
  max-width: 1000px;
}

.lid {
  height: 15px;
  background: linear-gradient(180deg, #242424 0%, #2E2E2E 100%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.beans {
  height: 60px;
  background: url('assets/coffeebeans.png');
}

svg#coffee {
  top: 100%;
  transform: translate(116.5%, -100%);
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
}

.top-machine-inner {
  width: 85% !important;
}

.logos {
  height: 10%;
}

.interface {
  overflow-y: hidden;
  overflow-y: scroll;
  background: var(--black);
  height: 75%;
  z-index: 1;
}

.interface::-webkit-scrollbar {
  display: none;
}

.brew-coffee {
  height: 15%
}

.middle-machine {
  background: linear-gradient(180deg, #6B6B6B 0%, #828282 100%);
  height: 300px;
}

.base-machine {
  background: #BDBDBD;
  height: 125px;
  border-radius: 8px 8px 0px 0px;
}

.outlets {
  height: 40px;
  background: #333333;
  border-radius: 0px 0px 8px 8px;
}

.outlets>div>div {
  height: 25px;
  background: #BDBDBD;
}

.outlets>div>div:nth-child(2) {
  position: absolute;
  right: 0;
}

.table {
  height: 100px;
  background: #724C1F;
}

p,
label,
.btn {
  color: white;
}
</style>
