FROM node:20-alpine AS builder
WORKDIR /app/server

COPY server/package*.json ./
RUN npm ci

COPY server/. .
RUN npm run build

RUN npm prune --omit=dev

FROM node:20-alpine
WORKDIR /app/server

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/server/package*.json ./
COPY --from=builder /app/server/node_modules ./node_modules
COPY --from=builder /app/server/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.js"]
