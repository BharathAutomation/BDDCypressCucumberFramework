const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "./reports/report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "126",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Cypress Cucumber BDD Framework",
    data: [
      { label: "Project Name", value: "Parabank Automation" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "July 8th 2024 " },
      { label: "Execution End Time", value: "July 8th 2024" },
    ],
  },
});