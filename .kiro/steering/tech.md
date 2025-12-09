# Tech Stack

## Core Technologies

- **Framework**: Vue 3 (Composition API and Options API)
- **Router**: Vue Router 4
- **Build Tool**: Vite 7
- **Language**: JavaScript (ES2021+)

## Development Tools

- **Linting**: ESLint with vue3-recommended rules
- **Formatting**: Prettier
- **Dev Server Port**: 1250

## Common Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 1250)
npm run dev

# Build for production (also creates 404.html for GitHub Pages)
npm run build

# Lint and fix code
npm run lint

# Format code
npm run format
```

## Configuration

- Path alias `@` points to `./src` directory
- ESLint configured with `vue/multi-word-component-names` rule disabled
- Console and debugger warnings only in production
- Prettier integrated with ESLint via eslint-config-prettier

## Deployment

Automated via GitHub Actions (see `.github/workflows/deploy.yml`)
