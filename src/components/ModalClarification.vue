<template>
  <div
    class="modal fade"
    id="modalClarification"
    tabindex="-1"
    aria-labelledby="categoriesModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content p-3">
        <div class="modal-header">
          <h5
            v-if="clarification.title"
            class="modal-title text-white"
            id="categoriesModalLabel"
          >
            {{ clarification.title }}
          </h5>
          <h5 v-else class="modal-title text-white" id="categoriesModalLabel">
            How we came to this decision
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row mb-0">
          <p
            v-if="clarification.body"
            v-html="clarification.body"
            class="m-0 py-0"
          ></p>
          <span v-else>
            <p>
              We believe the
              <b>{{ preferences.recommendation.primary }}</b> with
              <b>{{ preferences.recommendation.secondary }}</b> combination is
              the best strategy with which to set up your project considering
              your constraints.
            </p>
            <p>
              Our recommendation system is designed in such a way where
              recommendation can be accurately calculated using Machine Learning
              technology. veritatis nobis aliquam. Corrupti harum nisi porro
              repudiandae asperiores quibusdam similique nobis officia unde!
            </p>
            <p>
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
  background: var(--black);
  border: solid 1px rgba(247, 243, 243, 0.2);
}
.modal-header {
  border-bottom: none;
}
</style>
