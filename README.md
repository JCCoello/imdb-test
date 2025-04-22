# IMDb Test Automation Project (Playwright & TypeScript)

This project provides a basic example of UI test automation targeting the IMDb website ([https://www.imdb.com/](https://www.imdb.com/)). It serves as an entry point for learning automation using **Playwright** with **TypeScript** and implementing the **Page Object Model (POM)** pattern.

## Purpose

The primary goal is to demonstrate:

- Setting up a Playwright project with TypeScript.
- Creating simple Page Objects (`pages/`) to encapsulate page interactions.
- Writing basic end-to-end tests (`tests/`) using the Page Objects.
- Running tests and viewing reports.

## Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/) (with npm)
- Page Object Model (POM) Design Pattern

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended) installed on your system. npm (Node Package Manager) is included with Node.js.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JCCoello/imdb-test.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd imdb-test
    ```
3.  Install the necessary dependencies (this will also download the Playwright browser binaries):
    ```bash
    npm install
    ```

### Running Tests

- To run all tests in headless mode (no browser window shown):
  ```bash
  npx playwright test
  ```
- To run tests with the browser window visible (useful for debugging):
  ```bash
  npx playwright test --headed
  ```
- To view the HTML report generated after a test run:
  ```bash
  npx playwright show-report
  ```

## Project Structure

- `pages/`: Contains Page Object Model classes (e.g., `HomePage`, `SearchResultsPage`) representing different pages or components of the IMDb site. Locators and interaction methods reside here.
- `tests/`: Contains the test specification files (`*.spec.ts`). These files use the Page Objects to define test steps and assertions.
- `playwright.config.ts`: The main configuration file for Playwright (defines browsers, base URL, timeouts, reporter settings, etc.).
- `package.json`: Lists project dependencies and available npm scripts.
- `README.md`: This file.
