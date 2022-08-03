<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="name">
      <button class="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + name" aria-expanded="false" :aria-controls="name">
        <div>
          {{ category.title }} {{category.progress}}
        </div>
        <div class="ms-auto p-2">{{preferences.answered(category.catIndex)}} / {{category.entries.length}}</div>
      </button>
    </h2>
    <div :id="'collapse' + name" class="accordion-collapse collapse" :aria-labelledby="name"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Entry v-for="e in category.entries" :key="e" :entry="e" />
      </div>
    </div>
  </div>
</template>
<script>
import Entry from './Entry.vue'
import { usePreferencesStore } from '../store/preferences'
export default {
  components: { Entry },
  props: ['category', 'name'],
  setup() {
    const preferences = usePreferencesStore()
    window.stores = { preferences }
    return {
      preferences
    }
  }
};
</script>
<style scoped>
.accordion-button::after {
  margin-left: 5px;
}
</style>
