<script>
export default {
  props: ['entry'],
}
</script>

<template>
  <div class="m-3 d-flex">
    <label for="time-to-market" class="form-label col-2">{{ entry.label }}</label>
    <span>
      <button class="rounded-circle p-3 btn btn-success mx-1"></button>
      <button class="rounded-circle p-3 btn btn-warning mx-1"></button>
      <button class="rounded-circle p-3 btn btn-danger mx-1"></button>
    </span>
  </div>
</template>

<style scoped>
</style>
