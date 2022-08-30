<template>
  <div class="accordion-item">
    <h2 class="accordion-header w-100 mb-2" :id="name">
      <button class="accordion-button d-flex rounded w-100 px-3 py-1" :class="{ 'completed': isFilledIn }" type="button"
        data-bs-toggle="collapse" :data-bs-target="'#collapse' + name" :aria-expanded="'false'"
        :aria-controls="name">
        <div> 
          {{ category.title }}
        </div>
        <div class="ms-auto p-2">{{ currentCount }} / {{ category.entries.length }}
        </div>
      </button>
    </h2>
    <div :id="'collapse' + name" class="accordion-collapse collapse" :class="{ 'show': name === 0 }"
      :aria-labelledby="name" data-bs-parent="#accordionExample">
      <div class="accordion-body overflow-hidden p-0">
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
    currentCount() {
      // return console.log(Object.keys(this.preferences.answers).length)
      return this.preferences.answered(this.category.catIndex)
      // return Object.keys(this.preferences.answers).length
      // return this.preferences.answered(Object.keys(this.preferences.answers).length)
    },
    isFilledIn() {
      console.log('isfilledin ', this.preferences.answered(this.category.catIndex) === this.category.entries.length)
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

.accordion-item:last-child {
  margin-bottom: 0 !important;
}

.accordion-button:not(.collapsed) {
  box-shadow: none;
}

.accordion-button::after {
  margin-left: 5px;
  display: none;
}

.fixed-height-accordion {
  height: 255px;
  overflow-y: scroll;
}

.accordion-item {
  background: none;
}

.accordion-button {
  width: 500px;
  background: #FFF;
  color: var(--black);
}

.accordion-item {
  border: none;
}

.accordion-collapse.collapsed {
    background:#ccc!important;
}

.accordion-button.completed {
  background: #87C4D6;
  color: white;
}
.accordion-button.reset {
  background: #FFF;
  color: var(--black);
}

</style>
