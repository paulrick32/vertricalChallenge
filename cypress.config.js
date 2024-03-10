const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    urls: {
      challengeFrontOne: "https://the-internet.herokuapp.com/dynamic_loading/1",
      challengeFrontTwo: "https://the-internet.herokuapp.com/challenging_dom",
      challengeBackOne: "http://jsonplaceholder.typicode.com/users",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
