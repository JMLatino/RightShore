<template>
  <div
    class="modal fade"
    id="categoriesModal"
    tabindex="-1"
    aria-labelledby="categoriesModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content p-3">
        <div class="modal-header border-0">
          <h5 class="modal-title text-white" id="categoriesModalLabel">
            Tech category
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row pt-2 pb-5">
          <p class="mb-3">Select up to 5 categories</p>
          <div
            v-for="(categoryOption, i) in categoryOptions[0].answers[0].sort()"
            :key="i"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="form-check">
              <label :for="`q${categoryOptions[0].id}-${i + 1}`">
                <input
                  type="checkbox"
                  :ref="`target${i + 1}`"
                  :id="`q${categoryOptions[0].id}-${i + 1}`"
                  class="form-check-input"
                  :value="i + 1"
                  @click="setAnswer(categoryOptions[0].id, i + 1)"
                  :disabled="inputs.length > 4 && inputs.indexOf(i + 1) === -1"
                />
                {{ categoryOption }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePreferencesStore } from "../store/preferences";
export default {
  name: "ModalTechCategories",
  data() {
    return {
      inputs: [],
    };
  },
  computed: {
    modalAnswers() {
      return this.preferences.modalAnswers;
    },
    categoryOptions() {
      return this.preferences.data[3].entries.filter((el) => {
        return el.id == "23";
      });
    },
  },
  methods: {
    setAnswer(index, answer) {
      this.preferences.setPreference({ index, answer });
      const target = this.$refs[`target${answer}`][0];
      if (!target.checked) {
        this.preferences.uncheckModalAnswer(answer);
      }
    },
    getSelectionsFromLocalStorage() {
      for (const el of JSON.parse(localStorage.getItem("preferences"))
        .modalAnswers) {
        document.getElementById(`q23-${el}`).checked = true;
      }
    },
  },
  mounted() {
    this.getSelectionsFromLocalStorage();
    this.inputs = this.preferences.modalAnswers;
  },
  updated() {
    this.inputs = this.preferences.modalAnswers;
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
label {
  font-size: 12px;
}

.form-check-input:checked {
  background-color: var(--blue);
  border-color: var(--darkBlue);
}

.modal-content {
  background: rgba(51, 51, 51, 0.99);
  border: solid 1px rgba(247, 243, 243, 0.2);
  border-radius: 6px !important;
}

@media only screen and (max-width: 992px) {
  #categoriesModal > div {
    max-width: 80% !important;
  }
}
</style>
