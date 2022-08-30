<template>
  <div class="col-12 d-flex justify-content-between">
    <button type="button" :disabled="!isReset" class="btn btn-reset mb-3 px-4 py-1" @click="handleReset">
      Reset
    </button>
    <button type="button" :disabled="!isComplete" tabindex="0" class="btn btn-custom mb-3 px-4 py-1" @click="brewStrategy">
      Brew your strategy
    </button>
  </div>
</template>

<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  data() {
    return {
      coffeeResults: ['Onshore', 'Nearshore', 'Offshore'],
    }
  },
  methods: {
    handleReset() {
      const radioBtn = document.getElementsByClassName("btn-check")
      for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
      }
      this.answers = {}
      document.getElementById('recommendation').innerHTML = "";
      document.getElementById('waveShape').classList.remove('animate');
      console.log(this.answers)
    },
    brewStrategy() {
      window.scrollTo(0, document.body.scrollHeight);
      this.preferences.toggleCoffee();
      this.preferences.handleClick();
      const option = this.preferences.answers.q1;
      document.getElementById('recommendation').innerHTML = this.coffeeResults[option]
    },
  },
  computed: {
    isComplete() {
      return Object.keys(this.preferences.answers).length === 24;
    },
    isReset() {
      return Object.keys(this.preferences.answers).length
    }
  },
  setup() {
    const preferences = usePreferencesStore()
    window.stores = { preferences }
    return {
      preferences
    }
  }
}
</script>

<style scoped>
.btn-custom,
.btn-reset {
  color: white;
  font-size: 1.5em;
  border-radius: 13px;
  background: #17ABDA;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #17ABDA;
  --bs-btn-active-color: white;
  --bs-btn-active-bg: #17ABDA;
  --bs-btn-active-border-color: #0070AD;
}

.btn-reset {
  background: #979797;
}

</style>
