# Vertrical Systems Quality Assurance Challenge

## Introduction

This project use Cypress, to automate quality assurance testing for my submission to the Vertrical Systems challenge.


[Challenge Repository](https://github.com/Vertrical/automation-tester-challenge/tree/main?tab=readme-ov-file)

## Pre requisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

# Clone the repository

git clone https://github.com/paulrick32/vertricalChallenge

# Navigate to the project directory
cd vertricalChallenge

# Usage
Before running the tests, ensure that Cypress is installed. Use the following commands:

# Install Cypress and dependencies via npm
npm install

# Running Tests Locally
# Open Cypress Test Runner
npx cypress open

# Running Headless Tests
To run tests in headless mode (non-interactive), use:
npx cypress run

##Tests

## Backend Tests

- **Location:** `cypress\e2e\back-end`
- **Description:** Tests related to backend functionality.

## Frontend Tests

- **Location:** `cypress\e2e\front-end`
- **Description:** Tests covering the frontend features.

## JSON Schema Fixtures

- **Location:** `cypress\fixtures\schemas`
- **Schemas:**
  - `usersSchema`: JSON schema for user-related data.

  
## Scenario Tests:

For detailed scenario tests, refer to the [Scenario Tests](https://docs.google.com/document/d/1XWrdaqBoMAkWulxpAHwbm42RGVuF_B-O06oMInXvyGc/edit?usp=sharing) 