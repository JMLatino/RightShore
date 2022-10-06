<template>
  <div
    class="position-absolute top-50 start-50 translate-middle text-white w-75"
  >
    <div class="row">
      <div
        class="col-4 text-center d-flex justify-content-center align-content-center flex-column"
      >
        <h3>Recommendation</h3>
        <h2>{{ recommendation }}</h2>
      </div>
      <div
        class="col-4 text-center d-flex flex-column justify-content-center align-items-center"
      >
        <h3>Level</h3>
        <h2>{{ percentage }} %</h2>
      </div>
      <div
        class="col-4 text-center text-center d-flex flex-column justify-content-center align-items-center"
      >
        <span> Read about this recommendation </span>
        <!-- <button data-bs-toggle="modal" data-bs-target="#modalClarification">
          Click
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationGauge",
  data() {
    return {
      recommendation: "Onshore",
      percentage: 0,
    };
  },
};
</script>

<style></style>
