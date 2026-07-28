# Multi-stage Dockerfile for Next.js (production)

# 1) Install dependencies
FROM node:22-alpine AS deps
WORKDIR /app

# Install OS deps required by Next.js (for sharp etc.)
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./

# Prefer npm if there is a package-lock, otherwise fall back to pnpm/yarn if present.
RUN if [ -f package-lock.json ]; then \
      npm ci --legacy-peer-deps; \
    elif [ -f pnpm-lock.yaml ]; then \
      corepack enable && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      corepack enable && yarn install --frozen-lockfile; \
    else \
      npm install --legacy-peer-deps; \
    fi

# 2) Build stage
FROM node:22-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 3) Production runtime image
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Next.js telemetry disabled in containers by default
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy only the necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Copy node_modules from deps (smaller than from builder in many cases)
COPY --from=deps /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

# Use Next.js built-in server
CMD ["npm", "run", "start"]
