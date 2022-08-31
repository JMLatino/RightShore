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
            <div id="pour-effects" class="invisible">
              <div class="pour-effect"></div>
              <div class="pour-effect"></div>
            </div>
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

                  <mask id="coffee">
                    <rect width="100%" height="100%" fill="black" />
                    <path d="M70 49H244L232.139 156H82.2489L70 49Z" fill="white" />
                  </mask>

                  <g mask="url(#coffee)">
                    <g id="coffee-content" class="invisible">
                      <path id="waveShape"
                        d="M395 300V2.5C395 2.5 394.02 2.4 393.203 2.4C393.203 2.4 351.553 0.1 327.053 0C302.553 0 260.74 2.4 260.74 2.4C240.65 3.5 211.25 4.2 208.637 4.3C205.37 4.2 176.46 3.5 156.37 2.4C156.37 2.4 114.23 0.1 89.73 0C65.23 0 23.09 2.4 23.09 2.4C3 3.5 -26.5633 4.2 -29.1767 4.3C-32.4433 4.2 -61.8433 3.5 -81.77 2.4C-81.77 2.4 -86.8333 2.1 -95 1.7V300H395Z" />
                    </g>
                    <foreignObject x="83" y="57" width="150" height="150">
                      <p id="recommendation" class="text-center fw-bold" xmlns="http://www.w3.org/1999/xhtml">
                      </p>
                    </foreignObject>
                  </g>
                </svg>

              </div>
            </div>
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
  height: 12px;
  background: linear-gradient(180deg, #242424 0%, #2E2E2E 100%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.beans {
  height: 40px;
  background: url('assets/coffeebeans.png');
  background-position: 100% 100%;
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
  z-index: 2;
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
  z-index: 1;
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
  background: url('assets/table.png');
  /* background: #724C1F; */
}

p,
label,
.btn {
  color: white;
}

#recommendation {
  z-index: 3;
  /* color: white; */
  /* color: #d6d6d6; */
}

#coffee-content {
  z-index: 3;
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

.pour {
  width: 14px;
  height: 200px;
  position: absolute;
  top: 0%;
  border-radius: 10px;
  opacity: 0;
  background: #8C5926;
  animation: pourAction 6s cubic-bezier(1, .04, .74, .2) 1;
  animation-timing-function: linear;
  animation-duration: 4s;
}

.moved {
  top: 20px;
}

#coffee-cup .fill {
  animation-name: fillAction;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(.2, .6, .8, .4);
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

#coffee-cup #waveShape {
  animation-name: waveAction;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-duration: 1.2s;
  fill: #8C5926;
}

.pour:nth-child(1) {
  left: 45.1%;
}

.pour:nth-child(2) {
  left: 53.2%;
}

#recommendation {
  color: #d6d6d6;
  z-index: 4;
}

@keyframes fillAction {
  0% {
    transform: translate(0, 200px);
  }

  100% {
    transform: translate(0, -15px);
  }
}

@keyframes waveAction {
  0% {
    transform: translate(-150px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes pourAction {
  0% {
    opacity: 1;
    transform: translateY(-350px);
  }

  40% {
    height: 400px;
  }
  
  80% {
    height: 180px;
  }
  
  100% {
    opacity: 1;
    height: 20px;
    transform: translateY(175px);
  }
}
</style>
