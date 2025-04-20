# 🔍 Cypress Automation Project: Mentoring Platform

Welcome to the automation test project for the **Mentoring Platform** built using [Cypress](https://www.cypress.io/)! This repository contains automated test cases covering critical user flows to ensure the stability and quality of the application.

---

## 🚀 Tech Stack

- ✅ [Cypress](https://www.cypress.io/)
- 💻 JavaScript
- 📦 Node.js
- 🧪 Mocha & Chai (built-in with Cypress)

---

## 🎯 High-Level Test Scenarios

This section outlines the key scenarios that are being automated. Each scenario represents a different user flow or condition to ensure the application behaves as expected.

- 📝 **Register**
- 🔐 **Login**
- 🔍 **Search for a Mentor**
- 🗕️ **Make a Schedule**
- 🧾 **View Mentoring History**
- 🚪 **Logout**

> 💡 These are high-level flows. Detailed test cases and steps can be found in the test files under `/cypress/e2e/`.

---

## 📁 Project Structure

```
├── cypress
│   ├── e2e
│   │   ├── register.cy.js
│   │   ├── login.cy.js
│   │   ├── searchMentor.cy.js
│   │   └── schedule.cy.js
│   └── support
│       └── commands.js
├── cypress.config.js
└── README.md
```

---

## ▶️ How to Run Tests

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Open Cypress Test Runner**

   ```bash
   npx cypress open
   ```

3. **Run tests in CLI (headless mode)**

   ```bash
   npx cypress run
   ```

4. **Install package Reporting mochawesome**

   ```bash
   npm i mochawesome
   ```

5. **Run Test with Reporting mochawesome**

   ```bash
   npx cypress run --reporter mochawesome
   ```

---

## 📸 Screenshots & Videos

Cypress automatically captures screenshots and videos for failing tests.\
Check the `cypress/screenshots/` and `cypress/videos/` folders after running tests.

---

## ✍️ Author

- **Mohamad Ismi Azis**\
  QA Engineer | Automation Enthusiast\
  [GitHub](https://github.com/ismiazis96) | [LinkedIn](https://linkedin.com/in/ismiazis96)

---

## 📃 License

This project is licensed under the MIT License.
