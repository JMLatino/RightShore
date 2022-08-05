<template>
  <button type="button" :disabled="!isComplete" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="brewStrategy">
    Brew your strategy
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{result.title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{result.description}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  data() {
    return {
      coffeeResults: [
        {
          title: 'India',
          description: 'This is India...',
        },
        {
          title: 'Poland',
          description: 'This is Poland...',
        },
        {
          title: 'Netherlands',
          description: 'This is the Netherlands...',
        }
      ],
      result: {}
    }
  },
  methods: {
    brewStrategy() {
      window.scrollTo(0, document.body.scrollHeight);
      this.preferences.toggleCoffee();
      const option = this.preferences.answers.q1;
      this.result = this.coffeeResults[option];
    },
  },
  computed: {
    isComplete() {
      return Object.keys(this.preferences.answers).length === 24;
    }
  },
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