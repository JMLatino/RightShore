<template>
  <div class="accordion-item">
    <h2 class="accordion-header w-100" :id="name">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + name" aria-expanded="false" :aria-controls="name">
        <div>
          {{ category.title }} {{category.progress}}
        </div>
        <div class="ms-auto p-2">{{preferences.answered(category.catIndex)}} / {{category.entries.length}}</div>
      </button>
    </h2>
    <div :id="'collapse' + name" class="accordion-collapse collapse" :aria-labelledby="name"
      data-bs-parent="#accordionExample">
      <div class="accordion-body fixed-height-accordion overflow-hidden">
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
  computed: {
    isFilledIn() {
      return this.preferences.answered(this.category.catIndex) === this.category.entries.length
    }
  },
  setup() {
    const preferences = usePreferencesStore()
    window.stores = { preferences }
    return {
      preferences,
    }
  }
};
</script>


<style scoped>
.accordion-body {
  background: var(--black);
}
.accordion-button::after {
  margin-left: 5px;
}
.fixed-height-accordion {
  height: 255px;
  overflow-y: scroll;
}
  button.accordion-button {
    width: 500px;
    background: #17ABDA!important;
  }
</style>
