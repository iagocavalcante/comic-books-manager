# Comic Books Manager

A monorepo containing a full-stack comic books management system with API and frontend.

## Project Structure

```
comic-books-manager/
├── api-comic-books/          # Node.js/Hapi.js API
├── personal-manage-comic-books/  # Vue.js frontend
├── docker-compose.yml        # Docker orchestration
├── package.json             # Root package.json with workspace config
└── pnpm-workspace.yaml      # PNPM workspace configuration
```

## Prerequisites

- Node.js 22+ LTS
- PNPM 9+
- Docker & Docker Compose (optional)

## Getting Started

### Using PNPM (Recommended)

1. Install dependencies for all workspaces:
```bash
pnpm install
```

2. Run both API and frontend in development mode:
```bash
pnpm dev
```

3. Or run services individually:
```bash
# API only
pnpm dev:api

# Frontend only
pnpm dev:frontend
```

### Using Docker Compose

1. Start all services (API, Frontend, MongoDB):
```bash
docker-compose up -d
```

2. Stop all services:
```bash
docker-compose down
```

## Services

- **API**: http://localhost:3000
- **Frontend**: http://localhost:8080
- **MongoDB**: localhost:27017

## Available Scripts

- `pnpm dev` - Run both API and frontend in development
- `pnpm build` - Build both projects
- `pnpm test` - Run API tests
- `pnpm lint` - Lint both projects

## Technology Stack

### API (api-comic-books)
- Node.js 22 LTS
- Hapi.js 21 (Latest stable)
- MongoDB/Mongoose 8
- Jest 29 (testing)

### Frontend (personal-manage-comic-books)
- Vue.js 3.5 (Latest stable)
- Vue Router 4
- PrimeVue 4 (Modern UI library)
- Vite 6 (Build tool)
- Axios 1.7 (HTTP client)