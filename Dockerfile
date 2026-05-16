# 1. Build Stage
FROM node:22-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm@11.1.2

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# 2. Serve Stage
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
