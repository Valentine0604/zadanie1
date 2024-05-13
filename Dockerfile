# Etap 1: Budowanie aplikacji
FROM scratch as builder

# Dodanie zawartości systemu plików Alpine Linux jako bazowego obrazu
ADD alpine-minirootfs-3.19.1-aarch64.tar /

# Aktualizacja pakietów, instalacja Node.js i npm, czyszczenie cache
RUN apk update && apk upgrade && apk add --no-cache nodejs=20.12.1-r0 npm=10.2.5-r0 && rm -rf /etc/apk/cache 

# Dodanie użytkownika i grupy 'node' oraz przejście do kontekstu użytkownika 'node'
RUN addgroup -S node && adduser -S node -G node 
USER node 

# Ustawienie katalogu roboczego
WORKDIR /home/node/app 

# Skopiowanie plików aplikacji oraz pliku package.json
COPY --chown=node:node App.js ./App.js
COPY --chown=node:node package.json ./package.json

# Instalacja zależności aplikacji
RUN npm install 

# Etap 2: Uruchomienie aplikacji w środowisku produkcyjnym
FROM node:22-alpine

# Ustawienie zmiennej środowiskowej VERSION lub domyślnej wartości v1.0.0
ARG VERSION
ENV VERSION=${VERSION:-v1.0.0}

# Instalacja Curl do obsługi healthchecka
RUN apk add --update --no-cache curl

# Ustawienie kontekstu użytkownika 'node' i utworzenie katalogu dla aplikacji
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Skopiowanie plików aplikacji z poprzedniego etapu
COPY --from=builder --chown=node:node /home/node/app ./

# Odsłuch na porcie 3000
EXPOSE 3000

# Ustawienie healthchecka
HEALTHCHECK --interval=4s --timeout=20s --start-period=2s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Uruchomienie aplikacji
ENTRYPOINT ["node", "App.js"]
