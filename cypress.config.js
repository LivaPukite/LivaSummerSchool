const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "maksis.paksis@gmail.com",
    password: "123",
    firstName: "Maksis",
    lastName: "Paksis",
    adress: "Berzu iela",
    postalCode: "LV-4801",
    city: "Riga",
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://coe-webstore.tdlbox.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
