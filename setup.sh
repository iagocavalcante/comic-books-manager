#!/bin/bash

echo "🚀 Setting up Comic Books Manager Monorepo..."

# Check Node.js version
NODE_VERSION=$(node -v | cut -c 2-)
REQUIRED_MAJOR=22

if [ -z "$NODE_VERSION" ]; then
    echo "❌ Node.js is not installed. Please install Node.js 22 LTS"
    exit 1
fi

CURRENT_MAJOR=$(echo $NODE_VERSION | cut -d. -f1)
if [ "$CURRENT_MAJOR" -lt "$REQUIRED_MAJOR" ]; then
    echo "❌ Node.js $NODE_VERSION detected. Please upgrade to Node.js 22+ LTS"
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected (LTS compatible)"

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