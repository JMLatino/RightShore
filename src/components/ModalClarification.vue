<template>
  <div
    class="modal fade"
    id="modalClarification"
    tabindex="-1"
    aria-labelledby="clarificationModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content p-3">
        <div class="modal-header">
          <h5
            v-if="clarification.title"
            class="modal-title"
            id="clarificationModalLabel"
          >
            {{ clarification.title }}
          </h5>
          <h5 v-else class="modal-title" id="clarificationModalLabel">
            How we determine this
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row pt-0">
          <p
            v-if="clarification.body"
            v-html="clarification.body"
            class="m-0 py-0"
          ></p>
          <span v-else>
            <p class="text-black mb-0">
              We believe the
              <b>{{ recommendation[0].primary }}</b> with
              <b>{{ recommendation[0].secondary }}</b> combination is the best
              strategy with which to set up your project considering your
              constraints.
            </p>
            <div class="d-flex justify-content-center m-2">
              <div
                class="col-4 text-center d-flex justify-content-center align-items-center flex-column"
              >
                <h3 class="mb-0">{{ recommendation[0].primary }}</h3>
                <h2 class="mb-0 d-flex justify-content-center">
                  {{ recommendation[0].percentage }} %
                </h2>
              </div>
              <div
                class="col-4 text-center d-flex flex-column justify-content-center align-items-center"
              >
                <h3 class="mb-0">{{ recommendation[0].secondary }}</h3>
                <h2 class="mb-0 d-flex justify-content-center">
                  {{ 100 - recommendation[0].percentage }} %
                </h2>
              </div>
            </div>
            <p class="text-black">
              Our recommendation system is designed in such a way where
              recommendation can be accurately calculated using Machine Learning
              technology. veritatis nobis aliquam. Corrupti harum nisi porro
              repudiandae asperiores quibusdam similique nobis officia unde!
            </p>
            <p class="text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis vero, ad saepe quisquam doloremque ullam velit
              veritatis nobis aliquam. Corrupti harum nisi porro repudiandae
              asperiores quibusdam similique nobis officia unde!
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePreferencesStore } from "../store/preferences";

export default {
  name: "ModalClarification",
  data() {
    return {
      inputs: [],
    };
  },
  computed: {
    clarification() {
      return this.preferences.clarification;
    },
    recommendation() {
      return this.preferences.recommendationOptions;
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
.modal-content {
  background: rgba(255, 255, 255, 0.9);
  border: solid 1px rgba(247, 243, 243, 0.2);
}

.modal-header {
  border-bottom: none;
}
</style>
