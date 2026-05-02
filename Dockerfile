# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (layer-cached when package files don't change)
COPY package*.json ./
RUN npm ci

# Copy source and build the VitePress documentation site
COPY . .
RUN npm run docs:build

# ─── Stage 2: Serve ──────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS serve

# Copy compiled docs from the build stage
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

# Custom nginx configuration (SPA routing + gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
