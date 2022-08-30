import { defineStore, acceptHMRUpdate } from 'pinia'
import questions from '../assets/questions.json';

export const usePreferencesStore = defineStore({
  id: 'preferences',
  state: () => ({
    preferences: questions,
    answers: {},
    isCoffee: false,
  }),
  getters: {
    data: (state) => state.preferences,
    answered: (state) => {
      return (catIndex) => {
        const countAnswered = state.preferences[catIndex].entries.filter((element) => element.answered === true)
        return countAnswered.length
      }
    },
  },
  actions: {
    setPreference(locator = { index: Number, answer: String }) {
      const { index, answer } = locator;
      this.answers[`q${index}`] = answer;
      this.preferences.forEach((category) => {
        category.entries.forEach((element) => {
          if (element.id == index) element.answered = true;
        })
      })
    },
    toggleCoffee() {
      this.isCoffee = true;
    },
    handleReset() {
      const radioBtn = document.getElementsByClassName("btn-check")
      for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
      }
      this.answers = {}
      console.log(this.answers)
    },
    handleClick(){
      document.getElementById('waveShape').classList.add('animate');
    }    
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreferencesStore, import.meta.hot))
}