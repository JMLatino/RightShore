<template>
  <div>
    <Category v-for="(c,n) in myJson" :key="c.title" :category="c" :name="n"/>
  </div>
  <!-- <ul>
    <li v-for="message in myJson" :key="message.id">
      <span>{{ message.question }}</span>
      <button v-for="answer in message.answers"
      :key="answer" @click="answer"
      class="p-3 btn btn-success mx-1">
        {{ answer }}
      </button>
    </li> -->
  <!-- </ul> -->
</template>

<script>
import Category from './Category.vue';
import questions from '../assets/questions.json';
export default {
  components: { Category },
  data(){
    return {
      myJson: questions
    }
  }
}
</script>

<style>

</style>