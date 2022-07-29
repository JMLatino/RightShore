<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main class="container shadow p-3 mb-5 bg-body rounded">
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne"> Design Principles </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Time to market</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Cost Consideration</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Quality</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Process Maturity</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Innovative delivery</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Sustainability</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Governance</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Project Characteristics
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Size</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Project Timeline</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">CIA Ratings</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Compliance/regulatory</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Domain Intense</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">New age technology</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Packaged Solution</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Legacy Dominance</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Sourcing Requirement
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Complexity</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Ease of collaboration</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Cultural Alignment</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
              <div class="mb-3">
                <label for="time-to-market" class="form-label">Incumbent Transition</label>
                <input type="email" class="form-control" id="time-to-market">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
