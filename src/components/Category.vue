<script>
import Entry from './Entry.vue'

export default {
  components: { Entry },
  props: ['category', 'name'],

};
</script>

<template>

  <div class="accordion-item">
    <h2 class="accordion-header" :id="name">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + name" aria-expanded="false" :aria-controls="name">
        {{ category.title }} {{category.progress}}
      </button>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
          aria-label="Animated striped example" :aria-valuenow="category.progress" aria-valuemin="0" aria-valuemax="100"
          style="width:30%"></div>
      </div>
    </h2>
    <div :id="'collapse' + name" class="accordion-collapse collapse" :aria-labelledby="name"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Entry v-for="e in category.entries" :key="e" :entry="e" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
