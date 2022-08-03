<template>
  <div class="m-3 d-flex">
    <span class="col-3">
      <label for="time-to-market" class="form-label">{{ entry.question }}</label>
    </span>
    <span class="col">
    <button v-for="(answer, answerId) in entry.answers"
      :key="answer" @click="(e) => setAnswer(entry.id, answerId, e)"
      class="p-3 btn mx-1"
      >
        {{ answer }}
      </button>
    </span>
  </div>
</template>
<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  props: ['entry'],
  methods: {
    setAnswer(index, answer, e) {
      e.target.classList.add('btn-secondary');
      this.preferences.setPreference({ index, answer })
    },
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
