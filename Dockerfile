# 1. Build Stage
FROM node:22-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm@11.1.2

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app

RUN npm install -g pnpm@11.1.2

COPY --from=builder /app /app

EXPOSE 3000

CMD ["pnpm", "run", "start", "--host", "0.0.0.0", "--port=3000"]
