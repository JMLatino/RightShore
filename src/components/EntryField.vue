<template>
  <div class="m-3 d-flex">
    <span class="col">
      <label for="time-to-market" class="form-label">{{
        entry.question
      }}</label>
    </span>
    <div
      class="btn-group d-flex justify-content-end"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <template v-for="(answer, answerId) in entry.answers" :key="answer">
        <input
          type="radio"
          class="btn-check"
          :name="`btnradio-q${entry.id}`"
          :id="`q${entry.id}-${answerId}`"
          autocomplete="off"
          @click="setAnswer(entry.id, answerId)"
          @change="(e) => markChecked(e)"
        />
        <label
          v-if="typeof answer === 'string'"
          :for="`q${entry.id}-${answerId}`"
          class="btn btn-active p-2"
        >
          {{ answer }}
        </label>
        <div v-else id="q-23">
          <div class="text-light pb-2">
            <div for="Selected 1" class="d-flex justify-content-end py-2 ps-1">
              Selected 1
            </div>
            <div for="Selected 2" class="d-flex justify-content-end py-2 ps-1">
              Selected 2
            </div>
            <div for="Selected 3" class="d-flex justify-content-end py-2 ps-1">
              Selected 3
            </div>
            <div for="Selected 4" class="d-flex justify-content-end py-2 ps-1">
              Selected 4
            </div>
            <div for="Selected 5" class="d-flex justify-content-end py-2 ps-1">
              Selected 5
            </div>
          </div>
          <label
            type="label"
            for="q-23"
            class="btn btn-active"
            data-bs-toggle="modal"
            data-bs-target="#categoriesModal"
          >
            {{ true ? "Select categories" : "Select categories" }}
          </label>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { usePreferencesStore } from "../store/preferences";
export default {
  name: "EntryField",
  props: ["entry"],
  methods: {
    keepSelection() {
      for (const [question, answer] of Object.entries(
        JSON.parse(localStorage.getItem("preferences")).answers
      )) {
        document.getElementById(`${question}-${answer}`).checked = true;
      }
    },
    setAnswer(index, answer) {
      this.preferences.setPreference({ index, answer });
    },
    markChecked(e) {
      document.getElementById(e.target.id).checked = true;
    },
  },
  mounted() {
    this.keepSelection();
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
label,
#q-23 {
  font-size: 12px;
}

.btn {
  border: solid 1px rgb(247, 243, 243);
  border-radius: 6px !important;
}

label.btn:not(label.btn:last-child) {
  margin-right: 0.75em;
}
.btn:hover {
  border: solid 1px #17abda;
}
.btn-active {
  color: #fff;
  --bs-btn-active-color: white;
  --bs-btn-active-border-color: #0070ad;
  --bs-btn-active-bg: #17abda;
}
</style>
