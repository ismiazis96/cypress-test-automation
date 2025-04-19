🔍 Cypress Automation Project: Mentoring Platform

Welcome to the automation test project for the Mentoring Platform built using Cypress! This repository contains automated test cases covering critical user flows to ensure the stability and quality of the application.

🚀 Tech Stack

✅ Cypress

💻 JavaScript

📦 Node.js

🧪 Mocha & Chai (built-in with Cypress)

🎯 High-Level Test Scenarios

This section outlines the key scenarios that are being automated. Each scenario represents a different user flow or condition to ensure the application behaves as expected.

📝 Register

🔐 Login

🔍 Search for a Mentor

🗕️ Make a Schedule

📤 Send a Message

🧾 View Mentoring History

🚪 Logout

💡 These are high-level flows. Detailed test cases and steps can be found in the test files under /cypress/e2e/.

📁 Project Structure

├── cypress
│ ├── e2e
│ │ ├── register.cy.js
│ │ ├── login.cy.js
│ │ ├── searchMentor.cy.js
│ │ └── schedule.cy.js
│ └── support
│ └── commands.js
├── cypress.config.js
└── README.md

▶️ How to Run Tests

Install dependencies

npm install

Open Cypress Test Runner

npx cypress open

Run tests in CLI (headless mode)

npx cypress run

📸 Screenshots & Videos

Cypress automatically captures screenshots and videos for failing tests.Check the cypress/screenshots/ and cypress/videos/ folders after running tests.

✍️ Author

Your NameQA Engineer | Automation EnthusiastGitHub | LinkedIn

📃 License

This project is licensed under the MIT License.
