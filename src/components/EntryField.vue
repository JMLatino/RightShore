<template>
  <div class="m-3 d-flex justify-content-between flex-sm-row flex-column">
    <div class="d-flex gap-3">
      <label class="form-label">
        <span class="position-relative">
          {{ entry.question }}
          <img
            src="../assets/questionmark.svg"
            data-bs-toggle="modal"
            data-bs-target="#modalClarification"
            @mouseover="setExplanation(entry)"
            height="22"
            role="button"
            alt="Question"
          />
        </span>
      </label>
    </div>
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
        <div v-else id="q-23" class="d-flex flex-column align-items-end">
          <label
            type="label"
            for="q-23"
            class="btn btn-active m-0 mb-2"
            :class="{ completed: isModalAnswered }"
            data-bs-toggle="modal"
            data-bs-target="#categoriesModal"
          >
            {{ isModalAnswered ? "Change" : "Select" }} categories
          </label>
          <div
            v-if="associatedAnswer"
            class="d-flex flex-column gap-2 text-light"
          >
            <div
              v-for="(item, i) in associatedAnswer"
              :key="i"
              class="d-flex justify-content-end"
            >
              <p class="mb-0">
                {{ i === associatedAnswer.length - 1 ? item : item + "," }}
              </p>
            </div>
          </div>
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
  computed: {
    associatedAnswer() {
      if (Object.keys(this.preferences.answers === "q23")) {
        return this.modalAnswers.map((i) =>
          Object.values(this.entry.answers[0][i - 1]).join("")
        );
      }
      return false;
    },
    isModalAnswered() {
      if (this.preferences.modalSelected === "Change") {
        return true;
      }
      return false;
    },
    modalAnswers() {
      return this.preferences.modalAnswers;
    },
  },
  methods: {
    setExplanation(e) {
      this.preferences.setExplanation(e);
    },
    getSelectionsFromLocalStorage() {
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
    this.getSelectionsFromLocalStorage();
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
  border: solid 1px var(--blue);
}
.btn-active {
  color: #fff;
  --bs-btn-active-color: white;
  --bs-btn-active-border-color: var(--darkBlue);
  --bs-btn-active-bg: var(--blue);
}
.completed {
  border-color: var(--darkBlue);
  background: var(--blue);
}
</style>
