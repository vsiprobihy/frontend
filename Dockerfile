FROM node:20-alpine AS base

WORKDIR /var/www/app

FROM base As build
ENV NODE_ENV build

COPY --chown=node:node package*.json ./
COPY --chown=node:node .prettierrc.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN npm run build && \
    npm pkg delete scripts.prepare && \
    npm ci --omit=dev && npm cache clean --force


FROM base As production
ENV NODE_ENV production
RUN apk add --no-cache bash
RUN apk add --no-cache bash curl

USER node

COPY --chown=node:node --from=build /var/www/app/.env ./
COPY --chown=node:node --from=build /var/www/app/node_modules ./node_modules
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=build /var/www/app/.next ./.next
COPY --chown=node:node --from=build /var/www/app/next.config.mjs ./next.config.mjs
COPY --chown=node:node --from=build /var/www/app/public ./public

COPY ./wait-for-it.sh ./

USER root

RUN chmod +x wait-for-it.sh

USER node

EXPOSE 3000

CMD ["./wait-for-it.sh", "probihy_back_container:8000", "--", "npm", "run", "start"]

# CMD ["npm", "start"]