const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true, // fungsi buat rekam saat running
  videoCompression: 32,
  watchForFileChanges: false, // fungsi buat otomatis jalan saat di save
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  experimentalStudio: true,  //ini agar bisa di jalankan record secara otomatis code di buat.
  e2e: {
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2Fmentoring',
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
