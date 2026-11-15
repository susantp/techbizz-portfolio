FROM oven/bun:1.4.4 AS builder

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1.4.4-slim AS runner

ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3002
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static

USER bun
EXPOSE 3002
CMD ["bun", "server.js"]
