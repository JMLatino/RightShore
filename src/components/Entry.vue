<template>
  <div class="m-3 d-flex">
    <span class="col">
      <label for="time-to-market" class="form-label">{{ entry.question }}</label>
    </span>
    <div class="btn-group d-flex justify-content-end" role="group" aria-label="Basic radio toggle button group">
      <template v-for="(answer, answerId) in entry.answers" :key="answer">
        <input type="radio" class="btn-check" :name="`btnradio-q${entry.id}`" :id="`q${entry.id}-${answerId}`"
          autocomplete="off" @click="setAnswer(entry.id, answerId)" @change="(e) => markChecked(e)">
        <label :for="`q${entry.id}-${answerId}`" class="btn btn-active p-2">
          {{ answer }}
        </label>
      </template>
    </div>
  </div>
</template>
<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  props: ['entry'],
  data() {
    return {
      storedSelections: []
    }
  },
  methods: {
    setAnswer(index, answer) {
      this.preferences.setPreference({ index, answer })
    },
    markChecked(e) {
      document.getElementById(e.target.id).checked = true;
    }
  },
  mounted() {
    () => {
      for (const [question, answer] of Object.entries(JSON.parse(localStorage.getItem("preferences")).answers)) {
        document.getElementById(`${question}-${answer}`).checked = true;
      }
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
label {
  font-size: 12px;
}

.btn {
  border: solid 1px rgb(247, 243, 243);
  border-radius: 6px !important;
}

label.btn:not(label.btn:last-child) {
  margin-right: 0.75em;
}

.btn-active {
  color: #FFF;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #17ABDA;
  --bs-btn-active-color: white;
  --bs-btn-active-border-color: #0070AD;
}
</style>