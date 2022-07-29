<script setup>
import Category from './components/Category.vue';
import { categories } from './constants';
</script>

<template>
  <main class="container shadow p-3 mb-5 bg-body rounded">
    <div>
      <div class="accordion" id="accordionExample">
        <Category v-for="c in categories" :key="c.title" :category="c"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
