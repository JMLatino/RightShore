<template>
  <div class="m-3 d-flex">
    <span class="col-6">
      <label for="time-to-market" class="form-label">{{ entry.question }}</label>
    </span>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <template v-for="(answer, answerId) in entry.answers" :key="answer">
        <input type="radio" class="btn-check" :name="`btnradio-${entry.id}`" :id="`${entry.id}-${answerId}`" autocomplete="off"
        @click="setAnswer(entry.id, answerId)" @change="(e) => markChecked(e)">
        <label class="btn btn-outline-primary" :for="`${entry.id}-${answerId}`">{{ answer }}</label>
      </template>
    </div>
  </div>
</template>
<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  props: ['entry'],
  methods: {
    setAnswer(index, answer) {
      // e.target.checked = true;
      this.preferences.setPreference({ index, answer })
    },
    markChecked(e) {
      document.getElementById(e.target.id).checked = true;
      console.log(e.target);
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
</style>
