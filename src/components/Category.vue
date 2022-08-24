<template>
  <div class="accordion-item">
    <h2 class="accordion-header w-100 " :id="name">
      <button class="accordion-button w-100" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + name" aria-expanded="false" :aria-controls="name">
        <div class="text-light">
          {{ category.title }} {{category.progress}}
        </div>
        <div class="ms-auto p-2 text-light">{{preferences.answered(category.catIndex)}} / {{category.entries.length}}</div>
      </button>
    </h2>
    <div 
      :id="'collapse' + name" 
      class="accordion-collapse"
      :class="{
        'collapse alternative': name !== 0
      }" 
      :aria-labelledby="name"
      data-bs-parent="#accordionExample">
      <div class="accordion-body fixed-height-accordion overflow-hidden h-100 p-0">
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
  display: none;;
}
.fixed-height-accordion {
  height: 255px;
  overflow-y: scroll;
}
  button.accordion-button {
    width: 500px;
    background: #17ABDA!important;
  }

  .accordion-item {
    border: none!important;
  }
  
  .accordion-collapse .collapse .alternative{
    background: red!important;
    opacity: 0.1!important;
    
  }
</style>
