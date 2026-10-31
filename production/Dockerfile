# Base image
FROM node:22-alpine AS base

# DEVELOPMENT
FROM base AS development

ENV NODE_ENV=development
ENV PORT=3000

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["node", "server.js"]


# STAGING
FROM base AS staging

ENV NODE_ENV=staging
ENV PORT=4000

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . .

RUN chown -R node:node /app

USER node

EXPOSE 4000

CMD ["node", "server.js"]


# PRODUCTION
FROM base AS production

ENV NODE_ENV=production
ENV PORT=5000

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . .

RUN chown -R node:node /app

USER node

EXPOSE 5000

CMD ["node", "server.js"]
