<template>
  <div class="col-12 d-flex justify-content-between">
    <button
      type="button"
      :disabled="!isReset"
      class="btn btn-reset mb-3 px-4 py-1"
      @click="handleReset"
    >
      Reset
    </button>
    <button
      type="button"
      :disabled="!isComplete"
      tabindex="0"
      class="btn btn-custom mb-3 px-4 pt-0"
      @click="brewStrategy"
    >
      Brew your strategy
    </button>
  </div>
</template>

<script>
import { usePreferencesStore } from "../store/preferences";
export default {
  data() {
    return {
      coffeeResults: [
        "Onshore Heavy <div>with</div> Offshore presence",
        "Nearshore Heavy <div>with</div> Offshore presence",
        "Offshore Heavy <div>with</div> Onshore presence",
      ],
    };
  },
  methods: {
    handleReset() {
      const radioBtn = document.getElementsByClassName("btn-check");
      const coffeContent = document.getElementById("coffee-content");
      const pourEffects = document.getElementById("pour-effects");
      const pourElements = document.getElementsByClassName("pour-effect");

      for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
      }
      document.getElementById("recommendation").innerHTML = "";
      document.getElementById("waveShape").classList.remove("animate");
      coffeContent.classList.remove("visible");
      coffeContent.classList.add("invisible");
      coffeContent.classList.remove("fill");

      pourEffects.classList.add("invisible");
      pourEffects.classList.remove("visible");

      for (let i = 0; i < pourElements.length; i++) {
        pourElements[i].classList.remove("pour");
        pourElements[i].classList.remove("moved");
      }
      window.localStorage.removeItem("preferences");
      // this.preferences.answers = {}
    },
    brewStrategy() {
      window.scrollTo(0, document.body.scrollHeight);
      this.preferences.handleClick();
      const option = this.preferences.answers.q1;
      if (this.coffeeResults[option] !== undefined)
        document.getElementById("recommendation").innerHTML =
          this.coffeeResults[option];
    },
  },
  computed: {
    isComplete() {
      return Object.keys(this.preferences.answers).length === 23;
    },
    isReset() {
      return Object.keys(this.preferences.answers).length;
    },
  },
  setup() {
    const preferences = usePreferencesStore();
    window.stores = { preferences };
    return {
      preferences,
    };
  },
};
</script>

<style scoped>
.btn-custom,
.btn-reset {
  color: white;
  font-size: 1.5em;
  border-radius: 13px;
  background: #17abda;
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #17abda;
  --bs-btn-active-color: white;
  --bs-btn-active-bg: #17abda;
  --bs-btn-active-border-color: #0070ad;
}

.btn-reset {
  background: #979797;
}
</style>
