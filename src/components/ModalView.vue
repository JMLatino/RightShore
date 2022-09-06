<template>
  <div v-if="!preferences.isModal">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Categories
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              Tech category
            </h5>
            <!-- {{ selectedCategories }} -->
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body row pt-2 pb-5">
            <p class="mb-3">Select up to 3 categories</p>
            <div
              v-for="(subQuestion, n) in subQuestions[0].answers.sort()"
              :key="n"
              class="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div class="form-check">
                <label>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    v-model="inputs"
                    :value="n"
                    :disabled="inputs.length > 2 && inputs.indexOf(n) === -1"
                  />
                  {{ subQuestion }}
                </label>
              </div>
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
  name: "ModalView",
  data() {
    return {
      inputs: [],
    };
  },
  computed: {
    subQuestions() {
      return this.preferences.data[3].entries.filter((el) => {
        return el.id == "23";
      });
    },
    selectedCategories() {
      return console.log(this.inputs);
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
label {
  font-size: 12px;
}
.modal-header {
  border-bottom: none;
}
.form-check-input:checked {
  background-color: #17abda;
  border-color: #0070ad;
}
.modal-content {
  background: var(--black);
  border: solid 1px rgb(247, 243, 243);
  border-radius: 6px !important;
}
@media only screen and (max-width: 992px) {
  #exampleModal > div {
    max-width: 80% !important;
  }
}
</style>
