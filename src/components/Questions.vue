<template>
  <div class="accordion col-10 p-5" id="accordionExample">
    <Category v-for="(c,n) in preferences.data" :key="c.title" :category="c" :name="n"/>
  </div>
</template>

<script>
import Category from './Category.vue';
import { usePreferencesStore } from '../store/preferences'

export default {
  components: { Category },
  setup() {
    const preferences = usePreferencesStore()
    window.stores = { preferences }
    return {
      preferences
    }
  }
}
</script>

<style>

</style>