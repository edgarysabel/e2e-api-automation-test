const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bmj9sm",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
