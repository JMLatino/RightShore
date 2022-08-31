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
        console.log('countAnswered', countAnswered.length)
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
    // handleReset() {
    //   const radioBtn = document.getElementsByClassName("btn-check")
    //   for (let i = 0; i < radioBtn.length; i++) {
    //     radioBtn[i].checked = false;
    //   }
    //   this.answers = {}
    //   // this.preferences.answered(this.category.catIndex) 

    //   document.getElementById('recommendation').innerHTML = "";
    //   document.getElementById('waveShape').classList.remove('animate');
    //   console.log('handleReset')
    // },
    handleClick() {
      document.getElementById('pour-effects').classList.remove('invisible');
      document.getElementById('pour-effects').classList.add('visible');
      let pourElements = document.getElementsByClassName('pour-effect');
      for (let i = 0; i < pourElements.length; i++) {
        pourElements[i].classList.add('pour')
        pourElements[i].classList.add('pour')
        pourElements[i].classList.add('moved')
      }

      setTimeout(() => {
        document.getElementById('coffee-content').classList.remove('invisible');
        document.getElementById('coffee-content').classList.add('visible');
        document.getElementById('coffee-content').classList.add('fill');
      }, 1300)
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreferencesStore, import.meta.hot))
}