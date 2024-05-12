# Etap 1: Budowanie aplikacji
FROM node:alpine AS builder

WORKDIR /home/node/app

COPY App.js package.json ./

RUN npm install --only=production

# Etap 2: Uruchomienie aplikacji w środowisku produkcyjnym
FROM node:alpine

LABEL maintainer="Ewelina Sałata"

ARG VERSION
ENV VERSION=${VERSION:-v1.0.0}

RUN apk add --update --no-cache curl

WORKDIR /home/node/app

COPY --from=builder /home/node/app .

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["node", "App.js"]
