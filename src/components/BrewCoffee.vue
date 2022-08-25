<template>
  <button type="button" :disabled="isComplete" class="btn btn-custom mb-3 px-5 py-2" @click="brewStrategy">
    Brew your strategy
  </button>
  <!-- <button type="button" :disabled="isComplete" class="btn btn-custom mb-3 px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="brewStrategy">
    Brew your strategy
  </button>   -->
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
      // window.scrollTo(0, document.body.scrollHeight);
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });      
      // this.preferences.toggleCoffee();
      // const option = this.preferences.answers.q1;
      // this.result = this.coffeeResults[option];
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

<style scoped>
.btn-custom {
  color: white;
  font-size: 1.5em;
  background: #2299DA;;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #17ABDA;
  --bs-btn-active-color: white;
  --bs-btn-active-bg: #17ABDA;
  --bs-btn-active-border-color: #0070AD;
}
</style>
