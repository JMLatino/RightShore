<template>
  <div id="accordionExample" class="accordion col-12 text-light">
    <CategoryList
      v-for="(c, n) in preferences.data"
      :key="c.title"
      :category="c"
      :name="n"
    />
  </div>
</template>

<script>
import CategoryList from "./CategoryList.vue";
import { usePreferencesStore } from "../store/preferences";

export default {
  name: "QuestionList",
  components: { CategoryList },
  setup() {
    const preferences = usePreferencesStore();
    window.stores = { preferences };
    return {
      preferences,
    };
  },
};
</script>
