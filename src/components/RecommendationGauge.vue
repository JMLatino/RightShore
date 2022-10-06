<template>
  <div class="text-white w-75">
    <div class="row gauge col-12 rounded p-2">
      <div
        class="col-4 text-center d-flex justify-content-center align-content-center flex-column"
      >
        <h3 class="mb-0">{{ recommendation1[0] }}</h3>
        <h2 class="mb-0 d-flex justify-content-center">
          {{ recommendation1[1] }} %
        </h2>
      </div>
      <div
        class="col-4 text-center d-flex flex-column justify-content-center align-items-center"
      >
        <h3 class="mb-0">{{ recommendation2[0] }}</h3>
        <h2 class="mb-0 d-flex justify-content-center">
          {{ recommendation2[1] }} %
        </h2>
      </div>
      <div
        class="col-4 text-center d-flex flex-column justify-content-center align-items-center"
        @click="handleClear"
      >
        <label
          type="label"
          for="q-23"
          class="btn btn-active"
          data-bs-toggle="modal"
          data-bs-target="#categoriesModal"
        >
          <p
            class="mb-0"
            data-bs-toggle="modal"
            data-bs-target="#modalClarification"
          >
            How we came to this recommendation
          </p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { usePreferencesStore } from "../store/preferences";
export default {
  name: "RecommendationGauge",
  data() {
    return {
      recommendation1: ["Onshore", 80],
      recommendation2: ["Offshore", 20],
    };
  },
  methods: {
    handleClear() {
      this.preferences.clearClarification();
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
.btn {
  border: solid 1px rgb(247, 243, 243);
  border-radius: 6px !important;
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

.gauge {
  background: var(--black);
}

.percentage {
  line-height: 48px;
}
</style>
