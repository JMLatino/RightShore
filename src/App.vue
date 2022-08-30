<template>
  <main class="min-vh-100 min-vw-100 d-flex align-items-end">
    <div class="container rightshore p-0 mt-2">
      <div class="coffee-maker col-10 mx-auto">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="lid col-11"></div>
          <div class="beans col-11"><span></span></div>
          <div class="edge"></div>
          <div class="top-machine px-5 py-0 d-flex align-items-center">
            <div class="top-machine-inner row mx-auto h-100">
              <div class="logos d-flex justify-content-end py-3 px-0">
                <img src="@/assets/capgemini-icon.svg" alt="Capgemini" class="me-3">
                <img src="@/assets/abnamro-icon.svg" alt="ABN AMRO" class="me-3">
              </div>
              <div class="interface col-12 rounded p-2 d-flex justify-content-center align-items-center">
                <div class="interface-inner col-12">
                  <div class="col-12 d-flex align-items-center flex-column justify-content-between">
                    <Questions />
                  </div>
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
            <div id="coffee-cup">
              <div>
                <svg id="espresso" class="position-absolute" width="259" height="180" viewBox="0 0 259 180" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M259 0H53L55.8218 23.0874C24.0777 28.8271 0 56.6017 0 90C0 127.555 30.4446 158 68 158C69.4425 158 70.8746 157.955 72.2948 157.867L75 180H238L259 0ZM57.7548 38.9028L70.4677 142.918C69.4854 142.972 68.496 143 67.5 143C38.5051 143 15 119.495 15 90.5C15 64.835 33.4162 43.4713 57.7548 38.9028Z"
                    fill="white" fill-opacity="0.7" />
                  <clipPath id="coffee">
                    <path d="M70 49H244L232.139 156H82.2489L70 49Z" fill="#3D2518" />
                  </clipPath>

                  <g clip-path="url(#coffee)">
                    <g class="fill">
                      <path id="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" />
                    </g>
                    <foreignObject x="100" y="100" width="115" height="50">
                      <h4 id="recommendation" class="text-light text-center fw-bold" xmlns="http://www.w3.org/1999/xhtml">
                      </h4>
                    </foreignObject>
                  </g>
                </svg>
              </div>
            </div>
            <!-- <img id="cappuccino" src="./assets/cappuccino.svg" alt="Cappuccino"> -->
          </div>
          <div class="base-machine">
          </div>
        </div>
      </div>
      <div class="table mb-0"></div>
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

body {
  background: linear-gradient(293.55deg, #17ABDA 20.47%, #0173B0 92.37%, #0070AD 98.71%);
}

html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.rightshore {
  animation: zoom-in-zoom-out 2s ease-in-out 1;
  max-width: 987px;
  min-width: 600px;
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

svg#espresso,
#cappuccino {
  top: 40%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 6.5%;
}

#cappuccino {
  top: 30%;
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
  background: var(--black);
  height: 75%;
  z-index: 1;
}

.interface-inner {
  height: 100%;
  z-index: -1;
  overflow-y: hidden !important;
  overflow-y: scroll !important;
}

.interface-inner::-webkit-scrollbar {
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
  height: 58px;
  background: #333333;
  border-radius: 0px 0px 8px 8px;
}

.outlets>div>div {
  height: 19px;
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

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(0.5, 0.5);
    transform: translateY(-100%);
  }

  100% {
    transform: scale(1, 1);
    transform: translateY(0);
  }
}

#coffee-cup .fill {
  animation-name: coffeeFill;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(.2, .6, .8, .4);
  animation-duration: 10s;
  animation-fill-mode: forwards;
}

#coffee-cup .animate {
  animation-timing-function: linear;
  animation-duration: 0.5s;
  fill: #8C5926;
  stroke: #3D2518;
  stroke-width: 10px;
}

@keyframes coffeeFill {
  0% {
    transform: translate(100px, 150px);
  }

  100% {
    transform: translate(0px, -15px);
  }
}

</style>
