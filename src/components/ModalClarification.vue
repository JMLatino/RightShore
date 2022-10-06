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
            <p>
              This application is built by to help recommend the best strategy
              by...
            </p>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row mb-0">
          <p v-html="clarification.body" class="m-0 py-0"></p>
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
</style>
