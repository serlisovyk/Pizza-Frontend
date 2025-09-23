FROM node:20-alpine AS builder
WORKDIR /app/server

COPY server/package*.json server/tsconfig.json ./
RUN npm ci

COPY server/. .
RUN npm run build

FROM node:20-alpine
WORKDIR /app/server

ENV NODE_ENV=production

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/server/dist ./dist

EXPOSE 3000
ENV PORT=3000

CMD ["node", "dist/server.js"]
