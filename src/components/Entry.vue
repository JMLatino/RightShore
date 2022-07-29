<script>
export default {
  props: ['entry'],
}
</script>

<template>
  <div class="m-3 d-flex">
    <span class="col-3">
      <label for="time-to-market" class="form-label">{{ entry.label }}</label>
    </span>
    <span class="col">
      <button @click=" entry.value = 1" class="rounded-circle p-3 btn btn-success mx-1"></button>
      <button @click=" entry.value = 2" class="rounded-circle p-3 btn btn-warning mx-1"></button>
      <button @click=" entry.value = 3" class="rounded-circle p-3 btn btn-danger mx-1"></button>
    </span>
  </div>
</template>

<style scoped>
</style>
