import { defineStore, acceptHMRUpdate } from "pinia";
import questions from "../data/questions.json";

export const usePreferencesStore = defineStore({
  id: "preferences",
  state: () => ({
    preferences: questions,
    answers: {},
    modalAnswers: [],
    clarification: {
      title: null,
      body: null,
    },
    recommendation: {},
    recommendationOptions: [
      { primary: "Onshore", secondary: "Offshore", percentage: 65 },
      { primary: "Offshore", secondary: "Onshore", percentage: 55 },
      { primary: "Nearshore", secondary: "Onshore", percentage: 55 },
    ],
    gaugeVisible: false,
    coffeeContent: false,
  }),
  getters: {
    data: (state) => state.preferences,
    answered: (state) => {
      return (catIndex) => {
        const countAnswered = state.preferences[catIndex].entries.filter(
          (element) => element.answered === true
        );
        return countAnswered.length;
      };
    },
    modalSelected(state) {
      if (Object.keys(state.answers).includes("q23")) {
        return "Change";
      }
      return "Select";
    },
  },
  actions: {
    setPreference(locator = { index: Number, answer: String }) {
      const { index, answer } = locator;
      this.answers[`q${index}`] = answer;
      if (index !== 23) {
        this.preferences.forEach((category) => {
          category.entries.forEach((element) => {
            if (element.id == index) element.answered = true;
          });
        });
      } else {
        this.preferences.forEach((cate) => {
          cate.entries.forEach((entry) => {
            if (entry.id === index) {
              if (entry.id == index) entry.answered = true;
              this.modalAnswers.push(answer);
            }
          });
        });
      }
    },
    clearForm() {
      this.preferences.forEach((category) =>
        category.entries.forEach((question) => {
          delete question.answered;
          return question;
        })
      );
      this.answers = {};
      this.recommendation = {};
      this.modalAnswers = [];
      this.gaugeVisible = false;
      this.coffeeContent = false;
      window.localStorage.removeItem("preferences");
    },
    handleBrewYourStrategyClick() {
      // Assignment temporarily hardcoded until backend fixed
      this.recommendation = this.recommendationOptions[0];
      document.getElementById("pour-effects").classList.remove("invisible");
      document.getElementById("pour-effects").classList.add("visible");
      let pourElements = document.getElementsByClassName("pour-effect");
      for (let i = 0; i < pourElements.length; i++) {
        pourElements[i].classList.add("pour");
        pourElements[i].classList.add("moved");
      }
      setTimeout(() => {
        document.getElementById("coffee-content").classList.remove("invisible");
        document.getElementById("coffee-content").classList.add("visible");
        this.coffeeContent = true;
        document.getElementById("coffee-content").classList.add("fill");
      }, 1300);
      setTimeout(() => {
        this.gaugeVisible = true;
      }, 4500);
    },
    setExplanation(e) {
      this.clarification.title = e.question;
      this.preferences.forEach((category) => {
        category.entries.forEach((entry) => {
          if (entry.question === e.question) {
            this.clarification.body = entry.clarification;
          }
        });
      });
    },
    clearClarification() {
      this.clarification.title = null;
      this.clarification.body = null;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreferencesStore, import.meta.hot));
}
