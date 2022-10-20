<template>
  <div class="col-12 d-flex justify-content-between">
    <button
      type="button"
      :disabled="!isResetClicked"
      class="btn btn-reset mb-3 px-4 py-1"
      :class="{ active: isResetClicked }"
      @click="handleReset"
    >
      Reset
    </button>
    <button
      type="button"
      :disabled="!allQuestionsAnswered"
      tabindex="0"
      class="btn btn-custom mb-3 px-4 pt-0"
      :class="{ complete: allQuestionsAnswered }"
      @click="handleBrewYourStrategyClick"
    >
      Brew your strategy
    </button>
  </div>
</template>

<script>
import { usePreferencesStore } from "@/store/preferences";
export default {
  methods: {
    handleReset() {
      const coffeeContent = document.getElementById("coffee-content");
      const pourEffects = document.getElementById("pour-effects");
      const pourElements = document.getElementsByClassName("pour-effect");
      for (const btnCheck of document.getElementsByClassName("btn-check")) {
        btnCheck.checked = false;
      }

      for (const btnCheck of document.getElementsByClassName(
        "form-check-input"
      )) {
        btnCheck.checked = false;
      }

      document.getElementById("waveShape").classList.remove("animate");
      coffeeContent.classList.remove("visible");
      coffeeContent.classList.add("invisible");
      coffeeContent.classList.remove("fill");

      pourEffects.classList.add("invisible");
      pourEffects.classList.remove("visible");

      for (let i = 0; i < pourElements.length; i++) {
        pourElements[i].classList.remove("pour");
        pourElements[i].classList.remove("moved");
      }
      this.preferences.resetAllAnswers();
    },
    handleBrewYourStrategyClick() {
      window.scrollTo(0, document.body.scrollHeight);
      this.preferences.handleBrewYourStrategyClick();
    },
  },
  computed: {
    allQuestionsAnswered() {
      return Object.keys(this.preferences.answers).length === 23;
    },
    isResetClicked() {
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
  color: #ffffff;
  font-size: 1.5em;
  border-radius: 13px;
  background: var(--lightGrey);
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-bg: var(--blue);
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-bg: var(--blue);
  --bs-btn-active-border-color: var(--darkBlue);
}

.btn.btn-custom.complete {
  background: var(--blue);
}

.active {
  background: linear-gradient(180deg, #6b6b6b 0%, #828282 100%);
}
</style>
