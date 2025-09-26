#!/bin/bash

echo "🚀 Setting up Comic Books Manager Monorepo..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo "✅ Setup complete!"
echo ""
echo "Available commands:"
echo "  pnpm dev          - Run both API and frontend"
echo "  pnpm dev:api      - Run API only"
echo "  pnpm dev:frontend - Run frontend only"
echo "  docker-compose up - Run with Docker"
echo ""
echo "Services will be available at:"
echo "  API: http://localhost:3000"
echo "  Frontend: http://localhost:8080"