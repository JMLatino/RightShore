<script>
import Entry from './Entry.vue'

export default {
  components: { Entry },
  props: ['category'],
};
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="true" aria-controls="collapseOne"> {{ category.title }} </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Entry v-for="e in category.entries" :key="e" :entry="e" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
