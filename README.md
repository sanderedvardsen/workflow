# Workflow Course Assignment

This repository demonstrates the implementation of modern development workflow tools including linting, formatting, commit hooks, and automated testing.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone <your-fork-url>
cd workflow-repo-ca
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

Then add your test credentials to the `.env` file.

## Environment Variables

The following environment variables are required for e2e tests:

- `TEST_EMAIL` - Email address for test user authentication
- `TEST_PASSWORD` - Password for test user authentication

See `.env.example` for the template.

## Available Scripts

### Development
- `npm run dev` - Start Tailwind CSS in watch mode

### Linting and Formatting
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format all files using Prettier

### Testing

#### Unit Tests (Vitest)
- `npm test` - Run all unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:coverage` - Run tests with coverage report

#### End-to-End Tests (Playwright)
- `npm run test:e2e` - Run all e2e tests
- `npm run test:e2e:ui` - Run e2e tests with Playwright UI
- `npm run test:e2e:report` - Show the last test report

## Development Workflow

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically check your code before committing:

- HTML files are formatted with Prettier
- JavaScript files are formatted with Prettier and linted with ESLint

The pre-commit hook will run automatically when you commit changes.

## Testing

### Unit Tests

Unit tests are located in `js/utils/__tests__/` and cover:

- `isActivePath` function - Tests path matching logic
- `getUsername` function - Tests user storage retrieval

### E2E Tests

End-to-end tests are located in `e2e/` and cover:

- **Login Flow** - Tests successful login with valid credentials and error handling with invalid credentials
- **Navigation Flow** - Tests navigating from home page to venue details page

## Project Structure

```
workflow-repo-ca/
├── css/                    # Stylesheets
├── js/                     # JavaScript source files
│   ├── api/               # API interaction modules
│   ├── listeners/         # Event listeners
│   ├── ui/                # UI rendering modules
│   └── utils/             # Utility functions
│       └── __tests__/     # Unit tests
├── e2e/                   # End-to-end tests
├── login/                 # Login page
├── register/              # Registration page
├── venue/                 # Venue details page
├── .env.example           # Environment variables template
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── playwright.config.js   # Playwright configuration
├── vitest.config.js       # Vitest configuration
└── package.json           # Project dependencies and scripts
```

## Tools and Configuration

### ESLint
- Configured to handle ES2022 module syntax
- Supports browser and Node.js globals
- Includes Vitest test globals

### Prettier
- Configured for consistent code formatting
- Integrates with ESLint via eslint-config-prettier

### Husky + lint-staged
- Runs automated checks before commits
- Formats and lints staged files only

### Vitest
- Unit testing framework with jsdom environment
- Supports browser APIs like localStorage

### Playwright
- E2E testing framework
- Configured to run with a local development server
- Tests run in Chromium browser

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Ensure all tests pass (`npm test` and `npm run test:e2e`)
4. Commit your changes (pre-commit hooks will run automatically)
5. Push to your branch and create a pull request
