<template>
  <button type="button" :disabled="!isComplete" class="btn btn-info mb-3" data-toggle="modal" data-target="#exampleModal" @click="brewStrategy">Brew your strategy</button>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { usePreferencesStore } from '../store/preferences'
export default {
  methods: {
    brewStrategy() {
      window.scrollTo(0, document.body.scrollHeight);
      this.preferences.toggleCoffee();

    }
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